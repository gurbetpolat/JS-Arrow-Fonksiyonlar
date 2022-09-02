/**********Arrow Fonksiyonlar********/

function sayHello() {
    return "hello1"
}

const sayHello2 = () => "hello2"



/*----------------------*/
const sayHello3 = (name, surName) => {
    return `Merhaba ${name} ${surName}`
}
console.log(sayHello3("Emre", "Demir"))

/*--------------------------------*/
//NEW TARGET DA VE THİS DE ARROW FUNCTİON KULLANILMAZ


const materials = [
    "Hidrojen",
    "Helyum",
    "Lityum",
    "Berilyum"
]
//arrow
const uzunluk = materials.map((met) => met.length)
console.log(uzunluk)


const uzunluk2 = materials.map(function (mat) {
    return mat.length
})

console.log(uzunluk2)

/*----------------------------------*/

function topla(a, b) {
    return a + b;
}

console.log(topla(5, 6))

//arrow
const topla1 = (a, b) => { return a + b }
console.log(topla1(10, 25))

/*---------------------*/

const toplam3 = (a, b) => ({

  
        ilksayi: a,
        ikincisayi: b,
        toplam: a + b
   

})

console.log(toplam3(5,7))
/*-------------------------*/
var obj={
    i:10,

    b:()=>console.log(this.i,this),//burda consol da boş değer olur
    
    c:function name(params) {
        console.log(this.i,this)//burda console istediklerimizi yazar
    }
}

console.log(obj.b())
console.log(obj.c())

/*-------------------------------*/
const names=["Emre","Buse","Gurbet"]

const names_=names.map((name)=>{

    return name+`-Öğrenci`

})

console.log(names_)

/*------------------------*/

const users=[
    {
        name:"Emre Demir",
        age:23,
        skilss:["js","react","css"]
    },
    {
        name:"Gurbet Polat",
        age:23,
        skilss:["html","css","js"]
    }
]


const seç=users.filter((user)=>{

    if(user.skilss.includes("react")){
        return user
    }

})

console.log(seç)