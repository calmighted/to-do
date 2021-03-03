//make a projects array
//get the modal working
//get the delete icon working
//change the delete and edit icon



const AddProjectDOM = () => {
    let AddBtn = document.querySelector('.add-project');
    AddBtn.addEventListener('click',showModal);
}

const getFormValues = (e) => {
  e.preventDefault();
  let projectTitle = e.target[0].value;
  let projectDes = e.target[1].value;
}

const showModal = () => {
    let closeBtn = document.querySelector('.close');
    let modalDiv = document.querySelector('.modal');
    modalDiv.style.display = "block"
    closeBtn.addEventListener('click',() => modalDiv.style.display = "none");
    window.onclick = function(event) {
        if (event.target == modalDiv) {
          modalDiv.style.display = "none";
        }
      }
    let submitModal = document.querySelector('.modal-form');
    submitModal.addEventListener('submit', getFormValues);
}

AddProjectDOM();