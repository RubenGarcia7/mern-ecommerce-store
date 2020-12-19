import { BrowserRouter as Router, Route } from 'react-router-dom'
import ProductScreen from './screens/ProductScreen'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import Header from './components/Header'
import Footer from './components/Footer'



const App = () => {
  return (
    
    <Router>
      <Header />
        <main>
          <Container>
           <Route path='/' exact component={HomeScreen} />
           <Route path='/product/:id' component={ProductScreen} />
          </Container>
        </main>
      <Footer />
    </Router>
  );
}

export default App;
