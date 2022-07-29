const arrived = true;

const ride = new Promise((resolve, reject) => {
    
    if(arrived){

        resolve("A cab has arrived");

    } else {

        reject("No one showed up :(");

    }

});

//.then: if resolved
//.catch: if rejected
ride
    .then(value => console.log(value))
    .catch(error => console.log(error));
