// Mobile menu state
let mobileMenuOpen = false;

// Current page
let currentPage = 'home';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  lucide.createIcons();
  showPage('home');
  updateNavigation();
});

// Mobile menu functions
function toggleMobileMenu() {
  mobileMenuOpen = !mobileMenuOpen;
  const mobileNav = document.getElementById('mobileNav');
  const icon = document.querySelector('.nav-mobile-btn i');
  
  if (mobileMenuOpen) {
    mobileNav.classList.add('active');
    icon.setAttribute('data-lucide', 'x');
  } else {
    mobileNav.classList.remove('active');
    icon.setAttribute('data-lucide', 'menu');
  }
  
  lucide.createIcons();
}

function closeMobileMenu() {
  mobileMenuOpen = false;
  const mobileNav = document.getElementById('mobileNav');
  const icon = document.querySelector('.nav-mobile-btn i');
  
  mobileNav.classList.remove('active');
  icon.setAttribute('data-lucide', 'menu');
  lucide.createIcons();
}

// Page navigation
function showPage(pageId) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  
  // Show selected page
  const page = document.getElementById(pageId);
  if (page) {
    page.classList.add('active');
    currentPage = pageId;
    updateNavigation();
    
    // Load page-specific data
    if (pageId === 'home') {
      loadFeaturedItems();
    } else if (pageId === 'acting') {
      loadCategoryItems('acting');
      setupHeadshotCarousel();
      showAllGalleries();
    } else if (pageId === 'music') {
      loadCategoryItems('music');
    } else if (pageId === 'photography') {
      loadCategoryItems('photography');
    } else if (pageId === 'portfolio') {
      showPortfolioGalleries();
    }
  }
  // Scroll to top
  window.scrollTo(0, 0);
}

// Update navigation active states
function updateNavigation() {
  // Desktop navigation
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-page') === currentPage) {
      link.classList.add('active');
    }
  });
  
  // Mobile navigation
  document.querySelectorAll('.nav-mobile-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-page') === currentPage) {
      link.classList.add('active');
    }
  });
}

const headshots = [
  'img/home/headshot1.jpg',
  'img/home/headshot2.jpg',
  'img/home/headshot3.jpg'
];

let currentHeadshot = 0;
let headshotInterval = null;

function setupHeadshotCarousel() {
  const currentImg = document.getElementById('bio-headshot-current');
  const nextImg = document.getElementById('bio-headshot-next');
  if (!currentImg || !nextImg) return;

  // Reset images and classes
  currentHeadshot = 0;
  currentImg.src = headshots[0];
  nextImg.src = headshots[1];
  currentImg.classList.add('fade-in');
  currentImg.classList.remove('fade-out');
  nextImg.classList.add('fade-out');
  nextImg.classList.remove('fade-in');

  // Clear previous interval if any
  if (headshotInterval) clearInterval(headshotInterval);

  // Crossfade function
  function crossfadeHeadshot() {
    const nextIndex = (currentHeadshot + 1) % headshots.length;
    nextImg.src = headshots[nextIndex];
    nextImg.classList.add('fade-in');
    nextImg.classList.remove('fade-out');
    currentImg.classList.add('fade-out');
    currentImg.classList.remove('fade-in');
  }

  headshotInterval = setInterval(crossfadeHeadshot, 8000);

  // Attach transitionend handler ONCE
  if (!currentImg.dataset.listener) {
    currentImg.addEventListener('transitionend', function handler(e) {
      if (e.propertyName !== 'opacity' || !currentImg.classList.contains('fade-out')) return;
      currentHeadshot = (currentHeadshot + 1) % headshots.length;
      currentImg.src = headshots[currentHeadshot];
      nextImg.src = headshots[(currentHeadshot + 1) % headshots.length];
      currentImg.classList.remove('fade-out');
      currentImg.classList.add('fade-in');
      nextImg.classList.remove('fade-in');
      nextImg.classList.add('fade-out');
    });
    currentImg.dataset.listener = "true";
  }
}

// When fade-out transition ends, swap images and reset
currentImg.addEventListener('transitionend', function handler(e) {
  if (e.propertyName !== 'opacity' || !currentImg.classList.contains('fade-out')) return;
  currentHeadshot = (currentHeadshot + 1) % headshots.length;
  currentImg.src = headshots[currentHeadshot];
  nextImg.src = headshots[(currentHeadshot + 1) % headshots.length];
  currentImg.classList.remove('fade-out');
  currentImg.classList.add('fade-in');
  nextImg.classList.remove('fade-in');
  nextImg.classList.add('fade-out');
});

setInterval(crossfadeHeadshot, 8000);

window.addEventListener('DOMContentLoaded', () => {
  currentImg.src = headshots[0];
  nextImg.src = headshots[1];
  currentImg.classList.add('fade-in');
  nextImg.classList.add('fade-out');
});

