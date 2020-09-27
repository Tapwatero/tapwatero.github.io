function predictor() {
    var mother = document.getElementById('mHeight').value;
    var father = document.getElementById('fHeight').value;
    let combined = +mother + +father;
    let divided = combined / 2;
    console.log(mother);

    if (mother > 0 && father > 0) {
        if (document.getElementById('male').checked) {
            let predicted = divided + 12.7;
            document.getElementById('predicted').innerHTML = "Your predicted adult height is: <br><span class='height'>" + parseInt(predicted, 10) + "cm!</span>";
        } else if (document.getElementById('female').checked) {
            let predicted = divided - 12.7;
            document.getElementById('predicted').innerHTML = "Your predicted adult height is: <br><span class='height'>" + parseInt(predicted, 10) + "cm!</span>";
        }
    } 

}