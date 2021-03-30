// // Generic Datatype in ts
// function show<T>(arg:T){
//     return arg;
// }
// var output1=show<string>('piyush');
// var output2=show<number>(100);
// console.log(output1);
// console.log(output2);

// // Function in ts
// function display(){
//     console.log("hello Piyush");
// }
// display();
// function add(num1:number,num2:number){
//     console.log(num1+num2);
// }
// add(1,2);
// add(33,50);
// add(333,650);
// function show():string{
//     // return 10; //false
//     return "Helooooo"
// }
// console.log(show());

// add(333,'chandan'); //false

// // unums in ts
// enum color{
//     red,green,blue
// }
// let mycolor=color.blue;
// console.log(mycolor);
// enum direction{
//     up='up',down='down',right='right',left='left'
// }
// let mydirection=direction.right;
// console.log(mydirection);

// // Interface in ts
// interface keypair{
//     key:number;
//     value:string;
// }
// interface cal{
//     sum(first:number,second:number);
// }
// let calculator:cal={
//     sum(first:number,second:number){
//         return first+second;
//     }
// }
// function show(){
//     // let kp1:keypair={1,"piyush"}; //false
//     let kp2:keypair={key:1,value:'piyush'};
//     // let kp3:keypair={age:1.name:'piyush'}; //false
//     let kp4:keypair={value:'piyush',key:1};
// }

// // Task 12 Touple in ts
// var empid:number = 100;
// var empname:string = 'manish';
// var employee:[number,string]=[1,"piyush"]
// employee=[empid,empname]
// console.log(employee);
// var arr:number[] = [1,2,3]
// var xArr:[number,string] = [1,""]
// console.log(arr);
// console.log(xArr);
// var user:[number,string,string,boolean];
// user=[10,"a","b",true];
// console.log(user);
// var emp:[number,string][];
// emp=[[10,"x"],[11,"y"],[100,"z"]];
// console.log(emp);
// employee.push(101,"raj");
// employee.push(102,"RANO");
// console.log(employee);
// // employee=[100,"piyush"]
// // console.log(employee);
// // var xArr:[number,string] = ["",1] //false 

// // Task 11 Array in ts
// var list:number[] = [1,2,4,5,2,32];
// var str:string[] = ["a","b","c"];
// // var list:string[] = [1,2,4,5,2,32]; //false
// console.log(list);
// console.log(str);
// var list1:Array<number>=[11,32,43,4] //generic type
// console.log(list1);

// // Task 10 any Type in ts
// var a:any;
// a="piyush";
// a=10;
// a=true;
// function add(x:any,y:any){
//   var z = x + y;
//   console.log(z);
// }
// add(5,6);
// add("piyush ","rebadiya");

// // Task 9 undefined Type in ts
// var a:undefined;
// // a="" //false
// // a=2 //false
// var b:number=undefined;
// b=15;
// // b="" //false
// var c:string=undefined;
// c="piyush";

// // Task 8 Null in ts
// var a:null;
// a=null;
// // a=10;//false
// // a="";//false
// var b:string=null;
// b="piyush";
// var c:number=null;
// c=100;

// // Task 7 Void Type in ts
// function show():void{
//     console.log("Hleooo");
//     return null;
// }
// show()
// var a:void;
// console.log(a);
// console.log(typeof(a));
// a=null

// // Task 6 Boolean Type in ts
// var isActive:boolean = true;
// var isupdates:boolean = false;
// console.log(isActive);
// console.log(typeof(isActive));
// console.log(isupdates);
// console.log(typeof(isupdates));
// var a = true;
// console.log(typeof(a));

// // Task 5 String Type in ts
// var str:string = "piyush";
// console.log(str);
// console.log(typeof(str));
// var str1:string="100"
// console.log(str1);
// console.log(typeof(str1));
// var str2:string="";
// var str3="";
// var str4:string="";
// var empname:string="jay";
// var empDemt:string="patel";
// var output:string=empname+" works in the "+ empDemt+ " Department";
// var output1:string=`${empname} works in the ${empDemt} Department`
// console.log(output);
// console.log(output1);

// // Task 4 Number Type in ts
// var num1:number=100;
// var num2:number=10.20;
// console.log(num1);
// console.log(num2);
// console.log(typeof(num1));
// console.log(typeof(num2));
// var num3=100;
// var num4=20.22;
// console.log(typeof(num3));
// console.log(typeof(num4));
// function add(num5:number,num6:number) {
//     var num7:number = num5 + num6
//     console.log("num7",num7);
// }
// add(10,30);
// console.log("maximum value :",Number.MAX_VALUE);
// console.log("minimum value :",Number.MIN_VALUE);
 
//Task 3 Var,Let,Const
// function show(){
//     // console.log(x);
//     // var x:string="piyush"
//     // console.log(x);
//     const str:string="manish";
//     // let y:number;
//     // // let y:number; //Error
//     // var z:number
//     // var z:number
//     // let a:number;
//     // a=10
//     // if(a>5){
//     //     var b:number;
//     //     b=20
//     // }
//     // while(a>5){
//     //     console.log(a);
//     //     a++
//     //     var c:number=40;
//     // }
//     // c=70
// }
// show()

// //Task 2 TypeOf
// var a:number = 10;
// var str:string = "Piyush"
// var isactive:boolean = true;
// console.log(a);
// console.log(typeof(a));
// console.log(str);
// console.log(typeof(str));
// console.log(isactive);
// console.log(typeof(isactive));
// function add(x:number,y:number){
//     var z=x+y
//     console.log(z);
// }
// add(10,20)
// // add("pus",20)   //Error
// function display(a:string,b:number){
//     console.log(a+ ":" + b);
// }
// display("Piyush",1888)
// // display(1888,"Piyush") //Error 

// //Task 1 Simple log
// var msg = "sahosoft Solution"
// document.write(msg);
// alert("helo word")
