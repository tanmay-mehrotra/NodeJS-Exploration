bufUTF8 = new Buffer("some UTF8 text \u00b6 \u30c6 \u20ac", 'utf8');
bufUTF81 = new Buffer(bufUTF8.length);
for(var i=0 ; i<bufUTF8.length; i++){
    bufUTF81[i] = bufUTF8[i];
}
console.log(bufUTF81.toString());