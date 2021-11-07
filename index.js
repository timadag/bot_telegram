const TelegramBot = require('node-telegram-bot-api')
const { Context } = require('telegraf')

const TOKEN = '2145014902:AAHk5IPQgYnVUiMJNTdmJMxOy70RmfRWi6k'

console.log('Bot has been started ....')

const bot = new TelegramBot(TOKEN,{polling:{
    autoStart : true
}})


bot.on('message',(msg)=>{    

    if(msg.text.toLocaleLowerCase() === "привет")
    {
        bot.sendMessage(msg.chat.id, 'Привет, ' + msg.from.first_name)
        
        //var now = new Date().toLocaleDateString();
        
    }
   
    else if(msg.text.toLocaleLowerCase() === 'отправь расписание')
    {
        var year = new Date().getFullYear();
        var month = new Date().getMonth();
        var today = new Date(year, month, 0).getTime();
        var now = new Date().getTime();
        var week = Math.round((now - today) / (1000 * 60 * 60 * 24 * 7));
        if (week % 2===0) {
            bot.sendMessage(msg.chat.id, 'Лови 1 неделя')
            bot.sendPhoto(msg.chat.id, 'https://github.com/timadag/Y132_BOT/blob/main/1%20неделя.jpg?raw=true')
        }
         else {
            bot.sendMessage(msg.chat.id, 'Лови 2 неделя')
            bot.sendPhoto(msg.chat.id, 'https://github.com/timadag/Y132_BOT/blob/main/2%20неделя.jpg?raw=true')
        }
    }
    else if(msg.text.toLocaleLowerCase() === '1' | msg.text.toLocaleLowerCase() === '1 неделя'){
        bot.sendMessage(msg.chat.id, 'Лови 1 неделя')
        bot.sendPhoto(msg.chat.id,'https://github.com/timadag/Y132_BOT/blob/main/1%20неделя.jpg?raw=true')
    }
    else if(msg.text.toLocaleLowerCase() === '2' | msg.text.toLocaleLowerCase() === '2 неделя'){
        bot.sendMessage(msg.chat.id, 'Лови 2 неделя')
        bot.sendPhoto(msg.chat.id, 'https://github.com/timadag/Y132_BOT/blob/main/2%20неделя.jpg?raw=true')
    }else if(msg.text.toLocaleLowerCase() === '4' | msg.text.toLocaleLowerCase() === '4 неделя'){
        bot.sendMessage(msg.chat.id, 'Лови 4 неделя')
        bot.sendPhoto(msg.chat.id, 'https://github.com/timadag/Y132_BOT/blob/main/2%20неделя.jpg?raw=true')
    }else if(msg.text.toLocaleLowerCase() === '3' | msg.text.toLocaleLowerCase() === '3 неделя'){
        bot.sendMessage(msg.chat.id, 'Лови 3 неделя')
        bot.sendPhoto(msg.chat.id, 'https://github.com/timadag/Y132_BOT/blob/main/1%20неделя.jpg?raw=true')
    }
   
})


