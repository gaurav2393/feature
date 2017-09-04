Function.prototype.bind2 = function(scope) {
  var _function = this;

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