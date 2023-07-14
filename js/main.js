// Start Setting Box
const colorList = document.querySelectorAll(".color-list li");
let randombackground = document.querySelectorAll(".random-background span");
let backgroundImageOption = true;
let backgroundImageInterval;

let backgroundImageOptionstorge = localStorage.getItem("backgroundImageOption");
if (backgroundImageOptionstorge !== null) {
  if (backgroundImageOptionstorge === "true") {
    backgroundImageOption = true;
    document.querySelector(".random-background .yes").classList.add("active");
  } else {
    backgroundImageOption = false;
    document.querySelector(".random-background .no").classList.add("active");
  }
}

// check  if colors in localstorage
let mainColor = localStorage.getItem("coloroption");
if (mainColor !== null) {
  // set root by local storage
  document.documentElement.style.setProperty("--main-color", mainColor);

  colorList.forEach((element) => {
    element.classList.remove("active");
    //  add active class by data color
    if (element.dataset.color == mainColor) {
      element.classList.add("active");
    }
  });
}
// Click On Toggle Settings Gear
document.querySelector(".togglee-settings .btn-gear").onclick = function () {
  // Toggle Class Fa-spin For Rotation on Self
  this.classList.toggle("fa-spin");

  // Toggle Class Open On Main Settings Box
  document.querySelector(".setting-box").classList.toggle("open");
};
// get all list of color on array

colorList.forEach((element) => {
  element.addEventListener("click", (e) => {
    // set root color
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    // set localstorage color
    localStorage.setItem("coloroption", e.target.dataset.color);

    activeClassHandle(colorList, e);
  });
});

//Start random background;

randombackground.forEach((element) => {
  element.addEventListener("click", (e) => {
    randombackground.forEach((element) => {
      element.classList.remove("active");
    });

    e.target.classList.add("active");

    if (e.target.dataset.background == "yes") {
      backgroundImageOption = true;

      randomizeImgs();
      localStorage.setItem("backgroundImageOption", true);
    } else {
      backgroundImageOption = false;
      clearInterval(backgroundImageInterval);
      localStorage.setItem("backgroundImageOption", false);
    }
  });
});

//End random background;
// End Setting Box

// Start landingPage
let landingPage = document.querySelector(".landing-page");
// array of images
let imgArray = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
  "06.png",
  "07.jpg",
  "08.jpg",
];

function randomizeImgs() {
  if (backgroundImageOption == true) {
    backgroundImageInterval = setTimeout(() => {
      let randomNumber = Math.floor(Math.random() * imgArray.length);

      landingPage.style.backgroundImage =
        'url("../img/' + imgArray[randomNumber] + '")';
    }, 1000);
  }
}
randomizeImgs();

// End landingPage
// <!-- Start About Us -->

// <!-- End About Us -->
// <!-- Start Our Skills -->

//slect our skill progress
let ourskills = document.querySelector(".our-skills");

window.onscroll = function () {
  let skillsOffsetTop = ourskills.offsetTop;
  let skillsouterHeight = ourskills.offsetHeight;
  let windowHeight = this.innerHeight;
  let windowHscrollTop = this.pageYOffset;

  if (windowHscrollTop > skillsOffsetTop + skillsouterHeight - windowHeight) {
    let skillProgress = document.querySelectorAll(".skill-progress span");
    skillProgress.forEach((element) => {
      element.style.width = element.dataset.progress;
    });
  }
};

// <!-- End Our Skills -->
//  <!-- Start Our Gallery -->

// define img
let allImages = document.querySelectorAll(".images-box img");
allImages.forEach((img) => {
  img.addEventListener("click", (e) => {
    // create overlay element
    let overlayDiv = document.createElement("div");
    // add class overlay
    overlayDiv.className = "popup-overlay";
    // add overlayDiv to body
    document.body.appendChild(overlayDiv);
    // create popupbox
    let popupBoxDiv = document.createElement("div");
    // add class
    popupBoxDiv.className = "popup-box";
    // create image
    let poupimage = document.createElement("img");
    poupimage.src = img.src;
    popupBoxDiv.appendChild(poupimage);
    document.body.appendChild(popupBoxDiv);

    if (img.alt !== null) {
      // create image heading
      let imgHeadin = document.createElement("h3");
      imgHeadin.className = "img-alt-heading";
      // imgtext from alt img
      let imgtext = document.createTextNode(img.alt);
      imgHeadin.appendChild(imgtext);
      popupBoxDiv.appendChild(imgHeadin);
    }

    // create close button
    let spanClose = document.createElement("span");
    spanClose.className = "close-img";
    let spanCloseTxt = document.createTextNode("X");
    spanClose.appendChild(spanCloseTxt);
    popupBoxDiv.appendChild(spanClose);
    document.addEventListener("click", function (e) {
      if (e.target.className === "close-img") {
        e.target.parentNode.remove();

        document.querySelector(".popup-overlay").remove();
      }
    });
  });
});
// <!-- End Our Gallery -->
// <!-- Start Time Line -->

// <!-- End Time Line -->

// <!--Start Our Features -->

// <!--End Our Features -->

// <!-- Strat Testimonials -->

// <!-- End Testimonials -->

// /* Start Contact Us */
// /* End Contact Us */
/* Start Nav Bullets */
// select all bull
let allbullet = document.querySelectorAll(".bullet");
let links = document.querySelectorAll(".links li a");

function gotoLinks(links) {
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

function activeClassHandle(arrayOfElement, event) {
  arrayOfElement.forEach((eactive) => {
    // remove class active
    eactive.classList.remove("active");
  });

  event.target.classList.add("active");
}

gotoLinks(allbullet);
gotoLinks(links);
/* End Nav Bullets */
let bullest = document.querySelectorAll(".bullest span");
let navBullets = document.querySelector(".nav-bullets");
let bulletOption = localStorage.getItem("bullet-option");
if (bulletOption !== null) {
  bullest.forEach((element) => {
    element.classList.remove("active");
  });
}
if (bulletOption === "block") {
  navBullets.style.display = "block";
  document.querySelector(".bullest .yes").classList.add("active");
} else {
  navBullets.style.display = "none";
  document.querySelector(".bullest .no").classList.add("active");
}

bullest.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (element.dataset.display === "show") {
      navBullets.style.display = "block";
      localStorage.setItem("bullet-option", "block");
      bullest.forEach((element) => {
        element.classList.add("active");
      });
    } else {
      navBullets.style.display = "none";
      localStorage.setItem("bullet-option", "none");
      bullest.forEach((element) => {
        element.classList.remove("active");
      });
      element.classList.add("active");
    }
  });
});

document.querySelector(".rest-setting").onclick = function () {
  localStorage.clear();
  window.location.reload();
};
// Start toggle
let toggleMenue = document.querySelector(".toggle-menue");
let alllinks = document.querySelector(".links");
toggleMenue.onclick = function (e) {
  // stop propgation
  e.stopPropagation();

  // togglee menuective
  this.classList.toggle("menue-active");
  // togglee class open
  alllinks.classList.toggle("open");
};
// End toggle
document.addEventListener("click", (e) => {
  if (e.target !== toggleMenue && e.target !== alllinks) {
    // check if class open exists
    if (alllinks.classList.contains("open")) {
      alllinks.classList.toggle("open");
      toggleMenue.classList.toggle("menue-active");
    }
  }
});

// stop propagation on links
alllinks.onclick = function (e) {
  e.stopPropagation();
};



// <!-- Start footer -->

// <!-- End footer -->