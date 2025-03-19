import { useEffect } from 'react'
import { Link } from '../Link'

export default function SearchPage ({ routeParams }) {
    useEffect(() => {
        document.title = `Has buscado ${routeParams.query}`
        //fetch(`htpps://api.abcdefgh.com/search/${routeParams.query}`)
    }, [])
    return (
        <Link to='/'>Has buscado {routeParams.query}</Link>
    )
}