const loadingAnimation = document.querySelector('.loading');
const sectionProfile = document.querySelector('.profile');
const profileOptions = document.querySelectorAll('.profile__options__select');
const profileImage = document.querySelector('.perfil-image');
const phoneProfileImage = document.querySelector('.phone__perfil-image');
const catalogo = document.querySelector('.catalogo');
const users = document.querySelector('.profile__container');
const phoneMenuButton = document.querySelector('.phone__menu__button');
const buttonOpenMenuImage = document.querySelector('.phone__menu__button__menu__active');
const buttonCloseMenuImage = document.querySelector('.phone__menu__button__close__active');
const menuPhone = document.querySelector('.phone')
console.log(menuPhone)

const retornar = document.querySelectorAll(".return");
const proximo = document.querySelectorAll(".next");

const links = document.querySelectorAll('a[href^="#"]');
const guia = document.querySelector('.guia');

const container = document.querySelectorAll(".main__catalogo__category");

const headerProfile = document.querySelector('.profile-image');
const phoneMenuProfile = document.querySelector('.phone__container__image')
var image = 0;



// Introduz a imagem de perfil de acordo com o usuário selecionado.
function selectProfile(select){
  catalogo.classList.toggle('none');
  users.classList.toggle('profile__container__active');
  sectionProfile.classList.remove('profile__active');
  profileImage.classList.remove(image);
  phoneProfileImage.classList.remove(image);
  select === 'perfil-1' ? image = 'profile-1': '';
  select === 'perfil-2' ? image = 'profile-2': '';
  select === 'perfil-3' ? image = 'profile-3': '';
  select === 'perfil-4' ? image = 'profile-4': '';
  profileImage.classList.add(image);
  phoneProfileImage.classList.add(image);
}

// Remove a animação de loading depois de 3.5s
setTimeout(() =>{
  loadingAnimation.classList.remove('loading__active');
}, 3500);

// Evento que aguarda a seleção do usuário
profileOptions.forEach(item => {
  item.addEventListener('click', ()=>{
    const select = item.getAttribute('select');
    selectProfile(select);
  })
});

headerProfile.addEventListener('click', selectUser);
phoneMenuProfile.addEventListener('click', selectUser);
phoneMenuButton.addEventListener('click', ()=>{
  buttonOpenMenuImage.classList.toggle('none');
  buttonCloseMenuImage.classList.toggle('none');
  menuPhone.classList.toggle('phone__active')
})

function selectUser() {
  catalogo.classList.toggle('none');
  sectionProfile.classList.add('profile__active');
  users.classList.toggle('profile__container__active');
}

retornar.forEach((item)=>{
  item.addEventListener('click', () =>{
    reiniciar(item)
  })
});

proximo.forEach((item)=>{
  item.addEventListener('click', ()=>{
    reiniciar(item)
  })
})


function reiniciar(item) {
  const tipo = item.classList.value;
  const valor = parseInt(item.getAttribute('select'));
  const containerSelect = container[valor];

  tipo == 'next' ? next() : before(valor);

    function next() {
      containerSelect.classList.remove('start')
      containerSelect.classList.add('end')      
    }
    function before() {
      containerSelect.classList.remove('end')      
      containerSelect.classList.add('start')
    }
    setTimeout(() =>{
      containerSelect.classList.remove('end')      
      containerSelect.classList.remove('start')
    }, 3000)
}

links.forEach((item)=>{ 
  item.addEventListener('click', ()=>{
  guia.classList.add('guia__active')
  setTimeout(()=>{
    guia.classList.remove('guia__active')
  },2000)
  })
})

document.getElementById('year').innerHTML = new Date().getFullYear()

