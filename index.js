const {WebhookClient, MessageEmbed} = require("discord.js")

//define the webhook we want to use by using the config settings
const Hook = new WebhookClient('842506202558234636', 'Jq39D9gPJrVF1BixFndguv_1Hb7WQMXE8klQpkiU449omE4v18o1PVtP0ha1YEWIckZs')

onNet('vMenu:SendMessageToPlayer', (recieverSrc, message) => {
    const senderSrc = source;
    logvMenuMsg(recieverSrc, senderSrc, message)
})

function logvMenuMsg (reciever, sender, message) {
    
    const embed = new MessageEmbed()
        .setTitle('New vMenu Private Message')
        .addField('Sender:', `${sender} | ${GetPlayerName(sender)}`)
        .addField('Reciever:', `${reciever} | ${GetPlayerName(reciever)}`)
        .addField('Message:', message)
        .setFooter("vMenu message log")

    Hook.send(embed);
}