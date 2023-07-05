window.addEventListener("message", function (event) {
  switch (event.data.action) {
      case "StartMinigame":
              start()
          break;
  }
});


$(document).ready(function() {
  let wyraz = null
  let timerek = null
})



  


function start() {
    let timerek = null
    $('.hack-container').fadeIn(500)
    $('.main').fadeIn(500)
    $('.math-container').fadeIn(500)
    $('#input').fadeOut(1)

    wyraz = generujWyraz() 

    console.log(wyraz)

    $('.math').text(wyraz)

    startProgressBar(10000, function () {
      $('.math-container').fadeOut(500)
      $('#input').fadeIn(500)
      $('.header-text').text('Uzupełnij ciąg znaków')
        startProgressBar(10000, function () {
          $('.main').fadeOut(500)
          $('.przegrales').fadeIn(500)
          let audio = document.getElementById("error");
          audio.volume = 0.5
          audio.play();
          stopProgressBar();
          startProgressBar2(5000, function () {
              $('.przegrales').fadeOut(500) 
              $('.hack-container').fadeOut(500)
              $.post(`http://${GetParentResourceName()}/nieudane`)
          });
        });
    });
    
}

$('#input').keypress(function(event) {
    if (event.keyCode === 13) { // Sprawdź, czy został wciśnięty klawisz Enter
      event.preventDefault(); // Zapobiegnij domyślnej akcji przeglądarki (np. wysłanie formularza)
      let text = $(this).val(); // Pobierz zawartość pola tekstowego
      $(this).val(""); // Wyczyść zawartość pola tekstowego

      if (text == wyraz){
        let audio = document.getElementById("win");
        audio.volume = 0.5
        audio.play();
        $('.main').fadeOut(500)
        $('.wygrales').fadeIn(500)
        stopProgressBar();
        startProgressBar3(5000, function () {
            $('.wygrales').fadeOut(500) 
            $('.hack-container').fadeOut(500)
            $.post(`http://${GetParentResourceName()}/udane`)
        });
      }else{
        $('.main').fadeOut(500)
        $('.przegrales').fadeIn(500)
        let audio = document.getElementById("error");
        audio.volume = 0.5
        audio.play();
        stopProgressBar();
        startProgressBar2(5000, function () {
            $('.przegrales').fadeOut(500) 
            $('.hack-container').fadeOut(500)
            $.post(`http://${GetParentResourceName()}/nieudane`)
        });
      }
    }
  });



function startProgressBar(duration, onComplete) {
    const progressBar = document.getElementById("fill");
    let progress = 100;
    const interval = 10;
    timerek = setInterval(function() {
      if (progress <= 0) {
        clearInterval(timerek);
        if (typeof onComplete === "function") {
          onComplete();
        }
      } else {
        progress -= (interval / duration) * 100;
        $('.time').text((progress / 10).toFixed(1) + 's');

        if (progress < 0) {
          progress = 0;
        }
        progressBar.style.width = progress + "%";
      }
    }, interval);
  }

  
  function stopProgressBar() {
    clearInterval(timerek);
  }  

  function startProgressBar2(duration, onComplete) {
    const progressBar = document.getElementById("fill2");
    let progress = 100;
    const interval = 10;
    const timer = setInterval(function() {
      if (progress <= 0) {
        clearInterval(timer);
        if (typeof onComplete === "function") {
          onComplete();
        }
      } else {
        progress -= (interval / duration) * 100;
        $('.time').text((progress / 2).toFixed(1) + 's');

        if (progress < 0) {
          progress = 0;
        }
        progressBar.style.width = progress + "%";
      }
    }, interval);
  }

  function generujWyraz() {
    let wyraz = '';
    let litery = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    for (let i = 0; i < 8; i++) {
      let losowaLiczba = Math.floor(Math.random() * litery.length);
      wyraz += litery.charAt(losowaLiczba);
    }
    
    return wyraz;
  }
  

  function startProgressBar3(duration, onComplete) {
    const progressBar = document.getElementById("fill3");
    let progress = 100;
    const interval = 10;
    const timer = setInterval(function() {
      if (progress <= 0) {
        clearInterval(timer);
        if (typeof onComplete === "function") {
          onComplete();
        }
      } else {
        progress -= (interval / duration) * 100;
        $('.time').text((progress / 2).toFixed(1) + 's');

        if (progress < 0) {
          progress = 0;
        }
        progressBar.style.width = progress + "%";
      }
    }, interval);
  }

  // var var var var chuj wam w dumpe z tym varem już go nie ma oke? nie bijcie pls