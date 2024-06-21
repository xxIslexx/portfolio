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

    //MODAL 5
    document.getElementById('img5').addEventListener('click', function() {
      document.querySelector('.overlay_modal').style.display = 'block';
      document.getElementById('modal5').style.display = 'block';
    });

    document.getElementById('closeButton5').addEventListener('click', function() {
        document.querySelector('.overlay_modal').style.display = 'none';
        document.getElementById('modal5').style.display = 'none';
    });

    document.querySelector('.overlay_modal').addEventListener('click', function() {
        document.querySelector('.overlay_modal').style.display = 'none';
        document.getElementById('modal5').style.display = 'none';
    });

    //MODAL 6
    document.getElementById('img6').addEventListener('click', function() {
      document.querySelector('.overlay_modal').style.display = 'block';
      document.getElementById('modal6').style.display = 'block';
    });

    document.getElementById('closeButton6').addEventListener('click', function() {
        document.querySelector('.overlay_modal').style.display = 'none';
        document.getElementById('modal6').style.display = 'none';
    });

    document.querySelector('.overlay_modal').addEventListener('click', function() {
        document.querySelector('.overlay_modal').style.display = 'none';
        document.getElementById('modal6').style.display = 'none';
    });

    //MODAL 7
    document.getElementById('img7').addEventListener('click', function() {
      document.querySelector('.overlay_modal').style.display = 'block';
      document.getElementById('modal7').style.display = 'block';
    });

    document.getElementById('closeButton7').addEventListener('click', function() {
        document.querySelector('.overlay_modal').style.display = 'none';
        document.getElementById('modal7').style.display = 'none';
    });

    document.querySelector('.overlay_modal').addEventListener('click', function() {
        document.querySelector('.overlay_modal').style.display = 'none';
        document.getElementById('modal7').style.display = 'none';
    });

    //MODAL 8
    document.getElementById('img8').addEventListener('click', function() {
      document.querySelector('.overlay_modal').style.display = 'block';
      document.getElementById('modal8').style.display = 'block';
    });

    document.getElementById('closeButton8').addEventListener('click', function() {
        document.querySelector('.overlay_modal').style.display = 'none';
        document.getElementById('modal8').style.display = 'none';
    });

    document.querySelector('.overlay_modal').addEventListener('click', function() {
        document.querySelector('.overlay_modal').style.display = 'none';
        document.getElementById('modal8').style.display = 'none';
    });
  });
