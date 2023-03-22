import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Cards from './Cards';
import data from './data';

function App() {

  const cards = data.map((item)=>{
    return (
      <Cards
        // badge={item.badge}
        // place={item.place}
        // rating={item.rating}
        // description={item.description}
        // author={item.author}
        item = {item}
        />
    )
  })

  return (
    <div>
      <Navbar/>
      <Hero/>
      <section className='Cards-Section'>
        {cards}
      </section>
    </div>
  );
}

export default App;
