const promiseOne = new Promise((res, rej) => {
    let error = false;
    if(!error){
        resolve({username:'abc', pass:123});
    }
    else{
        reject("Error");
    }
});

