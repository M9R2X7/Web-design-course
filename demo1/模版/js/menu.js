let menu = document.querySelector('#menu');
let flag = true;
menu.onclick = function () {
    if (flag) {
        this.children[1].style.display = 'none';
        flag = false;
    } else {
        this.children[1].style.display = 'block';
        flag = true;
    }
}