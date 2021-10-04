// 1. Longest Substring Without Repeating Characters
/**
 * Date: 04/Oct/2021
 * Example 1
 * Input: s = "abcabcbb"
    Output: 3
    Explanation: The answer is "abc", with the length of 3.
    -------------------------------------------------------
 * Example 2
    Input: s = "bbbbb"
    Output: 1
    Explanation: The answer is "b", with the length of 1.
    -------------------------------------------------------
 * Example 3
    Input: s = "pwwkew"
    Output: 3
    Explanation: The answer is "wke", with the length of 3.
    Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

const quesOne = (str) => {
    let result = 0;
    let initialUniWord = '';
    let strLength = str.length;
    if(strLength < 1){
        return 0;
    }
    if(strLength === 1){
        return 1;
    }
    str.split('').map((list, index)=>{
		if(initialUniWord.includes(list)){
			if((index !== strLength-1)){
				result = result > initialUniWord.length ? 
	                result : initialUniWord.length;
				const subString = initialUniWord.substring(0, initialUniWord.indexOf(list)+1);
				initialUniWord = initialUniWord.replace(subString,'');
				initialUniWord = initialUniWord.concat(list);
			}
        } else {
            initialUniWord = initialUniWord.concat(list);
        }
        if((index === strLength-1)){
           result = result > initialUniWord.length ? 
                result : initialUniWord.length;
        }
    });
    
    return result;


    
}
// 2. Longest Palindromic Substring
/* 
```
Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.
```

```
Input: s = "cbbd"
Output: "bb"

```

```
Input: s = "a"
Output: "a"
```
*/

const quesTwo = () =>{
    
}