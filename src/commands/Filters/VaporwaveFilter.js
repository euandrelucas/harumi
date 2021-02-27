exports.run = async (client, message, args) => {
    const player = message.client.manager.players.get(message.guild.id);

    if(!player) return message.quote(`<:hm_error:812689130043211787>  ›  ${message.author}, Não estou tocando nada nesse servidor, mas posso tocar se você quiser, basta digitar \`h!play <link | nome da música>\``)

    const { channel } = message.member.voice

    if(!channel) return message.quote(`<:hm_error:812689130043211787>  ›  ${message.author} Por favor, se conecte a algum canal de voz`)

    if(channel.id !== player.voiceChannel) return message.quote(`<:hm_error:812689130043211787>  ›  ${message.author}, Você precisa estar no mesmo canal de voz para executar esse comando`)

    if(player.nightcore == false) {
        player.setVaporwave(true)
        return message.quote(`🔊  ›  ${message.author}, O filtro \`NightCore\` foi ativado`)
    }

    if(player.nightcore == true) {
        player.setVaporwave(false)
        return message.quote(`🔊  ›  ${message.author}, O filtro \`NightCore\` foi desativado`)
    }

}
exports.help = {
    name: 'vaporwave',
    aliases: ['vaporonda', 'vapor'],
    category: "filters",
}