import { Main } from '../Styles/Styles'
import { Transaction } from './Order'
import { Food } from './Menu'

export const Dashboard = () => {
    return (
        <Main>
            <Transaction />
            <Food />
        </Main>
    )
}