// VARIABLES
let totalShipments, totalContainers
let AMS, ISF, CST
let door, truck
let topCarriers = [], maxScac = [], maxCnee = [], maxAgent = [], maxPod = []
let HOFcarrier = '', HOFconsignee = '', HOFagent = '', HOFpod = ''

// CODE GOES HERE
console.log('')

function scacShipments(scac) {
	let cntCount = shipCount = 0
	for(let i = 0; i < shipments.length; i++){
		if(shipments[i].SCAC === scac){
			cntCount += shipments[i].NOC
			shipCount++
		}
	}
	if(shipCount > 0){
		console.log(`${scac} - ${shipCount} shipments (${cntCount} containers)`)
		shipmentsByCarrier(scac, shipCount, cntCount)
	}
	maxScac.push(shipCount)
}

function shipmentsByCarrier(scac, shipCount, cntCount) {
	var node = document.createElement("LI");
	var textnode = document.createTextNode(`${scac} - ${shipCount} shipments (${cntCount} containers)`);
	node.appendChild(textnode);
	let selection = document.getElementById("carrier-list").appendChild(node);
	if(shipCount >= 10){
		selection.classList.add("highlight");
		topCarriers.push(shipCount)
	}
}

console.log(topCarriers)

// return no of shipments based on carrier
uniqSCACS.forEach(scacShipments)
// console.log(Math.max(...maxScac))

function scacHOF(scac) {
	let HOFscac = []
	let shipCount = 0
	for(let i = 0; i < shipments.length; i++){
		if(shipments[i].SCAC === scac){
			shipCount++
		}
	}
	if(shipCount === Math.max(...maxScac)) {
		console.log(scac + ' - Hall Of Famer - ' + Math.max(...maxScac))
		HOFscac.push(scac)
	}
	for(let i = 0; i < HOFscac.length; i++) {
		HOFcarrier += `${HOFscac[i]} `
	}
}

uniqSCACS.forEach(scacHOF)

// console.log(HOFscac)

// return no of shipments & no of containers count
function noOfShipments(){
	let cntCount = shipCount = 0
	for(let i = 0; i < shipments.length; i++){
		cntCount += shipments[i].NOC
		if(shipments[i].MBL) shipCount++
	}
	console.log(`Total Shipments / Arrival Notices Created : ${shipCount}`)
	console.log(`Total Containers : ${cntCount}`)
	totalShipments = shipCount
	totalContainers = cntCount
}

console.log('')
noOfShipments()
console.log('')

// return no of shipments based on cnee
function cneeShipments(cnee) {
	let cntCount = shipCount = 0, cnee_scopes
	for(let i = 0; i < shipments.length; i++){
		if(shipments[i].CNEE === cnee){
			cntCount += shipments[i].NOC
			shipCount++
		}
	}
	if(shipCount > 0){
		console.log(`${cnee} - ${shipCount} shipments (${cntCount} containers)`)
		shipmentsByCnee(cnee, shipCount, cntCount)
		maxCnee.push(shipCount)
	}
}

function shipmentsByCnee(cnee, shipCount, cntCount) {
	var node = document.createElement("LI");
	var textnode = document.createTextNode(`${cnee} - ${shipCount} shipments (${cntCount} containers)`);
	node.appendChild(textnode);
	let selection = document.getElementById("cnee-list").appendChild(node);
	if(shipCount >= 5)
		selection.classList.add("highlight");
}

uniqCNEES.forEach(cneeShipments)
console.log('')

function cneeHOF(cnee) {
	let HOFcnee = []
	let shipCount = 0
	for(let i = 0; i < shipments.length; i++){
		if(shipments[i].CNEE === cnee){
			shipCount++
		}
	}
	if(shipCount === Math.max(...maxCnee)) {
		console.log(cnee + ' - Hall Of Famer - ' + Math.max(...maxCnee))
		HOFcnee.push(cnee)
	}
	for(let i = 0; i < HOFcnee.length; i++) {
		HOFconsignee += `${HOFcnee[i]} `
	}
}
uniqCNEES.forEach(cneeHOF)

// return no of shipments based on agent
function agentShipments(agent) {
	let cntCount = shipCount = 0
	for(let i = 0; i < shipments.length; i++){
		if(shipments[i].AGENT === agent){
			cntCount += shipments[i].NOC
			shipCount++
		}
	}
	if(shipCount > 0){
		console.log(`${agent} - ${shipCount} shipments (${cntCount} containers)`)
		shipmentsByAgents(agent, shipCount, cntCount)
		maxAgent.push(shipCount)
	}
}


