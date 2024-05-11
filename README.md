# Scheduled message bot for Telegram

Template to create bot's that send you notification based on cronjob

## Deploying

1. Deploy it on Cloudflare Workers platform via `pnpm run deploy`.
2. Don't forget to define `BOT_TOKEN` and `CHAT_ID` secret variables via Cloudflare Dashboard

You can find `CHAT_ID` [using this guide](https://stackoverflow.com/a/50736131/12277907).

## For development proposes

1. Fill secret variables into `.dev.vars` in dotenv format.
2. Run `pnpm run dev` and go to `http://localhost:8000/__scheduled?cron=*+*+*+*+*` to trigger cronjob.
