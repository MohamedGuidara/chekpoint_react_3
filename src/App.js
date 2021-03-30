import logo from './logo.svg';
import './App.css';
import Profile from './Copmponent/Profile';

function App() {
  const t = [
    {
      
      bio: 'Ingenieur',
      name: 'Mohamed',
      profession: `full stack JS`,
    }]
    const affich = (name ) => alert (`${name}`)
  return (
    <div className="App">
    {
      t.map(e=>
         <Profile donnee = {e} affich={affich} >
           
       <h1>22</h1>
       <img src="./logo192.png"  alt="kkk"/> 
           </Profile> 
        )
    }
    </div>
  );
}

export default App;
