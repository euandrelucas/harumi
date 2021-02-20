exports.run = async (client, message, args) => {

    const { channel } = message.member.voice;

    if(!channel) return message.quote(`<:hm_error:812689130043211787>  ›  ${message.author} Por favor, se conecte a algum canal de voz`)

    if(!args[0]) return message.quote(`<:hm_error:812689130043211787>  ›  ${message.author} Por favor, insira algum argumento, exemplo: \`h!play <link | nome da música>\``)

    const res = await client.manager.search(
        args.join(" "),
        message.author
      );

      const player = client.manager.create({
        guild: message.guild.id,
        voiceChannel: message.member.voice.channel.id,
        textChannel: message.channel.id,
        selfDeafen: true,
        volume: 50
      });
  
      player.connect();

      player.queue.add(res.tracks[0]);
      message.channel.send(`✅  ›  ${message.author}, Adicionado a fila \`${res.tracks[0].title}\``);

      if (!player.playing && !player.paused && !player.queue.size)
        player.play();
  
      if (
        !player.playing &&
        !player.paused &&
        player.queue.totalSize === res.tracks.length
      )
        player.play();
    }
exports.help = {
    name: 'play',
    aliases: ['p', 'tocar', 'start'],
    category: "music",
  }