"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {
    
    $.get('/fortune', function(result) {
    	$("#fortune-text").html(result);
    });
}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    $.get("/weather.json?zipcode=" + $("#zipcode-field").val(), 
    	function(result) {
    	$("#weather-info").html(result.forecast);
    });
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


