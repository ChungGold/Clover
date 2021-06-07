import { Menu } from '../Styles/Styles'
import { MenuItems } from './MenuItems'
import { Card } from './Card'

const createCard = (MenuItems) => {
    return (
        <Card 
            category = {MenuItems.category}
        />
    )
}

export const Food = () => {
    return (
        <Menu>
            {MenuItems.map(createCard)}
        </Menu>
    )
}