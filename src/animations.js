//animation//////////////////////////////////////

backOption.addEventListener("click", backbutton)

allButtons.forEach(button => {
  button.addEventListener("click", function (e) {
    const role = e.currentTarget.dataset.role;
      mainPage.forEach(div => {
  div.style.removeProperty("transform");
});

if (role === "motorista") {
    mainPage.forEach(div => {
        div.classList.add("moveLeft");
    });
      login(1)
} else if (role === "restaurant") {
    mainPage.forEach(div => {
        div.classList.add("moveRight");
    });
      login()
    }
  });
});

function login(a){
  mainPageTwo.classList.remove("inactive");
  if (a) {
    mainPageTwo.style.transform = "translateX(-200%)";
  }else{
    mainPageTwo.style.transform = "translateX(200%)";
  }

  setTimeout(() => {
    mainPageTwo.style.transform = "translateX(0%)";
  }, 10);

  setTimeout(() => {
    mainPage.forEach(div => div.classList.add("inactive"));
  }, 300);
}

function backbutton(){
const hayMoveLeft = mainPage.some(div => div.classList.contains("moveLeft"));

  if (hayMoveLeft) {
    mainPageTwo.style.transform = "translateX(-200%)";
    mainPage.forEach(div => {
      div.classList.remove("inactive", "moveLeft");})
    mainPage.forEach(div => {
      div.style.transform = "translateX(100%)";})
  }else{
    mainPageTwo.style.transform = "translateX(200%)";
    mainPage.forEach(div => {
      div.classList.remove("inactive", "moveRight");})
    mainPage.forEach(div => {
      div.style.transform = "translateX(-100%)";})
  }

  setTimeout(() => {
    mainPageTwo.classList.add("inactive");
    mainPage.forEach(div => {
      div.style.transform = "translateX(0%)"})
      }, 300);
               
};

//funcionalidad de swip para tlf////////////////

let touchStartX = 0;
let touchEndX = 0;

mainPageTwo.addEventListener("touchstart", e => {
  touchStartX = e.changedTouches[0].screenX;
});

mainPageTwo.addEventListener("touchend", e => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  const swipeDistance = touchEndX - touchStartX;

  if (swipeDistance > 50) {
    backbutton(); 
  }
}

//whatsapp//////////////////
btnContact.addEventListener("click", function () {
  window.open("https://wa.me/56947545878", "_blank");
});