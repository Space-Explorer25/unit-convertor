

document.querySelector('button').addEventListener('click', convert);

function convert() {
    input = document.getElementById('input').value;
    
  meter = input * 3.281;
  result = `${input} Meter <span> Equals </span> ${meter} Feet`;  
  document.getElementById('output1').innerHTML = result;
  
  liter = input * 0.264;
  result2 = `${input} Liter <span> Equals </span> ${liter} Gallon`;
  document.getElementById('output2').innerHTML = result2;
  
  kilogram = input * 2.204;
    result3 = `${input} Kilogram <span> Equals </span> ${kilogram} Pound`;
    document.getElementById('output3').innerHTML = result3;
}

convert()









/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/