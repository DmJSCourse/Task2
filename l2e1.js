var num = 0;
var odd = false;
var even = false;

function check() {
    var num = Number(document.getElementById("in_num").value);
    // console.log(num, typeof num);
    if (Number.isInteger(num) == true) {
        console.log('Number is an integer');
    }
    else {
        console.log('Number is not an integer');
    }

    if (Math.sign(num) === 0) {
        console.log('Number is zero');
    }

    else if (Math.sign(num) === 1) {
        console.log('Number is positive');
    }

    else if (Math.sign(num) === -1) {
        console.log('Number is negative');
    }

    else { console.log('ELSE'); }
}