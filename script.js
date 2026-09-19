
const bookCatalog = [
  { 
    id: 1,
    title: "A Field Guide to Small Signals",
    author: "Rina Kapoor",
    category: "Science & Technology",
    rating: 4.9,
    year: 2023,
    status: "available",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE2_cpigpGcLxYI5AcZYcNlCWxzISGJlRkMX-OLHn0IncLWYxbbb0duQe0&s=10",
    featured: true,
    description: "A field naturalist's notebook of the small, easy-to-miss signals nature sends before the big changes arrive." 
  },
  {
  id: 2,
  title: "A Quiet Kind of Static",
  author: "Ines Choudhury",
  category: "Science Fiction",
  rating: 4.1,
  year: 2019,
  status: "reserved",
  image: "https://picsum.photos/seed/booknest-static/400/560",
  featured: false,
  description: "On a slow-drifting colony ship, a communications officer starts hearing something in the static that shouldn't be there."
},

{
  id: 3,
  title: "Borrowed Light",
  author: "Eleanor Marsh",
  category: "Biography",
  rating: 4.7,
  year: 2021,
  status: "available",
  image: "https://m.media-amazon.com/images/I/81Wu8C8agHL._AC_UF1000,1000_QL80_.jpg",
  featured: true,
  description: "The life of an overlooked 20th-century astronomer, told through the letters she never sent."
},

{
  id: 4,
  title: "Bricks of the Old Exchange",
  author: "Henrik Solberg",
  category: "History",
  rating: 4.0,
  year: 2016,
  status: "reserved",
  image: "https://picsum.photos/seed/booknest-exchange/400/560",
  featured: false,
  description: "A social history of a single trading-house building, and the four centuries of commerce that passed through its doors."
},

{
  id: 5,
  title: "The Salt Meridian",
  author: "Odalys Ferreira",
  category: "Fiction",
  rating: 4.6,
  year: 2022,
  status: "available",
  image: "https://cdn2.penguin.com.au/covers/original/9780735214323.jpg",
  featured: true,
  description: "Three generations of a coastal family reckon with the sea that both fed and took from them."
},
 {
  id: 6,
  title: "Halcyon Drift",
  author: "Priya Nandakumar",
  category: "Science Fiction",
  rating: 4.8,
  year: 2024,
  status: "available",
  image: "https://sciencefictionruminations.com/wp-content/uploads/2018/03/the-halcyon-drift.jpg",
  featured: true,
  description: "A derelict trader and its stranded crew drift toward a discovery that could rewrite what they know about the Drift."
},

{
  id: 7,
  title: "The Lantern Ledger",
  author: "Callum Ashworth",
  category: "Mystery & Thriller",
  rating: 4.3,
  year: 2020,
  status: "reserved",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgDU74aCblmJfrSy-AwsmGKiMcm5awZvzd0Psa52BR2A&s",
  featured: false,
  description: "A lighthouse keeper's logbook holds the only clue to a disappearance the village would rather forget."
},

{
  id: 8,
  title: "The Cartographer's Alibi",
  author: "Declan Osei",
  category: "Mystery & Thriller",
  rating: 4.5,
  year: 2018,
  status: "available",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzfg0dE53Mqt9Ep2bkJ3oKNOxahp3kLOeL76sCtjTGginO4-9PRgemqP4&s=10",
  featured: false,
  description: "A mapmaker's meticulous alibi starts to unravel the closer anyone looks at his meticulous maps."
},

{
  id: 9,
  title: "The Long Coastline of Empire",
  author: "Adaeze Nwosu",
  category: "History",
  rating: 4.6,
  year: 2022,
  status: "reserved",
  image: "https://bdlcontent.storage.googleapis.com/wp-content/uploads/2022/02/08193812/Empires-of-the-Sea-324x507.jpg",
  featured: true,
  description: "A sweeping account of the trade routes, ports, and people that shaped a maritime empire."
},

{
  id: 10,
  title: "Windowlight",
  author: "Marisol Vega",
  category: "Romance",
  rating: 4.4,
  year: 2023,
  status: "available",
  image: "https://picsum.photos/seed/booknest-windowlight/400/560",
  featured: false,
  description: "Two rival booksellers on the same street learn that the best chapters are the ones they write together."
},

{
  id: 11,
  title: "Second Chances at Dusk",
  author: "Thandiwe Moyo",
  category: "Romance",
  rating: 4.2,
  year: 2021,
  status: "available",
  image: "https://picsum.photos/seed/booknest-dusk/400/560",
  featured: false,
  description: "A decade after a small-town breakup, two old friends are thrown back together for one long summer."
},

{
  id: 12,
  title: "Ashes and Almanacs",
  author: "Josiah Kwon",
  category: "Poetry",
  rating: 4.5,
  year: 2020,
  status: "reserved",
  image: "https://picsum.photos/seed/booknest-almanacs/400/560",
  featured: false,
  description: "A collection tracking a single year, season by season, in short, unsparing lines."
},

{
  id: 13,
  title: "Small Hours",
  author: "Lior Ben-David",
  category: "Poetry",
  rating: 4.1,
  year: 2019,
  status: "available",
  image: "https://picsum.photos/seed/booknest-smallhours/400/560",
  featured: false,
  description: "Poems written between midnight and dawn, about the thoughts that only show up when no one else is awake."
},

{
  id: 14,
  title: "The Habit of Beginning",
  author: "Noor El-Sayed",
  category: "Self-Help",
  rating: 4.3,
  year: 2023,
  status: "available",
  image: "https://picsum.photos/seed/booknest-beginning/400/560",
  featured: false,
  description: "A practical, no-nonsense guide to starting the projects you keep putting off."
},

{
  id: 15,
  title: "Quiet Confidence",
  author: "Dmitri Volkov",
  category: "Self-Help",
  rating: 4.0,
  year: 2017,
  status: "reserved",
  image: "https://picsum.photos/seed/booknest-confidence/400/560",
  featured: false,
  description: "A guide to steady self-assurance for people who would rather not raise their voice to be heard."
},

{
  id: 16,
  title: "The Orchard Keeper's Diary",
  author: "Fatima Rahimi",
  category: "Fiction",
  rating: 4.4,
  year: 2021,
  status: "available",
  image: "https://picsum.photos/seed/booknest-orchard/400/560",
  featured: false,
  description: "One year in an old family orchard, told through the diary of the woman who refuses to let it go."
},

{
  id: 17,
  title: "Letters from the Wrong Century",
  author: "Saanvi Rao",
  category: "Fiction",
  rating: 4.7,
  year: 2024,
  status: "reserved",
  image: "https://picsum.photos/seed/booknest-letters/400/560",
  featured: true,
  description: "A box of unsent letters resurfaces a hundred years late, and finally finds the reader they were meant for."
},

{
  id: 18,
  title: "The Last Cartogram",
  author: "Kwame Asante",
  category: "Science Fiction",
  rating: 4.5,
  year: 2022,
  status: "available",
  image: "https://picsum.photos/seed/booknest-cartogram/400/560",
  featured: false,
  description: "The last living mapmaker of a dying planet races to chart it before the borders stop meaning anything."
},

{
  id: 19,
  title: "Midnight Ledger",
  author: "Elif Demir",
  category: "Mystery & Thriller",
  rating: 4.2,
  year: 2020,
  status: "available",
  image: "https://picsum.photos/seed/booknest-ledger/400/560",
  featured: false,
  description: "A night-shift accountant finds one column of numbers that doesn't add up, and shouldn't exist."
},

{
  id: 20,
  title: "The Weight of Small Rooms",
  author: "Ana Beatriz Costa",
  category: "Biography",
  rating: 4.6,
  year: 2018,
  status: "reserved",
  image: "https://picsum.photos/seed/booknest-rooms/400/560",
  featured: true,
  description: "The memoir of a translator who carried three languages and one very small apartment across two continents."
}
];


