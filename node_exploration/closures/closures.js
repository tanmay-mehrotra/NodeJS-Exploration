function newClosure(someNum, someRef) {
  // Local variables that end up within closure
  var num = someNum;
  var anArray = [1,2,3];
  var ref = someRef;
  return function(x) {
      num += x;
      anArray.push(num);
      alert('num: ' + num + 
          '\nanArray ' + anArray.toString() + 
          '\nref.someVar ' + ref.someVar);
    }
}


closure1 = newClosure(40,{somevar:'closure 1'});
closure1(5);