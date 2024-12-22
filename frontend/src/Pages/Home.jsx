import React, {useState, useEffect} from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import NewCollection from '../Components/NewCollections/NewCollection'
import Offers from '../Components/Offers/Offers'
import API from '../API';


const Home = () => {
  const [product, setProduct] = useState([])

  useEffect(()=>{
    
    API.get('/product/related').then(res=>{
      setProduct(res.data)
    })
  },[])
  return (
    <div>
      <Hero />
      <Popular product={product} />
      <Offers />
      <NewCollection product={product} />
    </div>
  )
}

export default Home
