
interface Product
    {
        ProductId : number;
        ProductName: string;
        Price : number;
        Quantity: number;
    }
function getProduct():Promise <Product[]>{

return fetch ('/product.json')
.then(res=>res.json())
.then(res=>{return res as Product[]})
}

getProduct()
.then(pro=>{
    console.log(pro.map(u => 'ProductId:'+u.ProductId+ '\n' +'ProductName:' +u.ProductName + '\n' +'ProductPrice'+ u.Price+ '\n'+'Quantity' + u.Quantity + '\n'+ '\n').toString())
})