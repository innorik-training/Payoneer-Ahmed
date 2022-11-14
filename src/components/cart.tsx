import React from "react";
import{ useState, useEffect} from 'react';
import prada from '../pics/prada.jpg'
import { MdArrowBack, MdDelete } from 'react-icons/md';
import { useNavigate, useParams } from "react-router-dom";
import { itemsInterface, AddToCart_btn, mainState } from '../Interfaces/interface';
import axios from 'axios';
import { useSelector,useDispatch } from "react-redux";
import { clickedViewedItem, deleteItem } from '../features/Carthook';
import { RootState } from '../app/store';
import Swal from "sweetalert2";





const Cart = ()=>{

    // const viewedItem = useSelector((state)=>{state.clickedViewedItem.item})
    const view = useSelector((state:RootState)=> state.cart.Orderitem)

    // const selec = useSelector()

    const dispatch = useDispatch()

    const {id} = useParams();

    const [order, setOrder] = useState<itemsInterface[]>([])
    const [isclicked, setIsclicked] = useState<boolean>(false)

    

    const test = (item:itemsInterface) => {
            console.log(item);
            
            dispatch(clickedViewedItem(item))
            
            // console.log("This is for the redux watch bellow");
        
            // console.log(view);
        
    }

    const del = (items:itemsInterface[]) => {
        
            console.log(view);
            
            dispatch(deleteItem(items))
            // console.log("This is for the redux watch bellow");
        
            // console.log(view);
        
    }
    

    useEffect(()=>{
        axios.get(`http://localhost:3001/products/${id}`).
        then((response)=>{
            if(response){
                setOrder([response.data])
                //  console.log(response.data);
                
            }
        })
        
        
        
    },[])
   const navigate = useNavigate()

    const [quantity, setQuantity] = useState<number>(1)
    const [price, setPrice] = useState<number>(0)
    const [total, setTotal] = useState<number>(0)

    const TotalPrice = (price:number, add: boolean) : void =>{
        if(add === true){
            let count = quantity + 1
            setTotal(count * price)
        }else{
            let count = quantity - 1
            setTotal(count * price)
        }
    }


    // const handleDelete =(item:itemsInterface, isclicked:boolean)=>{
        
    //     if(isclicked == true){
    //        view(item.filter((item:any)=>{
    //             return item.id != item
    //         }))
    //     }
        

    // }

    // const addTocart = (id:itemsInterface):void =>{
    //     axios.get(`http://localhost:3001/products/${id}`).
    //     then((response)=>{
    //         if(response){
    //             addTocart(response.data)
    //             console.log(response.data);
                
    //         }
    //     })
    // }

   


    return(
        <div className="w-full h-screen  px-10 py-5 flex-col">
            
            {order.map((item)=>{
                return(
                <div className="w-full h-6/6 shadow-2xl flex flex-col md:flex-row">

                <div className="w-full md:w-2/5 h-full bg-white border-r-2 border-black flex flex-row self-center justify-center items-center pb-12">
                        <img className="w-full md:w-3/6 h-full" src={item.url} />


                </div>


                <div className="w-full md:w-3/5 h-full md:flex  list-none justify-between flex flex-col px-8 text-center md:text-left">
                    <h1 className="font-bold text-4xl italic pb-3 md:text-center">Items Details</h1>
                    <li className="text-start text-2xl"><h1 className="text-2xl font-bold justify-center items-center ">Item Name</h1>{item.title}</li>
                    <li className="text-start text-2xl"><h1 className="text-2xl font-bold justify-center items-center">Item Code</h1>AHMED84566{item.id}</li>
                    <li className="text-start text-2xl"><h1 className="text-2xl font-bold justify-center items-center">Item Description</h1>{item.description}</li>
                    <li className="text-start text-2xl"><h1 className="text-2xl font-bold justify-center items-center">Item Price</h1>GHC {item.price}.00</li>
                    <li className="text-end "><button className='m-0 h-10 self-center border-2 pb-4  px-6 bg-gray-400 rounded-r-full hover:bg-sky-500 cursor-pointer' onClick={()=>{test(item)}} type="button">Add to cart</button></li>
                </div>

            </div>
                )
            })}

            <br/>
            <li onClick={()=>{navigate(-1)}} className="w-full  hidden md:flex bg-red-400  cursor-pointer"><MdArrowBack   size={25} /><h1 className="text-xl italic text-left">Back</h1></li>

            <div className="w-full md:h-4/6 hidden md:block justify-between  flex-col overflow-y-scroll">

                <div className="">
                 <table className="w-full ">
                    <thead className="w-full h-14 ">
                        <th>Image</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                        <th>Delete</th>
                    </thead>

                    <tbody>
                        {view.map((items:any)=>{
                            console.log(items);

                            return(                                
                        <tr>
                            <td><li className=" list-none self-center justify-center content-center"><img className="w-20  " src={items.url} /></li></td>
                            <td>{items.title}</td>
                            <td>{items.description}</td>
                            <td>
                                <div className="flex flex-row w-full rounded-2xl outline-none border-none">
                                    <div className="w-2/6 h-12  border-2 bg-slate-400 "> <button onClick={()=>{setQuantity(quantity + 1 ); TotalPrice(items.price, true)}} type="button" className="w-full text-2xl self-center">+</button></div>
                                    <div className="w-2/6 h-full  self-center"> <h1>{quantity}</h1> </div>
                                    <div className="w-2/6 h-12 border-2 bg-slate-400"><button onClick={()=>{setQuantity(quantity - 1);TotalPrice(items.price, false)}} className="w-full text-2xl self-center">-</button></div>
                                </div>
                            </td>
                            <td><div onChange={()=>{setPrice(items.price)}}>{items.price}</div></td>
                            <td>{total}</td>
                            <td><li  onClick={()=>{del(items)}} className=" w-full list-none  flex justify-center "><MdDelete className="hover:bg-red-600 rounded-full cursor-pointer" color="#000 "  size={45}/></li></td>
                        </tr>
                            )
                        })}
                        
                    </tbody>
                 </table>
                </div>

                <div className="text-end">
                    <button className='m-0 h-14 self-center border-2  px-6 bg-gray-400 rounded-r-full hover:bg-sky-500 cursor-pointer'>Checkout</button>
                </div>

            </div>

        </div>
    );
}

export default Cart;