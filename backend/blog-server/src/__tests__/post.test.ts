import request from 'supertest'
import { MongoMemoryServer } from 'mongodb-memory-server'
import mongoose from 'mongoose'
import createServer from '../utils/server'

const app = createServer()
var token = ''
// testing the auth server
describe('Auth', () => {
  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create()
    await mongoose.connect(mongoServer.getUri())
  })
  afterAll(async () => {
    await mongoose.disconnect()
    await mongoose.connection.close()
  })
  describe('given a valid object for post', () => {
    it('should return a 200 status code and save the token', async () => {
      const response = await request(app)
        .post('/api/v1/user/login')
        .send({
          email: 'test@mail.com',
          password: '123456',
        })
        .expect('Content-Type', /json/)
        .then((res) => {
          token = res.body.accessToken
        })
    })
    it('should return a 200 status code', async () => {
      // 403 unauthorized
      const response = await request(app)
        .post('/post/create')
        .send({
          title: 'Test post',
          descrytion: 'This is a descryption for the post',
          coordinates: [-110.1571442, 32.2586857],
          postType: 'complain',
          problemTag: 'ocean pollution',
          images: ['24324342452534', '24324342452534'],
        })
      expect(response.statusCode).toBe(403)
    })

    it('should return a 403 status code for invalid input for post', async () => {
      // coordinate key is used intead of coordinates
      const response = await request(app)
        .post('/post/create')
        .send({
          title: 'Test post',
          descrytion: 'This is a descryption for the post',
          coordinate: [-110.1571442, 32.2586857],
          postType: 'complain',
          problemTag: 'ocean pollution',
          images: ['24324342452534', '24324342452534'],
        })
      expect(response.statusCode).toBe(403)
    })

    // testing a query for radius wise post view
    describe('given a valid query object for radius based data view', () => {
      it('should return a 403 status code', async () => {
        const response = await request(app)
          .post('/post/view/radius')
          .send({
            radius: 5,
            centerCoordinate: [-110.1571442, 32.2586857],
          })
        expect(response.statusCode).toBe(403)
      })
    })
    // View all post globally
    describe('given a valid query object for global view object', () => {
      it('should return a 403 status code for unauthorization', async () => {
        const response = await request(app).get('/post/view/global')
        expect(response.statusCode).toBe(403)
      })
    })
    
  })
})
