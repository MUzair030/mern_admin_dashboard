import {
    AdminPanelSettingsOutlined,
    CalendarMonthOutlined,
    Groups2Outlined,
    HomeOutlined, PieChartOutlined, PointOfSaleOutlined,
    Public, ReceiptLongOutlined, QueryStats,
    ShoppingCartOutlined, TodayOutlined
} from "@mui/icons-material";

export const menuItems = [
    {
        name: "Dashboard",
        icon: <HomeOutlined/>
    },
    {
        name: "Client Facing",
        icon: null
    },
    {
        name: "Products",
        icon: <ShoppingCartOutlined/>
    },
    {
        name: "Customers",
        icon: <Groups2Outlined/>
    },
    {
        name: "Transactions",
        icon: <ReceiptLongOutlined/>
    },
    {
        name: "Geography",
        icon: <Public/>
    },
    {
        name: "Sales",
        icon: null
    },
    {
        name: "Overview",
        icon: <PointOfSaleOutlined/>
    },
    {
        name: "Daily",
        icon: <TodayOutlined/>
    },
    {
        name: "Monthly",
        icon: <CalendarMonthOutlined/>
    },
    {
        name: "Breakdown",
        icon: <PieChartOutlined/>
    },
    {
        name: "Management",
        icon: null
    },
    {
        name: "Admin",
        icon: <AdminPanelSettingsOutlined/>
    },
    {
        name: "Performance",
        icon: <QueryStats/>
    }
]