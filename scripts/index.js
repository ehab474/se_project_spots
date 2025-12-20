const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
console.log("Edit modal found:", editProfileModal);
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileForm = editProfileModal.querySelector(".modal__form")
const editProfileNameInput = editProfileModal.querySelector("#profile-name-input");
const editProfileDescriptionInput = editProfileModal.querySelector("#profile-description-input");
const editNewPostBtn = document.querySelector("#new-post-modal");
const editProLinkInput = document.querySelector("#card-image-input");
const editCaptionInput = document.querySelector("#profile-caption-input");

const newPostBtn= document.querySelector(".profile__new-post-btn");
const newPostModal=document.querySelector("#new-post-modal");
const newPostFormElement = newPostModal.querySelector(".modal__form")
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

newPostFormElement.addEventListener("submit", (evt) => {
    evt.preventDefault()
    console.log(editProLinkInput.value,  editCaptionInput.value)
    newPostModal.classList.remove("modal__is-opened");
})
editProfileBtn.addEventListener("click", function () {
    editProfileNameInput.value = profileNameEl.textContent;
    editProfileDescriptionInput.value = profileDescriptionEl.textContent;
    editProfileModal.classList.add("modal__is-opened");
});

editProfileCloseBtn.addEventListener("click", function () {
    editProfileModal.classList.remove("modal__is-opened");
});

newPostBtn.addEventListener("click", function () {
    newPostModal.classList.add("modal__is-opened");
});

newPostCloseBtn.addEventListener("click", function () {
    newPostModal.classList.remove("modal__is-opened");
});

function handleEditProfileSubmit(evt) {
    evt.preventDefault();
    profileNameEl.textContent= editProfileNameInput.value;
    profileDescriptionEl.textContent = editProfileDescriptionInput.value;
    editProfileModal.classList.remove("modal__is-opened");
    console.log("submitting");
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit)