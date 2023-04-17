
export type Vehicle = {
  id: string,
  model: string,
  brand: string,
  price: number,
  description: string,
  longDescription?: string,
  image: string, 
  year: number,
  yearModel: number, 
  oldPrice: number, 
  km: number
}


export type RemoteVehicleResponse = {
  results: Vehicle[]
}
