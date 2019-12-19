document.getElementById("total-shipments").innerHTML = `${totalShipments} Shipments`
document.getElementById("total-containers").innerHTML = `Comprising ${totalContainers} containers`
document.getElementById("filings-overall").innerHTML = `Overall Filings - ${AMS + ISF + CST + door + truck}`
document.getElementById("filings-ams").innerHTML = `AMS - ${AMS}`
document.getElementById("filings-isf").innerHTML = `ISF - ${ISF}`
document.getElementById("filings-cst").innerHTML = `CST - ${CST}`
document.getElementById("filings-do").innerHTML = `Delivery Orders - ${door + truck}`
document.getElementById("door-moves-sss").innerHTML = `SSS Trucking - ${truck}`
document.getElementById("door-moves-cy").innerHTML = `Carrier Trucking - ${door}`
document.getElementById("analytics-extract").innerHTML = `${totalShipments} Shipments for <span class="highlight-2">${uniqCNEES.length} different customers</span> via ${uniqAGENTS.length} agents - as a whole handled ${totalContainers} containers`
document.getElementById("HOF-scac").innerHTML = `Most shipments handled through<i class="fa fa-ship fa-2x" aria-hidden="true"></i><span class="hall-of-famer">${HOFcarrier}</span>`
document.getElementById("HOF-cnee").innerHTML = `Most shipments handled for<i class="fa fa-users fa-2x" aria-hidden="true"></i><span class="hall-of-famer">${HOFconsignee}</span>`
document.getElementById("HOF-agent").innerHTML = `Most shipments provided by<i class="fa fa-user-secret fa-2x" aria-hidden="true"></i><span class="hall-of-famer">${HOFagent}</span>`
document.getElementById("HOF-pod").innerHTML = `Most shipments discharge at<i class="fa fa-map-marker fa-2x" aria-hidden="true"></i><span class="hall-of-famer">${HOFpod}</span>`


$(document).ready(function(){
	$('#ui-port-box').show();
	$('#ui-agent-box').hide();
	$('#ui-fpod-box').hide();
	$('#ui-carrier-box').hide();

	$('#ui-port').on('click',function(){
		$('#ui-port-box').show();
		$('#ui-agent-box').hide();
		$('#ui-fpod-box').hide();
		$('#ui-carrier-box').hide();
	})

	$('#ui-cnee').on('click',function(){
		$('#ui-port-box').hide();
		$('#ui-agent-box').hide();
		$('#ui-fpod-box').hide();
		$('#ui-carrier-box').hide();
	})

	$('#ui-agent').on('click',function(){
		$('#ui-agent-box').show();
		$('#ui-port-box').hide();
		$('#ui-fpod-box').hide();
		$('#ui-carrier-box').hide();
	})

	$('#ui-carrier').on('click',function(){
		$('#ui-carrier-box').show();
		$('#ui-agent-box').hide();
		$('#ui-port-box').hide();
		$('#ui-fpod-box').hide();
	})

	$('#ui-fpod').on('click',function(){
		$('#ui-fpod-box').show();
		$('#ui-carrier-box').hide();
		$('#ui-agent-box').hide();
		$('#ui-port-box').hide();
	})
})