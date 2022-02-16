/*
Реализовать функционал добавление контактов.

1. Необходимо создавать контакт в списке(contacts__list).
Контакты должны создаваться по заполненным полям.
Аватар контакта можно задать заполнив ссылкой изображения
с инета.

2. По клику на "крестик" контакт должен удалиться из
списка.

Примечание:
Пример с версткой контакта можно удалить или закомментировать.

Дополнительно:
Можно сделать так, чтобы кнопка добавления контакта
была неактивной пока все поля пустые.
*/

const contactsListDiv=document.querySelector(".contacts__list")
const contactDiv=document.createElement("div")
contactDiv.classList.add("contact")
const avatarDiv=document.createElement("div")
avatarDiv.classList.add("contact__avatar")
// avatarDiv.style.backgroundImage=""
const nameDiv=document.createElement("div")
nameDiv.classList.add("contact__name")
const phoneDiv=document.createElement("div")
phoneDiv.classList.add("contact__phone")

const btnDiv=document.createElement("button")
const btnImg=document.createElement("img")
btnDiv.append(btnImg)
contactDiv.append(avatarDiv,nameDiv,phoneDiv,btnDiv)
contactsListDiv.append(contactDiv)
nameDiv.textContent="Hello Worldov"
phoneDiv.textContent="0770123456"
const formUserName=document.querySelector(".form__username")
const formPhone=document.querySelector(".form__phone")
const formAvatar=document.querySelector(".form__avatar")

const formBtn=document.querySelector(".form__btn")
formBtn.onclick=()=>{
    nameDiv.textContent=formPhone.value
    phoneDiv.textContent=formUserName.value
    avatarDiv.style.backgroundImage=url("formAvatar.value")
}


