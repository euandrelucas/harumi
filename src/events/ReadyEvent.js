const {client} = require("../../bot");

client.once("ready", () => {
    console.log(`[LOGIN] | ${client.user.username} is ready`.green);
    
    client.manager.init(client.user.id);
});

client.on("raw", (d) => 
client.manager.updateVoiceState(d)
);