const books = bookCatalog.filter(b => b.featured);

const FALLBACK_COVER = "https://picsum.photos/seed/booknest-fallback/400/560";


const FAVORITES_KEY = "booknest_favorites";

function getFavorites() {
  try {
    return new Set(JSON.parse(localStorage.getItem(FAVORITES_KEY)) || []);
  } catch {
    return new Set();
  }
}

function saveFavorites(set) {
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify([...set]));
  } catch {
    
  }
}

function isFavorite(id) {
  return getFavorites().has(Number(id));
}

function toggleFavoriteState(id) {
  id = Number(id);
  const favs = getFavorites();
  const nowFavorite = !favs.has(id);
  if (nowFavorite) {
    favs.add(id);
  } else {
    favs.delete(id);
  }
  saveFavorites(favs);
  syncFavoriteButtons(id, nowFavorite);
  const book = bookCatalog.find(b => b.id === id);
  showToast(nowFavorite
    ? `Added "${book ? book.title : "book"}" to favorites`
    : `Removed "${book ? book.title : "book"}" from favorites`);
  return nowFavorite;
}


function syncFavoriteButtons(id, isFav) {
  document.querySelectorAll(`[data-id="${id}"].fav-btn, [data-id="${id}"].wishlist-btn`).forEach(btn => {
    btn.textContent = isFav ? "♥" : "♡";
    btn.classList.toggle("active", isFav);
    btn.setAttribute("aria-pressed", String(isFav));
    btn.setAttribute("aria-label", isFav ? "Remove from favorites" : "Add to favorites");
  });

  const modalBtn = document.getElementById("modalFavoriteBtn");
  if (modalBtn && Number(modalBtn.dataset.id) === id) {
    modalBtn.classList.toggle("active", isFav);
    modalBtn.innerHTML = isFav
      ? '<i class="fa-solid fa-heart"></i> Saved to Favorites'
      : '<i class="fa-regular fa-heart"></i> Add to Favorites';
  }
}

