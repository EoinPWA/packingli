




function show_blog() {
    document.getElementsByClassName("apropos")[0].style.display = "none";
    document.getElementsByClassName("blog")[0].style.display = "block";
}

function hide_blog() {
    document.getElementsByClassName("apropos")[0].style.display = "block";
    document.getElementsByClassName("blog")[0].style.display = "none";
}


/*
function show_blog_touch() {
    document.getElementsByClassName("apropos")[0].style.display = "none";
    document.getElementsByClassName("blog")[0].style.display = "block";

}

function hide_blog_touch() {
    document.getElementsByClassName("apropos")[0].style.display = "block";
    document.getElementsByClassName("blog")[0].style.display = "none";
}

*/

function show_blog_touch() {
    var x = document.getElementsById("apropos");
    var y = document.getElementsById("blog");

    if (x.style.display === "block")  {

     x.style.display = "none";
     y.style.display = "block";

     } else {

     x.style.display = "block";
     y.style.display = "none";

    }
    }



function hiddenDivFunction() {
  var x = document.getElementById("hidden-table");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}