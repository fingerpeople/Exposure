import mongoose from 'mongoose'

import { IConnection } from './contract'

export default (url: string, options: object) => {
  mongoose.Promise = global.Promise

  let connection: IConnection

  /**
   * @return {Promise}
   */
  const connect = () => new Promise((resolve, reject) => {
    if (connection) {
      resolve(connection)
    }

    mongoose.connect(url, options)
      .then(() => {
        console.log(`[App] Successfully connected to ${url}! `)
        connection = mongoose.connection

        resolve(connection)
      })
      .catch((err) => {
        reject(err)
      })
  })

  /**
   * @return {Promise}
   */
  const close = (): Promise<any> => new Promise((resolve, reject) => {
    if (!connection) {
      reject(new Error('[App] There is no mongodb connection yet'))
    }

    // tslint:disable-next-line: no-floating-promises
    connection.close(() => {
      // eslint-disable-next-line
      console.log(`[App] Successfully disconnected from ${url}!`)
      resolve(true)
    })
  })

  return {
    connect,
    close
  }
}
