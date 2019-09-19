//Onclick function runs when button is clicked
const getTemp = () =>{
    //initializaing top variable with the select HTML tag
    let top = document.getElementById('select-from');
    
        //checks if value of that tag is F, if it is then that means User wants fahrenheit conversion
        //sets fahrenheit value with the value of the text from the input tag
        //there is a p element that gets textContent added to it with the values of the conversions
        if(top.value === 'F'){
            let fahrenheit = document.querySelector('#temp').value;
            let fahrenheitToCelsius = (fahrenheit - 32) / 1.8;
            let fahrenheitToKelvin = ( fahrenheit * 1 + 459.67) / 1.8
            document.getElementById('get').textContent = 'Your temperature from F to C is ' + fahrenheitToCelsius.toFixed(2) + ' Degrees and from F to K is '  + fahrenheitToKelvin.toFixed(2)  + ' Degrees' ;
        }
        //checks if value of that tag is C, if it is then that means User wants celsius conversion
        //sets celsius value with the value of the text from the input tag
        //there is a p element that gets textContent added to it with the values of the conversions
        else if(top.value === 'C'){
            let celsius = document.querySelector('#temp').value;
            let celsiusToFahrenheit = (celsius * 1.8) + 32;
            let celsiusToKelvin  = celsius*1  + 273.15
            document.getElementById('get').textContent = 'Your temperature from C to F is ' + celsiusToFahrenheit.toFixed(2) + ' Degrees and from C to K is ' + celsiusToKelvin.toFixed(2)  + ' Degrees' ;
    }
        //checks if value of that tag is K, if it is then that means User wants kelvin conversion
        //sets kelvin value with the value of the text from the input tag   
        //there is a p element that gets textContent added to it with the values of the conversions
        else if(top.value === 'K'){
            let kelvin = document.querySelector('#temp').value;
            let kelvinToFahrenheit = ((kelvin *1 ) * 1.8 )- 459.67
            let kelvinToCelsius  = (kelvin * 1) - 273.15
            document.getElementById('get').textContent = 'Your temperature from C to F is ' + kelvinToFahrenheit.toFixed(2) + ' Degrees and from C to K is ' + kelvinToCelsius.toFixed(2)  + ' Degrees' ;
    }

}





