const params = window.location.search;
const id = new URLSearchParams(params).get('id');
const editInput = document.querySelector(".editInput");
const editId = document.querySelector(".editId");
const complete = document.querySelector(".completed");
const editForm = document.querySelector(".editForm");
let tempName;


const showData = async () => {
    try {
        const {data:{ tasks }} = await axios.get(`http://localhost:5000/api/manager/${id}`);
        const { completed, _id:taskId, name } = tasks;
        editInput.value = name;
        editId.textContent = taskId;
        tempName = name;
        console.log(tempName)
        if(completed){
            complete.checked = true
        }
    } catch (error) {
        console.log(error);
    }
}
showData ();

editForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
        const inputRef = editInput.value;
        const completeRef = complete.checked;
        const {data : {task}} = await axios.patch(`http://localhost:5000/api/manager/${id}`, {
            name : inputRef,
            completed : completeRef
        });
    const { _id:taskID, completed, name } = task;
    editId.textContent = taskID;
    editInput.value = name;
    tempName = name;
    if(completed){
        complete.checked = true;
    }
    } catch (error) {
        console.log(error)   
    }
})