export function getItemCount (cartItems){

    return cartItems.reduce((count,cartItems) => cartItems.quantity+count,0
    
    
    )
    
}