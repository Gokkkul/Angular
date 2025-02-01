const arr = [0,1,0,3,12]

function sortArr(){
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i === 0) {
                temp = arr[i];
                arr[i] = arr[i+1]
                arr[i+1] = temp
            }
            else{
                
            }
            
        }
            
            
        
        
    }
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        console.log(element)
    }
}

sortArr();