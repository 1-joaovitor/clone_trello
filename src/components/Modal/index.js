import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";

const style = {
  display: "flex",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

function ModalCard({ open, setOpen, onSubmit }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: "",
      content: "",
    },
  });

  return (
    <div>
      <Modal
        open={open}
       
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Novo card</h2>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                marginTop: 2,
              }}
            >
              <TextField
                {...register("content")}
                name="content"
                id="outlined-basic"
                label="Conteúdo"
                variant="outlined"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                marginTop: 2,
              }}
            >
              <Button type="submit" sx={{ color: "black" }}>
                Salvar
              </Button>
              <Button sx={{ color: "black" }} onClick={() => setOpen(false)}>
                Voltar
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
export default ModalCard;
