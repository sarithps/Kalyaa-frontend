export class OrderModel{
    constructor(
        public qty : Number,
        public name: String,
        public address: String,
        public pin: Number,
        public mobile: Number
    ){}
}