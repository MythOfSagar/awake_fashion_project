import React from 'react'
import axios from 'axios'
import './Wproducts.css'
import Productcard from './Productcard'
import Footer from '../Components/Footer/Footer'
import { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {womensproduct} from '../redux/action'
const Wproducts = () => {
    // const [price,setprice]=useState('')
    const [pfilter,setpfilter]=useState([])
    console.log(pfilter)
    // console.log(price)
    const data=useSelector((store)=>store.womens)
    const loading=useSelector((store)=>store.loading)
    const dispatch=useDispatch()
    // console.log(store)
    useEffect(()=>{
        dispatch(womensproduct())
    },[])

    const handlechange=(e)=>{
        let val=e.target.value
        // setprice(val)
        if(val==='all'){
            setpfilter([])
        }else{
        const pricefilter=data.filter((el)=>Number(el.price)<=Number(val))
        setpfilter(pricefilter)
        }
    }
    // const filteralldata=(val)=>{
    //     console.log(pfilter)
       
    // }

    // if(loading){
    //     return(
    //         // <div style={{height:'600px',display:'flex',justifyContent:'center',alignItems:'center'}}>
    //             <img style={{width:'100px',margin:'auto'}} src="https://c.tenor.com/0iK9a1WkT40AAAAC/loading-white.gif" alt="" />
    //         // </div>
    //     )
    // }
  return (
    <div>
        <div className='filters'>
            <select name="price" onChange={handlechange}  >
                <option value="">Select by price</option>
                <option value="all">All</option>
                <option value="500">below 500</option>
                <option value="1000">below 1000</option>
                <option value="2000">below 2000</option>
            </select>
        </div>
        <div className='cards'>
            {
                pfilter.length<=0&&data.map((el)=>(
                    <Productcard key={el.id} image={el.images[0]} price={el.price} off={el.off_price} title={el.title} />
                ))
            }
            {
                pfilter.length>0&&pfilter.map((el)=>(
                    <Productcard key={el.id} image={el.images[0]} price={el.price} off={el.off_price} title={el.title} />
                ))
            }
        </div>
        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default Wproducts


       // const [product,setproduct]=useState([])
    //  const womensproduct=()=>{
    //     let res=axios.get('https://fashion-database-api.vercel.app/Women')
    //     .then((res)=>{
    //         console.log(res.data)
    //         setproduct(res.data)
    //     })
    //     .catch((e)=>{
    //         console.log(e)
    //     })
    // }
    // useEffect(()=>{
    //     womensproduct()
    // },[])
