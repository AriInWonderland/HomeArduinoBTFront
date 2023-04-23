const ledToggle = () => {
    IHouse.ledVoltage > 0 ? IHouse.ledState('255') : IHouse.ledState('0')   
}

export {
    ledToggle
}
