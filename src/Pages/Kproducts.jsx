import React from 'react'
import './Wproducts.css'
import Productcard from './Productcard'
import Footer from '../Components/Footer/Footer'
import { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {kidsproduct, mensproduct} from '../redux/action'
import Kidsproductcard from './Kidsproductcard'
const Kproducts = () => {
    const [pfilter,setpfilter]=useState([])
    console.log(pfilter)
    const data=useSelector((store)=>store.kids)
    console.log(data)
    const loading=useSelector((store)=>store.loading)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(kidsproduct())
    },[])

    const handlechange=(e)=>{
        let val=e.target.value
        if(val==='all'){
            setpfilter([])
        }else{
        const pricefilter=data.filter((el)=>Number(el.price)<=Number(val))
        setpfilter(pricefilter)
        }
    }
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
                    <Kidsproductcard key={el.id} item={el} />
                ))
            }
            {
                pfilter.length>0&&pfilter.map((el)=>(
                    <Kidsproductcard key={el.id} item={el} />
                ))
            }
        </div>
        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default Kproducts

