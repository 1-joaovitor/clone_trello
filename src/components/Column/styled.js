import styled from "styled-components";
import { Box } from "@mui/material";

export const BoxContainerItem = styled(Box)({
  display:'flex',
  flexDirection:'column',
  width: "75%",
  padding: 5,
  marginLeft: 30,
  borderRadius: 10,
  marginTop: 20,
  backgroundColor: "white",

  
  
});

export const List = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 10px;
  row-gap: 2rem;
  list-style: none;
`;

export const ListItem = styled.li`
  
`;
