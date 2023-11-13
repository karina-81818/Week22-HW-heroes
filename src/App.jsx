
import './style/App.scss'
import users from './data.json'
import Card from "./components/Card/Card.jsx"

function App() {
    return (
      <div>
        <div className='App'>{
        users.map((item, index) => {
             return <Card name = {item.name} universe = {item.universe} alterego = {item.alterego} occupation ={item.occupation} friends={item.friends} superpowers ={item.superpowers} url ={item.url} info={item.info} key = {index}/>;
  })}
        </div>
        
      </div>
    );
  }
  console.log(users)
export default App;
