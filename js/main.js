

function openMenu() {
  var menu = document.getElementById("mainMenu");
  if (menu) {
    menu.className=(menu.className=='hide')?'show':'hide';
  }
}
function openUser() {
    var user = document.getElementById("userMenu");
    if (user) {
      user.className=(user.className=='hide')?'show':'hide';
    }
}
function showSearch() {
    var item = document.getElementById("searchBar");
    if (item) {
      item.className=(item.className=='hide')?'show':'hide';
    }
}

function openSubCategory() {
  var sub = document.getElementsByClassName("subcategory")
  var i;
}

/* toggle Category Sidebar */
function openCategories() {
  document.getElementById("catSidebar").style.width = "250px";
  document.getElementById("content").style.marginLeft = "250px";
}
function closeCategories() {
  document.getElementById("catSidebar").style.width = "0px";
  document.getElementById("content").style.marginLeft = "0px";
}

// media Queries
function viewportChange() {
  var vpw = window.innerWidth;
  if (vpw < 720) {
    // scripts
    closeCategories();
  }
  if (vpw > 720) {
    // scripts
    openCategories();
  }
}
viewportChange();

// Slideshow

// Slideshow
var slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" activeSlide", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " activeSlide";
}
