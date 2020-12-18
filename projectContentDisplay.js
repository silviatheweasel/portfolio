
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