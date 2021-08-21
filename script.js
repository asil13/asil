let count = +prompt('Введите количество ступенек'),
    symb = prompt('Введите символы'),
    finalSymb = prompt('Введите конечный символ');
for(let i = 0; i < count; i++){
    if(i == 0) console.log(finalSymb);
    else{
        finalSymb = symb + finalSymb;
        console.log(finalSymb);
    }
}
var a = prompt('Зайдите в консоль');