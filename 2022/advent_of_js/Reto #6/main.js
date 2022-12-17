function createCube(size) {
    let top = []
    let bottom = []
    for (let i = 0; i < size; i++) {
        top.push((' ').repeat(size - i - 1) + '/\\'.repeat(i + 1) + ('_\\').repeat(size))
        bottom.push((' ').repeat(i) + '\\/'.repeat(size - i) + ('_/').repeat(size))

    }
    return [top, bottom].flat().join('\n')
}

// Misma funcion pero reducida

function createCube(size) {
    return [...Array(size)].map((_, i) => (' ').repeat(size - i - 1) + '/\\'.repeat(i + 1) + ('_\\').repeat(size)).concat([...Array(size)].map((_, i) => (' ').repeat(i) + '\\/'.repeat(size - i) + ('_/').repeat(size))).join('\n')
}