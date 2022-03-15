/*function testes (){
    return new Promise((resolve, reject)=>{

        const erro = true;

       
        if (erro){
            reject('Erro...');
        } else{
            resolve('A promise foi resolvida com sucesso!');
        }
    })
}

testes().then(function(res){
    alert(res); //tudo dando certo, o "then" irá retornar o resolve.
}).catch(function(err){ //dando errado, catch retorna o reject.
alert(err);
})                  */
//------------------------------------------------------------

/*FUNÇÃO ASSÍNCRONA: É UMA FORMA MAIS ELEGANTE DE EXECUTAR UMA PROMISE. */ 

function testes (){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){

            const erro = false;
            if (erro){
            reject('Erro...');
            } else{
            resolve('A promise foi resolvida com sucesso!');
            }
        },2000)

    
    })
}

async function testes2(){
    await testes().then(function(res){
        alert(res);
    });
    alert('olá');
}
testes2()

//await: só vai executar o restante do código da função depois que o "testes" for executado.
