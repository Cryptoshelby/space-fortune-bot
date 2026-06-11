const TelegramBot = require('node-telegram-bot-api');
const TOKEN = '8858722616:AAG0uvUfcJXkxT_5mVy8Lq1VK5PQNS_961s';
const bot = new TelegramBot(TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, 
        '🚀 *SPACE FORTUNE*\n\n' +
        '🎮 Juega Space Runner y compite por estrellas.\n' +
        '🎰 Gira la ruleta de premios.\n' +
        '🏆 Torneos semanales.\n\n' +
        '👇 Toca el botón para jugar:',
        {
            parse_mode: 'Markdown',
            reply_markup: {
                inline_keyboard: [[{ text: '🚀 JUGAR AHORA', web_app: { url: 'https://Cryptoshelby.github.io/space-fortune-bot/' } }]]
            }
        }
    );
});

bot.onText(/\/help/, (msg) => {
    bot.sendMessage(msg.chat.id, '🎮 *Space Runner* - Esquiva asteroides\n🎰 *Ruleta* - Gira y gana\n💰 /balance - Ver saldo\n💳 /deposit - Depositar');
});

console.log('🤖 Space Fortune iniciado');
