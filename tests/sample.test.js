/*
https://dev.to/nedsoft/performing-crud-with-sequelize-29cf
https://dev.to/nedsoft/getting-started-with-sequelize-and-postgres-emp 
https://dev.to/nedsoft/testing-nodejs-express-api-with-jest-and-supertest-1km6
*/

describe('Sample Test', () => {
    it('should test that true === true', () => {
      expect(true).toBe(true)
    })
  })
  
  // actual testing:

const supertest = require('supertest')
const app = require('../server/app')

const request = supertest(app)

describe('Get Endpoints', () => {
  it('should return 200 on GET', async () => {
    const res = await request
      .get('/')
    expect(res.statusCode).toEqual(200)


    
  })
})

it('gets the test endpoint', async done => {
    const response = await request.get('/events')
  
    expect(response.statusCode).toBe(200)
    expect(response.body.payload).toStrictEqual(
        [{"id":1,"title":"example css lecture","date":"2020-12-21T00:00:00.000Z","speaker":"Big Chris","banner":"https://i.redd.it/havo4cxljnuz.jpg","description":"Big Chris talks CSS one night only","numtickets":40,"location":"Zoom"},{"id":2,"title":"example css lecture","date":"2020-12-21T00:00:00.000Z","speaker":"Big Chris","banner":"https://i.redd.it/havo4cxljnuz.jpg","description":"Big Chris talks CSS one night only","numtickets":40,"location":"Zoom"}]
    )
    done()
  })


/*
example test:

describe('Post Endpoints', () => {
    it('should create a new post', async () => {
      const res = await request(app)
        .post('/api/posts')
        .send({
          userId: 1,
          title: 'test is cool',
        })
      expect(res.statusCode).toEqual(201)
      expect(res.body).toHaveProperty('post')
    })
  }) 
  
  */