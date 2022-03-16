/* HEADER */
window.onload = function() {scrollFunction()};
window.onscroll = function() {scrollFunction()};

/*timer*/
// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("time").innerHTML = days + "d " + hours + "h "+ minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "EXPIRED";
  }
}, 1000);


function scrollFunction() {  /* 네비게이션바 */
    var header = document.getElementById('header');

    if(document.documentElement.scrollTop > 70){  /* 페이지 윗 부분이라면 */
        if(!header.classList.contains('navbar-fixed')){
            header.classList.add('navbar-fixed');
            document.getElementsByTagName('body')[0].style.marginTop = '70px';
            header.style.display = 'none';
            setTimeout(function(){
                header.style.display = 'block'; /* 잠시 페이드아웃 되었다가 나타남 */
            },40);
        }
    } else {
        if(header.classList.contains('navbar-fixed')){
            header.classList.remove('navbar-fixed');
            document.getElementsByTagName('body')[0].style.marginTop = '0';
        }
    }
}

function menuToggle() {   /* 토글 버튼 */
    document.getElementById('menu').classList.toggle('show'); /* toggle이 없으면 생성해줌 */
}

document.getElementById('toggleBtn').addEventListener('click',menuToggle); /* toggle 누르면 토글함수 호출 */

/*MAP AREA*/
var detailsBox = document.getElementById('details-box');

document.addEventListener('mouseover', function (e) {
  if (e.target.tagName == 'path') {
    var content = e.target.id;
    detailsBox.innerHTML = content;
    detailsBox.style.opacity = "100%";
  }
  else {
    detailsBox.style.opacity = "0%";
  }
});

window.onmousemove = function (e) {
  var x = e.clientX,
      y = e.clientY;
  detailsBox.style.top = (y+40)+'px' ;
  detailsBox.style.left = x+'px';
};

/* PORTFOLIO AREA */
filterSelection('all');

function filterSelection(id) {
  var x, i;

  x = document.getElementsByClassName('listItem');
  for(i=0;i<x.length;i++){
    removeClass(x[i], 'active');
  }
  addClass(document.getElementById(id), 'active');

  x = document.getElementsByClassName('filterItem');
  if(id == 'all') id = '';
  for(i=0;i<x.length;i++){
    removeClass(x[i], 'show');
    if(x[i].className.indexOf(id) > -1)
      addClass(x[i], 'show');
  }
}

function addClass(element, name) {
    if(element.className.indexOf(name) == -1) {
      element.className += " " + name;
    }
}

function removeClass(element, name) {
  var arr;
  arr = element.className.split(" ");

 while(arr.indexOf(name) > -1){
   arr.splice(arr.indexOf(name), 1);
 }
 /* 배열의 원소들을 연결하여 하나의 값으로 만듭니다. */
 element.className = arr.join(" ");
}

document.getElementById('all').addEventListener('click', filterSelection.bind(null, 'all'));
document.getElementById('dance').addEventListener('click', filterSelection.bind(null, 'dance'));
document.getElementById('computer-programming').addEventListener('click', filterSelection.bind(null, 'computer-programming'));
document.getElementById('volunteer').addEventListener('click', filterSelection.bind(null, 'volunteer'));

function viewPortfolio(event){
    var polyNode = event.target;

    if(polyNode.tagName.toLowerCase() == 'i') {
        polyNode = polyNode.parentNode;
    }

    var overlayNode = polyNode;
    var imageNode = overlayNode.nextElementSibling;

    var itemNode = overlayNode.parentNode;
    var mainNode = itemNode.nextElementSibling;
    var subNode = mainNode.nextElementSibling;
    var textNode = subNode.nextElementSibling;

    document.getElementById('modalImage').src = imageNode.src;
    document.getElementById('modalMain').innerHTML = mainNode.innerHTML;
    document.getElementById('modalSub').innerHTML = subNode.innerHTML;
    document.getElementById('modalText').innerHTML = textNode.innerHTML;

    document.getElementById('portfolioModal').style.display = 'block';
}

document.getElementById('modalClose').addEventListener('click', function() {
    document.getElementById('portfolioModal').style.display='none';
});

var filterItems = document.getElementsByClassName('overlay');

for(var i=0; i<filterItems.length;i++){
    filterItems[i].addEventListener('click',viewPortfolio);
}

/* NAVBAR ANCHOR */
function moveTo(id) {
  if(id == 'brand'){
    window.scrollTo(0, 0);
  } else {
    window.scrollTo(0, document.getElementById(id).offsetTop - 70);
  }
  document.getElementById('menu').classList.remove('show');
}

document.getElementById('navbarBrand').addEventListener('click', moveTo.bind(null,'brand'));
document.getElementById('navbarAbout').addEventListener('click', moveTo.bind(null,'about'));
document.getElementById('navbarActivities').addEventListener('click', moveTo.bind(null,'activities'));
document.getElementById('navbarPortfolio').addEventListener('click', moveTo.bind(null,'portfolio'));
