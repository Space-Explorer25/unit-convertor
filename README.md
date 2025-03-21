# Modern Unit Converter

A sleek, responsive web application for converting between different units of measurement with a modern UI and dark/light theme support.

## Features

- **Multiple Conversion Categories**:
  - Length (mm, cm, m, km, in, ft, yd, mi)
  - Weight (mg, g, kg, oz, lb, t)
  - Temperature (Celsius, Fahrenheit, Kelvin)
  - Volume (ml, l, gal, pt, qt, fl oz, cup)
  - Area (mm², cm², m², km², in², ft², acre, hectare)
  - Time (ms, s, min, h, d, wk, mo, yr)
  - Currency (USD, EUR, GBP, JPY, CNY, INR, AUD, CAD, EGP) with real-time exchange rates

- **User-Friendly Interface**:
  - Clean, modern design
  - Responsive layout for all devices
  - Intuitive unit selection
  - One-click unit swapping

- **Advanced Features**:
  - Real-time conversion as you type
  - Conversion formula display
  - Conversion history (stores up to 10 recent conversions)
  - Ability to reload previous conversions
  - Dark/light theme toggle with preference saving
  - Real-time currency exchange rates via Exchange Rates API (auto-updated every 24 hours)

## Technologies Used

- HTML5
- CSS3 (with CSS variables for theming)
- Vanilla JavaScript
- Service Workers (PWA support)
- Local Storage API for preferences/history
- Exchange Rates API (real-time currency data)
- Font Awesome icons
- Google Fonts (Poppins)

## Project Structure

- `index.html` - Main application entry point
- `styles.css` - Responsive styling with theme variables
- `script.js` - Core functionality including:
  - Unit conversion algorithms
  - Real-time currency exchange rates
  - Theme management
  - Conversion history
  - PWA installation handling
- `sw.js` - Service Worker for offline functionality
- `manifest.json` - PWA metadata (auto-generated)

## How to Use

1. Select a conversion category (Length, Weight, Temperature, etc.)
2. Enter a value in the input field
3. Select the units you want to convert from and to
4. View the result and the conversion formula
5. Previous conversions are saved in the history section
6. Toggle between dark and light themes using the sun/moon icon

## Key Features

- 📱 **PWA Support** - Installable web app with offline functionality
- 🌓 **Theme Switching** - Light/dark mode with system preference detection
- 🔄 **Real-time Currency Rates** - Auto-updating exchange rates via API
- 📚 **6+ Measurement Categories** - Length, weight, temperature, currency etc
- ⏳ **Conversion History** - Local storage of recent conversions
- 📱 **Responsive Design** - Optimized for mobile & desktop
- 🔄 **Service Worker** - Caches assets for fast reloads & offline use

## Setup

1. Clone the repository:
```bash
git clone https://github.com/unshreif/unit-converter.git
cd unit-converter
```
2. Install dependencies:
```bash
npm install -g http-server
```
3. Start development server:
```bash
npx http-server -o
```

The app will automatically:
- Register service worker for offline use
- Fetch latest currency exchange rates
- Apply your preferred theme settings

For production deployment, ensure HTTPS is enabled for full PWA functionality.

```
git clone https://github.com/unshreif/unit-convertor
cd unit-converter
```

Then open `index.html` in your browser.

## License

Feel free to use and modify this project for personal or commercial use.

## Author

Muhmd Samy © 2025
