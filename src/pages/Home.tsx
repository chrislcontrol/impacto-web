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
        <div>
            <Header />
            <div className='container' style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <div className='vehicle-grid'>
                    <VehicleGrid vehicles={vehicles} />
                </div>

            </div>
            <Footer />
            <WhatsappFixed />
        </div>
    )
}