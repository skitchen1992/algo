"use strict";
// Функция принимает строку чисел и выводит индекс элемента, который не попадает под зависимость. Например "2 4 7 8 10" выводит третий элемент 7. 
function iqTest(numbers){   
    let sum = numbers.split(' ');//Преобразуем строку в массив
    let even = 0; //Четные
    let notEven = 0;//Не Четные
    let point = 0;//Индекc

    for (let i=0; i<sum.length; i++){//Перебираем массив
        if(sum[i]%2== 0){
            even  += 1; //Считаем кол-во четных цифр
        }else{
            notEven += 1; //Считаем кол-во нечетных цифр
        }
    }
    if(notEven > even){//Если не четных больше, то нам необходимо найти индекс четного и наоборот
        for (let i=0; i<sum.length; i++){
            if(sum[i]%2== 0){
                point = i+1; 
            }
        }    
    }else{
        for (let i=0; i<sum.length; i++){
            if(sum[i]%2!== 0){
                point = i+1; 
            }
        } 
    }    
    return point;
    
}
console.log(iqTest("2 4 7 8 10"));
