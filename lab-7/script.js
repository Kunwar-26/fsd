function numMax(arr){
    if(Array.isArray() == false){
        console.log("Not an array")
        return
    }

    if(arr.length == 0){
        console.log("Empty an array")
        return
    }
    let i = 0
    let max = arr[0]
    while (i<arr.length){
        if (arr[i]>max){
            arr[i] = max
        }

        i ++

    }

    return max
}

console.log(numMax([12,3,4]))