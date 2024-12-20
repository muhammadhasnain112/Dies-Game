function dies() {
    let num = Math.floor(Math.random() * 7)
    switch (num) {
        case 1:
            document.getElementById("div").innerHTML = '<br>  <img src="img/1.svg" width="200px">'
            break;
        case 2:
            document.getElementById("div").innerHTML = '<br>  <img src="img/2.svg" width="200px">'
            break;
        case 3:
            document.getElementById("div").innerHTML = '<br>  <img src="img/3.svg" width="200px">'
            break;
        case 4:
            document.getElementById("div").innerHTML = '<br>  <img src="img/4.svg" width="200px">'
            break;
        case 5:
            document.getElementById("div").innerHTML = '<br>  <img src="img/5.svg" width="200px">'
            break;
        case 6:
            document.getElementById("div").innerHTML = '<br>  <img src="img/6.svg" width="200px">'
            break;
    }
}