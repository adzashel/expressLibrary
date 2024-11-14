const apiUrl = "https://www.dbooks.org/api/recent";
const searchUrl = "https://www.dbooks.org/api/search/";
const detailUrl = "https://www.dbooks.org/api/book/";



// fetch api
const getData = async () => {
    const data = await fetch(apiUrl);
    const jsonData = await data.json();
    return jsonData;
}

// detail books

const getDetailBook = async (id) => {
    const data = await fetch(detailUrl + id);
    const jsonData = await data.json();
    return jsonData;
}


// search books
const searchBook = async (id) => {
    const data = await fetch(searchUrl + id);
    const jsonData = await data.json();
    console.log(jsonData);
    return jsonData;
}

module.exports = { getData, getDetailBook , searchBook };