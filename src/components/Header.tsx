import ColorTheme from "../ColorTheme";
import { phoneNumbers } from "../constants";

export function Header() {
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

            <a
                href={'https://api.whatsapp.com/send?phone=55' + phoneNumbers[0]}
                target="_blank"
                style={{
                    justifyContent: 'center',
                    display: 'flex'
                }}
            >
                <img
                    src='/src/assets/img/logo.jpeg'
                    style={{
                        width: '100%',
                        maxWidth: '85rem',
                        maxHeight: '13rem'
                    }}
                />
            </a>
        </div>
    )
}