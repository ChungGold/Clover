import { Nav } from './Styles/Styles'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaCashRegister, FaSearch } from 'react-icons/fa'
import { RiAddLine, RiRefreshLine } from 'react-icons/ri'
import { BiDotsVerticalRounded } from 'react-icons/bi'

export const Navigation = () => {
    return (
        <Nav>
            <GiHamburgerMenu />
            <FaCashRegister />
            <span>Register</span>
            <span><FaSearch /> Scan barcode or search</span>
            <span>ORDERS</span>
            <RiAddLine />
            <RiRefreshLine />
            <BiDotsVerticalRounded />
        </Nav>
    )
}