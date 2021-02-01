// "resethandler()" "okhandler()" "deletehandler()"
function resethandler(e){
    // console.log(e.target.parentElement)
    
    let grabtext = e.target.parentElement.querySelector("#fortextfeild");
    // console.log(grabtext)
    grabtext.value = "";
    let grabhr = e.target.parentElement.querySelector("#pophr");
    grabhr.value = 1;

    let grabmin = e.target.parentElement.querySelector("#popmin");
    grabmin.value = 0;

    let grabap = e.target.parentElement.querySelector("#popap");
    grabap.value = "am";
}

function replacewithnewtag(e,idvalue, newnode){
    let oldnode = e.querySelector(idvalue);
    let evalue = oldnode.value;
    let newtag = document.createElement(newnode);
    // console.log(e, e.querySelector(idvalue), evalue);
    newtag.textContent = evalue;
    if(idvalue ==="#pophr"){
        newtag.id = "pophr"
    }
    else if (idvalue ==="#popmin"){
        newtag.id ="popmin"
    }
    else{
        newtag.id = "popap"
        evalue = evalue === "am"?1:2
    }
    
    oldnode.parentElement.replaceChild(newtag, oldnode);
    return evalue;
}

function okhandler(e){
    let grabparent = e.target.parentElement;
    // console.log(opthr)
    // replacewithnewtag(grabparent,"#popmin","div")
    let textele = grabparent.querySelector("#fortextfeild");
    let textvalue = textele.value;
    if (textvalue===""){
        createerrormessage("add the \'remainder for value\' ");
    }
    else{
    textele.parentElement.textContent = textvalue;

    let hrcode = replacewithnewtag(grabparent, "#pophr", "span");
    let mincode = replacewithnewtag(grabparent,"#popmin","span");
    let apcode = replacewithnewtag(grabparent,"#popap","span");
    let removenode = grabparent.querySelector("#resetb")
    removenode.parentElement.removeChild(removenode);
    removenode = grabparent.querySelector("#okb");
    removenode.parentElement.removeChild(removenode);
    let sethash = hrcode*1000 + mincode*10 + apcode
    // console.log(grabparent)
    grabparent.classList.replace("tasklist", "newtask")
    grabparent.setAttribute("data-timehash", sethash)
    createaddtaskbutton();
    orderthelist(grabparent)
    }
}

function deletehandler(e){
    let messageele =  document.querySelector("#message")
    messageele.textContent = ""
    let alarmpoint = e.target.parentElement;
    alarmpoint.parentElement.removeChild(alarmpoint);
    if (!document.querySelector("#addbutton")){
        createaddtaskbutton();
    }
   
}

function createaddtaskbutton(){
    let bodyele = document.querySelector("body");
    let createaddbut = document.createElement("button");
    createaddbut.id = "addbutton";
    createaddbut.setAttribute("onclick","newelement()");
    createaddbut.textContent = "add task";
    bodyele.appendChild(createaddbut);
}

function createerrormessage(msg){
    let messageele =  document.querySelector("#message")
    messageele.textContent = msg
    setTimeout(() => {document.querySelector("#message").textContent = ""}, 3000)
}

function orderthelist(currentitem){
    let alltask = document.querySelectorAll(".tasklist");

    let flag = 0
    if(alltask.length == 0 ){
        currentitem.classList.replace("newtask","tasklist")
        return;
    }
    else{
        // console.log(currentitem.dataset.timehash)
        for(let i=0 ; i< alltask.length;i++){
        console.log(
            parseInt(currentitem.dataset.timehash) < parseInt(alltask[i].dataset.timehash))
            if(parseInt(currentitem.dataset.timehash) < parseInt(alltask[i].dataset.timehash)){
                currentitem.classList.replace("newtask","tasklist");
                alltask[i].insertAdjacentElement("beforebegin", currentitem);
                flag = 1
                break;
            }
        }
        if(flag == 1){
            return;
        }else{
            currentitem.classList.replace("newtask","tasklist");
            let maindiv = document.querySelector("#main-div")
            maindiv.insertAdjacentElement("beforeend", currentitem)
        }
        
    }
}