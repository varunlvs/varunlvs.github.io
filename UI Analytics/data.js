const shipments = [
  {
    "SCAC": "HLCU",
    "CNT": "EITU0488563",
    "NOC": 1,
    "MBL": "DE1191114983",
    "ETA": "17-Dec",
    "CNEE": "ALIMPEX",
    "AGENT": "SEA",
    "POD": "SAVANNAH",
    "FPOD": "MEMPHIS",
    "PRDT": "P",
    "AIC": "A",
    "NPOB": "N"
  },
  {
    "SCAC": "HLCU",
    "CNT": "GATU0214655",
    "NOC": 1,
    "MBL": "DE1191028207",
    "ETA": "1-Dec",
    "CNEE": "KEMCO",
    "AGENT": "SEA",
    "POD": "NORFOLK",
    "FPOD": "ELK GROVE",
    "PRDT": "D",
    "AIC": "IC",
    "NPOB": "N"
  },
  {
    "SCAC": "HLCU",
    "CNT": "UACU3250989",
    "NOC": 1,
    "MBL": "DE1191027387",
    "ETA": "1-Dec",
    "CNEE": "KEMCO",
    "AGENT": "SEA",
    "POD": "NORFOLK",
    "FPOD": "ELK GROVE",
    "PRDT": "D",
    "AIC": "IC",
    "NPOB": "N"
  },
  {
    "SCAC": "HLCU",
    "CNT": "TGBU2357815",
    "NOC": 1,
    "MBL": "DE1191027398",
    "ETA": "1-Dec",
    "CNEE": "KEMCO",
    "AGENT": "SEA",
    "POD": "NORFOLK",
    "FPOD": "ELK GROVE",
    "PRDT": "D",
    "AIC": "IC",
    "NPOB": "N"
  },
  {
    "SCAC": "HLCU",
    "CNT": "BSIU2259852",
    "NOC": 1,
    "MBL": "DE1191026457",
    "ETA": "1-Dec",
    "CNEE": "KEMCO",
    "AGENT": "SEA",
    "POD": "NORFOLK",
    "FPOD": "ELK GROVE",
    "PRDT": "D",
    "AIC": "IC",
    "NPOB": "N"
  },
  {
    "SCAC": "HLCU",
    "CNT": "HLXU3183653",
    "NOC": 1,
    "MBL": "DE1191028218",
    "ETA": "1-Dec",
    "CNEE": "KEMCO",
    "AGENT": "SEA",
    "POD": "NORFOLK",
    "FPOD": "ELK GROVE",
    "PRDT": "D",
    "AIC": "IC",
    "NPOB": "N"
  },
  {
    "SCAC": "SAFM",
    "CNT": "MSKU2003112",
    "NOC": 1,
    "MBL": 712051796,
    "ETA": "2-Dec",
    "CNEE": "FRESH PRODUCTS",
    "AGENT": "AMI",
    "POD": "NORFOLK",
    "FPOD": "DETROIT",
    "PRDT": "R",
    "AIC": "",
    "NPOB": "B"
  },
  {
    "SCAC": "MAEU",
    "CNT": "TCLU2306739",
    "NOC": 1,
    "MBL": 587949665,
    "ETA": "3-Dec",
    "CNEE": "THERMAX",
    "AGENT": "PARU",
    "POD": "NEWARK",
    "FPOD": "EDISON",
    "PRDT": "D",
    "AIC": "ICA",
    "NPOB": "N"
  },
  {
    "SCAC": "MAEU",
    "CNT": "PONU0472086",
    "NOC": 1,
    "MBL": 587572758,
    "ETA": "3-Dec",
    "CNEE": "THERMAX",
    "AGENT": "PARU",
    "POD": "NEWARK",
    "FPOD": "ROSELLE",
    "PRDT": "D",
    "AIC": "ICA",
    "NPOB": "N"
  },
  {
    "SCAC": "MAEU",
    "CNT": "PONU0791946",
    "NOC": 1,
    "MBL": 587364237,
    "ETA": "3-Dec",
    "CNEE": "THERMAX",
    "AGENT": "PARU",
    "POD": "NEWARK",
    "FPOD": "ROSELLE",
    "PRDT": "D",
    "AIC": "ICA",
    "NPOB": "N"
  },
  {
    "SCAC": "MAEU",
    "CNT": "MRKU7662445",
    "NOC": 1,
    "MBL": 587364201,
    "ETA": "3-Dec",
    "CNEE": "THERMAX",
    "AGENT": "PARU",
    "POD": "NEWARK",
    "FPOD": "EDISON",
    "PRDT": "D",
    "AIC": "ICA",
    "NPOB": "N"
  },
  {
    "SCAC": "SAFM",
    "CNT": "SUDU6727531",
    "NOC": 1,
    "MBL": 587805039,
    "ETA": "3-Dec",
    "CNEE": "EMO TRANS",
    "AGENT": "AMI",
    "POD": "NEWARK",
    "FPOD": "CHICAGO",
    "PRDT": "R",
    "AIC": "",
    "NPOB": "P"
  },
  {
    "SCAC": "MEDU",
    "CNT": "TCKU2326105",
    "NOC": 1,
    "MBL": "UM841307",
    "ETA": "3-Dec",
    "CNEE": "KEMCO",
    "AGENT": "SEA",
    "POD": "NORFOLK",
    "FPOD": "ELK GROVE",
    "PRDT": "D",
    "AIC": "IC",
    "NPOB": "N"
  },
  {
    "SCAC": "MEDU",
    "CNT": "CAXU8094592",
    "NOC": 1,
    "MBL": "UM834005",
    "ETA": "3-Dec",
    "CNEE": "KEMCO",
    "AGENT": "SEA",
    "POD": "NORFOLK",
    "FPOD": "ELK GROVE",
    "PRDT": "D",
    "AIC": "IC",
    "NPOB": "N"
  },
  {
    "SCAC": "MEDU",
    "CNT": "TCKU9315268",
    "NOC": 1,
    "MBL": "UM773542",
    "ETA": "3-Dec",
    "CNEE": "HALEX",
    "AGENT": "SEA",
    "POD": "NEW YORK",
    "FPOD": "HAMILTON",
    "PRDT": "D",
    "AIC": "IC",
    "NPOB": "N"
  },
  {
    "SCAC": "MEDU",
    "CNT": "MEDU7610414",
    "NOC": 1,
    "MBL": "UM824345",
    "ETA": "3-Dec",
    "CNEE": "HALEX",
    "AGENT": "SEA",
    "POD": "NEW YORK",
    "FPOD": "HAMILTON",
    "PRDT": "D",
    "AIC": "IC",
    "NPOB": "N"
  },
  {
    "SCAC": "MEDU",
    "CNT": "DFSU6828568",
    "NOC": 1,
    "MBL": "UM824402",
    "ETA": "3-Dec",
    "CNEE": "HALEX",
    "AGENT": "SEA",
    "POD": "NEW YORK",
    "FPOD": "HAMILTON",
    "PRDT": "D",
    "AIC": "IC",
    "NPOB": "N"
  },
  {
    "SCAC": "MEDU",
    "CNT": "MEDU4941770",
    "NOC": 1,
    "MBL": "UUM766025",
    "ETA": "3-Dec",
    "CNEE": "HALEX",
    "AGENT": "SEA",
    "POD": "NEW YORK",
    "FPOD": "HAMILTON",
    "PRDT": "D",
    "AIC": "IC",
    "NPOB": "N"
  },
  {
    "SCAC": "HLCU",
    "CNT": "HAMU1276214",
    "NOC": 1,
    "MBL": "DE1191028273",
    "ETA": "3-Dec",
    "CNEE": "ABB",
    "AGENT": "SEA",
    "POD": "SAVANNAH",
    "FPOD": "BYHALIA",
    "PRDT": "D",
    "AIC": "IC",
    "NPOB": "N"
  },
  {
    "SCAC": "HLCU",
    "CNT": "FCIU7436059",
    "NOC": 1,
    "MBL": "DE1191027365",
    "ETA": "3-Dec",
    "CNEE": "ABB",
    "AGENT": "SEA",
    "POD": "SAVANNAH",
    "FPOD": "BYHALIA",
    "PRDT": "D",
    "AIC": "IC",
    "NPOB": "N"
  },
  {
    "SCAC": "HLCU",
    "CNT": "CLHU9124220",
    "NOC": 1,
    "MBL": "DE1191027300",
    "ETA": "3-Dec",
    "CNEE": "ABB",
    "AGENT": "SEA",
    "POD": "SAVANNAH",
    "FPOD": "BYHALIA",
    "PRDT": "D",
    "AIC": "IC",
    "NPOB": "N"
  },
  {
    "SCAC": "HLCU",
    "CNT": "IPXU3891563",
    "NOC": 1,
    "MBL": "DE1191028156",
    "ETA": "3-Dec",
    "CNEE": "ABB",
    "AGENT": "SEA",
    "POD": "SAVANNAH",
    "FPOD": "BYHALIA",
    "PRDT": "D",
    "AIC": "IC",
    "NPOB": "N"
  },
  {
    "SCAC": "SAFM",
    "CNT": "TCKU1145268",
    "NOC": 1,
    "MBL": 587080770,
    "ETA": "4-Dec",
    "CNEE": "SAFE CHEM",
    "AGENT": "AMI",
    "POD": "LOS ANGELES",
    "FPOD": "LOS ANGELES",
    "PRDT": "P",
    "AIC": "",
    "NPOB": "B"
  },
  {
    "SCAC": "MAEU",
    "CNT": "TGHU2567834",
    "NOC": 1,
    "MBL": 587363576,
    "ETA": "4-Dec",
    "CNEE": "THERMAX",
    "AGENT": "PARU",
    "POD": "HOUSTON",
    "FPOD": "EL PASO",
    "PRDT": "D",
    "AIC": "ICA",
    "NPOB": "N"
  },
  {
    "SCAC": "MAEU",
    "CNT": "MSKU3446060",
    "NOC": 1,
    "MBL": 587363564,
    "ETA": "4-Dec",
    "CNEE": "THERMAX",
    "AGENT": "PARU",
    "POD": "HOUSTON",
    "FPOD": "EL PASO",
    "PRDT": "D",
    "AIC": "ICA",
    "NPOB": "N"
  },
  {
    "SCAC": "CMDU",
    "CNT": "SEGU6049840",
    "NOC": 1,
    "MBL": "CAD0395270",
    "ETA": "4-Dec",
    "CNEE": "TRANSCON ULTRA",
    "AGENT": "SEA",
    "POD": "NEW YORK",
    "FPOD": "BROOKLYN",
    "PRDT": "D",
    "AIC": "IC",
    "NPOB": "O"
  },
  {
    "SCAC": "MAEU",
    "CNT": "MRKU4175401",
    "NOC": 1,
    "MBL": 586367111,
    "ETA": "4-Dec",
    "CNEE": "ABID",
    "AGENT": "SELD",
    "POD": "HOUSTON",
    "FPOD": "HOUSTON",
    "PRDT": "P",
    "AIC": "ICA",
    "NPOB": "B"
  },
  {
    "SCAC": "MAEU",
    "CNT": "MSKU2746756",
    "NOC": 1,
    "MBL": 586969550,
    "ETA": "5-Dec",
    "CNEE": "SHIVAM",
    "AGENT": "SELD",
    "POD": "SAVANNAH",
    "FPOD": "SAVANNAH",
    "PRDT": "P",
    "AIC": "IA",
    "NPOB": "N"
  },
  {
    "SCAC": "SAFM",
    "CNT": "MAEU4674019",
    "NOC": 1,
    "MBL": 712047407,
    "ETA": "6-Dec",
    "CNEE": "AUSTROMAR",
    "AGENT": "AMI",
    "POD": "NEWARK",
    "FPOD": "CHICAGO",
    "PRDT": "R",
    "AIC": "",
    "NPOB": "P"
  },
  {
    "SCAC": "MAEU",
    "CNT": "MSKU6815367",
    "NOC": 1,
    "MBL": 587885242,
    "ETA": "6-Dec",
    "CNEE": "AQ TEXTILES",
    "AGENT": "RYDER",
    "POD": "CHARLESTON",
    "FPOD": "CHARLESTON",
    "PRDT": "P",
    "AIC": "I",
    "NPOB": "B"
  },
  {
    "SCAC": "MAEU",
    "CNT": "MRSU3597154",
    "NOC": 1,
    "MBL": 587900611,
    "ETA": "6-Dec",
    "CNEE": "AQ TEXTILES",
    "AGENT": "RYDER",
    "POD": "CHARLESTON",
    "FPOD": "CHARLESTON",
    "PRDT": "P",
    "AIC": "I",
    "NPOB": "B"
  },
  {
    "SCAC": "CMDU",
    "CNT": "APZU4889955",
    "NOC": 1,
    "MBL": "AMC0786374",
    "ETA": "7-Dec",
    "CNEE": "RBC",
    "AGENT": "AMI",
    "POD": "NORFOLK",
    "FPOD": "CINCINNATI",
    "PRDT": "R",
    "AIC": "",
    "NPOB": "B"
  },
  {
    "SCAC": "CMDU",
    "CNT": "TCLU7431142",
    "NOC": 1,
    "MBL": "AMC0785579",
    "ETA": "7-Dec",
    "CNEE": "ALIMPEX",
    "AGENT": "AMI",
    "POD": "NORFOLK",
    "FPOD": "SAUGET",
    "PRDT": "D",
    "AIC": "",
    "NPOB": "N"
  },
  {
    "SCAC": "CMDU",
    "CNT": "APZU3964150",
    "NOC": 1,
    "MBL": "AMC0785587",
    "ETA": "7-Dec",
    "CNEE": "ALIMPEX",
    "AGENT": "AMI",
    "POD": "NORFOLK",
    "FPOD": "SAUGET",
    "PRDT": "D",
    "AIC": "",
    "NPOB": "N"
  },
  {
    "SCAC": "CMDU",
    "CNT": "TRLU8880996",
    "NOC": 1,
    "MBL": "CAD0396220",
    "ETA": "7-Dec",
    "CNEE": "COOPER",
    "AGENT": "SEA",
    "POD": "NORFOLK",
    "FPOD": "ROANOKE",
    "PRDT": "D",
    "AIC": "IC",
    "NPOB": "N"
  },
  {
    "SCAC": "CMDU",
    "CNT": "2 CONTAINER",
    "NOC": 2,
    "MBL": "CAD0396344",
    "ETA": "7-Dec",
    "CNEE": "IMPAK FILM",
    "AGENT": "SEA",
    "POD": "NORFOLK",
    "FPOD": "LINCOLNWOOD",
    "PRDT": "D",
    "AIC": "IC",
    "NPOB": "O"
  },
  {
    "SCAC": "MEDU",
    "CNT": "TCLU5919586",
    "NOC": 1,
    "MBL": "UM835721",
    "ETA": "8-Dec",
    "CNEE": "ABB",
    "AGENT": "SEA",
    "POD": "SAVANNAH",
    "FPOD": "BYHALIA",
    "PRDT": "D",
    "AIC": "I",
    "NPOB": "N"
  },
  {
    "SCAC": "MEDU",
    "CNT": "MEDU8457146",
    "NOC": 1,
    "MBL": "UM833999",
    "ETA": "8-Dec",
    "CNEE": "ABB",
    "AGENT": "SEA",
    "POD": "SAVANNAH",
    "FPOD": "BYHALIA",
    "PRDT": "D",
    "AIC": "I",
    "NPOB": "N"
  },
  {
    "SCAC": "CMDU",
    "CNT": "FSCU9486382",
    "NOC": 1,
    "MBL": "CAD0396222",
    "ETA": "9-Dec",
    "CNEE": "ABB",
    "AGENT": "SEA",
    "POD": "SAVANNAH",
    "FPOD": "BYHALIA",
    "PRDT": "D",
    "AIC": "I",
    "NPOB": "N"
  },
  {
    "SCAC": "EGLV",
    "CNT": "EITU0177556",
    "NOC": 1,
    "MBL": 107000000000,
    "ETA": "9-Dec",
    "CNEE": "AUTOMANN",
    "AGENT": "SELD",
    "POD": "NEW YORK",
    "FPOD": "SOMERSET",
    "PRDT": "T",
    "AIC": "",
    "NPOB": "P"
  },
  {
    "SCAC": "HLCU",
    "CNT": "TGHU8909791",
    "NOC": 1,
    "MBL": "MEA191009571",
    "ETA": "9-Dec",
    "CNEE": "ABID",
    "AGENT": "SELD",
    "POD": "NEW YORK",
    "FPOD": "NEW YORK",
    "PRDT": "P",
    "AIC": "IC",
    "NPOB": "B"
  },
  {
    "SCAC": "HLCU",
    "CNT": "FSCU6854388",
    "NOC": 1,
    "MBL": "MEA191009611",
    "ETA": "9-Dec",
    "CNEE": "ABID",
    "AGENT": "SELD",
    "POD": "NEW YORK",
    "FPOD": "NEW YORK",
    "PRDT": "P",
    "AIC": "IC",
    "NPOB": "B"
  },
  {
    "SCAC": "MAEU",
    "CNT": "MSKU3559066",
    "NOC": 1,
    "MBL": 588271993,
    "ETA": "10-Dec",
    "CNEE": "THERMAX",
    "AGENT": "PARU",
    "POD": "NEWARK",
    "FPOD": "EDISON",
    "PRDT": "D",
    "AIC": "ICA",
    "NPOB": "N"
  },
  {
    "SCAC": "SAFM",
    "CNT": "SUDU7639672",
    "NOC": 1,
    "MBL": 588292436,
    "ETA": "10-Dec",
    "CNEE": "PVS REALITY",
    "AGENT": "AMI",
    "POD": "NEWARK",
    "FPOD": "CHICAGO",
    "PRDT": "R",
    "AIC": "",
    "NPOB": "B"
  },
  {
    "SCAC": "SAFM",
    "CNT": "MRKU4591348",
    "NOC": 1,
    "MBL": 588061538,
    "ETA": "10-Dec",
    "CNEE": "NOVEL",
    "AGENT": "AMI",
    "POD": "NEWARK",
    "FPOD": "SOMERSET",
    "PRDT": "D",
    "AIC": "",
    "NPOB": "B"
  },
  {
    "SCAC": "SAFM",
    "CNT": "SUDU5669641",
    "NOC": 1,
    "MBL": 711024982,
    "ETA": "10-Dec",
    "CNEE": "NEXTEER",
    "AGENT": "ACE EX",
    "POD": "NEWARK",
    "FPOD": "CHICAGO",
    "PRDT": "R",
    "AIC": "IC",
    "NPOB": "N"
  }
]