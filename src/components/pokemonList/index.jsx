import { useEffect, useContext, useState} from 'react'
import { fetchAllPokemons } from '../../services/fetch.js'
import { PokemonContext } from '../../context/context.js'
import changeLimitOfUrl from '../../utils/changeLimitOfUrl.js'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'


function PokemonList() {
    const [pokemonNames, setPokemonNames] = useState('')
    const [url, setUrl] = useState(null)
    const [next, setNext] = useState(null)
    const [previous, setPrevious] = useState(null)
    const [limit, setLimit] = useState(10)
    const [spinner, setSpinner] = useState('flex')
    const pokemonValue = useContext(PokemonContext)
    
    useEffect(() => {
        console.log('fires', url);
        let newLimitOfUrl = null
        if (url !== null) {
            newLimitOfUrl = changeLimitOfUrl(url, limit)
        }
        fetchAllPokemons(limit, newLimitOfUrl).then((pokemons)=>{
            setPokemonNames(pokemons.results)
            setNext(pokemons.next)
            setPrevious(pokemons.previous)
            setSpinner('none')
        })
    }, [limit, url])

    function handleClick(name) {
        pokemonValue.updateState(name)
    }
    function handleSelectChange(e) {
        setLimit(e.target.value)
    }

    return (
        <>
        <div className='d-flex justify-content-between align-items-center mb-3'>
            <h5>pokemon list</h5>
            <select className="form-select w-50" value={limit} onChange={handleSelectChange}>
                <option selected value='5'>5 per page</option>
                <option value="10">10 per page</option>
                <option value="50">50 per page</option>
            </select>        
        </div>
        <div style={{height: '220px'}} >
            <div class={`spinner-border text-primary d-${spinner}`} role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <PerfectScrollbar>
                <div style={{height: '220px'}} className={spinner === 'flex' ? 'd-none' : 'd-flex'}>
                    <ul className='list-group w-100'>
                        {
                            pokemonNames !== '' ?
                            pokemonNames.map((pokemon) => {
                                return (
                                    <li key={pokemon.name}className='list-group-item list-group-item-action'
                                    onClick={() => {handleClick(pokemon.name)}}>{pokemon.name}</li>
                                    )
                                }) :
                                <li>Loading...</li>
                            }
                    </ul>
                </div>
            </PerfectScrollbar>
            <div class="btn-group mt-5 mb-3" role="group">
                <button onClick={() => {
                    setUrl(previous)
                    setSpinner('flex')
                }}type="button" class="btn btn-primary me-2">Previous</button>
                <button onClick={() => {
                    setUrl(next)
                    setSpinner('flex')
                }}type="button" class="btn btn-primary">Next</button>
            </div>
        </div>
        </>
    )
}

export default PokemonList