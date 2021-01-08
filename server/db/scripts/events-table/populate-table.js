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

const eventData = [{
    title: 'css lecture',
    date: '2021-12-21',
    time: '19:00:00',
    speaker: 'Dr Chris',
    banner: 'https://i.redd.it/havo4cxljnuz.jpg',
    description: 'Dr Chris talks CSS one night only',
    numtickets: '40',
    location: 'Zoom'
}, {
    title: "A question of organisation",
    date: "2021-06-30",
    time: "19:00:00",
    speaker: "Tom Bennet",
    banner: "https://i.redd.it/havo4cxljnuz.jpg",
    description: "CSS is an absolute pain in the backside when using component libraries",
    numtickets: 40,
    location: "Zoom"
}, {title: 'Valentina\'s Auth0 Masterclass',
date: '2021-04-21',
time: '19:30:00',
speaker: 'Valentina Militaru',
banner: 'https://i.redd.it/havo4cxljnuz.jpg',
description: 'Everything you ever wanted to know about Auth0 but were to afraid to ask.',
numtickets: '40',
location: 'Zoom'},  {title: 'Next.js Hype',
date: '2023-02-13',
time: '20:00:00',
speaker: '',
banner: 'https://i.redd.it/havo4cxljnuz.jpg',
description: 'Dr Chris talks CSS one night only',
numtickets: '40',
location: 'Zoom'
}

]

       
        },
       
        {
            "id": 12,
            "title": "example css lecture",
            "date": "2020-12-21",
            "time": "19:00:00",
            "speaker": "Big Chris",
            "banner": "https://i.redd.it/havo4cxljnuz.jpg",
            "description": "Big Chris talks CSS one night only",
            "numtickets": 40,
            "location": "Zoom"
        },
        {
            "id": 13,
            "title": "trying again",
            "date": "2021-01-06",
            "time": "13:41:00",
            "speaker": "hello",
            "banner": null,
            "description": "description",
            "numtickets": 30,
            "location": "hey"
        },
        {
            "id": 14,
            "title": "fbadbae",
            "date": "2021-01-06",
            "time": "16:41:00",
            "speaker": "aethafdb",
            "banner": null,
            "description": "sdthseth",
            "numtickets": 60,
            "location": "dfbasfb"
        },
        {
            "id": 15,
            "title": "example css lecture",
            "date": "2020-12-21",
            "time": "19:00:00",
            "speaker": "Big Chris",
            "banner": "https://i.redd.it/havo4cxljnuz.jpg",
            "description": "Big Chris talks CSS one night only",
            "numtickets": 40,
            "location": "Zoom"
        },
        {
            "id": 16,
            "title": "Material UI can do one",
            "date": "2021-01-07",
            "time": "19:00:00",
            "speaker": "TB",
            "banner": "https://i.redd.it/havo4cxljnuz.jpg",
            "description": "CSS is an absolute pain in the backside when using component libraries. adhsfklashjdfkljhasdfklhasdklfjhladkjshfldkjashfkldjashfkljasdhfkljasdhfkljashdfkljashdfkljhasdfkljhasfkljhasdfkljhdasfkljhlkfjhadkjsfhkljasdhfkljasdhflkjasdhfkljasdhfkljasdhfklsdjhfkljasdhfkljasdhfdklsjhfkjasfhdkljsfhasfkjhdasklfjhasdfkljhasdfkljhdasklfjhasdfkljhdklfjahdklsfjhasdfkljhasdfkljhdasfkljhsdafkljdhasfkljashfkjadfsklja;lsdfkj",
            "numtickets": 40,
            "location": "Zoom"
        },
        {
            "id": 17,
            "title": "empty title",
            "date": "2021-01-06",
            "time": "21:54:29.351",
            "speaker": "empty speaker",
            "banner": "http://res.cloudinary.com/duhcbwxmg/image/upload/v1609970105/event_setups/hww6e9qoqcsy06sb8te0.jpg",
            "description": "empty description",
            "numtickets": 0,
            "location": "empty location"
        },
        {
            "id": 19,
            "title": "cheers",
            "date": "2021-01-06",
            "time": "22:05:02.939",
            "speaker": "empty speaker",
            "banner": "http://res.cloudinary.com/duhcbwxmg/image/upload/v1609970813/event_setups/otuegtxryis1lbxjutpy.jpg",
            "description": "empty description",
            "numtickets": 0,
            "location": "empty location"
        },
        {
            "id": 23,
            "title": "No banner",
            "date": "2021-01-08",
            "time": "10:49:34.63",
            "speaker": "Bernard",
            "banner": "",
            "description": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.",
            "numtickets": 25,
            "location": "Zoom"
        },
        {
            "id": 24,
            "title": "empty title",
            "date": "2021-01-07",
            "time": "11:08:37.003",
            "speaker": "empty speaker",
            "banner": "http://res.cloudinary.com/duhcbwxmg/image/upload/v1610017747/event_setups/ugn73qgoicnihgu3lkfs.png",
            "description": "empty description",
            "numtickets": 0,
            "location": "empty location"
        },
        {
            "id": 25,
            "title": null,
            "date": "1970-01-01",
            "time": null,
            "speaker": null,
            "banner": "http://res.cloudinary.com/duhcbwxmg/image/upload/v1610019434/event_setups/rpzdjiywjotmlqq93kq4.png",
            "description": null,
            "numtickets": null,
            "location": null
        },
        {
            "id": 26,
            "title": null,
            "date": "1970-01-01",
            "time": null,
            "speaker": null,
            "banner": "http://res.cloudinary.com/duhcbwxmg/image/upload/v1610019554/event_setups/mho9et2txpfv5gf7uvib.jpg",
            "description": null,
            "numtickets": null,
            "location": null
        },
        {
            "id": 27,
            "title": "No banner",
            "date": "1970-01-01",
            "time": null,
            "speaker": null,
            "banner": "http://res.cloudinary.com/duhcbwxmg/image/upload/v1610022149/event_setups/oartt3k2u6lpcg5loduo.png",
            "description": null,
            "numtickets": null,
            "location": null
        },
        {
            "id": 28,
            "title": "empty title",
            "date": "2021-01-07",
            "time": "14:19:06.825",
            "speaker": "empty speaker",
            "banner": null,
            "description": "empty description",
            "numtickets": 0,
            "location": "empty location"
        },
        {
            "id": 29,
            "title": "",
            "date": "2021-01-07",
            "time": "14:36:55.042",
            "speaker": "",
            "banner": null,
            "description": "",
            "numtickets": 0,
            "location": ""
        },
        {
            "id": 30,
            "title": "test2 img uploader",
            "date": "2021-01-21",
            "time": "15:06:00",
            "speaker": "soc",
            "banner": "http://res.cloudinary.com/duhcbwxmg/image/upload/v1610032390/event_setups/d5uiradcwagmrzvi7xeu.png",
            "description": "test test",
            "numtickets": 20,
            "location": "zoom"
        },
        {
            "id": 31,
            "title": "test3-one post request with the image uploader ",
            "date": "2021-01-22",
            "time": "16:15:00",
            "speaker": "michael",
            "banner": "http://res.cloudinary.com/duhcbwxmg/image/upload/v1610032633/event_setups/zifzk7uzyapceuai6laa.png",
            "description": "hope that is working ",
            "numtickets": 100,
            "location": "zoom"
        },
        {
            "id": 32,
            "title": "TEST TEST",
            "date": "2021-01-08",
            "time": "16:24:00",
            "speaker": "MICHAEL",
            "banner": "http://res.cloudinary.com/duhcbwxmg/image/upload/v1610033180/event_setups/wwaileeqkropsdstzauh.png",
            "description": "IUIOSDYFHJSDMJHFGDHFGHGDHGKJSDFGFSKDGFHJDGKUGEUIRFSHROUYUHFJKFHKJDSHFUHJFDGKSHFDLSKHG",
            "numtickets": 1,
            "location": "zoom"
        },
        {
            "id": 33,
            "title": "empty title",
            "date": "2021-01-07",
            "time": "15:31:11.401",
            "speaker": "empty speaker",
            "banner": "http://res.cloudinary.com/duhcbwxmg/image/upload/v1610033493/event_setups/slgjdf6crurytheuidtt.png",
            "description": "empty description",
            "numtickets": 0,
            "location": "empty location"
        },
        {
            "id": 34,
            "title": "Material UI can do one",
            "date": "2021-01-08",
            "time": "10:00:00",
            "speaker": "TB",
            "banner": "https://i.redd.it/havo4cxljnuz.jpg",
            "description": "CSS is an absolute pain in the backside when using component libraries. adhsfklashjdfkljhasdfklhasdklfjhladkjs hfldkjashfkldjashfkljasdhfkljasdhfkljashdfkljashdf kljhasdfkljhasf kljhasdfkljhdasfklj hlkfjhadkj sfhkljasdh fkljas dhflkja sdhfkljasd hfkljas dhfklsdj hfkljasdhfk ljasdhfdk lsjhfk ja sfhd kljsfha sfkjhdasklfj hasdfk ljhasdfkljhdas klfjha sdfkljhdklf jah dklsfjhasdfkl jhasdfkljhd asfkljhsdafkljdhasf kljashf kjadfs klja ;lsdfkj",
            "numtickets": 40,
            "location": "Zoom"
        },
        {
            "id": 35,
            "title": "vbdvb",
            "date": "2021-01-15",
            "time": "05:19:00",
            "speaker": "sdfdsf",
            "banner": "http://res.cloudinary.com/duhcbwxmg/image/upload/v1610104826/event_setups/qatgwuyq6wrcy30o2jsq.jpg",
            "description": "xfv",
            "numtickets": 50,
            "location": "sdgsgd"
        },
        {
            "id": 36,
            "title": "School of Code - Cohort 4.0 Demo Day",
            "date": "2021-01-09",
            "time": "09:00:00",
            "speaker": "SOC Bootcampers 5.0",
            "banner": "http://res.cloudinary.com/duhcbwxmg/image/upload/v1610105525/event_setups/y0luyoctu6qsxdi1idlc.jpg",
            "description": "School of Code’s mission is to get more and different types of people into tech, and help companies grow through hiring transformational talent. Our bootcamps are free for people so that we can remove the barriers that stop people starting tech careers. Our cohorts are representative of the local community, with a 50:50 gender split in our bootcamps, an age range of 18-60, and diverse socioeconomic, cultural, and professional backgrounds.",
            "numtickets": 50,
            "location": "Zoom"
        },
        {
            "id": 37,
            "title": "Material UI can do one",
            "date": "2021-01-08",
            "time": "23:59:00",
            "speaker": "TB",
            "banner": "http://res.cloudinary.com/duhcbwxmg/image/upload/v1610106971/event_setups/gzrv5bavu8fc7sxuezrw.jpg",
            "description": "CSS is an absolute pain in the backside when using component libraries. adh sfk las hjd fkl jhas dfk lh asd klfj hl ad kjs hfl dkj ashf kl dj ashf klja sdhf klja sdh fklj ashd fklja shdf kljha sdfk ljh asf klj has dfkl jhdas fklj hlkf jhadkj sfhkl jasdh fkljas dhflkja sdhfkljasd hfkljas dhfklsdj hfkljasdhfk ljasdhfdk lsjhfk ja sfhd kljsfha sfkjhd asklfj hasdfk ljhasdfkljhdas klfjha sdfkljhdklf jah dklsfjh asdfkl jhas dfkljhd asfk ljhsd afklj dhasf kljashf kjadfs klja ;lsdfkj",
            "numtickets": 40,
            "location": "Zoom"
        },
        {
            "id": 38,
            "title": "empty title",
            "date": "2021-01-12",
            "time": "16:09:00",
            "speaker": "ghg",
            "banner": "http://res.cloudinary.com/duhcbwxmg/image/upload/v1610111444/event_setups/azbrray58y6lbbjeyj6d.jpg",
            "description": "hghdgfhfgh",
            "numtickets": 5,
            "location": "ghf"
        },
        {
            "id": 39,
            "title": "empty title",
            "date": "2021-01-08",
            "time": "13:18:50.108",
            "speaker": "empty speaker",
            "banner": "http://res.cloudinary.com/duhcbwxmg/image/upload/v1610111985/event_setups/ngnmvv35dorzhdnqkimt.png",
            "description": "empty description",
            "numtickets": 0,
            "location": "empty location"
        },
        {
            "id": 40,
            "title": "Amelia's event is the best",
            "date": "2021-01-29",
            "time": "12:00:00",
            "speaker": "Amelia, Valentina, Tom",
            "banner": "http://res.cloudinary.com/duhcbwxmg/image/upload/v1610118964/event_setups/cm8jtn672jqynw26jere.jpg",
            "description": "This event is to celebrate surviving soc. It will include chocolate, pandas, drinks and snow. Come join us for a party and a chance to play many games and sleep. Welcome invite to all, soc bootcampers, mentors and anyone else. ",
            "numtickets": 100,
            "location": "Zoom"
        },
        {
            "id": 41,
            "title": "Amelia's event party",
            "date": "2021-01-21",
            "time": "22:45:00",
            "speaker": "Amelia, Tom, Fadumo",
            "banner": "http://res.cloudinary.com/duhcbwxmg/image/upload/v1610120255/event_setups/nu35ua9qfyhmaxbcrmp9.jpg",
            "description": "Come join the party with pandas, cake, chocolate, snow and really whatever else is wacky and fun. Oh and lots of edible things. Come celebrate finishing SoC and the fact we won't be the first ones with a job. A massive online party will be held to mark this occasion. Bring mentors, ex bootcampers, and basically anyone off the street. Just remember social distancing and all that... no police are raiding this party. Celebrate safely all! ",
            "numtickets": 100,
            "location": "Online Zoom"
        }
    ]
}

addEvent(eventData)
