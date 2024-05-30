const {sum} = require("./calculator")
describe ("sum module", ()=>{
test (" should return the correct result for two integers" , ()=>{
    // arrange
    const x =2
    const y = 3
    const r = sum (x , y)
    expect(r).toBe(5)
});


test ("should return the correct result for two floating points", ()=>{
    // arrange
    const x =2.0
    const y = 3.5
    const r = sum (x , y)
    expect(r).toBe(5.5)
});
});

const {sub} = require("./calculator")

describe("sub module", ()=>{

    it (" should return the correct result for two integers" , ()=>{
        // arrange
       
        const r = sub (10, 5)
        expect(r).toBe(5)
    });
});

const {div} = require("./calculator")
describe("div module", ()=>{

    it (" should return the correct result for two integers" , ()=>{
        // arrange
       
        const r = div (10, 5)
        expect(r).toBe(2)
    });
});