# Schema & Field Mappings

## Edge Function
- **Name:** `fillout-webhook`
- **Code:** `supabase/functions/fillout-webhook/index.ts`
- **Endpoint:** `https://ajvitritgrzcauevljka.supabase.co/functions/v1/fillout-webhook`
- **Secret:** `SB_SERVICE_ROLE_KEY` (Supabase doesn't allow `SUPABASE_` prefix for custom secrets)
- **JWT Verification:** Disabled (Fillout doesn't send Supabase JWTs)

## Supabase Schema (public.leads)
| Column | Type | Default | Nullable |
|--------|------|---------|----------|
| id | uuid | gen_random_uuid() | NO |
| created_at | timestamptz | now() | YES |
| full_name | text | | YES |
| phone | text | | YES |
| email | text | | YES |
| service | text | | YES |
| service_area | text | | YES |
| timeline | text | | YES |
| budget_range | text | | YES |
| property_type | text | | YES |
| postal_code | text | | YES |
| homeowner | boolean | | YES |
| description | text | | YES |
| photo_urls | jsonb | [] | YES |
| status | text | 'new' | YES |
| contractor_id | uuid | | YES |
| paid | boolean | false | YES |

## Fillout Question Name → DB Column Mapping
The Edge Function matches by question **name** (not ID):
| DB Column | Fillout Question Name |
|-----------|----------------------|
| full_name | Full Name |
| phone | Phone number |
| email | Email |
| service | Service |
| service_area | City/Service Area |
| timeline | Timeline |
| budget_range | Budget range |
| homeowner | Are you the homeowner? |
| property_type | Property type |
| photo_urls | Project Photos |
| postal_code | Postal code |
| description | Describe the Issue |

## Fillout Webhook Payload Structure
Fillout sends a nested structure (NOT flat key-value):
```json
{
  "formId": "...",
  "formName": "...",
  "submission": {
    "submissionId": "...",
    "submissionTime": "...",
    "questions": [
      { "id": "gBFz", "name": "Full Name", "type": "ShortAnswer", "value": "John Doe" }
    ]
  }
}
```
The Edge Function extracts values from `submission.questions` by matching the `name` field (not `id`).

## Make.com (DEPRECATED)
Abandoned due to persistent NULL field mappings. Edge Function replaces it entirely.
- Old webhook URL: `https://hook.us2.make.com/jdjhsdsdu21o2hc554ams7laytfbkrm3`
- Old scenario ID: 4125813 — to be deleted