function shipmentsByAgents(agent, shipCount, cntCount) {
	var node = document.createElement("LI");
	var textnode = document.createTextNode(`${agent} - ${shipCount} shipments (${cntCount} containers)`);
	node.appendChild(textnode);
	let selection = document.getElementById("agent-list").appendChild(node);
	if(shipCount >= 10)
		selection.classList.add("highlight");
}

uniqAGENTS.forEach(agentShipments)
console.log('')
// console.log(maxAgent + 'bomb')

function agentHOF(agent) {
	// let HOFagent = []
	let shipCount = 0
	for(let i = 0; i < shipments.length; i++){
		if(shipments[i].AGENT === agent){
			shipCount++
		}
	}
	console.log(shipCount + ' demo')
	if(shipCount === Math.max(...maxAgent)) {
		console.log(agent + ' - Hall Of Famer - ' + Math.max(...maxAgent))
		// HOFagent.push(agent)
		HOFagent += agent
	}
}

console.log(HOFagent + 'output')

uniqAGENTS.forEach(agentHOF)

// return no of shipments based on transport
function PRDTShipments(prdt) {
	let cntCount = shipCount = 0
	for(let i = 0; i < shipments.length; i++){
		if(shipments[i].PRDT === prdt){
			cntCount += shipments[i].NOC
			shipCount++
		}
	}
	if(shipCount > 0){
		console.log(`${prdt} - ${shipCount} shipments (${cntCount} containers)`)
		shipmentsByPRDT(prdt, shipCount, cntCount)
	}
}

function shipmentsByPRDT(prdt, shipCount, cntCount) {
	var node = document.createElement("LI");
	var textnode = document.createTextNode(`${prdt} - ${shipCount} shipments (${cntCount} containers)`);
	node.appendChild(textnode);
	let selection = document.getElementById("fpod-list").appendChild(node);
	if(shipCount >= 10)
		selection.classList.add("highlight");
}

uniqPRDTS.forEach(PRDTShipments)
console.log('')

// return no of shipments based on transport
function PODShipments(pod) {
	let cntCount = shipCount = 0
	for(let i = 0; i < shipments.length; i++){
		if(shipments[i].POD === pod){
			cntCount += shipments[i].NOC
			shipCount++
		}
	}
	if(shipCount > 0){
		console.log(`${pod} PORT DISCHARGES - ${shipCount} shipments (${cntCount} containers)`)
		shipmentsByPort(pod, shipCount, cntCount)
		maxPod.push(shipCount)
	}
}

function shipmentsByPort(pod, shipCount, cntCount) {
	var node = document.createElement("LI");
	var textnode = document.createTextNode(`${pod} PORT - ${shipCount} shipments (${cntCount} containers)`);
	node.appendChild(textnode);
	let selection = document.getElementById("port-list").appendChild(node);
	if(shipCount >= 10)
		selection.classList.add("highlight");
}

uniqPODS.forEach(PODShipments)
console.log('')

function podHOF(pod) {
	// let HOFagent = []
	let shipCount = 0
	for(let i = 0; i < shipments.length; i++){
		if(shipments[i].POD === pod){
			shipCount++
		}
	}
	console.log(shipCount + ' port')
	if(shipCount === Math.max(...maxPod)) {
		console.log(pod + ' - Hall Of Famer - ' + Math.max(...maxPod))
		// HOFagent.push(agent)
		HOFpod += pod
	}
}

console.log(HOFpod + 'output')

uniqPODS.forEach(podHOF)

let AICS = []
for (let i = 0; i < shipments.length; i++)
   if(shipments[i].AIC) AICS.push(shipments[i].AIC)
console.log(AICS)

countAIC()

function countAIC() {
	let A = I = C = 0
	for(let i = 0; i < AICS.length; i++){
		if(AICS[i].indexOf(uniqAICS[0]) != -1)
			A++
		if(AICS[i].indexOf(uniqAICS[1]) != -1)
			I++
		if(AICS[i].indexOf(uniqAICS[2]) != -1)
			C++
	}
	console.log(`${A} AMS, ${I} ISF, ${C} CUSTOMS`)
	console.log('')
	AMS = A
	ISF = I
	CST = C
}

countDT()

function countDT() {
	let D = T = 0
	for(let i = 0; i < shipments.length; i++){
		if(shipments[i].PRDT === "D") D++
		if(shipments[i].PRDT === "T") T++
	}
	door = D
	truck = T
}

function maxFinder() {
	let maxCNT = [], tempMaxCnt = []
	for(let i = 0; i < shipments.length; i++){
		maxCNT.push(shipments[i].NOC)
		if(shipments[i].NOC === Math.max(...maxCNT)) tempMaxCnt.push(shipments[i].CNEE)
	}
	// console.log(Math.max(...maxCNT))
	// HOF[0] = tempMaxCnt[tempMaxCnt.length - 1]
	console.log(tempMaxCnt)
}

maxFinder()