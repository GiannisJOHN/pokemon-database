import { useContext } from 'react'
import { StartContext } from '../../context/context.js'
import pokemonLogo from '../../images/pokemon-23.svg'

function LandingPage() {
    const value = useContext(StartContext)
    function handleButtonClick() {
        value.updateState('home')
    }

    return (
        <>
        <div className="container mt-5 pt-5">
            <div className="row align-items-center flex-column">
                <img style={{width: '100%', maxWidth: '500px', marginTop: '50px'}} src={pokemonLogo} alt="" />
                <h1 className='text-center'>Pokemon Database</h1>
                <p className='text-center w-100'>welcome to pokemon database, here you can find different pokemon and explore their stats</p>
                <div className="col-4 d-flex justify-content-center">
                    <button className='btn btn-outline-primary' onClick={handleButtonClick}>
                        EXPLORE
                    </button>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default LandingPage