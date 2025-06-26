let useRName = "Christian";
let useRAge = prompt("Please enter your age.");
useRAge = Number(useRAge);
let useRIsLoggedIn = false;
let useRIsBlocked = false;
let goTOPage = "";

if (useRName !== "" && useRAge >= 18 && useRIsBlocked === false) {
  console.log("Auth. process success!");
  useRIsLoggedIn = true;
  goTOPage = "success.html";
  window.location.href = goTOPage;
} else {
  console.log("Error auth. process failed.");
  goTOPage = "fail.html";
  window.location.href = goTOPage;
}
