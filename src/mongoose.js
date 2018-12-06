const mongoose = require('mongoose');
const path = require('path');

const mongoosePort = process.env.DATA_DB_PORT || 27017;
const mongooseRoot = `${process.env.DATA_DB_HOST || 'localhost'}:${mongoosePort}/`;
const mongooseName = (process.env.DATA_DB_HOST) ? 'gonano' : 'tomb_api_dev';
const mongooseUri = path.join(mongooseRoot, mongooseName);

module.exports = function (app) {
  // Connect to nanobox or stay local 
  mongoose.connect(`mongodb://${mongooseUri}`, { useNewUrlParser: true, });
  mongoose.set('useCreateIndex', true);
  mongoose.Promise = global.Promise;

  app.set('mongooseClient', mongoose);
};
