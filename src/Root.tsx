import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";
import { Home } from "./pages/Home";
import VehicleDetail from "./pages/VehicleDetail";
import VehicleImgCarousel from "./pages/VehicleImgCarousel";

export function Root() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/detalhes' element={<VehicleDetail />} />
                <Route path='/detalhes/imagens' element={<VehicleImgCarousel />} />
            </Routes>
        </BrowserRouter>
    )
}