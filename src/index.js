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
    let resultMassageMorceTranslate = '';
    let resultMorceCode = [];
    let arrayForDecode = [];
    for (let i = 0; i < expr.length; i+=10) {
        arrayForDecode.push(expr.substr(i, 10));
        let morceSymbol = '';
            for (let j = 0; j < 9; j += 2) {
                if (arrayForDecode[arrayForDecode.length - 1].substr(j, 2) == '10'){
                    morceSymbol += '.'; 
                }
                if (arrayForDecode[arrayForDecode.length - 1].substr(j, 2) == '11') {
                    morceSymbol += '-'; 
                }
                if (arrayForDecode[arrayForDecode.length - 1].substr(j, 2) == '**') {
                    morceSymbol = ' ';
                }
            }
        if (morceSymbol == ' ') { 
            resultMassageMorceTranslate += morceSymbol;
        } else {
            resultMassageMorceTranslate += MORSE_TABLE[morceSymbol];
            }
        resultMorceCode.push(morceSymbol);
        }
        return resultMassageMorceTranslate;
}

module.exports = {
    decode
}