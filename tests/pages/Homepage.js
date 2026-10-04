exports.Homepage=class Homepage{
    constructor(page){
        this.page=page;
        this.productList="div>h4>a";
        this.addToCartbtn="text=Add to cart";
        this.cart='#cartur'
    }
    async addProductToCart(productName){
        const productList=await this.page$$(this.productList);
        for(const product of productList){
            if(productName==await product.textContent()){
                await product.click()
                break;
            }
        }
        
    page.on('dialog',dialog=>dialog.accept())

    }
    async gotoCart(){
        await this.page.locator(this.cart).click()
    }
}