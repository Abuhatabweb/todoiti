let input = document.querySelector(".text-box")
let btn = document.querySelector(".submit")
let taskDiv = document.querySelector(".task-div")


input.addEventListener("keydown" , (e)=>{
    if (e.key == "Enter") {
        btn.click()
    }
})


// Add task
btn.onclick = function () {
    if(input.value != "") {
        addElementToPage(input.value);
        input.value = ''
    }
}

function addElementToPage(value) {
    let div = document.createElement("div")
    div.className = "task"
    div.innerHTML= `<p class ="p-text">${value}</p>`
    let div2 = document.createElement("div")
    div2.className = "div2"
    let del = document.createElement("span")
    del.className = "del"
    del.innerText = "Delete"
    let done = document.createElement("input")
    done.type = "checkbox"
    done.id = "done"
    div2.append(done , del)
    div.appendChild(div2)
    taskDiv.appendChild(div)
}

// remove task 
taskDiv.addEventListener("click" , (e) => {

    if(e.target.classList.contains("del")){
        let con = confirm("Are You Suer")
        if (con) {
            let parent = e.target.parentElement;
            parent.parentElement.remove()
        }
    }
    
    // complete
       else if(e.target.id = "done"){
       if (e.target.checked) {
        let parentCheck = e.target.parentElement
        parentCheck.previousElementSibling.style.textDecoration = "line-through 3px #C7253E"
       }else{
        let parentCheck = e.target.parentElement
        parentCheck.previousElementSibling.style.textDecoration = "none"
       }
    }

})
