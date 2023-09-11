/*
Write a recursive function, `sum(arr, n)`,
that returns the sum of the first `n` elements of an array `arr`.
*/

/*
sum(arr, n) === sum(arr, n-1) + arr[n-1]
example: sum([1], 1) == sum([1], 0) + 1 
which is sum of first 1 number is 1 == sum of first 0 number plus 1 is 1
n = 0 return 0, so 0 + 1 = 1
*/

function sum(arr, n) {
    if(n <= 0){
        return 0; // because first 0 number means nothing
    } else {
        return sum(arr, n-1) + arr[n-1];
    }
}

console.log(sum([1], 0));
console.log(sum([2, 3, 4], 1));
console.log(sum([2, 3, 4, 5], 3));

/*
sum([1], 0) should equal 0.
sum([2, 3, 4], 1) should equal 2.
sum([2, 3, 4, 5], 3) should equal 9.
*/
