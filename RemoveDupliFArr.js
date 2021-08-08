let array = ['Tania','Khadiza', 'Suma',  'Tania', 'Suma','Abdullah ','Babul'];
function removeDuplicate(array){
    const name = [];
    for(const elements of array){
        if(name.indexOf(elements) == -1)
        {
            name.push(elements);
        }
    }
    return name;
}
console.log(removeDuplicate(array));
let array1 = [2,4,5,7,2,4,1,5,3,0,4];
function removeDuplicate1(array){
    const name = [];
    for(const elements of array){
        if(name.indexOf(elements) == -1)
        {
            name.push(elements);
        }
    }
    return name;
}
console.log(removeDuplicate1(array1));