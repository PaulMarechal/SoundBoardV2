// API Url to search and return informations needed for app 
// id, name, previews, duration, username, description, image
export function getSample(text){
    const token="N7OZMw2Ong72dcS2xwuygHTK00R2Gj8hCoA2ffCA"
    const url = "https://freesound.org/apiv2/search/text/?query=" + text + "&fields=id,name,previews,duration,username,description,images&token=" + token
    
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error))
}
