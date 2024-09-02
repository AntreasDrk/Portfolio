let myLoading;
let myWelcomeTitleEl = document.getElementById("myWelcomeTitle")

myFunction()

function myFunction() {
  myLoading = setTimeout(showPage, 4000);
}

function showPage() {
  document.getElementById("loading-text").style.display = "none";
	document.getElementById("progress").style.display = "none";
  myWelcomeTitleEl.style.display = "block";
}
