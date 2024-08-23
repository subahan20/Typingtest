
document.addEventListener("DOMContentLoaded", () => {
  let btn1 = document.getElementById("btn1");
  let btn2 = document.getElementById("btn2");
  let btn3 = document.getElementById("btn3");
  let image = document.getElementById("image");
  let logoutBtn = document.getElementById("logoutBtn");

  function checkRegistrationAndRedirect(page) {
      let userName = localStorage.getItem("useName");
      let password = localStorage.getItem("password");

      if (userName && password) {
          window.location.assign(page);
      } else {
          window.location.assign("./register.html");
      }
  }

  function handleLogout() {
      localStorage.removeItem("useName");
      localStorage.removeItem("password");
      window.location.assign("./register.html");
  }

  image.addEventListener("click", () => {
      let userName = localStorage.getItem("useName");
      let password = localStorage.getItem("password");

      if (userName && password) {
          window.location.assign("./index.html");
      } else {
          window.location.assign("./register.html");
      }
  });

  btn1.addEventListener("click", () => checkRegistrationAndRedirect("./oneMin.html"));
  btn2.addEventListener("click", () => checkRegistrationAndRedirect("./twoMin.html"));
  btn3.addEventListener("click", () => checkRegistrationAndRedirect("./threeMin.html"));
  

  if (logoutBtn) {
      logoutBtn.addEventListener("click", handleLogout);
  }
});