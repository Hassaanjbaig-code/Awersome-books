const navList = document.getElementById("List")
const navAddNew = document.getElementById("AddNew")
const navContact = document.getElementById("Contact")

const listBookSection = document.getElementById("list-book")
const addNewBook = document.getElementById("addNew-book")
const contactMe = document.getElementById("Contact-Me")

console.log("log 1")

navList.addEventListener('click', () => {
  console.log("log event")
  listBookSection.classList.remove('hidden')
  addNewBook.classList.add('hidden')
  contactMe.classList.add('hidden')
  
})
navAddNew.addEventListener('click', () => {
  console.log("log event 2")
  listBookSection.classList.add('hidden')
  addNewBook.classList.remove('hidden')
  contactMe.classList.add('hidden')
})
navContact.addEventListener('click', () => {
  console.log("log event 3")
  listBookSection.classList.add('hidden')
  addNewBook.classList.add('hidden')
  contactMe.classList.remove('hidden')
})