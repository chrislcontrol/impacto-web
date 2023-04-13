import ColorTheme from "../ColorTheme";

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
                <strong>Horário de atendimento:</strong> Seg a sex - 8h às 19h | Sáb - 8h às 13h
            </div>

            <div style={{ textAlign: 'center' }}>
                <img src='/src/assets/img/logo.jpeg'
                    style={{
                        width: '100%',
                        maxWidth: '85rem', 
                        maxHeight: '13rem'
                    }}
                />
            </div>
        </div>
    )
}