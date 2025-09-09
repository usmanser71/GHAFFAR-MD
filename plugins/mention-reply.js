const config = require('../config');
const { cmd } = require('../command');

cmd({
  on: "body"
}, async (conn, m, { isGroup }) => {
  try {
    if (config.MENTION_REPLY !== 'true' || !isGroup) return;

    const mentioned = m.mentionedJid || [];
    const botNumber = conn.user.id.split(":")[0] + '@s.whatsapp.net';
    if (!mentioned.includes(botNumber)) return;

    const voiceClips = [
"https://cdn.ironman.my.id/i/h1ojkb.mp4",
"https://cdn.ironman.my.id/i/hfwyi7.mp4",
"https://cdn.ironman.my.id/i/cr8aln.mp4",
"https://cdn.ironman.my.id/i/4toxdq.mp4",
"https://cdn.ironman.my.id/i/cr8aln.mp4",
"https://cdn.ironman.my.id/i/cr8aln.mp4",
"https://cdn.ironman.my.id/i/edb498.mp4",
"https://cdn.ironman.my.id/i/rc0bjj.mp4",
"https://cdn.ironman.my.id/i/sqws1j.mp4",
"https://cdn.ironman.my.id/i/8017fw.mp4",
"https://cdn.ironman.my.id/i/mu4gmh.mp4",
"https://cdn.ironman.my.id/i/m9269n.mp4",
"https://cdn.ironman.my.id/i/vkvh1d.mp4",
"https://cdn.ironman.my.id/i/3wrq4b.mp4",
"https://cdn.ironman.my.id/i/knjt9u.mp4",
"https://cdn.ironman.my.id/i/i6jgnq.mp4",
"https://cdn.ironman.my.id/i/p068hs.mp4",
"https://cdn.ironman.my.id/i/cd7oat.mp4"
"https://cdn.ironman.my.id/i/0lkvxh.mp4",
"https://cdn.ironman.my.id/i/z4p3gd.mp4",
"https://cdn.ironman.my.id/i/3duw1q.mp4",
"https://cdn.ironman.my.id/i/jtn82u.mp4",
"https://cdn.ironman.my.id/i/9xp5lb.mp4",
"https://cdn.ironman.my.id/i/po8t7w.mp4 type/audio { "waveform": [99,0,99,0,99], "contextInfo": { "forwardingScore": 55555, "isForwarded": true, "externalAdReply": { "title": "⸙٠𓆩֓⤹  𝙈𝙍 𝙂𝙃𝘼𝙁𝙁𝘼𝙍 ♥️🚩👑", "body":"- Thııx Hɘɑrt , Dııɘd F0r All'w ; 💔🥹", "mediaType": 4, "thumbnail": "https://cdn.ironman.my.id/i/2fta5i.jpg", "mediaUrl": "https://www.instagram.com/rizwan.khatri.106_?igsh=NzJvNWR4ZWZubzZx", "sourceUrl": "https://<< 🤡 >>/🤡 >>", "showAdAttribution": true }}}
    ];

    const randomClip = voiceClips[Math.floor(Math.random() * voiceClips.length)];

    await conn.sendMessage(m.chat, {
      audio: { url: randomClip },
      mimetype: 'audio/mp4',
      ptt: true,
      waveform: [99, 0, 99, 0, 99],
      contextInfo: {
        forwardingScore: 999,
        isForwarded: true
      }
    }, { quoted: m });

  } catch (e) {
    console.error(e);
  }
});

cmd({
    pattern: "mee",
    alias: ["mention", "broken", "x", "xd"],
    desc: "Send a random voice clip",
    category: "fun",
    react: "⚡",
    filename: __filename
}, async (conn, m) => {
    try {
        const voiceClips = [
"https://cdn.ironman.my.id/i/h1ojkb.mp4",
"https://cdn.ironman.my.id/i/hfwyi7.mp4",
"https://cdn.ironman.my.id/i/cr8aln.mp4",
"https://cdn.ironman.my.id/i/4toxdq.mp4",
"https://cdn.ironman.my.id/i/cr8aln.mp4",
"https://cdn.ironman.my.id/i/cr8aln.mp4",
"https://cdn.ironman.my.id/i/edb498.mp4",
"https://cdn.ironman.my.id/i/rc0bjj.mp4",
"https://cdn.ironman.my.id/i/sqws1j.mp4",
"https://cdn.ironman.my.id/i/8017fw.mp4",
"https://cdn.ironman.my.id/i/mu4gmh.mp4",
"https://cdn.ironman.my.id/i/m9269n.mp4",
"https://cdn.ironman.my.id/i/vkvh1d.mp4",
"https://cdn.ironman.my.id/i/3wrq4b.mp4",
"https://cdn.ironman.my.id/i/knjt9u.mp4",
"https://cdn.ironman.my.id/i/i6jgnq.mp4",
"https://cdn.ironman.my.id/i/p068hs.mp4",
"https://cdn.ironman.my.id/i/cd7oat.mp4"
"https://cdn.ironman.my.id/i/0lkvxh.mp4",
"https://cdn.ironman.my.id/i/z4p3gd.mp4",
"https://cdn.ironman.my.id/i/3duw1q.mp4",
"https://cdn.ironman.my.id/i/jtn82u.mp4",
"https://cdn.ironman.my.id/i/9xp5lb.mp4",
"https://cdn.ironman.my.id/i/po8t7w.mp4 type/audio { "waveform": [99,0,99,0,99], "contextInfo": { "forwardingScore": 55555, "isForwarded": true, "externalAdReply": { "title": "⸙٠𓆩֓⤹  𝙈𝙍 𝙂𝙃𝘼𝙁𝙁𝘼𝙍 ♥️🚩👑", "body":"- Thııx Hɘɑrt , Dııɘd F0r All'w ; 💔🥹", "mediaType": 4, "thumbnail": "https://cdn.ironman.my.id/i/2fta5i.jpg", "mediaUrl": "https://www.instagram.com/rizwan.khatri.106_?igsh=NzJvNWR4ZWZubzZx", "sourceUrl": "https://<< 🤡 >>/🤡 >>", "showAdAttribution": true }}}];

        const randomClip = voiceClips[Math.floor(Math.random() * voiceClips.length)];

        await conn.sendMessage(m.chat, {
            audio: { url: randomClip },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: m });
    } catch (e) {
        console.error(e);
        await conn.sendMessage(m.chat, { text: "❌ Failed to send random clip." }, { quoted: m });
    }
});
