const idade_A = document.getElementsByClassName("idade_A").value;
const idade_B = document.getElementsByClassName("idade_B").value;
const msg = `a idade ${idade_A} e maio que a ${idade_B}`;
const msg2 = `não o valor ${idade_A} nao e maior que valor ${idade_B}`;

function comfirm(required) {
    const nameArray = required.split(" ");
    return nameArray

}


function igual(){
    
    if (idade_A >= idade_B){
        alert(msg);
    }else{
        alert(msg2);
    }

    
}igual();

