let tick = Date.now();
function resetTick() {tick = Date.now()};
const time = (v) => console.log(`${v}\n Elapsed: ${Date.now() - tick} ms`);

const codeBlocker = async() => {
    let i = 0;
    while(i < 1000000000) {i++};
    return;
};

const getFruit = async(name) => {
    const fruits = {
        pineapple: '🍍',
        peach: '🍑',
        apple: '🍏'
    };

    await codeBlocker().then(); 

    //async return values as a resolve
    //thereby making them a microtask to run at the
    //end of the eventloop
    //without async: return Promise.resolve(fruits[name]);
    return fruits[name];
};

getFruit("peach").then(time);


const makeSmoothie = async() => {
    //pauses until it receives a value
    //then continues to next line
    const a = await getFruit('pineapple');
    const b = await getFruit('apple');

    return [a, b];
};

resetTick();
makeSmoothie().then(time);
//the double await means it cannot get both
//fruits at the same time, this can be solved with:

const betterSmoothie = async() => {
    const a = getFruit('apple');
    const b = getFruit('peach');
    const smoothie = Promise.all([a, b]);

    return smoothie;
}
// resetTick();
// betterSmoothie().then(time);