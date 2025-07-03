// Crystal database
const crystals = [
    {
        id: 1,
        name: "Amethyst",
        category: "Quartz",
        description: "A beautiful purple variety of quartz known for its calming and protective properties.",
        image: "💜",
        benefits: [
            "Promotes calm and balance",
            "Enhances spiritual awareness",
            "Aids in meditation",
            "Helps with stress relief",
            "Supports emotional healing"
        ],
        characteristics: {
            color: "Purple",
            hardness: "7",
            origin: "Brazil, Uruguay, Zambia",
            chakra: "Crown, Third Eye"
        },
        healing: [
            "Emotional balance and stability",
            "Mental clarity and focus",
            "Spiritual growth and intuition",
            "Protection from negative energy",
            "Enhanced meditation experiences"
        ],
        uses: [
            "Meditation and spiritual practices",
            "Stress relief and relaxation",
            "Sleep improvement",
            "Emotional healing",
            "Protection and purification"
        ]
    },
    {
        id: 2,
        name: "Rose Quartz",
        category: "Quartz",
        description: "The stone of universal love and healing, promoting compassion and emotional healing.",
        image: "💖",
        benefits: [
            "Promotes love and compassion",
            "Heals emotional wounds",
            "Enhances relationships",
            "Reduces stress and anxiety",
            "Opens the heart chakra"
        ],
        characteristics: {
            color: "Pink",
            hardness: "7",
            origin: "Brazil, Madagascar, India",
            chakra: "Heart"
        },
        healing: [
            "Emotional healing and self-love",
            "Relationship harmony",
            "Compassion and empathy",
            "Stress and anxiety relief",
            "Inner peace and tranquility"
        ],
        uses: [
            "Love and relationship healing",
            "Emotional self-care",
            "Meditation and prayer",
            "Home and office decoration",
            "Jewelry and personal adornment"
        ]
    },
    {
        id: 3,
        name: "Citrine",
        category: "Quartz",
        description: "The sunshine stone that brings abundance, energy, and positive vibes.",
        image: "💛",
        benefits: [
            "Attracts abundance and prosperity",
            "Boosts energy and motivation",
            "Enhances creativity",
            "Promotes optimism",
            "Clears negative energy"
        ],
        characteristics: {
            color: "Yellow to Orange",
            hardness: "7",
            origin: "Brazil, Madagascar, Russia",
            chakra: "Solar Plexus, Sacral"
        },
        healing: [
            "Manifestation and abundance",
            "Personal power and confidence",
            "Creative expression",
            "Energy and vitality",
            "Positive thinking and optimism"
        ],
        uses: [
            "Wealth and abundance rituals",
            "Energy and motivation boost",
            "Creative projects and inspiration",
            "Business and career success",
            "Personal power enhancement"
        ]
    },
    {
        id: 4,
        name: "Clear Quartz",
        category: "Quartz",
        description: "The master healer and amplifier of energy, known as the most versatile crystal.",
        image: "💎",
        benefits: [
            "Amplifies energy and intentions",
            "Enhances clarity and focus",
            "Balances all chakras",
            "Promotes healing",
            "Clears negative energy"
        ],
        characteristics: {
            color: "Clear/Transparent",
            hardness: "7",
            origin: "Worldwide",
            chakra: "All Chakras"
        },
        healing: [
            "Energy amplification and clarity",
            "Spiritual growth and awareness",
            "Physical and emotional healing",
            "Mental focus and concentration",
            "Protection and purification"
        ],
        uses: [
            "Energy work and healing",
            "Meditation and spiritual practices",
            "Programming with intentions",
            "Clearing and charging other crystals",
            "Protection and purification rituals"
        ]
    },
    {
        id: 5,
        name: "Black Obsidian",
        category: "Volcanic Glass",
        description: "A powerful protective stone that absorbs negative energy and provides grounding.",
        image: "🖤",
        benefits: [
            "Protects against negative energy",
            "Provides grounding and stability",
            "Enhances psychic protection",
            "Promotes truth and honesty",
            "Aids in shadow work"
        ],
        characteristics: {
            color: "Black",
            hardness: "5-6",
            origin: "Mexico, USA, Iceland",
            chakra: "Root"
        },
        healing: [
            "Protection and grounding",
            "Emotional healing and release",
            "Truth and honesty",
            "Shadow work and transformation",
            "Psychic protection and boundaries"
        ],
        uses: [
            "Protection and grounding rituals",
            "Shadow work and transformation",
            "Psychic protection",
            "Truth and honesty practices",
            "Emotional release and healing"
        ]
    },
    {
        id: 6,
        name: "Lapis Lazuli",
        category: "Metamorphic Rock",
        description: "The stone of wisdom and truth, enhancing communication and spiritual awareness.",
        image: "🔷",
        benefits: [
            "Enhances communication",
            "Promotes wisdom and truth",
            "Opens the third eye",
            "Strengthens relationships",
            "Aids in spiritual growth"
        ],
        characteristics: {
            color: "Deep Blue",
            hardness: "5-6",
            origin: "Afghanistan, Chile, Russia",
            chakra: "Third Eye, Throat"
        },
        healing: [
            "Communication and expression",
            "Wisdom and truth-seeking",
            "Spiritual awareness and growth",
            "Intuition and psychic abilities",
            "Emotional balance and harmony"
        ],
        uses: [
            "Communication and public speaking",
            "Spiritual and religious practices",
            "Meditation and prayer",
            "Wisdom and knowledge seeking",
            "Artistic and creative expression"
        ]
    }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayCrystals(crystals);
    setupSearch();
});

