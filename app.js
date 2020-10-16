
const target = document.querySelector('.text');

const words = ['NEWENGLISH', 'CREATIVE', 'EFFECTIVE', 'NEWENGLISH'];
const images = [
'https://staging.newenglish.co.uk/wp-content/uploads/2019/08/HRBS_Signage_4-web.jpg',
'https://staging.newenglish.co.uk/wp-content/uploads/2019/08/NE-Website_Westhill_Exterior-1_2500x1553-min.jpg',
'https://staging.newenglish.co.uk/wp-content/uploads/2019/09/NE_Honda-ATV-Others-Choose_Advert_2500x1553_v2.jpg',
'https://staging.newenglish.co.uk/wp-content/uploads/2019/08/NE-Website_Neville-Landing-Page_2500x4659.jpg',
'https://images.unsplash.com/photo-1577138043155-7934dd897541?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'];

let count = 0;
glitch(words[count], images[count], target);
count++;

setInterval(() => {
  glitch(words[count], images[count], target);
  if (count == words.length - 1) {
    count = 0;
  } else {
    count++;
  }
}, 6000);

images.forEach(url => {
  var img = new Image();
  img.src = url;
  img.onload = function () {console.log('dowloaded img');};
});

function glitch(text, image, target) {

  if (target == null) return;

  target.innerHTML = '';
  text.split('').forEach(function (char, index) {
    target.innerHTML += char !== ' ' ? `<span class="char-${index}">${char}</span>` : ' ';
  });

  var tl = gsap.timeline();

  tl.set('.animation', { backgroundImage: `url(${image})` }, 0);

  tl.set('.animation', { scale: 1.4, ease: Power1.ease0ut }).
  to('.animation', { scale: 1, duration: 10, ease: Power1.ease0ut });
  tl.set('.text', { scale: 1.3, ease: Power1.ease0ut }).
  to('.text', { scale: 1, duration: 10, ease: Power1.ease0ut }, 0);

  tl.set('.glitch1', { opacity: 0 }, 0).
  set('.glitch1', { opacity: 1, top: '30%', duration: 1 }, 5).
  set('.glitch1', { opacity: 0, duration: 1 }, 5.4);

  tl.set('.glitch2', { opacity: 0 }, 0).
  set('.glitch2', { opacity: 1, bottom: '30%', duration: 1 }, 4.65).
  set('.glitch2', { opacity: 0, duration: 1 }, 5.2).
  set('.glitch2', { opacity: 1, bottom: '30%', left: '50%', duration: 1 }, 5.6).
  set('.glitch2', { opacity: 0, duration: 1 }, 6);

  tl.set('.glitch3', { opacity: 0, bottom: '-100px' }, 0).
  set('.glitch3', { opacity: 1, bottom: '25%', left: '100px', duration: 1 }, 4.2).
  set('.glitch3', { opacity: 0, duration: 1 }, 4.4).
  set('.glitch3', { opacity: 1, bottom: '85%', left: '60%', duration: 1 }, 4.9).
  set('.glitch3', { opacity: 0, duration: 1 }, 5);

  tl.set('.char-0', { x: -100, y: 50 }, 3.9).
  set('.char-0', { x: 0, y: 0 }, 4.1);

  tl.set('.text', { opacity: 0 }, 0).
  to('.text', { opacity: 1 }, 2).
  set('.text', { x: -100, y: 80 }, 5).
  set('.text', { x: 0, y: 0 }, 5.2);

  tl.set('.char-1', { x: 300, y: -150, scale: 2 }, 5.25).
  set('.char-1', { x: 0, y: 0, scale: 1 }, 5.5);

  tl.set('.char-2', { x: -150, y: 75 }, 4.75).
  set('.char-2', { x: 0, y: 0 }, 5.1).
  set('.char-2', { x: 50, y: 150 }, 5.4).
  set('.char-2', { x: 0, y: 0 }, 5.6);

  tl.set('.char-3', { x: 0, y: -15 }, 4.85).
  set('.char-3', { x: 0, y: 0 }, 5.2).
  set('.char-3', { rotate: 180 }, 5.4).
  set('.char-3', { rotate: 90 }, 5.6).
  set('.char-3', { rotate: 0 }, 5.8);

  tl.set('.char-4', { x: -300, y: -120 }, 5.5).
  set('.char-4', { x: 0, y: 0 }, 5.75);

  tl.set('.char-6', { x: 50, y: -50 }, 4.75).
  set('.char-6', { x: 0, y: 0 }, 5.1);

  tl.set('.char-7', { y: 150, scale: 1.5 }, 4.75).
  set('.char-7', { y: 0, scale: 1 }, 5.1);
}