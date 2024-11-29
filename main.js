class student 
{
   constructor (name , yob)
   {
    print ("This is an automatic function")
    this.name = name ;
    this.yob = yob ;
   }
   age()
   {
    let dt = new Date ();
    return dt.getFullYear()-this.yob ;
   }
}
s1 = new student ("Bunny" , 2011);
document.getElementById("d1").innerHTML = 'The name is ' + s1 . name + ' and is aged about ' + s1.age();
s2 = new student("Bunty", 2013);
document.getElementById("d2").innerHTML = 'The name is ' + s2.name + ' and is aged about ' + s2.age();