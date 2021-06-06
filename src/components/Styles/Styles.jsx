import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    flex-flow: column wrap;
`

const Header = styled.header`
    width: 100%;
    height: 2.5%;

    background-color: lightgray;
    color: #3F3D53;

    border-bottom: #A6F6C9 2px solid;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;

    span {
        display: flex;
    }

    #meters {
        width: 7.5%;
        justify-content: space-evenly;
    }
`

const Nav = styled.nav`
    width: 100%;
    height: 7.5%;

    background-color: white;
    color: gray;

    display: flex;
    justify-content: space-between;
    align-items: center;

`

const Main = styled.main`
    width: 100%;
    height: 90%;

    display: flex;
    flex-flow: wrap row;

    border: #A6F6C9 1px solid;
`

const Order = styled.section`
    width: 25%;
    height: 100%;
    font-size: 1.25rem;

    background-color: white;

    #orderTitle {
        height: 5%;

        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 0.5rem;

        span {
            width: 30%;
            display: flex;
            justify-content: space-evenly;
            color: gray;
            font-size: 1.5rem;
        }
    }

    #currentOrder {
        height: 61.66%;
        padding: 0.5rem;
    }

    #totals {
        height: 13.33%;

        display: flex;
        flex-flow: row wrap;

        div {
            width: 50%;
            height: 100%;

            padding: 0.5rem;

            display: flex;
            flex-flow: column wrap;
            justify-content: space-evenly;
        }

        #price {
            align-items: flex-end;
        }
    }

    #payButtons {
        height: 20%;
        border: 1px solid gray;
        color: gray;

        span {

            width: 100%;
            display: flex;
            justify-content: space-evenly;

            button {
                border: 1px solid gray;
                border-radius: 5px;
                width: 22%;
                height: 40px;
                background-color: white;
                color: gray;
            }
        }

        div {

            width: 100%;
            display: flex;
            justify-content: space-evenly;
            align-items: center;

            button {
                border: 1px solid gray;
                border-radius: 5px;
                width: 47%;
                height: 40px;
                background-color: white;
                color: gray;
            }
        }
    }
`

const Menu = styled.section`
    width: 75%;
    height: 100%;
    border: #A6F6C9 1px solid;

    background-color: white;
`

const Footer = styled.footer`

`

export { Container, Header, Nav, Main, Order, Menu }