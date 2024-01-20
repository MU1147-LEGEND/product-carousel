function slider(){
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");
  const cards = document.querySelectorAll(".cards");
  let counter = 0
  let totalWidth = cards.length * (cards[0].offsetWidth + 30);
  let endWidth = -(4 * (cards[0].offsetWidth + 30)) + totalWidth;
  leftArrow.style.display = "none";

  rightArrow.addEventListener("click", ()=>{
    leftArrow.style.display = "unset";
    counter+=(cards[0].offsetWidth +30);
    if(counter === endWidth){
      rightArrow.style.display = "none";
    }
    cards.forEach( (card)=> {
      if(counter <= endWidth){
        card.style.transform = `translateX(${-counter}px)`;
      }
    });
  });

  leftArrow.addEventListener("click", ()=>{
    rightArrow.style.display = "unset";
    if(counter >= 320){
      counter = counter-320;
      if(counter === 0){
        leftArrow.style.display = "none";
      }
      cards.forEach( (card)=>{
        card.style.transform = `translateX(${-counter}px)`;
      })
    }
  })
}
slider();
