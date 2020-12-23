const exampleDAte = '2021-12-24T00:00:00.000Z'

function convertDateFormat(input) {
    input.split('')

    let newDate = []

    for (let i = 0; i < 10; i++) {
        newDate.push(exampleDAte[i])
    }

    const joinedDate = newDate.join('')

    console.log(joinedDate)
}

convertDateFormat(exampleDAte)
