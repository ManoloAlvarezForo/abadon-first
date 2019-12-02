import React, { useState } from 'react';
import { TextField, Grid, Button, Typography } from '@material-ui/core';

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Divider from '@material-ui/core/Divider';
import CustomAutocomplete from '../Autocomplete/CustomAutocomplete';

const clientRenderOption = option => (
  <>
    <div key={option.id}>{option.name}</div>
  </>
);

export default function SaleDetail() {
  const [paymentType, setPaymentType] = useState('cash');
  const [options, setOptions] = useState([
    { id: 1, name: 'Manolo' },
    { id: 2, name: 'Marco' },
    { id: 3, name: 'Miguel' }
  ]);

  const addItem = option => {
    setOptions([...options, option]);
  };

  const paymentTypeHandle = value => {
    if (value !== paymentType) {
      setPaymentType(value);
    }
  };

  return (
    <div style={salesDetailStyles.mainContainer}>
      <div id="title" style={{ display: 'flex', flexDirection: 'row' }}>
        <div>Detalle de venta</div>
        <div style={{ display: 'flex', marginLeft: 'auto' }}>
          button add client
        </div>
      </div>
      <div style={{ padding: '20px 15px 0 15px' }}>
        <div style={{ margin: '15px 0', width: '100%' }}>
          <CustomAutocomplete
            placeholder="Buscar cliente"
            label="NIT/CI"
            options={options}
            onChangeEvent={() => {}}
            addSelectedItemEvent={addItem}
            renderOption={clientRenderOption}
            inputType="outlined"
            shrink={false}
            startAdornment={false}
          />
          <TextField
            style={{ width: '100%', margin: '15px 0' }}
            id="outlined-basic"
            label="Senor(eres)"
            variant="outlined"
            margin="dense"
          />
        </div>
        <Divider variant="fullWidth" />
        <div style={{ padding: '20px 0' }}>
          <Grid container spacing={2} direction="column" alignItems="center">
            <Grid item>
              <ToggleButtonGroup
                size="small"
                value={paymentType}
                exclusive
                onChange={e => paymentTypeHandle(e.currentTarget.value)}
                aria-label="text alignment"
              >
                <ToggleButton value="cash" aria-label="left aligned">
                  Efectivo
                </ToggleButton>
                <ToggleButton value="card" aria-label="left aligned">
                  Tarjeta
                </ToggleButton>
                <ToggleButton value="to" aria-label="left aligned">
                  Por pagar
                </ToggleButton>
              </ToggleButtonGroup>
            </Grid>
          </Grid>
        </div>
        <Divider variant="fullWidth" />
        {paymentType === 'cash' && (
          <div style={{ margin: '15px 0' }}>
            <TextField
              style={{ width: '100%', margin: '10px 0' }}
              id="outlined-basic"
              label="Efectivo"
              variant="outlined"
              margin="dense"
              defaultValue="0.0"
              type="number"
            />
            <TextField
              style={{ width: '100%', margin: '10px 0 25px 0' }}
              id="outlined-basic"
              label="Cambio"
              variant="outlined"
              margin="dense"
              type="number"
              defaultValue="0.0"
              disabled
            />
            <Divider variant="fullWidth" />
          </div>
        )}
        <div style={{ marginBottom: '15px' }}>
          <div
            style={{ display: 'flex', flexDirection: 'row', margin: '3px 0' }}
          >
            <Typography
              variant="body2"
              style={{ fontWeight: 'bold', marginRight: '7px', width: '25%' }}
            >
              Fecha:
            </Typography>
            <Typography variant="body2" style={{ width: '75%' }}>
              Domingo 25 de Enero de 2019
            </Typography>
          </div>
          <div
            style={{ display: 'flex', flexDirection: 'row', margin: '3px 0' }}
          >
            <Typography
              variant="body2"
              style={{ fontWeight: 'bold', marginRight: '7px', width: '25%' }}
            >
              NIT/CI:
            </Typography>
            <Typography variant="body2" style={{ width: '75%' }}>
              3158313
            </Typography>
          </div>
          <div
            style={{ display: 'flex', flexDirection: 'row', margin: '3px 0' }}
          >
            <Typography
              variant="body2"
              style={{ fontWeight: 'bold', marginRight: '7px', width: '25%' }}
            >
              Senor(ers):
            </Typography>
            <Typography variant="body2" style={{ width: '75%' }}>
              alvarez
            </Typography>
          </div>
          <div
            style={{ display: 'flex', flexDirection: 'row', margin: '3px 0' }}
          >
            <Typography
              variant="body2"
              style={{ fontWeight: 'bold', marginRight: '7px', width: '25%' }}
            >
              Cantidad:
            </Typography>
            <Typography variant="body2" style={{ width: '75%' }}>
              6 items
            </Typography>
          </div>
          <div
            style={{ display: 'flex', flexDirection: 'row', margin: '3px 0' }}
          >
            <Typography
              variant="body2"
              style={{ fontWeight: 'bold', marginRight: '7px', width: '25%' }}
            >
              Tipo de pago:
            </Typography>
            <Typography variant="body2" style={{ width: '75%' }}>
              efectivo
            </Typography>
          </div>

          <div
            style={{ display: 'flex', flexDirection: 'row', margin: '3px 0' }}
          >
            <Typography
              variant="body2"
              style={{ fontWeight: 'bold', marginRight: '7px', width: '25%' }}
            >
              Cliente:
            </Typography>
            <Typography variant="body2" style={{ width: '75%' }}>
              Manolo Alvarez Foro
            </Typography>
          </div>
        </div>
        <Divider variant="fullWidth" />
        <div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              padding: '40px 5px',
              alignItems: 'center'
            }}
          >
            <Typography
              variant="h5"
              style={{
                display: 'flex',
                alignSelf: 'flex-end'
              }}
            >
              Total
            </Typography>
            <div style={{ display: 'flex', marginLeft: 'auto' }}>
              <Typography
                variant="body1"
                style={{
                  display: 'flex',
                  alignSelf: 'flex-end',
                  marginRight: '5px'
                }}
              >
                Bs.
              </Typography>
              <Typography variant="h4">2250.50</Typography>
            </div>
          </div>
        </div>
        <div style={{ width: '100%' }}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            style={{ marginLeft: 'auto', color: 'white' }}
            onClick={() => {}}
          >
            PROCESAR VENTA
          </Button>
        </div>
      </div>
    </div>
  );
}

const salesDetailStyles = {
  mainContainer: {
    backgroundColor: '#f3f3f3',
    display: 'flex',
    height: '100%',
    marginTop: '2px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    borderRadius: '5px',
    flexDirection: 'column',
    padding: '5px'
  }
};
