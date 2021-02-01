function chnagetitle(){
    const mtitle = document.querySelector("#editname #chtitle");
    const changetitlebutton = document.querySelector("#editname #changebutton");
    // console.log(changetitlebutton.textContent === "change the title");
    if (changetitlebutton.textContent === "change the title"){
        changetitlebutton.textContent = "ok";
        let titletext = mtitle.textContent;
        let newtitletext = document.createElement("input");
        newtitletext.type = "text";
        newtitletext.value = titletext;
        // console.log(titletext)
        mtitle.textContent = "";
        mtitle.insertAdjacentElement("afterbegin", newtitletext);
    }
    else{
        changetitlebutton.textContent = "change the title";
        let newmtitle = document.querySelector("#editname #chtitle input");
        let titletext = newmtitle.value;
        // console.log(newmtitle)
        mtitle.textContent = titletext;
    }
    // console.log(changetitlebutton)
}