const exampleDate = '2021-12-24T00:00:00.000Z'

function convertDateFormat(input) {
    const d = new Date(input)
    const date = d.toISOString()
    const splitDate = date.split('')

    let newDate = []

    for (let i = 0; i < 10; i++) {
        newDate.push(splitDate[i])
    }

    const joinedDate = newDate.join('')

    // console.log(joinedDate)
    return joinedDate
}

convertDateFormat(exampleDate)

module.exports = { convertDateFormat }
