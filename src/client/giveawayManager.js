const { GiveawaysManager } = require('../../custom-npms/discord-giveaways/index');

module.exports = (client) => {

    const GiveawayManagerWithShardSupport = class extends GiveawaysManager {
        async refreshStorage() {
            return client.shard.broadcastEval(() => this.giveawaysManager.getAllGiveaways());
        }
    };

const manager = new GiveawayManagerWithShardSupport(client, {

    storage: './src/config/database/giveaways.json',
    updateCountdownEvery: 10000,
    hasGuildMembersIntent: false,
    default: {
        botsCanWin: false,
        embedColor: '#9999ff',
        embedColorEnd: '#9999ff',
        reaction: '🎉'
    }
});

client.giveawaysManager = manager;

}