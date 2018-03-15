var newI = document.getElementById("new-item");
var add = document.getElementById("add-btn");
var list = document.getElementById("my-list");
var delAll = document.getElementById("delete-all-btn");
var liItems = list.children

for(i = 0 ; i < liItems.length ; i++){
    addCloseBtn(liItems[i]);
  }

function addCloseBtn(liElement) {
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.appendChild(txt);
    span.className = "close";
    span.onclick = function () {
        var liItem = this.parentElement;
        liItem.parentElement.removeChild(liItem);
    }
    liElement.appendChild(span);
}
function deleteAll() {
    var liItems = list.children;
    var Len = liItems.length;
    var i;

    for (i = 0; i < Len; i++) {
        liItems[0].parentElement.removeChild(liItems[0]);
    }
}
function addItem() {
    var txt = document.createTextNode(newI.value);
    var liElem = document.createElement("li");
    liElem.appendChild(txt);
    list.appendChild(liElem);
    addCloseBtn(liElem);
}
