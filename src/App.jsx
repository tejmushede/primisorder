import { useState, useEffect } from 'react'
import './App.css'
import Menu from './Menu'
import OrderDetails from './OrderDetails'
import RecommendedProducts from './RecommendedProducts'
import Loader from './Loader'

function App() {
  
  const [orderSearch, setOrderSearch] = useState("65fae76c0ff63ef14669a6b6");
  const [orderData, setOrderData] = useState({})
  const [dataFetched, setDataFetched] = useState(false); 
  const [loading, setLoading] = useState(false);

  const fetchData = async (orderId) => {
    const response = await fetch(`https://serverprimis.onrender.com/api/data/${orderId}`);
    
    if (response.ok) {
      let { data } = await response.json();
      setOrderData({ ...data });
      setDataFetched(true); 
    } else {
      setOrderData({});
      setDataFetched(false); 
    }
    setLoading(false);
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
      <Menu onSearch={handleSearch}/>

      {(loading || !dataFetched) && <Loader />}

      {dataFetched && !orderData.order && (
        <p className='order-error'>Please provide a valid order ID, e.g. <span>65f190c3ff993bb6fbcde822</span></p>
      )}

      {orderData.order && <OrderDetails data={orderData}/>}
      {orderData.order && <RecommendedProducts data={orderData}/>}

    </main>
    
  )
}

export default App
