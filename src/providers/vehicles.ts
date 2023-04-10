import { RemoteVehicleResponse } from "../types";

export function listVehicles(): RemoteVehicleResponse {
    return {
        "results": [
            {
                "brand": "string",
                "model": "string",
                "description": "string",
                "price": 100000.0,
            }
        ]
    }
}