import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Food from './components/Food.jsx';
import Items from './components/Items.jsx';
import Greeting from './components/Greeting.jsx';
import ArrayMap from './components/ArrayMap.jsx';
import ObjectMap from './components/ObjectMap.jsx';
import ReusableList from './components/ReuseableList.jsx';
import Click from './components/Click.jsx';
import State from './components/State.jsx';
import Counter from './components/Counter.jsx';
import Change from './components/Change.jsx';

function App() {

  const fruits = [
    {id: 1, name:'apple', calories:121},
    {id: 2, name:'banana', calories:54},
    {id: 3, name:'grapes', calories:80},
    {id: 4, name:'pineapple', calories: 131}
  ]

  const vagetables = [
    {id: 5, name:'carrot', calories:111},
    {id: 6, name:'potato', calories:152},
    {id: 7, name:'cabbage', calories:47},
    {id: 8, name:'onion', calories:30},
  ]

  return (
    <>
      <Header />
      <Food />
      <Greeting isLoggedIn={true}/>
      <Click />
      <Counter />
      <Change />
      <State />
      <ArrayMap />
      <ObjectMap />
      <hr />
      <h1>Resuable List</h1>
      <hr />
      { fruits && <ReusableList items={fruits} category="fruits"/> }
      { vagetables && <ReusableList items={vagetables} category="vagetables"/> }
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