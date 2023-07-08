const buttonShare = document.querySelector('button');

const profile = document.querySelector('.profile');

const closeButtonShare = document.querySelector('#close');

buttonShare.addEventListener('click', () =>{
    const activeShare = document.querySelector('#activate');

    
    activeShare.classList.toggle('active-state')

    // profile.style.display = 'none'
   

});

closeButtonShare.addEventListener('click', () =>{
    const activeShare = document.querySelector('#activate');

    activeShare.classList.toggle('active-state')

    buttonShare.style.display = 'flex'

    
});