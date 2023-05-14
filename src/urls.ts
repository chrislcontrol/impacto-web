const home = '/'
const detalhes = '/detalhes/:vehicleId'
const detalhesImagens = detalhes + '/imagens'
const admin = '/admin'


export default {
    home: home,
    detalhes: detalhes, 
    detalhesImagens: detalhesImagens, 
    admin: {
        home: admin,
        addVehicle: admin + '/adicionar-veiculo'

    }
}