class locations{
   	Name:"";
   	city: "";
   	ZIP: "";
	address: "";
	image:"";
	
	constructor(Name,address, ZIP, city, image){
		this.Name=Name;
		this.city =  city;
		this.ZIP = ZIP;
		this.address = address;
		this.image = image;
		
		
	}

	render(){
			return `
            <div class="container-fluid"
            <div class="row">
            <div class="col-lg-6">
			<h3> ${this.Name} </h3>
	 <p> ${this.address}  ${this.ZIP}  ${this.city}</p>
	 
	 <img src="${this.image}" class="image"></div></div>
	 </div>
	`;
		}
}

class restaurant extends locations{
	restName;
	telNumber;
	webAddress;

	constructor(restName, address, ZIP,city, image,telNumber,webAddress,Name){
		super(Name,address, ZIP, city,image);
		this.restName=restName;
		this.telNumber = telNumber;
		this.webAddress = webAddress;
	}
	render(){
		return ` ${super.render()}
		<h4>${this.restName}</h4>                 
		<p>${this.telNumber}</p>
	    ${this.webAddress}`;
	}
}


class events extends locations{
	eventName;
	EventDate;
	EventTime;
	webAddresse;
	price;

	constructor(Name,eventName, webAddresse,EventDate ,EventTime,address,ZIP,city, image,telNumber,price){
		super(Name,address, ZIP, city, image);
		this.EventDate = EventDate;
		this.EventTime = EventTime;
		this.webAddresse=webAddresse;
		this.price=price;
		
	}
	render(){
		return ` ${super.render()}
		<div class="rest"> ${this.eventName}
		<p>${this.EventDate} ${this.EventTime}</p>                         
		${this.webAddresse}
	    ${this.price}
	    </div>`;
	}
}







var  adventure= new Array();

adventure[0] = new locations("St.Charles Church","Karlsplatz 1", "1010", "Wien","img/Charleschuch.jpg");
adventure[1] = new locations("Zoo Vienna","Maxingstrasse 13b", "1130", "Wien","img/zoo.jpg");


adventure[2] = new restaurant("Lemon Leaf Thai Restaurant", "Kettenbrueckengasse 19", 1050, "Vienna","004315812308","www.lemonleaf.at", "img/lemon.jpg","");

adventure[3] = new restaurant("SITA", "Schoenbrunner Strasse 21",1050, "Vienna","43 1 58 528 56 l 0043 1 58 528 56"," ","http://www.sixta-restaurant.at","img/sixta.png");

adventure[4] = new events("Lenny Kravitz","www.lennykravitz.com/","sat,09.12.2019","20:00","Wiener Stadthalle, Halle D, Roland Rainer Platz 1",1150, "Vienna","47,80","img/lenny.jpg","","");
adventure[5]= new events("Kris Kristofferson","http://kriskristofferson.com/","Fr.,15.11.2019","20:00","Wiener Stadthalle, Halle F, Roland Rainer Platz 1",1150, "Vienna","58,50","img/kristofferson.jpg","","");

document.write(adventure[0].render());
document.write(adventure[1].render());
document.write(adventure[2].render());
document.write(adventure[3].render());
document.write(adventure[4].render());
document.write(adventure[5].render());





	
	 



