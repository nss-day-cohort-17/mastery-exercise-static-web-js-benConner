
var button = document.getElementById("btn-tree-grow");
var treeHeight = document.getElementById("tree-hgt");
var treeChar = document.getElementById("tree-char");
var space = " "
var treeObj = {
    height: "",
    character: "",
};

function tree(){
    treeObj.height = treeHeight.value
    treeObj.character+= treeChar.value

    if(treeObj.height > 0){

        console.log( space.repeat(treeHeight.value) + treeObj.character + space.repeat(treeHeight.value))
        treeHeight.value--
        treeObj.character+= treeChar.value
        tree();

    }else {
        console.log("Here is your tree")
    }

}
// function for enter key-press
function enterKey(e){
    if(e.key === "Enter"){
        tree()
    }
}

button.addEventListener("click", tree);
treeHeight.addEventListener("keypress", enterKey)
treeChar.addEventListener("keypress", enterKey)
