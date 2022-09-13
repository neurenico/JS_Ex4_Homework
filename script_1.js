function counter(lengthOfarray, min, max) {
    const arr = [];
    const obj = {};

    for (let i = 0; i < lengthOfarray; i++) {
        value = Math.floor(Math.random() * (max - min + 1) + min);

        if (arr.includes(value) == true) {
            let j = value;
            obj[j] += 1;
        } else {
            let j = value;
            obj[j] = 1;
            arr.push(value);
        }
    }
    return obj;
}

console.log(counter(10000000, 3, 7));
