import { Hero,Engineer } from './hero';
// export const ENGINEERS: Engineer[] = [
// {  id: 1,  name: '工程师甲',email:'a@a.com',city:'Beijing',building:'Road A3',status:'working'}, 
// {  id: 2,  name: '工程师乙',email:'a@a.com',city:'Beijing',building:'Road A3',status:'working'},  
// {  id: 3,  name: '工程师丙',email:'a@a.com',city:'Beijing',building:'Road A3',status:'working'},  
// {  id: 4,  name: '工程师丁',email:'a@a.com',city:'Beijing',building:'Road A3',status:'working'}
// ];
export const LANGUAGETYPE: any[] = [
{id:1,name:'中文'},
{id:2,name:'English'}
];
export const STATUSTYPE: any[] = [
{statuscode:0,status:'new'},
{statuscode:1,status:'assigned'},
{statuscode:2,status:'processing'},
{statuscode:3,status:'pending'},
{statuscode:4,status:'resolved'},
{statuscode:5,status:'closed'},
{statuscode:6,status:'survey'},
{statuscode:9,status:'cancelled'}
];

export const CATEGORIES: any[] = [
{id:100,name:'categoryA',areas:[{id:110,name:'areaA',subareas:[{id:111,name:'subareaAA'},{id:112,name:'subareaAB'}]},{id:120,name:'areaB',subareas:[{id:121,name:'subareaBA'},{id:122,name:'subareaBB'}]}]},
{id:200,name:'categoryB',areas:[{id:201,name:'areaA'},{id:202,name:'areaB'}]},
{id:300,name:'categoryC',areas:[{id:301,name:'areaA'},{id:302,name:'areaB'}]},
{id:400,name:'categoryD',areas:[{id:401,name:'areaA'},{id:402,name:'areaB'}]},
{id:500,name:'categoryE',areas:[{id:501,name:'areaA'},{id:502,name:'areaB'}]}
];

