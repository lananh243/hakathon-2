let heroInfo = JSON.parse(localStorage.getItem("heroInfo"));
let aboutMeInfo = JSON.parse(localStorage.getItem("aboutMeInfo"));
let projects = JSON.parse(localStorage.getItem("projects"));

console.log(heroInfo);

let heroName = document.getElementById("hero-name");
heroName.innerHTML = heroInfo.name;
let heroUrl = document.getElementById("imgUrl");
heroUrl.src = heroInfo.imgUrl;
let heroJob = document.getElementById("hero-job");
heroJob.innerHTML = heroInfo.job;

let heroDescription = document.getElementById("hero-description");
heroDescription.innerHTML = heroInfo.description;
