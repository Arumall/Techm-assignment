
    const form= document.querySelector("#todo-form");
    const input= document.querySelector("#todo-input");
    const list= document.querySelector("#tasks");

    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        const task = input.value;
        if (!task) {
            alert("Can't be empty");
            return;
        } 
        const todo_div = document.createElement("div");
        todo_div.classList.add("task");
        list.appendChild(todo_div);

        const todo_content_div = document.createElement("div");
        todo_content_div.classList.add("content");
        todo_div.appendChild(todo_content_div);
   
        const todo_input= document.createElement("input");
        todo_input.classList.add("text");
        todo_input.type = "text";
        todo_input.value= task;
        todo_input.setAttribute("readonly", "readonly");
        todo_content_div.appendChild(todo_input);

        const todo_actions_div= document.createElement("div");
        todo_actions_div.classList.add("actions");
        todo_div.appendChild(todo_actions_div);

        const todo_edit_botton= document.createElement("button");
        todo_edit_botton.classList.add("Edit");
        todo_edit_botton.innerHTML = "Edit";

        const todo_delete_button= document.createElement("button");
        todo_delete_button.classList.add("Delete");
        todo_delete_button.innerHTML = "Delete";


        todo_actions_div.appendChild(todo_edit_botton);
        todo_actions_div.appendChild(todo_delete_button);
        
        todo_edit_botton.addEventListener('click', ()=>{
            
            if (todo_edit_botton.innerText.toLowerCase() =="edit") {
                    todo_input.removeAttribute("readonly");
                    todo_input.focus();
                    todo_edit_botton.innerText = "Save";
                    todo_input.style.textDecoration="none"
            }else{
                todo_input.setAttribute("readonly", "readonly");
                todo_edit_botton.innerText ="Edit";
                
            }
        });

        todo_delete_button.addEventListener('click', ()=>{
            if (confirm("Are you sure you want to delete this task?")) {
                list.removeChild(todo_div);
                

            }
        })
        
        input.value = "";
    });



