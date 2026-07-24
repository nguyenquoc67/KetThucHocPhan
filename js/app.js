/* ============================================================
   CineFind — app.js
   Dữ liệu phim + toàn bộ logic: render, filter, search, modal, theme
   ============================================================ */

// ---------- 1. DỮ LIỆU PHIM ----------
const MOVIES = [
  {
    id: 1, title: "Chân Trời Vô Tận", year: 2019, rating: 8.6, ageRating: "T13",
    genres: ["Khoa học viễn tưởng", "Chính kịch"], poster: "images/poster-1.svg",
    director: "Lê Minh Khôi", cast: "Trần Anh Tuấn, Phạm Bảo Ngọc, Vũ Hải Đăng",
    description: "Một phi hành đoàn phải đưa ra lựa chọn sinh tử khi con tàu thám hiểm liên sao mất liên lạc với Trái Đất giữa hành trình tìm hành tinh có thể sinh sống."
  },
  {
    id: 2, title: "Thị Trấn Không Ngủ", year: 2021, rating: 7.4, ageRating: "T18",
    genres: ["Kinh dị", "Bí ẩn"], poster: "images/poster-2.svg",
    director: "Ngô Thanh Vân", cast: "Đỗ Thị Hải Yến, Quang Tuấn, Hồng Ánh",
    description: "Một nhà báo trẻ quay về thị trấn quê hương để điều tra loạt vụ mất tích bí ẩn, chỉ để phát hiện cả thị trấn đang che giấu một bí mật đen tối."
  },
  {
    id: 3, title: "Tình Ca Mùa Hạ", year: 2020, rating: 7.9, ageRating: "T13",
    genres: ["Lãng mạn", "Hài"], poster: "images/poster-3.svg",
    director: "Victor Vũ", cast: "Miu Lê, Karik, Thu Trang",
    description: "Hai người bạn thân từ thuở nhỏ nhận ra tình cảm thật sự của mình trong một mùa hè định mệnh trước khi mỗi người bước vào một chương mới của cuộc đời."
  },
  {
    id: 4, title: "Trận Chiến Cuối Cùng", year: 2018, rating: 8.1, ageRating: "T16",
    genres: ["Hành động", "Chính kịch"], poster: "images/poster-4.svg",
    director: "Charlie Nguyễn", cast: "Trấn Thành, Thái Hòa, Ngô Thanh Vân",
    description: "Một cựu chiến binh buộc phải trở lại chiến trường xưa để cứu đồng đội cuối cùng còn sống sót, đối mặt với những ký ức chưa bao giờ nguôi ngoai."
  },
  {
    id: 5, title: "Thế Giới Đồ Chơi Bí Ẩn", year: 2022, rating: 8.3, ageRating: "P",
    genres: ["Hoạt hình", "Hài"], poster: "images/poster-5.svg",
    director: "Phan Gia Nhật Linh", cast: "Lồng tiếng: Trấn Thành, Lâm Vỹ Dạ",
    description: "Khi thành phố đồ chơi bị đe dọa bởi một cỗ máy khổng lồ, một chú robot nhỏ bé phải học cách trở thành người hùng mà không ai ngờ tới."
  },
  {
    id: 6, title: "Đêm Không Trăng", year: 2017, rating: 7.0, ageRating: "T18",
    genres: ["Kinh dị"], poster: "images/poster-6.svg",
    director: "Nguyễn Quang Dũng", cast: "Kaity Nguyễn, Thuận Nguyễn",
    description: "Một gia đình chuyển đến căn nhà cổ ven biển và dần nhận ra rằng thứ đang sống cùng họ trong bóng tối không phải là con người."
  },
  {
    id: 7, title: "Tay Đua Vĩ Đại", year: 2023, rating: 7.8, ageRating: "T13",
    genres: ["Hành động", "Thể thao"], poster: "images/poster-7.svg",
    director: "Lý Hải", cast: "Huỳnh Đông, Ngô Kiến Huy",
    description: "Một tay đua trẻ vô danh nuôi giấc mơ vô địch giải đua quốc gia, đánh đổi mọi thứ để chứng minh bản thân trên đường đua tốc độ."
  },
  {
    id: 8, title: "Người Giữ Ký Ức", year: 2016, rating: 8.5, ageRating: "T13",
    genres: ["Khoa học viễn tưởng", "Chính kịch"], poster: "images/poster-8.svg",
    director: "Trần Anh Hùng", cast: "Ngô Thanh Vân, Isaac",
    description: "Trong một tương lai nơi cảm xúc bị kiểm soát, một người đàn ông được chọn để lưu giữ toàn bộ ký ức của nhân loại — cả đau khổ lẫn hạnh phúc."
  },
  {
    id: 9, title: "Tiệm Bánh Hạnh Phúc", year: 2021, rating: 7.2, ageRating: "P",
    genres: ["Lãng mạn", "Chính kịch"], poster: "images/poster-9.svg",
    director: "Đinh Tuấn Vũ", cast: "Nhã Phương, Trường Giang",
    description: "Một đầu bếp thất bại tình trường mở lại tiệm bánh của bà ngoại và vô tình tìm thấy tình yêu mới giữa mùi bánh mì nướng mỗi sớm."
  },
  {
    id: 10, title: "Truy Tìm Kho Báu Cổ", year: 2019, rating: 7.6, ageRating: "T13",
    genres: ["Hành động", "Hài"], poster: "images/poster-10.svg",
    director: "Nguyễn Quang Huy", cast: "Trấn Thành, Trường Giang, Tiến Luật",
    description: "Ba người bạn thân tình cờ có được tấm bản đồ kho báu cổ và bắt đầu chuyến phiêu lưu dở khóc dở cười xuyên khắp Việt Nam."
  },
  {
    id: 11, title: "Thành Phố Sương Mù", year: 2020, rating: 6.9, ageRating: "T16",
    genres: ["Bí ẩn", "Kinh dị"], poster: "images/poster-11.svg",
    director: "Lê Văn Kiệt", cast: "Thanh Hằng, Oanh Kiều",
    description: "Một thám tử tư điều tra chuỗi án mạng kỳ lạ chỉ xảy ra vào những đêm sương mù dày đặc bao phủ thành phố."
  },
  {
    id: 12, title: "Ước Mơ Trên Mây", year: 2022, rating: 8.0, ageRating: "P",
    genres: ["Hoạt hình", "Chính kịch"], poster: "images/poster-12.svg",
    director: "Phan Đăng Di", cast: "Lồng tiếng: Hồng Đào, Thái Hòa",
    description: "Một cô bé mồ côi khám phá ra thế giới trên mây nơi những giấc mơ bị lãng quên vẫn còn sống, và cô phải giúp chúng tìm đường trở về."
  },
  {
    id: 13, title: "Vòng Lặp Thời Gian", year: 2023, rating: 8.4, ageRating: "T13",
    genres: ["Khoa học viễn tưởng", "Hành động"], poster: "images/poster-13.svg",
    director: "Hàm Trần", cast: "Isaac, Chi Pu, Trương Thế Vinh",
    description: "Một nhà khoa học mắc kẹt trong vòng lặp 24 giờ phải tìm ra cách phá vỡ nó trước khi cả thành phố biến mất vĩnh viễn."
  },
  {
    id: 14, title: "Nhà Trọ Số 7", year: 2018, rating: 7.1, ageRating: "T13",
    genres: ["Hài", "Chính kịch"], poster: "images/poster-14.svg",
    director: "Nhất Trung", cast: "Kiều Minh Tuấn, Việt Hương",
    description: "Cuộc sống dở khóc dở cười của những người thuê trọ trong một khu nhà cũ giữa lòng Sài Gòn, nơi ai cũng có một bí mật riêng."
  },

  // ---- Phim mới cập nhật (đang chiếu) ----
  {
    id: 15, title: "Thanh Âm Vượt Đại Dương", year: 2026, rating: 9.5, ageRating: "T13",
    genres: ["Chính kịch", "Âm nhạc"], poster: "images/poster-15.svg",
    director: "Bùi Thạc Chuyên", cast: "Trần Nghĩa, Hoàng Hà, NSND Hồng Vân",
    description: "Hành trình một nghệ sĩ trẻ vượt nửa vòng trái đất để tìm lại tiếng hát đã mất, mang theo âm nhạc kết nối hai thế hệ và hai miền văn hóa."
  },
  {
    id: 16, title: "Thám Tử Lừng Danh Conan: Thiên Thần Sa Ngã Trên Xa Lộ", year: 2026, rating: 9.2, ageRating: "T13",
    genres: ["Hoạt hình", "Bí ẩn"], poster: "images/poster-16.svg",
    director: "Chika Nagaoka", cast: "Lồng tiếng: dàn diễn viên lồng tiếng Conan",
    description: "Một vụ án mạng bí ẩn xảy ra ngay trên đường cao tốc buộc nhóm thám tử phải phá án trong lúc chạy đua với thời gian trước khi thảm họa tiếp theo xảy ra."
  },
  {
    id: 17, title: "The Odyssey", year: 2026, rating: 8.7, ageRating: "T16",
    genres: ["Hành động", "Phiêu lưu"], poster: "images/poster-17.svg",
    director: "Christopher Nolan", cast: "Matt Damon, Tom Holland, Anne Hathaway",
    description: "Chuyển thể sử thi từ thiên anh hùng ca Hy Lạp cổ đại, kể lại hành trình gian nan trở về quê hương của người anh hùng sau cuộc chiến thành Troy."
  },
  {
    id: 18, title: "Công Viên Giải Thoát", year: 2026, rating: 8.6, ageRating: "T16",
    genres: ["Kinh dị", "Hành động"], poster: "images/poster-18.svg",
    director: "Đạo diễn ẩn danh", cast: "Đang cập nhật",
    description: "Một nhóm bạn trẻ mắc kẹt trong công viên giải trí bỏ hoang, nơi trò chơi 'giải thoát' hóa ra là cuộc sinh tồn thật sự khi màn đêm buông xuống."
  },
  {
    id: 19, title: "Minions & Quái Vật", year: 2026, rating: 8.9, ageRating: "P",
    genres: ["Hoạt hình", "Hài"], poster: "images/poster-19.svg",
    director: "Kyle Balda", cast: "Lồng tiếng: Trấn Thành (bản Việt)",
    description: "Đám Minion tinh nghịch vô tình đánh thức một sinh vật khổng lồ ngủ quên hàng thế kỷ, và giờ cả thế giới phải chung tay dọn dẹp hậu quả."
  },
  {
    id: 20, title: "Lời Nguyền Huyết Tộc", year: 2026, rating: 7.8, ageRating: "T18",
    genres: ["Kinh dị"], poster: "images/poster-20.svg",
    director: "Đạo diễn ẩn danh", cast: "Đang cập nhật",
    description: "Một gia tộc giàu có che giấu lời nguyền truyền đời suốt nhiều thế hệ, cho đến khi người thừa kế cuối cùng vô tình đánh thức nó."
  },
  {
    id: 21, title: "Quỷ Bất Hồn", year: 2026, rating: 7.0, ageRating: "T16",
    genres: ["Kinh dị"], poster: "images/poster-21.svg",
    director: "Mắt Biếc (đạo diễn)", cast: "Đang cập nhật",
    description: "Một nghi lễ gọi hồn thất bại để lại hậu quả khôn lường cho ngôi làng nhỏ, nơi ranh giới giữa người sống và vong hồn dần biến mất."
  }
];

