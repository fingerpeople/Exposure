import * as express from 'express'
import App from './app';

const PORT = process.env.PORT || 8080

App.listen(PORT, () => {
    console.log('run on port ' + PORT)
})
