import { useNavigate } from "react-router-dom";
import ColorTheme from "../ColorTheme";
import Carousel from "../components/Carousel"
import CancelIcon from '@mui/icons-material/Cancel';

export default () => {
    const navigate = useNavigate()
    const slides = [
        '/src/assets/img/carro.jpeg',
        '/src/assets/img/carro2.jpeg'
    ]
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