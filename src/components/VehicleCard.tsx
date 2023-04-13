import { Button } from "@mui/material";
import ColorTheme from "../ColorTheme";
import FontSize from "../FontSize";
import { Vehicle } from "../types";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SpeedIcon from '@mui/icons-material/Speed';

export function VehicleCard(vehicle: Vehicle) {
  const oldPrice = vehicle.oldPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const price = vehicle.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '0rem',
      borderRadius: '0.5rem',
      background: ColorTheme.item,
      color: ColorTheme.text,
      fontSize: FontSize.main,
      boxShadow: `0px 10px 20px ${ColorTheme.primary}`
    }}>
      <img
        style={{
          minWidth: '20rem',
          maxWidth: '36.45rem',
          minHeight: '25rem',
          maxHeight: '25rem',
          height: 'auto',
          margin: '0rem',
          borderRadius: '0.5rem 0.5rem 0rem 0rem',
          cursor: 'pointer'
        }}
        src={vehicle.image}
        alt={`${vehicle.brand} ${vehicle.model}`}
      />
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'left', width: '92%' }}>
        <h2>{vehicle.brand} <span style={{ color: ColorTheme.primary }}>{vehicle.model}</span></h2>
        <p>{vehicle.description}</p>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <CalendarMonthIcon />
          <p style={{ margin: '0px 20px 0px 5px' }}>{vehicle.year} / {vehicle.yearModel}</p>
          <SpeedIcon />
          <p style={{ margin: '0px 20px 0px 5px' }}>{vehicle.km} km</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', textAlign: 'center', alignItems: 'center' }}>
          <p>
            de <span> </span>
            <span style={{ color: ColorTheme.badText, fontSize: 20, marginRight: '1rem', textDecoration: 'line-through' }}>
              {oldPrice}
            </span>
          </p>
          <p>por <span style={{ color: ColorTheme.goodText, fontSize: FontSize.super }}>{price}</span></p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', padding: '0.9rem 7rem' }}>
          <Button
            variant="outlined"
            style={{ borderRadius: '0.5rem', fontSize: FontSize.main, color: ColorTheme.primary, border: 'solid ' + ColorTheme.primary}}>
            Ver mais
          </Button>
        </div>
      </div>
    </div>
  );
}