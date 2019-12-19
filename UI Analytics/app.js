// Unique SCACS

let SCACS = uniqSCACS = []

for (let i = 0; i < shipments.length; i++)
   if(shipments[i].SCAC) SCACS.push(shipments[i].SCAC)

function removeDuplicateSCAC(arr) { 
    uniqSCACS = Array.from(new Set(arr)) 
    return uniqSCACS 
} 

console.log(removeDuplicateSCAC(SCACS))

// Unique Consignee
let CNEES = uniqCNEES = []

for (let i = 0; i < shipments.length; i++)
   if(shipments[i].CNEE) CNEES.push(shipments[i].CNEE)

function removeDuplicateCNEE(arr) { 
    uniqCNEES = Array.from(new Set(arr)) 
    return uniqCNEES 
} 

console.log(removeDuplicateCNEE(CNEES))

// Unique Agents
let AGENTS = uniqAGENTS = []

for (let i = 0; i < shipments.length; i++)
   if(shipments[i].AGENT) AGENTS.push(shipments[i].AGENT)

function removeDuplicateAGENT(arr) { 
    uniqAGENTS = Array.from(new Set(arr)) 
    return uniqAGENTS 
} 

console.log(removeDuplicateAGENT(AGENTS))

// Unique Transport
let PRDTS = uniqPRDTS = []

for (let i = 0; i < shipments.length; i++)
   if(shipments[i].PRDT) PRDTS.push(shipments[i].PRDT)

function removeDuplicatePRDT(arr) { 
    uniqPRDTS = Array.from(new Set(arr)) 
    return uniqPRDTS 
} 

console.log(removeDuplicatePRDT(PRDTS))

// Unique Port
let PODS = uniqPODS = []

for (let i = 0; i < shipments.length; i++)
   if(shipments[i].POD) PODS.push(shipments[i].POD)

function removeDuplicatePOD(arr) { 
    uniqPODS = Array.from(new Set(arr)) 
    return uniqPODS 
} 

console.log(removeDuplicatePOD(PODS))

// UNIQUE FILINGS
let uniqAICS = ['A','I','C']

// document.getElementById("month").innerHTML = month