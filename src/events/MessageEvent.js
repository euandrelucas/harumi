const Level = require("../config/database/mongodb/LevelSchema");
const webhook = require("../config/json/webhooks.json");
const {Levels} = require("../client/xpManager");
const {client} = require("../../bot");

const log = new (require("discord.js")).WebhookClient(webhook.ccommandlogs.id, webhook.ccommandlogs.token)
const elog = new (require("discord.js")).WebhookClient(webhook.ecommandlogs.id, webhook.ecommandlogs.token)

client.on("message", async (message) => {
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;

    const randomAmountOfXp = Math.floor(Math.random() * 29) + 1; 
    // Min 1, Max 30
    const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomAmountOfXp);

    if (hasLeveledUp) {
    Level.findOne({_id:message.guild.id}, async (err, anti) => {
    
    if(!anti) return;

    if(anti) {
      const user = await Levels.fetch(message.author.id, message.guild.id);
    message.quote(`🥳  ›  ${message.author}, Parabéns! Você subiu de nível, seu nível atual é **${user.level}**`);
    }

    })
  }

    let prefix = await client.options.prefix

    if(message.content == '<@' + client.user.id + '>' || message.content == '<@!' + client.user.id + '>') {
return message.quote(`:sunflower:  ›  Olá ${message.author}, me chamo **${message.author}**, meu prefixo neste servidor é **\`${prefix}\`**, caso queira saber meus comandos, utilize: **\`${prefix}help\`** ou **\`${prefix}ajuda\`**.`)
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

await command.run(client, message, args).catch((e) => message.quote(`<:hm_error:812689130043211787>  ›  ${message.author}, Aconteceu um erro e não foi possível executar esse comando, por favor entre em contato com **${andre.tag}** ou **${adg.tag}**\n` + '```js\n' + e + '\n```'));

} catch {
  return
}

};

});