// Load portfolio data from API
async function loadPortfolioData() {
  try {
    // Load all portfolio items
    const response = await fetch('/api/portfolio');
    const items = await response.json();
    
    // Organize by category
    portfolioData.acting = items.filter(item => item.category === 'acting');
    portfolioData.music = items.filter(item => item.category === 'music');
    portfolioData.photography = items.filter(item => item.category === 'photography');
    
    // Load featured items
    const featuredResponse = await fetch('/api/portfolio/featured');
    portfolioData.featured = await featuredResponse.json();
    
  } catch (error) {
    console.error('Error loading portfolio data:', error);
    // Use fallback data if API fails
    loadFallbackData();
  }
}

// Load featured items for home page
function loadFeaturedItems() {
  const featuredGrid = document.getElementById('featuredGrid');
  const featuredLoading = document.getElementById('featuredLoading');
  
  if (!featuredGrid || !featuredLoading) return;
  
  featuredLoading.style.display = 'block';
  featuredGrid.style.display = 'none';
  
  setTimeout(() => {
    featuredGrid.innerHTML = '';
    
    const categories = ['acting', 'music', 'photography'];
    categories.forEach(category => {
      const categoryItems = portfolioData[category];
      const featuredItem = categoryItems.find(item => item.featured) || categoryItems[0];
      
      if (featuredItem) {
        featuredGrid.appendChild(createFeaturedItem(category, featuredItem));
      }
    });
    
    featuredLoading.style.display = 'none';
    featuredGrid.style.display = 'grid';
  }, 300);
}

// Create featured item element
function createFeaturedItem(category, item) {
  const div = document.createElement('div');
  div.className = 'featured-item';
  div.onclick = () => showPage(category);
  
  const categoryNames = {
    acting: 'Acting',
    music: 'Music',
    photography: 'Photography'
  };
  
  div.innerHTML = `
    <div class="featured-image">
      <img src="${item.imageUrl}" alt="${item.title}" loading="lazy">
    </div>
    <h3 class="featured-category">${categoryNames[category]}</h3>
  `;
  
  return div;
}

// Load category items for portfolio pages
function loadCategoryItems(category) {
  const grid = document.getElementById(`${category}Grid`);
  const loading = document.getElementById(`${category}Loading`);
  
  if (!grid || !loading) return;
  
  loading.style.display = 'block';
  grid.style.display = 'none';
  
  setTimeout(() => {
    grid.innerHTML = '';

    if (category === 'acting') {
      const theaterItems = portfolioData.acting.filter(item => item.category === 'theater');
      const featuredFilm = portfolioData.acting.find(item => item.category === 'film' && item.featured);
      const featuredPerformance = portfolioData.acting.find(item => item.category === 'performance' && item.featured);
      // Build the array for the grid
      const items = [
        theaterItems[0],
        featuredFilm,
        featuredPerformance
      ].filter(Boolean); // Remove undefined if any

      items.forEach((item, idx) => {
        grid.appendChild(createPortfolioItem(item, false, idx));
      });
    } else {
      // Default: show first 3 items
      const items = portfolioData[category] || [];
      items.slice(0, 3).forEach((item, idx) => {
        grid.appendChild(createPortfolioItem(item, category === 'photography', idx));
      });
    }
    
    loading.style.display = 'none';
    grid.style.display = category === 'photography' ? 'block' : 'grid';
  }, 300);
}

