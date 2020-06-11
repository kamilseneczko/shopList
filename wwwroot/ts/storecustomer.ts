class StoreCustomer {

    constructor(private firstName: string, private lastName: string) {
    }

    private ourName: string;
    public visit: number = 1;

    public showName() {
        alert(this.firstName + " " + this.lastName);
    }

    set name(val) {
        this.ourName = val;
    }

    get name() {
        return this.ourName;
    }

}
