const projects = document.getElementsByClassName("project-container");
const about = document.getElementById("about");
let projectIndex = 0;
const dummyLeft = document.getElementsByClassName('dummy-left');
const dummyRight = document.getElementsByClassName('dummy-right');
const reactProjects = document.getElementsByClassName("react-project");
const closeVideoBtns = document.getElementsByClassName("close-btn");
const display = (element, displayStyle) => element.style.display = displayStyle;
const styleReset = element => element.style = "";


const showContent = () => {
  display(document.getElementById('slide-show'), "none");
  display(document.getElementById('container'), "block");
  display(about, "none");
}

//display the content page when the slide is clicked
for (let i = 0; i < projects.length; i ++) {
  const image = document.getElementById(`image${i + 1}`);
  image.addEventListener("click", () => {
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

//display project descriptions on hover and demo videos when clicked 
for (let i = 0; i < reactProjects.length; i++) {
  const hoverContent = document.getElementById(`show-on-hover-${i+1}`);
  const demoVideo = document.getElementById(`demo-video-${i+1}`);
  const watchBtn = document.getElementById(`watchBtn-${i+1}`);

  reactProjects[i].addEventListener("mouseover", () => display(hoverContent, "block"));
  reactProjects[i].addEventListener("mouseout", () => display(hoverContent, "none")); 

  const displayVideo = () => {
    display(demoVideo, "flex");
    for (let j = 0; j < reactProjects.length; j++) {
      display(reactProjects[j], "none");
    }
  }
  watchBtn.addEventListener("click", () => displayVideo());

  const closeVideo = () => {
    display(demoVideo, "none");
    for (let j = 0; j < reactProjects.length; j++) {
      display(reactProjects[j], "block");
    }
  }

  for (let i = 0; i < projects.length; i++) {
    closeVideoBtns[i].addEventListener("click", closeVideo);
  }
};
