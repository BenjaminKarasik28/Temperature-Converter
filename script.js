const getTemp = () =>{
    let top = document.getElementById('select-from');

        if(top.value === 'F'){
            let fahrenheit = document.querySelector('#temp').value;
            let fahrenheitToCelsius = (fahrenheit - 32) / 1.8;
            let fahrenheitToKelvin = ( fahrenheit * 1 + 459.67) / 1.8
            document.getElementById('get').textContent = 'Your temperature from F to C is ' + fahrenheitToCelsius.toFixed(2) + ' Degrees and from F to K is '  + fahrenheitToKelvin.toFixed(2)  + ' Degrees' ;
        }

        else if(top.value === 'C'){
            let celsius = document.querySelector('#temp').value;
            let celsiusToFahrenheit = (celsius * 1.8) + 32;
            let celsiusToKelvin  = celsius*1  + 273.15
            document.getElementById('get').textContent = 'Your temperature from C to F is ' + celsiusToFahrenheit.toFixed(2) + ' Degrees and from C to K is ' + celsiusToKelvin.toFixed(2)  + ' Degrees' ;
    }

        else if(top.value === 'K'){
            let kelvin = document.querySelector('#temp').value;
            let kelvinToFahrenheit = ((kelvin *1 ) * 1.8 )- 459.67
            let kelvinToCelsius  = (kelvin * 1) - 273.15
            document.getElementById('get').textContent = 'Your temperature from C to F is ' + kelvinToFahrenheit.toFixed(2) + ' Degrees and from C to K is ' + kelvinToCelsius.toFixed(2)  + ' Degrees' ;
    }

}





