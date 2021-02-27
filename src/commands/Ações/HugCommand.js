const {Random} = require('something-random-on-discord');
const {MessageEmbed} = require('discord.js');
const random = new Random();

exports.run = async (client, message, args) => {
    if(!args[0]) return message.quote(`<:hm_error:812689130043211787>  ›  ${message.author}, Você precisa mencionar algum membro para abraçar`)

    const user = message.mentions.users.first() || await client.users.fetch(args[0])

    message.quote(`<a:hm_carregando:812686174342348822>  ›  ${message.author}, Processando...`).then(async msg => {
    
    let data = await random.getAnimeImgURL('hug');
    // Easter egg user  
    if(user.id == message.author.id) {
        let embed = new MessageEmbed()
        .setDescription(`**${message.author.username}** está tão carente que se deu um abraço`)
        .setColor("006fcf")
        .setImage(data)

        message.quote(embed).then(m => {
            msg.delete()
        })

    }
    // Easter egg harumi
    if(user.id == client.user.id) {
        if(!["717766639260532826", "742798447253651506"].includes(message.author.id)) return message.quote(`<:hm_error:812689130043211787>  ›  ${message.author}, Você não é meu pai para poder me abraçar >:(`).then(m => {
            msg.delete()
        })
        
        let embed = new MessageEmbed()
        .setDescription(`**${message.author.username}** deu um abraço em mim`)
        .setColor("006fcf")
        .setImage(data)
    
        message.quote(embed).then(m => {
            msg.delete()
        })
    }
    // Comando normal
    if(user.id !== message.author.id && user.id !== client.user.id) {
    let embed = new MessageEmbed()
    .setDescription(`**${message.author.username}** deu um abraço em **${user.username}**`)
    .setColor("006fcf")
    .setImage(data)

    message.quote(embed).then(m => {
        msg.delete()
    })
    }

    })
}
exports.help = {
    name: 'hug',
    aliases: ['abraçar'],
    category: 'acoes',
}