export class InMemoryDataService {
  createDb() {
    let heroes = [
      { id: 13,employee:'001',email:'test@t.com',category:'cat1',area:'area1',subarea:'sub1', name: '椅子坏了',assigneeid:1,assignee:'工程师甲',reply:'修理椅子',statuscode:9,status:'cancelled'},
      { id: 14,employee:'001',email:'test@t.com',category:'cat2',area:'area1',subarea:'sub1',  name: '鼠标坏了',assigneeid:1,assignee:'工程师甲',reply:'更换鼠标'  ,statuscode:6,status:'survey'},
      { id: 15,employee:'001',email:'test@t.com',category:'cat2',area:'area1',subarea:'sub1',  name: '主板坏了',assigneeid:1,assignee:'工程师甲',reply:'更换'  ,statuscode:5,status:'closed'},
      { id: 16,employee:'001',email:'test@t.com',category:'cat2',area:'area1',subarea:'sub1',  name: '杯子坏了',assigneeid:1,assignee:'工程师甲',reply:'更换' ,statuscode:4,status:'resolved'},
      { id: 17,employee:'001',email:'test@t.com',category:'cat2',area:'area1',subarea:'sub1',  name: '键盘坏了',assigneeid:1,assignee:'工程师甲',reply:'更换' ,statuscode:3,status:'pending'},
      { id: 18,employee:'001',email:'test@t.com',category:'cat2',area:'area1',subarea:'sub1',  name: '空调坏了',assigneeid:1,assignee:'工程师甲',reply:'更换' ,statuscode:2,status:'processing'},
      { id: 19,employee:'001',email:'test@t.com',category:'cat2',area:'area1',subarea:'sub1',  name: '电梯坏了',assigneeid:1,assignee:'工程师甲',reply:'更换' ,statuscode:1,status:'assigned'},
      { id: 20,employee:'001',email:'test@t.com',category:'cat1',area:'area1',subarea:'sub1', name: '门1坏了',assigneeid:0,assignee:'',reply:''  ,statuscode:0,status:'new'},
      { id: 21,employee:'001',email:'test@t.com',category:'cat2',area:'area1',subarea:'sub1', name: '门2坏了',assigneeid:0,assignee:'',reply:''  ,statuscode:0,status:'new'},
      { id: 22,employee:'001',email:'test@t.com',category:'cat2',area:'area1',subarea:'sub1', name: '门3坏了',assigneeid:0,assignee:'',reply:''  ,statuscode:0,status:'new'},
      { id: 23,employee:'001',email:'test@t.com',category:'cat2',area:'area1',subarea:'sub1', name: '门4坏了',assigneeid:0,assignee:'',reply:''  ,statuscode:0,status:'new'},
      { id: 24,employee:'001',email:'test@t.com',category:'cat2',area:'area1',subarea:'sub1', name: '门5坏了',assigneeid:0,assignee:'',reply:''  ,statuscode:0,status:'new'},
      { id: 25,employee:'001',email:'test@t.com',category:'cat2',area:'area1',subarea:'sub1', name: '门6坏了',assigneeid:0,assignee:'',reply:''  ,statuscode:0,status:'new'}
    ];
    let engineers = [
      {  id: 1,  name: '工程师甲',email:'a@a.com',city:'Beijing',building:'Road A3',status:'working'}, 
      {  id: 2,  name: '工程师乙',email:'a@a.com',city:'Beijing',building:'Road A3',status:'working'},  
      {  id: 3,  name: '工程师丙',email:'a@a.com',city:'Beijing',building:'Road A3',status:'working'},  
      {  id: 4,  name: '工程师丁',email:'a@a.com',city:'Beijing',building:'Road A3',status:'working'}
    ];
    return { heroes,engineers };
  }
}
