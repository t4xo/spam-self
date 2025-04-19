const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  checkNamespam: true,
  checkSelfbot: true
});

client.on('ready', () => {
  console.log(`${client.user.tag} olarak giriş yapıldı.`);

  // Burada spam başlar
  const kanalId = 'KANAL_ID'; // Mesaj atılacak kanal ID’sini buraya gir
  const mesaj = 'Xd'; // Spamlanacak mesaj
  const interval = 3000; // Mesajlar arası süre (ms cinsinden) - örn: 3000ms = 3 saniye

  const kanal = client.channels.cache.get(kanalId);
  if (!kanal) {
    console.log('Kanal bulunamadı.');
    return;
  }

  setInterval(() => {
    kanal.send(mesaj).catch(console.error);
  }, interval);
});

client.login('tokeniniz');
