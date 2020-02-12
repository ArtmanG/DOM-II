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

  