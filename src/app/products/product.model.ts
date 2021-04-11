export class ProductModel{
    constructor(
        public productId : Number,
        public productName : String,
        public productCode : String,
        public description : String,
        public price : Number,
        public starRating : Number,
        public image : String
    ){}
}