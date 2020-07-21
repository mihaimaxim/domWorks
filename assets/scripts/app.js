const movieModal = document.getElementById("add-modal");
const addMovieButton = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");
const cancelMovieModalButton = movieModal.querySelector(".btn--passive");
const confirmMovieModalButton = cancelMovieModalButton.nextElementSibling;
const userInputs = movieModal.querySelectorAll("input");
const entryText = document.getElementById("entry-text");

let movies = [];

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
   const urlInput = userInputs[1].value;
   const ratingInput = userInputs[2].value;

   if (
      titleInput.trim() === "" ||
      urlInput.trim() === "" ||
      ratingInput.trim() === "" ||
      ratingInput.trim() <= 0 ||
      ratingInput.trim() > 5
   ) {
      alert("Please enter valid values!");
      return;
   }

   let movie = {
      title: titleInput,
      url: urlInput,
      rating: ratingInput,
   };

   movies.push(movie);
   console.log(movies[0]);
   displayModal();
   // movies = [];
   clearInputs();
   updateUI();
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
