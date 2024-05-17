import {Link} from 'react-router-dom'
export default function Header(){
    return (
        <>
            <div>
                <Link to="/">Trang chu</Link>
                <Link to="/login">Dang nhap</Link>
            </div>
        </>
    )
}