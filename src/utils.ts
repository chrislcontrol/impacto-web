import { Vehicle } from "./types"

export function translateGear(gear: string) {
    switch (gear) {
        case 'AUTOMATIC':
            return 'AUTOMATICO'
        case 'MANUAL':
            return 'MANUAL'
        default:
            return 'NÃO INFORMADO'
    }
}

export function translateFuel(fuel: string) {
    switch (fuel) {
        case 'FLEX':
            return 'FLEX'
        case 'GASOLINE':
            return 'GASOLINA'
        case 'DIESEL':
            return 'DIESEL'
        case 'ELETRIC':
            return 'ELÉTRICO'
        case 'HYBRID':
            return 'HYBRIDO'
        default:
            return 'NÃO INFORMADO'

    }
}

export function convertNumberToMoney(value: number) {
    if (!value) return null

    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

export function getSelectedVehicle() {
    const stringVehicle = sessionStorage.getItem('selectedVehicle')
    return !!stringVehicle ? JSON.parse(stringVehicle) : {}
}



export function getMainImageOfVehicle(
    { vehicle, defaultImage = '/images/noimage.svg' }: { vehicle: Vehicle, defaultImage?: string }
): string {
    if (!vehicle.images.length) return defaultImage

    const filtered = vehicle.images.filter(imageObject => { return imageObject.is_main })

    if (!!filtered.length) return filtered[0].image

    return vehicle.images[0].image
}