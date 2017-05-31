/**
 * Created by Werlon on 27/05/2017.
 */
const db = require('./db.json');
//depois de instalar o mogoose via npm
const mongoose = require('mongoose');
// no app.js fazer o require do mongo com connection

function MongoDBConnection() {
    this.connect = connect;
    return this;
}

function connect() {

    mongoose.connect(getUrlConnection(), (err) => {
        if (err) throw err;

        console.log('conectado');
    })
    ;
}

function getUrlConnection() {
    return 'mongodb://' + db.usuario + ':' + db.senha + '@ds155841.mlab.com:55841/meandelta';
}

module.exports = MongoDBConnection();
