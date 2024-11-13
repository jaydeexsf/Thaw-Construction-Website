
const reviewsData = [
  {
    "text": "“Thaw Construction transformed our vision into reality with exceptional quality and professionalism. Their attention to detail made a huge difference in our project.”",
    "img": "images/pic-1.png",
    "name": "Sarah M.",
    "rating": 5
  },
  {
    "text": "“Working with Thaw Construction was a seamless experience. Their expertise in civil infrastructure is impressive, and they exceeded our expectations on every front.”",
    "img": "images/pic-2.png",
    "name": "James T.",
    "rating": 5
  },
  {
    "text": "“We chose Thaw for our housing project, and they delivered with precision and efficiency. We’re grateful for their dedication to quality and safety.”",
    "img": "images/pic-3.png",
    "name": "Learo R.",
    "rating": 5
  },
  {
    "text": "“Thaw Construction’s team is highly professional and responsive. They delivered our project on time and within budget without compromising quality.”",
    "img": "images/pic-4.png",
    "name": "Keletso klt.",
    "rating": 5
  },
  {
    "text": "“The team at Thaw was a pleasure to work with! Their commitment to safety and quality on our healthcare facility project was outstanding.”",
    "img": "images/pic-5.png",
    "name": "Linda G.",
    "rating": 5
  },
  {
    "text": "“From start to finish, Thaw Construction demonstrated expertise and professionalism. We are very pleased with the results of our roadworks project.”",
    "img": "images/pic-6.png",
    "name": "Peter K.",
    "rating": 5
  }
];

function loadReviews() {
  const wrapper = document.getElementById('reviews-wrapper');

  wrapper.innerHTML = '';

  reviewsData.forEach(review => {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide', 'slide');

    const reviewText = document.createElement('p');
    reviewText.textContent = review.text;
    
    const userDiv = document.createElement('div');
    userDiv.classList.add('user');
    
    const img = document.createElement('img');
    img.src = review.img;
    img.alt = review.name;
    
    const infoDiv = document.createElement('div');
    infoDiv.classList.add('info');
    
    const name = document.createElement('h3');
    name.textContent = review.name;

    const starsDiv = document.createElement('div');
    starsDiv.classList.add('stars');

    for (let i = 0; i < review.rating; i++) {
      const star = document.createElement('i');
      star.classList.add('fas', 'fa-star');
      starsDiv.appendChild(star);
    }
    
    infoDiv.appendChild(name);
    infoDiv.appendChild(starsDiv);

    userDiv.appendChild(img);
    userDiv.appendChild(infoDiv);

    slide.appendChild(reviewText);
    slide.appendChild(userDiv);

    wrapper.appendChild(slide);
  });
}

window.onload = loadReviews;
