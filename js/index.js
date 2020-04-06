const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//making the nav -------------------------------------------------
let navigation = document.querySelector("nav");

const links = navigation.querySelectorAll("a");

function createNav() {
  //pull values from site content/nav
  const navContent = Object.values(siteContent.nav);

  for (let i = 0; i < links.length; i++) {
    //assign each link value to the empty a tags
    links[i].textContent = navContent[i];

    //Links new color-------------------------
    links[i].style.color = "green";
  }
}
createNav();

//Add new items to nav--------------------------------------------------

//link where
const newLink = document.createElement("a");

//add stuff to new link
newLink.href = "#"; //set attribute
newLink.textContent = "Where"; // set content
newLink.style.color = "green";
// the parent that will contain the new node / (content)
navigation.appendChild(newLink);

//link who
const newLink2 = document.createElement("a");

//add stuff to new link
newLink2.href = "#"; //set attribute
newLink2.textContent = "Who"; // set content
newLink2.style.color = "green";

// the parent that will contain the new node / (content)
navigation.prepend(newLink2);

//Making the CTA--------------------------------------------------------
const ctaMain = document.querySelector("section.cta");

const ctaLogo = ctaMain.querySelector("img");
ctaLogo.setAttribute("src", siteContent["cta"]["img-src"]);

const ctaHeader = ctaMain.querySelector("h1");
ctaHeader.textContent = siteContent.cta.h1;

const ctaButton = ctaMain.querySelector("button");
ctaButton.textContent = siteContent.cta.button;

// function createCtaBr() {
//   let strLength = ctaHeader.textContent.length;
//   for (let i = 0; i < strLength; i++) {
//     ctaHeader.textContent = ctaHeader.textContent.replace(" ").;
//   }
// }

// createCtaBr();

// making the top Content ------------------------------------------
const topContent = document.querySelector("div.top-content");

//feature content
const featureH4 = topContent.children[0].children[0];
featureH4.textContent = siteContent["main-content"]["features-h4"];

const featureP = topContent.children[0].children[1];
featureP.textContent = siteContent["main-content"]["features-content"];

//about content
const aboutH4 = topContent.children[1].children[0];
aboutH4.textContent = siteContent["main-content"]["about-h4"];

const aboutP = topContent.children[1].children[1];
aboutP.textContent = siteContent["main-content"]["about-content"];

//Making the middle img -------------------------------------------
const middleImage = document.querySelector("#middle-img");
middleImage.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// Making the bottom-content --------------------------------------
const bottomContent = document.querySelector("div.bottom-content");

//Services
const serviceH4 = bottomContent.children[0].children[0];
serviceH4.textContent = siteContent["main-content"]["services-h4"];

const serviceP = bottomContent.children[0].children[1];
serviceP.textContent = siteContent["main-content"]["services-content"];

//Product
const productH4 = bottomContent.children[1].children[0];
productH4.textContent = siteContent["main-content"]["product-h4"];

const productP = bottomContent.children[1].children[1];
productP.textContent = siteContent["main-content"]["product-content"];

//Vision
const visionH4 = bottomContent.children[2].children[0];
visionH4.textContent = siteContent["main-content"]["vision-h4"];

const visionP = bottomContent.children[2].children[1];
visionP.textContent = siteContent["main-content"]["vision-content"];

//Making the Contact -------------------------------------------------
const contactForm = document.querySelector("section.contact");

contactForm.children[0].textContent = siteContent.contact["contact-h4"];
contactForm.children[1].textContent = siteContent.contact.address;
contactForm.children[2].textContent = siteContent.contact.phone;
contactForm.children[3].textContent = siteContent.contact.email;

//Making the footer----------------------------------------------------

const end = document.querySelector("footer").querySelector("p");
end.textContent = siteContent.footer.copyright;
