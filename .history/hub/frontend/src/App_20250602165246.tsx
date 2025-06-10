import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Navbar} from './components'

function App() {

    return (
        <div>
            <Navbar />
            <Card title={renderTitle("Sample Title")} />
        </div>
    );
}

export default App;
