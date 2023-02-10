import "./App.css";
import { useState } from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import { Column } from "./components/Column";
import { BoxHeader } from "./styled";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import AddIcon from "@mui/icons-material/Add";

const inicialItems = [];

const inicialColumns = [
  {
    name: " A fazer",
    id: "123",
    items: inicialItems,
  },
  {
    name: "Em progresso",
    id: "456",
    items: [],
  },

  {
    name: "Finalizadas",
    id: "789",
    items: [],
  },
];
function App() {
  const [columns, setColumns] = useState(inicialColumns);

  const ondDragEnd = (result) => {
    let columnOrigin = [];
    let columnDestinationOrigin = [];
    let dragItem = {};

    let sourceColumnId;
    let destinationColumnId;

    columns.forEach((element, index) => {
      if (element.id == result.source.droppableId) {
        // coluna de origem
        columnOrigin = element.items;
        sourceColumnId = index;
      } else if (element.id == result.destination.droppableId) {
        //coluna de destino
        columnDestinationOrigin = element.items;
        destinationColumnId = index;
      }
    });

    columnOrigin.forEach((element) => {
      if (element.id == result.draggableId) dragItem = element;
    });

    let filterColumn = columnOrigin.filter( (item) => item.id != result.draggableId
    );
     
    if (result.source.droppableId == result.destination.droppableId) {
      filterColumn.splice(result.destination.index, 0, dragItem);

      columns[sourceColumnId].items = filterColumn;

      let columnCopy = columns;

      columnCopy[sourceColumnId].items = filterColumn;

      setColumns(columnCopy);
    } else {
      columnDestinationOrigin.splice(result.destination.index, 0, dragItem);

      columns[sourceColumnId].items = filterColumn;

      let columnCopy = columns;

      columnCopy[destinationColumnId].items = columnDestinationOrigin;

      setColumns(columnCopy);
      
    }
  };

  return (
    <>
      <BoxHeader>
        <Box>
          <Typography variant="h4" color={"white"}>
            <BackupTableIcon fontSize="medium" />
            Trello
          </Typography>
        </Box>
        <Box sx={{ position: "absolute", right: "5%" }}>
          <Button sx={{ backgroundColor: "white" }}>
            <AddIcon sx={{ color: "black", fontWeight: 900 }} />
          </Button>
        </Box>
      </BoxHeader>
      <Box className="App">
        <Column
          columns={columns}
          ondDragEnd={ondDragEnd}
          setColumns={setColumns}
        />
      </Box>
    </>
  );
}

export default App;
