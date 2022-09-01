function test() {
  debugger
  var a = 2

  function double(n) {
    var returnValue = n * 2
    return returnValue
  }

  var b = double(a)
}

test()

function one() {
  var a = 1

  function two() {
    var b = 2
    debugger

    function three() {
      var c = 3
      debugger
    }
    three()
  }
  debugger
  two()
}
one()