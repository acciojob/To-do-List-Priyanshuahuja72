//your code here
let button = document.getElementById("addTodoBtn");
button.addEventListener('click' , function(){
	let name = document.getElementById('newTodoInput').value;
	if(name == " ")
	{
		alert("It should not be empty")
     }
	else
	{
	let box = document.getElementById('todoList');
	let li = document.createElement('li');
	li.textContent = name;
	box.appendChild(li);
	document.getElementById('newTodoInput').value = " ";
	}
})
