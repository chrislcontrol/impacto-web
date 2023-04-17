



import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { Home } from "./pages/Home";
import VehicleDetail from "./pages/VehicleDetail";

export function Root() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/detalhes' element={<VehicleDetail />} />
            </Routes>
        </BrowserRouter>
    )
}