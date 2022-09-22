const names = document.querySelector(".names")

const fetchData = async () =>{
    try {
        const { data } = await axios.get("/api/products");
        const display = data.data.map((item) => {
            return `
                <h1>${item.fName}</h1>
            `
        });
        names.innerHTML = (display).join(' ');
    } catch (error) {
        names.innerHTML = `<h1>OOPS something went wrong</h1>`;
    }
} 
fetchData();

const btn = document.querySelector(".btn");
const input = document.querySelector("input");
const errMessage = document.querySelector(".errorMsg");

btn.addEventListener("click", async(e) => {
    e.preventDefault();
    const nameValue = input.value;
    if(nameValue){
        errMessage.classList.remove("active")
    }else{
        errMessage.classList.add("active")
    }
    try {
        const { data } = await axios.post("/api/products", {fName : nameValue});
        const h1 = document.createElement("h1");
        h1.textContent = data.fName;
        names.appendChild(h1);
    } catch (error) {
        errMessage.innerHTML = error.response.data.errMsg;
    }
})