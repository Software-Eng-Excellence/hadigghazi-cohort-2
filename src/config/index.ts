import dotenv from "dotenv"
import path from "path"
dotenv.config({path: path.join(__dirname, '../../.env')})
export default {
    NODE_ENV: process.env.NODE_ENV || 'development',
    logDir: process.env.logDir || './logs'
}