// Display crystals in the grid
function displayCrystals(crystalList) {
    const grid = document.getElementById('crystalGrid');
    grid.innerHTML = '';

    crystalList.forEach(crystal => {
        const card = createCrystalCard(crystal);
        grid.appendChild(card);
    });
}

// Create a crystal card
function createCrystalCard(crystal) {
    const card = document.createElement('div');
    card.className = 'crystal-card';
    card.onclick = () => openModal(crystal);

    card.innerHTML = `
        <div class="crystal-image">${crystal.image}</div>
        <h3 class="crystal-name">${crystal.name}</h3>
        <span class="crystal-category">${crystal.category}</span>
        <p class="crystal-description">${crystal.description}</p>
        <div class="crystal-benefits">
            <h4>Key Benefits:</h4>
            <ul>
                ${crystal.benefits.slice(0, 3).map(benefit => `<li>${benefit}</li>`).join('')}
            </ul>
        </div>
        <div class="crystal-details">
            <div class="detail-item">
                <div class="detail-label">Color</div>
                <div class="detail-value">${crystal.characteristics.color}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Chakra</div>
                <div class="detail-value">${crystal.characteristics.chakra}</div>
            </div>
        </div>
    `;

    return card;
}

// Open modal with detailed crystal information
function openModal(crystal) {
    const modal = document.getElementById('crystalModal');
    const modalContent = document.getElementById('modalContent');

    modalContent.innerHTML = `
        <div class="modal-header">
            <div class="modal-image">${crystal.image}</div>
            <div class="modal-info">
                <h2>${crystal.name}</h2>
                <span class="crystal-category">${crystal.category}</span>
            </div>
        </div>
        <p style="margin-bottom: 2rem; color: #666; line-height: 1.6;">${crystal.description}</p>
        
        <div class="modal-sections">
            <div class="section">
                <h3>Healing Properties</h3>
                <ul>
                    ${crystal.healing.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
            <div class="section">
                <h3>Common Uses</h3>
                <ul>
                    ${crystal.uses.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        </div>
        
        <div style="margin-top: 2rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem;">
            <div class="detail-item">
                <div class="detail-label">Color</div>
                <div class="detail-value">${crystal.characteristics.color}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Hardness</div>
                <div class="detail-value">${crystal.characteristics.hardness}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Origin</div>
                <div class="detail-value">${crystal.characteristics.origin}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Chakra</div>
                <div class="detail-value">${crystal.characteristics.chakra}</div>
            </div>
        </div>
    `;

    modal.style.display = 'block';
}

// Close modal
function closeModal() {
    document.getElementById('crystalModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('crystalModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Setup search functionality
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const filteredCrystals = crystals.filter(crystal => 
            crystal.name.toLowerCase().includes(searchTerm) ||
            crystal.category.toLowerCase().includes(searchTerm) ||
            crystal.description.toLowerCase().includes(searchTerm) ||
            crystal.benefits.some(benefit => benefit.toLowerCase().includes(searchTerm))
        );
        displayCrystals(filteredCrystals);
    });
}

// Filter crystals (placeholder for future filter functionality)
function filterCrystals() {
    // This can be expanded to include category filters, chakra filters, etc.
    alert('Filter functionality coming soon! You can use the search bar to find specific crystals.');
} 