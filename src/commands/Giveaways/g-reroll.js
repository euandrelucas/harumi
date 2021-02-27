const ms = require("ms")

const giveaway = {}

exports.run = async (client, message, args) => {

    if(!message.member.hasPermission('MANAGE_GUILD') && !message.member.roles.cache.some((r) => r.name === "GiveawayMOD")){
        return message.quote(`<:hm_error:812689130043211787>  ›  ${message.author}, Você precisa ter as permissões \`MANAGE_GUILD\` para gerenciar giveaways`);
    }

    let giveaway = 
    client.giveawaysManager.giveaways.find((g) => g.prize === args.slice(0).join(' ')) ||
    client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

    if(!giveaway) return message.quote(`<:hm_error:812689130043211787>  ›  ${message.author}, Não encotrei nenhum sorteio relacionado a \`${args.join (' ')}\``);

    client.giveawaysManager.reroll(giveaway.messageID)
    .then(() => {
        message.quote(`🎁  ›  ${message.author}, Resorteado`);
    })
    .catch((e) => {
        if(e.startsWith(`Giveaway with message ID ${giveaway.messageID} is not ended.`)){
            message.quote(`<:hm_error:812689130043211787>  ›  ${message.author}, Giveaway ainda não encerrado`);
        } else {
            console.error(e);
            message.quote(`<:hm_error:812689130043211787>  ›  ${message.author}, Ocorreu um erro ao executar este comando`);
        }
    });

};
exports.help = {
  name: 'g-reroll',
  aliases: ['giveaway-reroll', 'g-r', 'giveaway-r'],
  category: "giveaways",
}