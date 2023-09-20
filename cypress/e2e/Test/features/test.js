import HomePage from "../../../pages/page";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const page = new HomePage();

Given('I add four random items to my cart', () => {
    cy.visit('/');
    page.addRandomToCart(4)
});

When ('I view my cart', () => {
    page.viewItemAddedInCart()
});

Then ('I find total four items listed in my cart', () => {
    page.verifyItemAddedInCart(4)    
});

When ('I search for lowest price item', () => {
    page.getPricesFromCart()
});

Then('I am able to remove the lowest price item from my cart', () => {
    page.removeItemWithLowestPrice()
});

Then ('I am able to verify three items in my cart', () => {
    page.verifyItemAddedInCart(3)
});