import {AppBar, Switch, Toolbar, Typography} from "@mui/material";
import {ChangeEvent} from "react";

type Props = {
    darkMode: boolean;
    handleSwitchChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Header = ({handleSwitchChange, darkMode}: Props) =>  {
    return (
        <AppBar position={'static'} sx={{mb: 4}}>
            <Toolbar>
                <Typography variant={'h6'}>Re-Store</Typography>
                <Switch 
                    checked={darkMode} 
                    onChange={handleSwitchChange}
                    name="darkMode"
                ></Switch>
            </Toolbar>
        </AppBar>
    )
}