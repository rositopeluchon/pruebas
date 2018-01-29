
var promise= new Promise (function (resolve, reject){

    if(resole)
    {
        resolve("This stuff is happennig");


    }else{


        reject(Error("it broke"));

    }
})

promise.then(function(result){
    console.log("This worked");

}, function(err){
    console.log("Error")
}
)

//encadenando valores

var nuevap= Promise(function(aceptatada, reject){
    if(aceptatada){
        console.log("la promesa fue aceptada");
        resolve(aceptatada);

    }else{
        Reject(Error("Esto ya valio"));
    }
})

nuevap.then(function(res){
    console.log("podemos imprimir el resultado");

}, function(err){
    console.log("hubo error");

}).then(function(res2){
    console.log("Se puede seguir haciendo más cosas con el resultado");
})

