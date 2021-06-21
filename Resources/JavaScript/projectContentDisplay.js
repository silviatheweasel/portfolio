const projects = document.getElementsByClassName("project-container");
const about = document.getElementById("about");
const loadMore = document.getElementById("load-more-btn");
const galaryRow = document.getElementsByClassName("galary-row");
const projectContainer = document.getElementById("react-projects-container");
let projectIndex = 0;
const dummyLeft = document.getElementsByClassName('dummy-left');
const dummyRight = document.getElementsByClassName('dummy-right');
const reactProjects = document.getElementsByClassName("react-project");
const closeReactDetailsBtns = document.getElementsByClassName("close-btn");
const display = (element, displayStyle) => element.style.display = displayStyle;
const styleReset = element => element.style = "";



const showContent = () => {
  display(document.getElementById('slide-show'), "none");
  display(document.getElementById('container'), "block");
  display(about, "none");
}

//display the content page when the slide is clicked

for (let i = 0; i < projects.length; i++) {
  const slideImage = document.getElementById(`slide-image-${i + 1}`);
  slideImage.addEventListener("click", () => {
    showContent();
    display(document.getElementById(`project-container-${i + 1}`), "grid");
  });
}

const closeContent = () => {
  styleReset(document.getElementById('slide-show'));
  styleReset(document.getElementById('container'));
  styleReset(about);
  
  for (let i = 0; i < projects.length; i++) {
    styleReset(projects[i]);
    styleReset(dummyLeft[i]);
    styleReset(dummyRight[i]);
  }
}

const closeProjectDisplay = ({target}) => {
  if (target !== document.getElementById("previous-btn") && target !== document.getElementById("next-btn")) {
    closeContent();
  } else {
    target === document.getElementById("previous-btn") ? plusProjects(-1) : plusProjects(1);
  }
}
document.getElementById('close').addEventListener('click', closeContent);
window.addEventListener("mouseup", (event) => closeProjectDisplay(event));
window.removeEventListener("mouseup", (event) => closeProjectDisplay(event));

// Next/previous controls
const plusProjects = (n) => {
  for (let i = 0; i < projects.length; i++) {
    display(projects[i], "none");
    display(dummyLeft[i], "none");
    display(dummyRight[i], "none");
  }  
  if (n < 0) {
    showProjects(projectIndex += n, "left");    
  } else {
    showProjects(projectIndex += n, "right"); 
  }
}

const showProjects = (num, direction) => {
  if (num >= projects.length) {
    projectIndex = 0;
  }
  if (num <= -1) {
    projectIndex = projects.length - 1;
  }
  display(projects[projectIndex], "grid");
  projects[projectIndex].style.animation = `from-${direction} 1s ease`;
  direction === "left" ? display(dummyRight[projectIndex], "block") : display(dummyLeft[projectIndex], "block");
}

//display project descriptions on hover and project details when clicked 
for (let i = 0; i < reactProjects.length; i++) {
  const hoverContent = document.getElementById(`show-on-hover-${i+1}`);
  const reactProjectDetails = document.getElementById(`react-project-details-${i+1}`);
  const learnMoreBtn = document.getElementById(`learn-more-btn-${i+1}`);

  reactProjects[i].addEventListener("mouseover", () => {
    hoverContent.style.left = "0";
    hoverContent.style.transition = "1s";
  });
  reactProjects[i].addEventListener("mouseout", () => {
    hoverContent.style = "";
    hoverContent.style.transition = "1s";
  }); 

  const displayProjectDetails = () => {
    display(reactProjectDetails, "grid");
    for (let j = 0; j < reactProjects.length; j++) {
      display(reactProjects[j], "none");
    }
  }
  learnMoreBtn.addEventListener("click", () => displayProjectDetails());

  const closeProjectDetails = () => {
    display(reactProjectDetails, "none");
    for (let j = 0; j < reactProjects.length; j++) {
      display(reactProjects[j], "flex");
    }
  }

  for (let i = 0; i < reactProjects.length; i++) {
    closeReactDetailsBtns[i].addEventListener("click", closeProjectDetails);
  }
};

// loadMore.addEventListener("click", () => {
//   display(loadMore, "none");

//   for (let i = 0; i < galaryRow.length; i++ ) {
//     display(galaryRow[i], "grid");
//     galaryRow[i].style.gridTemplate = "repeat(1, 1fr) / repeat(3, 1fr)";
//   }

//   for (let i = 0; i < reactProjects.length; i++) {
//     reactProjects[i].style.gridArea = `1 / ${i % 3 + 1} / span 1 / span 1`;
//     reactProjects[i].style.width = "98%";
//     reactProjects[i].style.transition = "none";
//   }
// });

const featuredSlides = document.getElementsByClassName("featured-slide");
const slideWrapper = document.getElementById("featured-slides-wrapper");
const featuredLeftBtn = document.getElementById("featured-left-btn");
const featuredRightBtn = document.getElementById("featured-right-btn");
const featuredDots = document.getElementsByClassName("featured-dot");

let currentSlideIndex = 0;
const showSlide = (n) => {
  if (n >= featuredSlides.length) {
    currentSlideIndex = 0;
  }
  if (n < 0) {
    currentSlideIndex = featuredSlides.length;
  }
  for (i = 0; i < featuredDots.length; i++) {
    featuredDots[i].className = featuredDots[i].className.replace(" current", "");
}
  let width = window.screen.width * currentSlideIndex;
  slideWrapper.style.transform = `translateX(-${width}px)`;
  featuredDots[currentSlideIndex].className += " current";
}

const controlSlides = () => {
  showSlide(currentSlideIndex += 1);
}

const showCurrentSlide = (n) => {
  showSlide(currentSlideIndex = n);
}

document.getElementById("featured-slides-wrapper").style.width = `${window.screen.width * 4}px`;
  for (let i = 0; i < featuredSlides.length; i ++) {
    featuredSlides[i].style.width = `${window.screen.width}px`;
  }

window.addEventListener("load",function() {
  featuredDots[currentSlideIndex].className += " current";
})

