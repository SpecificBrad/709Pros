import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://ajvitritgrzcauevljka.supabase.co";
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SB_SERVICE_ROLE_KEY")!;

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

// Map Fillout question NAME → leads table column
// Using names instead of IDs to avoid case-sensitivity issues with Fillout's random IDs
const NAME_MAP: Record<string, string> = {
  "Full Name": "full_name",
  "Phone number": "phone",
  "Email": "email",
  "Service": "service",
  "City/Service Area": "service_area",
  "Timeline": "timeline",
  "Budget range": "budget_range",
  "Are you the homeowner?": "homeowner",
  "Property type": "property_type",
  "Postal code": "postal_code",
  "Project Photos": "photo_urls",
  "Describe the Issue": "description",
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
    console.log("Fillout payload:", JSON.stringify(payload));
    const questions = payload?.submission?.questions ?? [];

    // Extract fields by question name
    const row: Record<string, unknown> = {};
    for (const q of questions) {
      const col = NAME_MAP[q.name];
      if (col) {
        if (col === "homeowner") {
          const val = typeof q.value === "string" ? q.value.toLowerCase() : "";
          row[col] = val === "yes" || val === "true";
        } else if (col === "photo_urls") {
          row[col] = Array.isArray(q.value) ? q.value : [];
        } else {
          row[col] = q.value ?? null;
        }
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
