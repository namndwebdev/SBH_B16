import { useDispatch, useSelector } from "react-redux"
import {Button, InputNumber, Table} from 'antd'
import {Link, useNavigate} from 'react-router-dom'
import {currency} from '@/helper/format'
import {updateProductCart, clearCart} from '@/redux/cart'
import {createOrder} from '@/services/order'
export default function Cart(){
    const user = useSelector(stateTong => stateTong.auth.user)
    const dataListProduct = useSelector(stateTong => stateTong.cart.listProduct)
    const nav = useNavigate()
    const listProduct = dataListProduct.map(item=>{
        
        return {
            ...item,
            key : item.id,
            product : item.id,
            totalPrice : (Number(item.quantity) * Number(item.price))/1000,
            discount : 0
        }
    })
    const dispatch = useDispatch()
    const handChangeQuantity = (id, quanity)=>{
        dispatch(updateProductCart({
            id: id,
            quantity: quanity
        }))
    }
    const columns = [{
        title: 'ID',
        key: 'id',
        dataIndex: 'id'
    },{
        title: 'Ten SP',
        key: 'name',
        render: (item)=>{
            return <Link to={`/sanpham/${item.slug}`}>{item.name}</Link>
        }
    }, {
        title: 'Gia/SP',
        key: 'price',
        render: (item)=>{ return currency(item.price)}
    }, {
        title: 'So luong',
        key: 'quantity',
        render: (item)=>{
            return <>
                <InputNumber 
                    defaultValue={item.quantity} 
                    min={1} 
                    max={item.quantityAvailable}
                    onChange={(value)=>{
                        handChangeQuantity(item.id, value)
                    }}
                />
                <span>
                   Tồn kho: {item.quantityAvailable}
                </span>
            </>
        }
    },{
        title: 'Thanh tien',
        key: 'total',
        render: (item)=>{
            return currency(item.quantity * item.price)
        }
    }]

    let totalMoney = listProduct.reduce((total, item)=>{
        return total + (item.price * item.quantity)
    }, 0)

    const handleCheckout = ()=>{
        createOrder({
            idUser: user.id + "",
            address: user.address || "",
            totalOrderPrice: totalMoney/1000,
            status: 'new',
            date: '2024-05-27',
            items: listProduct
        }).then(res=>{
            dispatch(clearCart())
            nav('/')
        })
    }

    return (<>
       <Table 
        dataSource={listProduct}
        columns={columns}
        rowKey="id" 
       ></Table>
       
       <h1>Tong tien : {currency(totalMoney)}</h1>
       <Button onClick={handleCheckout}>Đặt hàng</Button>
    </>)
}