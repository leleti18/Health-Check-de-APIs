# API Healthcheck (n8n + Tests)

Lightweight project to demonstrate API monitoring + automated alerts using **n8n** and a small **Node.js** health-check script.

## What it shows
- How to run periodic health checks with n8n (Cron trigger + HTTP Request + IF + alert nodes)
- A simple local script (Node + axios) to run health checks as part of CI
- Example endpoints and instructions to configure alerts (Telegram / Email placeholders)

## Files
- `n8n/api_healthcheck_flow.json` — workflow to import in n8n
- `endpoints.json` — list of endpoints to check (edit with your URLs)
- `tests/check_endpoints.js` — Node script that runs the checks and exits non-zero if any unhealthy
- `package.json` — scripts and dependencies

## Quick start (local)
1. Clone repo
2. Install:
   ```bash
   npm install
   ```
3. Edit `endpoints.json` to include the APIs you want to monitor.
4. Run the quick check:
   ```bash
   npm run check
   ```

## Quick start (n8n)
1. Open n8n (cloud or local).
2. Import `n8n/api_healthcheck_flow.json` (Workflows → Import from file).
3. Open the workflow and review the **Load Targets** function node — replace the example targets with dynamic source (Google Sheet, HTTP Request, etc.) if desired.
4. Configure the **Send Email** and **Telegram** nodes with your credentials (SMTP / Telegram Bot token).
5. Activate the workflow. It will run on a cron schedule and send alerts for non-200 responses.

## How to use in CI (GitHub Actions)
- Create a workflow that checks out the repo, installs dependencies, and runs `npm test`.
- If the script exits non-zero, the workflow will fail and signal a problem.

## Next steps (ideas to expand)
- Store incidents in Google Sheets or a Postgres DB
- Add retry/backoff logic for flaky endpoints
- Add Slack / Teams alerts and aggregated daily reports
- Add authentication support (Bearer tokens) per endpoint

## Author
Dhionye — QA Engineer / Automation
