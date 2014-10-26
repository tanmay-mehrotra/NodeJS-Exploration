var accountstr = '{"name":"Jedi", "members":["yoda", "obi wan"], \
                   "number": 34512, "location" : "a galaxy far away"}';
var accountobj = JSON.parse(accountstr);
console.log(accountobj.name);
console.log(accountobj.members);
