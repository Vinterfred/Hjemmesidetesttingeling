function addOne(x) {
  const blurp = document.getElementById(x);
  blurp.innerHTML = Number(blurp.innerHTML) + 1;
  return;
}

let init_coom = 6;
let coom = 20;
let sexyhaha = true;
function sex() {
    const sex = document.getElementById('sex')
    sexyhaha = !sexyhaha;
    if (sexyhaha) {
        sex.innerHTML = "8={i}";
        return
    }
    else if (coom <= 0) {
        sex.innerHTML = "8===D~~~ {i}"
        init_coom -= 1;
        coom = init_coom
    }
    else {
        coom -= 1
        sex.innerHTML = "8===D {i}"
    }
}
