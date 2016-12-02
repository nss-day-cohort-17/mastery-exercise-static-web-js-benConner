
var button = document.getElementById("btn-tree-grow");

var treeHeight = document.getElementById("tree-hgt");
var treeChar = document.getElementById("tree-char");
var row = treeHeight.value;
var r = row +(row += 1)
var treeObj = {
    height: "",
    character: ""
};

function tree(){
    treeObj.height = treeHeight.value
    treeObj.character+= treeChar.value
    if(treeObj.height > 0){
        console.log(treeObj.character)
        console.log()
        treeHeight.value --;
        tree();

    }else{
        console.log("Here is your tree")
        treeObj.height = treeHeight.value
        treeObj.character = treeChar.value
    }

}

function enterKey(e){
    if(e.key === "Enter"){
        console.log('hey')
        tree()
    }
}


function inputKeyUp(e) {
    e.which = e.which || e.keyCode;
    if(e.which == 13) {
        // submit
    }
}

button.addEventListener("click", tree);
treeHeight.addEventListener("keypress", enterKey)
treeChar.addEventListener("keypress", enterKey)
