import { CalendarMonth, ColorLens, LocalGasStation } from '@mui/icons-material';
import CheckIcon from '@mui/icons-material/Check';
import EditRoadIcon from '@mui/icons-material/EditRoad';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { CSSProperties, useEffect, useState } from "react";
import { generatePath, useNavigate, useParams } from 'react-router-dom';
import ColorTheme from "../ColorTheme";
import FontSize from "../FontSize";
import Footer from '../components/Footer';
import { Header } from '../components/Header';
import Loading from '../components/Loading';
import { sessionStorageKeys } from '../constants';
import { retrieveVehicle } from '../providers/vehicles';
import { Vehicle } from '../types';
import urls from '../urls';
import { convertNumberToMoney, getSelectedVehicle, translateFuel, translateGear } from '../utils';
import WhatsappFixed from '../components/WhatsappFixed';
import { ImageList, ImageListItem } from '@mui/material';

export type UrlPath = {
    vehicleId: string
}

export default () => {
    const [vehicle, setVehicle] = useState<Vehicle | undefined>(getSelectedVehicle())
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const pathVehicleId = useParams<UrlPath>().vehicleId

    if (!pathVehicleId) {
        throw 'invalid vehicleId.'
    }

    const navigate = useNavigate()


    function listImagesByIsMain(isMain: boolean, vehicle: Vehicle) {
        return !!vehicle.images.length ? vehicle.images.filter(
            img => { return img.is_main === isMain }
        ) : []
    }

    useEffect(() => {
        if (!!isLoading) return
        if (!vehicle) return
        if (pathVehicleId != vehicle.id) {
            setIsLoading(true)
            retrieveVehicle(pathVehicleId)
                .then(
                    remoteVehicle => {
                        setVehicle(remoteVehicle)
                        sessionStorage.setItem(sessionStorageKeys.selectedVehicle, JSON.stringify(vehicle))
                    }
                )
                .catch(error => {
                    console.log(error)
                    setVehicle(undefined)
                }

                )
                .finally(() => setIsLoading(false))
        }
    }, [])

    if (isLoading === true) return <div><Loading /></div>
    if (!vehicle) return <div>Failed to load content.</div>

    const filteredVehiclesImagesByMain = listImagesByIsMain(true, vehicle)
    const mainVehicleImage = !!filteredVehiclesImagesByMain.length ? filteredVehiclesImagesByMain[0].image : ''
    const otherImages = listImagesByIsMain(false, vehicle).map(item => item.image)

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            justifyContent: 'center',
            color: ColorTheme.text,
            fontSize: FontSize.title,
            background: ColorTheme.item,
            textAlign: 'left', 
            borderRight: 'solid ' + ColorTheme.primary, 
            borderLeft: 'solid ' + ColorTheme.primary, 
            borderWidth: 'thin'
            
        }}>
            <Header />

            <div>

                <ImageList
                    sx={{ width: '100%', height: '60vh' }}
                    variant="standard"
                    cols={4}
                    style={{ cursor: 'pointer' }}

                >
                    <ImageListItem key={mainVehicleImage} cols={2} rows={2}>
                        <img src={mainVehicleImage}
                            onClick={
                                () => {
                                    navigate(generatePath(urls.detalhesImagens, { vehicleId: vehicle.id }))
                                }
                            } />
                    </ImageListItem>
                    {
                        otherImages.map(img => {
                            return (
                                <ImageListItem key={mainVehicleImage} cols={1} rows={1}>
                                    <img src={img}
                                        onClick={
                                            () => {
                                                navigate(generatePath(urls.detalhesImagens, { vehicleId: vehicle.id }))
                                            }
                                        } />
                                </ImageListItem>
                            )
                        })
                    }

                </ImageList>

                <div className='other-elements' style={{
                    display: 'flex',
                    flexDirection: 'column',
                    rowGap: '20px',
                    width: '100%',
                }}>

                    <div className='boxes' style={{
                        color: ColorTheme.primary,
                        display: 'flex',
                        justifyContent: 'space-around',
                        fontSize: FontSize.super,
                        padding: '3% 0',
                        border: 'solid ' + ColorTheme.primary,
                        borderWidth: 'thin',
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

                    <div className='vehicle-info' style={{
                        color: ColorTheme.text,
                        display: 'flex',
                        textAlign: 'left',
                        justifyContent: 'left',
                        fontSize: FontSize.super,
                        background: ColorTheme.item,
                        flexWrap: 'wrap',
                        width: '80%',
                        rowGap: '20px',
                        padding: '0 10%',
                    }}>

                        <div className='vehicle-model-and-description' style={{
                            display: 'flex',
                            flexDirection: 'column',
                            textAlign: 'left',
                        }}>
                            <div className='model-and-brand' style={{ fontWeight: 'bold', fontSize: FontSize.super }}>
                                {vehicle.brand} {vehicle.model}
                            </div>
                            <div className='description' style={{ fontSize: FontSize.grand }}>
                                {vehicle.description}
                            </div>

                            <div className='values' style={{ display: 'flex', flexWrap: 'wrap', marginTop: '10%', gap: '25px' }}>
                                <div className='old-value'>
                                    de <strong
                                        style={{
                                            color: ColorTheme.badText,
                                            textDecoration: 'line-through'
                                        }}>{convertNumberToMoney(vehicle.old_price || vehicle.price)}
                                    </strong>
                                </div>
                                <div className='new-value'>por <strong
                                    style={{ color: ColorTheme.goodText }}>{convertNumberToMoney(vehicle.price)}</strong>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className='description-box' style={{
                        borderTop: 'solid ' + ColorTheme.primary,
                        borderWidth: 'thin',
                        alignContent: 'left',
                        textAlign: 'left',
                        alignItems: 'left',
                        flexWrap: 'wrap',
                        width: '80%',
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '5% 10%'

                    }}>
                        <p className='description-box-title' style={{ fontSize: FontSize.grand, fontWeight: 'bold' }}>
                            DESCRIÇÃO
                        </p>
                        <div className='description-box-text'>
                            {vehicle.long_description || 'Here long description bla bla bla'}
                        </div>

                    </div>

                    <div className='data-sheet'
                        style={{
                            borderTop: 'solid ' + ColorTheme.primary,
                            borderWidth: 'thin',
                            paddingLeft: "10%"

                        }}>
                        <p style={{ fontSize: FontSize.grand }}>FICHA TÉCNICA</p>
                        <div className='data-sheet-itens' style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'left',
                            textAlign: 'left',
                            gap: '10%',
                            width: '100%',
                            fontSize: FontSize.title,
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
                            padding: '0 10%',
                            borderTop: 'solid ' + ColorTheme.primary,
                            borderBottom: 'solid ' + ColorTheme.primary,
                            borderWidth: 'thin',
                            display: 'flex',
                            flexDirection: 'column'

                        }}>
                        <p className='optionals-title' style={{ fontSize: FontSize.grand, fontWeight: 'bold' }}>OPCIONAIS</p>
                        <div className='data-sheet-itens' style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'left',
                            width: '100%',
                            fontSize: FontSize.main,
                            gap: '10px'
                        }}>
                            {
                                vehicle.optionals.map(
                                    optional => {
                                        return (
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '0.2rem',
                                                    flexWrap: 'wrap',
                                                    width: '30%'
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
            <WhatsappFixed />


        </div>


    )
}
