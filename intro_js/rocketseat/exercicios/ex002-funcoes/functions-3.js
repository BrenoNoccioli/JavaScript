//function scope
let subject = 'create video'

function cretaeThink(subject){
    subject = 'study';
    return subject;
}

console.log(cretaeThink(subject));
console.log(subject);