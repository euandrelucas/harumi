const {Random} = require('something-random-on-discord');
const {MessageEmbed} = require('discord.js');
const random = new Random();

exports.run = async (client, message, args) => {
    message.quote(`<a:hm_carregando:812686174342348822>  ›  ${message.author}, Processando...`).then(async msg => {
    let data = await random.getAnimeImgURL('cry');
    const embed = new MessageEmbed()
    .setDescription(`**${message.author.username}** está chorando 😔`)
    .setColor("006fcf")
    .setImage(data)
    message.quote(embed).then(m => {
        msg.delete()
    })
    })
}
exports.help = {
    name: 'cry',
    aliases: ['chorar'],
    category: 'acoes',
}