const sequence = {
    '1': 2048,
    '2': 1024,
    '3': 512,
    '4': 256,
    '5': 128,
    '6': 64,
    '7': 32,
    '8': 16,
    '9': 8,
    '10': 4,
    '11': 2,
    '12': 1,
}

// Convertion binary to decimal
function binaryToDecimal() {
    let result = document.getElementById('result');
    let num = document.getElementById('2t10').value;
    let dec_value = 0;

    // Initializing base value to 1, i.e 2^0
    let base = 1;

    let temp = num;
    while (temp) {
        let last_digit = temp % 10;
        temp = Math.floor(temp / 10);

        dec_value += last_digit * base;

        base = base * 2;
    }

    console.log(`Decimal : ${dec_value}`);
    result.innerHTML = dec_value;
}


// Convertion decimal to binary
function decimalToBinary() {
    let result = document.getElementById('result');
    let num = document.getElementById('10t2').value;
    let bin_value = 0;
    let rem, i = 1, step = 1;
    while (num != 0) {
        rem = num % 2;
        num = parseInt(num / 2);
        bin_value = bin_value + rem * i;
        i = i * 10;
    }
    console.log(`Binary: ${bin_value}`);
    result.innerHTML = bin_value;
}