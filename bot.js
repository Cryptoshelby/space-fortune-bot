const TelegramBot = require('node-telegram-bot-api');
const http = require('http');
const TOKEN = '8858722616:AAG0uvUfcJXkxT_5mVy8Lq1VK5PQNS_961s';
const bot = new TelegramBot(TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, '⛏️ *Paperland Miner*\n\n¡Mina tokens y gana estrellas!', {
        parse_mode: 'Markdown',
        reply_markup: {
            inline_keyboard: [[{ text: '🚀 ABRIR MINI APP', web_app: { url: 'https://Cryptoshelby.github.io/space-fortune-bot/' } }]]
        }
    });
});

const PORT = process.env.PORT || 3000;
http.createServer((req, res) => { res.end('OK'); }).listen(PORT);
console.log('🤖 Bot corriendo en puerto ' + PORT);
