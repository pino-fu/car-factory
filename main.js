//No parameters defined because function needs nothing to do its job
const createChassis = () => {
    // Create a new object. No properties yet.
    const newChassisObject = {	}

    return newChassisObject
}

const addBody = (chassisObject) => {
	// Use dot notation to add a new property
	chassisObject.body = "Fever"

	// Return the chassis that now has a body property on it
	return chassisObject
} 


let chassis = createChassis()   // creating a variable to store our empty object
//console.log(chassis)


let chassisWithBody = addBody(chassis)  // adding key-value pair of body: "Fever" to chassis
//console.log(chassisWithBody)


const addWheels = (chassisObject) => {
    chassisObject.wheels = 4
    return chassisObject
}

let chassisWithWheels = addWheels(chassis)
//console.log(chassisWithWheels)

const addEngine = (chassisObject) => {
    chassisObject.engine = "4.8L"
    return chassisObject
}

let chassisWithEngine = addEngine(chassis)
//console.log(chassisWithEngine)

const addSteeringWheel = (chassisObject) => {
    chassisObject.steeringWheel = "Tilting"
    return chassisObject
}

let chassisWithSteeringWheel = addSteeringWheel(chassis)
//console.log(chassisWithSteeringWheel)

const addDriveTrain = (chassisObject) => {
    chassisObject.driveTrain = "Two wheel drive"
    return chassisObject
}

let chassisWithDrivetrain = addDriveTrain(chassis)
console.log(chassisWithDrivetrain)