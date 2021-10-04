/* 
Date: 04/Oct/2021
Question 1. 
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

```
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
```

```
Input: nums1 = [1,2,3], nums2 = [4,5,6]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
```

```

Input: nums1 = [0,0], nums2 = [0,0]
Output: 0.00000

```

```
Input: nums1 = [], nums2 = [1]
Output: 1.00000
```
*/

const quesOne =(nums1, nums2)=>{
    const mergedArray = nums1.concat(nums2);
    const sumLength = mergedArray.length
    const lengthArray = sumLength/2;
    //need to sort if there are negetive values inside the array
	mergedArray.sort((a,b)=>{
		return a-b
	}); 
    if(sumLength === 1 ){
        return mergedArray[0];
    }
	if(sumLength === 2){
        return (mergedArray[0] +  mergedArray[1])/2;
    }

    if(sumLength%2 === 0){
        return (mergedArray[lengthArray -1]
				+mergedArray[lengthArray])/2
    }
    if(sumLength%2!==0){
        return mergedArray[Math.round(sumLength/2) -1];
    }
}