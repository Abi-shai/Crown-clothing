import { Outlet, Link } from 'react-router-dom'
import { Fragment, useContext } from 'react'
import { UserContext } from '../../contexts/user.context'
// Importing the svg logo as a component
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'


import './Navigation.scss'

const Navigation = () => {

    // Getting out the value of the currentUser logged in
    const { currentUser } = useContext(UserContext)
    console.log(currentUser)

    
    // Using link anchor tag for the router additionnal functionnalities
    return (
        <Fragment>
            <nav className='nav'>
                <Link className='nav_logo' to="/">
                    <CrownLogo />
                </Link>
                <ul className='nav_list'>
                    <Link className='nav_list_element' to="/">Home</Link>
                    <Link className='nav_list_element' to="/auth">Get In</Link>
                    <Link className='nav_list_element' to="/shop">Shop</Link>
                    <Link className='nav_list_element' to="/sneakers">Sneakers</Link>
                </ul>
            </nav>
            <Outlet />
        </Fragment>
    )

}

export default Navigation