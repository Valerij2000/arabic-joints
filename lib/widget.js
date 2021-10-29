const arrName = ['Oliver', 'Jack', 'Harry', 'Jacob', 'Charley', 'Thomas', 'George', 'Oscar', 'Calvin', 'Carl', 'Clifford', 'Donald', 'Ernest', 'Gregory', 'Hugh', 'Jonathan', 'Lucas', 'Miles', 'Oscar', 'Tobias', 'Winston'];
  
let counterPrice = 70;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

let timerId = setTimeout(function widget() { 
  let randomNameNumber = getRandomIntInclusive(0, arrName.length-1);
  let popup = document.getElementById("popup");
  popup.innerHTML = `${arrName[randomNameNumber]} اشترى منتج. لا يوجد سوى العناصر المتبقية: ${counterPrice}. تنبيه سينتهي الخصم قريبًا!`;
  
  let icon = document.createElement('i');
  icon.className = 'fas fa-shopping-cart custom-icon';
  popup.appendChild(icon);

  popup.classList.toggle("show");

  if (counterPrice == 1) {
    counterPrice = 70;
  }

  counterPrice--;

  timerId = setTimeout(widget, 10000); // (*)
}, 17000);