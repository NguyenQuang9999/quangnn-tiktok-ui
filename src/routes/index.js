// Đưa cấu hình router ra ngoài
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import { HeaderOnlyLayout } from '~/Component/Layouts';

const publicRoutes = [
    { path: '/', component: Home },
    { path: 'following', component: Following },
    { path: 'profile', component: Profile},
    { path: 'upload', component: Upload , layout : HeaderOnlyLayout},
    { path: 'search', component: Search , layout : null},

];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
