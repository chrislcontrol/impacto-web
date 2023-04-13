import { Grid } from "@mui/material"
import { listVehicles } from "../providers/vehicles"
import { Vehicle } from "../types"
import { VehicleCard } from "../components/VehicleCard"

export function Home() {

    const vehicles: Vehicle[] = listVehicles().results

    return (
        <Grid height='100rem' container spacing={0.8} style={{ padding: '1rem' }}>
            {
                vehicles.map(vehicle => {
                    return (
                        <Grid item xs={4}>
                            < VehicleCard
                                model={vehicle.model}
                                brand={vehicle.brand}
                                price={vehicle.price}
                                image={vehicle.image}
                                description={vehicle.description}
                                year={vehicle.year}
                                yearModel={vehicle.yearModel}
                                km={vehicle.km}
                                oldPrice={vehicle.oldPrice}
                            />
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}