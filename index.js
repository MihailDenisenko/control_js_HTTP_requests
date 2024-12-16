
const created = document.querySelector('.preCreated')
const autorize = document.querySelector(".preAutorize");
const getUser = document.querySelector(".preUser");
let classOfPre;


// Слушатель кнопок 
document.addEventListener('click', function (event) {
    taRget = event.target
    if (taRget.tagName !== 'IMG') {
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
    console.log(taRget.classList)
    
    const elemtnPre = document.querySelector(classOf);
    console.log(elemtnPre)
    elemtnPre.classList.toggle('hidden')
}