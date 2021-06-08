import { Menu } from '../../Styles/Styles'
import { MenuCategories } from '../fooditems/MenuCategories'
import { Card } from './Card'

const createCard = (MenuCategories) => {
    return (
        <Card 
            category = {MenuCategories.category}
        />
    )
}

export const Food = () => {
    return (
        <Menu>
            {MenuCategories.map(createCard)}
        </Menu>
    )
}