/* ============================================================
   TOAST NOTIFICATIONS
   ============================================================ */
let toastTimer = null;

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;

  const messageEl = toast.querySelector("#toastMessage") || toast.querySelector("span:last-child");
  if (messageEl) messageEl.textContent = message;

  toast.classList.add("show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}


function animateCounter(el) {
  const target = Number(el.dataset.count);
  let current = 0;
  const increment = target / 100;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      el.textContent = target.toLocaleString();
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(current).toLocaleString();
    }
  }, 20);
}

function initStatsCounter() {
  const counters = document.querySelectorAll(".stat-number");
  if (!counters.length) return;

  /* Only animate once the band scrolls into view */
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        counters.forEach(animateCounter);
        obs.disconnect();
      }
    });
  }, { threshold: 0.3 });

  observer.observe(counters[0]);
}


function createFeaturedCard(book) {
  const favorite = isFavorite(book.id);
  return `
    <div class="book-card">
      <img class="book-cover" src="${book.image}" alt="Cover of ${book.title}" loading="lazy"
           onerror="this.onerror=null;this.src='${FALLBACK_COVER}';">
      <h3 class="book-title">${book.title}</h3>
      <p class="book-author">by ${book.author}</p>
      <p class="book-rating">★ ${book.rating}</p>

      <div class="book-card-actions">
        <button class="btn-details" data-id="${book.id}" type="button">
          View Details
        </button>

        <button class="fav-btn" data-id="${book.id}" type="button"
                aria-pressed="${favorite}" aria-label="${favorite ? "Remove from favorites" : "Add to favorites"}">
          ${favorite ? "♥" : "♡"}
        </button>
      </div>
    </div>
  `;
}

function renderFeaturedBooks() {
  const container = document.getElementById("featuredBooks");
  if (!container) return;
  container.innerHTML = books.map(createFeaturedCard).join("");
}

function openBookModal(book) {
  const modal = document.getElementById("bookModal");
  if (!modal || !book) return;

  const favorite = isFavorite(book.id);

  const image = document.getElementById("modalBookImage");
  if (image) {
    image.src = book.image;
    image.alt = `Cover of ${book.title}`;
    image.onerror = () => { image.onerror = null; image.src = FALLBACK_COVER; };
  }
  setText("modalBookCategory", book.category ? book.category.toUpperCase() : "FEATURED BOOK");
  setText("modalBookTitle", book.title);
  setText("modalBookAuthor", "by " + book.author);
  setText("modalBookRating", book.rating + " / 5");
  const statusEl = document.getElementById("modalBookStatus");
  if (statusEl) {
    statusEl.textContent = book.status === "reserved" ? "Currently reserved" : "Available now";
    statusEl.className = "modal-status " + (book.status === "reserved" ? "status-reserved" : "status-available");
  }
  setText("modalBookDescription", book.description || "A fascinating book available in our library collection.");

  const favBtn = document.getElementById("modalFavoriteBtn");
  if (favBtn) {
    favBtn.dataset.id = book.id;
    favBtn.classList.toggle("active", favorite);
    favBtn.innerHTML = favorite
      ? '<i class="fa-solid fa-heart"></i> Saved to Favorites'
      : '<i class="fa-regular fa-heart"></i> Add to Favorites';
  }

  modal.classList.add("active");
  document.body.classList.add("modal-open");

  const closeBtn = document.getElementById("closeBookModal");
  if (closeBtn) closeBtn.focus();
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function closeBookModal() {
  const modal = document.getElementById("bookModal");
  if (!modal) return;
  modal.classList.remove("active");
  document.body.classList.remove("modal-open");
}

function initBookModal() {
  const modal = document.getElementById("bookModal");
  if (!modal) return;

  document.getElementById("closeBookModal")?.addEventListener("click", closeBookModal);
  document.getElementById("closeBookModalBtn")?.addEventListener("click", closeBookModal);

  /* Close on backdrop click */
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeBookModal();
  });

  /* Close on Escape */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) closeBookModal();
  });

  document.getElementById("modalFavoriteBtn")?.addEventListener("click", (e) => {
    const id = e.currentTarget.dataset.id;
    if (id) toggleFavoriteState(id);
  });
}

