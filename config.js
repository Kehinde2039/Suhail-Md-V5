const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349131021928";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_00_12_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMixcbiAgICAgICAgOTcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzksXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDczLFxuICAgICAgICAxOTAsXG4gICAgICAgIDg2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDk4LFxuICAgICAgICA5MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTAzLFxuICAgICAgICA2MyxcbiAgICAgICAgMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDk0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTMxLFxuICAgICAgICA0NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA2LFxuICAgICAgICA3OCxcbiAgICAgICAgOTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyLFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjUsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxODgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDQ0LFxuICAgICAgICA0MCxcbiAgICAgICAgMjIwLFxuICAgICAgICA2MyxcbiAgICAgICAgODcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTIyLFxuICAgICAgICA3NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDQzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTE5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjE5LFxuICAgICAgICA1NixcbiAgICAgICAgNDIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTM0LFxuICAgICAgICA3MixcbiAgICAgICAgMjYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQyLFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTAyLFxuICAgICAgICAxODgsXG4gICAgICAgIDEzNixcbiAgICAgICAgNixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODAsXG4gICAgICAgIDc5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjMzLFxuICAgICAgICA2NyxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjcsXG4gICAgICAgIDExMyxcbiAgICAgICAgOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDg3LFxuICAgICAgICAxODMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU1LFxuICAgICAgICAxODUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjEwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA2MixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDQxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDg5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQxLFxuICAgICAgICA2MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwLFxuICAgICAgICAzOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTEyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTksXG4gICAgICAgIDI0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1LFxuICAgICAgICAyNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyOSxcbiAgICAgICAgMjU0LFxuICAgICAgICA0MixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJDdGQwc1Z5K0R1bXFkVVd5MGsrOXREMDJFZGRIZVhIc2NhYnJyNHJZU2gwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMTM0MTkwMjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBQjJEQzNCNTI0RTM3MTExMDJCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMzE3MzIzN1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMTM0MTkwMjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBMjVENTlDMTQwMkRDRENEQTNDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMzE3MzI0MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJtSVVzbG5CWFIwV3RBa0ROSnBiYzdRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjk0MzlkZjM2LTU3MWQtNGYzMi05OTgxLTU3Mzg3YTg1YzdjYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NyxcbiAgICAgIDQ4LFxuICAgICAgMjQwLFxuICAgICAgMjE3LFxuICAgICAgMTk5LFxuICAgICAgMjA5LFxuICAgICAgODgsXG4gICAgICAxMCxcbiAgICAgIDEyMyxcbiAgICAgIDg3LFxuICAgICAgNTMsXG4gICAgICA4NCxcbiAgICAgIDIzMixcbiAgICAgIDIxOSxcbiAgICAgIDAsXG4gICAgICA4NyxcbiAgICAgIDEwOCxcbiAgICAgIDE3OSxcbiAgICAgIDIwNixcbiAgICAgIDIyN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTAsXG4gICAgICAxMzcsXG4gICAgICAxMjYsXG4gICAgICA2NCxcbiAgICAgIDIxOSxcbiAgICAgIDE0LFxuICAgICAgMTE2LFxuICAgICAgMzMsXG4gICAgICAxOSxcbiAgICAgIDEzMCxcbiAgICAgIDgyLFxuICAgICAgMzEsXG4gICAgICAyNCxcbiAgICAgIDIzMyxcbiAgICAgIDg3LFxuICAgICAgMTQ0LFxuICAgICAgMjM1LFxuICAgICAgMTkxLFxuICAgICAgMjE2LFxuICAgICAgMTEyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkJYNlc4QUc4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDEzNDE5MDI3OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJTTUlMRVwiLFxuICAgIFwibGlkXCI6IFwiMTExMzEzMjIxMDc5MDg0OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSVNzaXFBTkVPKy91TG9HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI3bm1tdjRmVUY1MEZHZDZIa0NNTU82a0loSkhaOGhERHR3MGcwLzhZcGxZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImd2Z1ppR3pLZU9zbGhHOHd4S3N3MzJ4c1pQTWQ0TlVidjVEUlhKQ1h4alpqV1BjOVdEU3ZFVFR6RkxENGZsZ2JIOXdPNHFoczk0Uy9WLzNWa29iS2hBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjFRZjRZL3BBOXhUc2VRSE81MzF4V1pwR2VKVVN0WEVaVys2VmRkd3p6UFFnSjBUSU1JbFZ6NmlEbFJieTU1RG1heTAyN1RVd2g4bFh3SHkraVpYaWpnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMTM0MTkwMjc6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzMxNzMyMzMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKZWRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUplZC5qc29uIjogIntcImtleURhdGFcIjpcIkpZTmRBZDlDeWdjQlFWN3UrYUtTc2wwUjl6Y3dydTdQVitueTZWSVcxTzA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzU1NjkzOTI2OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzMzMTczMjM1OTI5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
