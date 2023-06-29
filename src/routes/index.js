import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import Error404 from '../pages/Error404';

import { HeaderOnly } from '../components/Layouts';

// No requỉed sign in
const publishRoute = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/error', component: Error404, layout: null },
];
// required sign in
const privateRoute = [];

export { publishRoute, privateRoute };
