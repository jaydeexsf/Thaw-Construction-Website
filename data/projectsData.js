// JSON data
const projectData = {
    "projects": [
      {
        "title": "Affordable Housing Units",
        "description": "social housing, construction",
        "image": "images/project-1.jpg",
        "link": "images/project-1.jpg"
      },
      {
        "title": "University Student Accommodation",
        "description": "education sector, building",
        "image": "images/project-2.jpg",
        "link": "images/project-2.jpg"
      },
      {
        "title": "Provincial Healthcare Facilities",
        "description": "medical centers, infrastructure",
        "image": "images/project-3.jpg",
        "link": "images/project-3.jpg"
      },
      {
        "title": "Public Office Buildings",
        "description": "government, general building",
        "image": "images/project-4.jpg",
        "link": "images/project-4.jpg"
      },
      {
        "title": "Road and Civil Infrastructure",
        "description": "roads, paving, drainage",
        "image": "images/project-5.jpg",
        "link": "images/project-5.jpg"
      },
      {
        "title": "Storm Water and Sewer Systems",
        "description": "pipeline, civil works",
        "image": "images/project-6.jpg",
        "link": "images/project-6.jpg"
      }
    ]
  };
  
  // Function to dynamically populate project section
  function loadProjects(data) {
    const container = document.querySelector(".projects .box-container");
    container.innerHTML = ""; // Clear any existing content
  
    data.projects.forEach(project => {
      // Create project box elements
      const box = document.createElement("a");
      box.classList.add("box");
      box.href = project.link;
  
      const imageDiv = document.createElement("div");
      imageDiv.classList.add("image");
      const img = document.createElement("img");
      img.src = project.image;
      img.alt = project.title;
      imageDiv.appendChild(img);
  
      const contentDiv = document.createElement("div");
      contentDiv.classList.add("content");
  
      const infoDiv = document.createElement("div");
      infoDiv.classList.add("info");
      const title = document.createElement("h3");
      title.textContent = project.title;
      const description = document.createElement("p");
      description.textContent = project.description;
      infoDiv.appendChild(title);
      infoDiv.appendChild(description);
  
      const icon = document.createElement("i");
      icon.classList.add("fas", "fa-plus");
  
      contentDiv.appendChild(infoDiv);
      contentDiv.appendChild(icon);
  
      box.appendChild(imageDiv);
      box.appendChild(contentDiv);
  
      // Append box to container
      container.appendChild(box);
    });
  }
  
  // Load projects on page load
  document.addEventListener("DOMContentLoaded", () => {
    loadProjects(projectData);
  });
  