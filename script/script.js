var todobtn=document.getElementById("addbtn");
var todolist=document.getElementById("todolist");
var todoinput=document.getElementById("todo");
function todoadd(){
var todotext= todoinput.value;
todobtn.classList.add('addbtn');
setTimeout(function(){
    todobtn.classList.remove('addbtn'); 
}, 300);

if (todotext==''){
 alert(" ⚠ WARNING! ADD A TO DO ");
    return false;

}
else{ todoadd; }
var node=document.createElement("li");
node.className="hi";
setTimeout(function(){
    node.className="animation";
}, 2000);

// node.className="animation";
var todo=document.createTextNode(todotext);
var checkbox=document.createElement("input");
checkbox.setAttribute("type","checkbox");
checkbox.onclick=function() 
{
    tododone(this.parentNode);
};
node.appendChild(checkbox);
node.appendChild(todo);
todolist.appendChild(node);

todoinput.value='';

}
function tododone(todo)
{
    todo.classList.add('done');
    // var todo=todolist.childNodes[i];
    // todo.className="done";
    setTimeout(function()
    {
    todo.classList.remove('animation');
    todo.classList.add('bye');
    setTimeout(function()
    {
        todo.remove();
    }, 2000);
}, 1000);
}




