import { setup } from '@/database/mongo'
import App from './app'

const PORT = process.env.PORT || 8080

const Database = setup(`mongodb://${process.env.MONGO_SERVER}`, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})

async function start () {
  await Database.connect()
  App.listen(PORT, () => {
    console.log('Your application run on port ' + PORT)
  })
}

start()
