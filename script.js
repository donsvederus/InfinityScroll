// Unsplash API
const count = 10;
const apiKey = 'u-8YGj8Wn6Yzk_I-7869IdR4JOnsx9NL1L220faTteE';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;


// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        // Catch Error Here
    }
}

// on Load
getPhotos();