var button = document.getElementById("btn-tree-grow");
var treeHeight = document.getElementById("tree-hgt");
var treeCharacter = document.getElementById("tree-char");

function makeTree(){
    console.log('*')
    console.log(treeHeight.value);
    console.log(treeCharacter.value);
    console.log('*')
}

button.addEventListener("click", makeTree);
