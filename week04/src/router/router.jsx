import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Content from '../components/Content';
import Main from '../pages/Main';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/search" element={<Main />}>
                    <Route path=":username" elemnet={<Content />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
