const Level = require("../../config/database/mongodb/LevelSchema");
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    if(!args[0]) return message.quote(`<:hm_error:812689130043211787>  ›  ${message.author}, Você não escolheu se deseja ativar ou desativar as mensagens de levelup, para isso digite **h!levelup on** ou **h!levelup off**`)
    // Se off
    if(args[0] == "off") {
        Level.findOneAndDelete({
            _id: message.guild.id
        }, async (err, deletar) => {
            if(deletar) {
              const dd = new Discord.MessageEmbed()
                .setTitle('<:hm_levelup:815975265728593960> | Sucesso')
                .setDescription('> As Mensagens de levelup foram desativadas')
                .setColor('GREEN')
              message.quote(dd);
            } else {
              const erro = new Discord.MessageEmbed()
                .setTitle('<:hm_levelup:815975265728593960> | Erro')
                .setDescription('> As mensagens de levelup não estão ativas nesse servidor')
                .setColor('RED')
              message.quote(erro)
            }
        });
    };
    // Se on
    if(args[0] == "on") {
        Level.findOne({
            _id: message.guild.id
        }, async (err, deletar) => {
            if(err) console.log(err);
            if(!deletar) {
                const sucesso = new Discord.MessageEmbed()
                .setTitle('<:hm_levelup:815975265728593960> | Sucesso')
                .setDescription('> As Mensagens de levelup foram ativadas')
                .setColor('GREEN')
                message.quote(sucesso)
            } else {
                const erro = new Discord.MessageEmbed()
                  .setTitle('<:hm_levelup:815975265728593960> | Erro')
                  .setDescription('> As mensagens de levelup já estão ativas nesse servidor')
                  .setColor('RED')
                message.quote(erro)
              }
            if(!deletar) {
                const newdc = new Level({
                    _id: message.guild.id,
                });
                await newdc.save().catch(e => console.log(e));
        }
    });
}}
exports.help = {
    name: 'levels',
    aliases: ['levelmessage', 'messages', 'levelup'],
    category: 'acoes',
}