const AddProject = () => {
    let AddBtn = document.querySelector('.add-project');
    AddBtn.addEventListener('click',showModal);
}

const showModal = () => {
    let body = document.querySelector('body');
    let modalDiv = document.createElement('div');
    modalDiv.classList.add('modal');
    modalDiv.style.display = "block"
    modalDiv.innerText = "Hi i am a modal";
    body.appendChild(modalDiv);
}
export default AddProject;