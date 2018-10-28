const assert = require('assert');

const sumOfOther = require('../src/sumOfOther.js');
const {
	  make,
	  sum, 
	} = require('../src/make.js');
const recursion = require('../src/recursion.js');

	describe('cj3', function() {
	  describe('sumOfOther', function() {

	    it('soo_1_ok', function(){
	      assert.deepEqual([ 8, 7, 6, 9 ], sumOfOther([2, 3, 4, 1]));
	    });

	    it('soo_2_ok', function(){
	      assert.deepEqual([ 18, 18, 18 ], sumOfOther([9,9,9]));
	    });
	    
	    it('soo_3_ok', function(){
	      assert.deepEqual([ 14, 13, 12, 11, 10 ], sumOfOther([1,2,3,4,5]));
	    });
	    
	    it('soo_4_ok', function(){
	      assert.deepEqual([ 4135, 2925, 5265, 5145, 5254, 5265, 4385, 5264, 5370, 5376 ], sumOfOther([1241,2451,111,231,122,111,991,112,6,0]));
	    });
	    
	    
	  });
	  describe('make', function() {

	   it('make_1_ok', function(){
	    assert.deepEqual(777,  make(15)(34, 21, 666)(41)(sum) );
	  });
	  
	  it('make_2_ok', function(){
	  assert.deepEqual(30,  make(10)(10)(10)(sum) );
	  });
	  
	  it('make_3_ok', function(){
	    assert.deepEqual(6,  make(1,1)(1,1,1)(1)(sum) );
	    });

	  it('make_4_ok', function(){
	    assert.deepEqual(18,  make(1,1,1,1,1,1)(1,1,1,1,1,1)(1,1,1,1,1,1)(sum) );
	    });

	  });
		
	  describe('recursion', function() {
	    it('rec_1_ok', function(){
	      assert.deepEqual( [[100], [90, 120], [70,99,110,130]],  recursion({"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}}) );
	    });
	    it('rec_1_ok', function(){
		      assert.deepEqual( [[999]],  recursion({"value":999}));
		    });  
	  });
	  
	});
