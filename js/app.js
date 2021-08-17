//Ui

const intro = document.getElementById('intro'),
    door = document.getElementById('door'),
    bell = document.getElementById('bell');

const textold = document.getElementById('text-old');
const textnew = "Dear sir, I am extending my best wishes to you on this special day of your life! Happy Birthday!";

const cardclass = document.getElementById('card-container');

const doorsong = document.getElementById('door-song'),
    bgsong = document.getElementById('bg-music');

window.alert("Please open with Dasktop and use Earphone for good display and song")

bell.addEventListener('click',()=>{
    doorsong.play();

    setTimeout(()=>{
        bgsong.play();
    },7000);

    door.classList.add('opened');
    setTimeout(()=>{
        door.style.transform=`scale(10)`;
    },5000);

    setTimeout(()=>{
       intro.style.display="none";
    },9000);
    setTimeout(()=>{
        cardclass.style.height = "40vh";
        cardclass.style.transition = "2s";
    },10000);
    setTimeout(()=>{
        cardclass.style.top = "35%";
        cardclass.style.transition = "2.5s";
    },12000);

    setTimeout(()=>{
        autotext();
    },12000);
})
let iii = 1;
let speed = 300;

function autotext(){
    textold.innerText = textnew.slice(0,iii) + "|";

    iii++;

    if(iii > textnew.length){
        iii = 1;
    }
    setTimeout(autotext,speed);
}
