import {useEffect, useState} from "react";
import {Box, useMediaQuery} from "@mui/material";
import { Outlet } from "react-router-dom";
// import { useSelector } from "react-redux";
import { Navbar, Sidebar } from "./index";


const Layout = () => {

    const isNonMobile = useMediaQuery("(min-width: 600px)");
    const [sidebarOpen, setSidebarOpen] = useState(true);


    return(
        <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
            {/*left side*/}
            <Box>
                <Sidebar
                isNonMobile={isNonMobile}
                drawerWidth="250px"
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
                />
            </Box>

            {/*right side*/}
            <Box sx={{width:"100% "}}>
                <Navbar
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                />
                <Outlet/>
            </Box>
        </Box>
    )
}

export default Layout;