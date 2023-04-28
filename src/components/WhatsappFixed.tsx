import { WhatsApp } from "@mui/icons-material"
import { phoneNumbers } from "../constants"

export default () => {
    return <WhatsApp
        onClick={() => window.open('https://api.whatsapp.com/send?phone=55' + phoneNumbers[0], '_blank')}
        style={{
            color: 'white',
            position: 'fixed',
            right: '100px',
            bottom: '150px',
            scale: '4',
            background: 'green',
            borderRadius: '10px 10px 10px 6px',
            boxShadow: '0px 2px 10px green',
            cursor: 'pointer'
        }} />
}