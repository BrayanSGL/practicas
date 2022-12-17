function getMaxGifts(giftsCities, maxGifts, maxCities) {
    let maxGiftsValid = 0
    const cityLength = giftsCities.length
  giftsCities.forEach( () => {
    let cityCount = 0
    let acc = 0

    for(let idx = 0; idx < cityLength; idx++) {
      if(cityCount === maxCities) break
      if(acc + giftsCities[idx] <= maxGifts) {
        acc += giftsCities[idx]
        cityCount++
      }
    }
    if(acc > maxGiftsValid) maxGiftsValid = acc
    
    giftsCities.push(giftsCities.shift())
  })
  
  return maxGiftsValid
}

// Mismas funcion pero reducida

function getMaxGifts(giftsCities, maxGifts, maxCities) {
    let maxGiftsValid = 0
    const cityLength = giftsCities.length
    giftsCities.forEach( () => {
        let acc = 0
        for(let idx = 0; idx < cityLength; idx++) {
        if(acc + giftsCities[idx] <= maxGifts) acc += giftsCities[idx]
        else break
        }
        if(acc > maxGiftsValid) maxGiftsValid = acc
        giftsCities.push(giftsCities.shift())
    })
    
    return maxGiftsValid
    }

// Misma funcion pero reducida con funciones de array y operador ternario

function getMaxGifts(giftsCities, maxGifts, maxCities) {
    let maxGiftsValid = 0
    const cityLength = giftsCities.length
    giftsCities.forEach( () => {
        const acc = giftsCities.reduce((acc, gift) => acc + gift <= maxGifts ? acc + gift : acc, 0)
        if(acc > maxGiftsValid) maxGiftsValid = acc
        giftsCities.push(giftsCities.shift())
    })
    
    return maxGiftsValid
    }