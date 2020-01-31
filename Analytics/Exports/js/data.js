// var rawData = [
//   {
//     "MONTH": 1,
//     "SHIPPER": "DIGIRAD",
//     "AGENT": "PARULEKARS",
//     "COST": 4446.8,
//     "BILLED": 5398,
//     "PROFIT": 951.2
//   },
//   {
//     "MONTH": 1,
//     "SHIPPER": "BIO-TECH",
//     "AGENT": "MCCALUM",
//     "COST": 704.85,
//     "BILLED": 943.35,
//     "PROFIT": 238.5
//   },
//   {
//     "MONTH": 1,
//     "SHIPPER": "TEMA ISENMANN",
//     "AGENT": "SMR LOGISTICS",
//     "COST": 1010.09,
//     "BILLED": 1239.76,
//     "PROFIT": 229.67
//   },
//   {
//     "MONTH": 1,
//     "SHIPPER": "RELIANT",
//     "AGENT": "RELIANT",
//     "COST": 326.58,
//     "BILLED": 528.13,
//     "PROFIT": 201.55
//   },
//   {
//     "MONTH": 1,
//     "SHIPPER": "SOLGAR -AIR",
//     "AGENT": "OPAL",
//     "COST": 3917.85,
//     "BILLED": 4613.75,
//     "PROFIT": 695.9
//   },
//   {
//     "MONTH": 1,
//     "SHIPPER": "LUCKY",
//     "AGENT": "TEKNAF",
//     "COST": 811,
//     "BILLED": 1160,
//     "PROFIT": 349
//   },
//   {
//     "MONTH": 1,
//     "SHIPPER": "SOLGAR",
//     "AGENT": "OPAL",
//     "COST": 7115.6,
//     "BILLED": 9280,
//     "PROFIT": 2164.4
//   },
//   {
//     "MONTH": 1,
//     "SHIPPER": "VISUAL",
//     "AGENT": "OPAL",
//     "COST": 2080.72,
//     "BILLED": 2528.4,
//     "PROFIT": 447.68
//   },
//   {
//     "MONTH": 1,
//     "SHIPPER": "LIQUID CONTROL",
//     "AGENT": "FIDESTALOG",
//     "COST": 419.35,
//     "BILLED": 594.55,
//     "PROFIT": 175.2
//   },
//   {
//     "MONTH": 1,
//     "SHIPPER": "CORKEN",
//     "AGENT": "FIDESTALOG",
//     "COST": 1050.45,
//     "BILLED": 1168.1,
//     "PROFIT": 117.65
//   },
//   {
//     "MONTH": 1,
//     "SHIPPER": "VISUAL",
//     "AGENT": "OPAL",
//     "COST": 390,
//     "BILLED": 520,
//     "PROFIT": 130
//   },
//   {
//     "MONTH": 1,
//     "SHIPPER": "JOEL",
//     "AGENT": "THREADMAKER",
//     "COST": 1645.59,
//     "BILLED": 2350,
//     "PROFIT": 704.41
//   },
//   {
//     "MONTH": 1,
//     "SHIPPER": "CUMMINS",
//     "AGENT": "NEW GLOBE",
//     "COST": 529.64,
//     "BILLED": 638.6,
//     "PROFIT": 108.96
//   },
//   {
//     "MONTH": 1,
//     "SHIPPER": "JOEL",
//     "AGENT": "THREADMAKER",
//     "COST": 1752.52,
//     "BILLED": 2450,
//     "PROFIT": 697.48
//   },
//   {
//     "MONTH": 1,
//     "SHIPPER": "CALMETRIX",
//     "AGENT": "DAGA",
//     "COST": 432.68,
//     "BILLED": 615,
//     "PROFIT": 182.32
//   },
//   {
//     "MONTH": 1,
//     "SHIPPER": "WELSET",
//     "AGENT": "WORLDLINE",
//     "COST": 2607.5,
//     "BILLED": 2800,
//     "PROFIT": 192.5
//   },
//   {
//     "MONTH": 2,
//     "SHIPPER": "RELIANT",
//     "AGENT": "RELIANT",
//     "COST": 310,
//     "BILLED": 450,
//     "PROFIT": 140
//   },
//   {
//     "MONTH": 2,
//     "SHIPPER": "BIO CREATIVE",
//     "AGENT": "OPAL",
//     "COST": 1634.9,
//     "BILLED": 2440,
//     "PROFIT": 805.1
//   },
//   {
//     "MONTH": 2,
//     "SHIPPER": "RELIANT",
//     "AGENT": "RELIANT",
//     "COST": 413.74,
//     "BILLED": 815.8,
//     "PROFIT": 402.06
//   },
//   {
//     "MONTH": 2,
//     "SHIPPER": "NUTRAWISE",
//     "AGENT": "OPAL",
//     "COST": 891.45,
//     "BILLED": 1123.45,
//     "PROFIT": 232
//   },
//   {
//     "MONTH": 2,
//     "SHIPPER": "TEMPO",
//     "AGENT": "TRANS E R",
//     "COST": 1123.84,
//     "BILLED": 1326.97,
//     "PROFIT": 203.13
//   },
//   {
//     "MONTH": 2,
//     "SHIPPER": "HANGSTERFER",
//     "AGENT": "RYDERLINES",
//     "COST": "",
//     "BILLED": "",
//     "PROFIT": 180
//   },
//   {
//     "MONTH": 2,
//     "SHIPPER": "US COTTON",
//     "AGENT": "OPAL",
//     "COST": 1708.52,
//     "BILLED": 2205,
//     "PROFIT": 496.48
//   },
//   {
//     "MONTH": 2,
//     "SHIPPER": "EDTECH",
//     "AGENT": "ANGEL RUIZ",
//     "COST": 940.08,
//     "BILLED": 1265.32,
//     "PROFIT": 325.24
//   },
//   {
//     "MONTH": 2,
//     "SHIPPER": "HANGSTERFER",
//     "AGENT": "RYDERLINES",
//     "COST": "",
//     "BILLED": "",
//     "PROFIT": 180
//   },
//   {
//     "MONTH": 2,
//     "SHIPPER": "AMPRONIX",
//     "AGENT": "INDIANA FREIGHT",
//     "COST": 355,
//     "BILLED": 510,
//     "PROFIT": 155
//   },
//   {
//     "MONTH": 2,
//     "SHIPPER": "PRECOR",
//     "AGENT": "RYDERLINES",
//     "COST": "",
//     "BILLED": "",
//     "PROFIT": 150
//   },
//   {
//     "MONTH": 2,
//     "SHIPPER": "LIQUID CONTROL",
//     "AGENT": "FIDESTALOG",
//     "COST": 2077.26,
//     "BILLED": 2408.96,
//     "PROFIT": 331.7
//   },
//   {
//     "MONTH": 2,
//     "SHIPPER": "TOLCO",
//     "AGENT": "RYDERLINES",
//     "COST": "",
//     "BILLED": "",
//     "PROFIT": 150
//   },
//   {
//     "MONTH": 2,
//     "SHIPPER": "SOLGAR",
//     "AGENT": "OPAL",
//     "COST": 6920,
//     "BILLED": 9105,
//     "PROFIT": 2185
//   },
//   {
//     "MONTH": 3,
//     "SHIPPER": "JOEL",
//     "AGENT": "JOEL",
//     "COST": 1654.24,
//     "BILLED": 2177.5,
//     "PROFIT": 523.26
//   },
//   {
//     "MONTH": 3,
//     "SHIPPER": "WR GROUP",
//     "AGENT": "OPAL",
//     "COST": 457,
//     "BILLED": 656.92,
//     "PROFIT": 199.92
//   },
//   {
//     "MONTH": 3,
//     "SHIPPER": "BIO-TECH",
//     "AGENT": "MCCALUM",
//     "COST": 290.11,
//     "BILLED": 450,
//     "PROFIT": 159.89
//   },
//   {
//     "MONTH": 3,
//     "SHIPPER": "HANGSTERFER",
//     "AGENT": "RYDERLINES",
//     "COST": "",
//     "BILLED": "",
//     "PROFIT": 190
//   },
//   {
//     "MONTH": 3,
//     "SHIPPER": "WELSET",
//     "AGENT": "WORLDLINE",
//     "COST": 1392,
//     "BILLED": 2150,
//     "PROFIT": 758
//   },
//   {
//     "MONTH": 3,
//     "SHIPPER": "UNIVERSAL",
//     "AGENT": "OPAL",
//     "COST": 347,
//     "BILLED": 484.5,
//     "PROFIT": 137.5
//   },
//   {
//     "MONTH": 3,
//     "SHIPPER": "AMPRONIX",
//     "AGENT": "INDIANA FREIGHT",
//     "COST": 355,
//     "BILLED": 562,
//     "PROFIT": 207
//   },
//   {
//     "MONTH": 3,
//     "SHIPPER": "JOEL",
//     "AGENT": "THREADMAKER",
//     "COST": 1130.34,
//     "BILLED": 1800,
//     "PROFIT": 669.66
//   },
//   {
//     "MONTH": 4,
//     "SHIPPER": "JOEL",
//     "AGENT": "THREADMAKER",
//     "COST": 1357.94,
//     "BILLED": 1975,
//     "PROFIT": 617.06
//   },
//   {
//     "MONTH": 4,
//     "SHIPPER": "SUMMIT",
//     "AGENT": "ESTELL SHIPPING",
//     "COST": 3630,
//     "BILLED": 4050,
//     "PROFIT": 420
//   },
//   {
//     "MONTH": 4,
//     "SHIPPER": "SOLGAR",
//     "AGENT": "OPAL",
//     "COST": 6640,
//     "BILLED": 8705,
//     "PROFIT": 2065
//   },
//   {
//     "MONTH": 4,
//     "SHIPPER": "ROCKLAND",
//     "AGENT": "OPAL",
//     "COST": 2135.39,
//     "BILLED": 2530.2,
//     "PROFIT": 394.81
//   },
//   {
//     "MONTH": 4,
//     "SHIPPER": "IPC",
//     "AGENT": "WORLDLINE",
//     "COST": 372,
//     "BILLED": 522,
//     "PROFIT": 150
//   },
//   {
//     "MONTH": 4,
//     "SHIPPER": "KAPIL",
//     "AGENT": "EARTH RELOCATION",
//     "COST": 1991.59,
//     "BILLED": 2230,
//     "PROFIT": 238.41
//   },
//   {
//     "MONTH": 4,
//     "SHIPPER": "SOLGAR",
//     "AGENT": "OPAL",
//     "COST": 6540,
//     "BILLED": 8725,
//     "PROFIT": 2185
//   },
//   {
//     "MONTH": 5,
//     "SHIPPER": "AMPRONIX",
//     "AGENT": "INDIANA FREIGHT",
//     "COST": 390,
//     "BILLED": 560,
//     "PROFIT": 170
//   },
//   {
//     "MONTH": 5,
//     "SHIPPER": "JOEL",
//     "AGENT": "THREADMAKER",
//     "COST": 3401.08,
//     "BILLED": 3786.96,
//     "PROFIT": 385.88
//   },
//   {
//     "MONTH": 5,
//     "SHIPPER": "KAPIL",
//     "AGENT": "EARTH RELOCATION",
//     "COST": 1881.77,
//     "BILLED": 2115,
//     "PROFIT": 233.23
//   },
//   {
//     "MONTH": 5,
//     "SHIPPER": "HANGSTERFER",
//     "AGENT": "RYDERLINES",
//     "COST": "",
//     "BILLED": "",
//     "PROFIT": 190
//   },
//   {
//     "MONTH": 5,
//     "SHIPPER": "IPC",
//     "AGENT": "WORLDLINE",
//     "COST": 422,
//     "BILLED": 572,
//     "PROFIT": 150
//   },
//   {
//     "MONTH": 5,
//     "SHIPPER": "CAMBRO",
//     "AGENT": "OPAL",
//     "COST": 886.45,
//     "BILLED": 1103.58,
//     "PROFIT": 217.13
//   },
//   {
//     "MONTH": 5,
//     "SHIPPER": "CORKEN",
//     "AGENT": "FIDESTALOG",
//     "COST": 798.88,
//     "BILLED": 935,
//     "PROFIT": 136.12
//   },
//   {
//     "MONTH": 5,
//     "SHIPPER": "SOLGAR",
//     "AGENT": "OPAL",
//     "COST": 6540,
//     "BILLED": 8725,
//     "PROFIT": 2185
//   },
//   {
//     "MONTH": 5,
//     "SHIPPER": "PRECOR",
//     "AGENT": "RYDERLINES",
//     "COST": "",
//     "BILLED": "",
//     "PROFIT": 150
//   },
//   {
//     "MONTH": 5,
//     "SHIPPER": "OPAL",
//     "AGENT": "OPAL",
//     "COST": 247,
//     "BILLED": 402,
//     "PROFIT": 155
//   },
//   {
//     "MONTH": 5,
//     "SHIPPER": "OPAL",
//     "AGENT": "OPAL",
//     "COST": 250.65,
//     "BILLED": 412.34,
//     "PROFIT": 161.69
//   },
//   {
//     "MONTH": 5,
//     "SHIPPER": "IMPULSE",
//     "AGENT": "FREIGHT AGENCY",
//     "COST": 539.85,
//     "BILLED": 683.13,
//     "PROFIT": 143.28
//   },
//   {
//     "MONTH": 5,
//     "SHIPPER": "MTU AMERICA",
//     "AGENT": "RYDERLINES",
//     "COST": "",
//     "BILLED": "",
//     "PROFIT": 150
//   },
//   {
//     "MONTH": 6,
//     "SHIPPER": "SOLGAR",
//     "AGENT": "OPAL",
//     "COST": 6640,
//     "BILLED": 8725,
//     "PROFIT": 2085
//   },
//   {
//     "MONTH": 6,
//     "SHIPPER": "CAPSTONE",
//     "AGENT": "OPAL",
//     "COST": 22950,
//     "BILLED": 26395,
//     "PROFIT": 3445
//   },
//   {
//     "MONTH": 6,
//     "SHIPPER": "RELIANT",
//     "AGENT": "RELIANT",
//     "COST": 529.87,
//     "BILLED": 712,
//     "PROFIT": 182.13
//   },
//   {
//     "MONTH": 6,
//     "SHIPPER": "RELIANT",
//     "AGENT": "RELIANT",
//     "COST": 1489.87,
//     "BILLED": 2153.86,
//     "PROFIT": 663.99
//   },
//   {
//     "MONTH": 6,
//     "SHIPPER": "MTU AMERICA",
//     "AGENT": "RYDERLINES",
//     "COST": "",
//     "BILLED": "",
//     "PROFIT": 150
//   },
//   {
//     "MONTH": 6,
//     "SHIPPER": "KAPIL",
//     "AGENT": "EARTH RELOCATION",
//     "COST": 1302,
//     "BILLED": 1530,
//     "PROFIT": 228
//   },
//   {
//     "MONTH": 6,
//     "SHIPPER": "IPC",
//     "AGENT": "WORLDLINE",
//     "COST": 472,
//     "BILLED": 692,
//     "PROFIT": 220
//   },
//   {
//     "MONTH": 6,
//     "SHIPPER": "TROLL SYSTEM",
//     "AGENT": "SOTRADE",
//     "COST": 300.6,
//     "BILLED": 479.5,
//     "PROFIT": 178.9
//   },
//   {
//     "MONTH": 7,
//     "SHIPPER": "HANGSTERFER",
//     "AGENT": "RYDERLINES",
//     "COST": "",
//     "BILLED": "",
//     "PROFIT": 190
//   },
//   {
//     "MONTH": 7,
//     "SHIPPER": "ampronic",
//     "AGENT": "INDIANA FREIGHT",
//     "COST": 367,
//     "BILLED": 552,
//     "PROFIT": 185
//   },
//   {
//     "MONTH": 7,
//     "SHIPPER": "RELIANT",
//     "AGENT": "RELIANT",
//     "COST": 1154.74,
//     "BILLED": 1668.05,
//     "PROFIT": 513.31
//   },
//   {
//     "MONTH": 7,
//     "SHIPPER": "IOVATE",
//     "AGENT": "OPAL",
//     "COST": 14380,
//     "BILLED": 16650,
//     "PROFIT": 2270
//   },
//   {
//     "MONTH": 7,
//     "SHIPPER": "SOLGAR",
//     "AGENT": "OPAL",
//     "COST": 6550,
//     "BILLED": 8725,
//     "PROFIT": 2175
//   },
//   {
//     "MONTH": 7,
//     "SHIPPER": "IOVATE",
//     "AGENT": "OPAL",
//     "COST": 9760,
//     "BILLED": 12925,
//     "PROFIT": 3165
//   },
//   {
//     "MONTH": 7,
//     "SHIPPER": "IOVATE",
//     "AGENT": "OPAL",
//     "COST": 4730,
//     "BILLED": 5250,
//     "PROFIT": 520
//   },
//   {
//     "MONTH": 8,
//     "SHIPPER": "HANGSTERFER",
//     "AGENT": "RYDERLINES",
//     "COST": "",
//     "BILLED": "",
//     "PROFIT": 190
//   },
//   {
//     "MONTH": 8,
//     "SHIPPER": "TECHNICAL INDUS",
//     "AGENT": "RYDERLINES",
//     "COST": 1325,
//     "BILLED": 2000,
//     "PROFIT": 675
//   },
//   {
//     "MONTH": 8,
//     "SHIPPER": "IPC",
//     "AGENT": "WORLDLINE",
//     "COST": 277,
//     "BILLED": 542,
//     "PROFIT": 265
//   },
//   {
//     "MONTH": 8,
//     "SHIPPER": "JOEL",
//     "AGENT": "THREADMAKER",
//     "COST": 1359.9,
//     "BILLED": 1905,
//     "PROFIT": 545.1
//   },
//   {
//     "MONTH": 8,
//     "SHIPPER": "SOLGAR",
//     "AGENT": "OPAL",
//     "COST": 9942.65,
//     "BILLED": 12925,
//     "PROFIT": 2982.35
//   },
//   {
//     "MONTH": 8,
//     "SHIPPER": "EARTH",
//     "AGENT": "EARTH RELOCATION",
//     "COST": 2325,
//     "BILLED": 2550,
//     "PROFIT": 225
//   },
//   {
//     "MONTH": 8,
//     "SHIPPER": "MTU AMERICA",
//     "AGENT": "RYDERLINES",
//     "COST": "",
//     "BILLED": "",
//     "PROFIT": 150
//   },
//   {
//     "MONTH": 9,
//     "SHIPPER": "SIERRA NEVADA",
//     "AGENT": "OPAL",
//     "COST": 4820,
//     "BILLED": 5375,
//     "PROFIT": 555
//   },
//   {
//     "MONTH": 9,
//     "SHIPPER": "NANOCELLECT",
//     "AGENT": "N.A.NISSEN",
//     "COST": 715.3,
//     "BILLED": 990,
//     "PROFIT": 274.7
//   },
//   {
//     "MONTH": 9,
//     "SHIPPER": "LEXANI WHEELS",
//     "AGENT": "TONGJIN",
//     "COST": 719.12,
//     "BILLED": 980,
//     "PROFIT": 260.88
//   },
//   {
//     "MONTH": 9,
//     "SHIPPER": "BIO-TECH",
//     "AGENT": "MCCALUM",
//     "COST": 274.35,
//     "BILLED": 465,
//     "PROFIT": 190.65
//   },
//   {
//     "MONTH": 9,
//     "SHIPPER": "KHANNA",
//     "AGENT": "RYDERLINES",
//     "COST": "",
//     "BILLED": "",
//     "PROFIT": 200
//   },
//   {
//     "MONTH": 9,
//     "SHIPPER": "MARINE FENDERS",
//     "AGENT": "GAC",
//     "COST": 682.81,
//     "BILLED": 895.54,
//     "PROFIT": 212.73
//   },
//   {
//     "MONTH": 9,
//     "SHIPPER": "SOLGAR",
//     "AGENT": "OPAL",
//     "COST": 13591,
//     "BILLED": 17125,
//     "PROFIT": 3534
//   },
//   {
//     "MONTH": 9,
//     "SHIPPER": "JOEL",
//     "AGENT": "THREADMAKER",
//     "COST": 2308.9,
//     "BILLED": 2755,
//     "PROFIT": 446.1
//   },
//   {
//     "MONTH": 9,
//     "SHIPPER": "JOEL",
//     "AGENT": "THREADMAKER",
//     "COST": 1927.9,
//     "BILLED": 2575,
//     "PROFIT": 647.1
//   },
//   {
//     "MONTH": 10,
//     "SHIPPER": "AMPRONIX",
//     "AGENT": "INDIANA FREIGHT",
//     "COST": 367,
//     "BILLED": 545,
//     "PROFIT": 178
//   },
//   {
//     "MONTH": 10,
//     "SHIPPER": "G.A.PAPER",
//     "AGENT": "OSL",
//     "COST": "",
//     "BILLED": "",
//     "PROFIT": 100
//   },
//   {
//     "MONTH": 10,
//     "SHIPPER": "G.A.PAPER",
//     "AGENT": "OSL",
//     "COST": "",
//     "BILLED": "",
//     "PROFIT": 125
//   },
//   {
//     "MONTH": 10,
//     "SHIPPER": "KHANNA",
//     "AGENT": "RYDERLINES",
//     "COST": "",
//     "BILLED": "",
//     "PROFIT": 100
//   },
//   {
//     "MONTH": 10,
//     "SHIPPER": "VIKING",
//     "AGENT": "FIDESTALOG",
//     "COST": 719.21,
//     "BILLED": 866.95,
//     "PROFIT": 147.74
//   },
//   {
//     "MONTH": 10,
//     "SHIPPER": "KHANNA",
//     "AGENT": "RYDERLINES",
//     "COST": "",
//     "BILLED": "",
//     "PROFIT": 225
//   },
//   {
//     "MONTH": 10,
//     "SHIPPER": "BENDPAK",
//     "AGENT": "RELIANT",
//     "COST": 1323.23,
//     "BILLED": 1561.19,
//     "PROFIT": 237.96
//   },
//   {
//     "MONTH": 10,
//     "SHIPPER": "RELIANT",
//     "AGENT": "RELIANT",
//     "COST": 1439.02,
//     "BILLED": 1712.34,
//     "PROFIT": 273.32
//   },
//   {
//     "MONTH": 10,
//     "SHIPPER": "KHANNA",
//     "AGENT": "RYDERLINES",
//     "COST": "",
//     "BILLED": "",
//     "PROFIT": 200
//   },
//   {
//     "MONTH": 10,
//     "SHIPPER": "MARINE FENDERS",
//     "AGENT": "GAC",
//     "COST": 7063,
//     "BILLED": 8900,
//     "PROFIT": 1837
//   },
//   {
//     "MONTH": 10,
//     "SHIPPER": "JOEL",
//     "AGENT": "THREADMAKER",
//     "COST": 1086.2,
//     "BILLED": 1800,
//     "PROFIT": 713.8
//   },
//   {
//     "MONTH": 10,
//     "SHIPPER": "JOEL",
//     "AGENT": "THREADMAKER",
//     "COST": 3225,
//     "BILLED": 3570,
//     "PROFIT": 345
//   },
//   {
//     "MONTH": 10,
//     "SHIPPER": "SOLGAR",
//     "AGENT": "OPAL",
//     "COST": 3320,
//     "BILLED": 4525,
//     "PROFIT": 1205
//   },
//   {
//     "MONTH": 11,
//     "SHIPPER": "MARINE FENDERS",
//     "AGENT": "GAC",
//     "COST": 814.57,
//     "BILLED": 1029.99,
//     "PROFIT": 215.42
//   },
//   {
//     "MONTH": 11,
//     "SHIPPER": "EARTH",
//     "AGENT": "EARTH RELOCATION",
//     "COST": 780,
//     "BILLED": 1000,
//     "PROFIT": 220
//   },
//   {
//     "MONTH": 11,
//     "SHIPPER": "JOEL",
//     "AGENT": "THREADMAKER",
//     "COST": 1578.65,
//     "BILLED": 2575,
//     "PROFIT": 996.35
//   },
//   {
//     "MONTH": 11,
//     "SHIPPER": "IPC",
//     "AGENT": "WORLDLINE",
//     "COST": 1286.95,
//     "BILLED": 1532.42,
//     "PROFIT": 245.47
//   },
//   {
//     "MONTH": 11,
//     "SHIPPER": "KHANNA",
//     "AGENT": "RYDERLINES",
//     "COST": "",
//     "BILLED": "",
//     "PROFIT": 100
//   },
//   {
//     "MONTH": 11,
//     "SHIPPER": "KHANNA",
//     "AGENT": "RYDERLINES",
//     "COST": "",
//     "BILLED": "",
//     "PROFIT": 100
//   },
//   {
//     "MONTH": 11,
//     "SHIPPER": "KHANNA",
//     "AGENT": "RYDERLINES",
//     "COST": "",
//     "BILLED": "",
//     "PROFIT": 75
//   },
//   {
//     "MONTH": 11,
//     "SHIPPER": "KHANNA",
//     "AGENT": "RYDERLINES",
//     "COST": "",
//     "BILLED": "",
//     "PROFIT": 150
//   },
//   {
//     "MONTH": 11,
//     "SHIPPER": "KHANNA",
//     "AGENT": "RYDERLINES",
//     "COST": "",
//     "BILLED": "",
//     "PROFIT": 75
//   },
//   {
//     "MONTH": 11,
//     "SHIPPER": "KHANNA",
//     "AGENT": "RYDERLINES",
//     "COST": "",
//     "BILLED": "",
//     "PROFIT": 200
//   },
//   {
//     "MONTH": 11,
//     "SHIPPER": "KHANNA",
//     "AGENT": "RYDERLINES",
//     "COST": "",
//     "BILLED": "",
//     "PROFIT": 100
//   },
//   {
//     "MONTH": 11,
//     "SHIPPER": "MTU AMERICA",
//     "AGENT": "RYDERLINES",
//     "COST": "",
//     "BILLED": "",
//     "PROFIT": 150
//   },
//   {
//     "MONTH": 11,
//     "SHIPPER": "KHANNA",
//     "AGENT": "RYDERLINES",
//     "COST": "",
//     "BILLED": "",
//     "PROFIT": 150
//   },
//   {
//     "MONTH": 12,
//     "SHIPPER": "KHANNA",
//     "AGENT": "RYDERLINES",
//     "COST": "",
//     "BILLED": "",
//     "PROFIT": 100
//   },
//   {
//     "MONTH": 12,
//     "SHIPPER": "KHANNA",
//     "AGENT": "RYDERLINES",
//     "COST": "",
//     "BILLED": "",
//     "PROFIT": 75
//   },
//   {
//     "MONTH": 12,
//     "SHIPPER": "SOLGAR",
//     "AGENT": "OPAL",
//     "COST": 6590,
//     "BILLED": 8725,
//     "PROFIT": 2135
//   },
//   {
//     "MONTH": 12,
//     "SHIPPER": "IPC",
//     "AGENT": "WORLDLINE",
//     "COST": 626.8,
//     "BILLED": 816.4,
//     "PROFIT": 189.6
//   },
//   {
//     "MONTH": 12,
//     "SHIPPER": "IPC",
//     "AGENT": "WORLDLINE",
//     "COST": 334,
//     "BILLED": 484,
//     "PROFIT": 150
//   },
//   {
//     "MONTH": 12,
//     "SHIPPER": "IPC",
//     "AGENT": "WORLDLINE",
//     "COST": 1761.2,
//     "BILLED": 2130,
//     "PROFIT": 368.8
//   },
//   {
//     "MONTH": 12,
//     "SHIPPER": "DRAPER",
//     "AGENT": "RAMMAR",
//     "COST": 736.98,
//     "BILLED": 899.15,
//     "PROFIT": 162.17
//   },
//   {
//     "MONTH": 12,
//     "SHIPPER": "IPC",
//     "AGENT": "WORLDLINE",
//     "COST": 334,
//     "BILLED": 539,
//     "PROFIT": 205
//   },
//   {
//     "MONTH": 12,
//     "SHIPPER": "THERMAX",
//     "AGENT": "THERMAX",
//     "COST": 1280,
//     "BILLED": 1980,
//     "PROFIT": 700
//   },
//   {
//     "MONTH": 12,
//     "SHIPPER": "POLYBOND",
//     "AGENT": "GLO-IND",
//     "COST": 264.63,
//     "BILLED": 514.5,
//     "PROFIT": 249.87
//   },
//   {
//     "MONTH": 12,
//     "SHIPPER": "SIERRA PACIFIC",
//     "AGENT": "RYDERLINES",
//     "COST": "",
//     "BILLED": "",
//     "PROFIT": 250
//   },
//   {
//     "MONTH": 12,
//     "SHIPPER": "KHANNA",
//     "AGENT": "RYDERLINES",
//     "COST": "",
//     "BILLED": "",
//     "PROFIT": 75
//   },
//   {
//     "MONTH": 12,
//     "SHIPPER": "KHANNA",
//     "AGENT": "RYDERLINES",
//     "COST": "",
//     "BILLED": "",
//     "PROFIT": 75
//   },
//   {
//     "MONTH": 12,
//     "SHIPPER": "NANOCELLECT",
//     "AGENT": "N.A.NISSEN",
//     "COST": 336.8,
//     "BILLED": 526.6,
//     "PROFIT": 189.8
//   },
//   {
//     "MONTH": 12,
//     "SHIPPER": "IPC",
//     "AGENT": "WORLDLINE",
//     "COST": 274,
//     "BILLED": 494,
//     "PROFIT": 220
//   },
//   {
//     "MONTH": 12,
//     "SHIPPER": "IPC",
//     "AGENT": "WORLDLINE",
//     "COST": 399,
//     "BILLED": 644,
//     "PROFIT": 245
//   }
// ]

