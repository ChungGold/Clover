import { useState } from "react";
import { Header } from './Styles/Styles'
import { AiFillPrinter } from 'react-icons/ai'
import { RiBattery2ChargeFill, RiSignalWifiFill } from 'react-icons/ri'

export const Head = () => {
    const now = new Date().toLocaleTimeString();

    const [clock, setTime] = useState(now);
    
    setInterval(() => {
        let time = new Date().toLocaleTimeString();
        setTime(time);
    }, 1000);

    return (
        <Header>
            <AiFillPrinter />
            <RiBattery2ChargeFill />
            <RiSignalWifiFill />
            {clock}
        </Header>
    )
}