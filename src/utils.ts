
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
