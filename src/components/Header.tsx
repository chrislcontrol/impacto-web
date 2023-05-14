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
                    padding: '1rem',
                    marginRight: '10%',
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
                }}
            >
                <img src='/images/logo.jpeg' style={{
                    width: '100%', 
                    maxWidth: '120vh'
                }} />
            </div>
        </div>
    )
}