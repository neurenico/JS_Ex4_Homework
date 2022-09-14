let counterOfMovies = 0;
function hanoiTowers(height, from, to, buf) {

    if (height > 0) {

    hanoiTowers(height - 1, from, buf, to);
    console.log('Move disk ' + height + ' from Tower ' + from + ' to Tower ' + to);
    counterOfMovies++;
    hanoiTowers(height - 1, buf, to, from);
    }
    
    return counterOfMovies;
}

console.log('Hanoi towers');
console.log('--------------------------');
hanoiTowers(4, "1", "2", "3");
console.log('--------------------------');
console.log('Count of movies ' + counterOfMovies);

