const clientLogos = [
  { "src": "images/client-logo-1.png", "alt": "Client 1" },
  { "src": "images/client-logo-2.png", "alt": "Client 2" },
  { "src": "images/client-logo-3.png", "alt": "Client 3" },
  { "src": "images/client-logo-4.png", "alt": "Client 4" },
  { "src": "images/client-logo-5.png", "alt": "Client 5" },
  { "src": "images/client-logo-6.png", "alt": "Client 6" }
];


function loadClientLogos() {
  const wrapper = document.getElementById('logo-wrapper');
  
  // Clear existing content (if any)
  wrapper.innerHTML = '';

  // Loop through the clientLogos array and create HTML for each logo
  clientLogos.forEach(logo => {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide', 'slide');

    const img = document.createElement('img');
    img.src = logo.src;
    img.alt = logo.alt;

    slide.appendChild(img);
    wrapper.appendChild(slide);
  });
}

window.onload = loadClientLogos;
