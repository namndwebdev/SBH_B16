import useFetch from '@/customhooks/useFetch'
import {getOrders} from '@/services/order'
import { Table, InputNumber } from 'antd'
import {Link} from 'react-router-dom'
import {currency} from '@/helper/format'
export default function Order(){
    const {data} = useFetch(getOrders,'')
    const orders = data?.data
    const columns = [{
        title: 'ID',
        key: 'id',
        dataIndex: 'id'
    },{
        title: 'Ten SP',
        key: 'name',
        render: (item)=>{
            return <Link to={`/sanpham/${item?.slug}`}>{item?.name}</Link>
        }
    }, {
        title: 'Gia/SP',
        key: 'price',
        render: (item)=>{ return currency(item?.price)}
    }, {
        title: 'So luong',
        key: 'quantity',
        render: (item)=>{
            return <>
                <InputNumber 
                    defaultValue={item.quantity} 
                />
            </>
        }
    },{
        title: 'Thanh tien',
        key: 'total',
        render: (item)=>{
            return currency(item.totalPrice)
        }
    }]

    return (
        <>
            {orders?.map(item=>{
                let dataSource = item.attributes.items.map(row=>{
                    return {
                        id: row.id,
                        ...row.product.data.attributes,
                        quantity: row.quantity,
                        totalPrice: row.totalPrice
                    }
                })

                return <div key={item.id}>
                    <h1>name: {item.customerName}</h1>
                    <h1>address: {item.address}</h1>
                    <h1>date: {item.date}</h1>
                    <Table 
                        dataSource={dataSource}
                        columns={columns}
                        rowKey="id" 
                    ></Table>
                </div>
            })}
        </>
    )
}