const { query } = require('../../index')

const sqlStatement =
    'INSERT INTO event_table (title, date, time, speaker, banner, description, numtickets, location) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING title;'

async function addEvent(event) {
    const res = await query(sqlStatement, [
        event.title,
        event.date,
        event.time,
        event.speaker,
        event.banner,
        event.description,
        event.numtickets,
        event.location
    ])
    console.log(`added new event: ${res.rows[0].title}`)
    return res.rows[0]
}

const eventData = [
    {
        title: 'Styling It Out',
        date: '2021-12-21',
        time: '19:00:00',
        speaker: 'Bootcampers 4.0',
        banner:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/120px-CSS3_logo_and_wordmark.svg.png',
        description: 'Bootcampers from cohort 4 introduce CSS',
        numtickets: 70,
        location: 'Zoom'
    },
    {
        title: 'A question of organisation',
        date: '2021-06-30',
        time: '19:00:00',
        speaker: 'Tom Bennet',
        banner:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReFppENYarhUQF32WCOctpAXZvDm4zJSJElg&usqp=CAU',
        description:
            'CSS is an absolute pain in the backside when using component libraries',
        numtickets: 40,
        location: 'Zoom'
    },
    {
        title: "Valentina's Auth0 Masterclass",
        date: '2021-04-21',
        time: '19:30:00',
        speaker: 'Valentina Militaru',
        banner: 'https://cdn.auth0.com/blog/series-c/auth0-logo.png',
        description:
            'Everything you ever wanted to know about Auth0 but were to afraid to ask.',
        numtickets: 256,
        location: 'Zoom'
    },
    {
        title: 'Next.js Hype',
        date: '2023-02-13',
        time: '20:00:00',
        speaker: 'Barry Scott',
        banner: 'https://miro.medium.com/max/650/1*Hva7hcsFWulFUPhrEWui1A.jpeg',
        description:
            'He of cilit bang fame, talks server-side rendering, one night only',
        numtickets: 40,
        location: 'Zoom'
    },
    {
        title: 'RESTful or Stressful',
        date: '2023-04-17',
        time: '19:30:00',
        speaker: 'Roy Fielding',
        banner:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU9Y_hsyTH32-gVSaTWwZuttmiHIi612T9Rg&usqp=CAU',
        description:
            'Big roy the boss takes us on a journey through network-based software architechtures - not to be missed!',
        numtickets: 64,
        location: 'Zoom'
    },
    {
        title: 'Agile Methodologies',
        date: '2023-06-30',
        time: '19:00:00',
        speaker: 'Bootcampers 4.0',
        banner:
            'https://d57439wlqx3vo.cloudfront.net/iblock/276/276b271f4c6ac56cbf918c9735d91e4f/149341c8d1f98eaf0fe081b1f255c8c1.jpg',
        description:
            'Bootcampers from cohort 4 present a lecture on project management',
        numtickets: 40,
        location: 'Zoom'
    },
    {
        title: 'Git: unpleasant person or stupid content tracker',
        date: '2023-04-17',
        time: '19:30:00',
        speaker: 'Linus Torvald',
        banner:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/512px-Git-logo.svg.png',
        description: 'Distrubuted version control systems deep-dive!',
        numtickets: 50,
        location: 'Zoom'
    },

    {
        title: "Amelia's event party",
        date: '2021-01-21',
        time: '22:45:00',
        speaker: 'Amelia, Tom, Fadumo',
        banner:
            'http://res.cloudinary.com/duhcbwxmg/image/upload/v1610120255/event_setups/nu35ua9qfyhmaxbcrmp9.jpg',
        description:
            "Come join the party with pandas, cake, chocolate, snow and really whatever else is wacky and fun. Oh and lots of edible things. Come celebrate finishing SoC and the fact we won't be the first ones with a job. A massive online party will be held to mark this occasion. Bring mentors, ex bootcampers, and basically anyone off the street. Just remember social distancing and all that... no police are raiding this party. Celebrate safely all! ",
        numtickets: 100,
        location: 'Online Zoom'
    }
]

eventData.map(addEvent)
