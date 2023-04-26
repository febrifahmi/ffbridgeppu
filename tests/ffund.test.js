const { CalcFFundamentalLow, CalcFFundamentalHigh, CalcDecision } = require('../ffbridgeppu/ffund')

// Testing CalcFFundamentalLow
test('Testing CalcFFundamentalLow function', () =>{
    expect(CalcFFundamentalLow(10)).toBe(9999);
})

test('Testing CalcFFundamentalLow function', () =>{
    expect(CalcFFundamentalLow(11)).toBe(8.3811);
})

test('Testing CalcFFundamentalLow function', () =>{
    expect(CalcFFundamentalLow(500)).toBe(0.3306);
})


// Testing CalcFFundamentalHigh
test('Testing CalcFFundamentalHigh function', () =>{
    expect(CalcFFundamentalHigh(10)).toBe(9999);
})

test('Testing CalcFFundamentalHigh function', () =>{
    expect(CalcFFundamentalHigh(11)).toBe(8.3986);
})

test('Testing CalcFFundamentalHigh function', () =>{
    expect(CalcFFundamentalHigh(500)).toBe(0.4134);
})


// Testing CalcDecision