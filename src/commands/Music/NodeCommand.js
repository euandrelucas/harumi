const player = require("../../config/json/player.json")
const {MessageEmbed} = require("discord.js");
const API = require("../../utils/API");

exports.run = async (client, message, args) => {
    const node = client.manager.nodes.get(player.lavalink.host)
    let embed = new MessageEmbed()
    embed.setThumbnail("https://media.discordapp.net/attachments/812672303640084521/815296036591108146/picture.png")
    embed.setColor("F47FFF")
    embed.setAuthor(client.user.username + " | Node Stats", client.user.displayAvatarURL({ size: 2048 }))
    embed.setDescription(`\`\`\`diff\n\n- [ NODE ]
--- Uptime ${node.stats.uptime === 0 ? 'Offline' : API.time2(node.stats.uptime)}
--- Players ${node.stats.playingPlayers}
--- Uso de memoria ${API.bytes(node.stats.memory.used).value}${API.bytes(node.stats.memory.used).unit}\`\`\``)
    await message.quote(embed)
}
exports.help = {
    name: 'nodes',
    aliases: ['nodesinfo'],
    category: "music",
}