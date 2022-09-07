const fetch = require('node-fetch');
const rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })

require('dotenv').config();

var rpcdata = require('./src/variables');
rpcdata.api_key = process.env.API_KEY;

var lastServerCount = "0";

function refreshRPC(rpcdata) {
    fetch(`https://top.gg/api/bots/${rpcdata.bot_id}/stats`, {
        headers: { "Authorization": rpcdata.api_key }
    })
        .then(response => response.json())
        .then(data => {
            if (data && data.server_count) {
                let servercount = Number(data.server_count).toLocaleString();
                lastServerCount = servercount;
                client.setActivity({
                    state: `${servercount} servers`,
                    details: rpcdata.description,
                    largeImageText: rpcdata.assets.large_text,
                    largeImageKey: rpcdata.assets.large_image,
                    buttons: rpcdata.buttons,
                });
            } else {
                client.setActivity({
                    details: rpcdata.description,
                    largeImageText: rpcdata.assets.large_text,
                    largeImageKey: rpcdata.assets.large_image,
                    buttons: rpcdata.buttons,
                });
            }
        }).catch((e) => {
            console.log(`[THIS ERROR HAS BEEN HANDLED, YOUR STATUS HAS NOT CRASHED]\n${e.toString()}`);

            client.setActivity({
                state: `${lastServerCount} servers`,
                details: rpcdata.description,
                largeImageText: rpcdata.assets.large_text,
                largeImageKey: rpcdata.assets.large_image,
                buttons: rpcdata.buttons,
            });
        });
}

client.on('ready', () => {
    console.log("[START] Discord RPC with Server Count started!");

    refreshRPC(rpcdata);

    setInterval(() => {
        refreshRPC(rpcdata);
    }, 120_000);
})

client.login({ clientId: rpcdata.bot_id }).catch(console.error);