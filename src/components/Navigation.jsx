import { Nav } from './Styles/Styles'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaCashRegister, FaSearch } from 'react-icons/fa'
import { RiAddLine, RiRefreshLine } from 'react-icons/ri'
import { BiDotsVerticalRounded } from 'react-icons/bi'

export const Navigation = () => {
    return (
        <Nav>
            <span>
                <GiHamburgerMenu />
                <FaCashRegister />
                <span>Register</span>
            </span>
            <span>
                <form>
                    <label><FaSearch /></label>
                    <input type="text" placeholder="Scan barcode or search" />
                </form>
                <span>ORDERS</span>
                <RiAddLine />
                <RiRefreshLine />
                <BiDotsVerticalRounded />
            </span>
        </Nav>
    )
}