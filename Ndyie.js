const { pinterest } = require('./lib/pinterest')
const { webp2gifFile } = require('./lib/gif')
const { herodetails } = require('./lib/herodetail.js')
const { yta } = require('./lib/ytdl')
const { Gempa } = require('./lib/gempa')
const { linkwa } = require('./lib/carigrup')
const { playstore } = require('./lib/playstore')
const { lirikLagu } = require('./lib/lirik.js')
const { covid } = require('./lib/covid')
const { wikiSearch } = require('./lib/wiki.js')
const { fetchJosn, fetchText } = require('./lib/fetcher')
const { color, bgcolor } = require('./lib/color')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')

const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const fs = require("fs")
const Exif = require('./lib/exif')
const exif = new Exif()
const ggs = require('google-it')
const ig = require('insta-fetcher')
const hx = require('hx-api')
const yts = require( 'yt-search')
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const imgbb = require('imgbb-uploader');
const brainly = require('brainly-scraper')
const axios = require('axios')
const googleImage = require('g-i-s')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const ytsd = require('ytsr')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')

//━━━━━━━━━━━━━━━[ DATABASE ]━━━━━━━━━━━━━━━━━//

let _antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
let _antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
let setting = JSON.parse(fs.readFileSync('./setting.json'))
let pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))

//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━━━//

cmhit = []
apib = "benniismaelapikey"
apil = "MIMINGANZ"
owner = setting.OwnerNumber
botname = setting.BotName
zerokey = setting.ZeroKey
ownername = setting.OwnerName

//━━━━━━━━━━━━━━━[ MODUL EXPORTS ]━━━━━━━━━━━━━━━━━//

module.exports = Ndyie = async (Ndyie, mek, _welkom) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
        	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const ownerNumberr = [`${owner}@s.whatsapp.net`]
		const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const Verived = "0@s.whatsapp.net"
		const txt = mek.message.conversation
		const botNumber = Ndyie.user.jid
		const ownerNumber = [`${owner}@s.whatsapp.net`, `6283818744065@s.whatsapp.net`]
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		const totalchat = await Ndyie.chats.all()
		const groupMetadata = isGroup ? await Ndyie.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const conts = mek.key.fromMe ? Ndyie.user.jid : Ndyie.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? Ndyie.user.name : conts.notify || conts.vname || conts.name || '-'
        cmhit.push(command)
        
		const isAntiLink = isGroup ? _antilink.includes(from) : false
		const isWelkom = isGroup ? _welkom.includes(from) : false
		const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
		const isOwner = ownerNumber.includes(sender)
		const isUser = pendaftar.includes(sender)
		const isMybot = isOwner || mek.key.fromMe
		
//━━━━━━━━━━━━━━━[ CONNECTION 1 ]━━━━━━━━━━━━━━━━━//

		mess = {
			wait: 'Sedang Di Proses...!',
			success: 'Done',
			error: {
				stick: 'Gagal Convert Gambar To Sticker...Coba Lagi !',
				Iv: 'Linknya Error Tod !'
			},
			only: {
				admin: 'Kusus Admin Tod !',
				group: 'Khusus Group Tod !'
			}
		}
		faketeks = 'Ochobot'
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        const reply = (teks) => {
            Ndyie.sendMessage(from, teks, text, {quoted:mek})
        }
        const sendMess = (hehe, teks) => {
            Ndyie.sendMessage(hehe, teks, text)
        }
        const sendWebp = async(from, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './temp' + names + '.png', async function () {
                    console.log('selesai');
                    let ajg = './temp' + names + '.png'
                    let palak = './temp' + names + '.webp'
                    exec(`ffmpeg -i ${ajg} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${palak}`, (err) => {
                        let media = fs.readFileSync(palak)
                        Ndyie.sendMessage(from, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(ajg)
                        fs.unlinkSync(palak)
                    });
                });
            }
        const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
