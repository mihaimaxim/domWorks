const movieModal = document.getElementById("add-modal");
const addMovieButton = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");
const cancelMovieModalButton = movieModal.querySelector(".btn--passive");
const confirmMovieModalButton = cancelMovieModalButton.nextElementSibling;
const userInputs = movieModal.querySelectorAll("input");
const entryText = document.getElementById("entry-text");
const movieList = document.getElementById("movie-list");

let movies = [];

populateMovieList = (title, imgURL, rating) => {
   const movieElement = document.createElement("li");
   movieElement.className = "movie-element";
   movieElement.innerHTML = `
   <div class="movie-element__image">
      <img src="${imgURL}" alt="${title}" />
   </div>
   <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
   </div>
   `;
   movieList.appendChild(movieElement);
};

updateUI = () => {
   if (movies.length === 0) {
      entryText.style.display = "block";
   } else {
      entryText.style.display = "none";
   }
};

toggleBackdrop = () => {
   backdrop.classList.toggle("visible");
};

displayModal = () => {
   movieModal.classList.toggle("visible");
   toggleBackdrop();
};

clearInputs = () => {
   for (const input of userInputs) {
      input.value = "";
   }
};

confirmMovieModal = () => {
   const titleInput = userInputs[0].value;
   const imgUrlInput = userInputs[1].value;
   const ratingInput = userInputs[2].value;

   if (
      titleInput.trim() === "" ||
      imgUrlInput.trim() === "" ||
      ratingInput.trim() === "" ||
      ratingInput.trim() <= 0 ||
      ratingInput.trim() > 5
   ) {
      alert("Please enter valid values!");
      return;
   }

   let movie = {
      title: titleInput,
      url: imgUrlInput,
      rating: ratingInput,
   };

   movies.push(movie);
   console.log(movies);
   displayModal();
   // movies = [];
   clearInputs();
   updateUI();
   populateMovieList(titleInput, imgUrlInput, ratingInput);
};

cancelMovieModal = () => {
   displayModal();
   clearInputs();
};

backdropClick = () => {
   displayModal();
};

addMovieButton.addEventListener("click", displayModal);
backdrop.addEventListener("click", backdropClick);
cancelMovieModalButton.addEventListener("click", cancelMovieModal);
confirmMovieModalButton.addEventListener("click", confirmMovieModal);
