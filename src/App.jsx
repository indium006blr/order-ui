import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import OrderTable from './OrderTable'
import { orderURL } from './Constants'

function App() {

  const [count, setCount] = useState(0)

  const [orders, setOrders] = useState([])

  useEffect(() => {
      const fetchOrder = async() => {
        try{
          const res =  await axios.get(orderURL + '/listAllOrders');  
          debugger;     
          console.log(res.data);
          setOrders(res.data); 
        }catch(error){
          console.error(error)
        }
      }

      fetchOrder();

  })

    const handleBuy = async() =>{
        //debugger;
      const orderDetails = {
        "productId":143,
        "ordertype":"buy",
        "uantity":5,
        "userId":1
    }
    
      try{
        const res = await axios.post(orderURL+"/placeOrder", {orderDetails},  
          { 
            headers: {
            "Access-Control-Allow-Origin": "*",
          }
        });
        console.log(res.data);
      }catch(error){
        console.error(error)
      }
       
  }

  const handleSell = () =>{
  //  debugger
    axios.post('http://localhost:8080', {orderDetails})
    .then(response=>{
      
    })
  }

  return (
    <>  
      <div className="card">
      
        <button onClick={() => handleBuy()}>
          BUY
        </button>

        <button onClick={() => handleSell()}>
          SELL
        </button>

      
        {orders.length > 0 ? <OrderTable orders = {orders}/> : null } 
      </div>
    </>
  )
}


export default App;
