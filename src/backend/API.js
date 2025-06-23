const API = "http://localhost:3000/Livros";

async function buscarDados() {
    try {
        const data = await fetch(API);
        const dataResponse = await data.json();
        console.log(dataResponse);
    } catch (error) {
        console.log(error)
    }
}
buscarDados();