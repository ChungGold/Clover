import { Main, Order, Menu } from './Styles/Styles'
import { AiFillPrinter } from 'react-icons/ai'
import { BiDotsVerticalRounded } from 'react-icons/bi'

export const Dashboard = () => {
    return (
        <Main>
            <Order>
                <div id = 'orderTitle'>
                    <h3>Current Order</h3>
                    <span>
                        <AiFillPrinter />
                        <BiDotsVerticalRounded />
                    </span>
                </div>

                <div id = 'currentOrder'>
                    <p>Tap an item to start a new order</p>
                </div>

                <div id = 'totals'>
                    <div>
                        <p>Subtotal</p>
                        <p>Tax</p>
                        <h3>Total</h3>
                    </div>
                    <div id = 'price'>
                        <p>$0.00</p>
                        <p>$0.00</p>
                        <h3>$0.00</h3>
                    </div>
                </div>

                <div id = 'payButtons'>
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
            </Order>
            <Menu />
        </Main>
    )
}