var url = require('url');
//var urlstr = 'http://user:password@host.com:80/resources/path?query=string#hash'
var urlstr = 'http://www.host.com/resources/path'
var urlObj = url.parse(urlstr,false,true);
urlstring = url.format(urlObj);
console.log("href "+urlObj.href);
console.log("protocol " +urlObj.protocol);
console.log("host " + urlObj.host);
console.log("auth " + urlObj.auth);
console.log("hostname " + urlObj.hostname);
console.log("port " + urlObj.port);
console.log("pathname " + urlObj.pathname);
console.log("search " + urlObj.search);
console.log("path " + urlObj.path);
console.log("query " + urlObj.query);
console.log("hash " + urlObj.hash);