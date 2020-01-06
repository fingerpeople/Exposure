import passport from 'passport'
import { TelegramStrategy } from 'passport-telegram-official'

const AuthPassport = passport.use(
  new TelegramStrategy({
    botToken: '531907280:AAGir0TLJB5Dw0n3KkT-F4xqfIieYL-3gbg'
  },
  function (profile: any, cb: any) {
    console.log(profile)
    cb(true)
  }
))

export default AuthPassport