function initBookCardButtons() {
  document.body.addEventListener("click", (e) => {
    const detailsBtn = e.target.closest(".btn-details, .details-btn");
    if (detailsBtn) {
      const id = Number(detailsBtn.dataset.id);
      const book = bookCatalog.find(b => b.id === id);
      if (book) openBookModal(book);
      return;
    }

    const favBtn = e.target.closest(".fav-btn, .wishlist-btn");
    if (favBtn) {
      const id = favBtn.dataset.id;
      if (id) toggleFavoriteState(id);
    }
  });
}


let featuredIndex = 0;
const cardWidth = 300;
const cardGap = 20;

function getVisibleCards() {
  const width = window.innerWidth;
  if (width < 640) return 1;
  if (width < 980) return 2;
  if (width < 1280) return 3;
  return 4;
}

function slideFeatured() {
  const track = document.getElementById("featuredBooks");
  if (!track) return;

  const visibleCards = getVisibleCards();
  const maxIndex = Math.max(0, books.length - visibleCards);
  featuredIndex = Math.min(featuredIndex, maxIndex);

  const offset = featuredIndex * (cardWidth + cardGap);
  track.style.transform = `translateX(-${offset}px)`;

  const prevBtn = document.getElementById("featuredPrev");
  const nextBtn = document.getElementById("featuredNext");

  if (prevBtn) prevBtn.disabled = featuredIndex === 0;
  if (nextBtn) nextBtn.disabled = featuredIndex >= maxIndex;
}

function initFeaturedCarousel() {
  const track = document.getElementById("featuredBooks");
  if (!track) return;

  const nextBtn = document.getElementById("featuredNext");
  const prevBtn = document.getElementById("featuredPrev");

  nextBtn?.addEventListener("click", () => {
    const visibleCards = getVisibleCards();
    if (featuredIndex < books.length - visibleCards) {
      featuredIndex++;
      slideFeatured();
    }
  });

  prevBtn?.addEventListener("click", () => {
    if (featuredIndex > 0) {
      featuredIndex--;
      slideFeatured();
    }
  });

  window.addEventListener("resize", debounce(slideFeatured, 150));
  slideFeatured();
}

/*BOOKS PAGE — search, filter, sort, favorites-only, rend */
function getCategoryFromQuery() {
  const params = new URLSearchParams(window.location.search);
  return params.get("category");
}

function createCatalogCard(book) {
  const favorite = isFavorite(book.id);
  const statusLabel = book.status === "reserved" ? "RESERVED" : "AVAILABLE";

  return `
    <div class="book-card" data-id="${book.id}">
      <div class="book-cover">
        <img class="book-cover-img" src="${book.image}" alt="Cover of ${book.title}" loading="lazy"
             onerror="this.onerror=null;this.src='${FALLBACK_COVER}';">
        <span class="status ${book.status}">${statusLabel}</span>
        <h3>${book.title}</h3>
      </div>
      <div class="book-info">
        <div class="category">${book.category.toUpperCase()}</div>
        <h4>${book.title}</h4>
        <p class="author">by ${book.author}</p>
        <p class="rating"><i class="fa-solid fa-star"></i> ${book.rating}</p>
        <div class="card-actions">
          <button class="details-btn" type="button" data-id="${book.id}">View Details</button>
          <button class="wishlist-btn${favorite ? " active" : ""}" type="button" data-id="${book.id}"
                  aria-pressed="${favorite}" aria-label="${favorite ? "Remove from favorites" : "Add to favorites"}">${favorite ? "♥" : "♡"}</button>
        </div>
      </div>
    </div>
  `;
}

