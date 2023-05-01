import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";
import { Home } from "./pages/Home";
import urls from "./urls";
import VehicleDetail from "./pages/VehicleDetail";
import VehicleImgCarousel from "./pages/VehicleImgCarousel";
import NotFound from "./pages/NotFound";

export function Root() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={urls.home} element={<Home />} />
                <Route path={urls.detalhes} element={<VehicleDetail />} />
                <Route path={urls.detalhesImagens} element={<VehicleImgCarousel />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}