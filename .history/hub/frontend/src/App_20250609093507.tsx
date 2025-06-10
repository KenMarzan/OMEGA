import './App.css';
import { Card, Navbar } from './components';

function App() {
    const dataArray: Array<{ title: string; content: string; imageUrl: string }> = [
        { title: 'First Item', content: 'This is the description for item 1.', imageUrl: 'https://via.placeholder.com/150/FF5733/FFFFFF?text=Item1' },
        { title: 'Second Item', content: 'More details about item 2 go here.', imageUrl: 'https://via.placeholder.com/150/33FF57/FFFFFF?text=Item2' },
        { title: 'Third Item', content: 'A brief summary for the third item.', imageUrl: 'https://via.placeholder.com/150/3357FF/FFFFFF?text=Item3' },
      ];
    return (
        <div>
      <Navbar /> {/* Your custom Navbar component */}
      <div className="container mt-4">
      </div>
    </div>
    );
}

export default App;
