//http://jsfiddle.net/pZ7Zy/
var mult = 1
var multp = 0
var multc = 5000
var p1 = 0
var p2 = 0
var imanBoost = 0
if (localStorage.getItem("firsto")) {
window.first = false}
else {
window.first = true}
var smilec = 100
var thikrc = 2000
var tasbeehc = 10000
var duaac  = 50000
var rdgQuranc  = 80000
var obeyParentsc  = 150000
var naflSalahc  = 350000
var charityc  = 500000
var fardSalahc  = 750000
var taraweehc  = 1000000
var qiyamc  = 3500000
var itikafc  = 6500000
var zakahc  = 97500000
var sawmc  = 15250000
var sunnahSawmc = 27500000
var umrahc  = 42000000
var hajjc  = 75000000
var smilep = 0
var thikrp = 0
var tasbeehp = 0 
var duaap  = 0
var rdgQuranp  = 0
var obeyParentsp  = 0
var naflSalahp  = 0
var charityp  = 0
var fardSalahp  = 0
var taraweehp  = 0
var qiyamp  = 0
var itikafp  = 0
var zakahp  = 0
var sawmp  = 0
var sunnahSawmp = 0 
var umrahp  = 0
var hajjp  = 0
var s1 = false
var s2 = false
var s3 = false
var s4 = false
var s5 = false
var s6 = false
var s7 = false
var s8 = false



var hassanat = function() {
    if (first) {
    alert("WARNING: NUMBERS ATTACHED TO CERTAIN DEEDS ARE NOT AT ALL REPRESENTATIVE OF THE ACTUAL REWARD ALLAH SWT GIVES! THESE NUMBERS ARE ARBITRARY! ALLAH SWT MULTIPLIES THE REWARD TO WHOM HE PLEASES!")
    alert("Asalmo Alikum and thank you for playing Hassanat Clickers. You are advised to make actual thikr with every click to get real hassanat inshAllah. Jazakum Allahu Kharan")
	first = false
	window.count = 0
	window.localStorage.setItem("firsto",false)
	window.localStorage.removeItem('hassanatcount');
    }

	count = count + mult
	window.localStorage.setItem("countcount",count)
    document.getElementById("display").innerHTML =  count + " Hassanat";
}

