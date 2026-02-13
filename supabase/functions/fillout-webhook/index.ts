import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://ajvitritgrzcauevljka.supabase.co";
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SB_SERVICE_ROLE_KEY")!;

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

// Map Fillout question ID → leads table column
const FIELD_MAP: Record<string, string> = {
  gBFz: "full_name",
  "5M4s": "phone",
  hhBy: "email",
  jmOc: "service",
  oF6y: "service_area",
  iJcBc: "timeline",
  vRdb: "budget_range",
  f3j8: "homeowner",
  pOm7: "property_type",
  dyap: "postal_code",
  "2Aa4": "photo_urls",
};

Deno.serve(async (req) => {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const payload = await req.json();
    const questions = payload?.submission?.questions ?? [];

    // Extract fields by question ID
    const row: Record<string, unknown> = {};
    for (const q of questions) {
      const col = FIELD_MAP[q.id];
      if (col) {
        if (col === "homeowner") {
          row[col] = q.value === "Yes" || q.value === true;
        } else if (col === "photo_urls") {
          row[col] = Array.isArray(q.value) ? q.value : [];
        } else {
          row[col] = q.value ?? null;
        }
      }
      // Match description by name since question ID is unknown
      if (q.name === "Describe the Issue" || q.name === "Description") {
        row["description"] = q.value ?? null;
      }
    }

    const { error } = await supabase.from("leads").insert(row);

    if (error) {
      console.error("Supabase insert error:", error);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ data: "Accepted" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Webhook error:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
});
