const { Client, GatewayIntentBits } = require('discord.js');
const cron = require('node-cron');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

const TOKEN = 'MTE0MjI5MDAwNzA5NzM0NDAxMA.GOQjDx.yajnoHRHbSrbHjFUOWd1cCW3qZrRNVneAeCqpM';
const LIST_CHANNEL_ID = '763895370153066516';

client.once('ready', () => {
    console.log('Bot is ready!');
});

client.on('guildCreate', guild => {
    const channel = guild.systemChannel || guild.channels.cache.first();
    if (channel) {
        channel.send(
            `🚨 ¡Atención a@everyone! 🚨
🎮 El cupo para FimeGames ya está oficialmente 🚫LLENO🚫.
📅 ¡A partir de mañana comenzamos con los pases de lista! 📝
Si tienes algún conocido registrado en la lista pero aún no está dentro del servidor, ¡invítalo a unirse pronto! 🔗🤝
¡No se lo pierdan! 💥`
        );
    }
});

// Cada martes y jueves a las 6:00 PM
cron.schedule('0 18 * * 2,4', () => {
    const channel = client.channels.cache.get(LIST_CHANNEL_ID);
    if (channel) {
        channel.send(
            `📢 ¡Atención a @everyone! 📢
📆 Todos los MARTES y JUEVES han llegado... ¡El momento del pase de lista! 📜
🔍 Formato del pase de lista:
1️⃣ Nombre: [Tu nombre]
2️⃣ Grado: [Tu grado]
3️⃣ Grupo: [Tu grupo]
4️⃣ Carrera: [Tu carrera]
5️⃣ Captura: [Subir imagen]
🕐 Tienen todo el día para enviarlo, pero no olviden...
⏰ A las 6:00 PM hay pase de lista en el canal específico para ello.
¡Asegúrense de estar al día y no quedarse atrás! 👩‍🎓👨‍🎓`
        );
    }
});

client.login(TOKEN);
