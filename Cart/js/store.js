//----------------------------------------------------------------
// store (contains the products)
//
function store() {
    this.products = [
        new product("APL", "Apple", "Eat one every day to keep the doctor away!", 41, 90, 0, 1, 0, 4, 1),
        new product("AVC", "Avocado", "Guacamole anyone?", 46, 90, 0, 2, 4, 4, 1),
        new product("BAN", "Banana", "These are rich in Potassium and easy to peel.", 4, 410, 0, 1, 4, 1, 1),
        new product("CTP", "Cantaloupe", "Delicious and refreshing.", 3, 50, 4, 4, 4, 1, 0),
        new product("FIG", "Fig", "OK, not that nutritious, but sooo good!", 40, 400, 0, 0, 0, 4, 1),
        new product("GRF", "Grapefruit", "Pink or red, always healthy and delicious.", 44, 50, 4, 4, 4, 4, 4),
        new product("GRP", "Grape", "Wine is great, but grapes are even better.", 8, 400, 0, 3, 0, 4, 4),
        new product("GUA", "Guava", "Exotic, fragrant, tasty!", 8, 50, 2, 4, 0, 4, 1),
        new product("KIW", "Kiwi", "These come from New Zealand.", 44, 90, 4, 4, 0, 1, 1),
        new product("LYC", "Lychee", "Unusual and highly addictive!", 48, 415, 4, 4, 0, 1, 1),
        new product("MAN", "Mango", "Messy to eat, but well worth it.", 8, 70, 3, 4, 0, 4, 4),
        new product("ORG", "Orange", "Vitamin C anyone? Go ahead, make some juice.", 9, 70, 4, 4, 1, 4, 1),
        new product("PAP", "Papaya", "Super-popular for breakfast.", 5, 60, 3, 4, 1, 1, 1),
        new product("PCH", "Peach", "Add some cream and enjoy.", 49, 70, 4, 1, 0, 4, 1),
        new product("PER", "Pear", "Delicious fresh, or cooked in red wine, or distilled.", 8, 400, 0, 1, 0, 4, 1),
        new product("PMG", "Pomegranate", "Delicious, healthy, beautiful, and sophisticated!", 49, 420, 0, 1, 0, 1, 0),
        new product("PNP", "Pineapple", "Enjoy it (but don't forget to peel first).", 4, 60, 0, 3, 0, 0, 4),
        new product("PSM", "Persimmon", "Believe it or not, they are berries!", 6, 410, 4, 3, 0, 4, 3),
        new product("STR", "Strawberry", "Beautiful, healthy, and delicious.", 7, 40, 0, 2, 4, 4, 1),
        new product("TNG", "Tangerine", "Easier to peel than oranges!", 8, 50, 3, 4, 4, 2, 1),
        new product("WML", "Watermelon", "Nothing comes close on those hot summer days.", 4, 90, 4, 4, 0, 4, 2)
    ];
    this.dvaCaption = [
        "Negligible",
        "Low",
        "Average",
        "Good",
        "Great"
    ];
    this.dvaRange = [
        "below 5%",
        "between 5 and 10%",
        "between 10 and 30%",
        "between 30 and 40%",
        "above 40%"
    ];
}
store.prototype.getProduct = function (sid) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].sid == sid)
            return this.products[i];
    }
    return null;
}