var rawData = [
  {
    "MONTH": 1,
    "SHIPPER": "DIGIRAD",
    "AGENT": "PARULEKARS",
    "COST": 4446.8,
    "BILLED": 5398,
    "PROFIT": 951.2,
    "TYPE": "A",
    "NOC": ""
  },
  {
    "MONTH": 1,
    "SHIPPER": "BIO-TECH",
    "AGENT": "MCCALUM",
    "COST": 704.85,
    "BILLED": 943.35,
    "PROFIT": 238.5,
    "TYPE": "A",
    "NOC": ""
  },
  {
    "MONTH": 1,
    "SHIPPER": "TEMA ISENMANN",
    "AGENT": "SMR LOGISTICS",
    "COST": 1010.09,
    "BILLED": 1239.76,
    "PROFIT": 229.67,
    "TYPE": "A",
    "NOC": ""
  },
  {
    "MONTH": 1,
    "SHIPPER": "RELIANT",
    "AGENT": "RELIANT",
    "COST": 326.58,
    "BILLED": 528.13,
    "PROFIT": 201.55,
    "TYPE": "L",
    "NOC": ""
  },
  {
    "MONTH": 1,
    "SHIPPER": "SOLGAR -AIR",
    "AGENT": "OPAL",
    "COST": 3917.85,
    "BILLED": 4613.75,
    "PROFIT": 695.9,
    "TYPE": "A",
    "NOC": ""
  },
  {
    "MONTH": 1,
    "SHIPPER": "LUCKY",
    "AGENT": "TEKNAF",
    "COST": 811,
    "BILLED": 1160,
    "PROFIT": 349,
    "TYPE": "F",
    "NOC": 1
  },
  {
    "MONTH": 1,
    "SHIPPER": "SOLGAR",
    "AGENT": "OPAL",
    "COST": 7115.6,
    "BILLED": 9280,
    "PROFIT": 2164.4,
    "TYPE": "F",
    "NOC": 2
  },
  {
    "MONTH": 1,
    "SHIPPER": "VISUAL",
    "AGENT": "OPAL",
    "COST": 2080.72,
    "BILLED": 2528.4,
    "PROFIT": 447.68,
    "TYPE": "A",
    "NOC": ""
  },
  {
    "MONTH": 1,
    "SHIPPER": "LIQUID CONTROL",
    "AGENT": "FIDESTALOG",
    "COST": 419.35,
    "BILLED": 594.55,
    "PROFIT": 175.2,
    "TYPE": "A",
    "NOC": ""
  },
  {
    "MONTH": 1,
    "SHIPPER": "CORKEN",
    "AGENT": "FIDESTALOG",
    "COST": 1050.45,
    "BILLED": 1168.1,
    "PROFIT": 117.65,
    "TYPE": "A",
    "NOC": ""
  },
  {
    "MONTH": 1,
    "SHIPPER": "VISUAL",
    "AGENT": "OPAL",
    "COST": 390,
    "BILLED": 520,
    "PROFIT": 130,
    "TYPE": "A",
    "NOC": ""
  },
  {
    "MONTH": 1,
    "SHIPPER": "JOEL",
    "AGENT": "THREADMAKER",
    "COST": 1645.59,
    "BILLED": 2350,
    "PROFIT": 704.41,
    "TYPE": "F",
    "NOC": 1
  },
  {
    "MONTH": 1,
    "SHIPPER": "CUMMINS",
    "AGENT": "NEW GLOBE",
    "COST": 529.64,
    "BILLED": 638.6,
    "PROFIT": 108.96,
    "TYPE": "A",
    "NOC": ""
  },
  {
    "MONTH": 1,
    "SHIPPER": "JOEL",
    "AGENT": "THREADMAKER",
    "COST": 1752.52,
    "BILLED": 2450,
    "PROFIT": 697.48,
    "TYPE": "F",
    "NOC": 1
  },
  {
    "MONTH": 1,
    "SHIPPER": "CALMETRIX",
    "AGENT": "DAGA",
    "COST": 432.68,
    "BILLED": 615,
    "PROFIT": 182.32,
    "TYPE": "A",
    "NOC": ""
  },
  {
    "MONTH": 1,
    "SHIPPER": "WELSET",
    "AGENT": "WORLDLINE",
    "COST": 2607.5,
    "BILLED": 2800,
    "PROFIT": 192.5,
    "TYPE": "F",
    "NOC": 1
  },
  {
    "MONTH": 2,
    "SHIPPER": "RELIANT",
    "AGENT": "RELIANT",
    "COST": 310,
    "BILLED": 450,
    "PROFIT": 140,
    "TYPE": "A",
    "NOC": ""
  },
  {
    "MONTH": 2,
    "SHIPPER": "BIO CREATIVE",
    "AGENT": "OPAL",
    "COST": 1634.9,
    "BILLED": 2440,
    "PROFIT": 805.1,
    "TYPE": "F",
    "NOC": 1
  },
  {
    "MONTH": 2,
    "SHIPPER": "RELIANT",
    "AGENT": "RELIANT",
    "COST": 413.74,
    "BILLED": 815.8,
    "PROFIT": 402.06,
    "TYPE": "L",
    "NOC": ""
  },
  {
    "MONTH": 2,
    "SHIPPER": "NUTRAWISE",
    "AGENT": "OPAL",
    "COST": 891.45,
    "BILLED": 1123.45,
    "PROFIT": 232,
    "TYPE": "A",
    "NOC": ""
  },
  {
    "MONTH": 2,
    "SHIPPER": "TEMPO",
    "AGENT": "TRANS E R",
    "COST": 1123.84,
    "BILLED": 1326.97,
    "PROFIT": 203.13,
    "TYPE": "A",
    "NOC": ""
  },
  {
    "MONTH": 2,
    "SHIPPER": "HANGSTERFER",
    "AGENT": "RYDERLINES",
    "COST": "",
    "BILLED": "",
    "PROFIT": 180,
    "TYPE": "F",
    "NOC": 1
  },
  {
    "MONTH": 2,
    "SHIPPER": "US COTTON",
    "AGENT": "OPAL",
    "COST": 1708.52,
    "BILLED": 2205,
    "PROFIT": 496.48,
    "TYPE": "F",
    "NOC": 1
  },
  {
    "MONTH": 2,
    "SHIPPER": "EDTECH",
    "AGENT": "ANGEL RUIZ",
    "COST": 940.08,
    "BILLED": 1265.32,
    "PROFIT": 325.24,
    "TYPE": "L",
    "NOC": ""
  },
  {
    "MONTH": 2,
    "SHIPPER": "HANGSTERFER",
    "AGENT": "RYDERLINES",
    "COST": "",
    "BILLED": "",
    "PROFIT": 180,
    "TYPE": "F",
    "NOC": 1
  },
  {
    "MONTH": 2,
    "SHIPPER": "AMPRONIX",
    "AGENT": "INDIANA FREIGHT",
    "COST": 355,
    "BILLED": 510,
    "PROFIT": 155,
    "TYPE": "A",
    "NOC": ""
  },
  {
    "MONTH": 2,
    "SHIPPER": "PRECOR",
    "AGENT": "RYDERLINES",
    "COST": "",
    "BILLED": "",
    "PROFIT": 150,
    "TYPE": "F",
    "NOC": 1
  },
  {
    "MONTH": 2,
    "SHIPPER": "LIQUID CONTROL",
    "AGENT": "FIDESTALOG",
    "COST": 2077.26,
    "BILLED": 2408.96,
    "PROFIT": 331.7,
    "TYPE": "L",
    "NOC": ""
  },
  {
    "MONTH": 2,
    "SHIPPER": "TOLCO",
    "AGENT": "RYDERLINES",
    "COST": "",
    "BILLED": "",
    "PROFIT": 150,
    "TYPE": "F",
    "NOC": 1
  },
  {
    "MONTH": 2,
    "SHIPPER": "SOLGAR",
    "AGENT": "OPAL",
    "COST": 6920,
    "BILLED": 9105,
    "PROFIT": 2185,
    "TYPE": "F",
    "NOC": 2
  },
  {
    "MONTH": 3,
    "SHIPPER": "JOEL",
    "AGENT": "JOEL",
    "COST": 1654.24,
    "BILLED": 2177.5,
    "PROFIT": 523.26,
    "TYPE": "F",
    "NOC": 1
  },
  {
    "MONTH": 3,
    "SHIPPER": "WR GROUP",
    "AGENT": "OPAL",
    "COST": 457,
    "BILLED": 656.92,
    "PROFIT": 199.92,
    "TYPE": "A",
    "NOC": ""
  },
  {
    "MONTH": 3,
    "SHIPPER": "BIO-TECH",
    "AGENT": "MCCALUM",
    "COST": 290.11,
    "BILLED": 450,
    "PROFIT": 159.89,
    "TYPE": "L",
    "NOC": ""
  },
  {
    "MONTH": 3,
    "SHIPPER": "HANGSTERFER",
    "AGENT": "RYDERLINES",
    "COST": "",
    "BILLED": "",
    "PROFIT": 190,
    "TYPE": "F",
    "NOC": 1
  },
  {
    "MONTH": 3,
    "SHIPPER": "WELSET",
    "AGENT": "WORLDLINE",
    "COST": 1392,
    "BILLED": 2150,
    "PROFIT": 758,
    "TYPE": "F",
    "NOC": 1
  },
  {
    "MONTH": 3,
    "SHIPPER": "UNIVERSAL",
    "AGENT": "OPAL",
    "COST": 347,
    "BILLED": 484.5,
    "PROFIT": 137.5,
    "TYPE": "A",
    "NOC": ""
  },
  {
    "MONTH": 3,
    "SHIPPER": "AMPRONIX",
    "AGENT": "INDIANA FREIGHT",
    "COST": 355,
    "BILLED": 562,
    "PROFIT": 207,
    "TYPE": "A",
    "NOC": ""
  },
  {
    "MONTH": 3,
    "SHIPPER": "JOEL",
    "AGENT": "THREADMAKER",
    "COST": 1130.34,
    "BILLED": 1800,
    "PROFIT": 669.66,
    "TYPE": "F",
    "NOC": 1
  },
  {
    "MONTH": 4,
    "SHIPPER": "JOEL",
    "AGENT": "THREADMAKER",
    "COST": 1357.94,
    "BILLED": 1975,
    "PROFIT": 617.06,
    "TYPE": "F",
    "NOC": 1
  },
  {
    "MONTH": 4,
    "SHIPPER": "SUMMIT",
    "AGENT": "ESTELL SHIPPING",
    "COST": 3630,
    "BILLED": 4050,
    "PROFIT": 420,
    "TYPE": "F",
    "NOC": 2
  },
  {
    "MONTH": 4,
    "SHIPPER": "SOLGAR",
    "AGENT": "OPAL",
    "COST": 6640,
    "BILLED": 8705,
    "PROFIT": 2065,
    "TYPE": "F",
    "NOC": 2
  },
  {
    "MONTH": 4,
    "SHIPPER": "ROCKLAND",
    "AGENT": "OPAL",
    "COST": 2135.39,
    "BILLED": 2530.2,
    "PROFIT": 394.81,
    "TYPE": "A",
    "NOC": ""
  },
  {
    "MONTH": 4,
    "SHIPPER": "IPC",
    "AGENT": "WORLDLINE",
    "COST": 372,
    "BILLED": 522,
    "PROFIT": 150,
    "TYPE": "A",
    "NOC": ""
  },
  {
    "MONTH": 4,
    "SHIPPER": "KAPIL",
    "AGENT": "EARTH RELOCATION",
    "COST": 1991.59,
    "BILLED": 2230,
    "PROFIT": 238.41,
    "TYPE": "F",
    "NOC": 1
  },
  {
    "MONTH": 4,
    "SHIPPER": "SOLGAR",
    "AGENT": "OPAL",
    "COST": 6540,
    "BILLED": 8725,
    "PROFIT": 2185,
    "TYPE": "F",
    "NOC": 2
  },
  {
    "MONTH": 5,
    "SHIPPER": "AMPRONIX",
    "AGENT": "INDIANA FREIGHT",
    "COST": 390,
    "BILLED": 560,
    "PROFIT": 170,
    "TYPE": "A",
    "NOC": ""
  },
  {
    "MONTH": 5,
    "SHIPPER": "JOEL",
    "AGENT": "THREADMAKER",
    "COST": 3401.08,
    "BILLED": 3786.96,
    "PROFIT": 385.88,
    "TYPE": "F",
    "NOC": 1
  },
  {
    "MONTH": 5,
    "SHIPPER": "KAPIL",
    "AGENT": "EARTH RELOCATION",
    "COST": 1881.77,
    "BILLED": 2115,
    "PROFIT": 233.23,
    "TYPE": "F",
    "NOC": 1
  },
  {
    "MONTH": 5,
    "SHIPPER": "HANGSTERFER",
    "AGENT": "RYDERLINES",
    "COST": "",
    "BILLED": "",
    "PROFIT": 190,
    "TYPE": "F",
    "NOC": 2
  },
  {
    "MONTH": 5,
    "SHIPPER": "IPC",
    "AGENT": "WORLDLINE",
    "COST": 422,
    "BILLED": 572,
    "PROFIT": 150,
    "TYPE": "A",
    "NOC": ""
  },
  {
    "MONTH": 5,
    "SHIPPER": "CAMBRO",
    "AGENT": "OPAL",
    "COST": 886.45,
    "BILLED": 1103.58,
    "PROFIT": 217.13,
    "TYPE": "L",
    "NOC": ""
  },
  {
    "MONTH": 5,
    "SHIPPER": "CORKEN",
    "AGENT": "FIDESTALOG",
    "COST": 798.88,
    "BILLED": 935,
    "PROFIT": 136.12,
    "TYPE": "A",
    "NOC": ""
  },
  {
    "MONTH": 5,
    "SHIPPER": "SOLGAR",
    "AGENT": "OPAL",
    "COST": 6540,
    "BILLED": 8725,
    "PROFIT": 2185,
    "TYPE": "F",
    "NOC": 2
  },
  {
    "MONTH": 5,
    "SHIPPER": "PRECOR",
    "AGENT": "RYDERLINES",
    "COST": "",
    "BILLED": "",
    "PROFIT": 150,
    "TYPE": "F",
    "NOC": 2
  },
  {
    "MONTH": 5,
    "SHIPPER": "OPAL",
    "AGENT": "OPAL",
    "COST": 247,
    "BILLED": 402,
    "PROFIT": 155,
    "TYPE": "A",
    "NOC": ""
  },
  {
    "MONTH": 5,
    "SHIPPER": "OPAL",
    "AGENT": "OPAL",
    "COST": 250.65,
    "BILLED": 412.34,
    "PROFIT": 161.69,
    "TYPE": "A",
    "NOC": ""
  },
  {
    "MONTH": 5,
    "SHIPPER": "IMPULSE",
    "AGENT": "FREIGHT AGENCY",
    "COST": 539.85,
    "BILLED": 683.13,
    "PROFIT": 143.28,
    "TYPE": "L",
    "NOC": ""
  },
  {
    "MONTH": 5,
    "SHIPPER": "MTU AMERICA",
    "AGENT": "RYDERLINES",
    "COST": "",
    "BILLED": "",
    "PROFIT": 150,
    "TYPE": "F",
    "NOC": 1
  },
  {
    "MONTH": 6,
    "SHIPPER": "SOLGAR",
    "AGENT": "OPAL",
    "COST": 6640,
    "BILLED": 8725,
    "PROFIT": 2085,
    "TYPE": "F",
    "NOC": 2
  },
  {
    "MONTH": 6,
    "SHIPPER": "CAPSTONE",
    "AGENT": "OPAL",
    "COST": 22950,
    "BILLED": 26395,
    "PROFIT": 3445,
    "TYPE": "F",
    "NOC": 5
  },
  {
    "MONTH": 6,
    "SHIPPER": "RELIANT",
    "AGENT": "RELIANT",
    "COST": 529.87,
    "BILLED": 712,
    "PROFIT": 182.13,
    "TYPE": "A",
    "NOC": ""
  },
  {
    "MONTH": 6,
    "SHIPPER": "RELIANT",
    "AGENT": "RELIANT",
    "COST": 1489.87,
    "BILLED": 2153.86,
    "PROFIT": 663.99,
    "TYPE": "L",
    "NOC": ""
  },
  {
    "MONTH": 6,
    "SHIPPER": "MTU AMERICA",
    "AGENT": "RYDERLINES",
    "COST": "",
    "BILLED": "",
    "PROFIT": 150,
    "TYPE": "F",
    "NOC": 1
  },
  {
    "MONTH": 6,
    "SHIPPER": "KAPIL",
    "AGENT": "EARTH RELOCATION",
    "COST": 1302,
    "BILLED": 1530,
    "PROFIT": 228,
    "TYPE": "F",
    "NOC": 1
  },
  {
    "MONTH": 6,
    "SHIPPER": "IPC",
    "AGENT": "WORLDLINE",
    "COST": 472,
    "BILLED": 692,
    "PROFIT": 220,
    "TYPE": "A",
    "NOC": ""
  },
  {
    "MONTH": 6,
    "SHIPPER": "TROLL SYSTEM",
    "AGENT": "SOTRADE",
    "COST": 300.6,
    "BILLED": 479.5,
    "PROFIT": 178.9,
    "TYPE": "A",
    "NOC": ""
  },
  {
    "MONTH": 7,
    "SHIPPER": "HANGSTERFER",
    "AGENT": "RYDERLINES",
    "COST": "",
    "BILLED": "",
    "PROFIT": 190,
    "TYPE": "F",
    "NOC": 1
  },
  {
    "MONTH": 7,
    "SHIPPER": "ampronic",
    "AGENT": "INDIANA FREIGHT",
    "COST": 367,
    "BILLED": 552,
    "PROFIT": 185,
    "TYPE": "A",
    "NOC": ""
  },
  {
    "MONTH": 7,
    "SHIPPER": "RELIANT",
    "AGENT": "RELIANT",
    "COST": 1154.74,
    "BILLED": 1668.05,
    "PROFIT": 513.31,
    "TYPE": "A",
    "NOC": ""
  },
  {
    "MONTH": 7,
    "SHIPPER": "IOVATE",
    "AGENT": "OPAL",
    "COST": 14380,
    "BILLED": 16650,
    "PROFIT": 2270,
    "TYPE": "F",
    "NOC": 3
  },
  {
    "MONTH": 7,
    "SHIPPER": "SOLGAR",
    "AGENT": "OPAL",
    "COST": 6550,
    "BILLED": 8725,
    "PROFIT": 2175,
    "TYPE": "F",
    "NOC": 2
  },
  {
    "MONTH": 7,
    "SHIPPER": "IOVATE",
    "AGENT": "OPAL",
    "COST": 9760,
    "BILLED": 12925,
    "PROFIT": 3165,
    "TYPE": "F",
    "NOC": 3
  },
  {
    "MONTH": 7,
    "SHIPPER": "IOVATE",
    "AGENT": "OPAL",
    "COST": 4730,
    "BILLED": 5250,
    "PROFIT": 520,
    "TYPE": "F",
    "NOC": 1
  },
  {
    "MONTH": 8,
    "SHIPPER": "HANGSTERFER",
    "AGENT": "RYDERLINES",
    "COST": "",
    "BILLED": "",
    "PROFIT": 190,
    "TYPE": "F",
    "NOC": 1
  },
  {
    "MONTH": 8,
    "SHIPPER": "TECHNICAL INDUS",
    "AGENT": "RYDERLINES",
    "COST": 1325,
    "BILLED": 2000,
    "PROFIT": 675,
    "TYPE": "F",
    "NOC": 1
  },
  {
    "MONTH": 8,
    "SHIPPER": "IPC",
    "AGENT": "WORLDLINE",
    "COST": 277,
    "BILLED": 542,
    "PROFIT": 265,
    "TYPE": "A",
    "NOC": ""
  },
  {
    "MONTH": 8,
    "SHIPPER": "JOEL",
    "AGENT": "THREADMAKER",
    "COST": 1359.9,
    "BILLED": 1905,
    "PROFIT": 545.1,
    "TYPE": "F",
    "NOC": 1
  },
  {
    "MONTH": 8,
    "SHIPPER": "SOLGAR",
    "AGENT": "OPAL",
    "COST": 9942.65,
    "BILLED": 12925,
    "PROFIT": 2982.35,
    "TYPE": "F",
    "NOC": 3
  },
  {
    "MONTH": 8,
    "SHIPPER": "EARTH",
    "AGENT": "EARTH RELOCATION",
    "COST": 2325,
    "BILLED": 2550,
    "PROFIT": 225,
    "TYPE": "F",
    "NOC": 1
  },
  {
    "MONTH": 8,
    "SHIPPER": "MTU AMERICA",
    "AGENT": "RYDERLINES",
    "COST": "",
    "BILLED": "",
    "PROFIT": 150,
    "TYPE": "F",
    "NOC": 1
  },
  {
    "MONTH": 9,
    "SHIPPER": "SIERRA NEVADA",
    "AGENT": "OPAL",
    "COST": 4820,
    "BILLED": 5375,
    "PROFIT": 555,
    "TYPE": "F",
    "NOC": 1
  },
  {
    "MONTH": 9,
    "SHIPPER": "NANOCELLECT",
    "AGENT": "N.A.NISSEN",
    "COST": 715.3,
    "BILLED": 990,
    "PROFIT": 274.7,
    "TYPE": "A",
    "NOC": ""
  },
  {
    "MONTH": 9,
    "SHIPPER": "LEXANI WHEELS",
    "AGENT": "TONGJIN",
    "COST": 719.12,
    "BILLED": 980,
    "PROFIT": 260.88,
    "TYPE": "F",
    "NOC": 1
  },
  {
    "MONTH": 9,
    "SHIPPER": "BIO-TECH",
    "AGENT": "MCCALUM",
    "COST": 274.35,
    "BILLED": 465,
    "PROFIT": 190.65,
    "TYPE": "L",
    "NOC": ""
  },
  {
    "MONTH": 9,
    "SHIPPER": "KHANNA",
    "AGENT": "RYDERLINES",
    "COST": "",
    "BILLED": "",
    "PROFIT": 200,
    "TYPE": "F",
    "NOC": 5
  },
  {
    "MONTH": 9,
    "SHIPPER": "MARINE FENDERS",
    "AGENT": "GAC",
    "COST": 682.81,
    "BILLED": 895.54,
    "PROFIT": 212.73,
    "TYPE": "L",
    "NOC": ""
  },
  {
    "MONTH": 9,
    "SHIPPER": "SOLGAR",
    "AGENT": "OPAL",
    "COST": 13591,
    "BILLED": 17125,
    "PROFIT": 3534,
    "TYPE": "F",
    "NOC": 4
  },
  {
    "MONTH": 9,
    "SHIPPER": "JOEL",
    "AGENT": "THREADMAKER",
    "COST": 2308.9,
    "BILLED": 2755,
    "PROFIT": 446.1,
    "TYPE": "F",
    "NOC": 1
  },
  {
    "MONTH": 9,
    "SHIPPER": "JOEL",
    "AGENT": "THREADMAKER",
    "COST": 1927.9,
    "BILLED": 2575,
    "PROFIT": 647.1,
    "TYPE": "F",
    "NOC": 1
  },
  {
    "MONTH": 10,
    "SHIPPER": "AMPRONIX",
    "AGENT": "INDIANA FREIGHT",
    "COST": 367,
    "BILLED": 545,
    "PROFIT": 178,
    "TYPE": "A",
    "NOC": ""
  },
  {
    "MONTH": 10,
    "SHIPPER": "G.A.PAPER",
    "AGENT": "OSL",
    "COST": "",
    "BILLED": "",
    "PROFIT": 100,
    "TYPE": "F",
    "NOC": 4
  },
  {
    "MONTH": 10,
    "SHIPPER": "G.A.PAPER",
    "AGENT": "OSL",
    "COST": "",
    "BILLED": "",
    "PROFIT": 125,
    "TYPE": "F",
    "NOC": 5
  },
  {
    "MONTH": 10,
    "SHIPPER": "KHANNA",
    "AGENT": "RYDERLINES",
    "COST": "",
    "BILLED": "",
    "PROFIT": 100,
    "TYPE": "F",
    "NOC": 5
  },
  {
    "MONTH": 10,
    "SHIPPER": "VIKING",
    "AGENT": "FIDESTALOG",
    "COST": 719.21,
    "BILLED": 866.95,
    "PROFIT": 147.74,
    "TYPE": "A",
    "NOC": ""
  },
  {
    "MONTH": 10,
    "SHIPPER": "KHANNA",
    "AGENT": "RYDERLINES",
    "COST": "",
    "BILLED": "",
    "PROFIT": 225,
    "TYPE": "F",
    "NOC": ""
  },
  {
    "MONTH": 10,
    "SHIPPER": "BENDPAK",
    "AGENT": "RELIANT",
    "COST": 1323.23,
    "BILLED": 1561.19,
    "PROFIT": 237.96,
    "TYPE": "L",
    "NOC": ""
  },
  {
    "MONTH": 10,
    "SHIPPER": "RELIANT",
    "AGENT": "RELIANT",
    "COST": 1439.02,
    "BILLED": 1712.34,
    "PROFIT": 273.32,
    "TYPE": "L",
    "NOC": ""
  },
  {
    "MONTH": 10,
    "SHIPPER": "KHANNA",
    "AGENT": "RYDERLINES",
    "COST": "",
    "BILLED": "",
    "PROFIT": 200,
    "TYPE": "F",
    "NOC": 5
  },
  {
    "MONTH": 10,
    "SHIPPER": "MARINE FENDERS",
    "AGENT": "GAC",
    "COST": 7063,
    "BILLED": 8900,
    "PROFIT": 1837,
    "TYPE": "F",
    "NOC": 2
  },
  {
    "MONTH": 10,
    "SHIPPER": "JOEL",
    "AGENT": "THREADMAKER",
    "COST": 1086.2,
    "BILLED": 1800,
    "PROFIT": 713.8,
    "TYPE": "F",
    "NOC": 1
  },
  {
    "MONTH": 10,
    "SHIPPER": "JOEL",
    "AGENT": "THREADMAKER",
    "COST": 3225,
    "BILLED": 3570,
    "PROFIT": 345,
    "TYPE": "F",
    "NOC": 1
  },
  {
    "MONTH": 10,
    "SHIPPER": "SOLGAR",
    "AGENT": "OPAL",
    "COST": 3320,
    "BILLED": 4525,
    "PROFIT": 1205,
    "TYPE": "F",
    "NOC": 1
  },
  {
    "MONTH": 11,
    "SHIPPER": "MARINE FENDERS",
    "AGENT": "GAC",
    "COST": 814.57,
    "BILLED": 1029.99,
    "PROFIT": 215.42,
    "TYPE": "L",
    "NOC": ""
  },
  {
    "MONTH": 11,
    "SHIPPER": "EARTH",
    "AGENT": "EARTH RELOCATION",
    "COST": 780,
    "BILLED": 1000,
    "PROFIT": 220,
    "TYPE": "F",
    "NOC": 1
  },
  {
    "MONTH": 11,
    "SHIPPER": "JOEL",
    "AGENT": "THREADMAKER",
    "COST": 1578.65,
    "BILLED": 2575,
    "PROFIT": 996.35,
    "TYPE": "F",
    "NOC": 1
  },
  {
    "MONTH": 11,
    "SHIPPER": "IPC",
    "AGENT": "WORLDLINE",
    "COST": 1286.95,
    "BILLED": 1532.42,
    "PROFIT": 245.47,
    "TYPE": "A",
    "NOC": ""
  },
  {
    "MONTH": 11,
    "SHIPPER": "KHANNA",
    "AGENT": "RYDERLINES",
    "COST": "",
    "BILLED": "",
    "PROFIT": 100,
    "TYPE": "F",
    "NOC": 5
  },
  {
    "MONTH": 11,
    "SHIPPER": "KHANNA",
    "AGENT": "RYDERLINES",
    "COST": "",
    "BILLED": "",
    "PROFIT": 100,
    "TYPE": "F",
    "NOC": 5
  },
  {
    "MONTH": 11,
    "SHIPPER": "KHANNA",
    "AGENT": "RYDERLINES",
    "COST": "",
    "BILLED": "",
    "PROFIT": 75,
    "TYPE": "F",
    "NOC": 3
  },
  {
    "MONTH": 11,
    "SHIPPER": "KHANNA",
    "AGENT": "RYDERLINES",
    "COST": "",
    "BILLED": "",
    "PROFIT": 150,
    "TYPE": "F",
    "NOC": 7
  },
  {
    "MONTH": 11,
    "SHIPPER": "KHANNA",
    "AGENT": "RYDERLINES",
    "COST": "",
    "BILLED": "",
    "PROFIT": 75,
    "TYPE": "F",
    "NOC": 3
  },
  {
    "MONTH": 11,
    "SHIPPER": "KHANNA",
    "AGENT": "RYDERLINES",
    "COST": "",
    "BILLED": "",
    "PROFIT": 200,
    "TYPE": "F",
    "NOC": 12
  },
  {
    "MONTH": 11,
    "SHIPPER": "KHANNA",
    "AGENT": "RYDERLINES",
    "COST": "",
    "BILLED": "",
    "PROFIT": 100,
    "TYPE": "F",
    "NOC": 4
  },
  {
    "MONTH": 11,
    "SHIPPER": "MTU AMERICA",
    "AGENT": "RYDERLINES",
    "COST": "",
    "BILLED": "",
    "PROFIT": 150,
    "TYPE": "F",
    "NOC": 1
  },
  {
    "MONTH": 11,
    "SHIPPER": "KHANNA",
    "AGENT": "RYDERLINES",
    "COST": "",
    "BILLED": "",
    "PROFIT": 150,
    "TYPE": "F",
    "NOC": 8
  },
  {
    "MONTH": 12,
    "SHIPPER": "KHANNA",
    "AGENT": "RYDERLINES",
    "COST": "",
    "BILLED": "",
    "PROFIT": 100,
    "TYPE": "F",
    "NOC": 5
  },
  {
    "MONTH": 12,
    "SHIPPER": "KHANNA",
    "AGENT": "RYDERLINES",
    "COST": "",
    "BILLED": "",
    "PROFIT": 75,
    "TYPE": "F",
    "NOC": 1
  },
  {
    "MONTH": 12,
    "SHIPPER": "SOLGAR",
    "AGENT": "OPAL",
    "COST": 6590,
    "BILLED": 8725,
    "PROFIT": 2135,
    "TYPE": "F",
    "NOC": 2
  },
  {
    "MONTH": 12,
    "SHIPPER": "IPC",
    "AGENT": "WORLDLINE",
    "COST": 626.8,
    "BILLED": 816.4,
    "PROFIT": 189.6,
    "TYPE": "A",
    "NOC": ""
  },
  {
    "MONTH": 12,
    "SHIPPER": "IPC",
    "AGENT": "WORLDLINE",
    "COST": 334,
    "BILLED": 484,
    "PROFIT": 150,
    "TYPE": "A",
    "NOC": ""
  },
  {
    "MONTH": 12,
    "SHIPPER": "IPC",
    "AGENT": "WORLDLINE",
    "COST": 1761.2,
    "BILLED": 2130,
    "PROFIT": 368.8,
    "TYPE": "A",
    "NOC": ""
  },
  {
    "MONTH": 12,
    "SHIPPER": "DRAPER",
    "AGENT": "RAMMAR",
    "COST": 736.98,
    "BILLED": 899.15,
    "PROFIT": 162.17,
    "TYPE": "A",
    "NOC": ""
  },
  {
    "MONTH": 12,
    "SHIPPER": "IPC",
    "AGENT": "WORLDLINE",
    "COST": 334,
    "BILLED": 539,
    "PROFIT": 205,
    "TYPE": "A",
    "NOC": ""
  },
  {
    "MONTH": 12,
    "SHIPPER": "THERMAX",
    "AGENT": "THERMAX",
    "COST": 1280,
    "BILLED": 1980,
    "PROFIT": 700,
    "TYPE": "F",
    "NOC": 1
  },
  {
    "MONTH": 12,
    "SHIPPER": "POLYBOND",
    "AGENT": "GLO-IND",
    "COST": 264.63,
    "BILLED": 514.5,
    "PROFIT": 249.87,
    "TYPE": "L",
    "NOC": ""
  },
  {
    "MONTH": 12,
    "SHIPPER": "SIERRA PACIFIC",
    "AGENT": "RYDERLINES",
    "COST": "",
    "BILLED": "",
    "PROFIT": 250,
    "TYPE": "F",
    "NOC": 10
  },
  {
    "MONTH": 12,
    "SHIPPER": "KHANNA",
    "AGENT": "RYDERLINES",
    "COST": "",
    "BILLED": "",
    "PROFIT": 75,
    "TYPE": "F",
    "NOC": 2
  },
  {
    "MONTH": 12,
    "SHIPPER": "KHANNA",
    "AGENT": "RYDERLINES",
    "COST": "",
    "BILLED": "",
    "PROFIT": 75,
    "TYPE": "F",
    "NOC": 3
  },
  {
    "MONTH": 12,
    "SHIPPER": "NANOCELLECT",
    "AGENT": "N.A.NISSEN",
    "COST": 336.8,
    "BILLED": 526.6,
    "PROFIT": 189.8,
    "TYPE": "A",
    "NOC": ""
  },
  {
    "MONTH": 12,
    "SHIPPER": "IPC",
    "AGENT": "WORLDLINE",
    "COST": 274,
    "BILLED": 494,
    "PROFIT": 220,
    "TYPE": "A",
    "NOC": ""
  },
  {
    "MONTH": 12,
    "SHIPPER": "IPC",
    "AGENT": "WORLDLINE",
    "COST": 399,
    "BILLED": 644,
    "PROFIT": 245,
    "TYPE": "A",
    "NOC": ""
  },
  {
    "MONTH": 12,
    "SHIPPER": "G.A.PAPER",
    "AGENT": "OSL",
    "COST": "",
    "BILLED": "",
    "PROFIT": 275,
    "TYPE": "F",
    "NOC": 11
  }
]

