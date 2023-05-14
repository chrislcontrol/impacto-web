import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";
import { Home } from "./pages/Home";
import NotFound from "./pages/NotFound";
import VehicleDetail from "./pages/VehicleDetail";
import VehicleImgCarousel from "./pages/VehicleImgCarousel";
import urls from "./urls";

export function Root() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={urls.home} element={<Home />} />
                <Route path={urls.detalhes} element={<VehicleDetail />} />
                <Route path={urls.detalhesImagens} element={<VehicleImgCarousel />} />
                {/* <Route path={urls.admin.home} element={<AdminHome />} />
                <Route path={urls.admin.addVehicle} element={<AdminAddVehicle />} /> */}
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}