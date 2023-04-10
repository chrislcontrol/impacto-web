import { listVehicles } from "./providers/vehicles"
import { VehicleCard } from "./components/VehicleCard"


function App() {
  const vehicles = listVehicles().results

  return (
    <div>{
      vehicles.map(vehicle => {
        return <VehicleCard
          vehicle={{
            model: vehicle.model,
            brand: vehicle.brand,
            price: vehicle.price,
            description: vehicle.description
          }}
          imageB64="image"
        />
      })
    }
    </div>
  )
}

export default App
