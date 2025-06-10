import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Navbar } from './components';

function App() {
    const array = ['Item 1', 'Item 2', 'Item 3']; // Example array

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    {array.map((item, index) => (
                        <Card key={index} content={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
