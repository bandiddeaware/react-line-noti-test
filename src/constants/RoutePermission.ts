const RoutePermission = {
    none: undefined,
    setting: ['admin','setting','dashboard'],
    usermanagement: ['admin','usermanagement'],
    weather: ['admin','weather'],
    conveyor: ['admin','belt'],
    arsenic: ['admin','arsenic'],
    wireless: ['admin','piezo'],
    landslide: ['admin','landslide'],
    waterlevel: ['admin','water_level'],
    maplayersetting: ['admin','setting'],
    piezometer: ['admin','piezo'],
    gpstracking: ['admin','gps'],
    truck: ['admin','truck'],
    noti_line: ['admin']
}

// 'dashboard'
// 'piezo'
// 'arsenic'
// 'landslide'
// 'gps'
// 'groundwater_pressure'
// 'water_level'
// 'weather'
// 'belt'
// 'truck'

export default RoutePermission