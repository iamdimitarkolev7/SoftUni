function solve(arr) {
   let result = [];
   let max = arr[0];
   result.push(max);

   for (let i = 1; i < arr.length; i++) {
       if (max <= arr[i]) {
           max = arr[i];
           result.push(max);
       }
   }

   console.log(result.join('\n'));
}

solve([ 1, 3, 8, 4, 10, 12, 20, 22, 21, 24]);