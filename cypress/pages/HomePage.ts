import { } from 'cypress';

export default class HomePage {

    articles(){
      return  cy.get('article a');
    }
}