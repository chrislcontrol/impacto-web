import { CalendarMonth, ColorLens, LocalGasStation } from '@mui/icons-material';
import CheckIcon from '@mui/icons-material/Check';
import EditRoadIcon from '@mui/icons-material/EditRoad';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { useEffect, useState } from "react";
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
import { Button, ImageList, ImageListItem, TextField } from '@mui/material';
import { sendContact } from '../providers/contacts';
import ReactPhoneInput from 'react-phone-input-material-ui';
import { toast } from 'react-toastify';
import React from 'react';


export type UrlPath = {
    vehicleId: string
}


export default () => {
    const [vehicle, setVehicle] = useState<Vehicle | undefined>(getSelectedVehicle())
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [name, setName] = useState<string | null>()
    const [phone, setPhone] = useState<string | null>()
    const [email, setEmail] = useState<string | null>(null)
    const [city, setCity] = useState<string | null>()
    const [state, setState] = useState<string | null>()
    const [message, setMessage] = useState<string | null>()
    const [nameError, setNameError] = useState<boolean>(false)
    const [phoneError, setPhoneError] = useState<boolean>(false)
    const [cityError, setCityError] = useState<boolean>(false)
    const [stateError, setStateError] = useState<boolean>(false)
    const [messageError, setMessageError] = useState<boolean>(false)
    const pathVehicleId = useParams<UrlPath>().vehicleId

    const nameInput = React.useRef();


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
                            loading='lazy'
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

                    <p style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '80%',
                        fontSize: FontSize.title,
                        alignItems: 'left',
                        gap: '5px',
                        padding: '0 10%',
                    }}>Gostou deste veículo? Entre em contato:</p>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '90%',
                        fontSize: FontSize.main,
                        alignItems: 'left',
                        gap: '10px',
                        paddingLeft: '10%',
                        paddingBottom: '2%'
                    }}>
                        <TextField
                            value={name}
                            required
                            id="outlined-required"
                            error={nameError}
                            helperText={!nameError ? null : 'Campo obrigatório'}
                            label="Nome"
                            style={{ width: '80%', background: 'white' }}
                            onChange={(event) => {
                                if (!!event.target.value) setNameError(false);
                                setName(event.target.value)
                            }}
                        />
                        <ReactPhoneInput
                            value={phone}
                            onChange={
                                (value) => {
                                    setPhone(value);
                                    if (!!phone) setPhoneError(false);
                                }
                            }
                            component={TextField}
                            label='Fone'
                            placeholder='(99) 99999-9999'
                            country={'br'}
                            autoFormat
                            enableAreaCodes
                            defaultMask={'(..) .....-....'}
                            alwaysDefaultMask
                            disableCountryCode
                            defaultErrorMessage={'Campo obrigatório'}
                            containerStyle={{ width: '80%', background: 'white' }}
                            inputProps={{
                                error: phoneError,
                                helperText: !phoneError ? null : 'Campo obrigatório', 
                                required: true
                            }}
                        />
                        <TextField
                            value={email}
                            required={false}
                            id="outlined-required"
                            label="Email"
                            style={{ width: '80%', background: 'white' }}
                            onChange={
                                (event) => {
                                    setEmail(event.target.value);
                                }
                            }
                        />
                        <TextField
                            value={city}
                            required
                            id="outlined-required"
                            label="Cidade"
                            error={cityError}
                            helperText={!cityError ? null : 'Campo obrigatório'}
                            style={{ width: '80%', background: 'white' }}
                            onChange={
                                (event) => {
                                    setCity(event.target.value);
                                    if (!!city) setCityError(false);
                                }
                            }
                        />
                        <TextField
                            value={state}
                            required
                            id="outlined-required"
                            label="UF"
                            error={stateError}
                            helperText={!stateError ? null : 'Campo obrigatório'}
                            style={{ width: '80%', background: 'white' }}
                            onChange={
                                (event) => {
                                    setState(event.target.value);
                                    if (!!state) setStateError(false);
                                }
                            }
                        />
                        <TextField
                            value={message}
                            id="filled-multiline-static"
                            label="Mensagem"
                            required
                            error={messageError}
                            helperText={!messageError ? null : 'Campo obrigatório'}
                            multiline
                            maxRows={4}
                            variant="filled"
                            style={{ width: '80%', background: 'white' }}
                            onChange={
                                (event) => {
                                    setMessage(event.target.value);
                                    if (!!message) setMessageError(false);
                                }
                            }
                        />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'left', padding: '0% 0% 3% 10%', height: '5rem' }}>
                        <Button
                            variant='outlined'
                            style={{
                                width: '30%',
                                height: '100%',
                                color: ColorTheme.primary,
                                border: 'solid ' + ColorTheme.primary
                            }}
                            onClick={() => {
                                if (!name) {
                                    setNameError(true);
                                }
                                if (!phone) {
                                    setPhoneError(true);
                                }
                                if (!city) {
                                    setCityError(true);
                                }
                                if (!state) {
                                    setStateError(true);
                                }
                                if (!message) {
                                    setMessageError(true);
                                }

                                if (!name || !phone || !city || !state || !message) return

                                if (phone.length < 11) {
                                    toast.error('Número de telefone incompleto.');
                                    setPhoneError(true);
                                    return
                                }

                                const contact = {
                                    "name": name,
                                    "phone": {
                                        "code": phone.slice(0, 2),
                                        "number": phone.slice(2)
                                    },
                                    "email": email,
                                    "city": city,
                                    "state": state,
                                    "message": message,
                                    "vehicle": vehicle.id
                                }
                                sendContact(contact)

                                setName('');
                                setPhone(undefined);
                                setEmail('');
                                setCity('');
                                setState('');
                                setMessage('');

                                toast.success('Contato enviado com sucesso.')
                            }}
                        >

                            Enviar
                        </Button>
                    </div>

                </div>
            </div>

            <Footer />
            <WhatsappFixed />


        </div>


    )
}
