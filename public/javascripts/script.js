document.addEventListener('DOMContentLoaded', start, false)

function start() {
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: {
            lat: 52.505387,
            lng: 13.37287,
        },
    })

    axios.get('/restaurants').then(result => {
        result.data.forEach(restaurant => {
            new google.maps.Marker({
                position: restaurant.location,
                map: map,
                title: restaurant.name,
            })
        })
    })
}
