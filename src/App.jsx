import { Container } from './components/Styles/Styles'
import { Head } from './components/Header'
import { Navigation } from './components/Navigation'
import { Dashboard } from './components/dashboard/Dashboard'

export const App = () => {
    return (
        <Container>
            <Head />
            <Navigation />
            <Dashboard />
        </Container>
    )
}
