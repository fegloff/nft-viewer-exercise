import { useState, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";

type AlertDialogProps = {
  errorMessage: string;
  openAction: boolean;
};

/** Component toast that handles error Messages */
const AlertDialog = (props: AlertDialogProps) => {
  /**
   * errorMessage {string} : Error message to display
   * openAction (boolean) : triggers that display the toast message
   */
  const { errorMessage, openAction } = props;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(openAction);
  }, [openAction, errorMessage]);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="error" onClose={handleClose}>
          {errorMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AlertDialog;
