import Header from './components/Header.js';
import Connect from './components/Connect.js';
import Partners from './components/Partners.js';
import ShowMe from './components/ShowMe.js';
import HowItWorks from './components/HowItWorks.js';
import './res/style.css'

function App() {
  return (
    <div>
      <Header></Header>
      <Connect></Connect>
      <HowItWorks></HowItWorks>
      <Partners></Partners>
      <ShowMe></ShowMe>
    </div>
  );
}

export default App;