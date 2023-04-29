import { RemoteVehicleResponse } from "../types";


export async function listVehicles(): Promise<RemoteVehicleResponse> {
    const url = import.meta.env.VITE_BACKEND_URL
    return fetch(`${url}/api/v1/vehicles`)
        .then(response => {
            if (response.ok) { return response.json() }
            throw response
        })
        .catch(error => {
            console.log(error)
            throw error
        })
}
