const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUW5OqOBj8L3mVOXIRBKumahER8S54QbfOQ4QA4RohCDrlf99SZ2rmYc/sLE8pIJ1Of939BrIcl2iCLqD3BkiBz5Ci+5JeCAI90K98HxWAAR6kEPQAOzxDdjZbajtn6GoH09ov69jg8nFq0s2V5Gb3XMIdZ4059RXcGECqY4LdbwBDl9N1mIYTZTN1nVEZyi3uMB4Z1axe7VetdmAZYrSSyKnRX8HtjghxgbNAJyFKUQGTCbosIS5+Rt8ennbCdRqeSqe/W6xq3bFORTSfR9FJas5RnsVStXTFWOfin9FHySLfJvnSLiddJx4iAhddzlbLUphnFYmINZm3915mjYfyk36Jgwx5pocyiunlx7rbquq5Wn1x4m6H19mUzTqVsuC1fR8tg1q5yrGwjJLtbGzoPyN+3O0HxckJ7KozD+SdHgjXojqf5vLcbq25tqAbg1A6651BsPlKfFl8eCX+P7rDxcappl17gW2qF0XFRwht9Lq13s4rZ1zJa8p2B1W/fdZ/qDtGDgk1bpXm1aT0p65ocsd1ka81N+moc4kXVNw0yy1BjftJH9Kq+I4ldvVo6Mg7Phlzimibzlyd63VJ+u6uKSaEGC7lLythom6vRmXjZBN41aJqUTeB9pZTTLkd4lo4pq6aCh5RYpY9VuHq9XGjGF1MD/S4GwMKFOCSFpDiPHu860gMgN7ZRm6B6ENekNVBbV2QvBEkMmz4ERmtWeTL1+FFCYw8yDlxtLk0kbM/dF4BA0iRu6gskTfCJc2LywyVJQxQCXp//2ZAhhr6HNz9OIFjgI+Lkm6yiiQ59D6m+vERum5eZdS+ZK52X6AC9NjP14hSnAXlXccqg4Ub4jPSQkhL0PNhUqIbAzx0xi664wHbbBYjs9lYPi+JL663JP1pU98ph3n2/IXn5G5HhuyLJAvKS0fsdl6OLCu8iHyHk33el/nOETAAv2fmvufPdWK3t0ikcVTai0INeVUJZA43S7H1zMVTe1QgD/RoUSEGHKEbV2Sdxyj7Blc+GSkMtUWXyktOyHe5FQ2U7XQ50mZfcJ8zBb23z57Scu+OdzisDwNH1wAD0ocF8ePmgiAKnMixotLtccJf5a/6LiQk5FeG6B33XfT7Dg9RiJMS9IA2b9eVog70GeoEXdYwVD1QtUAFn0P6cPvTTawjqZax1cQcnVEc+ac0DsabfpJ05cEVpt6ZEzKiH90V3r/+Cwjogdl5H+rWRNcmWq7tWFxeuWQxq9vNPFhdsTfStjAQ+5fVJj6P0mkV64YpTbJDl7M3K3+zn17sEyZ74m5T2FrNeM6PRsrgHo0Ps3w9jMdzSTW3s2yw8BOnNZ1esaewg30butG4P9zsDQKH6TFIjTgxE2umV3tkz46H7XIoWQ7liD5Yt9b7Ria8Fkwj9RpEEq6fOXz0QPLev/iRkLd3a/kYPeosgyn67+F8dTl7Y75gvBfkH5zU94atQLeSVQVHhUBMQSLE1Lbq4YDaqsyT7Kh4omQZgm6m4Hb7zQCSQOrnRXrv0cwrcuwBBiSwpOpnUNc4RSWFKQE9rivIoiJ2OIEB6UUlxKaQfuQbqPdn1pmA2z/DpOjk+wcAAA==,
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || 'Bismark",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " 233531510597",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

