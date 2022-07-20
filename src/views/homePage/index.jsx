import NavBar from "../../components/navbar"
import PokemonList from "../../components/pokemonList"
import PokemonCard from "../../components/pokemonCard"
import { React, useState } from 'react'
import { PokemonContext } from '../../context/context.js'

function HomePage() {
    const [pokemonName, setPokemonName] = useState('')
    const PokemonContextValue = {
        state: pokemonName,
        updateState: setPokemonName
    }
    return (
        <>
        <div className="container pb-5">
            <NavBar />
            <PokemonContext.Provider value={PokemonContextValue}>
                <div className="row mt-5">
                    <div className="col-lg-4">
                        <PokemonList />
                    </div>
                    <div className="col-lg-8 d-flex justify-content-center">
                        <PokemonCard />
                    </div>
                </div>
            </PokemonContext.Provider>
        </div>
        </>
    )
}

export default HomePage