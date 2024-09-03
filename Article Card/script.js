const shareBtn = document.getElementsByClassName("share")[0];
const container = document.getElementsByClassName("container")[0];

shareBtn.addEventListener("click", () => {
    let sharePopup = document.querySelector(".share-popup");

    if (sharePopup) {
        container.removeChild(sharePopup);
    } else {
        sharePopup = document.createElement("div");
        sharePopup.innerHTML = `
            <p>S H A R E</p>
            <img class="fb" src="./images/icon-facebook.svg" alt="Facebook" />
            <img class="tw" src="./images/icon-twitter.svg" alt="Twitter" />
            <img class="pt" src="./images/icon-pinterest.svg" alt="Pinterest" />
        `;
        sharePopup.classList.add("share-popup");
        container.appendChild(sharePopup);
    }
});
