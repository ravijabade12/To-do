const listContainer  = document.getElementById("list-container");
const intputBox = document.getElementById("input-box");

function addTask(){
    if(intputBox.value === ''){
        alert("Enter some task");
    }else{
        let li=document.createElement("li");
        li.innerHTML = intputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);

    }
    intputBox.value='';
    saveTask();
}

listContainer.addEventListener("click",function(e){

    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTask();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTask();

    }

    

});

function saveTask(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