var multiply = function() {
    if (count >= multc) {
        mult = mult * 2
        document.getElementById("display").innerHTML = count + " Hassanat";
        multp = multp + 1
        multc = Math.floor(multc * Math.pow(1.2,multp))
        document.getElementById("multiplyCost").innerHTML = "Cost: " + multc + " Hs | Purchased: " + multp;
    }
    else {
        alert("Not enough Hassanat!")
    }
    
}
var smile = function() {
    if (count >= smilec) {
        count = count - smilec
        document.getElementById("display").innerHTML = count + " Hassanat";
        smilep = smilep + 1
        smilec = Math.floor(smilec * Math.pow(1.01,smilep))
        document.getElementById("smileCost").innerHTML = "Cost: " + smilec + " Hs | Purchased: " + smilep;
        imanBoostCalc()
    }
    else {
        alert("Not enough Hassanat!")
    }
    s1 = true
    s2 = false
    s3 = false
    s4 = false
    s5 = false
    s6 = false
    s7 = false
    s8 = false
}
var thikr = function() {
    if (count >= thikrc) {
        count = count - thikrc
        document.getElementById("display").innerHTML = count + " Hassanat";
        thikrp = thikrp + 1
        thikrc = Math.floor(thikrc * Math.pow(1.015,thikrp))
        document.getElementById("thikrCost").innerHTML = "Cost: " + thikrc + " Hs | Purchased: " + thikrp;
        imanBoostCalc()
    }
    else {
        alert("Not enough Hassanat!")
    }
}
var tasbeeh = function() {
    if (count >= tasbeehc) {
        count = count - tasbeehc
        document.getElementById("display").innerHTML = count + " Hassanat";
        tasbeehp = tasbeehp + 1
        tasbeehc = Math.floor(tasbeehc * Math.pow(1.02,tasbeehp))
        document.getElementById("tasbeehCost").innerHTML = "Cost: " + tasbeehc + " Hs | Purchased: " + tasbeehp;
        imanBoostCalc()
    }
    else {
        alert("Not enough Hassanat!")
    }
    if (s1 === true) {
    s1 = false
    s2 = true
    s3 = false
    s4 = false
    s5 = false
    s6 = false
    s7 = false
    s8 = false
    }
}
var duaa = function() {
    if (count >= duaac) {
        count = count - duaac
        document.getElementById("display").innerHTML = count + " Hassanat";
        duaap = duaap + 1
        duaac = Math.floor(duaac * Math.pow(1.025,duaap))
        document.getElementById("duaaCost").innerHTML = "Cost: " + duaac + " Hs | Purchased: " + duaap;
        imanBoostCalc()
    }
    else {
        alert("Not enough Hassanat!")
    }
}
var readingQuran = function() {
    if (count >= rdgQuranc) {
        count = count - rdgQuranc
        document.getElementById("display").innerHTML = count + " Hassanat";
        rdgQuranp = rdgQuranp + 1
        rdgQuranc = Math.floor(rdgQuranc * Math.pow(1.03,rdgQuranp))
        document.getElementById("readingQuranCost").innerHTML = "Cost: " +rdgQuranc + " Hs | Purchased: " + rdgQuranp;
        imanBoostCalc()
    }
    else {
        alert("Not enough Hassanat!")
    }
    if (s2 === true) {
    s1 = false
    s2 = false
    s3 = true
    s4 = false
    s5 = false
    s6 = false
    s7 = false
    s8 = false
    }
} 
var obeyParents = function() {
    if (count >= obeyParentsc) {
        count = count - obeyParentsc
        document.getElementById("display").innerHTML = count + " Hassanat";
        obeyParentsp = obeyParentsp + 1
        obeyParentsc = Math.floor(obeyParentsc * Math.pow(1.035,obeyParentsp))
        document.getElementById("obeyParentsCost").innerHTML = "Cost: " + obeyParentsc + " Hs | Purchased: " + obeyParentsp;
        imanBoostCalc()
    }
    else {
        alert("Not enough Hassanat!")
    }
}
var naflSalah = function() {
    if (count >= naflSalahc) {
        count = count - naflSalahc
        document.getElementById("display").innerHTML = count + " Hassanat";
        naflSalahp = naflSalahp + 1
        naflSalahc = Math.floor(naflSalahc * Math.pow(1.04,naflSalahp))
        document.getElementById("naflSalahCost").innerHTML = "Cost: " + naflSalahc + " Hs | Purchased: " + naflSalahp;
        imanBoostCalc()
    }
    else {
        alert("Not enough Hassanat!")
    }
    if (s3 === true) {
    s1 = false
    s2 = false
    s3 = false
    s4 = true
    s5 = false
    s6 = false
    s7 = false
    s8 = false
    }
}
var charity = function() {
    if (count >= charityc) {
        count = count - charityc
        document.getElementById("display").innerHTML = count + " Hassanat";
        charityp = charityp + 1
        charityc = Math.floor(charityc * Math.pow(1.045,charityp))
        document.getElementById("charityCost").innerHTML = "Cost: " + charityc + " Hs | Purchased: " + charityp;
        imanBoostCalc()
    }
    else {
        alert("Not enough Hassanat!")
    }
}
var fardSalah = function() {
    if (count >= fardSalahc) {
        count = count - fardSalahc
        document.getElementById("display").innerHTML = count + " Hassanat";
        fardSalahp = fardSalahp + 1
        fardSalahc = Math.floor(fardSalahc * Math.pow(1.05,fardSalahp))
        document.getElementById("fardSalahCost").innerHTML = "Cost: " + fardSalahc + " Hs | Purchased: " + fardSalahp;
        imanBoostCalc()
    }
    else {
        alert("Not enough Hassanat!")
    }
    if (s4 === true) {
    s1 = false
    s2 = false
    s3 = false
    s4 = false
    s5 = true
    s6 = false
    s7 = false
    s8 = false
    }
}
var taraweeh = function() {
    if (count >= taraweehc) {
        count = count - taraweehc
        document.getElementById("display").innerHTML = count + " Hassanat";
        taraweehp = taraweehp + 1
        taraweehc = Math.floor(taraweehc * Math.pow(1.055,taraweehp))
        document.getElementById("taraweehCost").innerHTML = "Cost: " + taraweehc + " Hs | Purchased: " + taraweehp;
        imanBoostCalc()
    }
    else {
        alert("Not enough Hassanat!")
    }
}
var qiyam = function() {
    if (count >= qiyamc) {
        count = count - qiyamc
        document.getElementById("display").innerHTML = count + " Hassanat";
        qiyamp = qiyamp + 1
        qiyamc = Math.floor(qiyamc * Math.pow(1.06,qiyamp))
        document.getElementById("qiyamCost").innerHTML = "Cost: " + qiyamc + " Hs | Purchased: " + qiyamp;
        imanBoostCalc()
    }
    else {
        alert("Not enough Hassanat!")
    }
    if (s5 === true) {
    s1 = false
    s2 = false
    s3 = false
    s4 = false
    s5 = false
    s6 = true
    s7 = false
    s8 = false
    }
}
var itikaf = function() {
    if (count >= itikafc) {
        count = count - itikafc
        document.getElementById("display").innerHTML = count + " Hassanat";
        itikafp = itikafp + 1
        itikafc = Math.floor(itikafc * Math.pow(1.065,itikafp))
        document.getElementById("itikafCost").innerHTML = "Cost: " + itikafc + " Hs | Purchased: " + itikafp;
        imanBoostCalc()
    }
    else {
        alert("Not enough Hassanat!")
    }
}
var zakah = function() {
    if (count >= zakahc) {
        count = count - zakahc
        document.getElementById("display").innerHTML = count + " Hassanat";
        zakahp = zakahp + 1
        zakahc = Math.floor(zakahc * Math.pow(1.07,zakahp))
        document.getElementById("zakahCost").innerHTML = "Cost: " + zakahc + " Hs | Purchased: " + zakahp;
        imanBoostCalc()
    }
    else {
        alert("Not enough Hassanat!")
    }
    if (s6 === true) {
    s1 = false
    s2 = false
    s3 = false
    s4 = false
    s5 = false
    s6 = false
    s7 = true
    s8 = false
    }
}
var sawm = function() {
    if (count >= sawmc) {
        count = count - sawmc
        document.getElementById("display").innerHTML = count + " Hassanat";
        sawmp = sawmp + 1
        sawmc = Math.floor(sawmc * Math.pow(1.075,sawmp))
        document.getElementById("sawmCost").innerHTML = "Cost: " + sawmc + " Hs | Purchased: " + sawmp;
        imanBoostCalc()
    }
    else {
        alert("Not enough Hassanat!")
    }
}
var sunnahSawm = function() {
    if (count >= sunnahSawmc) {
        count = count - sunnahSawmc
        document.getElementById("display").innerHTML = count + " Hassanat";
        sunnahSawmp = sunnahSawmp + 1
        sunnahSawmc = Math.floor(sunnahSawmc * Math.pow(1.08,sunnahSawmp))
        document.getElementById("sunnahSawmCost").innerHTML = "Cost: " + sunnahSawmc + " Hs | Purchased: " + sunnahSawmp;
        imanBoostCalc()
    }
    else {
        alert("Not enough Hassanat!")
    }
    if (s7 === true) {
    s1 = false
    s2 = false
    s3 = false
    s4 = false
    s5 = false
    s6 = false
    s7 = false
    s8 = true
    }
}
var umrah = function() {
    if (count >= umrahc) {
        count = count - umrahc
        document.getElementById("display").innerHTML = count + " Hassanat";
        umrahp = umrahp + 1
        umrahc = Math.floor(umrahc * Math.pow(1.085,umrahp))
        document.getElementById("umrahCost").innerHTML = "Cost: " + umrahc + " Hs | Purchased: " + umrahp;
        imanBoostCalc()
    }
    else {
        alert("Not enough Hassanat!")
    }
}
var hajj = function() {
    if (count >= hajjc) {
        count = count - hajjc
        document.getElementById("display").innerHTML = count + " Hassanat";
        hajjp = hajjp + 1
        hajjc = Math.floor(hajjc * Math.pow(1.09,hajjp))
        document.getElementById("HajjCost").innerHTML = "Cost: " + hajjc + " Hs | Purchased: " + hajjp;
        imanBoostCalc()
    }
    else {
        alert("Not enough Hassanat!")
    }
    if (s8 === true) {
    s1 = false
    s2 = false
    s3 = false
    s4 = false
    s5 = false
    s6 = false
    s7 = false
    s8 = false
    count = count * 2
    document.getElementById("display").innerHTML = count + " Hassanat";
    document.getElementById("secret").style.display = "block";
    }
}
var imanBoostCalc = function() {
    window.imanBoost = (smilep * 0.1) + (thikrp * 1) + (tasbeehp * 5) + (duaap * 10) + (rdgQuranp * 20) + (obeyParentsp * 50) + (naflSalahp * 100) + (charityp * 200) + (fardSalahp * 500) + (taraweehp * 1000) + (qiyamp * 2000) + (itikafp * 5000) + (zakahp * 10000) + (sawmp * 20000) + (sunnahSawmp * 50000) + (umrahp * 100000) + (hajjp * 200000)
    imanBoost = Math.round(imanBoost*10)/10
    document.getElementById("imanboostcalc").innerHTML = p3 + " Hps";
}; 
window.setInterval(function(){
	count = Math.round((count + imanBoost)*10)/10
	document.getElementById("display").innerHTML = count + " Hassanat";
	p2 = count - p1 - imanBoost
	p1 = count
	window.p3 = Math.round((imanBoost + p2)*10)/10
	document.getElementById("imanboostcalc").innerHTML = p3 + " Hps";

}, 1000);
window.setInterval(function(){
	window.count = window.localStorage.getItem("countcount") / 10
}, 10000);
var secret = function(){
    count = count + (count*0.75)
    document.getElementById("display").innerHTML = count + " Hassanat";
}
