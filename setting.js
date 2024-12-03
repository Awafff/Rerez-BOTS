/*
    CREDIST !!!
        > Hw Mods [ Base ]
        > Rerez Hosting [ Developer ]

    SAYA SANGAT BERTERIMA KASIH JIKA KALIAN MEMBIARKAN CREDIT INI TANMPA MENGHAPUS ATAU MENGGANTI NYA 
    TOLONG HARGAI YAA
    
WA ME : https://wa.me/6282312436896
TE ME : https://t.me/rerez_x_hosting
YT ME : https://www.youtube.com/@RerezHosting
SALURAN WA : https://whatsapp.com/channel/0029VacxTsC8F2p5dshCmq3r
    
WOI JB KONTOL JANGAN DI JUAL BANGSAT 🤬

*/
//======[ SYSTEM SETTINGS ]======//
const fs = require('fs')
const chalk = require('chalk')
global.baileys = require('@whiskeysockets/baileys')
global.usePairingCode = true

//======[ BOT SETTINGS ]======//
global.ownername = 'DIGITAL CODE - TEAM'
global.owner = [
    '79221988650',
    '79221988650'
]
global.noown = '79221988650'
global.botname = 'KURUMI - MD'
global.prefa = ['', '!', '.', ',', '🐤', '🗿']
global.idchannel = '120363352182866347@newsletter'
global.linkgc = "https://whatsapp.com/channel/0029Vat4lwpKLaHoS0MAwj3Z"
global.gcbuyer = "https://whatsapp.com/channel/0029Vat4lwpKLaHoS0MAwj3Z"
global.ch = "https://whatsapp.com/channel/0029Vat4lwpKLaHoS0MAwj3Z"
global.thumbnail = 'https://telegra.ph/file/24b24857cf823991a2c5f.jpg'
global.Ghost = '`'
global.versibot = 'V 8.0.0'
global.packname = 'DIGITAL CODE - TEAM'
global.author = 'DIGITAL CODE - TEAM'
global.skizo = ""
global.wm = "[ DIGITAL CODE - TEAM ]"
global.wm2 = "Simpel Bot WhatsApp By Digital Code Team"
global.gris = "`"

//======[ FEATURE SETTINGS ]======//
global.onlypc = false
global.onlygc = false
global.autobio = false
global.autoread = false

//======[ CPANEL SETTINGS ]======//
global.domain = "https://whatsapp.com/channel/0029VacxTsC8F2p5dshCmq3r"
global.apikey = "https://whatsapp.com/channel/0029VacxTsC8F2p5dshCmq3r"
global.capikey = "https://whatsapp.com/channel/0029VacxTsC8F2p5dshCmq3r"
global.egg = "15"
global.loc = "1"

//======[ PAYMENT SETTINGS ]======//
global.dana = "085216955233"
global.ovo = "085216955233"
global.gopay = "085216955233"
global.qris = "-"

//======[ DB SETTING ]======//
global.limitawal = 10
global.balanceawal = 10000
global.wlcm = []
global.wlcmm = []

//======[ PUSH SETTINGS ]======//
global.delaypushkontak = 5500
global.delayjpm = 5500

//======[ DB GAME ]======//
global.family100 = {};
global.suit = {};
global.tictactoe = {};

// CUMAN SIMBOL MENU UBAH AJA SESUKA KALIAN
global.atas = '┏━━━━━━━━━━━━━━━━'
global.tengah = '┣━━━━━━━━━━━━━━━━'
global.bawah = '┗━━━━━━━━━━━━━━━━'
global.garis = '┃'

//======[ MESS SETTINGS ]======//
global.mess = {
    premium: ('ᴀᴋꜱᴇꜱ ᴅɪ ᴛᴏʟᴀᴋ! ᴋʜᴜꜱᴜꜱ ᴘʀᴇᴍɪᴜᴍ!'),
    done: ('ᴘʀosᴇs...'),
    owner: ('ᴀᴋꜱᴇꜱ ᴅɪ ᴛᴏʟᴀᴋ! ᴋʜᴜꜱᴜꜱ ᴏᴡɴᴇʀ!'),
    wait: ('ᴘʀosᴇs...!'),
    group: 'κнusus ԍʀouᴘ cнᴀт!',
    admin: 'κнusus ᴀᴅмιɴ ԍʀouᴘ!',
    botAdmin: 'ʙoт нᴀʀus ᴀᴅмιɴ!',
    linkvalid: 'ʟιɴκ тᴀuтᴀɴ тιᴅᴀκ vᴀʟιᴅ!',
    error: 'ᴇʀoʀ тᴇʀנᴀᴅι κᴇsᴀʟᴀнᴀɴ!',
    limit: `ʟιмιт κᴀмu suᴅᴀн нᴀʙιs!\nκᴇтικ .ʙuʏʟιмιт uɴтuκ мᴇмʙᴇʟι ʟιмιт`,
    regis: (`κᴀмu ʙᴇʟoм тᴇʀᴅᴀғтᴀʀ\nsιʟᴀнκᴀɴ ᴅᴀғтᴀʀ ᴅᴇɴԍᴀɴ cᴀʀᴀ .ᴅᴀғтᴀʀ`),
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})