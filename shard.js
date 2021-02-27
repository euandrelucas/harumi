const { ShardingManager } = require('discord.js');
const config = require("./src/config/json/config.json")
const c = require("colors")

const manager = new ShardingManager('./bot.js', {
  token: config.token,
  totalShards: config.shards,
  shardRespawn: true
});

manager.on('shardCreate', shard => {
  console.log(c.blue(`[SHARDS] | Shard ${shard.id} being initiated`));
});

manager.spawn();