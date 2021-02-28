const backup = require("../../../custom-npms/discord-backup/lib/index");

exports.run = async (client, message, args) => {

    if(!message.member.hasPermission('ADMINISTRATOR')){
        return message.quote(`<:hm_error:812689130043211787>  ›  ${message.author}, Você precisa ter as permissões \`ADMINISTRATOR\` para gerenciar backups`);
    }

    let backupID = args[0];
        if(!backupID){
            return message.quote(`<:hm_error:812689130043211787>  ›  ${message.author}, Você precisa especificar o **ID** do backup`);
        }

        backup.fetch(backupID).then(async () => {
            message.quote(`<:hm_warning:815577279308365894>  ›  ${message.author}, Quando o backup for carregado, todos os canais, funções, etc. serão substituídos! Digite \`confirmar\` para confirmar`);
                await message.channel.awaitMessages(m => (m.author.id === message.author.id) && (m.content === "confirmar"), {
                    max: 1,
                    time: 20000,
                    errors: ["time"]
                }).catch((err) => {
                    return message.quote(`<:hm_error:812689130043211787>  ›  ${message.author}, Acabou o tempo! Carregamento do backup cancelado`);
                });
                message.quote(`:white_check_mark:  ›  ${message.author}, Começando a carregar o backup`);
                backup.load(backupID, message.guild).then(() => {
                    backup.remove(backupID);
                }).catch((err) => {
                    return message.author.send(`<:hm_error:812689130043211787>  ›  ${message.author}, Desculpe mas ocorreu um erro... Verifique se tenho permissões de administrador!`);
                });
        }).catch((err) => {
            console.log(err);
            return message.quote(`<:hm_error:812689130043211787>  ›  Nenhum backup relacionado a **${backupID}** foi encontrado`);
        });
}
exports.help = {
    name: 'b-load',
    aliases: ['backup-load', 'b-l', 'backup-l'],
    category: "moderation",
}