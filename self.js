const { Client } = require('discord.js-selfbot-v13');

const tokens = [
  'TOKEN_1',
  'TOKEN_2',
  // arttırılabilir
];

const guildId = 'SUNUCU_ID';
const channelId = 'KANAL_ID';
const messageContent = 'mesajın';

async function sendMessage(token, guildId, channelId, message) {
  const client = new Client({ checkUpdate: false });

  client.on('ready', async () => {
    console.log(`${client.user.tag} olarak giriş yapıldı!`);
    try {
      const channel = await client.channels.fetch(channelId);

      if (!channel) {
        console.error(`Kanal bulunamadı: ${channelId}`);
        return;
      }

      await channel.send(message);
      console.log(`Mesaj gönderildi: ${client.user.tag}`);
    } catch (error) {
      console.error(`Hata oluştu: ${error.message}`);
    } finally {
      await new Promise(res => setTimeout(res, 1000)); 
      client.destroy();
    }
  });

  client.login(token).catch(err => {
    console.error(`Login hatası: ${err.message}`);
  });
}

(async () => {
  const promises = tokens.map(token =>
    sendMessage(token, guildId, channelId, messageContent)
  );

  await Promise.all(promises);
})();
