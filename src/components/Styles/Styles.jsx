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

    background-color: white;
    color: black;

    border-bottom: #A6F6C9 1px solid;

    display: flex;
    justify-content: space-between;
    align-items: center;
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
    border: #A6F6C9 1px solid;

    background-color: white;

    #currentOrder {
        height: 5%;

        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
            width: 30%;
            display: flex;
            justify-content: space-evenly;
            color: gray;
            font-size: 1.5rem;
        }
    }

    div {
        width: 100%;
        height: 33.33%;
        border: #A6F6C9 1px solid;

        div {
            height: 50%;
            width: 100%;

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
                }
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