// JSON data
const serviceData = {
    "services": [
      {
        "title": "General Building Construction",
        "description": "Delivering high-quality construction for residential, commercial, and public buildings across South Africa.",
        "image": "images/service-1.png"
      },
      {
        "title": "Housing Projects",
        "description": "Providing affordable and social housing, with over 6000 units built to support local communities.",
        "image": "images/service-2.png"
      },
      {
        "title": "Civil Infrastructure",
        "description": "Enhancing infrastructure with roads, stormwater systems, sewer networks, and pipelines.",
        "image": "images/service-3.png"
      },
      {
        "title": "Material Supply and Procurement",
        "description": "Supplying quality construction materials to ensure project integrity and efficiency.",
        "image": "images/service-4.png"
      },
      {
        "title": "Construction Consultancy",
        "description": "Expert project management and consultancy services to guide successful builds from start to finish.",
        "image": "images/service-5.png"
      },
      {
        "title": "Steel Construction",
        "description": "Specializing in durable and innovative steel structures for various industrial applications.",
        "image": "images/service-6.png"
      },
      {
        "title": "Building Maintenance",
        "description": "Offering reliable maintenance services to keep facilities in top condition for longevity and safety.",
        "image": "images/service-7.png"
      },
      {
        "title": "Renovations and Upgrades",
        "description": "Revitalizing spaces with expert renovation services to meet modern standards and needs.",
        "image": "images/service-8.png"
      }
    ]
  };
  
  function loadServices(data) {
    const container = document.querySelector(".services .box-container");
    container.innerHTML = ""; 
  
    data.services.forEach(service => {
      const box = document.createElement("div");
      box.classList.add("box");
  
      const img = document.createElement("img");
      img.src = service.image;
      img.alt = service.title;
  
      const title = document.createElement("h3");
      title.textContent = service.title;
  
      const description = document.createElement("p");
      description.textContent = service.description;
  
      box.appendChild(img);
      box.appendChild(title);
      box.appendChild(description);
  
      container.appendChild(box);
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    loadServices(serviceData);
  });
  