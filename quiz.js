let array=[1,500,230,40,4,65,28,32,45,1002]
function valor ( a, b ){ return a - b }
let orden1 = array
console.log(orden1.sort( valor ))
let orden2 = array
console.log(orden2.reverse( valor ))

function eliminar(){

    console.log(orden1.shift())
    console.log(orden1)
}

function unir(){
    let orden3 =orden1.concat(orden2)
    console.log(orden3)
}

function ingreso_datos(){

     orden1.push(85)
     orden1.unshift(65)
     orden1.splice(3,0, 103)
     orden1.push(25)
     console.log(orden1)
}
