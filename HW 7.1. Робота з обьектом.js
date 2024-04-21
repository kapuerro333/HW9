let circle = {
    color: "blue",
    size: "medium",
    width: "24"
};

function getInfo(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key + ": " + obj[key]);
        }
    }
}

getInfo(circle);

circle.newProperty = 'New feature';
getInfo(circle);