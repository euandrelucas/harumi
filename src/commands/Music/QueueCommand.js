const {MessageEmbed} = require("discord.js")

exports.run = async (client, message, args) => {

    const player = message.client.manager.players.get(message.guild.id);
    if (!player) return message.quote(`<:hm_error:812689130043211787>  ›  ${message.author}, Não estou tocando nada nesse servidor, mas posso tocar se você quiser, basta digitar \`h!play <link | nome da música>\``);

    const queue = player.queue;

    let embed = new MessageEmbed()
    .setAuthor(`${client.user.username} | Fila`, client.user.displayAvatarURL({dynamic:true}))

    const multiple = 5;
    const page = args.length && Number(args[0]) ? Number(args[0]) : 1;

    const end = page * multiple;
    const start = end - multiple;

    const tracks = queue.slice(start, end);

    if(queue.current) embed.addField("Tocando agora", `[${queue.current.title}](${queue.current.uri}) | \`${player.queue.current.requester.tag}\``);

    if(!tracks.length) embed.setDescription(`Não ha músicas na ${page > 1 ? `página ${page}` : `fila`}.`);
    else embed.setDescription(tracks.map((track, i) => `**${start + (++i)} -** [${track.title}](${track.uri})`).join("\n"));

    const maxPages = Math.ceil(queue.length / multiple);
    embed.setColor("F47FFF")
    embed.setFooter(`${"página".replace(/^./, "página"[0].toUpperCase())} ${page > maxPages ? maxPages : page} de ${maxPages}`);

    return message.quote(embed);
}
exports.help = {
    name: 'queue',
    aliases: ['fila', 'q'],
    category: "music",
  }