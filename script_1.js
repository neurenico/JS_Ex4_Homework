function counter(lengthOfarray, min, max) {
    const obj = {};

    for (let i = 0; i < lengthOfarray; i++) {
        value = Math.floor(Math.random() * (max - min + 1) + min);
        
        if (obj[value] >= 1) {
            obj[value] += 1;
        } else {
            obj[value] = 1;
        }
    }
    return obj;
}

console.log(counter(10000000, 3, 7));
