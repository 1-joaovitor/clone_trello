import { Draggable } from "react-beautiful-dnd";
import { Box, Button } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
export const Items = ({ column, deleteItem }) => {
  return (
    <>
      {column.items.map((item, index) => (
        <Draggable draggableId={item.id} index={index} key={item.id}>
          {(provided) => (
            <Box
              key={item.id}
              {...provided.dragHandleProps}
              {...provided.draggableProps}
              ref={provided.innerRef}
              className="Cards"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "gray",
                margin: 7,
                ...provided.draggableProps.style,
                borderRadius: 5,
                height: 50,
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <p>{item.content}</p>
              </Box>
              <Box>
                <Button onClick={() => deleteItem(index)}>
                  <DeleteForeverIcon fontSize="small" sx={{ color: "black" }} />
                </Button>
              </Box>

              {provided.placeholder}
            </Box>
          )}
        </Draggable>
      ))}
    </>
  );
};
