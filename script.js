const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Create an iframe for YouTube video
const video = document.createElement("iframe");
video.src = "https://www.youtube.com/embed/OsYFz58LNB8";
video.width = "300";
video.height = "533"; // Adjust for Shorts format
video.frameBorder = "0";
video.allowFullscreen = true;
video.style.display = "none";

// Append the iframe inside the wrapper
document.querySelector(".wrapper").appendChild(video);

yesBtn.addEventListener("click", () => {
    question.innerHTML = "You can't say no because I made you a small video of our memories together!!!";
    
    // Hide GIF and show video
    gif.style.display = "none";
    video.style.display = "block";

    // Hide both buttons
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
});

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    const randomX = Math.min(Math.floor(Math.random() * maxX), maxX);
    const randomY = Math.min(Math.floor(Math.random() * maxY), maxY);

    noBtn.style.position = "absolute";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});
