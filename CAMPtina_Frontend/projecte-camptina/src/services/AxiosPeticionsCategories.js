import { useState, useEffect } from 'react'
import axiosClient from './auth'


export const useAxiosPeticionsCategories = () => {

    const [categories, setCategories] = useState([]);

    const carregarCategories = async () => {
        try {
            const resposta = await axiosClient.get('/categoria/categories');
            setCategories(resposta.data)
        } catch (error) {
            console.log("Error obtenint les categories:", error)
        }
    }

    useEffect(() => {
        carregarCategories()
    }, [])

    return { categories, carregarCategories }
}