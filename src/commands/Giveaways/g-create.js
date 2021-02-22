const ms = require("ms")

const giveaway = {}

exports.run = async (client, message, args) => {

    step = 1;

    if(!message.member.hasPermission('MANAGE_GUILD') && !message.member.roles.cache.some((r) => r.name === "GiveawayMOD")){
        return message.channel.send(`:x: ${message.author} **|** You need to have the \`MANAGE_GUILD\` permissions to start giveaways.`);
    }

        const collector = message.channel.createMessageCollector(msg =>
        msg.member.id === message.member.id &&
        msg.channel.id === message.channel.id,
        { max: 1 }
        )

        message.quote(`⏰ ${message.author} **|** Insira a duração do sorteio, exemplo: \`10s, 10m, 10d, 10y ...\``)
        
        collector.on('collect', async (message) => {

            if(message.content.toLowerCase() === 'stop' || message.content.toLowerCase() === 'close' || message.content.toLowerCase() === 'cancel') return message.quote(`✅ ${message.author} **|** Successfully canceled`).then(m => {
                collector.stop()
            })

            giveaway.tempo = ms(message.content)

            if(step == 1) {

            message.react("✅").then(m => {
                step = eval(1 + 1);

                message.quote(`⏰ ${message.author} **|** Insira o ID/Menção do canal em que ocorrerá o sorteio`)

                const collector2 = message.channel.createMessageCollector(msg =>
                    msg.member.id === message.member.id &&
                    msg.channel.id === message.channel.id,
                    { max: 1 }
                )

                collector2.on("collect", (message) => {
                let cnh = message.mentions.channels.first() || message.guild.channels.cache.get(message.content) || message.guild.channels.cache.find(c => c.id === args[0]);
                
                let argumento = message.content.replace(/`/g, '')

                if(!cnh) return message.quote(`:x: ${message.author} **|** Não achei nenhum canal relacionado a: \`${argumento}\``).then(m => {
                    collector2.stop()
                })

                giveaway.canal = cnh
                
                message.react("✅").then(m3 => {

                    const collector3 = message.channel.createMessageCollector(msg =>
                        msg.member.id === message.member.id &&
                        msg.channel.id === message.channel.id,
                        { max: 1 }
                    )
                    
                    message.quote(`⏰ ${message.author} **|** Insira o número de ganhadores`)

                    collector3.on("collect", (message) => {

                        giveaway.winners = message.content

                        message.react("✅").then(m5 => {

                                    const collector5 = message.channel.createMessageCollector(msg =>
                                        msg.member.id === message.member.id &&
                                        msg.channel.id === message.channel.id,
                                        { max: 1 }
                                    )
                                    
                                    message.quote(`⏰ ${message.author} **|** Insira o prêmio`)
                                    
                                    collector5.on("collect", (message) => {
                                        giveaway.prize = message.content
                                        message.react("✅").then(mm => {
                                            client.giveawaysManager.start(giveaway.canal, {
                                                time: giveaway.tempo,
                                                prize: giveaway.prize,
                                                winnerCount: parseInt(giveaway.winners),
                                                hostedBy: message.author
                                            })
                                        })
                                    })

                                })
                                })

                            })

                        })

                    })
                    }
                })
            };
exports.help = {
  name: 'g-create',
  aliases: ['giveaway-create', 'g-c', 'giveaway-c', 'giveaway-start', 'g-start', 'g-setup', 'giveaway-setup', 'g-s'],
  category: "giveaways",
}