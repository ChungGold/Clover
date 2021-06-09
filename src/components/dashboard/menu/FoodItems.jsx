import { OrderMenu } from '../../Styles/Styles'
import { Appetizers } from '../fooditems/Appetizers'
import { FoodCard } from './FoodCard'
import { QuantityPick } from './Quantity'

const createCard = (Appetizers) => {
    return (
        <FoodCard 
            food = {Appetizers.food}
            price = {Appetizers.price}
        />
    )
}

export const FoodItems = () => {
    return (
        <OrderMenu>
            <QuantityPick />
            <div>
                {Appetizers.map(createCard)}
            </div>
        </OrderMenu>
    )
}
