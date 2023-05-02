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
            justifyContent: 'left',
            alignContent: 'left',
            margin: '0 2.2% 5% 2.2%'
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