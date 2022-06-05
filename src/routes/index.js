// Đưa cấu hình router ra ngoài
import routesConfig from '~/config/routes'
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import { HeaderOnlyLayout } from '~/Component/Layouts';

const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile},
    { path: routesConfig.upload, component: Upload , layout : HeaderOnlyLayout},
    { path: routesConfig.search, component: Search , layout : null},

];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
