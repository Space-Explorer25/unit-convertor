const unitData = {
    currency: {
        units: [
            { id: 'USD', name: 'US Dollar (USD)', factor: 1 },
            { id: 'EUR', name: 'Euro (EUR)', factor: null },
            { id: 'GBP', name: 'British Pound (GBP)', factor: null },
            { id: 'JPY', name: 'Japanese Yen (JPY)', factor: null },
            { id: 'CNY', name: 'Chinese Yuan (CNY)', factor: null },
            { id: 'INR', name: 'Indian Rupee (INR)', factor: null },
            { id: 'AUD', name: 'Australian Dollar (AUD)', factor: null },
            { id: 'CAD', name: 'Canadian Dollar (CAD)', factor: null },
            { id: 'EGP', name: 'Egyptian Pound (EGP)', factor: null }
        ],
        baseUnit: 'USD',
        formulas: {}
    },
    length: {
        units: [
            { id: 'mm', name: 'Millimeters (mm)', factor: 0.001 },
            { id: 'cm', name: 'Centimeters (cm)', factor: 0.01 },
            { id: 'm', name: 'Meters (m)', factor: 1 },
            { id: 'km', name: 'Kilometers (km)', factor: 1000 },
            { id: 'in', name: 'Inches (in)', factor: 0.0254 },
            { id: 'ft', name: 'Feet (ft)', factor: 0.3048 },
            { id: 'yd', name: 'Yards (yd)', factor: 0.9144 },
            { id: 'mi', name: 'Miles (mi)', factor: 1609.344 }
        ],
        baseUnit: 'm',
        formulas: {
            mm: 'value × 0.001',
            cm: 'value × 0.01',
            m: 'value',
            km: 'value × 1000',
            in: 'value × 0.0254',
            ft: 'value × 0.3048',
            yd: 'value × 0.9144',
            mi: 'value × 1609.344'
        }
    },
    weight: {
        units: [
            { id: 'mg', name: 'Milligrams (mg)', factor: 0.001 },
            { id: 'g', name: 'Grams (g)', factor: 1 },
            { id: 'kg', name: 'Kilograms (kg)', factor: 1000 },
            { id: 'oz', name: 'Ounces (oz)', factor: 28.3495 },
            { id: 'lb', name: 'Pounds (lb)', factor: 453.592 },
            { id: 't', name: 'Metric Tons (t)', factor: 1000000 }
        ],
        baseUnit: 'g',
        formulas: {
            mg: 'value × 0.001',
            g: 'value',
            kg: 'value × 1000',
            oz: 'value × 28.3495',
            lb: 'value × 453.592',
            t: 'value × 1,000,000'
        }
    },
    temperature: {
        units: [
            { id: 'c', name: 'Celsius (°C)', factor: 1 },
            { id: 'f', name: 'Fahrenheit (°F)', factor: null },
            { id: 'k', name: 'Kelvin (K)', factor: null }
        ],
        baseUnit: 'c',
        formulas: {
            c: 'value',
            f: '(value × 9/5) + 32',
            k: 'value + 273.15'
        }
    },
    volume: {
        units: [
            { id: 'ml', name: 'Milliliters (ml)', factor: 0.001 },
            { id: 'l', name: 'Liters (L)', factor: 1 },
            { id: 'gal', name: 'Gallons (gal)', factor: 3.78541 },
            { id: 'pt', name: 'Pints (pt)', factor: 0.473176 },
            { id: 'qt', name: 'Quarts (qt)', factor: 0.946353 },
            { id: 'floz', name: 'Fluid Ounces (fl oz)', factor: 0.0295735 },
            { id: 'cup', name: 'Cups', factor: 0.24 }
        ],
        baseUnit: 'l',
        formulas: {
            ml: 'value × 0.001',
            l: 'value',
            gal: 'value × 3.78541',
            pt: 'value × 0.473176',
            qt: 'value × 0.946353',
            floz: 'value × 0.0295735',
            cup: 'value × 0.24'
        }
    },
    area: {
        units: [
            { id: 'mm2', name: 'Square Millimeters (mm²)', factor: 0.000001 },
            { id: 'cm2', name: 'Square Centimeters (cm²)', factor: 0.0001 },
            { id: 'm2', name: 'Square Meters (m²)', factor: 1 },
            { id: 'km2', name: 'Square Kilometers (km²)', factor: 1000000 },
            { id: 'in2', name: 'Square Inches (in²)', factor: 0.00064516 },
            { id: 'ft2', name: 'Square Feet (ft²)', factor: 0.092903 },
            { id: 'ac', name: 'Acres', factor: 4046.86 },
            { id: 'ha', name: 'Hectares', factor: 10000 }
        ],
        baseUnit: 'm2',
        formulas: {
            mm2: 'value × 0.000001',
            cm2: 'value × 0.0001',
            m2: 'value',
            km2: 'value × 1,000,000',
            in2: 'value × 0.00064516',
            ft2: 'value × 0.092903',
            ac: 'value × 4,046.86',
            ha: 'value × 10,000'
        }
    },
    time: {
        units: [
            { id: 'ms', name: 'Milliseconds (ms)', factor: 0.001 },
            { id: 's', name: 'Seconds (s)', factor: 1 },
            { id: 'min', name: 'Minutes (min)', factor: 60 },
            { id: 'h', name: 'Hours (h)', factor: 3600 },
            { id: 'd', name: 'Days (d)', factor: 86400 },
            { id: 'wk', name: 'Weeks (wk)', factor: 604800 },
            { id: 'mo', name: 'Months (30 days)', factor: 2592000 },
            { id: 'yr', name: 'Years (365 days)', factor: 31536000 }
        ],
        baseUnit: 's',
        formulas: {
            ms: 'value × 0.001',
            s: 'value',
            min: 'value × 60',
            h: 'value × 3,600',
            d: 'value × 86,400',
            wk: 'value × 604,800',
            mo: 'value × 2,592,000',
            yr: 'value × 31,536,000'
        }
    }
};

