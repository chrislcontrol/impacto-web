import { CalendarMonth, ColorLens, LocalGasStation } from '@mui/icons-material';
import CheckIcon from '@mui/icons-material/Check';
import EditRoadIcon from '@mui/icons-material/EditRoad';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { CSSProperties } from "react";
import { useNavigate } from 'react-router-dom';
import ColorTheme from "../ColorTheme";
import FontSize from "../FontSize";
import Footer from '../components/Footer';
import { Header } from '../components/Header';
import { Vehicle } from '../types';
import { convertNumberToMoney, getSelectedVehicle, translateFuel, translateGear } from '../utils';

export default () => {
    const navigate = useNavigate()
    const vehicle: Vehicle = getSelectedVehicle()

    if (!Object.keys(vehicle)) { return navigate(-1) }

    function listImagesByIsMain(isMain: boolean) {
        return !!vehicle.images.length ? vehicle.images.filter(
            img => { return img.is_main === isMain }
        ) : []
    }

    const filteredVehiclesImagesByMain = listImagesByIsMain(true)

    const mainVehicleImage = !!filteredVehiclesImagesByMain.length ? filteredVehiclesImagesByMain[0].image : ''
    const otherImages = listImagesByIsMain(false).map(item => item.image)

    const secondaryimgSize = {
        height: '300px',
        width: '450px',
        border: 'solid ' + ColorTheme.item
    }
    const secondaryGridStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '25%',
        alignItems: 'center'

    }

    return (
        <div>
            <Header />

            <div
                className='container'
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    color: ColorTheme.text,
                    fontSize: FontSize.title,
                    background: ColorTheme.item
                }}>

                <div style={{
                    border: 'solid ' + ColorTheme.primary,
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <img className='extend-fluid-md' src={mainVehicleImage} style={{
                        height: '607px',
                        width: '960px',
                        maxHeight: '100%',
                        maxWidth: '50%',
                    }} />

                    <div style={secondaryGridStyle}>
                        <img src={otherImages[0] || ""} style={secondaryimgSize} />
                        <img src={otherImages[1] || ""} style={secondaryimgSize} />

                    </div>

                    <div style={secondaryGridStyle}>
                        <img src={otherImages[2] || ""} style={secondaryimgSize} />
                        <img src={otherImages[3] || ""} style={{
                            ...secondaryimgSize,
                            filter: 'brightness(25%)',
                            cursor: 'pointer'
                        }} />
                        <div className='text-over-img'
                            onClick={() => navigate('/detalhes/imagens')}
                            style={{
                                position: 'absolute',
                                bottom: '150px',
                                fontSize: FontSize.grand,
                                cursor: 'pointer',
                                fontWeight: 'bold'
                            }}>
                            Ver todas as fotos
                        </div>

                    </div>

                </div>
                <div className='other-elements'>

                    <div className='boxes' style={{
                        color: ColorTheme.primary,
                        display: 'flex',
                        justifyContent: 'space-around',
                        fontSize: FontSize.super,
                        padding: '1rem 0',
                        border: 'solid ' + ColorTheme.primary,
                        borderWidth: 'thin',
                        borderSpacing: '10rem',
                        fontWeight: 'bold',
                        alignItems: 'center',
                        background: ColorTheme.item
                    }}>
                        <div className="left-box">
                            <SwapHorizIcon /> {!!vehicle.is_trade_accepted ? 'Aceita troca' : 'Não aceita troca'}
                        </div>
                        <div className="right-box">
                            <RequestQuoteIcon /> Financia
                        </div>
                    </div>

                    <div className='vehicle-info'
                        style={{
                            color: ColorTheme.text,
                            display: 'flex',
                            textAlign: 'left',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            gap: '3rem',
                            padding: '2rem 10rem',
                            fontSize: FontSize.super,
                            background: ColorTheme.item,
                        }}>

                        <div className='vehicle-model-and-description' style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            marginRight: '5rem',
                            gap: '0.5rem'
                        }}>
                            <div className='model-and-brand' style={{ fontWeight: 'bold' }}>
                                {vehicle.brand} {vehicle.model}
                            </div>
                            <div className='description'>
                                {vehicle.description}
                            </div>
                        </div>

                        <div className='old-value'>
                            de <strong
                                style={{
                                    color: ColorTheme.badText,
                                    textDecoration: 'line-through'
                                }}>{convertNumberToMoney(vehicle.old_price || vehicle.price)}
                            </strong>
                        </div>
                        <div className='new-value'>por
                            <strong style={{ color: ColorTheme.goodText }}>{convertNumberToMoney(vehicle.price)}</strong>
                        </div>

                    </div>

                    <div className='description-box' style={{
                        padding: '2rem 10rem 4rem 10rem',
                        borderTop: 'solid ' + ColorTheme.primary,
                        borderBottom: 'solid ' + ColorTheme.primary,
                        borderWidth: 'thin',
                        justifyContent: 'center',
                        alignItems: 'center'

                    }}>
                        <p className='description-box-title' style={{ display: 'flex', fontSize: FontSize.grand }}>
                            DESCRIÇÃO
                        </p>
                        <div className='description-box-text' style={{ display: 'flex', width: '70%', }}>
                            {vehicle.long_description || ''}
                        </div>

                    </div>

                    <div className='data-sheet'
                        style={{
                            padding: '2rem 10rem',
                            borderTop: 'solid ' + ColorTheme.primary,
                            borderBottom: 'solid ' + ColorTheme.primary,
                            borderWidth: 'thin'

                        }}>
                        <p style={{ fontSize: FontSize.grand }}>FICHA TÉCNICA</p>
                        <div className='data-sheet-itens' style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'space-between',
                            gap: '30%',
                            width: '60%',
                            fontSize: FontSize.title
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}><SettingsSuggestIcon />
                                <p>{translateGear(vehicle.gear)}</p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}><CalendarMonth />
                                <p>{vehicle.year}/{vehicle.model_year}</p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}><EditRoadIcon />
                                <p>{vehicle.km} km</p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}><ColorLens />
                                <p>{vehicle.color || 'NÃO INFORMADO'}</p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}><LocalGasStation />
                                <p>{translateFuel(vehicle.fuel)}</p>
                            </div>

                        </div>

                    </div>

                    <div className='optionals'
                        style={{
                            padding: '2rem 10rem',
                            borderTop: 'solid ' + ColorTheme.primary,
                            borderBottom: 'solid ' + ColorTheme.primary,
                            borderWidth: 'thin'

                        }}>
                        <p className='opcionals-title' style={{ fontSize: FontSize.grand }}>OPCIONAIS</p>
                        <div className='data-sheet-itens' style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'space-between',
                            gap: '10%',
                            width: '60%',
                            fontSize: FontSize.title
                        }}>
                            {
                                vehicle.optionals.map(
                                    optional => {
                                        return (
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '0.2rem'
                                                }}><CheckIcon />
                                                <p>{optional}</p>
                                            </div>
                                        )
                                    }
                                )
                            }
                        </div>

                    </div>
                </div>
            </div>

            <Footer />


        </div>


    )
}
