
function addValue() {
    // get the operands value
    var fn = document.getElementById('input_a').value
    var sn = document.getElementById('input_b').value
    var answer;
    var txtoutput;

    //A: This is to check if input are number

    if (isNaN(fn)) {
        document.getElementById("output").value = "You must input number only"
        return false;
    }
    else if (isNaN(sn)) {
        document.getElementById("output").value = "You must input number only"
        return false;
    }
    else if (fn == "" || sn == "") {
        document.getElementById("output").value = "You must input number only"
        return false;
    }

    // parse to integer. You can use: parseInt(input, 10);
    fn = parseFloat(fn, 10);
    sn = parseFloat(sn, 10);

    // perform operation
    answer = fn + sn;

    // creating the text output
    txtoutput = `${fn} + ${sn}  = ` + answer;

    // (if you want to check) print out in console
    console.log(`${fn} + ${sn} + = ` + answer)

    // change the text area 
    document.mycalculator.output.value = txtoutput;

}

function mulValue() {
    // get the operands value
    var fn = document.getElementById('input_a').value
    var sn = document.getElementById('input_b').value
    var answer;
    var txtoutput;

    //A: This is to check if input are number

    if (isNaN(fn)) {
        document.getElementById("output").value = "You must input number only"
        return false;
    }
    else if (isNaN(sn)) {
        document.getElementById("output").value = "You must input number only"
        return false;
    }
    else if (fn == "" || sn == "") {
        document.getElementById("output").value = "You must input number only"
        return false;
    }

    // parse to integer. You can use: parseInt(input, 10);
    fn = parseFloat(fn, 10);
    sn = parseFloat(sn, 10);

    // perform operation
    answer = fn * sn;

    // creating the text output
    txtoutput = `${fn} x ${sn}  = ` + answer;

    // (if you want to check) print out in console
    console.log(`${fn} x ${sn} + = ` + answer)

    // change the text area 
    document.mycalculator.output.value = txtoutput;

}

function divValue() {
    // get the operands value
    var fn = document.getElementById('input_a').value
    var sn = document.getElementById('input_b').value
    var answer;
    var txtoutput;

    //A: This is to check if input are number
    if (isNaN(fn)) {
        document.getElementById("output").value = "You must input number only"
        return false;
    }
    else if (isNaN(sn)) {
        //alert("Must input numbers");
        document.getElementById("output").value = "You must input number only"
        return false;
    }
    else if (fn == "" || sn == "") {
        document.getElementById("output").value = "You must input number only"
        return false;
    }

    // parse to integer. You can use: parseInt(input, 10);
    fn = parseFloat(fn, 10);
    sn = parseFloat(sn, 10);

    // perform operation
    answer = fn / sn;

    // creating the text output
    txtoutput = `${fn} / ${sn}  = ` + answer.toFixed(2);

    // (if you want to check) print out in console
    console.log(`${fn} / ${sn} + = ` + answer.toFixed(2))

    // change the text area 
    document.mycalculator.output.value = txtoutput;

}






