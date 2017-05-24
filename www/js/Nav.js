window.addEventListener("load", function()
{

  var closebtn = document.querySelector(".closebtn").addEventListener("click", closeNav);
  var iconnav = document.querySelector(".iconnav").addEventListener("click", openNav);

  function openNav() {

      document.getElementById("myNav").style.height = "100%";
  }

  function closeNav() {
      document.getElementById("myNav").style.height = "0%";
  }

})
