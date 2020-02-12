// Your code goes here
const busImg = document.querySelector(".intro img")
console.log(busImg);

busImg.addEventListener('mouseenter', () => {
    busImg.style.transform = 'scale(1.2)';
    busImg.style.transition = 'transform 1s';
  })
  busImg.addEventListener('mouseleave', () => {
    busImg.style.transform = 'scale(1)';
  })

  document.querySelectorAll('.intro').forEach(e => {
    e.addEventListener('click', function() {
      e.style.backgroundColor = 'blue';
      e.style.color = 'white';
    })
  })

  const changeImg = document.querySelectorAll('.img-content img');
  console.log(changeImg[0]);
changeImg[0].addEventListener('dblclick', () => {
  changeImg[0].src='img/fun.jpg';
})

const changeImg2 = document.querySelectorAll('.img-content img');
  console.log(changeImg[1]);
changeImg2[1].addEventListener('dblclick', () => {
  changeImg2[1].src='img/adventure.jpg';
})