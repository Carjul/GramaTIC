const {connect} = require('mongoose');
const {URI} = process.env;
connect(URI)
.then(db => console.log('db is conected'))
.catch(err => console.error(err))