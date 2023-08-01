// cypress/page/Navigation.js
class Navigation {
    visitHomepage() {
        cy.visit('https://magento.softwaretestingboard.com/');
    }

    visitAccount() {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/');
    }

    visitProduct() {
        cy.visit('https://magento.softwaretestingboard.com/hero-hoodie.html');
    }

    visitOrderHistory() {
        cy.visit('https://magento.softwaretestingboard.com/sales/order/history/');
    }

    visitDownloadProduct() {
        cy.visit('https://magento.softwaretestingboard.com/downloadable/customer/products/');
    }

    visitWishList() {
        cy.visit('https://magento.softwaretestingboard.com/wishlist/');
    }

    visitAddressBook() {
        cy.visit('https://magento.softwaretestingboard.com/customer/address/');
    }

    visitAccountInformation() {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/edit/');
    }

    visitPaymentMethod() {
        cy.visit('https://magento.softwaretestingboard.com/vault/cards/listaction/');
    }

    visitProductReview() {
        cy.visit('https://magento.softwaretestingboard.com/review/customer/');
    }
}


export default new Navigation();

