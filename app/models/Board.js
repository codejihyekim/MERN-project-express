import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import applyDotenv from '../lambdas/applyDotenv.js'

export default function BoardModel(mongoose){
    const {mongoUri, port, jwtSecret } = applyDotenv(dotenv)
    
    const boardSchema = mongoose.Schema({
        date: String,
        title: String,
        content: String
    }, {timestamps: true})
    return mongoose.model('Board', boardSchema)
}