Ndyie.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
Ndyie.sendMessage(from, hasil, type, options).catch(e => {
Ndyie.sendMessage(from, { url : link }, type, options).catch(e => {
reply
console.log(e)
})
})
})
})
}
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? Ndyie.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Ndyie.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
        }
        const zero = fs.readFileSync ('./Ndyie/Ndyi.jpg')
        const costum = (pesan, tipe, target, target2) => {
			Ndyie.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
		}
		const runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};
var ase = new Date();
                        var jamss = ase.getHours();
                         switch(jamss){
                case 0: jamss = "Jangan gadang kak"; break;
                case 1: jamss = "Jangan gadang kak"; break;
                case 2: jamss = "Jangan gadang kak"; break;
                case 3: jamss = "Jangan gadang kak"; break;
                case 4: jamss = "Jangan lupa sholat Subuh kak"; break;
                case 5: jamss = "Selamat pagi"; break;
                case 6: jamss = "Selamat pagi"; break;
                case 7: jamss = "Selamat pagi"; break;
                case 8: jamss = "Selamat pagi"; break;
                case 9: jamss = "Selamat pagi"; break;
                case 10: jamss = "Selamat pagi"; break;
                case 11: jamss = "Selamat siang"; break;
                case 12: jamss = "Jangan lupa sholat Zuhur kak"; break;
                case 13: jamss = "Selamat siang"; break;
                case 14: jamss = "Selamat sore"; break;
                case 15: jamss = "Jangan lupa sholat Ashar kak"; break;
                case 16: jamss = "Selamat sore"; break;
                case 17: jamss = "Selamat sore"; break;
                case 18: jamss = "Selamat malam"; break;
                case 19: jamss = "Jangan lupa sholat Isya kak"; break;
                case 20: jamss = "Selamat malam"; break;
                case 21: jamss = "Selamat malam"; break;
                case 22: jamss = "Selamat malam"; break;
                case 23: jamss = "Selamat malam"; break;
            }
            var tampilUcapan = "" + jamss;
        
//━━━━━━━━━━━━━━━[ BUTTON ]━━━━━━━━━━━━━━━━━//

        const sendButton = async (from, context, fortext, but, mek) => {
            buttonMessages = {
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 1
            }
            Ndyie.sendMessage(from, buttonMessages, buttonsMessage, {
                quoted: ftrol
            })
        }
        
        const sendButImage = async (from, context, fortext, img, but, mek) => {
            jadinya = await Ndyie.prepareMessage(from, img, image)
            buttonMessagesI = {
                imageMessage: jadinya.message.imageMessage,
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 4
            }
            Ndyie.sendMessage(from, buttonMessagesI, buttonsMessage, {
                quoted: ftrol,
            })
        }
        async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
            const buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
            return Ndyie.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }

