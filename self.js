const { Client } = require('discord.js-selfbot-v13');

const tokens = [
  'TOKEN_1',
  'TOKEN_2',
  // Daha fazla token eklenebilir
];

const guildId = 'SUNUCU_ID';
const channelId = 'KANAL_ID';
const messageContent = 'Mesaj içeriği buraya';

async function sendMessage(token, guildId, channelId, message) {
  const client = new Client({ checkUpdate: false });

  client.on('ready', async () => {
    console.log(`${client.user.tag} olarak giriş yapıldı!`);
    try {
      const guild = await client.guilds.fetch(guildId);
      const channel = await guild.channels.fetch(channelId);

      if (!channel) {
        console.error(`Kanal bulunamadı: ${channelId}`);
        return;
      }

      await channel.send(message);
      console.log(`Mesaj gönderildi: ${client.user.tag}`);
    } catch (error) {
      console.error(`Hata oluştu: ${error.message}`);
    } finally {
      client.destroy();
    }
  });

  await client.login(token);
}

// Paralel olarak tüm mesajları gönder
(async () => {
  const promises = tokens.map(token =>
    sendMessage(token, guildId, channelId, messageContent)
  );

  await Promise.all(promises);
})();
