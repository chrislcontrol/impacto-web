import { generatePath, useNavigate, useParams } from "react-router-dom";
import ColorTheme from "../ColorTheme";
import Carousel from "../components/Carousel"
import CancelIcon from '@mui/icons-material/Cancel';
import { Vehicle } from "../types";
import { getSelectedVehicle } from "../utils";
import urls from "../urls";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { sessionStorageKeys } from "../constants";
import { retrieveVehicle } from "../providers/vehicles";
import { UrlPath } from "./VehicleDetail";

export default () => {
    const navigate = useNavigate()
    const [vehicle, setVehicle] = useState<Vehicle | undefined>(getSelectedVehicle())
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const pathVehicleId = useParams<UrlPath>().vehicleId

    if (!pathVehicleId) {
        throw 'invalid vehicleId.'
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
    }, [vehicle])

    if (isLoading === true) return <div><Loading /></div>
    if (!vehicle) return <div>Failed to load content.</div>
    
    if (!Object.keys(vehicle)) {
        navigate(-1)
    }
    
    const slides = vehicle.images.map(imgObj => imgObj.image)
    return (
        <div className='carousel-container' style={{
            display: 'flex',
            flexDirection: 'column',
            color: ColorTheme.text,
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                padding: '50px 300px 100px 0'
            }}>
                <CancelIcon
                    onClick={() => {
                        const path = generatePath(urls.detalhes, { vehicleId: vehicle.id });
                        navigate(path)
                    }}
                    style={{
                        fontSize: 60,
                        cursor: 'pointer'
                    }} />
            </div>
            <Carousel slides={slides} />
        </div>
    );
}