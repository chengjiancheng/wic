export class InMemoryDataService {
  createDb() {
    let heroes = [
      { id: 13,employee:'001',email:'test@t.com', name: '椅子坏了',reply:'修理椅子',statuscode:9,status:'cancelled'},
      { id: 14,employee:'001',email:'test@t.com', name: '鼠标坏了',reply:'更换鼠标'  ,statuscode:5,status:'survey'},
      { id: 15,employee:'001',email:'test@t.com', name: '主板坏了',reply:'更换'  ,statuscode:4,status:'closed'},
      { id: 16,employee:'001',email:'test@t.com', name: '杯子坏了',reply:'更换' ,statuscode:3,status:'resolved'},
      { id: 17,employee:'001',email:'test@t.com', name: '键盘坏了',reply:'更换' ,statuscode:2,status:'pending'},
      { id: 18,employee:'001',email:'test@t.com', name: '空调坏了',reply:'更换' ,statuscode:1,status:'processing'},
      { id: 19,employee:'001',email:'test@t.com', name: '电梯坏了',reply:'更换' ,statuscode:0,status:'new'},
      { id: 20,employee:'001',email:'test@t.com',name: '门坏了',reply:'更换'  ,statuscode:0,status:'new'}
    ];
    return { heroes };
  }
}
