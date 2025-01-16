import {expect} from 'chai';

describe("Calculation",()=>{
    it("Sum of 2 numbers",()=>{
        let num1=10;
        let num2=20;
        let Sum=num1 + num2;
        expect(Sum).equals(30)
    })
    it("Sub of 2 numbers",()=>{
        let num1=30;
        let num2=20;
        let Sum=num1 - num2;
        expect(Sum).equals(10)
    })
})