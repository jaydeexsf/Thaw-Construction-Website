// JSON data (In a real scenario, you might fetch this from an API)
const blogsData = [
    {
      "image": "images/blog-1.jpg",
      "title": "Thaw Construction’s New Project Launch",
      "description": "We’re excited to announce the launch of our new construction project in the heart of the city. Stay tuned for more updates!",
      "link": "#"
    },
    {
      "image": "images/blog-2.jpg",
      "title": "Innovative Designs by Thaw Construction",
      "description": "Thaw Construction leads with innovation in building designs that transform urban spaces. Learn more about our latest concepts.",
      "link": "#"
    },
    {
      "image": "images/blog-3.jpg",
      "title": "Sustainability in Construction: Thaw’s Approach",
      "description": "We prioritize sustainability in every project we undertake. Find out how Thaw Construction is making a difference in the industry.",
      "link": "#"
    },
    {
      "image": "images/blog-4.jpg",
      "title": "Thaw Construction’s Community Engagement",
      "description": "At Thaw Construction, we believe in giving back to the community. Here’s how we’re working to improve local infrastructure.",
      "link": "#"
    },
    {
      "image": "images/blog-5.jpg",
      "title": "Thaw Construction: A Legacy of Excellence",
      "description": "For over 20 years, Thaw Construction has been a trusted name in the industry. Discover how we’ve built our reputation on quality and reliability.",
      "link": "#"
    },
    {
      "image": "images/blog-6.jpg",
      "title": "Thaw Construction’s Latest Project in Downtown",
      "description": "We’re thrilled to announce our latest development project in downtown. This ambitious new project will reshape the skyline.",
      "link": "#"
    }
  ];
  
  // Function to render blogs
  function renderBlogs(blogs) {
    const blogsContainer = document.querySelector('.blogs .swiper-wrapper');
    blogsContainer.innerHTML = ''; // Clear existing content
  
    blogs.forEach(blog => {
      const blogSlide = document.createElement('div');
      blogSlide.classList.add('swiper-slide', 'slide');
      
      blogSlide.innerHTML = `
        <div class="image tnt">
          <img src="${blog.image}" alt="">
        </div>
        <div class="content">
          <h3>${blog.title}</h3>
          <p>${blog.description}</p>
          <a href="${blog.link}" class="btn">Read More</a>
        </div>
      `;
      
      blogsContainer.appendChild(blogSlide);
    });
  }
  
  // Call the function to render blogs
  renderBlogs(blogsData);
  