import { Box, Button } from "@mui/material";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Items } from "../Items";
import { BoxContainerItem, List, ListItem } from "./styled";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import ModalCard from "../Modal";

export const Column = ({ columns, ondDragEnd, setColumns }) => {
  const [open, setOpen] = useState(false);
  const [columnSelect, setColumnSelect] = useState(null);

  const addCard = (index) => {
    setOpen(true);
    let index1 = index;
    setColumnSelect(index1);
  };

  const onSubmit = (data) => {
    data.id = String(Math.random(1234675) + "1");
    setOpen(true);

    columns[columnSelect].items.splice(0, 0, data);
    setOpen(false);
  };
 let  columncopy
  const deleteItem =  (index) => {
  
   
    const arrTemp = [...columns[columnSelect].items]


    arrTemp.splice(index, 1);


     columncopy = columns;

    columncopy[columnSelect].items = arrTemp

    setColumns(columncopy)
    

   
   
  };


  return (
    <>
      <ModalCard open={open} setOpen={setOpen} onSubmit={onSubmit} />
      <DragDropContext onDragEnd={ondDragEnd}>
        <List>
          {columns.map((column, index) => (
            <Droppable droppableId={column.id} key={column.id}>
              {(provided) => (
                <ListItem
                  key={column.id}
                  ref={provided.innerRef}
                  className="body"
                >
                  <BoxContainerItem>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems:"center"
                        
                      }}
                    >
                      <h3>{column.name}</h3>
                    </Box>

                    <Items column={column} deleteItem={deleteItem} />
                    <Box sx={{ display: "flex", justifyContent: "start" }}>
                      <Button
                        onClick={() => addCard(index)}
                        sx={{ color: "black", opacity: 0.6 }}
                      >
                        <AddIcon />
                        Add a card
                      </Button>
                    </Box>
                  </BoxContainerItem>
                </ListItem>
              )}
            </Droppable>
          ))}
        </List>
      </DragDropContext>
    </>
  );
};
