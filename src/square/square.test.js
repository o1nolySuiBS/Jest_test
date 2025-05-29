const square = require('./square')

describe('square', () => {
    let mockValue
    beforeEach(()=>{
        mockValue = Math.random()
    }) //перед кожним тестом
    beforeAll(()=>{

    })// один раз перед тестом
    test('Корекційне значення', ()=>{
        // expect(square(2).toBe(4));
        // expect(square(2).toBeLessThan(5));
        // expect(square(2).toBeGreaterThan(3));
        // expect(square(2).not.toBeUndefined())
        const spyMathPow= jest.spyOn(Math, 'pow');
        square(2)
        expect(spyMathPow).toBeCalledTimes(1)
    })
})