function createPortfolioItem(item, isMasonry = false, index = 0) {
  const div = document.createElement('div');
  div.className = isMasonry ? 'masonry-item' : 'portfolio-item';

  const prefix = isMasonry ? 'masonry' : 'portfolio';

  div.innerHTML = `
  <div class="${prefix}-image" style="position:relative;">
    <img src="${item.imageUrl}" alt="${item.title}" loading="lazy" class="portfolio-image">
    <div class="${prefix}-overlay"></div>
    <span class="portfolio-category-label" style="
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
      padding: 0.4em 1.2em;
      font-size: 2rem;
      font-weight: 600;
      letter-spacing: 0.04em;
      z-index: 2;
      pointer-events: none;
      text-align: center;
      text-shadow: 0 2px 4px rgba(0,0,0,0.5);
      white-space: nowrap;
    ">${item.category.charAt(0).toUpperCase() + item.category.slice(1)}</span>
  </div>
`;

  // Add overlay click handler to the image
  const img = div.querySelector('.portfolio-image');
  img.addEventListener('click', function() {
    let galleryItems;
    if (index === 1) {
      galleryItems = portfolioData.acting.filter(i => i.category === "film");
    } else if (index === 2) {
      galleryItems = portfolioData.acting.filter(i => i.category === "performance");
    } else {
      galleryItems = portfolioData.acting.filter(i => i.category === "theater");
    }
    let currentIndex = galleryItems.findIndex(i => i.imageUrl === item.imageUrl);
    if (currentIndex === -1) currentIndex = 0;

    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.background = 'rgba(0,0,0,0.9)';
    overlay.style.display = 'flex';
    overlay.style.flexDirection = 'column';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = '10000';

    const imgEl = document.createElement('img');
    imgEl.src = galleryItems[currentIndex].imageUrl;
    imgEl.style.maxWidth = '90vw';
    imgEl.style.maxHeight = '70vh';
    imgEl.style.borderRadius = '0.5rem';
    imgEl.style.boxShadow = '0 8px 32px rgba(0,0,0,0.3)';
    imgEl.style.marginBottom = '2rem';

    const titleEl = document.createElement('h2');
    titleEl.textContent = galleryItems[currentIndex].title;
    titleEl.style.color = '#fff';
    titleEl.style.margin = '0 0 0.5rem 0';
    titleEl.style.textAlign = 'center';

    const descEl = document.createElement('p');
    descEl.textContent = galleryItems[currentIndex].description;
    descEl.style.color = '#fff';
    descEl.style.margin = '0 0 2rem 0';
    descEl.style.textAlign = 'center';
    descEl.style.maxWidth = '80vw';

    const leftArrow = document.createElement('div');
    leftArrow.textContent = '<';
    leftArrow.style.position = 'absolute';
    leftArrow.style.left = '2rem';
    leftArrow.style.top = '50%';
    leftArrow.style.transform = 'translateY(-50%)';
    leftArrow.style.fontSize = '2.5rem';
    leftArrow.style.color = '#fff';
    leftArrow.style.cursor = 'pointer';
    leftArrow.style.userSelect = 'none';
    leftArrow.style.zIndex = '10001';

    const rightArrow = document.createElement('div');
    rightArrow.textContent = '>';
    rightArrow.style.position = 'absolute';
    rightArrow.style.right = '2rem';
    rightArrow.style.top = '50%';
    rightArrow.style.transform = 'translateY(-50%)';
    rightArrow.style.fontSize = '2.5rem';
    rightArrow.style.color = '#fff';
    rightArrow.style.cursor = 'pointer';
    rightArrow.style.userSelect = 'none';
    rightArrow.style.zIndex = '10001';

    leftArrow.addEventListener('click', function(e) {
      e.stopPropagation();
      currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
      imgEl.src = galleryItems[currentIndex].imageUrl;
      titleEl.textContent = galleryItems[currentIndex].title;
      descEl.textContent = galleryItems[currentIndex].description;
    });

    rightArrow.addEventListener('click', function(e) {
      e.stopPropagation();
      currentIndex = (currentIndex + 1) % galleryItems.length;
      imgEl.src = galleryItems[currentIndex].imageUrl;
      titleEl.textContent = galleryItems[currentIndex].title;
      descEl.textContent = galleryItems[currentIndex].description;
    });

    overlay.addEventListener('click', function() {
      document.body.removeChild(overlay);
    });

    overlay.appendChild(leftArrow);
    overlay.appendChild(imgEl);
    overlay.appendChild(titleEl);
    overlay.appendChild(descEl);
    overlay.appendChild(rightArrow);
    document.body.appendChild(overlay);
  });

  return div;
}

// 3. DOMContentLoaded or other handlers that use the arrays
document.addEventListener('DOMContentLoaded', function() {
  // Select all images with the class 'portfolio-image'
  const portfolioImages = document.querySelectorAll('.portfolio-image');
  portfolioImages.forEach(img => {
    img.addEventListener('click', function() {
      // Create overlay
      const overlay = document.createElement('div');
      overlay.style.position = 'fixed';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.width = '100vw';
      overlay.style.height = '100vh';
      overlay.style.background = 'rgba(0,0,0,0.9)';
      overlay.style.display = 'flex';
      overlay.style.alignItems = 'center';
      overlay.style.justifyContent = 'center';
      overlay.style.zIndex = '10000';

      // Create image element
      const imgEl = document.createElement('img');
      imgEl.src = theaterGallery[0];
      imgEl.style.maxWidth = '90vw';
      imgEl.style.maxHeight = '90vh';
      imgEl.style.borderRadius = '0.5rem';
      imgEl.style.boxShadow = '0 8px 32px rgba(0,0,0,0.3)';

      // Close overlay on click
      overlay.addEventListener('click', function() {
        document.body.removeChild(overlay);
      });

      overlay.appendChild(imgEl);
      document.body.appendChild(overlay);
    });
  });
});

// Handle window resize for responsive behavior
window.addEventListener('resize', function() {
  if (window.innerWidth >= 768 && mobileMenuOpen) {
    closeMobileMenu();
  }
});

// Handle scroll behavior
window.addEventListener('scroll', function() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const nav = document.querySelector('.nav');
  
  if (scrollTop > 10) {
    nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
  } else {
    nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  }
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && mobileMenuOpen) {
    closeMobileMenu();
  }
});