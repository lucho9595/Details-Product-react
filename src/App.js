import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Details } from './components/Details';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

function App() {
    return (
        <>
            <Routes >
                <Route path='/' element={< Home />}> </Route>
                <Route path='/details' element={<Details />}> </Route>
                <Route path='/*' element={<NotFound />} > </Route>
            </Routes>
        </>
    );
};

export default App;