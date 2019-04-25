var factorial = function(n) {
  if(n<0) return NaN
  if(n<1) return 1
  return n * arguments.callee(n-1) 
}

exports.factorial = factorial