exports.run = async (client, message, args) => {
    const player = message.client.manager.players.get(message.guild.id);
    if(!player) return message.reply(`<:hm_error:812689130043211787>  ›  ${message.author}, Não estou tocando nada nesse servidor, mas posso tocar se você quiser, basta digitar \`h!play <link | nome da música>\``)

    const { channel } = message.member.voice

    if(!channel) return message.reply(`<:hm_error:812689130043211787>  ›  ${message.author}, Por favor se conecte a algum canal de voz.`);
    if(channel.id !== player.voiceChannel) return message.reply(`<:hm_error:812689130043211787>  ›  ${message.author}, Você precisa estar no mesmo canal de voz para executar esse comando`);

    if(player.queue.size <= 1) return message.quote(`<:hm_error:812689130043211787>  ›  ${message.author}, Não tem mais nada na fila, ultilize \`h!stop\` para parar de tocar`)
    
    return player.stop();
}
exports.help = {
    name: 'skip',
    aliases: ['s', 'pular'],
    category: "music",
  }