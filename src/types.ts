export type Vehicle = {
    model: string, 
    brand: string, 
    price: number, 
    description: string
}


export type RemoteVehicleResponse = {
  results: Vehicle[]
}
