// =========================
// COUNTRY DATA
// =========================

const countries = [
    {
        name: "Canada",
        flag: "🇨🇦",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Lake_Louise%2C_Banff_National_Park.jpg",
        description: "Discover Canada's mountains, lakes and beautiful cities.",
        capital: "Ottawa",
        language: "English and French",
        currency: "Canadian Dollar (CAD)",
        population: "Approximately 41 million",
        climate: "Cold winters and varied summers",
        culture: "Multicultural, friendly and diverse",
        attractions: [
            "Niagara Falls",
            "Banff National Park",
            "CN Tower"
        ],
        funFact: "Canada has more lakes than any other country."
    },

    {
        name: "United States",
        flag: "🇺🇸",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Grand_Canyon_Hopi_Point.jpg",
        description: "Explore famous cities, national parks and landmarks.",
        capital: "Washington, D.C.",
        language: "English is the most widely used language",
        currency: "United States Dollar (USD)",
        population: "Approximately 347 million",
        climate: "Ranges from arctic conditions to tropical climates",
        culture: "Highly diverse, with many regional traditions",
        attractions: [
            "Grand Canyon",
            "Statue of Liberty",
            "Yellowstone National Park"
        ],
        funFact: "The United States has 50 states."
    },

    {
        name: "Mexico",
        flag: "🇲🇽",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Chichen_Itza_3.jpg",
        description: "Experience ancient ruins, colorful traditions and cuisine.",
        capital: "Mexico City",
        language: "Spanish",
        currency: "Mexican Peso (MXN)",
        population: "Approximately 132 million",
        climate: "Varies from arid deserts to tropical regions",
        culture: "Known for its rich Indigenous and Spanish heritage",
        attractions: [
            "Chichen Itza",
            "Mexico City",
            "Cancun"
        ],
        funFact: "Chocolate originated in ancient Mesoamerican cultures."
    },

    {
        name: "Guatemala",
        flag: "🇬🇹",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Tikal_Temple_I.jpg",
        description: "Discover Mayan history, volcanoes and colorful markets.",
        capital: "Guatemala City",
        language: "Spanish and many Mayan languages",
        currency: "Guatemalan Quetzal (GTQ)",
        population: "Approximately 19 million",
        climate: "Tropical lowlands and cooler highlands",
        culture: "Strong Mayan heritage and traditional crafts",
        attractions: [
            "Tikal National Park",
            "Lake Atitlan",
            "Antigua Guatemala"
        ],
        funFact: "Guatemala is home to the ancient Mayan city of Tikal."
    },

    {
        name: "Belize",
        flag: "🇧🇿",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Great_Blue_Hole.jpg",
        description: "Explore tropical forests, coral reefs and Caribbean waters.",
        capital: "Belmopan",
        language: "English",
        currency: "Belize Dollar (BZD)",
        population: "Approximately 430,000",
        climate: "Tropical, with wet and dry seasons",
        culture: "Mayan, Creole, Garifuna and other cultural influences",
        attractions: [
            "Great Blue Hole",
            "Belize Barrier Reef",
            "Xunantunich"
        ],
        funFact: "Belize is home to part of the world's second-largest barrier reef system."
    },

    {
        name: "Honduras",
        flag: "🇭🇳",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ruinas_MAYA_Copan_Honduras_05.jpg",
        description: "Discover Mayan ruins, tropical islands and rainforests.",
        capital: "Tegucigalpa",
        language: "Spanish",
        currency: "Honduran Lempira (HNL)",
        population: "Approximately 11 million",
        climate: "Mostly tropical, with cooler mountain regions",
        culture: "Mayan heritage and diverse regional traditions",
        attractions: [
            "Copan Ruins",
            "Roatan Island",
            "Pico Bonito National Park"
        ],
        funFact: "Copan is an important archaeological site of the ancient Maya."
    },

    {
        name: "El Salvador",
        flag: "🇸🇻",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Volc%C3%A1n_de_Santa_Ana.jpg",
        description: "Explore volcanoes, Pacific beaches and historic towns.",
        capital: "San Salvador",
        language: "Spanish",
        currency: "United States Dollar (USD)",
        population: "Approximately 6.5 million",
        climate: "Tropical, with a rainy and a dry season",
        culture: "Influenced by Indigenous and Spanish traditions",
        attractions: [
            "Santa Ana Volcano",
            "El Tunco Beach",
            "Joya de Ceren"
        ],
        funFact: "El Salvador is the smallest country in Central America by land area."
    },

    {
        name: "Nicaragua",
        flag: "🇳🇮",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ometepe%2C_Nicaragua.jpg",
        description: "Discover volcanic landscapes, lakes and colonial cities.",
        capital: "Managua",
        language: "Spanish",
        currency: "Nicaraguan Cordoba (NIO)",
        population: "Approximately 7 million",
        climate: "Tropical, with regional variations",
        culture: "A mix of Indigenous, Spanish and Caribbean influences",
        attractions: [
            "Ometepe Island",
            "Granada",
            "Masaya Volcano"
        ],
        funFact: "Lake Nicaragua contains freshwater sharks, although their presence is uncommon."
    },

    {
        name: "Costa Rica",
        flag: "🇨🇷",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Arenal_Volcano_panorama.JPG",
        description: "Experience rainforests, wildlife and stunning coastlines.",
        capital: "San Jose",
        language: "Spanish",
        currency: "Costa Rican Colon (CRC)",
        population: "Approximately 5.2 million",
        climate: "Tropical, with regional and seasonal differences",
        culture: "Known for environmental protection and the phrase 'Pura Vida'",
        attractions: [
            "Arenal Volcano",
            "Monteverde Cloud Forest",
            "Manuel Antonio National Park"
        ],
        funFact: "Costa Rica is famous for its biodiversity and conservation efforts."
    },

    {
        name: "Panama",
        flag: "🇵🇦",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Panama_Canal.jpg",
        description: "Discover tropical islands and the famous Panama Canal.",
        capital: "Panama City",
        language: "Spanish",
        currency: "Balboa (PAB) and United States Dollar (USD)",
        population: "Approximately 4.6 million",
        climate: "Tropical, with wet and dry seasons",
        culture: "A blend of Indigenous, European, African and other influences",
        attractions: [
            "Panama Canal",
            "Casco Viejo",
            "San Blas Islands"
        ],
        funFact: "The Panama Canal connects the Atlantic and Pacific oceans."
    },

    {
        name: "Cuba",
        flag: "🇨🇺",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Old_Havana_Cuba.jpg",
        description: "Explore historic streets, music and Caribbean beaches.",
        capital: "Havana",
        language: "Spanish",
        currency: "Cuban Peso (CUP)",
        population: "Approximately 10 million",
        climate: "Tropical, with a wet season and a dry season",
        culture: "Known for its music, dance and distinctive architecture",
        attractions: [
            "Old Havana",
            "Varadero Beach",
            "Vinales Valley"
        ],
        funFact: "Old Havana is a UNESCO World Heritage Site."
    }
];


