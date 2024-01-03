export type VehicleImage = {
  id: string,
  is_main: boolean,
  image: string
}
export type Vehicle = {
  id: string,
  images: VehicleImage[],
  tag: string,
  created: string,
  modified: string,
  type: string,
  fipe_code: string,
  brand: string,
  model: string,
  year: number,
  model_year: number,
  fuel: string,
  km: number,
  has_extra_key: boolean,
  has_owner_book: boolean,
  gear: string,
  is_unique_old_owner: boolean,
  last_owner_genre: string,
  has_vng: boolean,
  engine_capacity: number,
  cylinders: number,
  description: string,
  long_description: string,
  old_price: number | null,
  price: number,
  is_trade_accepted: boolean,
  optionals: string[],
  color: string
}


export type RemoteVehicleResponse = {
  count: number,
  limit: number,
  offset: number,
  results: Vehicle[]
}



export type SendContactResponse = {
  name: string,
  phone: {
    number: string
    code: string
  },
  email: string,
  city: string,
  state: string,
  message: string,
  vehicle: string
}
