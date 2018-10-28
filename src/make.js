function sum(a, b) {
    return a + b;
}

function make(...arg1) {
    return (...arg2) => {
      if (arg2[0] instanceof Function){ 
    	  return arg1.reduce(arg2[0]);
      }else{ 
    	  return make(...arg1, ...arg2);
      }
    }
}

exports.sum = sum;
exports.make = make;