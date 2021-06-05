import { Container, Header } from './components/Styles'
import { AiFillPrinter } from 'react-icons/ai'
import { MdBatteryChargingFull, MdSignalWifi4Bar } from 'react-icons/md'

export const App = () => {
    return (
        <Container>
            <Header>
                <AiFillPrinter />
                <MdBatteryChargingFull />
                <MdSignalWifi4Bar />
            </Header>
        </Container>
    )
}
