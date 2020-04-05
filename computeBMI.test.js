const assert = require('chai').assert;
const computeBMI = require('../computeBMI').computeBMI;

describe('App',function(){
  it('BMI index of height 5 ft and 5 in and 125 pounds equal 20.8', function(){
    let result = computeBMI(5,5,125);
    assert.equal(result, 20.8);
  });
  it('BMI index of height 6 ft and 2 in and 180 pounds equal 20.8', function(){
    let result = computeBMI(6,2,180);
    assert.equal(result, 23.1);
  });
  it('BMI index of height 3 ft and 8 in, and 120 pounds equal 43.6', function(){
    let result = computeBMI(3,8,120);
    assert.equal(result, 43.6);
  });
});
