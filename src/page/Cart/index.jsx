import { useSelector } from "react-redux"
import {Table} from 'antd'
import {Link} from 'react-router-dom'
import {currency} from '@/helper/format'
export default function Cart(){
    const listProduct = useSelector(stateTong => stateTong.cart.listProduct)
    // {id, name, slug, price,  quantity}
 
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
        dataIndex: 'quantity'
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
    return (<>
       <Table 
        dataSource={listProduct}
        columns={columns}
       ></Table>
       
       <h1>Tong tien : {currency(totalMoney)}</h1>
    </>)
}