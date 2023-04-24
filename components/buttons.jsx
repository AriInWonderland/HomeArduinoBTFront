const ledToggle = (house) => {
    //IHouse.ledVoltage > 0 ? IHouse.ledState('255') : IHouse.ledState('0')   
    house.ledVoltage > 0 ? house.ledState('255') : house.ledState('0');
}

export {
    ledToggle
}
