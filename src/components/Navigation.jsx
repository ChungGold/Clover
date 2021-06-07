import { Nav } from './Styles/Styles'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaCashRegister, FaSearch } from 'react-icons/fa'
import { RiAddLine, RiRefreshLine } from 'react-icons/ri'
import { BiDotsVerticalRounded } from 'react-icons/bi'

export const Navigation = () => {
    return (
        <Nav>
            <span id = 'hamMenu'>
                <GiHamburgerMenu />
                <FaCashRegister />
                <span>Register</span>
            </span>
            <form>
                <span id = 'searchBar'>
                    <label><FaSearch /></label>
                    <input type="text" placeholder="   Scan barcode or search" />
                </span>
                <span>ORDERS</span>
                <RiAddLine />
                <RiRefreshLine />
                <BiDotsVerticalRounded />
            </form>
        </Nav>
    )
}