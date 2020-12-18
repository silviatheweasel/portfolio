
function showContentColmar() {
    document.getElementById('container').style.display = "block";
    document.getElementById('colmar').style.display = "grid";
    document.getElementById('slide-show').style.display = "none";
}

function showContentBlog() {
  document.getElementById('container').style.display = "block";
  document.getElementById('blog').style.display = "grid";
  document.getElementById('slide-show').style.display = "none";
}

function showContentBR() {
  document.getElementById('container').style.display = "block";
  document.getElementById('BR').style.display = "grid";
  document.getElementById('slide-show').style.display = "none";
}

function closeContent() {
  document.getElementById('slide-show').style = "";
  document.getElementById('container').style = "";
  for (let i = 0; i < projects.length; i++) {
    projects[i].style.display = "none";
  }
  
}

document.getElementById('image2').addEventListener("click", showContentBlog);
document.getElementById('image1').addEventListener("click", showContentColmar);
document.getElementById('image3').addEventListener("click", showContentBR);
document.getElementById('close').addEventListener('click', closeContent);


let projectIndex = 0;
let projects = document.getElementsByClassName("project-container");

// Next/previous controls
function plusProjects(n) {
  for (let i = 0; i < projects.length; i++) {
    projects[i].style.display = "none";
  }
  if (n < 0) {
    showProjects1(projectIndex += n);
  } else {
    showProjects2(projectIndex += n);
  }
}

function showProjects1(num) {
  if (num >= projects.length) {projectIndex = 0;}
  if (num <= -1) {projectIndex = projects.length - 1}
  // for (let i = 0; i < projects.length; i++) {
  //   projects[i].style.display = "none";
  // }
  projects[projectIndex].style.display = "grid";
  projects[projectIndex].style.animation = "fromLeft 1s ease";
  // projects[projectIndex+1].style.animation = "rightOut 1s ease";
}

function showProjects2(num) {
  if (num >= projects.length) {projectIndex = 0;}
  if (num <= -1) {projectIndex = projects.length - 1}
  // for (i = 0; i < projects.length; i++) {
  //   projects[i].style.display = "none";
  // }
  projects[projectIndex].style.display = "grid";
  projects[projectIndex].style.animation = "fromRight 1s ease";   
  // projects[projectIndex-1].style.animation = "leftOut 1s ease";
}
