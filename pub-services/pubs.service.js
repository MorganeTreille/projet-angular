var pubs = require("./pubs.json");
var moment = require('moment');
var lod = require('lodash');


function listPub () {

    return pubs;
}

function openPub () {

    var today = moment().format('dddd');


    for (var i = 0; i < pubs.length; i++) {

        if(lod.includes(pubs, today)) {
            return pubs;
        }
    }
    return "Il n'y a pas de pubs ouvert";



}

module.exports = {
    listPub:listPub,
    openPub:openPub
}

