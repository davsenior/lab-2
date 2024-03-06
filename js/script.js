// Constructor for Hot Wheels car
function HotWheelsCar(model, color, series, year, size, material, packagingType, recommendedAge, features, price, manufacturerWebsite) {
    this.model = model;
    this.color = color;
    this.series = series;
    this.year = year;
    this.size = size;
    this.material = material;
    this.packagingType = packagingType;
    this.recommendedAge = recommendedAge;
    this.features = features;
    this.price = price;
    this.manufacturerWebsite = manufacturerWebsite;
}

//Instance of Hot Wheels car
var car = new HotWheelsCar("Porsche 911 Carrera RS 2.7", "Yellow, Black Trim", "Factory Fresh 4/10", 2021, "Small", "Coloured Metal", "Cardboard, Plastic", "3+", ["Opening doors", "Rubber tires", "Black rims", "Clear windows"], 1.99);

//Display car on the HTML page
var toyCarContainer = document.getElementById("toyCarContainer");
displayHotWheelsCar(car);

//Function to display Hot Wheels car
function displayHotWheelsCar(car) {
    var carDiv = document.createElement("div");
    carDiv.innerHTML = "<h2>" + car.model + "</h2>" +
                        "<p>Color: " + car.color + "</p>" +
                        "<p>Series: " + car.series + "</p>" +
                        "<p>Year: " + car.year + "</p>" +
                        "<p>Size: " + car.size + "</p>" +
                        "<p>Material: " + car.material + "</p>" +
                        "<p>Packaging Type: " + car.packagingType + "</p>" +
                        "<p>Recommended Age: " + car.recommendedAge + "</p>" +
                        "<p>Features: " + car.features.join(", ") + "</p>" +
                        "<p>Price: $" + car.price + "</p>" +
                        "<p><a href=https://creations.mattel.com/en-ca/pages/hot-wheels-collectors'" + car.manufacturerWebsite + "' target='_blank'>Manufacturer Website</a></p>";
    toyCarContainer.appendChild(carDiv);
}