//━━━━━━━━━━━━━━━[ FAKE FAKEAN ]━━━━━━━━━━━━━━━━━//
        const fakestatus = (teks) => {
            Ndyie.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": faketeks,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./Ndyie/Ndy.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        Ndyie.chatRead(from, "read")
        const fakegroup = (teks) => {
            Ndyie.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": faketeks,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./Ndyie/Ndy.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `By : WandyGans`, 
                            orderTitle: `By : WandyGans`,
                            thumbnail: zero, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
        
//━━━━━━━━━━━━━━━[ CONNECTION 2 ]━━━━━━━━━━━━━━━━━//

        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        Ndyie.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
            function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
				if(mids.length > 0){
					text = normalizeMention(to, text, mids)
				}
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    Ndyie.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
            if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup :(`)
setTimeout(() => {
Ndyie.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
}, 0)
}

		if (budy.length > 3500) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return
reply('Tandai telah dibaca\n'.repeat(300))
reply(`「 *VIRTEX DETECTOR* 」\n\nKamu mengirimkan virtex, maaf kamu di kick dari group :(`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
Ndyie.groupRemove(from, [sender])
}     
if (isCmd && !isUser){
          pendaftar.push(sender)
          fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar, null, 2))
        }

//━━━━━━━━━━━━━━━[ CONNECTION 3 ]━━━━━━━━━━━━━━━━━//

		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

//━━━━━━━━━━━━━━━[ MENU ]━━━━━━━━━━━━━━━━━//

switch (command) {
case 'menu':
privat = Ndyie.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
totalCht = await Ndyie.chats.all()
groups = Ndyie.chats.array.filter(v => v.jid.endsWith('g.us'))
timestampe = speed();
latensie = speed() - timestampe
uptime = process.uptime()
var status = 'FREE⚔️'
if (isOwner) {
status  = 'OWNER⚔️'
}
gambar = fs.readFileSync('./Ndyie/Ndy.jpg')
teks = `*YOU INFO*
- Nama : ${pushname}
- Nomor : ${sender.split('@')[0]}
- Status : ${status}

*BOT INFO*
- Name bot : ${botname}
- Name Owner : ${ownername}
- Prefix : ${prefix}
- Hit today : ${cmhit.length}
- Runtime : ${kyun(uptime)}
- Speed : ${latensie.toFixed(4)} _Second_
- Total group : ${groups.length}
- Total chat : ${totalCht.length}
- Privat chat : ${privat.length}

*OTHER MENU*
🔖${prefix}owner
🔖${prefix}request <fitur>
🔖${prefix}report <masalah>
🔖${prefix}profile
🔖${prefix}status

*OWNER MENU*
🔖${prefix}exif <nama/nama>
🔖${prefix}leave
🔖${prefix}broadcast
🔖${prefix}caripesan pesan|10

*TOOLS MENU*
🔖${prefix}imgtourl <image>
🔖${prefix}tinyurl <url>
🔖${prefix}tts <kodebahasa>
🔖${prefix}semoji <emote>
🔖${prefix}igstalk <Username>

*NEWS MENU*
🔖${prefix}covid
🔖${prefix}infogempa
🔖${prefix}infocuaca <daerah>
🔖${prefix}infotsunami
🔖${prefix}kompas
🔖${prefix}beritanasional

*ANIME MENU*
🔖${prefix}hentai

*MAKER MENU*
🔖${prefix}sticker <image>
🔖${prefix}nulis <teks>

*SEARCH MENU*
🔖${prefix}ytsearch <query>
🔖${prefix}ssweb <web>
🔖${prefix}pinterest <query>
🔖${prefix}wiki <query>
🔖${prefix}googleimage <query>
🔖${prefix}lirik <judul lagu>
🔖${prefix}playstore <query>
🔖${prefix}carigrup <query>
🔖${prefix}faktaunik
🔖${prefix}quotesimg
🔖${prefix}google <query>
🔖${prefix}herodetail <Nama hero>
🔖${prefix}play <nama lagu>
🔖${prefix}otaku <judul anime>
`
teks2 =
`Bot WhatsApp BETA`
but = [
          { buttonId: `${prefix}syarat`, buttonText: { displayText: 'Syarat Dan Ketentuan' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 }
        ]
        sendButLocation(from, teks, teks2, gambar, but)
break
case 'otaku':
reply(mess.wait)
            if(!q) return reply('judul animenya?')
            let anime = await hx.otakudesu(q)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
            ram = await getBuffer(anime.img)
            Ndyie.sendMessage(from,ram,image,{quoted:mek,caption:rem})
            break
case 'play':

			if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)

            var srch = args.join('')
    		aramas = await yts(srch);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url							
                  try {
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                           
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `.•♫•♬• *PLAYING MUSIC* .•♫•♬•\n\n📜𝙏𝙞𝙩𝙡𝙚: ${title}\n🎁𝙏𝙮𝙥𝙚 : mp3\n𝙁𝙞𝙡𝙚 𝙎𝙞𝙯𝙚 : ${filesizeF}\n🖇𝙇𝙞𝙣𝙠 ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `.•♫•♬• *PLAYING MUSIC* .•♫•♬•\n\n📜𝙏𝙞𝙩𝙡𝙚: ${title}\n🎁𝙏𝙮𝙥𝙚 : mp3\n𝙁𝙞𝙡𝙚 𝙎𝙞𝙯𝙚 : ${filesizeF}\n🖇𝙇𝙞𝙣𝙠 ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(`Error`)
                        console.log(e)
                        }
                   break
case 'herodetail':
re = await herodetails(body.slice(12))
her = `*Hero Details* ${body.slice(12)}

*Nama* : ${re.hero_name}
*Role* : ${re.role}
*Quotes* : ${re.entrance_quotes}
*Fitur Hero* : ${re.hero_feature}
*Spesial* : ${re.speciality}
*Rekomendasi Lane* : ${re.laning_recommendation}
*Harga* : ${re.price.battle_point} [Battle point] | ${re.price.diamond} [DM] | ${re.price.hero_fragment} [Fragment]
*Rilis* : ${re.release_date}

*Durability* : ${re.skill.durability}
*Offence* : ${re.skill.offense}
*Skill Effect* : ${re.skill_effects}
*Difficulty* : ${re.skill.difficulty}
 
*Movement Speed* : ${re.attributes.movement_speed}
*Physical Attack* : ${re.attributes.physical_attack}
*Magic Defense* : ${re.attributes.magic_defense}
*Ability Crit Rate* : ${re.attributes.ability_crit_rate}
*HP* : ${re.attributes.hp}
*Mana* : ${re.attributes.mana}
*Mana Regen* : ${re.attributes.mana_regen}

*Story* : ${re.background_story}`
reply(her)
break
case 'igstalk':
            if (!q) return reply('Usernamenya?')
            ig.fetchUser(`${args.join(' ')}`).then(Y => {
            console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
            sendMediaURL(from,ten,teks) 
            })      
            break    
case 'semoji':
			if (args === 0) return reply('emojinya?')   
		   aku4 = args.join(' ')
           emoji.get(`${aku4}`).then(emoji => {
           link = `${emoji.images[10].url}`
		   sendWebp(from, `${link}`).catch(() => reply('gagal'))
           })
    	   break
case 'tts':
try {
					if (args.length < 1) return Ndyie.sendMessage(from, `Kode bahasanya mana kak? contoh : ${prefix}tts id yamate kudasai`, text, { quoted: mek })
				   const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return Ndyie.sendMessage(from, `Teksnya mana kak? contoh : ${prefix}tts id yamate kudasai`, text, { quoted: mek })
					var bby = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					bby.length > 300
						? reply('Teks nya terlalu panjang kak')
						: gtts.save(ranm, bby, function () {
							exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
								fs.unlinkSync(ranm)
								buff = fs.readFileSync(rano)
								Ndyie.sendMessage(from, buff, audio, { duration: 359996400, ptt: true, quoted: mek })
								fs.unlinkSync(rano)
							})
						})
						} catch (e) {
							console.log(e)
						reply(`${e}`)
						}
					break
case 'tovideo':
               if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
               reply(mess.wait)
               encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
               mediaaa = await Ndyie.downloadAndSaveMediaMessage(encmedia)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               Ndyie.sendMessage(from, mp4, video, {mimetype: 'video/mp4', quoted: mek})
               fs.unlinkSync(mediaaa)
               } else {
               reply(`Harus berupa sticker video!`)
}
               break
case 'tiktok':
                   case 'tiktokdl':
                   case 'tiktoknowm':
if (!q) return reply('Linknya?')
var { TiktokDownloader } = require('./lib/tiktokdl')
reply(mess.wait)
hasil = await TiktokDownloader(`${q}`).catch(e => {
reply(`Error`)
})
console.log(hasil)
sendMediaURL(from, `${hasil.result.nowatermark}`)
break
case 'google':
case 'googlesearch':
case 'ggs':
if (args.length < 1) return reply('Yang mau di cari apaan?')
teks = args.join(' ')
reply(mess.wait)
resss = await ggs({'query' : `${teks}`})
kant = ``
for (let i of resss) {
kant += `*Judul* : ${i.title}
*Link* : ${i.link}
*Keterangan* : ${i.snippet}`
}
var akhir = kant.trim()
reply(akhir)
break
case 'tinyurl':
reply(mess.wait)
if (args[0].startsWith('www')) return reply('Url harus berupa https://url')
try {
link = args[0]
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
reply(`${anu.data}`)
console.log(anu.data)
} catch (e) {
emror = String(e)
reply(`${e}`)
}
break
case 'imgtourl':
       case 'img2url':
               reply(mess.wait) 
               var imgbb = require('imgbb-uploader')
               var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               var media = await  Ndyie.downloadAndSaveMediaMessage(encmedia)       
               imgbb('39d895963468b814fad0514bd28787e2', media)
              .then(data => {
               var caps = `*_IMAGE TO URL_*\n\n*~>  ID :* ${data.id}\n*~>  MimeType :* ${data.image.mime}\n*~>  Extension :* ${data.image.extension}\n*~>  URL :* ${data.display_url}`
               ibb = fs.readFileSync(media)
               Ndyie.sendMessage(from, ibb, image, { quoted: mek, caption: caps})
})
              .catch(err => {
               throw err
})
               break
case 'nulis':
reply(`Sedang di proses mungkin memakan waktu 1 ment`)
ini_txt = args.join(' ')
buff = await getBuffer(`http://hadi-api.herokuapp.com/api/canvas/nulis?text=${ini_txt}`)
Ndyie.sendMessage(from, buff, image, {quoted: mek})
break
case 'hentai':
                reply(mess.wait)
                buff = await getBuffer(`http://hadi-api.herokuapp.com/api/hentai`, {method: 'get'})
teks =
`Hentai Anime`
teks2 =
`Click button dibawa untuk menampilkan gambar berikutnya`
but = [
          { buttonId: `${prefix}hentaii`, buttonText: { displayText: 'NEXT➡️' }, type: 1 }
        ]
        sendButImage(from, teks, teks2, buff, but)
                break
case 'hentaii':
                reply(mess.wait)
                buff = await getBuffer(`http://hadi-api.herokuapp.com/api/hentai`, {method: 'get'})
teks =
`Hentai Anime`
teks2 =
`Click button dibawa untuk menampilkan gambar berikutnya`
but = [
          { buttonId: `${prefix}hentai`, buttonText: { displayText: 'NEXT➡️' }, type: 1 }
        ]
        sendButImage(from, teks, teks2, buff, but)
                break
case 'waifu':
                reply(mess.wait)
                data = await fetchJson(`https://docs-jojo.herokuapp.com/api/waifu2`, {method: 'get'})
                bufff = await getBuffer(data.img)
                teks =
`Waifu Anime`
teks2 =
`Click button dibawa untuk menampilkan gambar berikutnya`
but = [
          { buttonId: `${prefix}waifuu`, buttonText: { displayText: 'NEXT➡️' }, type: 1 }
        ]
        sendButImage(from, teks, teks2, bufff, but)
                break 
case 'waifuu':
                reply(mess.wait)
                data = await fetchJson(`https://docs-jojo.herokuapp.com/api/waifu2`, {method: 'get'})
                bufff = await getBuffer(data.img)
                teks =
`Waifu Anime`
teks2 =
`Click button dibawa untuk menampilkan gambar berikutnya`
but = [
          { buttonId: `${prefix}waifuu`, buttonText: { displayText: 'NEXT➡️' }, type: 1 }
        ]
        sendButImage(from, teks, teks2, bufff, but)
                break 
case 'quotesimg':
                buff = await getBuffer(`https://docs-jojo.herokuapp.com/api/quotes-image`, {method: 'get'})
                Ndyie.sendMessage(from, buff, image, {quoted: mek})
                break 
case 'ssweb':
                reply(mess.wait)
                teks = args.join(' ')
                if (args.length < 1) return reply(`Contoh : ${prefix}ssweb www.youtube.com`)
                buff = await getBuffer(`http://hadi-api.herokuapp.com/api/ssweb?url=${teks}&device=phone&full=off`, {method: 'get'})
                Ndyie.sendMessage(from, buff, image, {quoted: mek})
                break      
case 'beritanasional':
                data = await fetchJson(`http://hadi-api.herokuapp.com/api/beritanasional`)
                teks = `「 *BERITANASIONAL* 」\n`
                for (let i of data.result) {
				teks += ` \n*Title* : ${i.judul}\n*Kota* : ${i.kota}\n*Foto* : ${i.image}\n*Desc* : ${i.desc}\n*Waktu* : ${i.date_created}\n*Link* : ${i.articleUrl}\n*Isiberita* : ${i.body}\n━━━━━━━━━━━━━━━━━━━━━━\n\n`
				}
				reply(teks.trim())
                break
case 'kompas':
                data = await fetchJson(`http://hadi-api.herokuapp.com/api/kompas`)
                teks = `「 *KOMPAS* 」\n`
                for (let i of data.result) {
				teks += ` \n*Title* : ${i.title}\n*Url* : ${i.url}\n*Img* : ${i.img}\n*Waktu* : ${i.time}\n\n`
				}
				reply(teks.trim())
                break
case 'infotsunami':
data = await fetchJson(`https://leyscoders-api.herokuapp.com/api/info-tsunami?apikey=${apil}`)
teks = `*INFO TSUNAMI*\n*Wilayah* : ${data.result.Wilayah}\n*Magnitude* : ${data.result.magnitude}\n*Kedalaman* : ${data.result.kedalaman}\n*Koordinat* : ${data.result.koordinat}\n*Waktu* : ${data.result.waktu}`
reply(teks)
break
case 'infocuaca':
			    if (!q) return reply(`Masukan yang mau di cari`)
			    daerah = args.join(' ')
                data = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cuaca?q=${daerah}&apikey=${apil}`)
                teks = `「 *CUACA* 」\n*Daerah* : ${data.result.Daerah}\n*Latitude* : ${data.result.Latitude}\n*Longitude* : ${data.result.Longitude}\n*TimeZone* : ${data.result.TimeZone}\n*Temperature* : ${data.result.Temperature}\n*Tanggal* : ${data.result.Tanggal}\n*Waktu* : ${data.result.hari}\n*Hari* : ${data.result.Hari}\n*Cuaca* : ${data.result.Cuaca}`
                reply(teks)
                break
case 'faktaunik':
                data = await fetchJson(`http://leyscoders-api.herokuapp.com/api/fakta?apikey=${apil}`)
                teks = `${data.result}`
                reply(teks)
                break
case 'infogempa':
reply(mess.wait)
Gempa()
   .then(hasil => {
teks = `*INFO GEMPA*
*Wilayah* : ${hasil.Wilayah}
*Lintang* : ${hasil.Lintang}
*Bujur* : ${hasil.Bujur}
*Magnitudo* : ${hasil.Magnitudo}
*Kedalaman* : ${hasil.Kedalaman}
*Map* : ${hasil.Map}`
    	reply(teks)
        })
		break
case 'bc':
if (!isOwner) return reply(`Maaf anda bukan owner`)
if (args.length < 1) return reply('.......')
anu = await Ndyie.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
bc = await Ndyie.downloadMediaMessage(encmedia)
for (let _ of anu) {
Ndyie.sendMessage(_.jid, bc, image, { caption: `[ Izin Broadcast ]\n\n${body.slice(4)}` })
}
reply('Suksess broadcast')
} else {
for (let _ of anu) {
sendMess(_.jid, `[ *BOT BROADCAST* ]\n\n${body.slice(4)}`)
}
reply('Suksess broadcast')
}
break
case 'carigrup':
if (!q) return reply(`Masukan nama group`)
linkwa(`${q}`).then(resullt => {
f = ``
for (let i of resullt) {
f += `GroupWhatsApp
*Nama : ${i.nama}
*Link* : ${i.link}\n\n`
}
veler = f.trim()
reply(veler)
})
break
case 'playstore':
            if(!q) return reply('lu nyari apa?')
            let play = await playstore(q)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            break
case 'lirik':
if (args.length < 1) return reply('Judulnya?')
reply(mess.wait)
teks = args.join(' ')
lirikLagu(teks).then((res) => {
let lirik = `${res[0].result}`
reply(lirik)
})
break
case 'covid':
covid().then(res => {
reply(`*COVIDINDO*\n- Positif : ${res.indo.indoP} Jiwa\n- Sembuh : ${res.indo.indoS} Jiwa\n- Meninggal : ${res.indo.indoM} Jiwa\n- Update : ${res.indo.indoU}`)
})
   break
case 'gimage':
case 'googleimage':
if (args.length < 1) return reply('Apa Yang Mau Dicari?')
reply(mess.wait)
teks = args.join(' ')
ressss = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
else {
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
console.log(random)
sendFileFromUrl(random, image, {quoted: mek, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
break
case 'wiki':
if (args.length < 1) return reply(' Yang Mau Di Cari Apa? ')
teks = args.join(' ')
ressss = await wikiSearch(teks).catch(e => {
return reply('_[ ! ] Error Hasil Tidak Ditemukan_') 
}) 
result = `*Judul :* ${ressss[0].judul}
*Wiki :* ${ressss[0].wiki}`
sendFileFromUrl(ressss[0].thumb, image, {quoted: mek, caption: result}).catch(e => {
  reply(result)
})
break
case 'pinterest':
if (!q) return reply(`Penggunaan ${prefix}pinterest <query>\nContoh : ${prefix}pinterest}ayam`)
reply(mess.wait)
pinterest(`${q}`).then( data => {
const amsulah = data.result
const pimterest = amsulah[Math.floor(Math.random() * amsulah.length)]
sendMediaURL(from ,pimterest , `*Pinterest* : ${q}\n*Url* : ${pimterest}`)
})
break
case 'ytsearch':
            if (!args.length) return reply('Judulnya apa kak?')
            try {
            	reply(mess.wait)
                const input = args.join(" ")
                const filter1 = await ytsd.getFilters(input)
                const filters1 = filter1.get('Type').get('Video')
                const { items } = await ytsd(filters1.url, { limit: 10 })
                let hehe = `┌ ◪ *YOUTUBE SEARCH*
└ *Search Query:* ${input}\n\n`
                for (let i = 0; i < items.length; i++) {
                    hehe += `───────────────\n
┌ ⬣ *Judul:* ${items[i].title}
├ ⬣ *Id:* ${items[i].id}
├ ⬣ *Ditonton:* ${items[i].views}
├ ⬣ *Durasi:* ${items[i].duration}
└ ⬣ *Link:* ${items[i].url}\n\n`
                }
                thumb = await getBuffer(items[0].bestThumbnail.url)
                await Ndyie.sendMessage(from, thumb, image, {quoted: mek, caption: `${hehe}───────────────\n\n┌ ◪ *DOWNLOAD*
├ ${prefix}ytmp3 [link yt] = Audio
└ ${prefix}ytmp4 [link yt] = Video`})
            } catch(e) {
                reply('Error!')
                reply(`Error: ${e.message}`)
            }
            break
case 'caripesan':
if (args.length < 1) return reply(`Penggunaan ${prefix}caripesan Hi|15`)
tekse = args.join('')
if (tekse.includes("|")) { 
try {
var ve = tekse.split("|")[0]
var za = tekse.split("|")[1]
if (za > 15) return reply('maksimal 15')
sampai = `${za}`
batas = parseInt(sampai) + 1
cok = await Ndyie.searchMessages(`${ve}`, from, batas,1) 
if (cok.messages.lenght < 2) return reply('Pesan tidak ditemukan!') 
if (cok.messages.length < parseInt(batas)) reply(`Hanya ditemukan ${cok.messages.length - 1} Pesan`)
for (let i=1;i < cok.messages.length;i++) {
if (cok.messages[i].message) {
Ndyie.sendMessage(from, `Nih pesannya!`, text, {quoted: cok.messages[i]}) 
}
}
} catch(e) {
console.log(e)
return reply(`Error`)
}
} else {
reply(`Penggunaan ${prefix}caripesan Hi|15`)
}
break
case 'leave':
				if (!isGroup) return reply(mess.only.group)
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				Ndyie.updatePresence(from, Presence.composing)
				Ndyie.groupLeave(from)
						break
case 'exif':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					const exifff = `${args.join(' ')}`
					const namaPack = exifff.split('|')[0]
					const authorPack = exifff.split('|')[1]
					exif.create(namaPack, authorPack)
					await reply('Done gan')
				break
case 'sticker':
					case 'stiker':
					case 's':
					reply(mess.wait)
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await Ndyie.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											Ndyie.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await Ndyie.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							reply(mess.wait)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											Ndyie.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break
case 'syarat':
reply(`Belum tersedia`)
break
case 'owner':
	case 'creator':
case 'developer':
		case 'author':
let ini_list = []
for (let i of ownerNumberr) {
const vname = Ndyie.contacts[i] != undefined ? Ndyie.contacts[i].vname || Ndyie.contacts[i].notify : undefined
ini_list.push({
"disName": `Developer ${botname}`,
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Wandy Gans;;;\nFN:${vname ? `${vname}` : `${Ndyie.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
Ndyie.sendMessage(from, {
"disName": `Developer ${botname}`,
"contacts": ini_list 
}, 'contactsArrayMessage', { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true }})
reply(`Save owner ku ya :3`)
break
case 'request':
                if (!q) return reply(`Masukan jenis fitur yg akan di request!`)
                const cfrr = args.join(' ')
                if (cfrr.length > 300) return Ndyie.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: mek})
                var nomor = mek.participant
                const ress = `*[REQUEST VITUR]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${cfrr}`

                var options = {
                text: ress,
                contextInfo: {mentionedJid: [nomor]},
                 }
                 Ndyie.sendMessage(`${owner}@s.whatsapp.net`, options, text, {quoted: mek})
                 reply('REQUEST ANDA BERHASIL DI KIRIM KEPADA OWNER!')
                 break
case 'report':
                if (!q) return reply(`Masukan masalah pada bot!`)
                const cfr = args.join(' ')
                if (cfr.length > 300) return Ndyie.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: mek})
                var nomor = mek.participant
                const res = `*[REPORT VITUR]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${cfr}`

                var options = {
                text: res,
                contextInfo: {mentionedJid: [nomor]},
                 }
                 Ndyie.sendMessage('6281290565513@s.whatsapp.net', options, text, {quoted: mek})
                 reply('REPORT ANDA BERHASIL DI KIRIM KEPADA OWNER!')
                 break
case 'profile':
    				try {
					profil = await Ndyie.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					profil = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					} 
					buff = await getBuffer(profil)
					profile = `*Name* : ${pushname}
*Number* : ${sender.split('@')[0]}`
					Ndyie.sendMessage(from, buff, image, {quoted: mek, caption: profile})
					break
case 'status':
timestamp = speed();
				latensi = speed() - timestamp
                  	teks =
`┏━➤ *INFO BOT* 
*┃┃* Creator Bot : Ndyie Botz
*┃┃* Nama Owner : ${ownername}
*┃┃* Nama Bot : ${botname}
*┃┃* Prefix : Multi Prefix
*┃┃* Total Pengguna : ${pendaftar.length}
*┃┃* Runtime : ${runtime(process.uptime())}
*┃┃* Speed : ${latensi.toFixed(4)} second
*┃┃* Language : Javascript & Nodejs
*┗━━━━━━━━*`
                  but = [
          { buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 },
        ]
        sendButton(from, teks, '©Created : WandyGans', but, mek)
break
//━━━━━━━━━━━━━━━[ Akhir Dari Semua ]━━━━━━━━━━━━━━━━━//
default:
if (isOwner) {
			if (budy.startsWith('>')) {
				console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					reply(`${evaled}`)
				} catch (err) {
					reply(`${err}`)
				}
			} else if (budy.startsWith('x')) {
				console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
				try {
					return Ndyie.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: ftrol })
				} catch (err) {
					e = String(err)
					reply(e)
				}
			}
		}
		}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
        }
	// console.log(e)
	}
}


	
    
