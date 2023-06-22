export const array = []

export const addPrices = (expenseDesc,expensePrice) =>{
    try{
        let addPricesA = {
            expenseDesc,
            expensePrice
        }
        array.push(addPricesA)
    }
    catch(err){
        alert(`There is some error in the adding material: ${err}`);
    }
}