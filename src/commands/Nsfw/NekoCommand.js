const {MessageEmbed} = require("discord.js")
const nekos = require('nekos.life');
const {nsfw} = new nekos();

exports.run = async (client, message, args) => {
    if(!message.channel.nsfw) return message.quote(`<:hm_error:812689130043211787>  ›  ${message.author}, Este comando só pode ser usado em canais **NSFW**`)
    
    const image = (await nsfw.neko())["url"];
    const embed = new MessageEmbed()
    .setColor("ff0000")
    .setURL(image)
    .setImage(image)

    message.quote(embed)

}
exports.help = {
    name: 'neko',
    aliases: ['nekonsfw'],
    category: "nsfw",
}