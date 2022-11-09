import { useEffect, useState } from "react";
import Layout from "../components/layout";
import { useAppContext } from "../store/store";
import {useParams} from "react-router-dom"


export default function View(){
    const[item,setItem]=useState(null)
    const params=useParams()
    const store=useAppContext()

    useEffect(()=>{
        const book=store.getItem(params.bookId)
        setItem(book)
    },[])

    if(!item){
        return <div>Item not found</div> 
    }

    return <Layout>
        <h2>{item?.title}</h2>
        <div>{item?.cover ? <img src={item?.cover} width="400"/> : "" }</div>
        <div>{item?.author}</div>
        <div>{item?.intro}</div>
        <div>{item?.completed ? 'leido': 'por terminar'}</div>
        <div>{item?.review}</div>
    </Layout> 
}