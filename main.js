
var button = document.getElementById("btn-tree-grow");
var treeHeight = document.getElementById("tree-hgt");
var treeChar = document.getElementById("tree-char");
var treeSpecs = {
    height: 0,
    character: "",
    space: " ",
    Counter: 1,
};

function tree(treeObj){
    if(treeObj.height > 0){
        console.log( treeObj.space.repeat(treeObj.height) + treeObj.character.repeat(treeObj.Counter) + treeObj.space.repeat(treeObj.height))
        treeObj.height--
        treeObj.Counter += 2;
        tree(treeObj);

    }else {
        console.log("Here is your tree")
        treeObj.Counter = 1;
        return treeObj;

    }

    // for (var i = treeHeight.value, j = 1; i > 0 ; i--, j+= 2) {
    //     console.log( treeObj.space.repeat(i) + treeObj.character.repeat(j) + treeObj.space.repeat(i))
    // }

}
// function for enter key-press
function submitting(e){
    if((e.key === "Enter" || e.type === "click") && (treeHeight.value != "" || treeChar.value != "")){
        if(treeHeight.value != "" && treeChar.value != ""){
            treeSpecs.height = treeHeight.value
            treeSpecs.character = treeChar.value
            tree(treeSpecs)
        }else {
            alert("Please fill out both input fields");
        }
    }
}

button.addEventListener("click", submitting);
treeHeight.addEventListener("keypress", submitting);
treeChar.addEventListener("keypress", submitting);
