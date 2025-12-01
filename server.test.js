const request = require('supertest');
const app = require('../server'); 
describe('Health Check Endpoint', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('OK');
  });
});
