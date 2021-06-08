import { CategoryCard } from '../../Styles/Styles'

export const Card = props => {
    return(
        <CategoryCard>
            <p>{props.category}</p>
        </CategoryCard>
    )
}