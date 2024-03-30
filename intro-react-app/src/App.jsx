import './App.css'
import dog from './assets/dog.jpg'

function App() {
  return (
    <body>
    <h1 class="idk">My First HTML Page</h1>
    <h3>Hello, my name is Vivi!</h3>
    <h4>I'm a junior studying Data Science at UC Berkeley.</h4>
    <a href="https://joinforge.co/" target="_blank"> Check out Forge's Website</a>
    <p>Some hobbies of mine:
        <ul> 
        <li>Crocheting</li>
        <li>Baking</li>
        <li>Golfing</li>
        </ul>
    </p>
    <p id="doggo">Here's a bonus pic of a random cute dog!</p>
    <img src={dog} width="300" height="400"></img>
    </body>
  )
}

export default App;
