const dotenv = require('dotenv');

function loadEnv() {
    if (process.env.PORT &&
        process.env.DATABASE_URL)                //all env vars
    {
        return true;
    }
    else if (!(dotenv.config()).error) {
        if (process.env.PORT &&
            process.env.DATABASE_URL)            //all env vars
        {
            return true;
        }
        console.error(".env misses one or more environment variables");
        return false;
    }
    console.error("Environment variables are not specified");
    return false;
}

module.exports = loadEnv;
