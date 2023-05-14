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
            justifyContent: 'center',
            width: '100%', 
            gap: '1rem'
        }}>
            {
                props.vehicles.map(
                    vehicle => {
                        return (
                            < VehicleCard
                                {...vehicle}
                                key={vehicle.id}
                            />
                        )
                    }
                )
            }
        </div>
    )
}