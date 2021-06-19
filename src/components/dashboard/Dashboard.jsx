import { Main } from '../Styles/Styles'
import { Transaction } from './Order'
import { Food } from './main/Menu'
import { FoodItems } from './menu/FoodItems'
import { QuantityPick } from './menu/Quantity'

export const Dashboard = () => {
    return (
        <Main>
            <Transaction />
            <Food />
        </Main>
    )
}