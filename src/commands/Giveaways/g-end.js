exports.run = async (client, message, args) => {

    if(!message.member.hasPermission('MANAGE_GUILD') && !message.member.roles.cache.some((r) => r.name === "GiveawayMOD")){
        return message.quote(`<:hm_error:812689130043211787>  ›  ${message.author}, Você precisa ter as permissões \`MANAGE_GUILD\` para gerenciar giveaways`);
    }

    if(!args[0]) return message.quote(`<:hm_error:812689130043211787>  ›  ${message.author}, Você precisa especificar o ID do sorteio`);
    
    let giveaway = 
    client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
    client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

    if(!giveaway) return message.quote(`<:hm_error:812689130043211787>  ›  ${message.author}, Não encotrei nenhum sorteio relacionado a \`${args.join (' ')}\``);
    
    client.giveawaysManager.edit(giveaway.messageID, {
        setEndTimestamp: Date.now()
    })
    .then(() => {
        message.quote(`🎁  ›  ${message.author}, O Sorteio irá acabar em `+(client.giveawaysManager.options.updateCountdownEvery/1000)+` segundos`);
    })
    .catch((e) => {
        if(e.startsWith(`giveaway with message ID ${giveaway.messageID} is already ended.`)){
            message.quote(`<:hm_error:812689130043211787>  ›  ${message.author}, Giveaway já encerrado`);
        } else {
            console.error(e);
            message.quote(`<:hm_error:812689130043211787>  ›  ${message.author}, Ocorreu um erro ao executar este comando`);
        }
    });

}
exports.help = {
    name: 'g-end',
    aliases: ['giveaway-end', 'g-e', 'giveaway-e'],
    category: "giveaways",
  }