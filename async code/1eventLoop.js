//synchronus code is run during callback loop
//promises are microtasks, run at end of loop
//callback run at start of next loop

console.log("🍔 Synchronus 1");

setTimeout(() => console.log("🍅 Timeout 2"), 0);

Promise.resolve().then(() => console.log("🍍 Promise 3"));

console.log("🍔 Synchronus 4")