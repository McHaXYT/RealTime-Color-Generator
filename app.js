// * COLORS

// // Background Colors
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// // Text Color
const h1colors = ["#191717", "#040D12", "#0c080b", "#232428"];
const pcolors = ["#0c080b", "#001524", "#272829", "#212A3E", "#2C3333"];

// // Primary / Secondary / Accent Color
const primaryColor = [0, 9, 8, 7, "A", "B", "C", "D", "E", "F"];
const secondaryColor = [0, 1, 2, 3, "A", "B", "C", "D", "E", "F"];
const accentColor = [0, 1, 2, 3, "A", "B", "C"];

// * CONTENT
const generatebtns = document.querySelectorAll("#random-btn");
const upAndDownBtn = document.getElementById("UpDownBtn");
const btnOverlay = document.querySelector(".btn-overlay");
const headerNav = document.querySelector(".header");
const root = document.documentElement;
const colorPallates = document.querySelectorAll(".colorNames");

// * TEXT CONTENT
const bodyColorText = document.querySelector("#body-color");
const headingColorText = document.querySelector("#heading-color");
const paragraphColorText = document.querySelector("#para-color");
const primaryColorText = document.querySelector("#primary-color");
const secondaryColorText = document.querySelector("#secondary-color");
const accentColorText = document.querySelector("#accent-color");

// * PALLATE CONTAINERS
const bodyPallateContainer = document.getElementById("BodyPallate-Container");
const headingPallateContainer = document.getElementById(
    "HeadingPallate-Container"
);
const textPallateContainer = document.getElementById("TextPallate-Container");
const primaryPallateContainer = document.getElementById(
    "PrimaryPallate-Container"
);
const secondaryPallateContainer = document.getElementById(
    "SecondaryPallate-Container"
);
const accentPallateContainer = document.getElementById(
    "AccentPallate-Container"
);

// * MAIN EVENTLISTENERS

// // Generate Event
generatebtns.forEach((generatebtn) => {
    generatebtn.addEventListener("click", function () {
        getRandomUniqueLightColor(
            "--body-color",
            bodyColorText,
            bodyPallateContainer
        );
        getRandomUniqueColor(
            primaryColor,
            "--primary-color",
            primaryColorText,
            primaryPallateContainer
        );
        getRandomUniqueColor(
            accentColor,
            "--accent-color",
            accentColorText,
            accentPallateContainer
        );
        getRandomUniqueColor(
            secondaryColor,
            "--secondary-color",
            secondaryColorText,
            secondaryPallateContainer
        );
        getRandomColor(
            h1colors,
            "--h1-color",
            headingColorText,
            headingPallateContainer
        );
        getRandomColor(
            pcolors,
            "--p-color",
            paragraphColorText,
            textPallateContainer
        );
    });
});

// // Up And Down Btn
upAndDownBtn.addEventListener("click", () => {
    let btnOverlayHeight = btnOverlay.clientHeight;
    let btnOverlayBottom = btnOverlay.style.bottom;
    if (btnOverlayBottom >= `0`) {
        btnOverlay.style.bottom = `-${btnOverlayHeight}px`;
    } else if (btnOverlayBottom < `0`) {
        btnOverlay.style.bottom = `0px`;
    }
    if (upAndDownBtn.querySelector("i").classList.contains("fa-arrow-down")) {
        upAndDownBtn.querySelector("i").classList.remove("fa-arrow-down");
        upAndDownBtn.querySelector("i").classList.add("fa-arrow-up");
    } else if (
        upAndDownBtn.querySelector("i").classList.contains("fa-arrow-up")
    ) {
        upAndDownBtn.querySelector("i").classList.remove("fa-arrow-up");
        upAndDownBtn.querySelector("i").classList.add("fa-arrow-down");
    }
});

// // Header On Scroll Shadow Addition
window.addEventListener("scroll", () => {
    if (window.scrollY <= 0) {
        headerNav.classList.remove("header-shadow");
    } else if (window.scrollY > 0) {
        headerNav.classList.add("header-shadow");
    }
});

// * FUNCTIONS

// // Random Color
function getRandomColor(colorPallate, properyName, tagName, tagContainer) {
    const randomNumber = getRandomNumber(colorPallate);
    root.style.setProperty(properyName, colorPallate[randomNumber]);
    tagName.textContent = colorPallate[randomNumber];
    tagContainer.style.background = colorPallate[randomNumber];
}

// // Unique Random Color
function getRandomUniqueColor(
    colorPallate,
    propertyName,
    tagName,
    tagContainer
) {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        let hexRandomColor = colorPallate[getRandomNumber(colorPallate)];
        hexColor += hexRandomColor;
    }
    root.style.setProperty(propertyName, hexColor);
    tagName.textContent = hexColor;
    tagContainer.style.background = hexColor;
}

// // Unique Random Light Color

function getRandomUniqueLightColor(propertyName, tagName, tagContainer) {
    let hexColor = "hsl";
    let hexRandomColor = "(" + Math.floor(Math.random() * 360) + ", 100%, 97%)";
    hexColor += hexRandomColor;
    root.style.setProperty(propertyName, hexColor);
    tagName.textContent = hexColor;
    tagContainer.style.background = hexColor;
}

// // Random Number Generator
function getRandomNumber(colorPallate) {
    return Math.floor(Math.random() * colorPallate.length);
}
