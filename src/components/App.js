import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import GlobalStyle from '../GlobalStyle';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import HabitsPage from './HabitsPage';
import TodayPage from './TodayPage';
import HistoryPage from './HistoryPage';

function App(){

    const [token, setToken] = useState(null)

    return(
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<LoginPage saveToken={(token) => setToken(token)} />} />
                <Route path="/cadastro" element={<SignUpPage />} />
                <Route path="/habitos" element={<HabitsPage token={token} />} />
                <Route path="/hoje" element={<TodayPage />} />
                <Route path="/historico" element={<HistoryPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;