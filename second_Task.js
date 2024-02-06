/* You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]
find: 5
output: 2
sample-input:
numbers = [5,6,11,12,98, 5]
find: 25
output: 0 */
function isNumberRepeatedOrNot(numbers,item)
{
    let freq=Array(100).fill(0);
    for(let num of numbers)
    {
        freq[num]++;
    }
    let ok=false;
    for(let i=0;i<numbers.length;i++)
    {
        if(numbers.includes(item) && freq[item]>1)
        {

            ok=true;
            break;
        }
    }
    return ok;

}
let number_Array=[1,2,3,3,4,4,5,5,6];
const prompt=require("prompt-sync")();
let item=parseInt(prompt("Enter a Number here:"));
if(isNumberRepeatedOrNot(number_Array,item) && number_Array.includes(item))
{
    console.log("found and repeated");
}
else{
    if(number_Array.includes(item))
    {
        console.log("not repeated but found");
    }
    else
    {
        console.log("not found");
    }
    
}