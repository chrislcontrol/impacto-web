import { CircularProgress } from "@mui/material"
import ColorTheme from "../ColorTheme"

export default () => {
    return <div style={{
        display: 'flex', 
        justifyContent: 'center', 
        marginTop: '25%', 
        scale: '3'
    }}>
        <CircularProgress style={{ color: ColorTheme.primary }} />
    </div>
}