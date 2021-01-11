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
logo.setAttribute('src', siteContent["nav"]["img-src"])

//2a: MVP
//nav
{
  let navLinks = document.querySelector("nav");

  for(let i = 0; i<navLinks.children.length; i++){
    navLinks.children[i].textContent = siteContent["nav"][`nav-item-${i+1}`];
    navLinks.children[i].style.color = "green";
  }
  //add two new items to nav system
  const learn = document.createElement("a");
  learn.textContent = "Learn";
  learn.href = "#";
  learn.style.color = "green";
  navLinks.prepend(learn);

  const tryIt = document.createElement("a");
  tryIt.textContent = "Try It!";
  tryIt.href = "#";
  tryIt.style.color = "green";
  navLinks.append(tryIt);
}

//cta
{
  let title = document.querySelector("h1");
  title.innerHTML = siteContent["cta"]["h1"].split(" ").join("<br>");

  let button = document.querySelector("button");
  button.textContent = siteContent["cta"]["button"];

  let image = document.getElementById("cta-img");
  image.setAttribute('src', siteContent["cta"]["img-src"]);

  //Task3 stretch , change image color
  let onOff = 0;
  button.onclick =  function changeColor(){
    if(onOff === 0){
      image.style.filter = "invert(100%)";
      onOff = 1;
    }else{
      image.style.filter = "invert(0%)";
      onOff = 0;
    }
    
  }
}

//main content
{
  let h4Elem = document.querySelectorAll(".main-content h4");
  let pElem = document.querySelectorAll(".main-content p");

  let count = 0;
  for(let k in siteContent["main-content"]){
    if(k.includes("h4")){
      h4Elem[count].textContent = siteContent["main-content"][k];
    }else if(k.includes("content")){
      pElem[count].textContent = siteContent["main-content"][k];
      count++
    }
  }

  let middleImage = document.getElementById("middle-img");
  middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
}
//contact
{
  let contact = document.querySelector(".contact");

  let count = 0;
  for(let k in siteContent["contact"]){
    contact.children[count].textContent = siteContent["contact"][k];
    count++;
  }
  contact.children[1].innerHTML = "123 Way 456 Street <br> Somewhere, USA";
}
//footer
{
  let copyright = document.querySelector("footer  p");
  copyright.textContent = siteContent["footer"]["copyright"];
}


