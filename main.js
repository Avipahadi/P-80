function get_p1() {
    var inputs_1 = [];
    for (var i = 1; i <= 6; i++) {
        inputs_1.push(document.getElementById("input_p1_" + i).value);
    }
    document.getElementById("p_1").innerHTML = inputs_1.join(". ");
}

function get_p2() {
    var inputs_2 = [];
    for (var x = 1; x <= 6; x++) {
        inputs_2.push(document.getElementById("input_p2_" + x).value);
    }
    document.getElementById("p_2").innerHTML = inputs_2.join(". ");
}