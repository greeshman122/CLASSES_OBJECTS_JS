class car
{
    constructor(brand)
    {
        this.carname = brand;
    }
    present()
    {
        return 'I have a ' + this.carname;
    }
}
class Model extends car
{
    constructor(brand, mod)
    {
        super(brand);
        this.model = mod;
    }
show()
{
    return this.present() + ', it is a ' + this.model;
}
}
let myCar = new Model("Ford" , "Mustang");
document.getElementById("details").innerHTML = myCar.show();