import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")
let time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
conn.sendHydrated(m.chat, '*『 ʀᴜʟᴇs ᴀɴᴅ ʀᴇɢᴜʟᴀᴛɪᴏɴs 』*', `⫹⫺ᴅɪʟᴀʀᴀɴɢ sᴘᴀᴍ ʙᴏᴛ\n⫹⫺ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴᴇʟᴘᴏɴ ʙᴏᴛ ᴍᴀᴜᴘᴜɴ ᴏᴡɴᴇʀ\n⫹⫺ɢᴜɴᴀᴋᴀɴ ʙᴏᴛ ᴅᴇɴɢᴀɴ ʙɪᴊᴀᴋ\n⫹⫺ʙᴇʀɪ ᴊᴇᴅᴀ 𝟸-𝟺 ᴅᴇᴛɪᴋ\n⫹⫺ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴɢɪʀɪᴍ ᴠɪʀᴛᴇx\n\nsɪʟᴀʜᴋᴀɴ ᴋʟɪᴋ ʙɪᴏ ᴏᴡɴᴇʀ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴇᴛᴀʜᴜɪ ʟᴇʙɪʜ ʙᴀɴʏᴀᴋ ᴛᴇɴᴛᴀɴɢ ᴏᴡɴᴇʀ. ᴋʟɪᴋ ᴅᴏɴᴀsɪ ᴜɴᴛᴜᴋ ʏᴀɴɢ ᴅᴜᴋᴀ ʀᴇʟᴀ ʙᴇʀᴅᴏɴᴀsɪ ᴜɴᴛᴜᴋ sᴇᴍᴀɴɢᴀᴛ ᴏᴡɴᴇʀ ᴍᴇɴɢᴇᴍʙᴀɴɢᴋᴀɴ sᴀʏᴜ ᴏɢɪᴡᴀʀᴀ ʙᴏᴛᴢ\n\nᴅᴀᴛᴇ: ${date}\nᴛɪᴍᴇ: ${time} ﹙ɢᴍᴛ +7:00)`.trim(), './media/broadcast.jpg', 'https://bit.ly/xynelsdesign', 'ʏᴏᴜᴛᴜʙᴇ ᴏᴡɴᴇʀ', null, null, [
[`ʙɪᴏ ᴏᴡɴᴇʀ🗂️`, '.bioowner'],
[`\ᴅᴏɴᴀsɪ💵`, '.donasi']
], m, {asLocation: false})
}
handler.help = ['mr']
handler.tags = ['general']
handler.command = /^(mr)$/i

export default handler
