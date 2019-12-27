// Popover of Bootstrap
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}


function fun() {
    var test = setTimeout(loadPage,4000);
    }
    
 function loadPage() {
    document.getElementById("ttt").style.display = 'block';
    document.getElementById("LLLLOLADADDA").style.display = 'none';
    }

// Buys Discord Room //

