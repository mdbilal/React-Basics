import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Food from './components/Food.jsx';
import Items from './components/Items.jsx';
import Greeting from './components/Greeting.jsx';

function App() {
  return (
    <>
      <Header />
      <Food />
      <Greeting isLoggedIn={true}/>
      <Items />
      <Items quantity={1} name="Apple" body="an Apple a day keeps the doctor away" image="https://picsum.photos/200/300"/>
      <Items quantity={2} name="Banana" body="a Banana a day keeps the doctor away" image="https://picsum.photos/200/300"/>
      <Items quantity={3} name="Pineapple" body="a Pineapple a day keeps the doctor away" image="https://picsum.photos/200/300"/>
      <Items quantity={4} name="Orange" body="an Orange a day keeps the doctor away" image="https://picsum.photos/200/300"/>
      <Footer />
    </>
  );
}

export default App;