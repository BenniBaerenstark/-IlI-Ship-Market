// ==UserScript==
// @name         IlI Ship Market
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Revan
// @match        https://last-war.de/main.php
// @match        https://www.last-war.de/main.php
// @grant        none
// ==/UserScript==

(function() {

    'use strict';

    var input

        document.getElementById("trade_offer").addEventListener("click", handelClicked, false);


    function handelClicked(){
        setTimeout(function(){
            document.getElementsByClassName("navButton bigNavButton")[0].addEventListener("click", neuerHandelClicked, false)
        }, 300);
    }

    function neuerHandelClicked(){
        setTimeout(function(){
           input = document.createElement("INPUT");
           input.setAttribute("style", "float: right; vertical-align: middle; width: 50px;");
           input.type = "number"
           var btn = document.createElement("A");
           btn.classList.add("formButtonNewMessage")
           btn.innerHTML = "Armageddon"
           btn.setAttribute("style", "float: right;");
           btn.addEventListener("click", setTrade, false);
           var parent = document.getElementsByClassName("formButtonNewMessage")[0].parentElement
           parent.appendChild(btn)
           parent.appendChild(input)
           
        }, 300);
    }

    var ships = new Array()
    const name = 0
    const att = 1
    const def = 2
    const drive = 3
    const drive_s = 4
    const freight = 5
    const lkom = 6
    const tt = 7
    const fe = 8
    const kr = 9
    const fb = 10
    const or = 11
    const fz = 12
    const go = 13

    //Armageddon
    ships[0] = new Array()
    ships[0][name] = "Армагеддон"
    ships[0][att] = 15270
    ships[0][def] = 10066
    ships[0][drive] = "NUK"
    ships[0][drive_s] = 160
    ships[0][freight] = 120
    ships[0][lkom] = true
    ships[0][tt] = false
    ships[0][fe] = 27144
    ships[0][kr] = 51422
    ships[0][fb] = 456
    ships[0][or] = 35978
    ships[0][fz] = 17737
    ships[0][go] = 100

    // setTrade(0,1)

    function setTrade(){
        var ship = 0
        var quantity = input.value
        if (parseInt(quantity) > 1){
            document.getElementById("my_eisen").value = quantity * ships[ship][fe]
            document.getElementById("my_kristall").value = quantity * ships[ship][kr]
            document.getElementById("my_frubin").value = quantity * ships[ship][fb]
            document.getElementById("my_orizin").value = quantity * ships[ship][or]
            document.getElementById("my_frurozin").value = quantity * ships[ship][fz]
            document.getElementById("my_gold").value = quantity * ships[ship][go]
        }
    }

})();
