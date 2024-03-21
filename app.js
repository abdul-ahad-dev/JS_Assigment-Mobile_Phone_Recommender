alert("Welcome to the Mobile Phone recommender!!");
alert("Please answer the following question to help us suggest the perfect mobile phone for your preference.");

var budget;
var opSys;
var performance;

var phone;

budget = prompt("What is your budget? (Low/Medium/High) : ").toLocaleLowerCase();
opSys = prompt("Which Operating System do you prefer? (Android / iOS) : ").toLocaleLowerCase();
performance = prompt("What level of performance are you looking for in a new phone? (Low/Medium/High) : ").toLocaleLowerCase();



if (budget === 'low') {
    if (opSys === 'ios') {
        if (performance === 'low') {
            phone = ['iPhone 6', 110, 'iOS 8', '4.7', 'Apple A8', '16/32/64', '1', 'Single 8 MP', '1810 mAh', 'Up to 14 h'];
        }
        else if (performance === 'medium') {
            phone = ['iPhone 7', 128, 'iOS 10.0.1', '4.7', 'Apple A10 Fusion', '16/32/32', '2', 'Single 12 MP', '1960 mAh', 'Up to 14 h'];
        }
        else if (performance === 'high') {
            phone = ['iPhone 7 Plus', 135, 'iOS 10.0.1', '5.5', 'Apple A10 Fusion', '32/128/256', '3', 'Dual 12 MP', '2900 mAh', 'Up to 21 h'];
        }
    }
    else if (opSys === 'android') {
        if (performance === 'low') {
            phone = ['OnePlus Nord N100', 210, 'Android 12', '6.5', 'Snapdragon 460', '64/128', '4/6', 'Triple 12 MP', '5000 mAh', 'Up to 30 h'];
        }
        else if (performance === 'medium') {
            phone = ['Xiaomi Redmi 13C', 269, 'Android 13', '6.74', 'Helio G85', '128/256', '4/6', 'Dual 50 MP', '5000 mAh', 'Up to 40 h'];
        }
        else if (performance === 'high') {
            phone = ['Samsung Galaxy A05', 275, 'Android 13', '6.7', 'Helio G85', '64/128', '4/6', 'Dual 50 MP', '5000 mAh', 'Up to 36 h'];
        }
    }
}
else if (budget === 'medium') {
    if (opSys === 'ios') {
        if (performance === 'low') {
            phone = ['iPhone XS Max', 1607, 'iOS 12', '6.5', 'A12 Chipset Bionic', '64/256/512GB', '4', 'Dual 12 MP', '3400 mAh'];
        }
        else if (performance === 'medium') {
            phone = ['iPhone 11 Pro Max', 2174, 'iOS 13', '6.5', 'Apple A13', '64/256/512GB', '4', 'Triple Camera: 12 MP', '3500 mAh'];
        }
        else if (performance === 'high') {
            phone = ['iPhone 12 Pro', 2119, 'iOS 14.1', '6.1', 'Apple A14 Bionic', '64/256/512GB', '6', 'Quad Camera: 12 MP', '2815 mAh'];
        }
    }
    else if (opSys === 'android') {
        if (performance === 'low') {
            phone = ['Xiaomi Redmi Note 13 Pro', 245, 'Android 13', '6.67', 'Helio G99 Ultra', '128/256', '12', 'Triple 200 MP', '5000 mAh'];
        }
        else if (performance === 'medium') {
            phone = ['Samsung Galaxy A53 5G', 335, 'Android 13', '6.5', 'Exynos 1280', '128/256', '4/6/8', 'Quad 64 MP', '5000 mAh'];
        }
        else if (performance === 'high') {
            phone = ['OnePlus 9', 299, 'Android 13', '6.55', 'Snapdragon 888 5G', '128/256', '8/12', 'Triple 48 MP', '4500 mAh'];
        }
    }
}
else if (budget === 'high') {
    if (opSys === 'ios') {
        if (performance === 'low') {
            phone = ['iPhone 13', 2628, 'iOS 15', '6.1', 'Apple A15 Bionic', '128/256/512', '4', 'Dual 12 MP', '3240 mAh'];
        }
        else if (performance === 'medium') {
            phone = ['iPhone 14 Pro', 4049, 'iOS 16', '6.1', 'Apple A16 Bionic', '128/256/512/1tb', '6', 'Quad 48 MP', '3200 mAh'];
        }
        else if (performance === 'high') {
            phone = ['iPhone 15 Pro Max', 4399, 'iOS 17', '6.7', 'Apple A17 Pro', '256/512/1tb', '12', 'Triple 48 MP', '4852 mAh'];
        }
    }
    else if (opSys === 'android') {
        if (performance === 'low') {
            phone = ['Google Pixel 8 Pro', 1033, 'Android 14', '6.7', 'Google Tensor G3', '128/256/512/1tb', '12', 'Triple 50 MP', '4500 mAh'];
        }
        else if (performance === 'medium') {
            phone = ['Samsung Galaxy Z Flip 6', 1654, 'Android 14', '6.7', 'Snapdragon 8 Gen 3', '256/512', '12', 'Dual 32 MP', '4000 mAh'];
        }
        else if (performance === 'high') {
            phone = ['Samsung Galaxy S24 Ultra', 1249, 'Android 14', '6.8', 'Snapdragon 8 Gen 3', '256/512/1tb', '12', 'Quad 200 MP', '5000 mAh'];
        }
    }
}


document.write("<h1>Mobile Phone Recommender</h1>");

document.write("<h4>Based on your Preference, We recommeded mobile phone: <h4>");
document.write('<h2>' + phone[0] + '</h2>');
document.write("Price: <b>$" + phone[1] + '</b> <br  />');
document.write("Operating System: <b>" + phone[2] + '</b> <br  />');
document.write("Screen Size: <b>" + phone[3] + '</b> <br  />');
document.write("Processor: <b>" + phone[4] + '</b> <br  />');
document.write("Memory ROM: <b>" + phone[5] + '</b> <br  />');
document.write("Memory RAM: <b>" + phone[6] + '</b> <br  />');
document.write("Main Camera: <b>" + phone[7] + '</b> <br  />');
document.write("Battery	Capacity: <b>" + phone[8] + '</b> <br  />');

