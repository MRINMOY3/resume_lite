// import logo from './logo.svg';
import './App.css';
import Goals from './COMPONENTSS/Goals';
import d1 from './COMPONENTSS/Goals';
import PropGoal from './COMPONENTSS/PropGoal'
import MainNav from './COMPONENTSS/MainNav';
import Navbar from './COMPONENTSS/Navbar';



import Left from './COMPONENTSS/Left';
import Mid from './COMPONENTSS/Mid';
import Right from './COMPONENTSS/Right'
import Bottom from './COMPONENTSS/Bottom';


import Splin from './COMPONENTSS/Splin';
import Mx from './COMPONENTSS/MusicPlayer.js/Mx';




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


const App = () =>{

  const cgoals = [
     {id:'cg1', text:'Music Listings'}, 
     {id:'cg2', text:'Finish the task early '},
     {id:'cg3', text:'Finish the task early '}
    
    ];




  return (
<div>
    <div className='z1 flex'>


        <MainNav/>
        <Left/>
        <Mid goal_listings={cgoals}/>
        <Right/>

        <Mx/>


        







        



    </div>      






</div>

    
    
    )



}

export default App;
