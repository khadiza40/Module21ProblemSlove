function reverseString(text){
let revese = '';
for(const letter of text){
    //console.log(letter);
    revese = letter+revese;
}
return revese;
}
let text = "Hello, How are you? "
console.log(reverseString(text));
