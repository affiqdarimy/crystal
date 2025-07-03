# 🌟 Qamara Butiq - Crystal Discovery Website

A beautiful, interactive website for discovering different types of crystals with their healing properties, characteristics, and benefits.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [File Documentation](#file-documentation)
- [Crystal Database](#crystal-database)
- [Customization](#customization)
- [Browser Support](#browser-support)
- [Future Enhancements](#future-enhancements)

## 🎯 Overview

Qamara Butiq Crystal Discovery is a modern, responsive web application that showcases various crystals with detailed information about their healing properties, characteristics, and practical uses. The website features an intuitive interface with search functionality and interactive crystal cards.

## ✨ Features

### 🎨 **Design & User Experience**
- **Modern UI**: Beautiful gradient backgrounds with glass-morphism effects
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Elements**: Hover effects, smooth animations, and visual feedback
- **Accessibility**: Clean typography and high contrast for easy reading

### 🔍 **Functionality**
- **Crystal Database**: 6 popular crystals with comprehensive information
- **Search Feature**: Find crystals by name, category, or benefits
- **Interactive Cards**: Click to view detailed crystal information
- **Modal Popups**: Beautiful detailed view with all crystal data
- **Real-time Filtering**: Instant search results as you type

### 📱 **Technical Features**
- **Pure HTML/CSS/JavaScript**: No external dependencies
- **Modular Code**: Separated CSS and JavaScript for maintainability
- **Cross-browser Compatible**: Works on all modern browsers
- **Fast Loading**: Optimized for performance

## 📁 Project Structure

```
CURSOR CRYSTAL/
├── crystal.html          # Main HTML file
├── styles.css           # All CSS styles and responsive design
├── script.js            # JavaScript functionality and crystal database
└── README.md            # This documentation file
```

## 🚀 Installation

1. **Download Files**: Ensure all three files are in the same directory
2. **Open Website**: Double-click `crystal.html` or open it in any web browser
3. **No Server Required**: The website works offline without any server setup

## 💻 Usage

### **Basic Navigation**
1. **Browse Crystals**: Scroll through the crystal cards on the main page
2. **Search**: Use the search bar to find specific crystals
3. **View Details**: Click on any crystal card to see detailed information
4. **Close Modal**: Click the X button or outside the modal to close

### **Search Functionality**
- **Search by Name**: Type crystal names like "Amethyst" or "Rose Quartz"
- **Search by Category**: Find crystals by type like "Quartz" or "Volcanic Glass"
- **Search by Benefits**: Look for specific benefits like "calm" or "love"
- **Real-time Results**: Results update instantly as you type

### **Crystal Information**
Each crystal includes:
- **Basic Info**: Name, category, and description
- **Key Benefits**: Top 3 healing properties
- **Characteristics**: Color, hardness, origin, and chakra association
- **Detailed View**: Complete healing properties and common uses

## 📄 File Documentation

### **crystal.html**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Qamara Boutique - Crystal Discovery</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Header with navigation and search -->
    <!-- Main content with crystal grid -->
    <!-- Modal for detailed crystal information -->
    <script src="script.js"></script>
</body>
</html>
```

**Key Sections:**
- **Header**: Navigation bar with logo and search functionality
- **Hero Section**: Welcome message and description
- **Crystal Grid**: Container for crystal cards (populated by JavaScript)
- **Modal**: Overlay for detailed crystal information

### **styles.css**
Contains all styling including:

**Layout & Structure:**
- CSS Grid for responsive crystal layout
- Flexbox for navigation and modal layouts
- Media queries for mobile responsiveness

**Visual Design:**
- Gradient backgrounds and glass-morphism effects
- Hover animations and transitions
- Color scheme: Purple/blue gradients (#667eea to #764ba2)

**Components:**
- `.crystal-card`: Individual crystal display cards
- `.modal`: Popup for detailed information
- `.search-input`: Styled search functionality
- `.hero`: Main heading and description area

### **script.js**
Contains all interactive functionality:

**Data Structure:**
```javascript
const crystals = [
    {
        id: 1,
        name: "Crystal Name",
        category: "Category",
        description: "Description",
        image: "💎",
        benefits: ["Benefit 1", "Benefit 2"],
        characteristics: {
            color: "Color",
            hardness: "Hardness",
            origin: "Origin",
            chakra: "Chakra"
        },
        healing: ["Healing property 1"],
        uses: ["Use 1", "Use 2"]
    }
];
```

**Key Functions:**
- `displayCrystals()`: Renders crystal cards in the grid
- `createCrystalCard()`: Generates individual crystal cards
- `openModal()`: Shows detailed crystal information
- `setupSearch()`: Handles search functionality
- `filterCrystals()`: Placeholder for future filtering

## 💎 Crystal Database

The website includes 6 popular crystals:

### **1. Amethyst** 💜
- **Category**: Quartz
- **Properties**: Calming, spiritual awareness, stress relief
- **Chakra**: Crown, Third Eye
- **Origin**: Brazil, Uruguay, Zambia

### **2. Rose Quartz** 💖
- **Category**: Quartz
- **Properties**: Love, compassion, emotional healing
- **Chakra**: Heart
- **Origin**: Brazil, Madagascar, India

### **3. Citrine** 💛
- **Category**: Quartz
- **Properties**: Abundance, energy, creativity
- **Chakra**: Solar Plexus, Sacral
- **Origin**: Brazil, Madagascar, Russia

### **4. Clear Quartz** 💎
- **Category**: Quartz
- **Properties**: Energy amplification, clarity, healing
- **Chakra**: All Chakras
- **Origin**: Worldwide

### **5. Black Obsidian** 🖤
- **Category**: Volcanic Glass
- **Properties**: Protection, grounding, truth
- **Chakra**: Root
- **Origin**: Mexico, USA, Iceland

### **6. Lapis Lazuli** 🔷
- **Category**: Metamorphic Rock
- **Properties**: Communication, wisdom, spiritual growth
- **Chakra**: Third Eye, Throat
- **Origin**: Afghanistan, Chile, Russia

## 🎨 Customization

### **Adding New Crystals**
1. Open `script.js`
2. Add a new crystal object to the `crystals` array
3. Follow the existing data structure format
4. Include all required properties (name, category, description, etc.)

### **Modifying Styles**
1. Open `styles.css`
2. Locate the relevant CSS class
3. Modify colors, sizes, or effects as needed
4. Test on different screen sizes

### **Changing Colors**
Main color variables are used throughout:
- Primary: `#667eea` (Blue)
- Secondary: `#764ba2` (Purple)
- Background: Gradient from primary to secondary

### **Adding Features**
1. **New Filter Options**: Modify the `filterCrystals()` function
2. **Additional Crystal Properties**: Extend the crystal data structure
3. **New Animations**: Add CSS transitions and transforms
4. **E-commerce Integration**: Add shopping cart functionality

## 🌐 Browser Support

- ✅ **Chrome** (Recommended)
- ✅ **Firefox**
- ✅ **Safari**
- ✅ **Edge**
- ✅ **Mobile Browsers**

**Minimum Requirements:**
- Modern browser with CSS Grid and Flexbox support
- JavaScript enabled
- No additional plugins required

## 🔮 Future Enhancements

### **Planned Features**
- [ ] **Advanced Filtering**: Filter by chakra, color, or hardness
- [ ] **Crystal Categories**: Organize crystals by type or purpose
- [ ] **User Accounts**: Save favorite crystals and preferences
- [ ] **E-commerce Integration**: Add shopping cart and payment
- [ ] **Crystal Quiz**: Interactive quiz to find perfect crystals
- [ ] **Image Gallery**: Real crystal photos instead of emojis
- [ ] **Crystal Care Guide**: Maintenance and charging instructions
- [ ] **Social Sharing**: Share favorite crystals on social media

### **Technical Improvements**
- [ ] **Database Integration**: Move crystal data to a database
- [ ] **API Development**: Create REST API for crystal data
- [ ] **Progressive Web App**: Add offline functionality
- [ ] **Performance Optimization**: Image optimization and lazy loading
- [ ] **SEO Enhancement**: Meta tags and structured data

## 🛠️ Troubleshooting

### **Common Issues**

**Website Not Loading:**
- Ensure all files are in the same directory
- Check that file names match exactly (case-sensitive)
- Try opening in a different browser

**Search Not Working:**
- Verify JavaScript is enabled in your browser
- Check browser console for error messages
- Ensure `script.js` is properly linked

**Styles Not Applied:**
- Confirm `styles.css` is in the same folder as `crystal.html`
- Check that the CSS file link is correct
- Clear browser cache and reload

**Modal Not Opening:**
- Click directly on crystal cards (not empty areas)
- Check that JavaScript is enabled
- Verify all HTML elements have correct IDs

## 📞 Support

For questions or issues:
1. Check this documentation first
2. Verify all files are present and properly named
3. Test in different browsers
4. Check browser console for error messages

## 📄 License

This project is created for Qamara Boutique. Feel free to modify and customize for your needs.

---

**Created with ❤️ for crystal enthusiasts and spiritual seekers** 