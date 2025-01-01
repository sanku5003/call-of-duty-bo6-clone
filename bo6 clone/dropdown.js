const dash1 = document.querySelector('.dash1');
const dash2 = document.querySelector('.dash2');
const dash3 = document.querySelector('.dash3');
const drop = document.querySelector('.dropdown');
const menu = document.querySelector('.menu');

drop.addEventListener('click', () => {
    if (menu.style.height === '0px') {
        menu.style.height = '230px';
        dash1.style.transform = 'rotate(45deg)  translateY(4px) translateX(3px)';
        dash2.style.transform = 'rotate(-45deg) translateY(-4px) translateX(3px)';
        dash3.style.display = 'none';
        menu.style.overflow = 'visible';

    } else {
        menu.style.height = '0px';
        dash1.style.transform = 'rotate(0deg)  translateX(0px)';
        dash2.style.transform = 'rotate(0deg)  translateX(0px)';
        setTimeout(() => {
            dash3.style.display = 'block';

        }, 600);
        menu.style.overflow = 'hidden';
    };
});


const game = document.querySelector('.head1');
const news = document.querySelector('.head2');
const champ = document.querySelector('.head4');

const gameMenu = document.querySelector('.g-menu');
const newsMenu = document.querySelector('.n-menu');
const champMenu = document.querySelector('.c-menu');


game.addEventListener('click', () => {
    if (gameMenu.style.height === '0px') {
        gameMenu.style.height = '220px';
        newsMenu.style.height = '0px';
        champMenu.style.height = '0px';
        game.replaceChild("games -");
      
    } else {
        gameMenu.style.height = '0px';
        game.replaceChild("games +");
        
    };
})

news.addEventListener('click', () => {
    if (newsMenu.style.height === '0px') {
        newsMenu.style.height = '90px';
        gameMenu.style.height = '0px';
        champMenu.style.height = '0px';
        news.replaceChild("news -");
       
    } else {
        newsMenu.style.height = '0px';
        news.replaceChild("news +");
     
    };
});

champ.addEventListener('click', () => {
    if (champMenu.style.height === '0px') {
        champMenu.style.height = '110px';
        gameMenu.style.height = '0px';
        newsMenu.style.height = '0px';
        champ.replaceChild("champ -");

    } else {
        champMenu.style.height = '0px';
        champ.replaceChild("champ +");
       
    };

})






