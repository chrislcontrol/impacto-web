import { useNavigate } from "react-router-dom";
import ColorTheme from "../ColorTheme";
import Carousel from "../components/Carousel"
import CancelIcon from '@mui/icons-material/Cancel';
import { Vehicle } from "../types";
import { getSelectedVehicle } from "../utils";

export default () => {
    const navigate = useNavigate()
    const vehicle: Vehicle = getSelectedVehicle()
    if (!Object.keys(vehicle)) { return navigate(-1) }
    
    const slides = vehicle.images.map(imgObj => imgObj.image)
    return (
        <div className='carousel-container' style={{
            display: 'flex',
            flexDirection: 'column',
            color: ColorTheme.text,
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                padding: '50px 300px 100px 0'
            }}>
                <CancelIcon
                    onClick={() => { navigate(-1) }}
                    style={{
                        fontSize: 60,
                        cursor: 'pointer'
                    }} />
            </div>
            <Carousel slides={slides} />
        </div>
    );
}