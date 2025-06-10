import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Navbar} from './components'

function App() {

    return (
        <div>
            
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col">
                    <Card/>
                    </div>
                    <div className="col">
                    <Card/>
                    </div>
                    <div className="col">
                    <Card/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
