export function getSample(text){
    const url = ""
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error))
}