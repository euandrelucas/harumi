const {MessageEmbed} = require("discord.js");
const https = require("https");

module.exports.run = async (client, message, args) => {
    if (!args[0]) return message.quote(`<:hm_error:812689130043211787>  ›  ${message.author}, Você precisa escrever algo para ser procurado na documentação`);

    message.quote(`🔍  ›  ${message.author}, Pesquisando...`).then(m=> {
        https.get(`https://djsdocs.sorta.moe/v2/embed?src=stable&q=${encodeURIComponent(args.join(" "))}`, res => { // get request to the api with https module coz why not😉
            let embedData = "";
            res.on("data", e => {
                embedData += e;
            })
            res.on("end", () => {
                const embed = new MessageEmbed(JSON.parse(embedData))
                    .setColor("006fcf"); 
                message.quote(embed).then(msg => {
                    m.delete()
                })
            })
    })
})
}
exports.help = {
    name: 'docs',
    aliases: ["documentations", "djs", "discord.js"],
    category: 'pesquisas',
}