const categoryButtons = document.querySelectorAll('.category-btn');
const fromUnitSelect = document.getElementById('fromUnit');
const toUnitSelect = document.getElementById('toUnit');
const fromValueInput = document.getElementById('fromValue');
const toValueInput = document.getElementById('toValue');
const convertBtn = document.querySelector('.convert-btn');
const swapBtn = document.querySelector('.swap-btn');
const formulaDisplay = document.getElementById('formula');
const historyList = document.getElementById('historyList');
const clearHistoryBtn = document.querySelector('.clear-history-btn');
const themeToggle = document.querySelector('.theme-toggle');

let currentCategory = 'length';
let conversionHistory = JSON.parse(localStorage.getItem('conversionHistory')) || [];

const EXCHANGE_API_URL = '/api/exchange-rates';

async function fetchExchangeRates() {
    try {
        const response = await fetch(EXCHANGE_API_URL);
        const data = await response.json();
        if (data.result !== 'success') {
            throw new Error('Failed to fetch exchange rates');
        }
        if (data.conversion_rates) {
            unitData.currency.units.forEach(unit => {
                if (unit.id !== 'USD') {
                    unit.factor = data.conversion_rates[unit.id] || null;
                }
            });
            localStorage.setItem('lastExchangeUpdate', Date.now());
            localStorage.setItem('exchangeRates', JSON.stringify(data.conversion_rates));
        }
    } catch (error) {
        console.error('Error fetching exchange rates:', error);
        const lastUpdate = localStorage.getItem('lastExchangeUpdate') || 0;
        if (Date.now() - lastUpdate > 86400000) { 
            unitData.currency.units.forEach(unit => {
                unit.factor = getHardcodedRate(unit.id);
            });
        }

        const cachedRates = localStorage.getItem('exchangeRates');
        if (cachedRates) {
            const rates = JSON.parse(cachedRates);
            unitData.currency.units.forEach(unit => {
                if (unit.id !== 'USD') {
                    unit.factor = rates[unit.id] || null;
                }
            });
        }
    }
}

