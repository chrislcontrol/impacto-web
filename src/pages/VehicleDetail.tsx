import { CSSProperties } from "react"
import ColorTheme from "../ColorTheme"

export default () => {
    const secondaryImageSize = {
        height: '300px',
        width: '450px',
        border: 'solid ' + ColorTheme.item
    }
    const secondaryGridStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '25%',
        alignItems: 'center'

    }

    return (
        <div style={{
            border: 'solid ' + ColorTheme.primary,
            display: 'flex',
            alignItems: 'center'
        }}>
            <img src='/src/assets/img/carro2.jpeg' style={{
                height: '607px',
                width: '960px',
                maxHeight: '100%',
                maxWidth: '50%'
            }} />

            <div style={secondaryGridStyle}>
                <img src='/src/assets/img/carro2.jpeg' style={secondaryImageSize} />
                <img src='/src/assets/img/carro.jpeg' style={secondaryImageSize} />

            </div>

            <div style={secondaryGridStyle}>
                <img src='/src/assets/img/carro.jpeg' style={secondaryImageSize} />
                <img src='/src/assets/img/carro2.jpeg' style={secondaryImageSize} />

            </div>

        </div>

    )
}
