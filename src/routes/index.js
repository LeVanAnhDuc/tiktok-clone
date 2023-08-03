import RoutesConfig from '../config/routes';

import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import Error404 from '../pages/Error404';

import { HeaderOnly } from '../components/Layouts';
import Search from '../components/Layouts/components/Search';

// No requỉed sign in
const publishRoute = [
    { path: RoutesConfig.home, component: Home },
    { path: RoutesConfig.following, component: Following },
    { path: RoutesConfig.profile, component: Profile },
    { path: RoutesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: RoutesConfig.search, component: Search, layout: null },
    { path: RoutesConfig.error, component: Error404, layout: null },
];
// required sign in
const privateRoute = [];

export { publishRoute, privateRoute };