function populateCategoryFilter() {
  const select = document.getElementById("categoryFilter");
  if (!select) return;

  const categories = [...new Set(bookCatalog.map(b => b.category))].sort();
  categories.forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    select.appendChild(option);
  });

  const fromQuery = getCategoryFromQuery();
  if (fromQuery && categories.includes(fromQuery)) {
    select.value = fromQuery;
  }
}

function getFilteredSortedBooks() {
  const searchInput = document.getElementById("bookSearchInput");
  const categorySelect = document.getElementById("categoryFilter");
  const sortSelect = document.getElementById("sortBooks");
  const favOnlyBtn = document.getElementById("favOnlyToggle");

  const query = (searchInput?.value || "").trim().toLowerCase();
  const category = categorySelect?.value || "all";
  const sortBy = sortSelect?.value || "title-asc";
  const favOnly = favOnlyBtn?.getAttribute("aria-pressed") === "true";
  const favorites = getFavorites();

  let list = bookCatalog.filter(book => {
    const matchesQuery = !query ||
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query);
    const matchesCategory = category === "all" || book.category === category;
    const matchesFavorite = !favOnly || favorites.has(book.id);
    return matchesQuery && matchesCategory && matchesFavorite;
  });

  switch (sortBy) {
    case "title-desc":
      list = list.sort((a, b) => b.title.localeCompare(a.title));
      break;
    case "rating-desc":
      list = list.sort((a, b) => b.rating - a.rating);
      break;
    case "year-desc":
      list = list.sort((a, b) => b.year - a.year);
      break;
    case "year-asc":
      list = list.sort((a, b) => a.year - b.year);
      break;
    case "title-asc":
    default:
      list = list.sort((a, b) => a.title.localeCompare(b.title));
  }

  return list;
}

function renderBooksGrid() {
  const grid = document.getElementById("booksGrid");
  if (!grid) return;

  const list = getFilteredSortedBooks();
  grid.innerHTML = list.map(createCatalogCard).join("");

  const countEl = document.getElementById("bookCount");
  if (countEl) {
    countEl.textContent = `${list.length} book${list.length === 1 ? "" : "s"} found`;
  }

  const noResults = document.getElementById("noResults");
  if (noResults) {
    noResults.hidden = list.length !== 0;
  }
  grid.hidden = list.length === 0;
}

function initBooksPage() {
  const grid = document.getElementById("booksGrid");
  if (!grid) return;

  populateCategoryFilter();

  const searchInput = document.getElementById("bookSearchInput");
  const categorySelect = document.getElementById("categoryFilter");
  const sortSelect = document.getElementById("sortBooks");
  const favOnlyBtn = document.getElementById("favOnlyToggle");

  searchInput?.addEventListener("input", debounce(renderBooksGrid, 150));
  categorySelect?.addEventListener("change", renderBooksGrid);
  sortSelect?.addEventListener("change", renderBooksGrid);

  favOnlyBtn?.addEventListener("click", () => {
    const pressed = favOnlyBtn.getAttribute("aria-pressed") === "true";
    favOnlyBtn.setAttribute("aria-pressed", String(!pressed));
    favOnlyBtn.classList.toggle("active", !pressed);
    renderBooksGrid();
  });

  renderBooksGrid();
}

 
function initCategoryCards() {
  const cards = document.querySelectorAll(".category-card");
  if (!cards.length) return;

  cards.forEach(card => {
    if (!card.hasAttribute("tabindex")) card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");

    const heading = card.querySelector("h3");
    const label = heading ? heading.textContent.trim() : "";
    card.setAttribute("aria-label", `Browse ${label} books`);

    const go = () => {
      card.animate(
        [{ transform: "scale(1)" }, { transform: "scale(0.95)" }, { transform: "scale(1)" }],
        { duration: 250 }
      );
      window.setTimeout(() => {
        window.location.href = `books.html?category=${encodeURIComponent(label)}`;
      }, 120);
    };

    card.addEventListener("click", go);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        go();
      }
    });
  });
}


