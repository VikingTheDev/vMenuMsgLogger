const {webhookID, webhookToken} = require('./src/config.json');
const {WebhookClient, MessageEmbed} = require("discord.js")

//define the webhook we want to use by using the config settings
const Hook = new WebhookClient(webhookID, webhookToken)

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
        .setFooter("vMenu msg log | Made by Petrikov")

    Hook.send(embed);
}
