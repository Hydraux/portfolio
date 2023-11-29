import { Button } from "@mui/material";

export default function TabButton({children, onClick, isSelected}){
    return (
        <Button style={{color: 'white', fontFamily: 'Lato'}} onClick={onClick}>{children}</Button>
    );
}