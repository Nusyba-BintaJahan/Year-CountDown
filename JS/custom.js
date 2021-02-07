// get element from html;

var year = document.getElementById('year');
var day = document.getElementById('day');
var hour = document.getElementById('hour');
var min = document.getElementById('min');
var sec = document.getElementById('sec');


//get current and next year;

var current_year = new Date().getFullYear();
var next_year = new Date(`January 01 ${current_year + 1} 00:00:00`);

//create a function to manupulate date;

function Timer ()
{
    var current_time = new Date();
    var diff = next_year - current_time;
    var d = Math.floor(diff / 1000 / 60 /60/24);
    var h = Math.floor(diff / 1000 / 60 /60) % 24 ;
    var m = Math.floor(diff / 1000 / 60 ) % 60 ;
    var s = Math.floor(diff / 1000 ) % 60 ;
    
    
    // Print in HTML;
    sec.innerHTML = s < 10 ? '0' + s : s;
    min.innerHTML = m < 10 ? '0' + m : m;
    hour.innerHTML = h < 10 ? '0' + h : h;
    day.innerHTML = d < 10 ? '0' + d : d;
}

// JS Timing \ BOM ;
setInterval(Timer,1000);




//print next year;

year.innerHTML = next_year.getFullYear();
