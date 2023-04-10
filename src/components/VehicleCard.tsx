import { Card } from "react-bootstrap";
import { Vehicle } from "../types";


type VehicleCardProps = {
    imageB64: string, 
    vehicle: Vehicle,
}


export function VehicleCard(props: VehicleCardProps) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>
                    {props.vehicle.brand} {props.vehicle.model}
                </Card.Title>

                <Card.Text>
                    {props.vehicle.description}
                </Card.Text>
                <Card.Text>
                    {props.vehicle.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}