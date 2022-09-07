const { DISCORD_BOT_ID, DISCORD_BOT_INVITE, BOT_NAME, DESCRIPTION } = require('../config.json')

module.exports = {
    "bot_id": `${DISCORD_BOT_ID}`,
    "description": `${DESCRIPTION}`,
    "assets": {
        "large_image": "large",
        "large_text": `Invite ${BOT_NAME}`
    },
    "buttons": [{
        "label": "Invite",
        "url": `${DISCORD_BOT_INVITE}`
    }, {
        "label": "Vote",
        "url": `https://top.gg/bot/${DISCORD_BOT_ID}/vote`
    }]
}