// console.log(rawData)

let year = []
let agents = []
let shippers = []
let totalAgents = []
let totalShippers = []

for(let i = 0; i < 12; i++)
	year[i] = rawData.filter(d => d.MONTH === i + 1)

for(let i = 0; i < year.length; i++){
	agents = []
	shippers = []
	for(let j = 0; j < year[i].length; j++){
		agents.push(year[i][j].AGENT)
		shippers.push(year[i][j].SHIPPER)
		agents = [...new Set(agents)]
		shippers = [...new Set(shippers)]
	}
	totalAgents.push(agents) 
	totalShippers.push(shippers) 
}

// DATA FILTER LOGIC

function formatData(n) {
	let agentsData = []
	let shippersData = []
	var tempData = rawData.filter(d => d.MONTH === n)

	if(flag){
		for(let i = 0; i < totalAgents[n-1].length; i++){
		    shipCount = 0
		    totalProfit = 0
		    totalCost = 0
		    totalBilled = 0,
        air = 0, fcl = 0, lcl = 0, noc = 0
		    for(let j = 0; j < tempData.length; j++){
		        if(totalAgents[n-1][i] == tempData[j].AGENT){
		            shipCount++
		            totalProfit += tempData[j].PROFIT
		            totalCost += tempData[j].COST
		            totalBilled += tempData[j].BILLED
                noc += tempData[j].NOC
                noc = parseInt(noc)
                if(tempData[j].TYPE === "A") air++
                else if(tempData[j].TYPE === "F") fcl++
                else if(tempData[j].TYPE === "L") lcl++
		        }
		    }
		    // console.log(totalAgents[n-1][i], shipCount, totalProfit, totalCost, totalBilled)
		    let agentInfo = {}
		    agentInfo.agent = totalAgents[n-1][i]
		    agentInfo.totalShipments = shipCount
		    agentInfo.totalCost = totalCost
		    agentInfo.totalBilled = totalBilled
		    agentInfo.totalProfit = totalProfit
        agentInfo.air = air
        agentInfo.fcl = fcl
        agentInfo.lcl = lcl
        agentInfo.noc = noc
		    agentsData.push(agentInfo)
		}
    // console.log(agentsData)
		return agentsData		
	} else {
		for(let i = 0; i < totalShippers[n-1].length; i++){
		    shipCount = 0
		    totalProfit = 0
		    totalCost = 0
		    totalBilled = 0
        air = 0, fcl = 0, lcl = 0, noc = 0
		    for(let j = 0; j < tempData.length; j++){
		        if(totalShippers[n-1][i] == tempData[j].SHIPPER){
		            shipCount++
		            totalProfit += tempData[j].PROFIT
		            totalCost += tempData[j].COST
		            totalBilled += tempData[j].BILLED
                noc += tempData[j].NOC
                noc = parseInt(noc)
                if(tempData[j].TYPE === "A") air++
                else if(tempData[j].TYPE === "F") fcl++
                else if(tempData[j].TYPE === "L") lcl++
		        }
		    }
		    // console.log(totalShippers[n-1][i], shipCount, totalProfit, totalCost, totalBilled)
		    let shipperInfo = {}
		    shipperInfo.agent = totalShippers[n-1][i]
		    shipperInfo.totalShipments = shipCount
		    shipperInfo.totalCost = totalCost
		    shipperInfo.totalBilled = totalBilled
		    shipperInfo.totalProfit = totalProfit
        shipperInfo.air = air
        shipperInfo.fcl = fcl
        shipperInfo.lcl = lcl
        shipperInfo.noc = noc
		    shippersData.push(shipperInfo)
		}
		return shippersData
	}

}

