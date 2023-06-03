
document.querySelector('#add').onclick = function(){
    if(document.querySelector('#input').value.length == 0)
    {
        alert("Must be 4 letters or more")
    }
    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
            <span id="sort-btn"></span>
                <span id="taskname">
                    ${document.querySelector('#input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt">Delete</i>
                </button>
            </div>
        `;
        let current_tasks = document.querySelectorAll(".delete");
        for(let i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
  }