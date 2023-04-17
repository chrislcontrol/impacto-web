import { Vehicle } from "../types";
import { VehicleCard } from "./VehicleCard";

type VehicleProps = {
    vehicles: Vehicle[]
}

export function VehicleGrid(props: VehicleProps) {
    return (
        <div className='vehicle-grid' style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignContent: 'left',
            margin: '5% 2.2%'
        }}>
            {
                props.vehicles.map(
                    vehicle => {
                        return (
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
                        )
                    }
                )
            }
        </div>
    )
}