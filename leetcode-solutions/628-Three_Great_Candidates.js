/*The hiring team aims to find 3 candidates who are great collectively. Each candidate has his or her ability expressed as an integer. 3 candidates are great collectively if the product of their abilities is maximum. Given the abilities of some candidates in an numsay, nums[], return the maximum collective ability from the pool of candidates. */

let numsList= [10, 3, 5, 6, 20]
let numsList2= [852, -566, 182 ,-638 ,-693, -323]

 function maxProduct(nums) {
        let n = nums.length;
        // code here
        let sortedArray = nums.sort((a, b) => a - b);
        console.log(sortedArray);
        
        let ans1 = (sortedArray[0]) * (sortedArray[1]) * (sortedArray[n - 1]);
        let ans2 = (sortedArray[n - 1]) * (sortedArray[n - 2]) * (sortedArray[n - 3]);
            console.log(ans1);
            console.log(ans2);
            
        let max = Math.max(ans1, ans2);
        return max;
    }

    

   console.log(maxProduct(numsList2));
    


//? 💡Intution   
/*   Dry run krne pr So as you can see our answer is either nums[0] * nums[1] * nums[last index] 
OR
nums[last index] * nums[last 2nd index] * nums[last 3rd index] 
means the maximum of these 2 products.  */