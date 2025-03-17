# Modern Unit Converter

## Table of Contents
1. [Overview](#overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Getting Started](#getting-started)
5. [File Structure](#file-structure)
6. [Usage](#usage)
7. [Conversion Logic](#conversion-logic)
8. [Recent Conversions](#recent-conversions)
9. [Future Improvements](#future-improvements)
10. [License](#license)

## Overview
The Modern Unit Converter is a web application designed to facilitate the conversion of various units of measurement. It provides a user-friendly interface for converting between different categories such as length, weight, temperature, volume, area, and time.

## Features
- **Category Selection**: Users can choose from multiple categories of units to convert.
- **Input Fields**: Users can input a value to convert and select the units for conversion.
- **Conversion Button**: A dedicated button to perform the conversion.
- **Swap Functionality**: Users can easily swap the input and output units with a single click.
- **Recent Conversions**: Displays a history of the last conversions made by the user.
- **Clear History**: Option to clear the conversion history for a fresh start.
- **Responsive Design**: The application is designed to work on various screen sizes.

## Technologies Used
- **HTML**: For the structure of the web application.
- **CSS**: For styling the application and making it visually appealing.
- **JavaScript**: For implementing the conversion logic and interactivity.
- **Font Awesome**: For icons used in the user interface.
- **Google Fonts**: For custom typography.

## Getting Started
To get started with the Modern Unit Converter, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/unit-converter.git
   cd unit-converter
   ```

2. **Open the Application**:
   Open `index.html` in your preferred web browser.

3. **Dependencies**:
   Ensure you have an internet connection to load external resources like Font Awesome and Google Fonts.

## File Structure

unit-converter
│
├── index.html # Main HTML file
├── styles.css # CSS file for styling
├── script.js # JavaScript file for functionality
└── learn.md # Documentation file


## Usage
1. **Select a Category**: Click on one of the category buttons (e.g., Length, Weight) to choose the type of conversion.
2. **Enter a Value**: Input the value you wish to convert in the "Enter value" field.
3. **Select Units**: Choose the units you want to convert from and to using the dropdown menus.
4. **Convert**: Click the "Convert" button to see the result in the "Result" field.
5. **View History**: Recent conversions will be displayed below the converter.
6. **Clear History**: Click the "Clear History" button to remove all recent conversions.

## Conversion Logic
The conversion logic is implemented in `script.js`. Each category has its own set of conversion formulas. The application listens for user input and performs the necessary calculations when the "Convert" button is clicked.

### Example Conversion Logic
```javascript
function convertLength(value, fromUnit, toUnit) {
    // Conversion logic for length
    // ...
}
```

## Recent Conversions
The application maintains a history of recent conversions. Each time a conversion is made, it is added to the history list. Users can view their last conversions and clear the history if needed.

## Future Improvements
- **Additional Units**: Expand the list of units available for conversion.
- **User Preferences**: Allow users to save their preferred units for quicker access.
- **Improved UI/UX**: Enhance the user interface for better usability and aesthetics.
- **Unit Conversion API**: Integrate an API for real-time conversion rates for currencies and other units.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.
