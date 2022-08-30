# Discord Bot RPC with Server Count
Show your Discord bot's server count on your Discord profile using Top.gg's API with Discord RPC.

## Requirements
1. Your bot must be published and approved on [Top.gg](https://top.gg/bot/new).
2. You must use the [Top.gg API](https://docs.top.gg) in your bot process to post your server count to Top.gg.

## Setup
1. Clone the repo to your PC.
2. Install the NPM packages.
3. Create your `.env` file to use your [Top.gg API key](https://docs.top.gg/api/@reference/).
4. In your `.env` file you need to include `API_KEY=YOUR_TOPGG_BOT_TOKEN`
5. Customize your RPC data in `src/variables.json` to use [rich presence assets from your bot](https://discord.com/developers/applications) (`https://discord.com/developers/applications/:bot_id/rich-presence/assets`).
6. Save your `.env` and `src/variables.json` files.
7. Open your Discord desktop client.
8. Start the process using `node .` or use [PM2](https://pm2.keymetrics.io/) or equivalents.

## Issues
If you are having issues with seting up your server count onto your [Top.gg](https://top.gg/) bot please contact [oops#3013](https://discord.com/users/637501687338106885) on [Discord](https://discord.gg/)
