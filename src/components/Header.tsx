import { useNavigate } from "react-router-dom";
import ColorTheme from "../ColorTheme";
import urls from "../urls";

export function Header() {
    const navigate = useNavigate()

    return (
        <div>
            <div
                style={{
                    textAlign: 'right',
                    padding: '1rem 1rem 1rem 1rem',
                    fontSize: 20,
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
                    margin: '3rem 0'
                }}
            >
                <img src='/images/logo.jpeg' style={{
                    width: '60%'
                }} />
            </div>
        </div>
    )
}