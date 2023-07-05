var age = +prompt("Yoshingizni kiriting")
if(age>0 && age<=18){
    alert("Siz hali yoshsiz. O'qishingiz kerak")
} else if(age>18 && age<=50){
    alert("Siz ishlashingiz kerak")
} else if(age>50 && age<=59){
    alert("Yaqinda pensiyaga chiqasiz")
} else if(age>59 && age<=150){
    alert("Siz pensionerga o'xshaysiz, hali tirik bo'lsangiz, albatta :)")
} else{
    alert("Nimadir xato ketib qoldi :(")
}