import './App.css';
import Axis from './components/Axis';
import IncrementCount from './components/IncrementCount';
// import SearchForImg from './components/SearchForImg';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="App">
      <IncrementCount/>
      <Axis/>
      {/* <SearchForImg/> */}
      <UserProfile/>
    </div>
  );
}

export default App;
