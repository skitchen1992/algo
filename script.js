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

//Функция определяет колл-во гласных букв в слове

function getCount(str) {
    let vowelsCount = 0,
        vowels = ['a', 'e', 'i', 'o', 'u'];
    for(let i=0; i<str.length; i++){
      for(let j=0; j<vowels.length; j++){
        if(str[i]===vowels[j]){
          vowelsCount++;
        }
      }
    }
    return vowelsCount;
  }
  console.log(getCount("Nikita"));

  // Бинарный поиск. В функцию передается список чисел и загаданное число.
function binarySearch(list,item){
    let low = 0,                //В переменных low и high хранятся границы той части списка,в которой выполняется поиск
        high = list.length - 1;
    while(low <= high) {        //Пока эта часть не сократится до одного элемента
        let mid = Math.floor((low + high) / 2),//...проверяем средний элемент
            guess = list[mid];
        if(guess == item){      //Значение найдено
            return mid;
        }else if(guess > item){ //Много
            high = mid - 1;
        }else{                  //Мало
            low = mid + 1;
        }   
        
    }   
}
let myList = [1,3,5,7,9];
console.log(binarySearch(myList,3));