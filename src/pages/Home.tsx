import { Header } from "../components/Header"
import { VehicleGrid } from "../components/VehicleGrid"
import { listVehicles } from "../providers/vehicles"
import { Vehicle } from "../types"

export function Home() {

    const vehicles: Vehicle[] = listVehicles().results

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
        </div>
    )
}