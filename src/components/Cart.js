import React from 'react'
import { useSelector ,useDispatch } from 'react-redux'; 
import { RemoveItem } from '../redux/slice';
const Cart = () => {
  const thali=useSelector(state=>state.counter.thali)
  console.log(thali)
  const despatch=useDispatch()
  const Remove=(id)=>{
    despatch(RemoveItem(id))

  }
var sum=0
for(const item of thali){
  sum=sum+item.totalPrice
}
  return (
    <div className='container mx-3'>
<h5 className='text-center'>Your Thali </h5>
<div className='row'>
{
    thali.map((ele,ind)=>(
        <div className='col-sm-12 col-lg-4 mt-3 text-center'>
            <div className="card img_tag " key={ind} >
  <img src={ele.Image} className="card-img-top" alt="..." width="100px" height="200px"/>
  <hr/>
  <div className="card-body">
    <h5 className="card-title">{ele.name}</h5>
    <p className="card-text">Quantity: {ele.quantity}</p>
    <p>Price: ₹{ele.price}</p>
    <p>TotalPrice: ₹ {ele.totalPrice}</p>
    <button onClick={()=>Remove(ind)} className="btn btn-primary">Remove</button>
        
  </div>
  </div>
</div>
    

        
    )
    )
}
<h3 className='text-center text-success mt-5'>Total price of the Thali : ₹ {sum}</h3>
</div>
    </div>
  )
}

export default Cart