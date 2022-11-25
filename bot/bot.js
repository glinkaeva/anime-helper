const { Telegraf } = require('telegraf');

const token = "5878569030:AAFF0xtIv5-uUpUCbXBGuGtcztJprE4woV4";
const web_link = "https://create-telegram-bot.vercel.app/";

const bot = new Telegraf(token);

bot.start((ctx) => {
  ctx.reply("Start program works and send link", {
    reply_markup: {
      keyboard: [[{
        text: "web app", 
        web_app: {
          url: web_link
        }
      }]]
    }
  });
});
bot.help((ctx) => ctx.reply('Help works'));
bot.launch();