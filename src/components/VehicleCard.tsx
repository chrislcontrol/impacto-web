import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SpeedIcon from '@mui/icons-material/Speed';
import { Button } from "@mui/material";
import { useState } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';
import ColorTheme from "../ColorTheme";
import FontSize from "../FontSize";
import { Vehicle } from "../types";
import { convertNumberToMoney } from '../utils';
import { sessionStorageKeys } from '../constants';
import urls from '../urls';

export function VehicleCard(vehicle: Vehicle) {
  const price = convertNumberToMoney(vehicle.price)
  const oldPrice = !!vehicle.old_price ? convertNumberToMoney(vehicle.old_price) : price

  const shadow = {
    default: `0px 5px 10px ${ColorTheme.primary}`,
    focus: `2px 3px 10px 1px ${ColorTheme.primary}`,
  }
  const [currentShadow, setCurrentShadow] = useState(shadow.default)
  const navigate = useNavigate()
  const navigateToDetails = () => {
    sessionStorage.setItem(sessionStorageKeys.selectedVehicle, JSON.stringify(vehicle))
    navigate(generatePath(urls.detalhes, {vehicleId: vehicle.id}))
  }

  return (
    <div
      onMouseEnter={() => { setCurrentShadow(shadow.focus) }}
      onMouseLeave={() => { setCurrentShadow(shadow.default) }}
      style={{
        display: 'flex',
        alignItems: 'center',
        borderRadius: '0.5rem',
        background: ColorTheme.item,
        color: ColorTheme.text,
        fontSize: FontSize.main,
        boxShadow: currentShadow,
        width: '32%',
        height: '30%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: '0.5%',
      }}>
      <div className='vehicle-img' style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '50%'
      }}>
        <img
          style={{
            borderRadius: '0.5rem 0.5rem 0rem 0rem',
            cursor: 'pointer',
            minWidth: '20rem',
            maxWidth: '36.45rem',
            minHeight: '25rem',
            maxHeight: '25rem',
          }}
          src={!!vehicle.images.length ? vehicle.images.filter(imageObject => { return imageObject.is_main })[0].image : ''}
          alt={`${vehicle.brand} ${vehicle.model}`}
          onClick={navigateToDetails}
        />
      </div>

      <div className='vehicle-data' style={{
        display: 'flex',
        flexDirection: 'column',
        height: '50%',
        width: '100%'
      }}>
        <div className='vehicle-data-item' style={{
          margin: '0 2%',
          display: 'flex',
          flexDirection: 'column'
        }}>

          <h2>{vehicle.brand} <span style={{ color: ColorTheme.primary }}>{vehicle.model}</span></h2>
          <p>{vehicle.description}</p>

          <div className='year-and-km' style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'left',
            gap: '10%'
          }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <CalendarMonthIcon />
              <p>{vehicle.year} / {vehicle.model_year}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <SpeedIcon />
              <p>{vehicle.km} km</p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', textAlign: 'center', alignItems: 'center' }}>
            <p>
              de <span> </span>
              <span style={{ color: ColorTheme.badText, fontSize: FontSize.main, marginRight: '1rem', textDecoration: 'line-through' }}>
                {oldPrice}
              </span>
            </p>
            <p>por <span style={{ color: ColorTheme.goodText, fontSize: FontSize.super }}>{price}</span></p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '0.9rem 0rem' }}>
            <Button
              variant="outlined"
              style={{ borderRadius: '0.5rem', fontSize: FontSize.main, color: ColorTheme.primary, border: 'solid ' + ColorTheme.primary }}
              onClick={navigateToDetails}
            >
              Ver mais
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}