//----------------------------------------------------------------
// product class
function product(sid, name, description, price, cal, carot, vitc, folate, potassium, fiber) {
    this.sid = sid; // product code (sid = stock keeping unit)
    this.name = name;
    this.description = description;
    this.price = price;
    this.cal = cal;
    this.nutrients = {
        "Carotenoid": carot,
        "Vitamin C": vitc,
        "Folates": folate,
        "Potassium": potassium,
        "Fiber": fiber
    };
}
