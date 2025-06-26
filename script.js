let useRName = "Christian";
let useRAge = prompt("Please enter your age.");
useRAge = Number(useRAge);
let useRIsLoggedIn = true;
let useRIsBlocked = false;
let goTOPage = "";

if (useRName === "Christian" && useRAge >= 18 && useRIsBlocked === false) {
  console.log("Auth. process success!");
  goTOPage = "success.html";
  window.location.href = goTOPage;
} else {
  console.log("Error auth. process failed.");
  goTOPage = "fail.html";
  window.location.href = goTOPage;
}
