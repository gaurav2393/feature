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

var foo2 = foo.bind2(bar2);
foo2();//prints baz