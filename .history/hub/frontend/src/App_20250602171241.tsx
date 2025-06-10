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
                    Column
                    </div>
                    <div className="col">
                    Column
                    </div>
                    <div className="col">
                    Column
                    </div>
                </div>
            </div>
            <Card/>
        </div>
    );
}

export default App;
