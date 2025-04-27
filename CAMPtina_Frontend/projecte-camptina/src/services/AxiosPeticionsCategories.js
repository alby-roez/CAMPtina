import { useState, useEffect } from 'react'
import axios from 'axios'

const axiosClient = axios.create({
    baseURL: "http://localhost:8080/api" //import.meta.env.VITE_API_URL /* API */
})

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