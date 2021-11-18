var images = ["Family.jpeg","Family-1.jpeg","Family-2.jpeg","Ahaan.jpeg","Ahaan and mom","Ahaan and mom (2).jpeg"];
var names = ["Family Book","Vahid Mohmamad","Muni Degum","Naresh Wasudeo","Monali Wasudeo","Abdul Khan","Dipti Wasudeo","Ahaan khan"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array =7
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage =images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
