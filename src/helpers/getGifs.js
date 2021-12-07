export const getGifs = async (category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=su6p61PxGCfBQN2osOm86KjQwEgkVmVO`
    const response = await fetch(url)
    const {data} = await response.json()

    const gifs = data.map(image =>{
        return { 
            id: image.id,
            title : image.title,
            url: image.images.downsized_medium.url
        }
    })
    return gifs
}