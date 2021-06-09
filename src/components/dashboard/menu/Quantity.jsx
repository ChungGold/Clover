import { Quantity } from '../../Styles/Styles'

const quantityBar = ['QTY', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 'CUSTOM'];

const createQuantity = (quantityBar) => {
    return (
        <span>
            {quantityBar}
        </span>
    )
}

export const QuantityPick = () => {
    return (
        <Quantity>
            {quantityBar.map(createQuantity)}
        </Quantity>
    )
}
