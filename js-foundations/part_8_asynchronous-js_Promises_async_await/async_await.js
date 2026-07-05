function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({name: "chai", url: "https://chaicode.com"})
        }, 3000);
    })
}

async function getData() {
    try {
        console.log("Fetching user data...");
        const data = await fetchData(); //can only use await in a async function
        console.log("User data:", data);
        
    } catch (error) {
        console.log("Error fetching data");
    }
}

getData();