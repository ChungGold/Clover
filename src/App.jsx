import { Container } from './components/Styles/Styles'
import { Head } from './components/Header'
import { Navigation } from './components/Navigation'

export const App = () => {
    return (
        <Container>
            <Head />
            <Navigation />
        </Container>
    )
}
