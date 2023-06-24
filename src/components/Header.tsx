import { useNavigate } from "react-router-dom";
import ColorTheme from "../ColorTheme";
import urls from "../urls";
import FontSize from "../FontSize";

export function Header() {
    const navigate = useNavigate()

    return (
        <div>
            <div
                style={{
                    textAlign: 'right',
                    padding: '2%',
                    marginRight: '10%',
                    fontSize: FontSize.super,
                    color: ColorTheme.text
                }}
            >
                <strong>Horário de atendimento:</strong> Seg a sex - 8h às 19h | Sáb - 8h às 14h
            </div>

            <div
                onClick={() => navigate(urls.home)}
                style={{
                    justifyContent: 'center',
                    display: 'flex', 
                    cursor: 'pointer', 
                }}
            >
                <img src='/images/logo.jpeg' loading='lazy' style={{
                    width: '100%', 
                    maxWidth: '120vh', 
                    borderRadius: '20px'
                }} />
            </div>
        </div>
    )
}