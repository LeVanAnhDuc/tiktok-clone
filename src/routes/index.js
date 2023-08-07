import config from '../config';

import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import Error404 from '../pages/Error404';

import { HeaderOnly } from '../layouts';
import Search from '../layouts/components/Search';

// No requỉed sign in
const publishRoute = [
    { path: config.Routes.home, component: Home },
    { path: config.Routes.following, component: Following },
    { path: config.Routes.profile, component: Profile },
    { path: config.Routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.Routes.search, component: Search, layout: null },
    { path: config.Routes.error, component: Error404, layout: null },
];
// required sign in
const privateRoute = [];

export { publishRoute, privateRoute };
