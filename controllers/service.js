const { getKm } = require("../utils/helper")

exports.getClosestPair = (data) => {
    let minDistance = 999999999
    const location = {
        place1: {},
        place2: {},
    }
    const len = data.length
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            const { position: position1 } = data[i]
            const { position: position2 } = data[j]
            const km = getKm(position1.lat, position1.lon, position2.lat, position2.lon)
            if (km < minDistance) {
                minDistance = km
                location.place1 = data[i],
                    location.place2 = data[j]
            }
        }
    }

    return {
        minDistance,
        ...location,
    }
}