// ---------- 2. STATE ----------
const PAGE_SIZE = 8;

const state = {
  search: "",
  selectedGenres: new Set(),
  sort: "default",
  page: 1
};

// ---------- 3. DOM REFS ----------
const movieGrid = document.getElementById("movieGrid");
const emptyState = document.getElementById("emptyState");
const genreList = document.getElementById("genreList");
const searchInput = document.getElementById("searchInput");
const resultCount = document.getElementById("resultCount");
const clearGenresBtn = document.getElementById("clearGenres");
const sortSelect = document.getElementById("sortSelect");
const pagination = document.getElementById("pagination");
const modalOverlay = document.getElementById("modalOverlay");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");
const themeToggle = document.getElementById("themeToggle");

// ---------- 4. DEBOUNCE ----------
function debounce(fn, delay){
  let timer = null;
  return function(...args){
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// ---------- 5. SINH DANH SÁCH THỂ LOẠI (không hard-code) ----------
function buildGenreList(){
  const genreCount = {};
  MOVIES.forEach(movie => {
    movie.genres.forEach(g => {
      genreCount[g] = (genreCount[g] || 0) + 1;
    });
  });

  const genres = Object.keys(genreCount).sort((a, b) => a.localeCompare(b, 'vi'));

  genreList.innerHTML = genres.map(g => `
    <label class="genre-item">
      <input type="checkbox" value="${g}" class="genre-checkbox">
      <span>${g}</span>
      <span class="g-count">${genreCount[g]}</span>
    </label>
  `).join("");

  genreList.querySelectorAll(".genre-checkbox").forEach(cb => {
    cb.addEventListener("change", () => {
      if(cb.checked) state.selectedGenres.add(cb.value);
      else state.selectedGenres.delete(cb.value);
      state.page = 1;
      renderMovies();
    });
  });
}

// ---------- 6. LỌC (thể loại + tìm kiếm kết hợp) ----------
function getFilteredMovies(){
  const keyword = state.search.trim().toLowerCase();

  const filtered = MOVIES.filter(movie => {
    const matchesGenre =
      state.selectedGenres.size === 0 ||
      movie.genres.some(g => state.selectedGenres.has(g));

    const matchesSearch =
      keyword === "" ||
      movie.title.toLowerCase().includes(keyword);

    return matchesGenre && matchesSearch;
  });

  return sortMovies(filtered);
}

// ---------- 6b. SẮP XẾP ----------
function sortMovies(list){
  const sorted = [...list];
  switch(state.sort){
    case "rating-desc": sorted.sort((a, b) => b.rating - a.rating); break;
    case "rating-asc":  sorted.sort((a, b) => a.rating - b.rating); break;
    case "year-desc":   sorted.sort((a, b) => b.year - a.year); break;
    case "year-asc":    sorted.sort((a, b) => a.year - b.year); break;
    case "title-asc":   sorted.sort((a, b) => a.title.localeCompare(b.title, 'vi')); break;
    default: break; // giữ nguyên thứ tự gốc
  }
  return sorted;
}

// ---------- 7. RENDER DANH SÁCH PHIM ----------
function renderMovies(){
  const filtered = getFilteredMovies();

  resultCount.textContent = `${filtered.length} / ${MOVIES.length} phim`;

  if(filtered.length === 0){
    movieGrid.innerHTML = "";
    emptyState.hidden = false;
    pagination.innerHTML = "";
    return;
  }
  emptyState.hidden = true;

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  if(state.page > totalPages) state.page = totalPages;
  if(state.page < 1) state.page = 1;

  const start = (state.page - 1) * PAGE_SIZE;
  const pageItems = filtered.slice(start, start + PAGE_SIZE);

  movieGrid.innerHTML = pageItems.map(movie => `
    <article class="movie-card" data-id="${movie.id}" tabindex="0">
      <div class="poster-wrap">
        <img src="${movie.poster}" alt="Poster phim ${movie.title}" loading="lazy">
        <div class="age-badge age-${movie.ageRating}">${movie.ageRating}</div>
        <div class="rating-badge">${movie.rating.toFixed(1)}</div>
      </div>
      <div class="card-info">
        <div class="card-title">${movie.title}</div>
        <div class="card-meta"><span>${movie.year}</span></div>
        <div class="card-genres">
          ${movie.genres.map(g => `<span class="genre-tag">${g}</span>`).join("")}
        </div>
      </div>
    </article>
  `).join("");

  movieGrid.querySelectorAll(".movie-card").forEach(card => {
    const open = () => openModal(Number(card.dataset.id));
    card.addEventListener("click", open);
    card.addEventListener("keydown", e => {
      if(e.key === "Enter" || e.key === " "){ e.preventDefault(); open(); }
    });
  });

  renderPagination(totalPages);
}

// ---------- 7b. PHÂN TRANG ----------
function goToPage(p){
  state.page = p;
  renderMovies();
  document.querySelector(".content")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderPagination(totalPages){
  if(totalPages <= 1){
    pagination.innerHTML = "";
    return;
  }

  const cur = state.page;
  const items = [];

  items.push(`<button class="page-btn" data-page="${cur - 1}" ${cur === 1 ? "disabled" : ""} aria-label="Trang trước">‹</button>`);

  const pages = new Set([1, totalPages, cur, cur - 1, cur + 1]);
  let prev = 0;
  [...pages].filter(p => p >= 1 && p <= totalPages).sort((a, b) => a - b).forEach(p => {
    if(prev && p - prev > 1) items.push(`<span class="page-dots">…</span>`);
    items.push(`<button class="page-btn ${p === cur ? "active" : ""}" data-page="${p}" aria-current="${p === cur ? "page" : "false"}">${p}</button>`);
    prev = p;
  });

  items.push(`<button class="page-btn" data-page="${cur + 1}" ${cur === totalPages ? "disabled" : ""} aria-label="Trang sau">›</button>`);

  pagination.innerHTML = items.join("");

  pagination.querySelectorAll(".page-btn[data-page]").forEach(btn => {
    btn.addEventListener("click", () => goToPage(Number(btn.dataset.page)));
  });
}

// ---------- 8. MODAL CHI TIẾT PHIM ----------
function openModal(id){
  const movie = MOVIES.find(m => m.id === id);
  if(!movie) return;

  modalBody.innerHTML = `
    <img class="modal-poster" src="${movie.poster}" alt="Poster phim ${movie.title}">
    <div class="modal-detail">
      <h2 class="modal-title display" id="modalTitle">${movie.title}</h2>
      <div class="modal-meta">
        <span class="age-badge age-${movie.ageRating}" style="position:static;">${movie.ageRating}</span>
        <span><strong>${movie.rating.toFixed(1)}</strong> ★</span>
        <span>${movie.year}</span>
      </div>
      <div class="modal-genres">
        ${movie.genres.map(g => `<span class="genre-tag">${g}</span>`).join("")}
      </div>
      <p class="modal-desc">${movie.description}</p>
      <div class="modal-line"><span>Đạo diễn: </span>${movie.director}</div>
      <div class="modal-line"><span>Diễn viên: </span>${movie.cast}</div>
    </div>
  `;

  modalOverlay.hidden = false;
  document.body.style.overflow = "hidden";
  modalClose.focus();
}

function closeModal(){
  modalOverlay.hidden = true;
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (e) => {
  if(e.target === modalOverlay) closeModal();
});
document.addEventListener("keydown", (e) => {
  if(e.key === "Escape" && !modalOverlay.hidden) closeModal();
});

// ---------- 9. TÌM KIẾM (debounce 350ms) ----------
const handleSearch = debounce((value) => {
  state.search = value;
  state.page = 1;
  renderMovies();
}, 350);

searchInput.addEventListener("input", (e) => handleSearch(e.target.value));

// ---------- 9b. SẮP XẾP ----------
sortSelect.addEventListener("change", (e) => {
  state.sort = e.target.value;
  state.page = 1;
  renderMovies();
});

// ---------- 10. BỎ CHỌN TẤT CẢ THỂ LOẠI ----------
clearGenresBtn.addEventListener("click", () => {
  state.selectedGenres.clear();
  genreList.querySelectorAll(".genre-checkbox").forEach(cb => cb.checked = false);
  state.page = 1;
  renderMovies();
});

// ---------- 11. LIGHT / DARK MODE (lưu localStorage) ----------
const THEME_KEY = "cinefind-theme";

function applyTheme(theme){
  document.documentElement.classList.toggle("light", theme === "light");
  themeToggle.checked = theme === "light";
}

function initTheme(){
  const saved = localStorage.getItem(THEME_KEY);
  const theme = saved || "dark";
  applyTheme(theme);
}

themeToggle.addEventListener("change", () => {
  const theme = themeToggle.checked ? "light" : "dark";
  applyTheme(theme);
  localStorage.setItem(THEME_KEY, theme);
});

// ---------- 12. KHỞI CHẠY ----------
initTheme();
buildGenreList();
renderMovies();
