const {client} = require("../../bot");

client.on("voiceStateUpdate", async (oldState, newState) => {
    const player = client.manager.players.get(newState.guild.id)

    if(!player) return;

    const channel = client.channels.cache.get(player.textChannel)

    let canal = player.options.voiceChannel

    let guilda = player.options.guild

    if(client.guilds.cache.get(guilda).channels.cache.get(canal).members.size == 1) {
        channel.send(`😔  ›  Infelizmente fiquei sozinha no canal de voz, estou saindo.`) 
        return player.destroy()
    }
})