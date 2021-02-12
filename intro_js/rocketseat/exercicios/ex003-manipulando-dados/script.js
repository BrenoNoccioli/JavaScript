/*Throw e Try/Catch */
//throw
function sayMyName(name = ''){
    if(name == ''){
        throw new Error('Nome é obrigatório');
    }
    console.log('depois do erro');
}

//try... catch
try{
    sayMyName()
} catch(e){
    console.log(e);
}

console.log('após o try/catch');