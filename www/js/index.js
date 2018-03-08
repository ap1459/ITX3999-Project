/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }

};


//Splash Screen
function splashScreen() {

}


//==============================================================================
//==============================================================================

function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("icon").style.transform = "rotate(90deg)";
    document.getElementById("icon").style.transition = "all 0.5s";
   
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("icon").style.transform = "rotate(-180deg)";
    document.getElementById("icon").style.transition = "all 0.5s";
}



//Method for back button
function goBack() {
    window.history.back();
}








function readXML() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
      }
    };
    xmlhttp.open("GET", "newsFeed.xml", true);
    xmlhttp.send();
  }


function getXML() {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           // Typical action to be performed when the document is ready:
           document.getElementById("xmlData").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", "../newsFeed.xml", true);
    xhttp.send();
}









// QUIZ

// scripts here:

 // Load google charts
 google.charts.load('current', {'packages':['corechart']});
 google.charts.setOnLoadCallback(drawChart);

 function drawchart1() {

    var data = google.visualization.arrayToDataTable([
    ["Score", 4]])

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);


    }

// Pie chart for 4/4
    function piechart1() {
    var data = [
            {x:"Correct", value: 4},
            {x:"Incorrect", value: 0}
        ]
        //Make the chart
        var chart = anychart.pie();
        //Chart title
        chart.title("Social Media Quiz Score");
        //Populate the chart
        chart.data(data);
        //Legend position
        chart.legend().position("right");
        //Items layout
        chart.legend().itemsLayout("vertical"); 
        //Display in relevant Div
        chart.container("piechart")
        chart.draw();
}

// Pie chart for 3/4
function piechart2() {
    var data = [
        {x:"Correct", value: 3},
        {x:"Incorrect", value: 1}
    ]
    //Make the chart
    var chart = anychart.pie();
    //Chart title
    chart.title("Social Media Quiz Score");
    //Populate the chart
    chart.data(data);
    //Legend position
    chart.legend().position("right");
    //Items layout
    chart.legend().itemsLayout("vertical"); 
    //Display in relevant Div
    chart.container("piechart")
    chart.draw();
}

// Pie chart for 2/4
function piechart3() {
    var data = [
        {x:"Correct", value: 2},
        {x:"Incorrect", value: 2}
    ]
    //Make the chart
    var chart = anychart.pie();
    //Chart title
    chart.title("Social Media Quiz Score");
    //Populate the chart
    chart.data(data);
    //Legend position
    chart.legend().position("right");
    //Items layout
    chart.legend().itemsLayout("vertical"); 
    //Display in relevant Div
    chart.container("piechart")
    chart.draw();
}

// Pie chart for 1/4
function piechart4() {
    var data = [
        {x:"Correct", value: 1},
        {x:"Incorrect", value: 3}
    ]
    //Make the chart
    var chart = anychart.pie();
    //Chart title
    chart.title("Social Media Quiz Score");
    //Populate the chart
    chart.data(data);
    //Legend position
    chart.legend().position("right");
    //Items layout
    chart.legend().itemsLayout("vertical"); 
    //Display in relevant Div
    chart.container("piechart")
    chart.draw();
}

// Pie chart for 0/4
function piechart5() {
    var data = [
        {x:"Correct", value: 0},
        {x:"Incorrect", value: 4}
    ]
    //Make the chart
    var chart = anychart.pie();
    //Chart title
    chart.title("Social Media Quiz Score");
    //Populate the chart
    chart.data(data);
    //Legend position
    chart.legend().position("right");
    //Items layout
    chart.legend().itemsLayout("vertical"); 
    //Display in relevant Div
    chart.container("piechart")
    chart.draw();
}