console.log("JavaScript is connected!");
const inputBox = document.getElementById("input-box");
const listItem = document.getElementById("list-item");

function addTask(){
    if(inputBox.value==''){
        alert("You must write something");
    } else{
        let li= document.createElement("li");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "task-checkbox";
        let label = document.createElement("label");
        label.textContent = " " +inputBox.value ;
        let dltbttn = document.createElement("span");
        dltbttn.textContent= "x";
        dltbttn.className = "dlt-bttn";
        dltbttn.addEventListener("click", function () {
            li.remove();
         
        });

        checkbox.addEventListener("change", function () {
            label.classList.toggle("completed");
            checkbox.classList.toggle("checked");
           
        });
        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(dltbttn);
        listItem.appendChild(li);
    }
    inputBox.value="";
    
}
