class dataObject {
    constructor(_title, _num, _price) {
        this.name = _title;
        this.total = _num;
        this.price = _price;

        this.totalPrice = this.calculateTotal();
    }

    totalPrice() {
        return this.total * this.price
    }
}