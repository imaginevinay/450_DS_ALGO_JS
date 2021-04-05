// WAP to return minimum and maximum in an array. Your program should make the minimum number of comparisons.


function minMaxV1(arr) {
    // using linear search 
    let minMax = {};
    let length = arr.length;
    if(length === 0) return null;
    if(length === 1) {
        minMax.max = arr[0];
        minMax.min = arr[0];
        return minMax;
    }
    // if more than 1 elem then initialize min max;
    minMax.min = Math.min(arr[0], arr[1]);
    minMax.max = Math.max(arr[0], arr[1]);
    for(let i=2; i< length; i++) {
        if(arr[i] > minMax.max) minMax.max = arr[i];
        else if(arr[i] < minMax.min) minMax.min = arr[i]
    }

    return minMax
}



function minMaxV2(arr, start, end) {
    // using tournament method : split in 2 parts, find min max of each part later on find min max using those 2 parts
    // used recursion;
    let minMax = {};
    let mml = {}, mmr = {}, mid;
    if(start === end) {
        // only 1 elem;
        minMax.min = arr[start];
        minMax.max = arr[end];
        return minMax;
    }
    if(end === start + 1) {
        minMax.min = Math.min(arr[start], arr[end]);
        minMax.max = Math.max(arr[start], arr[end]);
        return minMax;
    }

    mid = Math.floor((start+end)/2);
    mml = minMaxV2(arr,start, mid);
    mmr = minMaxV2(arr, mid+1, end);

    minMax.min = Math.min(mml.min, mmr.min);
    minMax.max = Math.max(mml.max, mmr.max);
    return minMax;
}

const arr = [1,23,32,45,67,3,90];
const start = 0;
const end = arr.length - 1;
minMaxV2(arr, start, end)