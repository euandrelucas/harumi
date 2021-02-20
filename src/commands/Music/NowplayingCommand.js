const API = require("../../utils/API")
const {MessageEmbed} = require("discord.js")
const {porgressBar} = require("music-progress-bar");

exports.run = async (client, message, args) => {

    const player = message.client.manager.players.get(message.guild.id);

    if(!player) return message.quote(`<:hm_error:812689130043211787>  ›  Não estou tocando nada nesse servidor, mas posso tocar se você quiser, basta digitar \`h!play <link | nome da música>\``)

    const { title, duration } = player.queue.current;

    const progressBar = porgressBar({ currentPositon: player.position > 0 ? player.position : "1", endPositon: duration, width: 10, barStyle: "▬", currentStyle: player.playing ? "⚪" : "⚪"  }, { format:" [ <bar> ] " })

    var pause = "⏸️"
    var play = "⏯️"

    let embed = new MessageEmbed()
    .setAuthor(`${client.user.username} | NowPlaying`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
    .setColor("F47FFF")
    .setDescription(`${player.playing ? play : pause} ${title}\n\`${progressBar  <= 60000 ? `${API.time2(player.position)}s` : API.time2(player.position)} / ${API.time2(duration)}\``)
    message.quote({embed})
}
exports.help = {
    name: 'nowplaying',
    aliases: ['np', 'tocando', 'musica', 'música'],
    category: "music",
  }