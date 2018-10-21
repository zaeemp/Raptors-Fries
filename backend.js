let url = "https://stats.nba.com/stats/teamgamelog/?TeamID=1610612761&Season=2018-19&SeasonType=Regular%20Season"

var nba_data = 1;

$.ajax({
   type: 'GET',
   crossDomain: true,
   dataType: 'jsonp',
   url: url,
   success: success
});

function success(data) {
	nba_data = (data.resultSets[0].rowSet);
	var trHTML = '';
	$.each(nba_data, function (i, item) {
            trHTML += '<tr><td>' + nba_data[i][2] + '</td><td>' + nba_data[i][3] + '</td><td>' + nba_data[i][12] + '</td></tr>';
        });
    $('#records_table').append(trHTML);
    var millis = Date.now() - Date.parse(nba_data[0][2]);
    var difference = Math.floor(millis/1000);

    if ((difference < 187200) && (nba_data[0][12] >= 12)){
    	alert("FREE FRIES!")
    }
}


//nba_data = jsondata.resultSets[0].rowSet;