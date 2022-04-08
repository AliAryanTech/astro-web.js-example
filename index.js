const qrcode = require('qrcode-terminal');
const path = require('path');
const fs = require('fs');
const { Client ,LocalAuth} = require('astro-web.js');
const axios = require('axios')




 

   
    const client = new Client(
    { puppeteer: {  headless: true,  args: ['--no-sandbox']},
    authStrategy: new LocalAuth({ clientId: 'astro' }) 
          
          });
client.initialize();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
client.on('authenticated', () => {
    console.log('AUTHENTICATED');
});

  
client.on('ready', () => {
    console.log(`SUCCESS HAS BEEN CONNECTED TO localhost:3000`);
});
client.on('message', async astro => {
    console.log(`Message from - ${astro.body} `);

if (astro.body === ':help') {
    // Send a new message as a reply to the current one
    astro.reply('hello. thanks for using astro-web-js by astro team');

}
})
 
