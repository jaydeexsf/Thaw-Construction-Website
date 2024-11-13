// JSON data
const homeSliderData = {
    "slides": [
      {
        "background": "images/home-slide-1.jpg",
        "title": "Delivering Excellence in Construction",
        "description": "Thaw Construction is committed to providing top-quality building and civil services across South Africa, transforming concepts into reality with precision and expertise.",
        "link": "#about",
        "buttonText": "Learn More"
      },
      {
        "background": "images/home-slide-2.jpg",
        "title": "Building Your Vision, Crafting Our Future",
        "description": "Our team brings over 100 years of combined experience, ensuring each project meets the highest standards of quality and innovation.",
        "link": "#about",
        "buttonText": "Learn More"
      },
      {
        "background": "images/home-slide-3.jpg",
        "title": "From Blueprint to Reality",
        "description": "At Thaw Construction, we build infrastructures that support communities and empower the future, from housing to civil projects.",
        "link": "#about",
        "buttonText": "Learn More"
      }
    ]
  };
  
  function loadHomeSlider(data) {
    const swiperWrapper = document.querySelector(".swiper-wrapper");
    swiperWrapper.innerHTML = ""; 
  
    data.slides.forEach(slide => {
      const section = document.createElement("section");
      section.classList.add("swiper-slide", "slide");
      section.style.background = `url(${slide.background}) no-repeat`;
  
      const contentDiv = document.createElement("div");
      contentDiv.classList.add("content");
  
      const title = document.createElement("h3");
      title.textContent = slide.title;
  
      const description = document.createElement("p");
      description.textContent = slide.description;
  
      const link = document.createElement("a");
      link.href = slide.link;
      link.classList.add("btn");
      link.textContent = slide.buttonText;
  
      contentDiv.appendChild(title);
      contentDiv.appendChild(description);
      contentDiv.appendChild(link);
  
      section.appendChild(contentDiv);
  
      swiperWrapper.appendChild(section);
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    loadHomeSlider(homeSliderData);
  });
  