const validateValue = require("./validateValue")

test('Валідація числа', ()=> {
    expect(validateValue(50)).toBe(true);
})