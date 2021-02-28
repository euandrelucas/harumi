const backup = require("../../../custom-npms/discord-backup/lib/index");
const {MessageEmbed} = require("discord.js")

exports.run = async (client, message, args) => {

    if(!message.member.hasPermission('ADMINISTRATOR')){
        return message.quote(`<:hm_error:812689130043211787>  ›  ${message.author}, Você precisa ter as permissões \`ADMINISTRATOR\` para gerenciar backups`);
    }

    message.quote(`<a:hm_carregando:812686174342348822>  ›  ${message.author}, Processando...`).then(async msg => {

    backup.create(message.guild).then((backupData) => {
        const embed = new MessageEmbed()
        .setAuthor(`Backup | ${message.guild.name}`, message.guild.iconURL())
        .setDescription(`O ID do backup é **${backupData.id}**, para carregar utilize **h!b-load ${backupData.id}**`)
        .setColor("ff0062")
        message.author.send(embed).catch((e) => {
            message.quote(embed).then(m => {
                message.react("✅")
                msg.delete()
            })
            }).then(m => {
                message.react("✅")
                msg.delete()
            })
        });
    })
}
exports.help = {
    name: 'b-create',
    aliases: ['backup-create', 'b-c', 'backup-c'],
    category: "moderation",
  }