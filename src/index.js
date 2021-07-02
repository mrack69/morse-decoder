const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arrExpr = expr.match(/.{1,10}/g);
    arrExpr = arrExpr.map(symbol => {
        if(symbol === '**********') return ' ';
        symbol = Number(symbol).toString();
        symbol = symbol.match(/.{1,2}/g);
        symbol = symbol.map(code => {
            if(code === '10') return '.';
            else return '-';
        });
        return symbol.join('');
    });
    result = arrExpr.map(morseCode => {
        if(morseCode === ' ') return ' ';
        return MORSE_TABLE[morseCode];
    }).join('');
    return result;
}

module.exports = {
    decode
};