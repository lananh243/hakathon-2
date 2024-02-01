let heroInfo = JSON.parse(localStorage.getItem("heroInfo"));
let aboutMeInfo = JSON.parse(localStorage.getItem("aboutMeInfo"));
let projects = JSON.parse(localStorage.getItem("projects"));

console.log(heroInfo);
console.log(aboutMeInfo);

let heroName = document.getElementById("hero-name");
heroName.innerHTML = heroInfo.name;
let heroUrl = document.getElementById("imgUrl");
heroUrl.src = heroInfo.imgUrl;
let heroJob = document.getElementById("hero-job");
heroJob.innerHTML = heroInfo.job;
let heroDescription = document.getElementById("hero-description");
heroDescription.innerHTML = heroInfo.description;
let aboutMeDescription = document.getElementById("about-description");
aboutMeDescription.innerHTML = aboutMeInfo.description;
let aboutMeName = document.getElementById("about-name");
aboutMeName.innerHTML = aboutMeInfo.fullName;
let aboutMeAge = document.getElementById("about-age");
aboutMeAge.innerHTML = aboutMeInfo.age;
let aboutMeLanguages = document.getElementById("about-languages");
aboutMeLanguages.innerHTML = aboutMeInfo.languages;
let aboutMePhone = document.getElementById("about-phone");
aboutMePhone.innerHTML = aboutMeInfo.phone;
let aboutMeEmail = document.getElementById("about-email");
aboutMeEmail.innerHTML = aboutMeInfo.email;
let aboutMeAddress = document.getElementById("about-address");
aboutMeAddress.innerHTML = aboutMeInfo.address;

let skillName = document.querySelector(".view");
let skill = aboutMeInfo.skills.find((skill) => skill.id === 1);
skillName.innerHTML = skill? skill.name : "";
let skillpercen = document.querySelector(".wro");
skillpercen.innerHTML = skill? skill.percentage : "";
let skillDescri = document.querySelector(".job");
skillDescri.innerHTML = skill? skill.description : "";

let last = document.querySelector(".view-1");
skill = aboutMeInfo.skills.find((skill) => skill.id === 2);
last.innerHTML = skill? skill.name : "";
let laughter = document.querySelector(".wro-1");
laughter.innerHTML = skill? skill.percentage : "";
let said = document.querySelector(".job-1");
said.innerHTML = skill? skill.description : "";

let seven = document.querySelector(".view-2");
skill = aboutMeInfo.skills.find((skill) => skill.id === 3);
seven.innerHTML = skill? skill.name : "";
let sister = document.querySelector(".wro-2");
sister.innerHTML = skill? skill.percentage : "";
let langua = document.querySelector(".job-2");
langua.innerHTML = skill? skill.description : "";

let happy = document.querySelector(".view-3");
skill = aboutMeInfo.skills.find((skill) => skill.id === 4);
happy.innerHTML = skill? skill.name : "";
let beauti = document.querySelector(".wro-3");
beauti.innerHTML = skill? skill.percentage : "";
let jack = document.querySelector(".job-3");
jack.innerHTML = skill? skill.description : "";



// let title = document.querySelector(".little");
// title.innerHTML = project?.subTitle || "";

// let prodes = document.querySelector(".sub");
// prodes.innerHTML = project?.description || "";

// let proDate = document.querySelector(".mill");
// proDate.innerHTML = project?.date || "";

// let proClient = document.querySelector(".client");
// proClient.innerHTML = project?.client || "";

// let proTech = document.querySelector(".tech");
// proTech.innerHTML = project?.techs || "";
// let proType = document.querySelector(".type");
// proType.innerHTML = project?.type || "";
// let proUrl = document.querySelector(".url");
// if (proUrl && proUrl.tagName.toLowerCase() === "a") {
//   proUrl.textContent = project?.url || "";
//   proUrl.href = project?.url || "";
// }
// const project = JSON.parse(localStorage.getItem('projects'));
// const projectIndex = 0;
// const imgElement = document.querySelector('.project');
// imgElement.src = projects[projectIndex].imgUrl;

