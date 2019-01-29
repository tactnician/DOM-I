const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);
console.log(logo);

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);
console.log(ctaImg);

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

//Nav

// let navKeys = Object.keys(siteContent['nav']);
// console.log(navKeys);

let navLinks = document.querySelectorAll('nav a');
console.log(navLinks);

navLinks.forEach((link, i)=> link.innerHTML= siteContent.nav[`nav-item-${i+1}`]);
console.log(navLinks);

//CTA section

let h1 = document.querySelector('.cta-text h1');
h1.innerHTML= 'DOM Svengali<br>was<br>here!';

let ctaBtn = document.querySelector('.cta button');
ctaBtn.innerHTML = siteContent['cta']['button'];

//Main Content

let mainContentList = document.querySelectorAll('.text-content');
// console.log(mainContentList);
// console.log(Object.entries(siteContent["main-content"])[0]);

// mainContentList.forEach((item, i)=>{
//   console.log(mainContentList[i]);
//   mainContentList[i].getElementsByTagName('h4')[i].innerHTML =  Object.keys(siteContent["main-content"])[i]
// })
mainContentList[0].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["features-h4"];
mainContentList[0].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["features-content"];
mainContentList[1].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["about-h4"];
mainContentList[1].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["about-content"];
mainContentList[2].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["services-h4"];
mainContentList[2].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["services-content"];
mainContentList[3].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["product-h4"];
mainContentList[3].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["product-content"];
mainContentList[4].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["vision-h4"];
mainContentList[4].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["vision-content"];

//Contact Section 

let contact = document.getElementsByClassName("contact")[0];
console.log(contact);
contact.getElementsByTagName("h4")[0].innerHTML = siteContent["contact"]["contact-h4"]
contact.getElementsByTagName("p")[0].innerHTML = siteContent["contact"]["address"]
contact.getElementsByTagName("p")[1].innerHTML = siteContent["contact"]["phone"]
contact.getElementsByTagName("p")[2].innerHTML = siteContent["contact"]["email"]

//Footer Section
let footer = document.querySelector('footer');
footer.getElementsByTagName('p')[0].innerHTML = siteContent['footer']['copyright'];

//New Content 

// new nav items
nav = document.getElementsByTagName("nav")[0];
console.log(nav);
let createNode = (nodeName) => {
  let newNode = document.createElement("a");
  newNode.innerHTML = nodeName;
  return newNode;
}
nav.prepend(createNode("B4"));
nav.append(createNode("After"));

// change nav color
navLinks.forEach(link => link.style.color = 'green');