var pubService = require('./pubs.service');

var listPub = pubService.listPub();
console.log(listPub);

var openPub = pubService.openPub();
console.log(openPub);



module.exports = {
    pubService:pubService
}