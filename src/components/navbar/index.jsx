import { useContext } from 'react'
import { StartContext } from '../../context/context.js'

function NavBar() {
    
    const value = useContext(StartContext)
    function handleButtonClick() {
        value.updateState('landing')
    }

    return (
        <nav className='d-flex justify-content-between align-items-center py-3 border-bottom'>
            <p className='m-0'>
                Pokemon Database
            </p>
            <button className='btn btn-primary' onClick={handleButtonClick}>EXIT</button>
        </nav>
    )
}

export default NavBar