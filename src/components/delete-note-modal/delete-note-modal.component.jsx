import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const style = {
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  //   border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function DeleteNoteModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        color="error"
        style={{ marginRight: "10px" }}
      >
        Delete note
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              style={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              Are you sure you want to delete the selected notes?
            </Typography>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                style={{
                  marginTop: "25px",
                }}
                variant="contained"
                color="error"
              >
                Submit
              </Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
