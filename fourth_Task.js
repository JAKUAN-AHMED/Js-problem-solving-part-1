/* Write a function to find the longest word in a given string.
sample-input: I am learning Programming to become a programmer
sample-output: Programming
 */
function FindLongestWord(GivenString)
{
    let Solved=GivenString.split(" ");
    let NewString="";
    let mx=Solved[0].length;
    for(let i=0;i<Solved.length;i++)
    {
        
        if(Solved[i].length>mx)
        {
            mx=Solved[i].length;
            NewString=Solved[i];
        }
    }
    return NewString;
    
}

console.log(FindLongestWord("I am learning Programming to become a programmer"));
