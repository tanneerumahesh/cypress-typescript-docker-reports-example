import HomePage from '../pages/HomePage';
import ArticlePage from '../pages/ArticlePage';

describe('Test Article Page', ()=>{

const homePage = new HomePage();
const articlePage = new ArticlePage();

beforeEach(()=>{
    cy.visit('/');
})

it('Should have title and tags', ()=>{

homePage.articles().first().should('contain','TeamCity - Do not run a build while another build is in progress');
homePage.articles().first().click();
articlePage.VerifyTags(['TeamCity']);
})

})