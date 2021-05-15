const mainContainer = document.querySelector(".main__container");
const homeContainer = document.querySelector(".home__container");
const questionnaireContainer = document.querySelector(
  ".questionnaire__container"
);
const galleryContainer = document.querySelector(".gallery__container");
const aboutContainer = document.querySelector(".about__us__container");
const homeTab = document.querySelector(".__home");
const questionnaireTab = document.querySelector(".__questionnaire");
const aboutTab = document.querySelector(".__about");
const galleryTab = document.querySelector(".__gallery");
// default look of the app
function defaultHome() {
  homeContainer.style.display = "block";
  questionnaireContainer.style.display = "none";
  aboutContainer.style.display = "none";
  galleryContainer.style.display = "none";
}
// when click on home tab, display changes to block
function clickHomeTab() {
  homeTab.addEventListener("click", () => {
    homeContainer.style.display = "block";
    questionnaireContainer.style.display = "none";
    aboutContainer.style.display = "none";
    galleryContainer.style.display = "none";
  });
}
// when click on questionnaire tab, display changes to block
function clickQuestionnaireTab() {
  questionnaireTab.addEventListener("click", () => {
    homeContainer.style.display = "none";
    questionnaireContainer.style.display = "block";
    aboutContainer.style.display = "none";
    galleryContainer.style.display = "none";
  });
}
// when click on gallery tab, display changes to block
function clickGalleryTab() {
  galleryTab.addEventListener("click", () => {
    homeContainer.style.display = "none";
    questionnaireContainer.style.display = "none";
    aboutContainer.style.display = "none";
    galleryContainer.style.display = "block";
  });
}
// when click on about us tab, display changes to block
function clickAboutUsTab() {
  aboutTab.addEventListener("click", () => {
    homeContainer.style.display = "none";
    questionnaireContainer.style.display = "none";
    aboutContainer.style.display = "block";
    galleryContainer.style.display = "none";
  });
}
defaultHome();
clickHomeTab();
clickGalleryTab();
clickAboutUsTab();
clickQuestionnaireTab();