function convert() {
    const fromValue = parseFloat(fromValueInput.value);
    if (isNaN(fromValue)) {
        toValueInput.value = '';
        formulaDisplay.textContent = '-';
        return;
    }
    const fromUnit = fromUnitSelect.value;
    const toUnit = toUnitSelect.value;
    const category = currentCategory;
    let result;
    let formula;

    if (category === 'temperature') {
        result = convertTemperature(fromValue, fromUnit, toUnit);
        formula = getTemperatureFormula(fromUnit, toUnit);
    } else if (category === 'currency') {
        const fromFactor = unitData[category].units.find(u => u.id === fromUnit).factor || 1;
        const toFactor = unitData[category].units.find(u => u.id === toUnit).factor || 1;
        result = (fromValue / fromFactor) * toFactor;
        formula = `${fromValue} ${fromUnit} × (1/${fromFactor.toFixed(4)} USD) × ${toFactor.toFixed(4)} = ${result.toFixed(2)} ${toUnit}`;
    } else {
        const fromFactor = unitData[category].units.find(u => u.id === fromUnit).factor;
        const toFactor = unitData[category].units.find(u => u.id === toUnit).factor;
        result = (fromValue * fromFactor) / toFactor;
        formula = `(${fromValue} × ${fromFactor}) ÷ ${toFactor} = ${result.toFixed(6)}`;
    }
    
    toValueInput.value = formatResult(result);
    formulaDisplay.textContent = formula;
    addToHistory(fromValue, fromUnit, toUnit, result, category);
}

async function loadCategory(category) {
    currentCategory = category;
    fromUnitSelect.innerHTML = '';
    toUnitSelect.innerHTML = '';

    if (category === 'currency') {
        await fetchExchangeRates();
    }
    
    unitData[category].units.forEach(unit => {
        const fromOption = document.createElement('option');
        fromOption.value = unit.id;
        fromOption.textContent = unit.name;
        fromUnitSelect.appendChild(fromOption);
        const toOption = document.createElement('option');
        toOption.value = unit.id;
        toOption.textContent = unit.name;
        toUnitSelect.appendChild(toOption);
    });
    fromUnitSelect.selectedIndex = 0;
    toUnitSelect.selectedIndex = unitData[category].units.length > 1 ? 1 : 0;
    fromValueInput.value = '';
    toValueInput.value = '';
    formulaDisplay.textContent = '-';
    categoryButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === category);
    });
}

function convertTemperature(value, fromUnit, toUnit) {
    if (fromUnit === toUnit) return value;
    let celsius;
    if (fromUnit === 'c') {
        celsius = value;
    } else if (fromUnit === 'f') {
        celsius = (value - 32) * 5/9;
    } else if (fromUnit === 'k') {
        celsius = value - 273.15;
    }
    if (toUnit === 'c') {
        return celsius;
    } else if (toUnit === 'f') {
        return (celsius * 9/5) + 32;
    } else if (toUnit === 'k') {
        return celsius + 273.15;
    }
}

function getTemperatureFormula(fromUnit, toUnit) {
    if (fromUnit === toUnit) return 'value';
    if (fromUnit === 'c' && toUnit === 'f') return '(value × 9/5) + 32';
    if (fromUnit === 'c' && toUnit === 'k') return 'value + 273.15';
    if (fromUnit === 'f' && toUnit === 'c') return '(value - 32) × 5/9';
    if (fromUnit === 'f' && toUnit === 'k') return '(value - 32) × 5/9 + 273.15';
    if (fromUnit === 'k' && toUnit === 'c') return 'value - 273.15';
    if (fromUnit === 'k' && toUnit === 'f') return '(value - 273.15) × 9/5 + 32';
}

function formatResult(value) {
    if (Math.abs(value) < 0.000001) return '0';
    if (Math.abs(value) >= 1000000) return value.toExponential(6);
    const absValue = Math.abs(value);
    let decimalPlaces = 2;
    if (absValue < 0.01) decimalPlaces = 6;
    else if (absValue < 0.1) decimalPlaces = 5;
    else if (absValue < 1) decimalPlaces = 4;
    else if (absValue < 10) decimalPlaces = 3;
    return value.toFixed(decimalPlaces);
}