// const spanElement = document.querySelector('.nano');
// spanElement.innerText = projects[projectIndex].projectName;

// const webElement = document.querySelector('.little');
// webElement.innerText = projects[projectIndex].subTitle;
let projectImage = document.querySelector(".project");
let project = projects.find((project) => project.id === 1);
projectImage.src = project?.imgUrl || "";

let proName = document.querySelector(".nano");
proName.innerHTML = project?.projectName || "";


let title = document.querySelector(".little");
title.innerHTML = project?.subTitle || "";

let prodes = document.querySelector(".sub");
prodes.innerHTML = project?.description || "";

let proDate = document.querySelector(".mill");
proDate.innerHTML = project?.date || "";

let proClient = document.querySelector(".client");
proClient.innerHTML = project?.client || "";

let proTech = document.querySelector(".tech");
proTech.innerHTML = project?.techs || "";
let proType = document.querySelector(".type");
proType.innerHTML = project?.type || "";
let proUrl = document.querySelector(".url");
if (proUrl && proUrl.tagName.toLowerCase() === "a") {
  proUrl.textContent = project?.url || "";
  proUrl.href = project?.url || "";
}

let image = document.querySelector(".project-1");
project = projects.find((project) => project.id === 2);
image.src = project ? project.imgUrl : "";
let jectName = document.querySelector(".nano-1");
jectName.innerHTML = project?.projectName || "";
let subTit = document.querySelector(".little-1");
subTit.innerHTML = project?.subTitle || "";
let script = document.querySelector(".sub-1");
script.innerHTML = project?.description || "";
let date = document.querySelector(".mill-1");
date.innerHTML = project?.date || "";
let tech = document.querySelector(".tech-1");
tech.innerHTML = project?.techs || "";
let type = document.querySelector(".type-1");
type.innerHTML = project?.type || "";
let url = document.querySelector(".url-1");
if (url && url.tagName.toLowerCase() === "a") {
  url.textContent = project?.url || "";
  url.href = project?.url || "";
}

let picture = document.querySelector(".project-2");
project = projects.find((project) => project.id === 3);
picture.src = project ? project.imgUrl : "";
let nice = document.querySelector(".nano-2");
nice.innerHTML = project?.projectName || "";
let loop = document.querySelector(".little-2");
loop.innerHTML = project?.subTitle || "";
let moon = document.querySelector(".sub-2");
moon.innerHTML = project?.description || "";
let birth = document.querySelector(".mill-2");
birth.innerHTML = project?.date || "";
let text = document.querySelector(".tech-2");
text.innerHTML = project?.techs || "";
let wife = document.querySelector(".type-2");
wife.innerHTML = project?.type || "";
let pass = document.querySelector(".url-2");
if (pass && url.tagName.toLowerCase() === "a") {
  pass.textContent = project?.url || "";
  pass.href = project?.url || "";
}
let lag = document.querySelector(".project-3");
project = projects.find((project) => project.id === 4);
lag.src = project ? project.imgUrl : "";
let file = document.querySelector(".nano-3");
file.innerHTML = project?.projectName || "";
let sat = document.querySelector(".little-3");
sat.innerHTML = project?.subTitle || "";
let much = document.querySelector(".sub-3");
much.innerHTML = project?.description || "";
let many = document.querySelector(".mill-3");
many.innerHTML = project?.date || "";
let world = document.querySelector(".tech-3");
world.innerHTML = project?.techs || "";
let fun = document.querySelector(".type-3");
fun.innerHTML = project?.type || "";
let worri = document.querySelector(".url-3");
if (worri && url.tagName.toLowerCase() === "a") {
  worri.textContent = project?.url || "";
  worri.href = project?.url || "";
}
