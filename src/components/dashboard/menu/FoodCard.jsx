import { ItemCard } from '../../Styles/Styles'

export const FoodCard = props => {
    return(
        <ItemCard>
            <p>{props.food}</p>
            <p id ='price'>{props.price}</p>
        </ItemCard>
    )
}