const player = require("../config/json/player.json");
const { Manager } = require("erela.js");

module.exports = (client) => {
    
    client.manager = new Manager({
        nodes: [
          {
            host: player.lavalink.host,
            port: player.lavalink.port,
            password: player.lavalink.pass,
          },
        ],
        send(id, payload) {
          const guild = client.guilds.cache.get(id);
          if (guild) guild.shard.send(payload);
        },
      })
        .on("nodeConnect", node => console.log(`[LAVALINK] | Node `.green + `${node.options.identifier}`.blue + ` connected`.green))
        .on("nodeError", (node, error) => console.log(`[LAVALINK] | Node`.red + `${node.options.identifier}`.blue + ` had an error: ${error.message}`.red))
        .on("trackStart", (player, track) => {
          client.channels.cache
            .get(player.textChannel)
            .send(`Now playing: ${track.title}`);
        })
        .on("queueEnd", (player) => {
          client.channels.cache
            .get(player.textChannel)
            .send("Queue has ended.");
      
          player.destroy();
        });

}