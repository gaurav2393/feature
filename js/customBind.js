Function.prototype.bind2 = function(scope) {
  var _function = this;//here this is the function foo2 as the function object is calling the bind2. foo2 function is not invoked

  return function() {
    return _function.apply(scope, arguments);
  }
};

function foo2() {
    console.log(this.foobar);
}

var bar2 = {
   foobar: 'baz'
};

var foo3 = foo2.bind2(bar2);
foo3();//prints baz