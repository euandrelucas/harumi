const webhook = require("../config/json/webhooks.json")
const {client} = require("../../bot");

const log = new (require("discord.js")).WebhookClient(webhook.ccommandlogs.id, webhook.ccommandlogs.token)
const elog = new (require("discord.js")).WebhookClient(webhook.ecommandlogs.id, webhook.ecommandlogs.token)

client.on("message", async (message) => {
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
 
        let prefix = await client.options.prefix

    if(message.content == '<@' + client.user.id + '>' || message.content == '<@!' + client.user.id + '>') {
return message.quote(`:sunflower:  **|**  Olá ${message.author}, me chamo **${message.author}**, meu prefixo neste servidor é **\`${prefix}\`**, caso queira saber meus comandos, utilize: **\`${prefix}help\`** ou **\`${prefix}ajuda\`**.`)
  };

  const logembed = new (require("discord.js")).MessageEmbed()
  .setAuthor(`${client.user.username} | CommandLog`, client.user.displayAvatarURL({dynamic:true}))
  
  .addField(`📛 | Usuário:`, `\`${message.author.username} (${message.author.id})\``)
  .addField(`💻 | Comando:`, `\`${message.content}\``)
  .addField(`🌎 | Servidor:`, `\`${message.guild.name} (${message.guild.id})\``)

  .setColor("ff0000")
  .setTimestamp()
  .setFooter(`${client.user.username}, desenvolvida por ADG/MrAndre`)


if (!message.content.startsWith(prefix.toLowerCase())) return;
      
      // Args
var args = message.content.substring(prefix.length).split(" ");
  
  let cmd = args.shift().toLowerCase();
  
  if (!message.content.toLowerCase().startsWith(prefix.toLowerCase()) || message.author.bot) return;
  
  let command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
  
if (!command) return elog.send(logembed)
  
  if(command.help.status === 'off') return;
  
if (command) {
try {

  const andre = await client.users.fetch('742798447253651506')
  const adg = await client.users.fetch('717766639260532826')
log.send(logembed)

await command.run(client, message, args).catch((e) => message.channel.send(`:x: | Aconteceu um erro e não foi possível executar esse comando, por favor entre em contato com ${andre.tag} ou ${adg.tag}\n` + '```' + e + '```'));

} catch {
  return
}

};

});