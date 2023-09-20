class Page {
    // Locators

    get items() {
        return cy.get("li > div > a[class='button product_type_simple add_to_cart_button ajax_add_to_cart']")
    }

    get viewCart() {
        return cy.get("li > div > a[title = 'View cart']").eq(1);
    }

    get itemAddedInCart() {
        return cy.get("tr[class='woocommerce-cart-form__cart-item cart_item']")
    }

    get pricesFromCart() {
        return cy.get("tr[class='woocommerce-cart-form__cart-item cart_item'] > td[class='product-price'] > span")
    }

    get removeItem(){
        return cy.get("tr[class='woocommerce-cart-form__cart-item cart_item'] > td[class='product-remove'] > a")        
    }

    // Page Object Methods

    addRandomToCart(num) {
        var max = 9
        var min = 1
        for (let i = 1; i <= num; i++) {
            var a = Math.floor(Math.random() * (max - min + 1)) + min
            if (a != b) {
                this.items.eq(a).trigger('mouseover').click();
            }
            var b = a
        }
    }

    viewItemAddedInCart() {
        this.viewCart.click();
    }

    verifyItemAddedInCart(num) {
        this.itemAddedInCart.should('have.length', num)
    }

    getPricesFromCart() {
        let lowestAmount = 20;
        let lowestAmountIndex = -1;
        this.pricesFromCart.each(($span, index) => {
            const text = $span.text().replace('$', '');
            const amount = parseFloat(text);
            if (amount < lowestAmount) {
                lowestAmount = amount; // Update the lowestAmount
                lowestAmountIndex = index; // Update the lowestAmountIndex
            }
        });
        cy.log(`Lowest amount: $${lowestAmount} (at index ${lowestAmountIndex})`);
        return lowestAmountIndex;
    }

    removeItemWithLowestPrice() { 
        const index = this.getPricesFromCart;
        this.removeItem.eq(Number(index)).click();
    }
}

// Export the class
export default Page;
