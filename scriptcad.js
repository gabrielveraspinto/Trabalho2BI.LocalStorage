const sen = document.getElementById("exampleInputPassword1")
const confsen = document.getElementById("exampleInputPassword2")
const salvar = document.getElementById("btn-primary")
const email = document.getElementById("key")
const limpar = document.getElementById("limpar")

window.addEventListener("load", function(){
    let chave = document.getElementById("key")
    let valor = document.getElementById("exampleInputPassword1")
    const salvar = document.getElementById("btn-primary")


    salvar.addEventListener("click", function(){
        let input1=chave.value
        let input2=valor.value
        if (sen.value == confsen.value && sen.value != ""){
            localStorage.setItem(input1, input2)
            alert("Dados salvos com sucesso!✔")
       }else if (sen.value != confsen.value){
        alert("As senhas estão diferentes!❌")
       }else{
        alert("Os campos estão vazios")
       }
        
    })

    limpar.addEventListener("click", function(){
            localStorage.clear()
        })
    })
