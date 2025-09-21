import IngredientsList from './components/IngredientsList'

import Header from './sections/Header'
import MainContent from './sections/MainContent'
import Footer from './sections/Footer'

import FormFilters from './components/FormFilters'
import Title from './components/Title'
import Credits from './components/Credits'

const App = () => {
  return (
    <>
      <Header>
        <Title />
      </Header>
      <FormFilters />
      <MainContent>
        <IngredientsList />
      </MainContent>
      <Footer>
        <Credits />
      </Footer>
    </>
  )
}

export default App
