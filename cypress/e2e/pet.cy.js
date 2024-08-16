// Bibliotecas
import pet from '../fixtures/pet.json'

describe('CRUD da entidade Pet', () => {

    // Post Pet
    it('Post Pet', () => {
      cy.request({
        method: 'POST',
        url: '/pet', //Endpoint
        body: pet  
      }).then(({status,body})=> {
        expect(status).to.eq(200)
        expect(body.id).to.eq(539781501)
        expect(body.name).to.eq(pet.name)
        expect(body.category.id).to.eq(pet.category.id)
        expect(body.category.name).to.eq(pet.category.name)
        expect(body.tags[0].id).to.eq(pet.tags[0].id)
        expect(body.tags[0].name).to.eq(pet.tags[0].name)
        expect(body.status).to.eq(pet.status)

      })

    })// Fim do Post

    // Get Pet
    it('Get Pet', () => {
      cy.request({
        url: `/pet/${pet.id}`,
        method: 'GET'

      }).then(({status, body})=> {
        expect(status).to.eq(200)
        expect(body.id).to.eq(539781501)
        expect(body.name).to.eq(pet.name)
        expect(body.category.id).to.eq(pet.category.id)
        expect(body.category.name).to.eq(pet.category.name)
        expect(body.tags[0].id).to.eq(pet.tags[0].id)
        expect(body.tags[0].name).to.eq(pet.tags[0].name)
        expect(body.status).to.eq(pet.status)
      })
    })

    // Put Pet

    // Delete Pet

}) // Termina o describe