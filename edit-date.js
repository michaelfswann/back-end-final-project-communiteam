const exampleDAte = '2021-12-24T00:00:00.000Z'

function convertDateFormat(input) {
    const splitDate = input.split('')

    let newDate = []

    for (let i = 0; i < 10; i++) {
        newDate.push(splitDate[i])
    }

    const joinedDate = newDate.join('')

    console.log(joinedDate)
}

convertDateFormat(exampleDAte)
