import { Navigation, Item, Link } from './Styles'

export const Nav = () => {
    return (
        <header>
            <nav>
                <figure></figure>
                <Navigation>
                    <Item>(844)291-1950</Item>
                    <Item>Connect to Sales</Item>
                    <Item>Your Cart</Item>
                    <Item>Help</Item>
                    <Item>Log In</Item>
                </Navigation>
            </nav>
            <nav>
                <Navigation>
                    <Item>SHOP</Item>
                    <Item>FEATURES</Item>
                    <Item>BUSINESS TYPES</Item>
                    <Item>RESOURCES</Item>
                </Navigation>
            </nav>
        </header>
    )
}