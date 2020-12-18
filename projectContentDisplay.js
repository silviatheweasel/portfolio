
function showContentColmar() {
    document.getElementById('colmar').style.display = "grid";
    document.getElementById('slide-show').style.display = "none";
}

function closeContentColmar() {
    document.getElementById('colmar').style = "";
    document.getElementById('slide-show').style = "";
}

document.getElementById('image1').addEventListener("click", showContentColmar);
document.getElementById('close-colmar').addEventListener('click', closeContentColmar);

function showContentBlog() {
    document.getElementById('blog').style.display = "grid";
    document.getElementById('slide-show').style.display = "none";
}

function closeContentBlog() {
    document.getElementById('blog').style = "";
    document.getElementById('slide-show').style = "";
}

document.getElementById('image2').addEventListener("click", showContentBlog);
document.getElementById('close-blog').addEventListener('click', closeContentBlog);

function showContentBR() {
    document.getElementById('BR').style.display = "grid";
    document.getElementById('slide-show').style.display = "none";
}

function closeContentBR() {
    document.getElementById('BR').style = "";
    document.getElementById('slide-show').style = "";
}

document.getElementById('image3').addEventListener("click", showContentBR);
document.getElementById('close-BR').addEventListener('click', closeContentBR);

var projectIndex = 1;
showProjects(projectIndex);

// Next/previous controls
function plusProjects(n) {
  showProjects(projectIndex += n);
}

// Thumbnail image controls
function currentProject(n) {
  showProjects(projectIndex = n);
}

function showProjects(n) {
  var i;
  var projects = document.getElementsByClassName("project-container");
  if (n > projects.length) {projectIndex = 1}
  if (n < 1) {projectIndex = projects.length}
  for (i = 0; i < projects.length; i++) {
    projects[i].style.display = "none";
  }
  projects[projectIndex-1].style.display = "grid";
}