
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

// document.addEventListener("DOMContentLoaded", () => {
//     const btn1 = document.getElementById("btn1");
//     const btn2 = document.getElementById("btn2");
//     const btn3 = document.getElementById("btn3");
//     const image = document.getElementById("image");
//     const logoutBtn = document.getElementById("logoutBtn");
  
//     function checkRegistrationAndRedirect(page) {
//         const userName = localStorage.getItem("userName");
//         const password = localStorage.getItem("password");
  
//         if (userName && password) {
//             window.location.assign(page);
//         } else {
//             window.location.assign("./register.html");
//         }
//     }
  
//     function handleLogout() {
//         localStorage.removeItem("userName");
//         localStorage.removeItem("password");
//         window.location.assign("./register.html");
//     }
  
//     if (image) {
//       image.addEventListener("click", () => {
//           const userName = localStorage.getItem("userName");
//           const password = localStorage.getItem("password");
  
//           if (userName && password) {
//               window.location.assign("./index.html");
//           } else {
//               window.location.assign("./register.html");
//           }
//       });
//     }
  
//     if (btn1) {
//       btn1.addEventListener("click", () => checkRegistrationAndRedirect("./oneMin.html"));
//     }
    
//     if (btn2) {
//       btn2.addEventListener("click", () => checkRegistrationAndRedirect("./twoMin.html"));
//     }
    
//     if (btn3) {
//       btn3.addEventListener("click", () => checkRegistrationAndRedirect("./threeMin.html"));
//     }
  
//     if (logoutBtn) {
//       logoutBtn.addEventListener("click", handleLogout);
//     }
// });
