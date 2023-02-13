import DashboardPageLayout from "../pages/dashboard/DashboardPageLayout";
import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import DefaultPage from "../pages/dashboard/DefaultPage";
import DashboardIndex from "../pages/dashboard/DashboardIndex";
import ChangelogPage from "../pages/changelog/ChangelogPage";
import AnalyticsPage from "../pages/dashboard/AnalyticsPage";
import SaasPage from "../pages/dashboard/SaasPage";
import ComponentPageLayout from "../pages/component/ComponentPageLayout";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import AlertPage from "../pages/component/AlertPage";
import ButtonPage from "../pages/component/ButtonPage";
import InstallationPage from "../pages/installation/InstallationPage";
import DocumentationPage from "../pages/documentation/DocumentationPage";

import FoodbankItemsPage from "../pages/foodbank-items-page/foodbank-items-page";
import FoodbankParcelsPage from "../pages/foodbank-parcels-page/foodbank-parcels-page";
import FoodbanksPage from "../pages/foodbanks-page/foodbanks-page";
import ItemsPage from "../pages/items-page/items-page";
import LandingPage from "../pages/landing-page";

const appRoutes= [
  {
    index: true,
    element: <LandingPage />,
    state: "landing"
  },
  {
    path: "/foodbanks",
    element: <FoodbanksPage />,
    state: "foodbanks",
    sidebarProps: {
      displayText: "foodbanks",
      icon: <FileDownloadOutlinedIcon />
    }
  },
  {
    path: "/items",
    element: <ItemsPage />,
    state: "items",
    sidebarProps: {
      displayText: "items",
      icon: <DashboardOutlinedIcon />
    },
  },
];

export default appRoutes;