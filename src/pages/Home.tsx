import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import { Header } from "../components/Header"
import { VehicleGrid } from "../components/VehicleGrid"
import { listVehicles } from "../providers/vehicles"
import { Vehicle } from "../types"
import WhatsappFixed from "../components/WhatsappFixed"

export function Home() {
    const [vehicles, setVehicles] = useState<Vehicle[]>([])

    useEffect(() => {
        listVehicles()
            .then(
                vehiclesJson => { setVehicles(vehiclesJson.results) }
            )
    }, []

    )

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column', 
            justifyContent: 'space-between', 
            gap: '10vh'
        }}>
            <Header />
            <div style={{
                display: 'flex',
                flexDirection: 'column', 
                justifyContent: 'center',
                width: '80%', 
                marginLeft: '10%'
            }}>
                <VehicleGrid vehicles={vehicles} />
            </div>

            <Footer />
            <WhatsappFixed />
        </div>
    )
}