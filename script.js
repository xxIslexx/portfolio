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

// MODAL 1
    document.getElementById('img').addEventListener('click', function() {
      document.querySelector('.overlay_modal').style.display = 'block';
      document.getElementById('modal').style.display = 'block';
    });

    document.querySelector('.closeButton').addEventListener('click', function() {
        document.querySelector('.overlay_modal').style.display = 'none';
        document.getElementById('modal').style.display = 'none';
    });

    document.querySelector('.overlay_modal').addEventListener('click', function() {
        document.querySelector('.overlay_modal').style.display = 'none';
        document.getElementById('modal').style.display = 'none';
    });

  // MODAL 2
    document.getElementById('img2').addEventListener('click', function() {
      document.querySelector('.overlay_modal').style.display = 'block';
      document.getElementById('modal2').style.display = 'block';
    });

    document.getElementById('closeButton').addEventListener('click', function() {
        document.querySelector('.overlay_modal').style.display = 'none';
        document.getElementById('modal2').style.display = 'none';
    });

    document.querySelector('.overlay_modal').addEventListener('click', function() {
        document.querySelector('.overlay_modal').style.display = 'none';
        document.getElementById('modal2').style.display = 'none';
    });

    //MODAL 3
    document.getElementById('img3').addEventListener('click', function() {
      document.querySelector('.overlay_modal').style.display = 'block';
      document.getElementById('modal3').style.display = 'block';
    });

    document.getElementById('closeButton3').addEventListener('click', function() {
        document.querySelector('.overlay_modal').style.display = 'none';
        document.getElementById('modal3').style.display = 'none';
    });

    document.querySelector('.overlay_modal').addEventListener('click', function() {
        document.querySelector('.overlay_modal').style.display = 'none';
        document.getElementById('modal3').style.display = 'none';
    });

    //MODAL 4
    document.getElementById('img4').addEventListener('click', function() {
      document.querySelector('.overlay_modal').style.display = 'block';
      document.getElementById('modal4').style.display = 'block';
    });

    document.getElementById('closeButton4').addEventListener('click', function() {
        document.querySelector('.overlay_modal').style.display = 'none';
        document.getElementById('modal4').style.display = 'none';
    });

    document.querySelector('.overlay_modal').addEventListener('click', function() {
        document.querySelector('.overlay_modal').style.display = 'none';
        document.getElementById('modal4').style.display = 'none';
    });
  });
