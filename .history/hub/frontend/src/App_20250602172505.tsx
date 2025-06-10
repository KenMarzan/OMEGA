import './App.css';
import { Card, Navbar } from './components';

function App() {
    const array:string = ['Item 1', 'Item 2', 'Item 3']; // Example array

    return (
        <div>
            <Navbar />
            <div className="container">
                {array.map((item, index) => (
                    <div key={index} className="row">
                        <Card content={item} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
