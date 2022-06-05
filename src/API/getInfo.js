async function getInfo (limit = 5) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/?userId=${1}&_limit=${limit}`)
    const data = await response.json();
    return data
}
export default getInfo;