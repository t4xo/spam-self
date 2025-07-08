const { Client } = require('discord.js-selfbot-v13');

// Tokenler, sunucu ID ve kanal ID
const tokens = [
  'TOKEN_1',
  'TOKEN_2',
  // Daha fazla token ekleyebilirsiniz
];
const guildId = 'SUNUCU_ID'; // Mesajların gönderileceği sunucu ID
const channelId = 'KANAL_ID'; // Mesajların gönderileceği tek kanal ID
const messageContent = 'Mesaj içeriği buraya'; // Göndermek istediğiniz mesaj
const delay = 500; // Yarım saniye (500 ms) bekleme süresi

// Mesaj gönderme fonksiyonu
async function sendMessage(token, guildId, channelId, message) {
  const client = new Client({ checkUpdate: false });

  client.on('ready', async () => {
    console.log(`${client.user.tag} olarak giriş yapıldı!`);
    try {
      const guild = await client.guilds.fetch(guildId);
      if (guild) {
        const channel = await guild.channels.fetch(channelId);
        if (channel) {
          await channel.send(message);
          console.log(`Mesaj gönderildi: ${channelId}`);
        } else {
          console.error(`Kanal bulunamadı: ${channelId}`);
        }
      } else {
        console.error(`Sunucu bulunamadı: ${guildId}`);
      }
    } catch (error) {
      console.error(`Hata oluştu: ${error.message}`);
    } finally {