const readers = [
  {
    image: "https://plus.unsplash.com/premium_photo-1683120731413-b3aa991cb64e?fm=jpg&q=60&w=800&auto=format&fit=crop",
    name: "Hamid Alizada",
    role: "Graduate Student",
    text: "I did most of my thesis research here. The reference desk found sources I hadn't even thought to look for."
  },

  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnRrdROU6A_lTCJw1hICxYsDzV1JooyNEVn7U6vJxChhdS0QQ2Ad9UOwM&s=10",
    name: "Zakir Javid",
    role: "History Researcher",
    text: "The digital archives saved me weeks of work. Everything was well organized and easy to access."
  },

  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB_ylEuYopklD8YXoghMjwoKyZQTgir2OskAcQtnhOPNFIFGBOKpY-iTA&s=10",
    name: "Roya Bahar",
    role: "University Student",
    text: "The study spaces are quiet and comfortable. It's my favorite place to prepare for exams."
  },

  {
    image: "https://thumbs.dreamstime.com/b/education-high-school-university-learning-people-concept-smiling-student-girl-reading-book-education-high-school-university-172068379.jpg",
    name: "Zohal Mohammadi",
    role: "Book Club Member",
    text: "The library collection is outstanding. I always discover fascinating books."
  },

  {
    image: "https://www.shutterstock.com/image-photo/man-sitting-on-sofa-reading-260nw-2566478263.jpg",
    name: "Hamid Fayaz",
    role: "Teacher",
    text: "The children's section is excellent and encourages young readers to develop a love for books."
  },

  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_8jg-yrhLYtr6hZU9KLyhbH4XVr0OF72DOfP78HttWciaZnDlBrSmFBI&s=10",
    name: "Habib Najafi",
    role: "Research Assistant",
    text: "The librarians are knowledgeable and always ready to help with academic resources."
  },

  {
    image: "https://www.shutterstock.com/image-photo/curious-female-high-school-student-260nw-2358465489.jpg",
    name: "Morsal Hadari",
    role: "Community Member",
    text: "The workshops and events have made me feel more connected to my community."
  },

  {
    image: "https://media.istockphoto.com/id/1935252238/photo/concentrated-grandfather-man-relaxing-resting-in-hammock-while-reading-book.jpg?s=612x612",
    name: "Mohammad Safdari",
    role: "PhD Candidate",
    text: "Access to journals and research databases has been invaluable for my studies."
  },

  {
    image: "https://thumbs.dreamstime.com/b/leisure-literature-people-concept-african-american-woman-reading-book-home-african-american-woman-reading-book-home-150243312.jpg",
    name: "Najma Ahmadi",
    role: "Literature Student",
    text: "The rare books collection is beautiful and inspiring for any literature lover."
  },

  {
    image: "https://www.shutterstock.com/image-photo/happy-elderly-woman-reading-book-260nw-2729106881.jpg",
    name: "Farzana Kamal",
    role: "Library Member",
    text: "This library feels like a second home. The atmosphere is welcoming and productive."
  }
];
let currentReader = 0;
let readerAutoplayTimer = null;

function createDots(dotsContainer) {
  dotsContainer.innerHTML = "";
  readers.forEach((reader, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.classList.add("dot");
    dot.setAttribute("aria-label", `Show testimonial from ${reader.name}`);
    if (index === 0) dot.classList.add("active");

    dot.addEventListener("click", () => {
      currentReader = index;
      showReader(currentReader);
      restartReaderAutoplay();
    });

    dotsContainer.appendChild(dot);
  });
}

function updateDots() {
  document.querySelectorAll(".dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === currentReader);
  });
}

function showReader(index) {
  const readerImage = document.getElementById("reader-image");
  const readerName = document.getElementById("reader-name");
  const readerRole = document.getElementById("reader-role");
  const readerText = document.getElementById("reader-text");
  if (!readerImage || !readerName || !readerRole || !readerText) return;

  readerImage.src = readers[index].image;
  readerImage.alt = `Portrait of ${readers[index].name}`;
  readerImage.onerror = () => { readerImage.onerror = null; readerImage.src = FALLBACK_COVER; };
  readerText.textContent = readers[index].text;
  readerName.textContent = readers[index].name;
  readerRole.textContent = readers[index].role;

  updateDots();
}

function restartReaderAutoplay() {
  clearInterval(readerAutoplayTimer);
  readerAutoplayTimer = setInterval(() => {
    currentReader = (currentReader + 1) % readers.length;
    showReader(currentReader);
  }, 5000);
}

