function newelement(){
   let mainelement = document.querySelector("#main-div");
   let addbut = document.querySelector("#addbutton");
   addbut.parentElement.removeChild(addbut);
//     let innerelement = document.createElement("div")
//     innerelement.innerHTML = "hi new"
//     mainelement.appendChild(innerelement)

    let innerdiv = document.createElement("div");
    innerdiv.classList.add("tasklist");

    let innertitletag = document.createElement("span");
    innertitletag.textContent = "reminder for";

    
    let innertext = document.createElement("input");//txet field
    innertext.setAttribute("type", "text");
    innertext.setAttribute("id", "fortextfeild");
    // console.log(innertext)

    let textdiv = document.createElement("div");
    textdiv.id = "textid";
    textdiv.appendChild(innertext);

    let forhr = document.createElement("span");
    forhr.textContent = "hrs";
    let innertimehr = document.createElement("select");//hr feild
    innertimehr.name = "pophr";
    innertimehr.id = "pophr";
    innertimehr = timeele(innertimehr,"hr");

    let formin = document.createElement("span");
    formin.textContent = "mins";
    let innertimemin = document.createElement("select");
    innertimemin.name = "popmin";
    innertimemin.id = "popmin";
    innertimemin = timeele(innertimemin, "min");

    let forap = document.createElement("span");
    forap.textContent = "am/pm";
    let innertimeap = document.createElement("select");
    innertimeap.name = "popap";
    innertimeap.id  = "popap";
    innertimeap = timeele(innertimeap, "ampm");

    innerdiv.appendChild(innertitletag)
    innerdiv.appendChild(textdiv);//appned text field
    innerdiv.appendChild(innertimehr);//append hr
    innerdiv.appendChild(forhr);
    innerdiv.appendChild(innertimemin);//append min
    innerdiv.appendChild(formin);
    innerdiv.appendChild(innertimeap);//append am pm
    innerdiv.appendChild(forap);
    // for reset and ok and delete button
    // for reset
    let resetb = document.createElement("button");
    resetb.setAttribute('onclick', "resethandler(event)");
    resetb.id = "resetb"
    resetb.textContent = "reset";

    // for ok
    let okb = document.createElement("button");
    okb.setAttribute('onclick', "okhandler(event)");
    okb.id  = "okb"
    okb.textContent = "ok";

    // for delete
    let deleteb = document.createElement("button");
    deleteb.setAttribute('onclick', "deletehandler(event)");
    deleteb.id = "deleteb"
    deleteb.textContent = "delete";

    innerdiv.appendChild(resetb);
    innerdiv.appendChild(okb);
    innerdiv.appendChild(deleteb);

    mainelement.appendChild(innerdiv);// append innerdiv to main-div
}

// to create hr optio and to append in the param ele
function timeele(innerel, timefor){
    if(timefor === "hr"){
        for(let i=1 ; i<13; i++){
            let opt = document.createElement("option");
            opt.value = i;
            opt.text = i;
            // console.log(opt);
            innerel.appendChild(opt);
        }
        // console.log(innerel);
        return innerel;
    }
    else if(timefor ==="min"){
        for(let i=0 ; i<61; i++){
            let opt = document.createElement("option");
            opt.value = i;
            opt.text = i;
            // console.log(opt);
            innerel.appendChild(opt);
        }
        // console.log(innerhr);
        return innerel;
    }
    else{
        let am = document.createElement("option");
        am.value = "am";
        am.text = "am";

        let pm = document.createElement("option");
        pm.value = "pm";
        pm.text = "pm";

        innerel.appendChild(am);
        innerel.appendChild(pm);
        return innerel;
    }
    
}