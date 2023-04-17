import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SpeedIcon from '@mui/icons-material/Speed';
import { Button } from "@mui/material";
import ColorTheme from "../ColorTheme";
import FontSize from "../FontSize";
import { Vehicle } from "../types";
import { useState } from 'react';

export function VehicleCard(vehicle: Vehicle) {
  const oldPrice = vehicle.oldPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const price = vehicle.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  const shadow = {
    default: `0px 5px 10px ${ColorTheme.primary}`,
    focus: `20px 20px 100px 1px ${ColorTheme.primary}`,
  }
  const [currentShadow, setCurrentShadow] = useState(shadow.default)

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
          src={vehicle.image}
          alt={`${vehicle.brand} ${vehicle.model}`}
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
              <p>{vehicle.year} / {vehicle.yearModel}</p>
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
              style={{ borderRadius: '0.5rem', fontSize: FontSize.main, color: ColorTheme.primary, border: 'solid ' + ColorTheme.primary }}>
              Ver mais
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}