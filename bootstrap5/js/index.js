const container = document.querySelector(".container");

const fetchData = async () => {
    const res = await fetch("http://localhost:5000/products");
    const data = await res.json();
    const datas = data.map((item) => {
        return `
            <span>${item.fName}</span>
            <span>${item.lName}</span>
            <br/>
        `
    });
    container.innerHTML = (datas).join(" ")
}

fetchData()