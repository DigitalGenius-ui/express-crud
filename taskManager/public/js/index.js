const todo = document.querySelector(".todos");
const addData = document.querySelector(".addData");
const addInput = document.querySelector(".addInput");
const msg = document.querySelector(".msg")

// get ALl names 
const showData = async () => {
    try {
        const {data:{tasks}} = await axios.get("http://localhost:5000/api/manager");
        msg.style.display = "none";
        const allTasks = tasks.map((item) => {
            const { name, completed, _id } = item;
            return `
                <div class="todo">
                <span class"tickSign"><i class="fa-regular fa-circle-check ${completed && "active"}"></i></span>
                <p class="todoName ${completed && "active"}">${name}</p>
                <div class="actions">
                    <span class="remove" data-id=${_id}><i class="fa-sharp fa-solid fa-trash"></i></span>
                    <span><a href="./task.html?id=${_id}"><i class="fa-regular fa-pen-to-square"></i></a></span>
                </div>
                </div>
            `
        });
        todo.innerHTML = (allTasks).join(" ");
    } catch (error) {
        msg.classList.add("error");
        msg.style.display = "block"
        msg.textContent = error.response.data.msg.message;
    }
}
showData();

// add new name 
addData.addEventListener("submit", async(e) => {
    e.preventDefault();
    const name = addInput.value;
    try {
        await axios.post("http://localhost:5000/api/manager", {name});
        showData();
        addInput.value = "";
        msg.style.display = "block";
        msg.classList.add("success");
        msg.textContent = "Text is successfully added";
    } catch (error) {
        msg.classList.add("error");
        msg.style.display = "block"
        msg.textContent = error.response.data.msg.message;
    }
    setTimeout(() => {
        msg.style.display = "none"
    },2000)
});

// delete names 
todo.addEventListener("click", async(e) => {
    const target = e.target;
    if(target.classList.contains("remove")){
        const btnId = target.dataset.id;
        try {
            axios.delete(`http://localhost:5000/api/manager/${btnId}`);
            showData();
            msg.style.display = "block";
            msg.classList.add("error");
            msg.textContent = "Text is removed successfully";
        } catch (error) {
            msg.classList.add("error");
            msg.style.display = "block"
            msg.textContent = error.response.data.msg.message;
        }
    }
    setTimeout(() => {
        msg.style.display = "none"
    },2000)
})


