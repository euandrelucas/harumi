const player = require("../config/json/player.json");

const Deezer  = require("erela.js-deezer");
const Spotify = require("erela.js-spotify")
const {Manager} = require("erela.js");

module.exports = (client) => {
    
    const clientID = player.plugins.spotify.id;
    const clientSecret = player.plugins.spotify.secret; 

    client.manager = new Manager({
        nodes: [
          {
            host: player.lavalink.host,
            port: player.lavalink.port,
            password: player.lavalink.pass,
          },
        ],
        plugins: [
            new Deezer(),
            new Spotify({
                clientID,
                clientSecret
            })
          ],
        send(id, payload) {
          const guild = client.guilds.cache.get(id);
          if (guild) guild.shard.send(payload);
        },
      })
        .on("nodeConnect", node => console.log(`[LAVALINK] | Node `.green + `${node.options.identifier}`.cyan + ` connected`.green))
        .on("nodeError", (node, error) => console.log(`[LAVALINK] | Node`.red + `${node.options.identifier}`.cyan + ` had an error: ${error.message}`.red))
        .on("trackStart", (player, track) => {
          client.channels.cache
            .get(player.textChannel)
            .send(`🎵  ›  Tocando Agora: \`${track.title}\``);
        })
        .on("queueEnd", (player) => {
          client.channels.cache
            .get(player.textChannel)
            .send("⏸️  ›  A fila acabou, estou saindo do canal de voz");
      
          player.destroy();
        });

}