// =========================
// HTML ELEMENTS
// =========================

const countriesGrid = document.getElementById("countriesGrid");
const countrySearch = document.getElementById("countrySearch");
const noResults = document.getElementById("noResults");

const countryDetails = document.getElementById("countryDetails");
const detailsContent = document.getElementById("detailsContent");
const backButton = document.getElementById("backButton");


// =========================
// DISPLAY COUNTRY CARDS
// =========================

function displayCountries(countryList) {
    countriesGrid.innerHTML = "";

    noResults.hidden = countryList.length !== 0;

    countryList.forEach(function(country) {
        const card = document.createElement("article");

        card.className = "country-card";

        card.innerHTML = `
            <img
                class="country-image"
                src="${country.image}"
                alt="Landscape of ${country.name}"
                loading="lazy"
                onerror="this.style.display='none'"
            >

            <div class="country-card-content">
                <div class="country-flag">${country.flag}</div>

                <h3>${country.name}</h3>

                <p>${country.description}</p>

                <button
                    type="button"
                    class="explore-button"
                    data-country="${country.name}"
                >
                    Explore Country
                </button>
            </div>
        `;

        countriesGrid.appendChild(card);
    });
}


// =========================
// DISPLAY COUNTRY DETAILS
// =========================

function showCountryDetails(countryName) {
    const country = countries.find(function(item) {
        return item.name === countryName;
    });

    if (!country) {
        return;
    }

    const attractionsHTML = country.attractions
        .map(function(attraction) {
            return `<li>${attraction}</li>`;
        })
        .join("");

    detailsContent.innerHTML = `
        <h1 class="details-title">
            ${country.flag} ${country.name}
        </h1>

        <p class="details-intro">
            ${country.description}
        </p>

        <img
            class="details-image"
            src="${country.image}"
            alt="Landscape of ${country.name}"
            onerror="this.style.display='none'"
        >

        <div class="details-grid">

            <div class="detail-item">
                <h3>Capital</h3>
                <p>${country.capital}</p>
            </div>

            <div class="detail-item">
                <h3>Language</h3>
                <p>${country.language}</p>
            </div>

            <div class="detail-item">
                <h3>Currency</h3>
                <p>${country.currency}</p>
            </div>

            <div class="detail-item">
                <h3>Population</h3>
                <p>${country.population}</p>
            </div>

            <div class="detail-item">
                <h3>Climate</h3>
                <p>${country.climate}</p>
            </div>

            <div class="detail-item">
                <h3>Culture</h3>
                <p>${country.culture}</p>
            </div>

        </div>

        <h2 class="details-subheading">Popular Attractions</h2>

        <ul class="attractions-list">
            ${attractionsHTML}
        </ul>

        <div class="fun-fact">
            <h3>Did You Know?</h3>
            <p>${country.funFact}</p>
        </div>
    `;

    countryDetails.hidden = false;

    countryDetails.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


// =========================
// SEARCH COUNTRIES
// =========================

countrySearch.addEventListener("input", function() {
    const searchText = countrySearch.value.trim().toLowerCase();

    const filteredCountries = countries.filter(function(country) {
        return country.name.toLowerCase().includes(searchText);
    });

    displayCountries(filteredCountries);
});


// =========================
// COUNTRY BUTTON CLICKS
// =========================

countriesGrid.addEventListener("click", function(event) {
    const button = event.target.closest("[data-country]");

    if (!button) {
        return;
    }

    showCountryDetails(button.dataset.country);
});


// =========================
// BACK BUTTON
// =========================

backButton.addEventListener("click", function() {
    countryDetails.hidden = true;

    document.getElementById("countries").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});


// =========================
// FOOTER YEAR
// =========================

document.getElementById("currentYear").textContent =
    new Date().getFullYear();


// =========================
// INITIALIZE WEBSITE
// =========================

displayCountries(countries);
