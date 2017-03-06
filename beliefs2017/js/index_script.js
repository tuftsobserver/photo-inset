var mySiema = new Siema({
    selector: '.siema',
    duration: 800,
    easing: 'ease-out',
    perPage: {
      480: 1,
      1100: 3
    },
    startIndex: 0,
    draggable: false,
    threshold: 20,
    loop: false,
});


if (mySiema.perPage == 1) {
  document.getElementById('blank1').innerHTML = '';
  document.getElementById('blank2').innerHTML = '';
}

document.querySelector('.js-prev').addEventListener('click', function() {
  mySiema.prev();
  // console.log(mySiema.currentSlide);

  // Update arrows 
  if (mySiema.currentSlide == 0){
    document.getElementById('prev').innerHTML = '';
  } else if (mySiema.currentSlide != 7) {
    // document.getElementById('next').style.color = 'black';
    document.getElementById('next').innerHTML = '>';
    document.getElementById('text').style.width = '100vw';
  }

  document.getElementById('text').innerHTML = updateText(mySiema.currentSlide, mySiema.perPage);
  if (mySiema.currentSlide == 5 && mySiema.perPage == 1){
    document.getElementById('text').style.fontSize = '0.6rem';
  } else {
    document.getElementById('text').style.fontSize = '0.75rem';
  }


  // opacity
  if (mySiema.perPage > 2) {
    document.getElementById('image'+(mySiema.currentSlide + 1).toString()).style.opacity = 1;
    document.getElementById('image'+(mySiema.currentSlide + 2).toString()).style.opacity = 0.5;
  }
});
document.querySelector('.js-next').addEventListener('click', function() {
  mySiema.next();
  // console.log(mySiema.currentSlide);

  // Update arrows
  if (mySiema.currentSlide == 6){
    document.getElementById('next').innerHTML = '';
    document.getElementById('text').style.width = '78vw';
  } else if (mySiema.currentSlide != 0) {
    document.getElementById("prev").innerHTML = '<';
  }

  document.getElementById('text').innerHTML = updateText(mySiema.currentSlide, mySiema.perPage);
  if (mySiema.currentSlide == 5 && mySiema.perPage == 1) {
    document.getElementById('text').style.fontSize = '0.6rem';
  } else {
    document.getElementById('text').style.fontSize = '0.75rem';
  }

  // opacity
  if (mySiema.perPage > 2) {
    document.getElementById('image'+(mySiema.currentSlide + 1).toString()).style.opacity = 1;
    document.getElementById('image'+(mySiema.currentSlide).toString()).style.opacity = 0.5;
    
    if ((!(mySiema.currentSlide == 7 && mySiema.perPage == 1)) && (!(mySiema.currentSlide == 6 && mySiema.perPage == 3))){
      document.getElementById('image'+(mySiema.currentSlide + 2).toString()).style.opacity = 0.5;
    }
  }

});

function updateText(index, size) {
  if (index == 0) {
    return "";
  }
  else if (index == 1){
    return "Storms affirm that I am alive.<br />Natural, emotional, interpersonal.";
  }
  else if (index == 2){
    return "Summer.";
  }
  else if (index == 3){
    return "It's sad that when people live here long enough, they get used to it.";
  }
  else if (index == 4){
    return "I loved the way he looked at his double-neck guitar;<br />he cherised it more than the whole world he had.";
  }
  else if (index == 5){
    return "I was filled with a calm gratitude - but also a hint<br />of shame, like towards someone you've spent fifteen<br />years with but know so little about their life.";
  } 
  else if (index == 6){
    return "This is a man I was in love with. I am no longer in<br />love, but I think I love him still.";
  }

  else {
    return "";
  }
}

// console.log(mySiema.currentSlide);