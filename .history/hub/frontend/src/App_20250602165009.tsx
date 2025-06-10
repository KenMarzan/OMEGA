import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Navbar} from './components'

function App() {

    return (
        <div>
            <Navbar />
            <Card title:string="Sample Title" />
        </div>
    );
}

export default App;