function initTestimonials() {
  const dotsContainer = document.getElementById("dots");
  const nextReaderBtn = document.getElementById("next-btn");
  const prevReaderBtn = document.getElementById("prev-btn");
  if (!dotsContainer && !nextReaderBtn) return;

  if (dotsContainer) createDots(dotsContainer);

  nextReaderBtn?.setAttribute("aria-label", "Next testimonial");
  prevReaderBtn?.setAttribute("aria-label", "Previous testimonial");

  nextReaderBtn?.addEventListener("click", () => {
    currentReader = (currentReader + 1) % readers.length;
    showReader(currentReader);
    restartReaderAutoplay();
  });

  prevReaderBtn?.addEventListener("click", () => {
    currentReader = (currentReader - 1 + readers.length) % readers.length;
    showReader(currentReader);
    restartReaderAutoplay();
  });

  showReader(currentReader);
  restartReaderAutoplay();
}

/* ============================================================
   MOBILE NAVIGATION
   ============================================================ */
function initMobileNav() {
  const toggle = document.getElementById("navToggle");
  const navbar = document.getElementById("siteNavbar");
  if (!toggle || !navbar) return;

  toggle.addEventListener("click", () => {
    const isOpen = navbar.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  /* Close the menu after choosing a link, and on resize back to desktop */
  navbar.querySelectorAll(".nav-left a, .nav-right a").forEach(link => {
    link.addEventListener("click", () => {
      navbar.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  window.addEventListener("resize", debounce(() => {
    if (window.innerWidth > 900) {
      navbar.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  }, 150));
}

/*  DARK MOde*/
const THEME_KEY = "booknest_theme";

function applyTheme(theme) {
  document.body.classList.toggle("dark-mode", theme === "dark");
  const icon = document.querySelector("#darkModeToggle i");
  if (icon) {
    icon.className = theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
  }
  const toggleBtn = document.getElementById("darkModeToggle");
  toggleBtn?.setAttribute("aria-pressed", String(theme === "dark"));
}

function initDarkMode() {
  const toggleBtn = document.getElementById("darkModeToggle");
  let saved = "light";
  try {
    saved = localStorage.getItem(THEME_KEY) || "light";
  } catch { /* ignore */ }

  applyTheme(saved);

  toggleBtn?.addEventListener("click", () => {
    const isDark = document.body.classList.contains("dark-mode");
    const next = isDark ? "light" : "dark";
    applyTheme(next);
    try { localStorage.setItem(THEME_KEY, next); } catch { /* ignore */ }
  });
}

/*BACK TO TOP */
function initBackToTop() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;

  const toggleVisibility = () => {
    btn.classList.toggle("visible", window.scrollY > 400);
  };

  window.addEventListener("scroll", debounce(toggleVisibility, 100));
  toggleVisibility();

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/*FAQ ACCORDION (contact page)*/
function initFaqAccordion() {
  const items = document.querySelectorAll(".faq-item");
  if (!items.length) return;

  items.forEach(item => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    if (!question || !answer) return;

    question.setAttribute("aria-expanded", "false");
    answer.style.maxHeight = "0px";

    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");

      /* Close any other open item for a cleaner single-open accordion */
      items.forEach(other => {
        if (other !== item) {
          other.classList.remove("open");
          const otherAnswer = other.querySelector(".faq-answer");
          const otherQuestion = other.querySelector(".faq-question");
          if (otherAnswer) otherAnswer.style.maxHeight = "0px";
          otherQuestion?.setAttribute("aria-expanded", "false");
        }
      });

      item.classList.toggle("open", !isOpen);
      answer.style.maxHeight = isOpen ? "0px" : `${answer.scrollHeight}px`;
      question.setAttribute("aria-expanded", String(!isOpen));
    });
  });
}

/*CONTACT FORM*/
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector("#contactName");
    const email = form.querySelector("#contactEmail");
    const subject = form.querySelector("#contactSubject");
    const message = form.querySelector("#contactMessage");

    if (!validateRequired([name, email, subject, message])) {
      showToast("Please fill in every field before sending.");
      return;
    }
    if (!isValidEmail(email.value)) {
      markInvalid(email);
      showToast("Please enter a valid email address.");
      return;
    }

    showToast(`Thanks, ${name.value.trim().split(" ")[0]}! Your message has been sent.`);
    form.reset();
  });
}

/*NEWSLETTER FORMS (appear in the footer on every page) */
function initNewsletterForms() {
  document.querySelectorAll(".newsletter").forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = form.querySelector("input[type='email']");
      if (!input || !isValidEmail(input.value)) {
        markInvalid(input);
        showToast("Please enter a valid email to subscribe.");
        return;
      }
      showToast("You're subscribed to BookNest updates!");
      form.reset();
    });
  });
}

