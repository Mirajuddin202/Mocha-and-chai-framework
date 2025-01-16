import {expect} from 'chai';

describe("Calculation",()=>{
    it("Mul of 2 numbers",()=>{
        let num1=10;
        let num2=20;
        let Sum=num1 * num2;
        expect(Sum).equals(200)
    })
    it("Division of 2 numbers",()=>{
        let num1=30;
        let num2=5;
        let Sum=num1/num2;
        expect(Sum).equals(6)
    })
})