const mapArrToString = require("./mapArrToString")

describe('mapArrToString', ()=>{
    test('Корректна назва', ()=>{

        expect(mapArrToString([1, 2, 3])).toEqual(['1', '2', '3']); //toBe — строга перевірка на ідентичність (===)
    })
    test('Мішанина', ()=>{

        expect(mapArrToString([1, 2, 3, null,  undefined, 'wdawdasd'])).toEqual(['1', '2', '3']);
    })
    test('Пустота', ()=>{

        expect(mapArrToString([])).toEqual([]);
    })
    test('Пустота', ()=>{

        expect(mapArrToString([1,2,3])).not.toEqual([1,2,3,4]);
    })

})
//Використовуй toBe для Примітивів (number, string, boolean, null, undefined)
//
// undefined / null перевірок
//
// Того самого обʼєкта (reference equality)
// Використовуй toEqual для:
//
// Обʼєктів
//
// Масивів
//
// JSON-подібних структур