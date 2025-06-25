let useRName = "Christian";
let useRAge = prompt("Please enter your age.");
userAge = Number(userAge);
let useRIsLoggedIn = true;
let useRIsBlocked = false;
let goTOPage = "";

if (userName === "Christian" && userAge <= 18 && userIsBlocked === false) {
  console.log("Auth. process success!");
  goTOPage = "success.html";
  window.location.href = goTOPage;
} else {
  console.log("Error auth. process failed.");
  goTOPage = "fail.html";
  window.location.href = goTOPage;
}
