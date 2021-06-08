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
    height: 3%;

    background-color: lightgray;
    color: #3F3D53;

    border-bottom: #6DB689 2px solid;

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
    height: 7%;
    font-size: 1.3rem;

    background-color: white;
    color: gray;

    display: flex;
    justify-content: space-between;
    align-items: center;

    #hamMenu {
        width: 15%;

        display: flex;
        justify-content: space-evenly;
    }

    form {
        width: 30%;

        display: flex;
        justify-content: space-evenly;

        #searchBar {

            display: flex;
            justify-content: space-between;

            input {
                border: none;
                color: lightgray;
            }   
        }
    }
`

const Main = styled.main`
    width: 100%;
    height: 90%;

    display: flex;
    flex-flow: wrap row;

    border-top: lightgray 3px solid;
`

const Order = styled.section`
    width: 25%;
    height: 100%;
    font-size: 1.25rem;

    background-color: white;
    border-right: lightgray 3px solid;

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
        height: 60%;
        padding: 0.5rem;
    }

    #totals {
        height: 15%;

        display: flex;
        flex-flow: row wrap;

        div {
            width: 50%;
            height: 100%;

            padding: 1rem;

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
        color: gray;

        display: flex;
        align-content: space-between;
        flex-flow: column wrap;

        p {
            height: 20%;
            padding-left: 0.5rem;
        }

        span {

            width: 100%;
            height: 33%;

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
            height: 33%;

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

    background-color: white;

    padding: 1rem;

    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-template-rows: 7.5% 7.5% 7.5% 7.5% 7.5% 7.5% 7.5% 7.5% 7.5% 7.5% 7.5%;
    column-gap: 0.5rem;
    row-gap: 1rem;
`

const CategoryCard = styled.section`
    font-size: 1.25rem;

    border: 1px solid lightgray;
    border-left: solid #A6F6C9 1rem;
    padding-left: 1rem;
    border-radius: 10px;
    box-shadow: 2px 4px 3px lightgray;

    display: flex;
    align-items: center;
`

const OrderMenu = styled.section`
    width: 75%;
    height: 100%;

    background-color: white;

    padding: 1rem;

    display: grid;
    grid-template-columns: 20% 20% 20% 20%;
    grid-template-rows: 15% 15% 15% 15% 15% 15% 15%;
    column-gap: 0.5rem;
    row-gap: 1rem;
`

export { Container, Header, Nav, Main, Order, Menu, CategoryCard, OrderMenu }