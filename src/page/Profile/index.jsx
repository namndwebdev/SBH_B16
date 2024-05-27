import useFetch from '@/customhooks/useFetch'
import {getProfile} from '@/services/profile'
export default function Profile(){
    const {data} = useFetch(getProfile, '')
    return (<>
        Profile
        <h1>{data?.username}</h1>
    </>)
}