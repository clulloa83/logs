const request = require('supertest');

const { app } = require('../app');

describe('GET /log', () => {
    it('responde con json que contiene una lista de todos los logs', done => {
        request(app)
            .get('/log')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});


describe('POST /log', () => {
    it('responde con 201', done => {
    const data = {
        sistemaId: '61bcf10bc7434dc339ed8545',
        tipo: 'info',
        descripcion: 'test unitario',
        disparador: 'manual',
        usuarioId: 123,
        detalle: {
            msg: 'test unitario'
        },
    };
    request(app)
        .post('/log')
        .send(data)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
        .end((err) => {
            if (err) return done(err);
            done();
        });    
    });

    it('responde con 400 en peticion erronea', (done) => {
        const data = {
          // falta parametros
        };
        request(app)
        .post('/log')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});

describe('GET /sistema', () => {
    it('responde con json que contiene una lista de todos los sistemas', done => {
        request(app)
            .get('/sistema')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

describe('POST /sistema', () => {
    it('responde con 201', done => {
    const data = {
        nombre: 'testUnitarioSistema'
    };
    request(app)
        .post('/sistema')
        .send(data)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
        .end((err) => {
            if (err) return done(err);
            done();
        });    
    });

    it('responde con 400 en peticion erronea', (done) => {
        const data = {
          // falta parametros
        };
        request(app)
        .post('/sistema')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});

// describe('DELETE /sistema', () => {
//     it('responde con 200', done => {
//     const data = {
//         id: '123'
//     };
//     request(app)
//         .post('/sistema')
//         .send(data)
//         .set('Accept', 'application/json')
//         .expect('Content-Type', /json/)
//         .expect(200)
//         .end((err) => {
//             if (err) return done(err);
//             done();
//         });    
//     });

//     it('responde con 400 en peticion erronea', (done) => {
//         const data = {
//           // falta parametros
//         };
//         request(app)
//         .post('/sistema')
//             .send(data)
//             .set('Accept', 'application/json')
//             .expect('Content-Type', /json/)
//             .expect(400)
//             .end((err) => {
//                 if (err) return done(err);
//                 done();
//             });
//     });
// });