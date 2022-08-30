# Discord Bot RPC with Server Count Source Code
Show your Discord bot's server count on your Discord profile using Top.gg's API with Discord RPC.

## Requirements
1. Your bot must be published and approved on <a target="_blank" href="https://top.gg/bot/add">Top.gg</a>.
2. You must use the Top.gg API in your bot process to post your server count to <a target="_blank" href="https://docs.top.gg/">Top.gg</a>.

## Setup
1. Clone the repo to your PC.
2. Install the NPM packages.
3. Create your `.env` file to use your <a target="_blank" href="https://docs.top.gg/api/@reference/">Top.gg API key</a>.
4. Customize your RPC data in `src/variables.json` to use <a target="_blank" href="https://discord.com/developers/applications">rich presence assets from your bot</a> (`https://discord.com/developers/applications/:bot_id/rich-presence/assets`).
5. Save your `.env` and `src/variables.json` files.
6. Open your Discord desktop client.
7. Start the process using `node .` or use <a target="_blank" href="https://pm2.keymetrics.io/">PM2</a> or equivalents.
