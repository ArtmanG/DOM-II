// Your code goes here
document.querySelector('nav');

// 1
const busImg = document.querySelector(".intro img")
console.log(busImg);

busImg.addEventListener('mouseenter', () => {
    busImg.style.transform = 'scale(1.2)';
    busImg.style.transition = 'transform 1s';
  })
  busImg.addEventListener('mouseleave', () => {
    
  })


// 2
  document.querySelectorAll('.intro').forEach(e => {
    e.addEventListener('click', function() {
      e.style.backgroundColor = 'blue';
      e.style.color = 'white';
    })
  })


// 3 & 4
  const changeImg = document.querySelectorAll('.img-content img');
  console.log(changeImg[0]);
changeImg[0].addEventListener('dblclick', () => {
  changeImg[0].src='img/fun.jpg';
});
changeImg[0].addEventListener('mouseleave', () => {
    changeImg[0].src = 'img/adventure.jpg';
  });

  console.log(changeImg[1]);
changeImg[1].addEventListener('dblclick', () => {
  changeImg[1].src='img/adventure.jpg';
})
changeImg[1].addEventListener('mouseleave', () => {
    changeImg[1].src = 'img/fun.jpg';
  });


// 5
document.querySelectorAll('.img-content img').forEach(e => {
    e.addEventListener('mouseenter', () => {
        e.style.transform = 'scale(1.2)';
        e.style.transition = 'transform 1s';
    });
    e.addEventListener('mouseleave', () => {
        e.style.transform = 'scale(1)';
        e.style = 'z-index(0)';
    });
});


// 6
const pick = document.querySelectorAll('.destination').forEach(e => {
    document.querySelectorAll('.btn').forEach(e => {
        e.addEventListener('click', function() {
          pick.style.backgroundColor = 'blue';
          pick.style.color = 'white';
        })
      })
});
