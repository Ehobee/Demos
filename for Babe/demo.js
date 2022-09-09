function mainFunct() {

    let paragraphElements = document.querySelectorAll('p');
    let imgToSelectElements = document.querySelectorAll('.select');

    function onClickDisplayHandler(e) {
        let parentElement = e.currentTarget.parentNode;
        parentElement.firstChild.style.display = 'block';
    }

    for (let img of imgToSelectElements) {
        img.addEventListener('click', onClickDisplayHandler);
    }

    paragraphElements.forEach((el) => {
        console.log(el)
        el.style.display = 'none';
    });
}