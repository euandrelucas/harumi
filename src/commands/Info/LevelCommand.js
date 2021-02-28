const Levels = require("discord-xp");
const Canvas = require("discord-canvas")

exports.run = async (client, message, args, prefix) => {

    const target = message.mentions.users.first() || message.author;

    const user = await Levels.fetch(target.id, message.guild.id);

    if(!user) return message.quote(`<:hm_error:812689130043211787>  ›  ${message.author}, Este usuário ainda não tem xp no servidor`)

    const append = Levels.xpFor(user.level + 1)

    message.quote(`<a:hm_carregando:812686174342348822>  ›  ${message.author}, Processando...`).then(async msg => {

    let image = await new canvas.RankCard()
    .setAddon("xp", false)
    .setAddon("rank", false)
    .setAvatar(target.avatarURL)
    .setLevel(user.level)
    .setReputation(0)
    .setRankName("professional")
    .setUsername(target.username)
    .setBadge(1, "gold")
    .setBadge(3, "diamond")
    .setBadge(5, "silver")
    .setBadge(6, "bronze")
    .setBackground("https://www.significadofacil.com/wp-content/uploads/2019/07/background-1000x500.jpg")
    .toAttachment();

    let attachment = new MessageAttachment(image.toBuffer(), "rank-card.png");

    message.quote(attachment).then(m => {
        msg.delete()
    })
    })
}
exports.help = { 
    name: 'level', 
    aliases: ['help', 'rank', 'xp'],
    category: 'info'
  }