const {Random} = require('something-random-on-discord');
const {MessageEmbed} = require('discord.js');
const random = new Random();

exports.run = async (client, message, args) => {
    if(!args[0]) return message.quote(`<:hm_error:812689130043211787>  ›  ${message.author}, Você precisa mencionar algum membro para bater`)

    const user = message.mentions.users.first() || await client.users.fetch(args[0])

    message.quote(`<a:hm_carregando:812686174342348822>  ›  ${message.author}, Processando...`).then(async msg => {
    
    let data = await random.getAnimeImgURL('slap');
    // Easter egg user  
    if(user.id == message.author.id) {
        let embed = new MessageEmbed()
        .setDescription(`**${message.author.username}** está tão bravo que se deu um tapa`)
        .setColor("006fcf")
        .setImage(data)

        message.quote(embed).then(m => {
            msg.delete()
        })

    }
    // Easter egg harumi
    if(user.id == client.user.id) {
        let embed2 = new MessageEmbed()
        .setDescription(`**${client.user.username}** deu um tapa em **${message.author.username}**`)
        .setColor("006fcf")
        .setImage(data)

        if(!["717766639260532826", "742798447253651506"].includes(message.author.id)) return message.quote(`<:hm_error:812689130043211787>  ›  ${message.author}, Você não é meu pai para poder me castigar >:(`).then(m => {
            message.quote(embed2)
            msg.delete()
        })
        
        let embed = new MessageEmbed()
        .setDescription(`**${message.author.username}** deu um tapa em mim`)
        .setColor("006fcf")
        .setImage(data)
    
        message.quote(embed).then(m => {
            msg.delete()
        })
    }
    // Comando normal
    if(user.id !== message.author.id && user.id !== client.user.id) {
    let embed = new MessageEmbed()
    .setDescription(`**${message.author.username}** deu um tapa em **${user.username}**`)
    .setColor("006fcf")
    .setImage(data)

    message.quote(embed).then(m => {
        msg.delete()
    })
    }

    })
}
exports.help = {
    name: 'slap',
    aliases: ['tapa'],
    category: 'acoes',
}