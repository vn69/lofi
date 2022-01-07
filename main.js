const EL = document.querySelector.bind(document);
const ELS = document.querySelectorAll.bind(document);

const videoLight = EL(".bg-video-light");
const videoNight = EL(".bg-video-night");
const videoLightRain = EL(".bg-video-light-rain");
const videoNightRain = EL(".bg-video-night-rain");
const lightBtn = EL(".light-btn");
const rainBtn = EL(".rain-btn");

const signupBtn = EL(".sign-up-btn");
const signinBtn = EL(".sign-in-btn");
const changeToSignUp = EL(".change-to-sign-up");
const changeToSignIn = EL(".change-to-sign-in");
const signupModal = EL(".sign-up-modal");
const signinModal = EL(".sign-in-modal");
const howItWorksBtn = EL(".how-it-works-btn");
const howItWorksModal = EL(".how-it-works-modal");

const zoomBtn = EL(".zoom-btn");
const hideWhenZoom = ELS(".hide-when-zoom");
let isZoom = false;

let isNight = false;
let isRain = false;

// handle event

lightBtn.onclick = () => {
  isNight = !isNight;
  changeTheme();
};
rainBtn.onclick = () => {
  isRain = !isRain;
  changeTheme();
};

signupBtn.onclick = () => openSignUp();
changeToSignUp.onclick = () => openSignUp();

signinBtn.onclick = () => openSignIn();
changeToSignIn.onclick = () => openSignIn();

howItWorksBtn.onclick = () => {
  howItWorksModal.classList.add("active");
};

zoomBtn.onclick = () => {
  if (!isZoom) {
    openFullscreen();
    hideWhenZoom.forEach((element) => {
      element.classList.add("hide");
    });
  } else {
    closeFullscreen();
    hideWhenZoom.forEach((element) => {
      element.classList.remove("hide");
    });
  }
  isZoom = !isZoom;
};

// function
changeTheme = () => {
  EL(".bg-video.active").classList.remove("active");
  if (isNight && isRain) return videoNightRain.classList.add("active");
  if (!isNight && isRain) return videoLightRain.classList.add("active");
  if (isNight && !isRain) return videoNight.classList.add("active");
  if (!isNight && !isRain) return videoLight.classList.add("active");
};

closeModal = () => {
  const activeModal = EL(".modal.active");
  activeModal && activeModal.classList.remove("active");
};
openSignUp = () => {
  closeModal();
  signupModal.classList.add("active");
};
openSignIn = () => {
  closeModal();
  signinModal.classList.add("active");
};

const elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }
}
/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE11 */
    document.msExitFullscreen();
  }
}
// jquery
$(document).ready(function () {
  const btnNext = $(".tutorial-btn");
  const owl = $(".owl-carousel");

  owl.owlCarousel({
    margin: 0,
    items: 1,
  });

  owl.on("changed.owl.carousel", function (e) {
    if (e.item) {
      const step = e.item.index + 1;
      $(".step-info.active").removeClass("active");
      $(`.step-info.step-${step}`).addClass("active");
      if (step == 1) {
        btnNext.text("Take Tour");
      } else {
        btnNext.text("Next");
      }
      if (step == 5) {
        btnNext.hide();
      } else {
        btnNext.show();
      }
    }
  });
  btnNext.click(() => {
    owl.trigger("next.owl.carousel");
  });
});
