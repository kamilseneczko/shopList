class StoreCustomer {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.visit = 1;
    }
    showName() {
        alert(this.firstName + " " + this.lastName);
    }
    set name(val) {
        this.ourName = val;
    }
    get name() {
        return this.ourName;
    }
}
//# sourceMappingURL=storecustomer.js.map