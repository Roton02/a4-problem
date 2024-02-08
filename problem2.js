function checkName(name) {
    if(typeof name !== "string"){
        return "invalid";
    }
    name = name.toLowerCase();
    const len = name.length - 1;
    const lastWord = name[len];
    // A, y, i , e , o , u, w
    if(lastWord==="a" || lastWord==="y" || lastWord==="i" || lastWord==="e" || lastWord==="o" || lastWord==="u" || lastWord==="w"){
        return "good Name";
    }
    return "Bad Name";
}
console.log(checkName(true));