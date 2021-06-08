import { Main } from '../Styles/Styles'
import { Transaction } from './Order'
import { Food } from './main/Menu'
import { FoodItems } from './menu/FoodItems'

export const Dashboard = () => {
    return (
        <Main>
            <Transaction />
            <FoodItems />
        </Main>
    )
}