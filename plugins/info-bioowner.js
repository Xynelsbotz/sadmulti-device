let handler = async (m, { conn, args, usedPrefix, command }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ BIODATA OWNER ]───────*
*💌 Nama* : Sayu-Ogiwara
*✉️ Nama RL* : Nelsen C.
*♂️ Gender* : Laki - laki
*🕋 Agama* : Islam
*⏰ Tanggal lahir* : 31 Juli 2007
*🎨 Umur* : 15
*🧮 Kelas* : 9
*🧩 Hobby* : Nonton animehhj, Chatting, Recode script bot
*💬 Sifat* : Idiot, Tidak Ramah, Prik, Pedofil, peka
*🗺️ Tinggal* : Indo, Jatim, Surabaya, Wonokromo 
*❤️ Suka* : warnah merah & hitam, animehjj, waifu, loli, neko
*💔 Benci* : autis, anak epep, seleb, cewe, playing victim

*───────[ SOSIAL MEDIA ]───────*
*📷 instagran* : @xynels.design
*🇫  Facebook* : Xynels Design
*🏮 Chanel Youtube* : XYNELS DESIGN
*🐈 Github:* Xynelsbotz

`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], m)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler
