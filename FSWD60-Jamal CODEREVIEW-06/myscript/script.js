var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var locations = /** @class */ (function () {
    function locations(Name, address, ZIP, city, image) {
        this.Name = Name;
        this.city = city;
        this.ZIP = ZIP;
        this.address = address;
        this.image = image;
    }
    locations.prototype.render = function () {
        return "\n            <div class=\"container-fluid\"\n            <div class=\"row\">\n            <div class=\"col-lg-6\">\n\t\t\t<h3> " + this.Name + " </h3>\n\t <p> " + this.address + "  " + this.ZIP + "  " + this.city + "</p>\n\t \n\t <img src=\"" + this.image + "\" class=\"image\"></div></div>\n\t </div>\n\t";
    };
    return locations;
}());
var restaurant = /** @class */ (function (_super) {
    __extends(restaurant, _super);
    function restaurant(restName, address, ZIP, city, image, telNumber, webAddress, Name) {
        var _this = _super.call(this, Name, address, ZIP, city, image) || this;
        _this.restName = restName;
        _this.telNumber = telNumber;
        _this.webAddress = webAddress;
        return _this;
    }
    restaurant.prototype.render = function () {
        return " " + _super.prototype.render.call(this) + "\n\t\t<h4>" + this.restName + "</h4>                 \n\t\t<p>" + this.telNumber + "</p>\n\t    " + this.webAddress;
    };
    return restaurant;
}(locations));
var events = /** @class */ (function (_super) {
    __extends(events, _super);
    function events(Name, eventName, webAddresse, EventDate, EventTime, address, ZIP, city, image, telNumber, price) {
        var _this = _super.call(this, Name, address, ZIP, city, image) || this;
        _this.EventDate = EventDate;
        _this.EventTime = EventTime;
        _this.webAddresse = webAddresse;
        _this.price = price;
        return _this;
    }
    events.prototype.render = function () {
        return " " + _super.prototype.render.call(this) + "\n\t\t<div class=\"rest\"> " + this.eventName + "\n\t\t<p>" + this.EventDate + " " + this.EventTime + "</p>                         \n\t\t" + this.webAddresse + "\n\t    " + this.price + "\n\t    </div>";
    };
    return events;
}(locations));
var adventure = new Array();
adventure[0] = new locations("St.Charles Church", "Karlsplatz 1", "1010", "Wien", "img/Charleschuch.jpg");
adventure[1] = new locations("Zoo Vienna", "Maxingstrasse 13b", "1130", "Wien", "img/zoo.jpg");
adventure[2] = new restaurant("Lemon Leaf Thai Restaurant", "Kettenbrueckengasse 19", 1050, "Vienna", "004315812308", "www.lemonleaf.at", "img/lemon.jpg", "");
adventure[3] = new restaurant("SITA", "Schoenbrunner Strasse 21", 1050, "Vienna", "43 1 58 528 56 l 0043 1 58 528 56", " ", "http://www.sixta-restaurant.at", "img/sixta.png");
adventure[4] = new events("Lenny Kravitz", "www.lennykravitz.com/", "sat,09.12.2019", "20:00", "Wiener Stadthalle, Halle D, Roland Rainer Platz 1", 1150, "Vienna", "47,80", "img/lenny.jpg", "", "");
adventure[5] = new events("Kris Kristofferson", "http://kriskristofferson.com/", "Fr.,15.11.2019", "20:00", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", 1150, "Vienna", "58,50", "img/kristofferson.jpg", "", "");
document.write(adventure[0].render());
document.write(adventure[1].render());
document.write(adventure[2].render());
document.write(adventure[3].render());
document.write(adventure[4].render());
document.write(adventure[5].render());
