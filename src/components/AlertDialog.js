import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PickDate from './PickDate';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button variant="outlined" onClick={handleClickOpen}>
        Reservar
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Seleccioná fecha y hora"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <PickDate />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button onClick={handleClose}>Cancelar</button>
          <button onClick={handleClose} autoFocus>
            Reservar
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}