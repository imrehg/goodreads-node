var request = require('request'),
    xml2js = require('xml2js');

var parser = new xml2js.Parser();

var baseurl = "http://www.goodreads.com/"
  , devkey = ""
  , devsecret = "";

exports.setkey = function( key ) {
    devkey = key;  
};

exports.search = function( query, page, field, callback) {
    if (!page) {
	page = 1;
    }
    if (!field) {
	field = 'all';
    }
    var totalreq = baseurl + "search.xml?id=" + encodeURI(query) + "&key=" + devkey + "&page="+page + "&search[field]="+field;
    console.log(totalreq);
    request(baseurl + "search.xml?q=" + encodeURI(query) + "&key=" + devkey, function(err, response, body) {
	parser.parseString(body, function (err, result) {
                               callback( result );
			   });
    });

};