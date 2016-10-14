 
 app.service('AppService',function() {

this.selectMonth = function(){

var date = [ {id : '1', name : 'ม.ค.'},
{id : '2', name : 'ก.พ.'},
{id : '3', name : 'มี.ค.'} ,
{id : '4', name : 'เม.ย.'},
{id : '5', name : 'พ.ค.'},
{id : '6', name : 'มิ.ย.'},
{id : '7', name : 'ก.ค.'},
{id : '8', name : 'ส.ค.'},
{id : '9', name : 'ก.ย.'},
{id : '10', name : 'ต.ค.'},
{id : '11', name : 'พ.ย.'},
{id : '12',name : 'ธ.ค.'}

]

return date ;
}

this.selectYear = function(){
    var year = [

{id : '2014', name : '2557'},
{id : '2015', name : '2558'},
{id : '2016', name : '2559'} ,
{id : '2017', name : '2560'}

    ]
    return year ;
}
 });
