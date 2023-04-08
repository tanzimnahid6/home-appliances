import { getItemFromDB } from "../utilities/utilities";

export const getProductsAndCartData = async ()=>{
    const productsData = await fetch('produtcs.json')
    const produtcs = await productsData.json()
    const savedData = getItemFromDB()
    let cartArray = []
    for(const id in savedData){
        const foundProduct = produtcs.find((produtc) => produtc.id === id);
        if(foundProduct){
            foundProduct.quantity = savedData[id]
            cartArray.push(foundProduct)

        }
    }
    return { cartArray, produtcs };


}