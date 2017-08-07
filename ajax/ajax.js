// ID 6732c9f5
// KEY 1caa6112de59303d52e27436753f546e

var MY_ID = "6732c9f5"
var MY_KEY = "1caa6112de59303d52e27436753f546e"

var bigMacURL = "https://api.nutritionix.com/v1_1/search/bigmac?results=0:5&fields=item_name,brand_name,item_id,nf_calories&appId="+ MY_ID+"&appKey="+MY_KEY

$.ajax({
    url:bigMacURL,
    success:function(data){
       // console.log(data);
       var food = data.hits[0];
       var name = food.fields.item_name;
       var cals = food.fields.nf_calories;

       $("body").append("<h2>This" +name+" has"+cals+" cals</h2>");


    }
});