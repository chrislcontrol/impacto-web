import { LocationOn, WhatsApp } from "@mui/icons-material"
import ColorTheme from "../ColorTheme"
import FontSize from "../FontSize"
import { AddressMap } from "./AddressMap"
import HyperLink from "./HyperLink"
import { phoneNumbers } from "../constants"

export default () => {
    const styles = {
        infoBoxRowStyle: {
            display: 'flex',
            fontSize: FontSize.main + 3,
            justifyContent: 'left',
            alignItems: 'center',
            gap: '2%'
        }
    }

    return (
        <div className='footer' style={{
            flexDirection: 'row',
            display: 'flex',
            justifyContent: 'space-between',
            gap: '1%',
            borderTop: `solid ${ColorTheme.primary}`,
            paddingTop: '1%',
            backgroundColor: ColorTheme.item
        }}>
            <div className='footer.address' style={{
                width: '50%',
                height: '15%'
            }}>
                <AddressMap />
            </div>
            <div className='footer.data' style={{
                color: ColorTheme.text, display: 'flex',
                flexDirection: 'column',
                margin: '0 10% 0 0'
            }}>
                <div style={{ fontSize: FontSize.super, color: ColorTheme.primary }}><h1>Impacto Automoveis</h1></div>
                <p style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '2rem' }}>
                    <div style={styles.infoBoxRowStyle}>
                        <LocationOn style={{ color: 'red', fontSize: FontSize.main * 2 }} />
                        <HyperLink href='https://www.google.com/maps?ll=-27.597961,
                    -48.677437&z=18&t=m&hl=pt-BR&gl=BR&mapclient=embed&q=R.+Francisco+Ant%C3%B4nio+da+Silva,
                    +20+-+Sert%C3%A3o+do+Maruim+S%C3%A3o+Jos%C3%A9+-+SC+88122-010'
                            text="R. Francisco Antônio da Silva, 20 - Sertão do Maruim, São José - SC, 88122-010" />
                    </div>

                    {phoneNumbers.map(
                        phone => {
                            return (
                                <div style={styles.infoBoxRowStyle}>
                                    <WhatsApp style={{ color: 'green', fontSize: FontSize.main * 2 }} />
                                    <HyperLink
                                        href={'https://api.whatsapp.com/send?phone=55' + phone}
                                        text={`(${phone.substring(0, 2)})${phone.substring(2, 7)}-${phone.substring(7)}`} />
                                </div>
                            )
                        }
                    )}
                </p>
            </div>
        </div>
    )
}