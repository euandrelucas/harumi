const {client} = require("../../bot");

client.once("ready", () => {
    console.log(`[LOGIN] | ${client.user.username} is ready`.green);
    
    client.manager.init(client.user.id);

    setInterval( () =>
        client.user.setActivity(`${client.user.username} | ${client.options.prefix}help [${client.ws.ping}ms]`),
    30000)
});

client.on("raw", (d) => 
client.manager.updateVoiceState(d)
);