// Your code goes here

const busImg = document.querySelector(".intro img")
console.log(busImg);

busImg.addEventListener('mouseenter', () => {
    busImg.style.transform = 'scale(1.2)';
    busImg.style.transition = 'transform 1s';
  });

  busImg.addEventListener('mouseleave', () => {
    busImg.style.transform = 'scale(1)';
    busImg.style.transition = 'transform 1s';
  });

  document.querySelectorAll('.intro').forEach(e => {
    e.addEventListener('click', function() {
      e.style.backgroundColor = 'blue';
      e.style.color = 'white';
    })
  })


  const changeImg = document.querySelectorAll('.img-content img');
  console.log(changeImg[0]);

changeImg[0].addEventListener('click', () => {
  changeImg[0].src='img/fun.jpg';
});

changeImg[0].addEventListener('mouseleave', () => {
    changeImg[0].src = 'img/adventure.jpg';
  });

  console.log(changeImg[1]);
changeImg[1].addEventListener('click', () => {
  changeImg[1].src='img/adventure.jpg';
})

changeImg[1].addEventListener('mouseleave', () => {
    changeImg[1].src = 'img/fun.jpg';
  });

document.querySelectorAll('.img-content img').forEach(e => {
    e.addEventListener('mouseenter', () => {
        e.style.transform = 'scale(1.2)';
        e.style.transition = 'transform 1s';
    });
    e.addEventListener('mouseleave', () => {
        e.style.transform = 'scale(1.0)';
        e.style.transition = 'transform 1s';
        e.style = 'z-index(0)';
    });
});

// const pick = document.querySelectorAll('.destination');
// document.querySelectorAll('.destination').forEach(e => {
    document.querySelectorAll('.btn').forEach(e => {
        e.addEventListener('click', function() {
          e.style.backgroundColor = 'yellow';
          e.style.color = 'black';
        });
      });
// });

const textContentPs = document.querySelectorAll('.text-content p');
console.log(textContentPs)
document.querySelectorAll('.text-content p').forEach(e => {
    e.addEventListener('wheel', function() {
            e.style.transform = 'rotate(180deg)';
            e.style.transition = 'transform .2s';
            once
    });   
    e.addEventListener('mouseleave', function() {
            e.style.transform = 'rotate(0deg)';
            e.style.transition = 'transform 2s';  
    });
});

document.querySelectorAll('div').forEach(e => {
    e.addEventListener('dblclick', function() {
        e.style.display = 'none';
        event.stopPropagation();
    });
});


