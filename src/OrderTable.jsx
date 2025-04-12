function OrderTable ({orders}){
    
    debugger
    console.log(orders);

    return(
        <div>
           <ul>
               
           { orders.map(item => {
                return <li> Order ID {item.orderId}, Last Updated:  {item.lastUpdated},
                  Order Status :  {item.orderStatus}, Order Type :  {item.orderType}, Product Id :  {item.productId}, Quantity :  {item.quantity}, Userid :  {item.userId} </li>
              }) }
           </ul>
        </div>
    )

}

export default OrderTable;