// Overall Code
var allAgents = []
var overallAgentsData = []

for(let i = 0; i < rawData.length; i++)
    allAgents.push(rawData[i].AGENT)

allAgents = [...new Set(allAgents)]

for(let i = 0; i < allAgents.length; i++){
    shipCount = 0
    totalProfit = 0
    totalCost = 0
    totalBilled = 0
    air = 0, fcl = 0, lcl = 0, noc = 0
    for(let j = 0; j < rawData.length; j++){
        if(allAgents[i] == rawData[j].AGENT){
            // totalProfit += rawData[j].PROFIT
            shipCount++
            totalProfit += rawData[j].PROFIT
            totalCost += rawData[j].COST
            totalBilled += rawData[j].BILLED
            noc += rawData[j].NOC
            noc = parseInt(noc)
            if(rawData[j].TYPE === "A") air++
            else if(rawData[j].TYPE === "F") fcl++
            else if(rawData[j].TYPE === "L") lcl++
        }
    }
    let overallInfo = {}
    overallInfo.agent = allAgents[i]
    overallInfo.totalProfit = totalProfit
    overallInfo.totalShipments = shipCount
    overallInfo.totalCost = totalCost
    overallInfo.totalBilled = totalBilled
    overallInfo.totalProfit = totalProfit
    overallInfo.air = air
    overallInfo.fcl = fcl
    overallInfo.lcl = lcl
    overallInfo.noc = noc
    overallAgentsData.push(overallInfo)
}
console.log(overallAgentsData)