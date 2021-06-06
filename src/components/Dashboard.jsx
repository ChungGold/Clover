import { Main, Order, Menu } from './Styles/Styles'
import { AiFillPrinter } from 'react-icons/ai'
import { BiDotsVerticalRounded } from 'react-icons/bi'

export const Dashboard = () => {
    return (
        <Main>
            <Order>
                <div id = 'currentOrder'>
                    <h1>Current Order</h1>
                    <span>
                        <AiFillPrinter />
                        <BiDotsVerticalRounded />
                    </span>
                </div>
                <div>
                    <p>Tap an item to start a new order</p>
                </div>
                <div>
                    <div>
                        <p>Subtotal</p>
                        <p>Tax</p>
                        <p>Total</p>
                    </div>
                    <div>
                        <p>Fast Pay With Cash</p>
                        <span>
                            <button>$0.00</button>
                            <button>$1.00</button>
                            <button>$5.00</button>
                            <button>Custom</button>
                        </span>
                        <div>
                            <button>Save</button>
                            <button>Pay</button>
                        </div>
                    </div>
                </div>
            </Order>
            <Menu />
        </Main>
    )
}