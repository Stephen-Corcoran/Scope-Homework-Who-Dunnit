// var sports = ['football', 'tennis', 'ruby'];

// var numberOfElements = sports.length;
// console.log('number of elements:', numberOfElements);

// var firstSport = sports[0];
// console.log('first sport:', firstSport);

// var secondSport = sports[1];
// console.log('first sport:', secondSport);

// var lastSport = sports[sports.length-1];
// console.log('last sport:', lastSport);

// sports.push('curling');
// sports.push('snooker');
// sports.push('darts', 'hurling');

// var removedSport = sports.pop();
// console.log('removed sport:', removedSport);

// sports.unshift('basketball');
// var shiftedSport = sports.shift();
// console.log('shifted sport:', shiftedSport);

// var splicedSports = sports.splice(3, 2)
// console.log('splice sports:', splicedSports);

// console.log('sports:', sports);

// // for (var currentSport of sports) {
// //     var upercasdedSport = currentSport.toUpperCase ();
// //     console.log(upercasdedSport);
// // }

// for (var i = sports.length - 1; i >= 0; i--) {
//     var currentSport = sports[i];
//     var upercasdedSport = currentSport.toUpperCase ();
//     console.log(upercasdedSport);
// }



var movie = {
    title: "It's a Wonderful Life",
    year: 1946,
    language: "Spanish",
    "subtile-language": "German"
};

movie.cast = ["James Stewart", "Donna Reed"];
movie.language = "English"
movie["subtile-language"] = "French"

delete movie.year;

movie.ratings = {
    critic: 94,
    audience: 95
};

console.log("movie:", movie);

var audienceRating = movie.ratings.audience;
console.log("adience rating:", audienceRating);

for (var key in movie) {
    var value = movie[key];
    console.log(`The ${key} is ${value}`);
}

var keys = Object.keys(movie);