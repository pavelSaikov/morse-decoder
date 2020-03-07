const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let message = '';

    for (let i = 0; i < expr.length; i += 10) {
        let symbol = '';

        for (let j = i; j < i + 10; j++) {
            symbol += expr[j];
        }

        if (symbol != '**********') {
            let morseSymbol = '';

            for (let j = 0; j < symbol.length; j += 2) {
                let code = symbol.substr(j, 2);

                if (code == '10') morseSymbol += '.';
                if (code == '11') morseSymbol += '-';
            }

            message += MORSE_TABLE[morseSymbol];
        } else {
            message += ' ';
        }
    }

    return message;
}

module.exports = {
    decode,
};
