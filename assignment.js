

/*convert kilometer to meter*/

function kilometerToMeter(kilometers) {
    if (kilometers > 0) {
        return kilometers * 1000;

    }
    else if (kilometers <= 0) {
        return 'Dont Enter 0 or less than 0'
    }
    else {
        return 'Dont Enter String or array Value!'
    }
}

// console.log(kilometerToMeter());

/*End the program of convert kilometer to meter*/





/*program of Budget Calculator*/

function budgetCalculator(watch, phone, laptop) {
    if ((watch < 0) || (phone < 0) || (laptop < 0)) {
        return "dont Enter less than 0"
    }
    else {
        var total = (50 * watch + 100 * phone + laptop * 500);
        return total;
    }


}
// console.log(budgetCalculator())

/*End the program of Budget Calculator*/




/*Program of Hotel Cost*/

function hotelCost(day) {
    var totalCost = 0;
    if (day <= 0) {
        return 'Dont Enter  0 or less than 0'
    }
    else if (day <= 10) {
        totalCost = day * 100;
    }
    else if (day <= 20) {
        var first10DayCost = 10 * 100;
        var remaining = day - 10;
        var after10DayCost = remaining * 80;
        totalCost = first10DayCost + after10DayCost
    }
    else {
        var first10DayCost = 10 * 100;
        var day10todayTo20Cost = 10 * 80;
        var remaining = day - 20;
        var after20Day = remaining * 50;
        totalCost = first10DayCost + day10todayTo20Cost + after20Day;
    }


    return totalCost;

}

// console.log(hotelCost());

/*End the Program of Hotel Cost*/




/*Program of Mega Friend*/


function megaFriend(friendsName) {

    if (typeof (friendsName) == ['object']) {

        if (friendsName.length == 0) {
            return ('Please enter a few element in array');
        }

        else if (friendsName.length > 0) {
            var largestName = '';
            for (var i = 0; i < friendsName.length; i++) {
                var element = friendsName[i];
                if (element.length > largestName.length) {
                    largestName = element;
                }
            }

        }
        return largestName;
    }
    else {
        return 'Invilid input. Please Enter Array'
    }

}


// console.log(megaFriend([]));

/*End the program of Mega Friend*/













