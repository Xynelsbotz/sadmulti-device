import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")
let time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
conn.sendHydrated(m.chat, '*『 sᴀʏᴜ ᴏɢɪᴡᴀʀᴀ ʙᴏᴛᴢ ʙʏ xʏɴᴇʟs 』*\n\nʙɪᴏᴅᴀᴛᴀ xʏɴᴇʟs :\nhttps://bit.ly/3I7I8xR', `ғᴏʟʟᴏᴡ ɪɴsᴛᴀɢʀᴀᴍ : @xʏɴᴇʟs.ᴅᴇsɪɢɴ\nsᴜʙsᴄʀɪʙᴇ ᴄʜᴀɴɴᴇʟ ᴏᴡɴᴇʀ: xʏɴᴇʟs ᴅᴇsɪɢɴ\n\nʜᴀɪ,ᴀᴋᴜ ᴀᴅᴀʟᴀʜ ʙᴏᴛ ʏᴀɴɢ ᴅɪʙᴇʀɪ ɴᴀᴍᴀ sᴀʏᴜ ᴏɢɪᴡᴀʀᴀ ʙᴏᴛᴢ,ᴀᴋᴜ ᴅɪ ᴋᴇᴍʙᴀɴɢᴋᴀɴ ᴏʟᴇʜ ꜱᴇꜱᴇᴏʀᴀɴɢ ʏᴀɴɢ ʙᴇʀɴᴀᴍᴀ xʏɴᴇʟs [ɴᴇʟsᴇɴ],ʙᴇʟɪᴀᴜ ᴍᴀꜱɪʜ ᴘᴇᴍᴜʟᴀ ᴅᴀɴ ᴍᴀꜱɪʜ ʙᴇʟᴀᴊᴀʀ ʙᴀɴʏᴀᴋ ʜᴀʟ,ᴅᴀɴ ᴛᴜᴊᴜᴀɴɴʏᴀ ʜᴀɴʏᴀ ɪɴɢɪɴ ᴛᴀᴜ ᴀᴘᴀ ʏᴀɴɢ ɪɴɢɪɴ ᴅɪᴋᴇᴛᴀʜᴜɪ ᴅɪ ᴅᴜɴɪᴀ ʙᴏᴛ,\n\ngithub:\nhttps://github.com/Xynelsbotz\n\n╭━━━[🍃𝐒𝐀𝐘𝐔 𝐎𝐆𝐈𝐖𝐀𝐑𝐀🍃]\n┊Owner : Xynels Design\n┊Instagram : Xynels.design\n┊Youtube : XYNELS DESIGN\n╰═┅═━––––––––––––––––๑\nsɪʟᴀʜᴋᴀɴ ᴋʟɪᴋ ᴍᴇɴᴜ ᴜɴᴛᴜᴋ ᴍᴇɴᴜ sᴇʟᴇɴɢᴋᴀᴘɴʏᴀ\n\nᴅᴀᴛᴇ: ${date}\nᴛɪᴍᴇ: ${time} ﹙ɢᴍᴛ +7:00)`.trim(), "./media/broadcast.jpg", 'https://bit.ly/xynelsdesign', 'ʏᴏᴜᴛᴜʙᴇ xʏɴᴇʟs', null, null, [
[`ᴍᴇɴᴜ📑`, '.m'],
[`\ʀᴜʟᴇs⚠️`, '.mr']
], m, {asLocation: false})
}
handler.help = ['menu']
handler.tags = ['general']
handler.command = /^(menu)$/i

export default handler
