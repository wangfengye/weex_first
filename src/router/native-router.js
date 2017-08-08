const domain='http://192.168.168.39:8080';
const routes = [{
    path:'/detail',
    component:domain+'/dist/detail.js',//js bundle address，must end with '.js'
    name:'detail',
}];
export default routes;