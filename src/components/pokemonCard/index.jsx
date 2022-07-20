import { useEffect, useContext, useState} from 'react'
import { fetchPokemon } from '../../services/fetch.js'
import { PokemonContext } from '../../context/context.js'

function PokemonInformation (name, height, weight, img, types) {
    this.name = name
    this.height = `${height} cm`
    this.weight = `${weight} kg`
    this.img = img
    this.types = types
}

function PokemonCard() {
    const [pokemon, setPokemon] = useState('')
    const [spinner, setSpinner] = useState('flex')
    const pokemonValue = useContext(PokemonContext)

    useEffect(() => {
        setSpinner('flex')
        fetchPokemon(pokemonValue.state).then((pokemon)=>{
            let pokemonInformation = new PokemonInformation(
                pokemon.name,
                pokemon.height,
                pokemon.weight,
                pokemon.sprites.other.dream_world.front_default,
                pokemon.types
            )
            setPokemon(pokemonInformation) 
            setSpinner('none')
        })
    }, [pokemonValue.state])
    console.log(pokemon);
    return (
        <>
        <div className='w-100' style={{overflow: 'hidden'}}>
            <div className="card p-5 d-flex justify-content-center">
                <div className="card-header">
                    <h6 className='m-0'>pokemon card</h6>
                </div>
                <p className={pokemon === '' ? 'd-flex' : 'd-none'}>choose a pokemon from the list</p>
                <div className={`spinner-border text-primary d-${spinner}`} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className={spinner === 'flex' ? 'd-none' : 'd-flex  flex-column'}>
                    { pokemon.img !== undefined ?
                    <img style={{width: '180px'}} className='my-3 animate__animated animate__backInRight' src={pokemon.img} alt="" /> :
                    ''
                    }
                    <h1 className='animate__animated animate__fadeIn animate__delay-1s'>{pokemon.name}</h1>
                    <ul>
                        <li className='animate__animated animate__fadeIn animate__delay-1s'>{pokemon.height}</li>
                        <li className='animate__animated animate__fadeIn animate__delay-1s'>{pokemon.weight}</li>
                        {
                            pokemon.types?.map((types, index) => {
                                return <li key={types.type.name} className='animate__animated animate__fadeIn animate__delay-1s'>type {index+1} : {types.type.name}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default PokemonCard