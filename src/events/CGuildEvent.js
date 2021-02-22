const webhook = require("../config/json/webhooks.json")
const {client} = require("../../bot");

const dlog = new (require("discord.js")).WebhookClient(webhook.cguildlogs.id, webhook.cguildlogs.token)

client.on("guildCreate", async guild => {

    var dono = await client.users.fetch(guild.ownerID)

    const logembed = new (require("discord.js")).MessageEmbed()
    .setAuthor(`${client.user.username} | GuildLog`, client.user.displayAvatarURL({dynamic:true}))
    .addField(`🌎 | Servidor:`, `\`${guild.name} (${guild.id})\``)
    .addField(`👑 | Dono:`, `\`${dono.tag} (${dono.id})\``)
    .addField(`🍿 | Membros:`, `\`${guild.memberCount}/${guild.maximumMembers}\``)
    .setColor("GREEN")
    .setTimestamp()
    .setFooter(`${client.user.username}, desenvolvida por ADG/MrAndre`)
    dlog.send(`+1 Servidor pra conta :sunglasses:`, logembed)

})