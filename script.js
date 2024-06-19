$(document).ready(function(){
    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
    let DocTitle = document.title;
    window.addEventListener("blur",() => {
      document.title = "REVIENS STP";
    });
    window.addEventListener("focus",() =>{
      document.title = DocTitle;
    });
    document.querySelector('.click').addEventListener('click', function() {
      alert('Button was clicked!');
    });
  });
