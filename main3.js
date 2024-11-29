class student
{
    constructor(name)
    {
        this.studentname = name;
    }
    static hello()
    {
        return "Hello!!";
    }
    static welcome(x)
    {
        return " Welcome " + x.studentname;
    }
    hi()
    {
        return "Hi " + this.studentname;
    }
}
myname = new student("Bunny");
document.getElementById("hello").innerHTML = student.hello();
document.getElementById("hi").innerHTML = myname.hi();
document.getElementById("welcome").innerHTML = student.welcome(myname);