function addToHistory(fromValue, fromUnit, toUnit, result, category) {
    const fromUnitName = unitData[category].units.find(u => u.id === fromUnit).name;
    const toUnitName = unitData[category].units.find(u => u.id === toUnit).name;
    const historyItem = {
        id: Date.now(),
        category,
        fromValue,
        fromUnit,
        fromUnitName,
        toUnit,
        toUnitName,
        result: formatResult(result),
        timestamp: new Date().toISOString()
    };
    conversionHistory.unshift(historyItem);
    if (conversionHistory.length > 10) {
        conversionHistory.pop();
    }
    localStorage.setItem('conversionHistory', JSON.stringify(conversionHistory));
    loadHistory();
}

function loadHistory() {
    historyList.innerHTML = '';
    if (conversionHistory.length === 0) {
        const emptyMessage = document.createElement('p');
        emptyMessage.textContent = 'No conversion history yet';
        emptyMessage.className = 'empty-history';
        historyList.appendChild(emptyMessage);
        return;
    }
    conversionHistory.forEach(item => {
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        const itemText = document.createElement('div');
        itemText.className = 'history-item-text';
        itemText.textContent = `${item.fromValue} ${item.fromUnit} = ${item.result} ${item.toUnit}`;
        const itemActions = document.createElement('div');
        itemActions.className = 'history-item-actions';
        const reloadBtn = document.createElement('button');
        reloadBtn.innerHTML = '<i class="fas fa-redo"></i>';
        reloadBtn.title = 'Reload this conversion';
        reloadBtn.addEventListener('click', () => reloadConversion(item));
        itemActions.appendChild(reloadBtn);
        historyItem.appendChild(itemText);
        historyItem.appendChild(itemActions);
        historyList.appendChild(historyItem);
    });
}

function reloadConversion(item) {
    loadCategory(item.category);
    fromValueInput.value = item.fromValue;
    const fromUnitIndex = Array.from(fromUnitSelect.options).findIndex(option => option.value === item.fromUnit);
    const toUnitIndex = Array.from(toUnitSelect.options).findIndex(option => option.value === item.toUnit);
    if (fromUnitIndex >= 0) fromUnitSelect.selectedIndex = fromUnitIndex;
    if (toUnitIndex >= 0) toUnitSelect.selectedIndex = toUnitIndex;
    convert();
}

function clearHistory() {
    conversionHistory = [];
    localStorage.removeItem('conversionHistory');
    loadHistory();
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const moonIcon = themeToggle.querySelector('.fa-moon');
    const sunIcon = themeToggle.querySelector('.fa-sun');
    moonIcon.classList.toggle('active');
    sunIcon.classList.toggle('active');
    const isDarkTheme = document.body.classList.contains('dark-theme');
    localStorage.setItem('darkTheme', isDarkTheme);
}

function swapUnits() {
    const tempIndex = fromUnitSelect.selectedIndex;
    fromUnitSelect.selectedIndex = toUnitSelect.selectedIndex;
    toUnitSelect.selectedIndex = tempIndex;
    if (fromValueInput.value) {
        convert();
    }
}

function setupEventListeners() {
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => loadCategory(btn.dataset.category));
    });
    convertBtn.addEventListener('click', convert);
    fromValueInput.addEventListener('input', convert);
    fromUnitSelect.addEventListener('change', convert);
    toUnitSelect.addEventListener('change', convert);
    swapBtn.addEventListener('click', swapUnits);
    clearHistoryBtn.addEventListener('click', clearHistory);
    themeToggle.addEventListener('click', toggleTheme);
    if (localStorage.getItem('darkTheme') === 'true') {
        toggleTheme();
    }
}

document.addEventListener('DOMContentLoaded', init);

function init() {
    if (currentCategory === 'currency') {
        fetchExchangeRates();
    }
    loadCategory(currentCategory);
    loadHistory();
    setupEventListeners();
    
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('SW registered:', registration))
            .catch(error => console.log('SW registration failed:', error));
    }
}

function getHardcodedRate(currency) {
    const rates = {
        EUR: 0.85,
        GBP: 0.73,
        JPY: 110.15,
        CNY: 6.45,
        INR: 73.5,
        AUD: 1.32,
        CAD: 1.25,
        EGP: 30.85
    };
    return rates[currency] || 1;
}