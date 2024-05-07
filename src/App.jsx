import { useState, useEffect } from 'react'
import './App.css'
import Menu from './Menu'
import OrderDetails from './OrderDetails'
import RecommendedProducts from './RecommendedProducts'
// import data from './data';

function App() {
  // orderSearch = search input from search button
  const [orderSearch, setOrderSearch] = useState("65fae76c0ff63ef14669a6b6");
  const [orderData, setOrderData] = useState({})

  const fetchData = async (orderId) => {
    const response = await fetch(`https://serverprimis.onrender.com/api/data/${orderId}`);
    
    if (response.ok) {
      let {data} = await response.json()
      setOrderData({...data})
    }
  }

  useEffect(() => {
    if (orderSearch.length > 0){
      fetchData(orderSearch)
    }
    
  }, [orderSearch])

  const handleSearch = (searchTerm) => {
    setOrderSearch(searchTerm);
  };
  
  return (

    <main>
      {console.log(orderData)}
      {console.log(orderSearch)}
      <Menu onSearch={handleSearch}/>
      {orderData.order && <OrderDetails data={orderData}/>}
      {orderData.order && <RecommendedProducts data={orderData}/>}
    </main>
    
  )
}

export default App
