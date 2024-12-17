
const created = document.querySelector('.preCreated')
const autorize = document.querySelector(".preAutorize");
const getUser = document.querySelector(".preUser");
let classOfPre;


// Слушатель кнопок
document.addEventListener('click', function (event) {
    console.log(document.cookie)
    navigator.vibrate([
      100, 30, 100, 30, 100, 30, 200, 30, 200, 30, 200, 30, 100, 30, 100, 30,
      100,
    ]);
    taRget = event.target
    if (taRget.tagName !== 'IMG' || taRget.dataset.stop !=="") {
        return
    }
    if ((event.target.dataset.postAutorize == "")) {
        classOfPre = ".preAutorize";
        event.target.style.transform = "rotate(180deg)"
    } if (event.target.dataset.getUser == "") {
        classOfPre = ".preUser";
        event.target.style.transform = "rotate(180deg)";
    } if (event.target.dataset.postCreate == "") {
        event.target.style.transform = "rotate(180deg)";
        classOfPre = '.preCreated'
    }
    classEditor(classOfPre, taRget)
})


// функция обработчик кнопок
function classEditor(classOf, taRget) {
    taRget.classList.toggle('down__img')
    taRget.classList.toggle("up__img");
    // console.log(taRget.classList)
    
    const elemtnPre = document.querySelector(classOf);
    // console.log(elemtnPre)
    elemtnPre.classList.toggle('hidden')
}

// const geo = Geolocation()
