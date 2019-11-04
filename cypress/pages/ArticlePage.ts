import { } from 'cypress';

export default class ArticlePage {


    pageDate() {
        return cy.get('.page-date span');
    }

    pageTags() {
        return cy.get('.page-tag a');
    }

    VerifyTags(tags: string[]) {
        for (let value of tags) {
            this.pageTags().should('contain', value)
        }
    }
}