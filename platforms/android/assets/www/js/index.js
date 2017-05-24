
var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },


    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },


    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },

    takePict: function(){

      var takePic = document.getElementById("takePicture");

      takePic.addEventListener("click", function(){
        alert("declenche la camera");

          navigator.camera.getPicture(function(picture){}, function(error){}, null);

      })

    },



};




  //alert(window.innerHeight);
  var windowH = window.innerHeight;
  var banHeight = document.querySelectorAll(".jobs");
  var back = document.querySelectorAll(".back");


  /*window.addEventListener('resize', function(){

    for (var i = 0; i < banHeight.length; i++) {

        var banHArr = banHeight[i];
        banHArr.style.height = ((windowH/2)-20)+"px";

    }


    for (var i = 0; i < back.length; i++) {

        var backArr = back[i];
        backArr.style.height = windowH-50+"px";

    }

  })*/



  var plugins =
  {


     domAnimate:function (id, leftval, rightVal, topVal, bottomVal,delay,easing)
     {

       $(function(){

          $(id).animate({

            left: leftval,
            right: rightVal,
            top:topVal,
            bottom: bottomVal,

          },{

            duration: delay,
            easing: easing,

          })

       })

     },


     hide:function(id, delay)
     {

       var id = document.querySelector(id);
       $(function(){

          $(id).hide(delay);

       })

     },


     show:function(id, delay)
     {

       var id = document.querySelector(id);
       $(function(){

          $(id).hide(delay);

       })

     },


     showChoosedJobs:function(id)
     {

       var id = document.querySelector(id);
       $(function(){

          $(id).show(500);

       })


     },


     hideChoosedJobs:function(id)
     {

       var id = document.querySelector(id);
       $(function(){

          $(id).hide(500);

       })

     },


     showStepByStep:function(id, easing)
     {

       $(function(){

           $(id).first().show(easing, function showNext(){

               $(this).next().show(easing, showNext);

           })

       })

     },


     hideStepByStep:function(id, easing)
     {

       $(function(){

           $(id).first().hide(easing, function showNext(){

               $(this).next().hide(easing, showNext);

           })

       })

     }

  };





  var start = document.getElementById("start");
  var menuApp = document.getElementById("menuApp");
  var logo = document.getElementById("logo");

  start.addEventListener("click", function(){

     start.style.opacity = "0";
     start.style.transition = "opacity 0.1s linear 0s";
     start.style.zIndex = "2";
     displayJobs();

  })


  logo.addEventListener("click", function(){

     start.style.opacity = "1";
     start.style.transition = "opacity 0.1s linear 0s";
     start.style.zIndex = "4";
     location.reload();


  })


   var burgerMenu = document.querySelector(".iconnav");

   burgerMenu.addEventListener("click", function(){

      $(".overlay").show(0);
      //hideAllJobs();

   })


   function showCurrentJobs(id)
   {

     var closebtn = document.querySelector(".closebtn");

     closebtn.addEventListener("click", function(){

        showChoosedJobs(id);

     })

   }



  function displayJobs(){

     var ban1 = document.getElementById("jobs1");
     var ban2 = document.getElementById("jobs2");
     var ban3 = document.getElementById("jobs3");
     var ban4 = document.getElementById("jobs4");
     $(function(){

        $(ban1).animate({

          right: 0,
          bottom: 0,

        },{

          duration: 500,
          easing: "easeInOutBack",

        })

        $(ban2).animate({

          left: 0,
          bottom: 0,

        },{

          duration: 500,
          easing: "easeInOutBack",

        })


        $(ban3).animate({

          right: 0,
          top: 0,

        },{

          duration: 500,
          easing: "easeInOutBack",

        })


        $(ban4).animate({

          left: 0,
          top: 0,

        },{

          duration: 500,
          easing: "easeInOutBack",

        })

     })

  }




  function choosedJobs()
  {

  //  domAnimate('.icon-play3', 0,0,0,0, 700, 'easeOutBounce');
    //domAnimate('.icon-pause2', 0,0,0,0, 700, 'easeOutBounce');
    var body = document.getElementById("body");


    var jobs = document.querySelectorAll(".ban");
    var jobsName = document.querySelectorAll(".ban p");
    //  var playPause = document.querySelectorAll('.playPause');

      for (var i = 0; i < jobs.length; i++) {

          var jobsArr = jobs[i];

          jobsArr.addEventListener("click", function(e){

            //plugins.showStepByStep(playPause,'slow');

             var jobsId = e.target.id;

             jobsDisapear();
             //plugins.showChoosedJobs("#jobsContainer");
             plugins.showChoosedJobs("."+jobsId);

            if(jobsId == "jobs1")
             {

              //  body.style.backgroundImage = "url(./img/AchtergrondenJobsOfTheFuture/achtergrondpiet.jpg)";

             }else if(jobsId == "jobs2")
             {

                /*body.style.backgroundImage = "url(./img/AchtergrondenJobsOfTheFuture/opening.jpg)";
                body.style.backgroundSize = "60vh";*/
                frameLooper2();

             }else if(jobsId == "jobs3")
             {

                //body.style.backgroundImage = "url(./img/AchtergrondenJobsOfTheFuture/achtergrondpiet.jpg)";

             }else if(jobsId == "jobs4")
             {

                //body.style.backgroundImage = "url(./img/AchtergrondenJobsOfTheFuture/achtergrondpiet.jpg)";
                plugins.domAnimate('#persoon4', 10,0,100,0, 1500, 'easeOutBounce');
                frameLooper4();


             }


          })

      }



      for (var i = 0; i < jobsName.length; i++) {

          var jobsNameArr = jobsName[i];

          jobsNameArr.addEventListener("click", function(e){

            //plugins.showStepByStep(playPause,'slow');

             var jobsNameId = e.target.parentNode.id;

             jobsDisapear();
             //plugins.showChoosedJobs("#jobsContainer");
             plugins.showChoosedJobs("."+jobsNameId);

            if(jobsNameId == "jobs1")
             {

              //  body.style.backgroundImage = "url(./img/AchtergrondenJobsOfTheFuture/achtergrondpiet.jpg)";

            }else if(jobsNameId == "jobs2")
             {

                //body.style.backgroundImage = "url(./img/AchtergrondenJobsOfTheFuture/opening.jpg)";
                frameLooper2();

             }else if(jobsNameId == "jobs3")
             {

                //body.style.backgroundImage = "url(./img/AchtergrondenJobsOfTheFuture/achtergrondpiet.jpg)";

             }else if(jobsNameId == "jobs4")
             {

               //body.style.backgroundImage = "url(../img/AchtergrondenJobsOfTheFuture/achtergrondpiet.jpg)";
                plugins.domAnimate('#persoon4', 10,0,100,0, 1500, 'easeOutBounce');
                frameLooper4();


             }


          })

      }

  }


  function chooseJobs()
  {

      var jobsName = document.querySelectorAll(".jobsName");

      jobsName[0].addEventListener("click", function(){

         jobsDisapear();
         plugins.showChoosedJobs(".jobs1");
         plugins.hide(".overlay", 500);
         plugins.hide(".jobs4", 500);
         plugins.hide(".jobs2", 500);
         plugins.hide(".jobs3", 500);

      })

      jobsName[1].addEventListener("click", function(){

         jobsDisapear();
         plugins.showChoosedJobs(".jobs2");
         plugins.hide(".overlay", 500);
         plugins.hide(".jobs1", 500);
         plugins.hide(".jobs4", 500);
         plugins.hide(".jobs3", 500);
         frameLooper2();

      })

      jobsName[2].addEventListener("click", function(){

         jobsDisapear();
         plugins.showChoosedJobs(".jobs3");
         plugins.hide(".overlay", 500);
         plugins.hide(".jobs1", 500);
         plugins.hide(".jobs2", 500);
         plugins.hide(".jobs4", 500);

      })

      jobsName[3].addEventListener("click", function(){

         jobsDisapear();
         plugins.showChoosedJobs(".jobs4");
         plugins.hide(".overlay", 500);
         plugins.hide(".jobs1", 500);
         plugins.hide(".jobs2", 500);
         plugins.hide(".jobs3", 500);
         plugins.domAnimate('#persoon4', 0,-10,30,0, 1500, 'easeOutBounce');
         frameLooper4();

      })

  }
  chooseJobs();


  function jobsDisapear()
  {

    var ban1 = document.getElementById("jobs1");
    var ban2 = document.getElementById("jobs2");
    var ban3 = document.getElementById("jobs3");
    var ban4 = document.getElementById("jobs4");

     $(function(){

       $(ban1).animate({

         right: 300,
         bottom: 300,

       },{

         duration: 700,
         easing: "easeInOutBack",

       })

       $(ban2).animate({

         left: 300,
         bottom: 300,

       },{

         duration: 700,
         easing: "easeInOutBack",

       })


       $(ban3).animate({

         right: 300,
         top: 300,

       },{

         duration: 700,
         easing: "easeInOutBack",

       })


       $(ban4).animate({

         left: 300,
         top: 300,

       },{

         duration: 700,
         easing: "easeInOutBack",

       })

     })

     plugins.hide(".app",1500);

  }


  function hideAllJobs()
  {

     //var jobsArr = new Array();

     for (var i = 1; i < 5; i++) {

       var jobs = document.querySelectorAll(".jobs"+i);
      // alert(jobs.className);
       jobs[0].style.display = "none";

     }



  }
  hideAllJobs();

  var string2 = document.getElementById("text2");
  //var string = document.getElementById("text2");
  //var string = document.getElementById("text3");

  var text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  var textArr = text.split("");
  var timer;

  function frameLooper2()
  {


     if(textArr.length > 0)
     {

       string2.innerHTML += textArr.shift();

     }else{

       clearTimeout(timer);

     }

     timer = setTimeout(frameLooper2,20);


  }
  //frameLooper2();


  var string4 = document.getElementById("text4");
  var text4 = "hallo mijn naam is piet ik had een huis in amsterdam tot ander half jaar geleden. Ik was een werknemer bij de klm ik laadde vliegtuigen vol en haalde ze ook weer leeg maar omdat de economie zo verandert is en er geen baan meer was voor mij bij schiphol ben ik ontslagen waardoor ik geen inkomen meer had en ik me huis ben verloren maar nu probeer ik nog geld te verdienen door muziek te spelen op straat, hierdoor heb ik veel contact met mensen en word ik goed geholpen.";
  var textArr4 = text4.split("");
  var timer4;


  function frameLooper4()
  {

     if(textArr4.length > 0)
     {

       string4.innerHTML += textArr4.shift();

     }else{

       clearTimeout(timer4);

     }

     timer4 = setTimeout(frameLooper4,20);


  }


  function parallax(){

    var animation4 = document.getElementById("animation4");
    var startLocal = document.getElementById("startLocal");

    plugins.hide("#persoon5", 700);
    plugins.hide("#text5", 700);

    $(window).scroll(function(){

      var windowY = window.pageYOffset;
    //   var windowY = $(window).scrollTop();
       var persoon4 = $("#persoon4").offset().top - 190;

         //string4.innerHTML += ' '+persoon4;

           if(windowY > 90)
           {

              //  plugins.domAnimate('#persoon4', -500,0,0,0, 1000, 'easeInOutBounce');
              //  plugins.domAnimate('#text4', 500,0,0,0, 1000, 'easeInOutBounce');
              plugins.hide("#startLocal", 700);
              $("#eu").css("opacity", "1");

            $(function(){

                $(".fithElem").first().show('easeInOutBounce', function showNext(){

                    $(this).next().show('easeInOutBounce', showNext);

                })

            })

            frameLooper5();


          }



           if(windowY > 190)
          {
              console.log("sup");
              $("#euFlag").css("opacity", "1");


          }


          if(windowY > 195)
          {

            plugins.domAnimate('#turki', 290,0,60,0, 1000, 'easeInOutBounce');
            plugins.domAnimate('#france', 250,0,0,0, 1000, 'easeInOutBounce');
            plugins.domAnimate('#uk', 250,0,150,0, 1000, 'easeInOutBounce');
            plugins.domAnimate('#grec', 100,0,50,0, 1000, 'easeInOutBounce');
            plugins.domAnimate('#rom', 130,0,100,0, 1000, 'easeInOutBounce');
            plugins.domAnimate('#span', 150,0,80,0, 1000, 'easeInOutBounce');

          }else if(windowY < 190){
            console.log("inf");

           $("#euFlag").css("opacity", "0");
          /* plugins.domAnimate('#turki', 0,0,0,0, 1000, 'easeInOutBounce');
           plugins.domAnimate('#france', 0,0,0,0, 1000, 'easeInOutBounce');
           plugins.domAnimate('#uk', 0,0,0,0, 1000, 'easeInOutBounce');
           plugins.domAnimate('#grec', 0,0,0,0, 1000, 'easeInOutBounce');
           plugins.domAnimate('#rom', 0,0,0,0, 1000, 'easeInOutBounce');
           plugins.domAnimate('#span', 0,0,0,0, 1000, 'easeInOutBounce');*/

         }



    })

  }
  parallax();


  var string5 = document.getElementById("text5");
  var text5  ="Veel landen zijn de eu uitgestapt en proberen hun eigen weg te vinden ook nederland heeft dat gedaan. De economie is nationaal geworden de focus ligt nu voornamelijk op nederland en de omliggende landen waar nog een klein beetje mee word gehandelt, Nederland probeert zelf voorzienend te worden maar dat is niet al te makkelijk en veel mensen zijn hun baan verloren waaronder ik het leven is zwaar maar we hebben wel elkaar nog en dat maakt het beter.";
  var textArr5 = text5.split("");
  var timer5;


//  plugins.hide("#persoon5",0);
//  plugins.hide("#text5",0);


  function frameLooper5()
  {

     if(textArr5.length > 0)
     {

       string5.innerHTML += textArr5.shift();

     }else{

       clearTimeout(timer5);

     }

     timer5 = setTimeout(frameLooper5,20);


  }

     choosedJobs();
