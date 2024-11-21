import axios from 'axios'
import React from 'react'
import { useState } from 'react'

function useFetch() {
    const [data, setData]=useState(null)
    const [loading, setLoading]= useState(false)

   async function req({url,method ='GET',id = null, body = null}){
    setLoading(true)
    try{
        method = method.toLocaleUpperCase()
        const res = await axios({url,method,
            data: method !== 'GET' ? body:null})
            const resData =res.data?.data || res.data
            switch (method) {
                case 'POST':
                    setData(prev=>[...prev,resData])
                    break;

                case 'PUT':
                case 'PATCH':
                    setData(prev=>prev.map(i => {
                        return i.id===resData.id ? resData: i
                    }))
                 
                    break;

                case 'DELETE':{

                    const userId=parseInt(url.split('/').pop())
                    setData(prev => prev.filter(i=>i.id!== userId))
                }
                    break;

                default:
                    setData(resData)
                    break;
            }
        }catch(error){
            console.log(error)
        }finally{
            setLoading(false)
        }

        
    }
    return [data,req,loading]   
}

export default useFetch
