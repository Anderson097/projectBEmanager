const Wrapper = document.querySelector(".extensionWrapper");
const buttonAll = document.querySelector(".btn1");
const buttonActive = document.querySelector(".btn2");
const buttonInactive = document.querySelector(".btn3");
const toggleThemeBtn = document.querySelector(".themeToggle");

const extensions = [
    {
        "logo": "./assets/images/logo-devlens.svg",
        "name": "DevLens",
        "description": "Quickly inspect page layouts and visualize element boundaries.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-style-spy.svg",
        "name": "StyleSpy",
        "description": "Instantly analyze and copy CSS from any webpage element.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-speed-boost.svg",
        "name": "SpeedBoost",
        "description": "Optimizes browser resource usage to accelerate page loading.",
        "isActive": false
    },
    {
        "logo": "./assets/images/logo-json-wizard.svg",
        "name": "JSONWizard",
        "description": "Formats, validates, and prettifies JSON responses in-browser.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-tab-master-pro.svg",
        "name": "TabMaster Pro",
        "description": "Organizes browser tabs into groups and sessions.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-viewport-buddy.svg",
        "name": "ViewportBuddy",
        "description": "Simulates various screen resolutions directly within the browser.",
        "isActive": false
    },
    {
        "logo": "./assets/images/logo-markup-notes.svg",
        "name": "Markup Notes",
        "description": "Enables annotation and notes directly onto webpages for collaborative debugging.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-grid-guides.svg",
        "name": "GridGuides",
        "description": "Overlay customizable grids and alignment guides on any webpage.",
        "isActive": false
    },
    {
        "logo": "./assets/images/logo-palette-picker.svg",
        "name": "Palette Picker",
        "description": "Instantly extracts color palettes from any webpage.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-link-checker.svg",
        "name": "LinkChecker",
        "description": "Scans and highlights broken links on any page.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-dom-snapshot.svg",
        "name": "DOM Snapshot",
        "description": "Capture and export DOM structures quickly.",
        "isActive": false
    },
    {
        "logo": "./assets/images/logo-console-plus.svg",
        "name": "ConsolePlus",
        "description": "Enhanced developer console with advanced filtering and logging.",
        "isActive": true
    }
];

// Render a single card
function createCard(item) {
    const card = document.createElement("div");
    card.classList.add("extensionCard");

    card.innerHTML = `
        <div class="extensionCardTop">
            <img src="${item.logo}" alt="${item.name}">
            <div class="cardContent">
                <h2>${item.name}</h2>
                <p>${item.description}</p>
            </div>
        </div>
        <div class="cardToggler">
            <button class="btnRemove">Remove</button>
            <label class="switch">
                <input type="checkbox" ${item.isActive ? "checked" : ""}>
                <span class="slider"></span>
            </label>
        </div>
    `;

    Wrapper.appendChild(card);
}

// Display a filtered list of cards
function renderCards(list) {
    Wrapper.innerHTML = "";
    list.forEach(createCard);
}

// Button active state
function setActive(button) {
    [buttonAll, buttonActive, buttonInactive].forEach(btn => btn.classList.remove("activeToggle"));
    button.classList.add("activeToggle");
}

// Initial: Show all
renderCards(extensions);

// Event listeners
buttonAll.addEventListener("click", () => {
    renderCards(extensions);
    setActive(buttonAll);
});

buttonActive.addEventListener("click", () => {
    const activeCards = extensions.filter(ext => ext.isActive).slice(0, 8);
    renderCards(activeCards);
    setActive(buttonActive);
});

buttonInactive.addEventListener("click", () => {
    const inactiveCards = extensions.filter(ext => !ext.isActive).slice(-4);
    renderCards(inactiveCards);
    setActive(buttonInactive);
});

// Dark Mode Toggle
toggleThemeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
