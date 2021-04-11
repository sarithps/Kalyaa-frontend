export class ConfirmModel{
    constructor(
        public productId : Number,
        public productName : String,
        public totalPrice : Number,
        public qty: Number,
        public name: String,
        public address: String,
        public pin: Number,
        public mobile: Number
    ){}
}