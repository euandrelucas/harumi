const {client} = require("../../bot");

client.on("message", async (message) => {
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
 
        let prefix = await client.options.prefix

    if(message.content == '<@' + client.user.id + '>' || message.content == '<@!' + client.user.id + '>') {
return message.quote(`:sunflower:  **|**  Olá ${message.author}, me chamo **${message.author}**, meu prefixo neste servidor é **\`${prefix}\`**, caso queira saber meus comandos, utilize: **\`${prefix}help\`** ou **\`${prefix}ajuda\`**.`)
  };


if (!message.content.startsWith(prefix.toLowerCase())) return;
      
      // Args
var args = message.content.substring(prefix.length).split(" ");
  
  let cmd = args.shift().toLowerCase();
  
  if (!message.content.toLowerCase().startsWith(prefix.toLowerCase()) || message.author.bot) return;
  
  let command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
  
if (!command) return;
  
  if(command.help.status === 'off') return;
  
if (command) {

command.run(client, message, args);

};

});