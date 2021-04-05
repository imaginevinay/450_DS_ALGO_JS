/**
 * Given an array (or string), the task is to reverse the array/string.
Examples :
Input  : arr[] = {1, 2, 3}
Output : arr[] = {3, 2, 1}

Input :  arr[] = {4, 5, 1, 2}
Output : arr[] = {2, 1, 5, 4}
 */

function reverseV1(arr) {
    return arr.reverse();
}

function reverseV2(arr) {
    let final = [];
    for(let i = arr.length-1; i>= 0; i--) {
        final[arr.length-1-i] = arr[i]
    }
    return final;
}

function reverseV3(arr) {
    let temp;
    let start = 0, end = arr.length-1;
    while(start < end) {
        temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}


console.log(reverseV3([1,2,3,4,5]))