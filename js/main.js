function openNav() {
    document.querySelector('#mainNav').style.width = "100%";

    setTimeout(()=>{
        let menuOptions = document.querySelectorAll('#mainNav li a');

        for (const menuOption of menuOptions) {
            menuOption.style.opacity = 1;
            menuOption.classList.remove('fadeMenu');
        }
    },800);
}

function closeNav() {
    let menuOptions = document.querySelectorAll('#mainNav li a');

    for (const menuOption of menuOptions) {
        menuOption.style.opacity = 0;
        menuOption.classList.add('fadeMenu');
    }

    setTimeout(()=>{
        document.querySelector('#mainNav').style.width = "0%";
    },600);
}