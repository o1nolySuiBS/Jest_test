const validateValue = require("./validateValue")

test('Валідація числа', ()=> {
    expect(validateValue(50)).toBe(true);
})

describe('validateValue', ()=>{
    test('Корректна назва', ()=>{
        expect(validateValue(50)).toBe(true);
    })
    test('Менше корректного', ()=>{
        expect(validateValue(-1)).toBe(false);
    })
    test('Більше корректногго', ()=>{
        expect(validateValue(101)).toBe(false);
    })
    test('Пограничне значення знизу', ()=>{
        expect(validateValue(0)).toBe(true);
    })
    test('Пограничне значення зверху', ()=>{
        expect(validateValue(100)).toBe(false);
})
})