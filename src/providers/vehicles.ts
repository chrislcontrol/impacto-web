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


export async function retrieveVehicle(vehicleId: string) {
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    return fetch(`${backendUrl}/api/v1/vehicles/${vehicleId}`).then(rsp => {
        if (!!rsp.ok) return rsp.json()
        throw rsp
    }).catch(error => {throw error})
}
