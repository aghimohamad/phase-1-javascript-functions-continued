function saturdayFun(act = "roller-skate") {
    return "This Saturday, I want to "+ act +"!"
}

let mondayWork = function(act = "go to the office") {
    return "This Monday, I will "+act+"."
}

function saturdayFun(act = 'roller-skate') {
    return "This Saturday, I want to "+act+"!"
}
function mondayWork(act = 'go to the office') {
    return "This Monday, I want to "+act+"!"
}

function wrapAdjective(s = "*"){
    return function(p = "special"){
        return "You are " + s + p + s +"!"
    }
}