/*MEMBERSHIP PLANS + REGISTRATION FORM */
function initMembershipPage() {
  const planButtons = document.querySelectorAll(".plan-btn");
  const selectedPlanText = document.getElementById("selectedPlanText");
  if (!planButtons.length && !selectedPlanText) return;

  let selectedPlan = null;

  planButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".plan-card");
      const planName = card?.querySelector(".plan-name")?.textContent.trim() || "Selected plan";
      selectedPlan = planName;

      document.querySelectorAll(".plan-card").forEach(c => c.classList.remove("plan-selected"));
      card?.classList.add("plan-selected");

      if (selectedPlanText) selectedPlanText.textContent = planName;

      showToast(`${planName} plan selected`);
      document.getElementById("registrationForm")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  const regForm = document.getElementById("registrationForm");
  regForm?.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullName = regForm.querySelector("#fullName");
    const email = regForm.querySelector("#email");
    const phone = regForm.querySelector("#phone");
    const dob = regForm.querySelector("#dob");
    const address = regForm.querySelector("#address");
    const agree = regForm.querySelector("#agreeTerms");

    if (!selectedPlan) {
      showToast("Please choose a membership plan above first.");
      return;
    }
    if (!validateRequired([fullName, email, phone, dob, address])) {
      showToast("Please fill in every field to register.");
      return;
    }
    if (!isValidEmail(email.value)) {
      markInvalid(email);
      showToast("Please enter a valid email address.");
      return;
    }
    if (!agree.checked) {
      showToast("Please agree to the borrowing policy to continue.");
      return;
    }

    showToast(`Welcome to BookNest, ${fullName.value.trim().split(" ")[0]}! Your ${selectedPlan} registration is in.`);
    regForm.reset();
    document.querySelectorAll(".plan-card").forEach(c => c.classList.remove("plan-selected"));
    if (selectedPlanText) selectedPlanText.textContent = "None selected";
    selectedPlan = null;
  });
}

/*FORM VALIDATION HELPERS*/
function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((value || "").trim());
}

function markInvalid(field) {
  if (!field) return;
  field.classList.add("field-invalid");
  field.addEventListener("input", () => field.classList.remove("field-invalid"), { once: true });
  field.focus();
}

function validateRequired(fields) {
  let allValid = true;
  fields.forEach(field => {
    if (!field) { allValid = false; return; }
    if (field.type === "checkbox" ? !field.checked : !field.value.trim()) {
      markInvalid(field);
      allValid = false;
    } else {
      field.classList.remove("field-invalid");
    }
  });
  return allValid;
}

/*help */
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

/*runing  all function or calling all function */
document.addEventListener("DOMContentLoaded", () => {
  initDarkMode();
  initMobileNav();
  initBackToTop();
  initStatsCounter();
  renderFeaturedBooks();
  initFeaturedCarousel();
  initBookCardButtons();
  initBookModal();
  initBooksPage();
  initCategoryCards();
  initTestimonials();
  initFaqAccordion();
  initContactForm();
  initNewsletterForms();
  initMembershipPage();
});

// 1. Add all your picture paths/links here
const shelfImages = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1HWmSaJQH3KBfj6_b8v8H2SAk0qT79ehFAaXvIW4qFMh_V0JNOps_gLI&s=10',
    'https://hips.hearstapps.com/hmg-prod/images/90173095-e1b0-405a-bf91-e86fb39db625.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDAz7Jl6WnBQgPqrglHpZnB45a7sWGArnLydnb-lEEyOOVDzi8CAailslg&s=10' // Add as many pictures as you want
];

// Track current image index
let currentIndex = 0;

// Get DOM elements
const shelfImg = document.getElementById('shelfImg');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Function to swap images with a smooth fade effect
function updateShelf(index) {
    shelfImg.style.opacity = '0.3'; // Start fade out
    
    setTimeout(() => {
        shelfImg.src = shelfImages[index]; // Change image source
        shelfImg.style.opacity = '1';       // Fade back in
    }, 150);
}

// Next Button Click Event
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % shelfImages.length; // Loop back to start after last image
    updateShelf(currentIndex);
});

// Previous Button Click Event
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + shelfImages.length) % shelfImages.length; // Loop to end if going back from first
    updateShelf(currentIndex);
});


