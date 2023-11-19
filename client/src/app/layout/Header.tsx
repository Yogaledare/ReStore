import {
    AppBar,
    Badge,
    Box,
    IconButton,
    Link,
    List,
    ListItem,
    Switch,
    Toolbar,
    Typography,
} from "@mui/material";
import { ChangeEvent } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCart } from "@mui/icons-material";

const midLinks = [
    { title: "catalog", path: "/catalog" },
    { title: "about", path: "/about" },
    { title: "contact", path: "/contact" },
];

const rightLinks = [
    { title: "login", path: "/login" },
    { title: "register", path: "/register" },
];

const navStyles = {
    textDecoration: "none",
    color: "inherit",
    typography: "h6",
    "&:hover": {
        color: "grey.500",
    },
    "&.active": {
        color: "text.secondary",
    },
};

type Props = {
    darkMode: boolean;
    handleSwitchChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Header = ({ handleSwitchChange, darkMode }: Props) => {
    return (
        <AppBar
            position={"static"}
            sx={{ mb: 4 }}
        >
            <Toolbar
                sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
            >
                <Box
                    display={"flex"}
                    alignItems="center"
                >
                    <Typography
                        variant={"h6"}
                        component={NavLink}
                        to={"/"}
                        sx={navStyles}
                    >
                        Re-Store
                    </Typography>
                    <Switch
                        checked={darkMode}
                        onChange={handleSwitchChange}
                        name="darkMode"
                    ></Switch>
                </Box>

                <List sx={{ display: "flex" }}>
                    {midLinks.map(({ title, path }) => (
                        <ListItem
                            component={NavLink}
                            to={path}
                            key={path}
                            sx={navStyles}
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>

                <Box
                    display={"flex"}
                    alignItems="center"
                >
                    <IconButton
                        size={"large"}
                        edge={"start"}
                        color={"inherit"}
                        sx={{ mr: 2 }}
                    >
                        <Badge
                            badgeContent={"4"}
                            color="secondary"
                        >
                            <ShoppingCart></ShoppingCart>
                        </Badge>
                    </IconButton>

                    <List sx={{ display: "flex" }}>
                        {rightLinks.map(({ title, path }) => (
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={navStyles}
                            >
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Toolbar>
        </AppBar>
    );
};
