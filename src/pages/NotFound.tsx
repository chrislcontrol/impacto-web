import urls from "../urls"
import { Home } from "./Home"

export default () => {
    window.history.replaceState(null, "Impacto Automoveis", urls.home)
    return <Home />
}