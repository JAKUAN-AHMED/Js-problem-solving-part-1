/* Write a function to count the number of vowels in a string. */
function vowelCount(SpecialString)
{
    let NewStr=SpecialString.split('');
    let count=0;
    for(let num of NewStr)
    {
        if(num==='A' || num==='E' || num==='I' || num==='O' || num==='U'||num==='a' || num==='e' || num==='i' || num==='o' || num==='u')
        {
            count++;
        }
    }
    return count;
} 
console.log(vowelCount('Another Level'));