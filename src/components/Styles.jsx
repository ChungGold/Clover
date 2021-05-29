import styled from 'styled-components'

const Navigation = styled.ul`
    list-style-type: none;

    display: flex;
    justify-content: space-evenly;
`

const Item = styled.li`
    display: inline;
`

const Link = styled.a`
    color: grey;

    :visited {
        color: grey;
    }

    :hover {
        color: black;
    }
`

export { Navigation, Item, Link }