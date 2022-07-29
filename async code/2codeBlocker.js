let tick = Date.now();
const time = v => console.log(`${v} \n  Elapsed: ${Date.now() - tick} ms`);

function codeBlocker(){
   let i = 0;
   while (i < 1000000000){i++};
   return '🐷 1 Billion loops done'; 
}

time("🍔 Synchronus 1");
time(codeBlocker());
time("🍔 Synchronus 2");

console.log("#####################");

tick = Date.now();

function maybeBetterBlocker(){
    //creating the promise is still a macrotask
    //only resolving it is micro
    return new Promise((resolve, reject) => {
        let i = 0;
        while(i < 1000000000) {i++};
        resolve('🐷 1 Billion loops done');
    });
}

time("🍔 Synchronus 1");
maybeBetterBlocker().then(time);
time("🍔 Synchronus 2");

console.log("#####################");

tick = Date.now();

function bestBlocker(){
    
    //by running the code in a resolve.then
    //it is ensured that this is run after the synchronus code
    return Promise.resolve().then(val => {

        let i = 0;
        while (i < 1000000000) {i++};
        return '🐷 1 Billion loops done';

    });

}