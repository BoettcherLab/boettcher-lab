'use strict';
  // Shared by the homepage and Group Members page. Add new gallery photos here.
  const GROUP_PHOTOS = [
    {src:'assets/group-portrait.webp',caption:'Lab group',alt:'Boettcher Lab members gathered outside the College of Chemistry at UC Berkeley'},
    {src:'assets/summer-barbecue.webp',caption:'Summer barbecue',alt:'Boettcher Lab members celebrating together at the summer barbecue'},
    {src:'assets/lab-walkthrough.webp',caption:'Lab walkthrough',alt:'A Boettcher Lab walkthrough with researchers gathered beside electrochemistry equipment'}
  ];
  const TOPICS = [
    'Bipolar membranes',
    'Anion-exchange membranes',
    'Interfacial ion transfer',
    'Thermo-electrocatalysis',
    'Photo-electrochemistry',
    'Oxygen evolution reaction'
  ];
  // Research summaries adapted from the publication archive bundled with this site.
  const RESEARCH = [
  {
    "slug": "bipolar",
    "title": "Bipolar membranes",
    "paper": "wu-2026",
    "eyebrow": "WATER DISSOCIATION · ION TRANSPORT",
    "description": "Bipolar membranes bring cation- and anion-exchange layers together at a junction where water can dissociate into protons and hydroxide ions. We investigate how catalysts, local electric fields, and water transport govern this reaction, connecting molecular mechanisms to membrane performance.",
    "application": "Applications include water electrolysis, electrodialysis, and control of local pH when operating with impure water.",
    "papers": [
      "wu-2026",
      "hou-2026",
      "han-2026"
    ]
  },
  {
    "slug": "anion",
    "title": "Anion-exchange membranes",
    "paper": "hou-2025",
    "eyebrow": "PURE-WATER ELECTROLYSIS · INTERPHASE ENGINEERING",
    "description": "Anion-exchange-membrane electrolyzers offer a route to hydrogen production using alkaline-compatible catalysts. Our work examines the interfaces between catalysts and ion-conducting polymers, where electrical conductivity, ion transport, and chemical stability must work together.",
    "application": "We study catalyst–ionomer degradation and engineer anode interphases to improve the durability of pure-water-fed electrolyzers.",
    "papers": [
      "hou-2025",
      "kwak-2026",
      "expanded-9"
    ]
  },
  {
    "slug": "ion-transfer",
    "title": "Interfacial ion transfer",
    "paper": "dantona-2025",
    "eyebrow": "REACTION KINETICS · ELECTROCHEMICAL INTERFACES",
    "description": "Moving ions across an interface is a fundamental step in many electrochemical reactions. We investigate proton transfer at liquid–liquid interfaces, proton transfer in model oxide films, and metal-ion transfer during electrodeposition and dissolution.",
    "application": "By connecting measurements on model interfaces with molecular-level descriptions, these studies help identify what controls electrochemical reaction rates.",
    "papers": [
      "dantona-2025",
      "expanded-0",
      "kang-2024"
    ]
  },
  {
    "slug": "thermo",
    "title": "Thermo-electrocatalysis",
    "paper": null,
    "eyebrow": "TEMPERATURE · POTENTIAL · REACTIVITY",
    "description": "Temperature and electrode potential both influence the rates of electrochemical reactions. Understanding how they act together is part of the broader challenge of separating thermodynamic, kinetic, and transport contributions to measured catalytic activity.",
    "application": "Explore the group’s related work on hydrogen evolution and electrochemical potentials in the publication archive.",
    "papers": [
      "expanded-10",
      "expanded-30"
    ]
  },
  {
    "slug": "photo",
    "title": "Photo-electrochemistry",
    "paper": "yang-2026",
    "eyebrow": "LIGHT ABSORPTION · CHARGE TRANSFER · SURFACE CHEMISTRY",
    "description": "Photoelectrochemical materials couple light absorption to chemical reactions. We study how semiconductor surfaces and catalyst contacts control charge separation, charge transfer, and stability—from nanoscale interfaces to operating photoelectrodes.",
    "application": "Recent work investigates how surface reconstruction changes the activity and stability of BiVO₄ during photoelectrochemical glycerol oxidation.",
    "papers": [
      "yang-2026",
      "kaufman-2024",
      "expanded-16"
    ]
  },
  {
    "slug": "oer",
    "title": "Oxygen evolution reaction",
    "paper": "liu-2025",
    "eyebrow": "CATALYST DYNAMICS · METAL OXIDES",
    "description": "The oxygen evolution reaction is a key anodic process in water electrolysis. We investigate mixed-metal oxides and oxyhydroxides to understand how composition, trace iron, and changing surface structures influence catalytic activity.",
    "application": "Our studies connect active-site chemistry and iron adsorption dynamics to catalyst design for alkaline water electrolysis.",
    "papers": [
      "liu-2025",
      "expanded-12",
      "expanded-8"
    ]
  }
];
  // Citations below were transcribed from the lab's public publications list (2024–2026).
  // Authors are supplied as displayed; several entries use et al. where the public listing is abbreviated.
  let PUBLICATIONS = [
  {
    "id": "openalex-W7167246322",
    "doi": "10.1039/d6ee01056c",
    "title": "Activating magnetite ores for aqueous ironmaking at high current densities",
    "year": 2026,
    "authors": "Raj Shekhar, James Cecil, Andrew C. Goldman, Evandi Rahman, Louka J. Moutarlier, Faiqa Khaliq, Audrey M. Davenport, Shannon Wachter Boettcher, Paul Andrew Kempler",
    "journal": "Energy & Environmental Science",
    "role": "collaboration",
    "metadata_keywords": [
      "magnetite",
      "passivation",
      "ring-disk electrode",
      "high current density",
      "Raman spectroscopy"
    ],
    "tags": [],
    "volume": "19",
    "pages": "5053-5069",
    "keywords": [
      "ionomers-electrolytes",
      "metals-corrosion",
      "operando"
    ],
    "graphic": {
      "src": "assets/publications/openalex-W7167246322.webp",
      "kind": "figure",
      "width": 984,
      "height": 886,
      "source": "https://escholarship.org/content/qt39s6s91d/qt39s6s91d.pdf",
      "page": 8
    }
  },
  {
    "id": "openalex-W7164483668",
    "doi": "10.3389/fenrg.2026.1794912",
    "title": "Anion-exchange membrane water electrolysis: insights from round-robin testing",
    "year": 2026,
    "authors": "Melissa E. Kreider, Brith Milenia Rojas Mendoza, Luke Brusse, Duha Syar, Minkyoung Kwak, Patrick Yang, Hung-Ming Joseph Chang, Ryan Travis Hannagan, Isabela Rios Amador, Anthony C. Ekennia, Nicholas J. Oliveira, Adam C. Nielander, Shannon Wachter Boettcher, Iryna V. Zenyuk, Thomas Francisco Jaramillo, Shaun M Alia, Balasubramanian Lakshmanan",
    "journal": "Frontiers in Energy Research",
    "role": "collaboration",
    "metadata_keywords": [
      "anion exchange membrane water electrolysis",
      "round-robin testing",
      "membrane electrode assembly",
      "hydrogen production",
      "standardization",
      "reproducibility"
    ],
    "tags": [
      1
    ],
    "volume": "14",
    "keywords": [
      "anion-exchange",
      "water-electrolysis",
      "ionomers-electrolytes"
    ],
    "graphic": {
      "src": "assets/publications/openalex-W7164483668.webp",
      "kind": "figure",
      "width": 494,
      "height": 412,
      "source": "https://escholarship.org/content/qt2834m2k7/qt2834m2k7.pdf",
      "page": 4
    }
  },
  {
    "id": "openalex-W7166119105",
    "doi": "10.1021/acsenergylett.6c01540",
    "title": "Coupled Interfacial Kinetics and Transport Resistances Govern High-Current Behavior in Bipolar Membranes",
    "year": 2026,
    "authors": "Claudio Adrian Ruiz-Torres, Yaguang Zhu, Olivia T. Vulpin, Yifan Wu, Zhuo Li, Michael Drakopoulos, Nghia Trong Vo, Shannon Wachter Boettcher, Marta C. Hatzell, Kelsey B. Hatzell",
    "journal": "ACS Energy Letters",
    "role": "collaboration",
    "metadata_keywords": [
      "bipolar membranes",
      "interfacial polarization",
      "transport resistance",
      "membrane hydration",
      "distribution of relaxation times",
      "electrochemical impedance spectroscopy",
      "operando synchrotron X-ray diffraction",
      "membrane electrode assembly"
    ],
    "tags": [
      0
    ],
    "volume": "11",
    "pages": "5245-5252",
    "keywords": [
      "bipolar-membranes",
      "water-dissociation",
      "ion-transfer",
      "operando",
      "materials-synthesis"
    ],
    "graphic": {
      "src": "assets/publications/openalex-W7166119105.webp",
      "kind": "figure",
      "width": 832,
      "height": 510,
      "source": "https://escholarship.org/content/qt49d0v00s/qt49d0v00s.pdf",
      "page": 4
    }
  },
  {
    "id": "openalex-W7214660035",
    "doi": "10.1021/jacs.6c16237",
    "title": "Disentangling Catalytic Activity and Film Conductivity Reveals Temporally Decoupled Catalyst Evolution and Conductivity Artifacts",
    "year": 2026,
    "authors": "Sung Il Kim, Sunghwan Won, Jinyeong Park, Donghwi Na, Shannon Wachter Boettcher, Taek Dong Chung",
    "journal": "Journal of the American Chemical Society",
    "role": "collaboration",
    "metadata_keywords": [
      "charge transfer resistance",
      "nickel oxyhydroxide",
      "iron oxyhydroxide",
      "catalyst evolution",
      "high-valent iron species",
      "electrocatalytic activity",
      "charge transport",
      "oxygen evolution reaction"
    ],
    "tags": [],
    "volume": "148",
    "pages": "42707-42718",
    "keywords": [
      "oxygen-evolution",
      "ionomers-electrolytes",
      "operando"
    ],
    "graphic": {
      "src": "assets/publications/openalex-W7214660035.webp",
      "kind": "toc",
      "width": 644,
      "height": 345,
      "source": "https://escholarship.org/content/qt1tj7462b/qt1tj7462b.pdf",
      "page": 14
    }
  },
  {
    "id": "openalex-W7123700347",
    "doi": "10.1039/d5ey00364d",
    "title": "Electric-field enhanced water-dissociation catalysis on oxide surfaces",
    "year": 2026,
    "authors": "Timothy Nathan Stovall, Justin C. Bui, Yifan Wu, Shujin Hou, Shannon Wachter Boettcher, Adam Z. Weber",
    "journal": "EES Catalysis",
    "role": "collaboration",
    "metadata_keywords": [
      "water dissociation",
      "electric field enhancement",
      "oxide surfaces",
      "bipolar membrane electrodialysis",
      "electrostatic environment",
      "surface chemistry",
      "water splitting",
      "membrane performance"
    ],
    "tags": [
      0
    ],
    "volume": "4",
    "pages": "407-420",
    "keywords": [
      "bipolar-membranes",
      "water-electrolysis",
      "water-dissociation",
      "separations"
    ],
    "graphic": {
      "src": "assets/publications/openalex-W7123700347.webp",
      "kind": "figure",
      "width": 843,
      "height": 489,
      "source": "https://escholarship.org/content/qt6n99b9n5/qt6n99b9n5.pdf",
      "page": 3
    }
  },
  {
    "id": "kwak-2026",
    "year": 2026,
    "title": "Engineering CoOx-Based Self-Supported Anodes for Pure-Water-Fed Anion-Exchange-Membrane Electrolysis",
    "authors": "M. Kwak, S. Hou, K. J. Spence, T. T. Debela, S. W. Boettcher",
    "journal": "ACS Catalysis",
    "doi": "10.1021/acscatal.5c05942",
    "tags": [
      1,
      5
    ],
    "role": "group",
    "metadata_keywords": [
      "anion exchange membrane water electrolysis",
      "oxygen evolution reaction",
      "cobalt carbonate hydroxide",
      "annealing",
      "catalyst deactivation",
      "interface engineering",
      "non-noble metal catalysts",
      "hydrothermal synthesis",
      "catalyst layer design"
    ],
    "volume": "16",
    "pages": "311-322",
    "keywords": [
      "anion-exchange",
      "water-electrolysis",
      "oxygen-evolution",
      "ionomers-electrolytes",
      "stability",
      "materials-synthesis"
    ],
    "graphic": {
      "src": "assets/publications/kwak-2026.webp",
      "kind": "toc",
      "width": 647,
      "height": 444,
      "source": "https://escholarship.org/content/qt3cr604x9/qt3cr604x9.pdf",
      "page": 31
    }
  },
  {
    "id": "wu-2026",
    "year": 2026,
    "title": "How Does Water Dissociation Work in Bipolar Membranes?",
    "authors": "Y. Wu, T. N. Stovall, D. Xi, S. Hou, P. Sarma, O. T. Vulpin, S. Sasmal, A. Z. Weber, J. C. Bui, S. W. Boettcher",
    "journal": "Journal of the American Chemical Society",
    "doi": "10.1021/jacs.6c05146",
    "tags": [
      0
    ],
    "role": "group",
    "metadata_keywords": [
      "bipolar membranes",
      "water dissociation",
      "autoionization",
      "electric field effects",
      "heterogeneous catalysis",
      "metal oxide catalysts",
      "graphene oxide",
      "proton transfer",
      "electrostatic potential",
      "pH control",
      "ion transfer"
    ],
    "volume": "148",
    "pages": "23395-23409",
    "keywords": [
      "bipolar-membranes",
      "water-dissociation",
      "ion-transfer",
      "stability",
      "modeling",
      "fundamentals-education"
    ],
    "graphic": {
      "src": "assets/publications/wu-2026.webp",
      "kind": "toc",
      "width": 975,
      "height": 525,
      "source": "https://escholarship.org/content/qt5mn5m5c5/qt5mn5m5c5.pdf",
      "page": 37
    }
  },
  {
    "id": "han-2026",
    "year": 2026,
    "title": "Local pH Control for Impure-Water-Fed Bipolar-Membrane Electrolyzers",
    "authors": "S. Han, G. H. Choi, W. Zhang, D. Xi, D. Syar, J. Shim, J. Y. Lee, T. F. Jaramillo, J. Ryu, S. W. Boettcher",
    "journal": "Energy & Environmental Science",
    "doi": "10.1039/d6ee02476a",
    "tags": [
      0
    ],
    "role": "group",
    "metadata_keywords": [
      "seawater electrolysis",
      "pH gradient",
      "water transport",
      "hydrogen production"
    ],
    "volume": "19",
    "pages": "5718-5729",
    "keywords": [
      "bipolar-membranes",
      "anion-exchange",
      "water-electrolysis",
      "ionomers-electrolytes",
      "ion-transfer",
      "stability",
      "metals-corrosion",
      "modeling"
    ],
    "graphic": {
      "src": "assets/publications/han-2026.webp",
      "kind": "toc",
      "width": 1040,
      "height": 494,
      "source": "https://escholarship.org/content/qt5kb2w3ct/qt5kb2w3ct.pdf",
      "page": 13
    }
  },
  {
    "id": "openalex-W7147400848",
    "doi": "10.1039/d5ee07845h",
    "title": "Low-voltage syngas synthesis via BPM electrolysis of CO 2 capture and aldehyde solution",
    "year": 2026,
    "authors": "Po‐Wei Huang, Hyeonuk Choi, Anush Venkataraman, Olivia T. Vulpin, Claudio Adrian Ruiz-Torres, Danae A. Chipoco Haro, Yaguang Zhu, Erika R. Yamazaki, Kelsey B. Hatzell, Shannon Wachter Boettcher, Sankar Nair, Jihun Oh, Hakhyeon Song, Marta C. Hatzell",
    "journal": "Energy & Environmental Science",
    "role": "collaboration",
    "metadata_keywords": [
      "CO2 capture",
      "formaldehyde oxidation",
      "Faradaic efficiency",
      "hydrogen production",
      "CO2 utilization"
    ],
    "tags": [
      0
    ],
    "volume": "19",
    "pages": "2658-2667",
    "keywords": [
      "bipolar-membranes",
      "carbon",
      "separations",
      "organic-oxidation",
      "materials-synthesis"
    ],
    "graphic": {
      "src": "assets/publications/openalex-W7147400848.webp",
      "kind": "toc",
      "width": 600,
      "height": 315,
      "source": "https://escholarship.org/content/qt9zc7g0hx/qt9zc7g0hx.pdf",
      "page": 27
    }
  },
  {
    "id": "hou-2026",
    "year": 2026,
    "title": "Measuring pH Changes Inside a Bipolar Membrane Junction",
    "authors": "S. Hou, T. N. Stovall, A. Z. Weber, S. W. Boettcher",
    "journal": "ACS Energy Letters",
    "doi": "10.1021/acsenergylett.5c03710",
    "tags": [
      0
    ],
    "role": "group",
    "metadata_keywords": [
      "pH gradient",
      "anion exchange layer",
      "water dissociation",
      "hydrogen bond network",
      "electric field effects",
      "electrochemical energy devices"
    ],
    "volume": "11",
    "pages": "2708-2716",
    "keywords": [
      "bipolar-membranes",
      "anion-exchange",
      "water-dissociation",
      "modeling"
    ],
    "graphic": {
      "src": "assets/publications/hou-2026.webp",
      "kind": "toc",
      "width": 807,
      "height": 525,
      "source": "https://escholarship.org/content/qt8bq3783r/qt8bq3783r.pdf",
      "page": 25
    }
  },
  {
    "id": "yang-2026",
    "year": 2026,
    "title": "Operation-Induced BiVO₄ Surface Reconstruction Modulates Photoelectrochemical Glycerol Photooxidation Stability and Activity",
    "authors": "J. W. Yang, H. R. Kwon, D. S. Kim, N. A. Sagui, Y. J. Hwang, H. W. Jang, S. W. Boettcher",
    "journal": "ACS Energy Letters",
    "doi": "10.1021/acsenergylett.6c01409",
    "tags": [
      4
    ],
    "role": "group",
    "metadata_keywords": [
      "bismuth vanadate",
      "surface reconstruction",
      "photoelectrodes",
      "vanadium dissolution",
      "photostability",
      "charge transfer resistance"
    ],
    "volume": "11",
    "pages": "5633-5642",
    "keywords": [
      "photoelectrochemistry",
      "semiconductor-interfaces",
      "ionomers-electrolytes",
      "stability",
      "organic-oxidation",
      "operando"
    ],
    "graphic": {
      "src": "assets/publications/yang-2026.webp",
      "kind": "toc",
      "width": 668,
      "height": 380,
      "source": "https://escholarship.org/content/qt3zp6d9c4/qt3zp6d9c4.pdf",
      "page": 34
    }
  },
  {
    "id": "xi-2026",
    "year": 2026,
    "title": "Oxygen-tolerant CO₂ capture using protected redox-driven reverse bias bipolar membrane electrodialysis",
    "authors": "D. Xi, P. Zhao, M. Bansal, O. T. Vulpin, S. W. Boettcher, M. J. Aziz",
    "journal": "Carbon Future",
    "doi": "10.26599/cf.2026.9200066",
    "tags": [
      0
    ],
    "role": "collaboration",
    "metadata_keywords": [
      "CO2 capture",
      "oxygen tolerance",
      "bipolar membrane electrodialysis",
      "reverse bias",
      "redox-active molecules",
      "buffering agents"
    ],
    "volume": "3",
    "pages": "9200066-9200066",
    "keywords": [
      "bipolar-membranes",
      "ionomers-electrolytes",
      "stability",
      "carbon",
      "separations"
    ],
    "graphic": {
      "src": "assets/publications/xi-2026.webp",
      "kind": "figure",
      "width": 1037,
      "height": 654,
      "source": "https://escholarship.org/content/qt15w093tz/qt15w093tz.pdf",
      "page": 3
    }
  },
  {
    "id": "openalex-W7211994021",
    "doi": "10.1016/j.checat.2026.101845",
    "title": "Reverse polarization degradation of nickel iron oxyhydroxide anodes in alkaline water electrolysis",
    "year": 2026,
    "authors": "Manasa Rajeev, Fernanda Brito dos Santos, Shannon Wachter Boettcher, Paul Andrew Kempler",
    "journal": "Chem Catalysis",
    "role": "collaboration",
    "metadata_keywords": [
      "NiFeOOH",
      "anode degradation",
      "polarity reversal",
      "alkaline water electrolysis",
      "oxygen evolution reaction",
      "thin film electrodes",
      "catalyst dissolution",
      "anode lifetime",
      "KOH electrolyte",
      "structural rearrangement"
    ],
    "tags": [
      5
    ],
    "volume": "6",
    "pages": "101845-101845",
    "keywords": [
      "water-electrolysis",
      "oxygen-evolution",
      "ionomers-electrolytes",
      "stability",
      "materials-synthesis"
    ]
  },
  {
    "id": "openalex-W7139055035",
    "doi": "10.1021/acscatal.5c09080",
    "title": "Spectroelectrochemical Studies of Oxygen Evolution Reaction Kinetics for Surface-Incorporated Iron in Nickel Oxyhydroxide Electrocatalysts",
    "year": 2026,
    "authors": "Yifeng Wang, Liam Peter Twight, Nicole Alessandra Saguì, Minkyoung Kwak, Shannon Wachter Boettcher, Benjamin Moss, Ifan E. L. Stephens, James Robert Durrant, Reshma R. Rao",
    "journal": "ACS Catalysis",
    "role": "collaboration",
    "metadata_keywords": [
      "oxygen evolution reaction",
      "nickel oxyhydroxide",
      "alkaline water electrolysis",
      "charge accumulation",
      "hole transport",
      "redox potential"
    ],
    "tags": [
      5
    ],
    "volume": "16",
    "pages": "6749-6757",
    "keywords": [
      "water-electrolysis",
      "oxygen-evolution",
      "operando"
    ],
    "graphic": {
      "src": "assets/publications/openalex-W7139055035.webp",
      "kind": "figure",
      "width": 686,
      "height": 463,
      "source": "https://escholarship.org/content/qt9d27w910/qt9d27w910.pdf",
      "page": 4
    }
  },
  {
    "id": "openalex-W7137877481",
    "doi": "10.1039/d6nr00391e",
    "title": "Synergistic ruthenium single-atom and nanoparticles in nickel as cooperative catalysts for the alkaline hydrogen evolution reaction",
    "year": 2026,
    "authors": "Gaelle Khalil, Marie-Sophie Dias Fernandes, Sumit Bawari, Linghui Li, Chiddharth Muthuraj, Florent Ducrozet, Minkyoung Kwak, Miguel Comesaña‐Hermo, Andrea Zitolo, Stephan N. Steinmann, Shannon Wachter Boettcher, Cédric Tard, Benedikt Lassalle‐Kaiser, Marion Giraud, Jennifer Péron",
    "journal": "Nanoscale",
    "role": "collaboration",
    "metadata_keywords": [
      "ruthenium single-atom catalysts",
      "ruthenium nanoparticles",
      "alkaline hydrogen evolution reaction",
      "one-pot synthesis",
      "noble-metal-free electrocatalysts"
    ],
    "tags": [],
    "volume": "18",
    "pages": "9177-9189",
    "keywords": [
      "hydrogen-evolution",
      "materials-synthesis"
    ],
    "graphic": {
      "src": "assets/publications/openalex-W7137877481.webp",
      "kind": "figure",
      "width": 860,
      "height": 614,
      "source": "https://escholarship.org/content/qt39t0j304/qt39t0j304.pdf",
      "page": 6
    }
  },
  {
    "id": "han-2025",
    "year": 2025,
    "title": "Advancing SnO₂-Based Water Dissociation Catalysis in Bipolar-Membrane Water Electrolyzers",
    "authors": "S. Han, S. Sasmal, M. Shen, Y. Wu, O. T. Vulpin, S. Hou, S. Kim, J. Y. Lee, J. Yoon, S. W. Boettcher",
    "journal": "ACS Energy Letters",
    "doi": "10.1021/acsenergylett.5c00309",
    "tags": [
      0
    ],
    "role": "group",
    "metadata_keywords": [
      "SnO2 catalyst",
      "membrane electrode assembly",
      "catalyst layer thickness",
      "ion transport",
      "overpotential",
      "catalyst stability"
    ],
    "volume": "10",
    "pages": "1633-1641",
    "keywords": [
      "bipolar-membranes",
      "water-electrolysis",
      "water-dissociation",
      "ion-transfer",
      "stability",
      "materials-synthesis"
    ],
    "graphic": {
      "src": "assets/publications/han-2025.webp",
      "kind": "toc",
      "width": 690,
      "height": 465,
      "source": "https://escholarship.org/content/qt8cp8b0q2/qt8cp8b0q2.pdf",
      "page": 21
    }
  },
  {
    "id": "openalex-W4409067172",
    "doi": "10.3389/fenrg.2025.1553134",
    "title": "Anion exchange membrane test protocol validation",
    "year": 2025,
    "authors": "Su Min Ahn, Andrew Boudreau, Anthony C. Ekennia, Alexis Palau, Olivia T. Vulpin, Minkyoung Kwak, Yu Seung Kim, Shannon Wachter Boettcher, Eun Joo Park, George M. Roberts, Sergio I. Perez Bakovic, Katherine E. Ayers",
    "journal": "Frontiers in Energy Research",
    "role": "collaboration",
    "metadata_keywords": [
      "anion exchange membranes",
      "ion exchange capacity",
      "alkaline stability",
      "test protocol validation",
      "interlaboratory reproducibility",
      "NMR measurement",
      "sample preservation"
    ],
    "tags": [
      1
    ],
    "volume": "13",
    "keywords": [
      "anion-exchange",
      "water-electrolysis",
      "ionomers-electrolytes",
      "stability"
    ],
    "graphic": {
      "src": "assets/publications/openalex-W4409067172.webp",
      "kind": "figure",
      "width": 495,
      "height": 390,
      "source": "https://escholarship.org/content/qt0kv0j7pr/qt0kv0j7pr.pdf",
      "page": 4
    }
  },
  {
    "id": "openalex-W4412829789",
    "doi": "10.1021/acs.chemrev.4c00466",
    "title": "Anion-Exchange-Membrane Electrolysis with Alkali-Free Water Feed",
    "year": 2025,
    "authors": "Mohsin Muhyuddin, Carlo Santoro, Luigi Osmieri, Valerio C.A. Ficca, Ariel Friedman, Karam Yassin, Gioele Pagot, Enrico Negro, Anastasiia Konovalova, Grace A. Lindquist, Liam Peter Twight, Minkyoung Kwak, Enrico Berretti, Vito Di Noto, Frédéric Jaouen, Lior Elbaz, Dario R. Dekel, Piercarlo Mustarelli, Shannon Wachter Boettcher, Alessandro Lavacchi, Plamen B. Atanassov",
    "journal": "Chemical Reviews",
    "role": "collaboration",
    "metadata_keywords": [
      "anion exchange membrane water electrolysis",
      "seawater electrolysis",
      "hydrogen production",
      "ionomers",
      "electrocatalysts",
      "bipolar plates",
      "porous transport layer",
      "membrane electrode assembly",
      "electrolyte composition",
      "device degradation"
    ],
    "tags": [
      1
    ],
    "volume": "125",
    "pages": "6906-6976",
    "keywords": [
      "anion-exchange",
      "water-electrolysis",
      "ionomers-electrolytes",
      "stability",
      "fundamentals-education"
    ],
    "graphic": {
      "src": "assets/publications/openalex-W4412829789.webp",
      "kind": "figure",
      "width": 816,
      "height": 526,
      "source": "https://escholarship.org/content/qt1n31d32q/qt1n31d32q.pdf",
      "page": 4
    }
  },
  {
    "id": "expanded-7",
    "year": 2025,
    "title": "Anions in Corrosion: Influence of Polymer Electrolytes on the Interfacial Ion Transfer Kinetics of Cu at Au(111) Surfaces",
    "authors": "K. A. Thurman, C. M. Cannan, R. Shekhar, Y. Zhao, S. W. Boettcher, P. A. Kempler",
    "journal": "ACS Electrochemistry",
    "doi": "10.1021/acselectrochem.4c00181",
    "tags": [
      1,
      2
    ],
    "role": "collaboration",
    "metadata_keywords": [
      "copper corrosion",
      "Au(111)",
      "polymer electrolytes",
      "anion structure",
      "underpotential deposition",
      "sulfate electrolyte",
      "perfluorosulfonic acid ionomer",
      "adsorption isotherms",
      "exchange rates",
      "adsorption coverage"
    ],
    "volume": "1",
    "pages": "425-432",
    "keywords": [
      "ionomers-electrolytes",
      "ion-transfer",
      "stability",
      "metals-corrosion",
      "materials-synthesis",
      "fundamentals-education"
    ],
    "graphic": {
      "src": "assets/publications/expanded-7.webp",
      "kind": "figure",
      "width": 516,
      "height": 742,
      "source": "https://escholarship.org/content/qt0zh3q9gs/qt0zh3q9gs.pdf",
      "page": 7
    }
  },
  {
    "id": "expanded-4",
    "year": 2025,
    "title": "Comparing Advanced Bipolar Membranes for High-Current Electrodialysis and Membrane Electrolysis",
    "authors": "O. T. Vulpin, J. B. Mitchell, L. Chen, J. Lim, S. Sasmal, N. G. Price, S. R. Jarvis, S. W. Boettcher",
    "journal": "ACS Energy Letters",
    "doi": "10.1021/acsenergylett.4c03538",
    "tags": [
      0
    ],
    "role": "group",
    "metadata_keywords": [
      "bipolar membranes",
      "electrodialysis",
      "water electrolysis",
      "high current density",
      "current efficiency",
      "membrane compression",
      "fuel cells",
      "lithium battery recycling",
      "cement production"
    ],
    "volume": "10",
    "pages": "845-852",
    "keywords": [
      "bipolar-membranes",
      "water-electrolysis",
      "water-dissociation",
      "separations",
      "energy-storage",
      "materials-synthesis"
    ],
    "graphic": {
      "src": "assets/publications/expanded-4.webp",
      "kind": "toc",
      "width": 842,
      "height": 660,
      "source": "https://escholarship.org/content/qt4091d6zw/qt4091d6zw.pdf",
      "page": 19
    }
  },
  {
    "id": "hou-2025",
    "year": 2025,
    "title": "Durable, pure water–fed, anion-exchange membrane electrolyzers through interphase engineering",
    "authors": "S. Hou, A. Sekar, Y. Zhao, M. Kwak, J. Oh, K. K.-Y. Li, P. Wu, R. T. Hannagan, V. Cartagena, A. C. Ekennia, et al.",
    "journal": "Science",
    "doi": "10.1126/science.adw7100",
    "tags": [
      1
    ],
    "role": "group",
    "metadata_keywords": [
      "anion exchange membrane water electrolysis",
      "hydrogen production",
      "interphase engineering",
      "co-assembly",
      "water oxidation catalysts",
      "catalyst passivation",
      "hydroxide conductivity",
      "electrolyzer durability"
    ],
    "volume": "390",
    "pages": "294-298",
    "keywords": [
      "anion-exchange",
      "water-electrolysis",
      "oxygen-evolution",
      "ionomers-electrolytes",
      "stability"
    ],
    "graphic": {
      "src": "assets/publications/hou-2025.webp",
      "kind": "figure",
      "width": 910,
      "height": 677,
      "source": "https://escholarship.org/content/qt6f74d92h/qt6f74d92h.pdf",
      "page": 4
    }
  },
  {
    "id": "liu-2025",
    "year": 2025,
    "title": "Dynamics of Fe Adsorption and Desorption from CoOxHy During Oxygen Evolution Reaction Electrocatalysis",
    "authors": "L. Liu, L. P. Twight, S. Xi, Y. Ou, S. W. Boettcher",
    "journal": "ACS Catalysis",
    "doi": "10.1021/acscatal.4c04777",
    "tags": [
      5
    ],
    "role": "group",
    "metadata_keywords": [
      "iron adsorption",
      "oxygen evolution reaction",
      "cobalt oxyhydroxide",
      "catalyst-electrolyte interface",
      "Fe active sites",
      "alkaline water electrolysis",
      "water oxidation",
      "operando X-ray absorption spectroscopy"
    ],
    "volume": "15",
    "pages": "275-283",
    "keywords": [
      "water-electrolysis",
      "oxygen-evolution",
      "ionomers-electrolytes",
      "stability",
      "operando",
      "materials-synthesis"
    ],
    "graphic": {
      "src": "assets/publications/liu-2025.webp",
      "kind": "toc",
      "width": 931,
      "height": 494,
      "source": "https://escholarship.org/content/qt03n0v5v6/qt03n0v5v6.pdf",
      "page": 26
    }
  },
  {
    "id": "openalex-W4406607170",
    "doi": "10.1016/j.apsusc.2025.162470",
    "title": "Efficient BiVO4/CoFeO H photoanodes using controlled annealing and conformal linear-sweep electrocatalyst photodeposition",
    "year": 2025,
    "authors": "Dong Su Kim, Kun Woong Lee, Su Yeon Jung, Ji Hoon Choi, Hak Hyeon Lee, Won Seok Yang, Yun Seong Cho, Jin Wook Yang, Joohoon Kang, Shannon Wachter Boettcher, Hyung Koun Cho",
    "journal": "Applied Surface Science",
    "role": "collaboration",
    "metadata_keywords": [
      "BiVO4 photoanode",
      "solar water splitting",
      "oxygen evolution reaction",
      "sol-gel thin films",
      "photocorrosion",
      "photocurrent density",
      "photocatalyst stability"
    ],
    "tags": [
      4,
      5
    ],
    "volume": "689",
    "pages": "162470-162470",
    "keywords": [
      "water-electrolysis",
      "oxygen-evolution",
      "photoelectrochemistry",
      "stability",
      "metals-corrosion",
      "operando",
      "modeling",
      "materials-synthesis"
    ],
    "graphic": {
      "src": "assets/publications/openalex-W4406607170.webp",
      "kind": "figure",
      "width": 928,
      "height": 980,
      "source": "https://escholarship.org/content/qt67d520dv/qt67d520dv.pdf",
      "page": 5
    }
  },
  {
    "id": "expanded-0",
    "year": 2025,
    "title": "Electrochemical Proton-Transfer Kinetics Using Model Tungsten Oxide Thin Films",
    "authors": "D. Roychowdhury, N. D’Antona, Y. Zhao, Y. Surendranath, V. Augustyn, P. A. Kempler, S. W. Boettcher",
    "journal": "ACS Electrochemistry",
    "doi": "10.1021/acselectrochem.5c00137",
    "tags": [
      2
    ],
    "role": "group",
    "metadata_keywords": [
      "WO3 thin films",
      "WO3",
      "electrode-electrolyte interface",
      "interfacial ion transfer",
      "double-layer charging",
      "activation energy",
      "film crystallinity",
      "film thickness",
      "state of charge",
      "SnO2 substrate",
      "energy storage",
      "electrocatalysis"
    ],
    "volume": "1",
    "pages": "1710-1721",
    "keywords": [
      "ionomers-electrolytes",
      "ion-transfer",
      "energy-storage",
      "operando",
      "modeling",
      "materials-synthesis"
    ],
    "graphic": {
      "src": "assets/publications/expanded-0.webp",
      "kind": "figure",
      "width": 985,
      "height": 1052,
      "source": "https://escholarship.org/content/qt9wx6z830/qt9wx6z830.pdf",
      "page": 6
    }
  },
  {
    "id": "openalex-W4410859494",
    "doi": "10.1039/d5ee00094g",
    "title": "Hierarchically porous carbon supports enable efficient syngas production in electrified reactive capture",
    "year": 2025,
    "authors": "Hengzhou Liu, Heejong Shin, Xiaoyan Li, Guangcan Su, Pengfei Ou, Yong Wang, Lihaokun Chen, Jiaqi Yu, Yuanjun Chen, Rong Xia, Geonhui Lee, Kug‐Seung Lee, Christine J. Yu, Peiying Wang, Deokjae Choi, Daojin Zhou, Cong Tian, Issam Gereige, Ammar H. Alahmed, Aqil Jamal, Omar K. Farha, Shannon Wachter Boettcher, Jennifer B. Dunn, Ke Xie, Edward Hartley Sargent",
    "journal": "Energy & Environmental Science",
    "role": "collaboration",
    "metadata_keywords": [
      "hierarchical porous carbon",
      "syngas production",
      "electrochemical CO2 reduction",
      "polydopamine coating",
      "catalyst supports",
      "catalyst dispersion",
      "cobalt catalysts",
      "electronic structure modulation"
    ],
    "tags": [],
    "volume": "18",
    "pages": "6628-6640",
    "keywords": [
      "carbon"
    ],
    "graphic": {
      "src": "assets/publications/openalex-W4410859494.webp",
      "kind": "figure",
      "width": 1011,
      "height": 651,
      "source": "https://escholarship.org/content/qt8jp8x1x0/qt8jp8x1x0.pdf",
      "page": 3
    }
  },
  {
    "id": "expanded-3",
    "year": 2025,
    "title": "Impacts of Dissolved Iron on Alkaline Water Electrolysis Cells",
    "authors": "M. Rajeev, A. Jerome-Saboori, R. Shekhar, S. W. Boettcher, P. A. Kempler",
    "journal": "ACS Catalysis",
    "doi": "10.1021/acscatal.4c07439",
    "tags": [
      5
    ],
    "role": "collaboration",
    "metadata_keywords": [
      "dissolved iron",
      "alkaline water electrolysis",
      "oxygen evolution reaction",
      "mixed metal oxide anodes",
      "zero-gap electrolyzer",
      "voltage efficiency",
      "KOH electrolyte",
      "energy efficiency"
    ],
    "volume": "15",
    "pages": "2847-2856",
    "keywords": [
      "water-electrolysis",
      "oxygen-evolution",
      "ionomers-electrolytes",
      "metals-corrosion",
      "modeling"
    ],
    "graphic": {
      "src": "assets/publications/expanded-3.webp",
      "kind": "toc",
      "width": 751,
      "height": 398,
      "source": "https://escholarship.org/content/qt8nr2f1jr/qt8nr2f1jr.pdf",
      "page": 31
    }
  },
  {
    "id": "openalex-W4416203115",
    "doi": "10.1021/acselectrochem.5c00284",
    "title": "Ion Dynamics and Polarizations in a Simulated Nanopore under Alternating Current Controls",
    "year": 2025,
    "authors": "Zicheng Yang, Nick D’Antona, Shannon Wachter Boettcher, Niya Sa",
    "journal": "ACS electrochemistry.",
    "role": "collaboration",
    "metadata_keywords": [
      "alternating current field",
      "electromigration",
      "ion diffusion",
      "electric double layer",
      "surface charge",
      "ionic polarization",
      "continuum model",
      "ion selectivity",
      "molecular sensors",
      "biomimetic systems"
    ],
    "tags": [],
    "volume": "1",
    "pages": "2700-2708",
    "keywords": [
      "ion-transfer",
      "separations",
      "modeling",
      "fundamentals-education"
    ],
    "graphic": {
      "src": "assets/publications/openalex-W4416203115.webp",
      "kind": "figure",
      "width": 984,
      "height": 760,
      "source": "https://escholarship.org/content/qt00z354vq/qt00z354vq.pdf",
      "page": 8
    }
  },
  {
    "id": "openalex-W4413116548",
    "doi": "10.1021/acsnano.5c10559",
    "title": "Nanoporous Fe2O3 and Soluble Fe(II) Intermediates Accelerate the Electrodeposition of Fe in NaOH(aq)",
    "year": 2025,
    "authors": "Raj Shekhar, Semanti Mukhopadhyay, Francelia Sanchez, Anastasiia Konovalova, Shannon Wachter Boettcher, Arun Devaraj, Paul Andrew Kempler",
    "journal": "ACS Nano",
    "role": "collaboration",
    "metadata_keywords": [
      "hematite",
      "iron electrodeposition",
      "alkaline electrolyte",
      "iron-air batteries",
      "nanoscale porosity"
    ],
    "tags": [],
    "volume": "19",
    "pages": "33449-33459",
    "keywords": [
      "ionomers-electrolytes",
      "stability",
      "energy-storage",
      "metals-corrosion",
      "materials-synthesis"
    ],
    "graphic": {
      "src": "assets/publications/openalex-W4413116548.webp",
      "kind": "figure",
      "width": 916,
      "height": 624,
      "source": "https://escholarship.org/content/qt25t5f4vr/qt25t5f4vr.pdf",
      "page": 8
    }
  },
  {
    "id": "expanded-2",
    "year": 2025,
    "title": "Perovskite Catalysts for Pure-Water-Fed Anion-Exchange-Membrane Electrolyzer Anodes: Co-design of Electrically Conductive Nanoparticle Cores and Active Surfaces",
    "authors": "T. Zhai, H. Wang, S. R. Beaudoin, R. Zhang, M. Kwak, S. Hou, Z. Guo, S. W. Boettcher",
    "journal": "Journal of the American Chemical Society",
    "doi": "10.1021/jacs.5c01621",
    "tags": [
      1
    ],
    "role": "group",
    "metadata_keywords": [
      "anion exchange membrane water electrolysis",
      "perovskite oxides",
      "LaNiO3",
      "A-site and B-site doping",
      "electrical conductivity",
      "surface reconstruction",
      "cobalt active sites",
      "hydrogen production",
      "anode"
    ],
    "volume": "147",
    "pages": "15448-15458",
    "keywords": [
      "anion-exchange",
      "water-electrolysis",
      "stability",
      "materials-synthesis"
    ],
    "graphic": {
      "src": "assets/publications/expanded-2.webp",
      "kind": "toc",
      "width": 977,
      "height": 528,
      "source": "https://escholarship.org/content/qt0qs3m0qs/qt0qs3m0qs.pdf",
      "page": 28
    }
  },
  {
    "id": "dantona-2025",
    "year": 2025,
    "title": "Proton-Transfer Kinetics at Liquid–Liquid Interfaces",
    "authors": "N. D’Antona, J. Kelly, N. Barnard, S. Ardo, Y. Wang, Y. Surendranath, T. E. Markland, P. A. Kempler, S. W. Boettcher",
    "journal": "Journal of the American Chemical Society",
    "doi": "10.1021/jacs.4c18349",
    "tags": [
      2
    ],
    "role": "group",
    "metadata_keywords": [
      "proton transfer kinetics",
      "liquid-liquid interface",
      "immiscible electrolyte solutions",
      "interfacial energy"
    ],
    "volume": "147",
    "pages": "21408-21418",
    "keywords": [
      "ionomers-electrolytes",
      "ion-transfer",
      "modeling",
      "fundamentals-education"
    ],
    "graphic": {
      "src": "assets/publications/dantona-2025.webp",
      "kind": "toc",
      "width": 650,
      "height": 349,
      "source": "https://escholarship.org/content/qt1b97p9z7/qt1b97p9z7.pdf",
      "page": 32
    }
  },
  {
    "id": "openalex-W4416746429",
    "doi": "10.1039/d5ta08192k",
    "title": "Structure of iridium oxide catalysts dictates performance differences for proton exchange membrane water electrolyzers",
    "year": 2025,
    "authors": "Obeen Kwon, Masao Suzuki Shibata, Rebecca C. E. Hamlyn, Juhyun Oh, Jack Todd Lang, Cliffton Ray Wang, Shannon Wachter Boettcher, Carol L. Korzeniewski, Ethan J. Crumlin, Michael J. Zachman, Yu Morimoto, Iryna V. Zenyuk",
    "journal": "Journal of Materials Chemistry A",
    "role": "collaboration",
    "metadata_keywords": [
      "iridium oxide",
      "proton exchange membrane water electrolysis",
      "amorphous catalysts",
      "catalyst loading",
      "hydrogen evolution reaction",
      "oxygen evolution reaction"
    ],
    "tags": [],
    "volume": "14",
    "pages": "3342-3353",
    "keywords": [
      "water-electrolysis",
      "hydrogen-evolution",
      "oxygen-evolution"
    ],
    "graphic": {
      "src": "assets/publications/openalex-W4416746429.webp",
      "kind": "figure",
      "width": 1008,
      "height": 910,
      "source": "https://escholarship.org/content/qt7891b2vg/qt7891b2vg.pdf",
      "page": 5
    }
  },
  {
    "id": "basera-2025",
    "year": 2025,
    "title": "The Role of Cu³⁺ in the Oxygen Evolution Activity of Copper Oxides",
    "authors": "P. Basera, Y. Zhao, A. T. Garcia-Esparza, F. Babbe, N. Bothra, J. Vinson, D. Sokaras, J. Yano, S. W. Boettcher, M. Bajdich",
    "journal": "Journal of the American Chemical Society",
    "doi": "10.1021/jacs.4c18147",
    "tags": [
      5
    ],
    "role": "collaboration",
    "metadata_keywords": [
      "oxygen evolution reaction",
      "copper oxide",
      "copper hydroxide",
      "water oxidation catalysis",
      "iron doping",
      "active site",
      "in situ Raman spectroscopy",
      "alkaline solution"
    ],
    "volume": "147",
    "pages": "16070-16083",
    "keywords": [
      "oxygen-evolution",
      "stability",
      "metals-corrosion",
      "operando",
      "modeling",
      "materials-synthesis",
      "fundamentals-education"
    ],
    "graphic": {
      "src": "assets/publications/basera-2025.webp",
      "kind": "figure",
      "width": 970,
      "height": 565,
      "source": "https://escholarship.org/content/qt9xb1m8xs/qt9xb1m8xs.pdf",
      "page": 6
    }
  },
  {
    "id": "expanded-1",
    "year": 2025,
    "title": "Thrifting Iridium for Hydrogen",
    "authors": "A. D. Pendergast, S. W. Boettcher",
    "journal": "Science",
    "doi": "10.1126/science.adv4929",
    "tags": [],
    "role": "group",
    "metadata_keywords": [
      "iridium catalysts",
      "hydrogen production",
      "water electrolysis",
      "oxide supports",
      "catalyst anchoring",
      "electrocatalysis",
      "catalyst stability"
    ],
    "volume": "387",
    "pages": "718-719",
    "keywords": [
      "water-electrolysis",
      "stability"
    ],
    "graphic": {
      "src": "assets/publications/expanded-1.webp",
      "kind": "figure",
      "width": 984,
      "height": 498,
      "source": "https://escholarship.org/content/qt84j0533b/qt84j0533b.pdf",
      "page": 4
    }
  },
  {
    "id": "openalex-W4396546156",
    "doi": "10.1038/s41570-024-00587-1",
    "title": "A US perspective on closing the carbon cycle to defossilize difficult-to-electrify segments of our economy",
    "year": 2024,
    "authors": "Wendy J. Shaw, Michelle K. Kidder, Simon R. Bare, Massimiliano Delferro, James Robert Morris, Francesca Maria Toma, Sanjaya D. Senanayake, Tom S. Autrey, Elizabeth J. Biddinger, Shannon Wachter Boettcher, Mark Bowden, Phillip F. Britt, Robert C. Brown, R. Morris Bullock, Jingguang G. Chen, Claus Daniel, Peter K. Dorhout, Rebecca Ann Efroymson, Kelly J. Gaffney, Laura Gagliardi, Aaron S. Harper, David J. Heldebrant, Oana R. Luca, Maxim Lyubovsky, Jonathan L. Male, Daniel J. Miller, Tanya Prozorov, Robert Ralló, Rachita Rana, Robert M. Rioux, Aaron D. Sadow, Joshua A. Schaidle, Lisa A. Schulte Moore, William Abraham Tarpeh, Dionisios G. Vlachos, Bryan D. Vogt, Robert S. Weber, Jenny Y. Yang, Elke Arenholz, Brett A. Helms, Wenyu Huang, J.L. Jordahl, Canan Karakaya, Kourosh Kian, Jotheeswari Kothandaraman, Johannes A. Lercher, Ping Liu, Deepika Malhotra, Karl Todd Mueller, Casey P. O’Brien, Robert M. Palomino, Long Qi, José A. Rodríguez, Roger J. Rousseau, Jake C. Russell, Michele L. Sarazen, David S. Sholl, Emily A. Smith, Michaela Burke Stevens, Yogesh Surendranath, Christopher J. Tassone, Ba L. Tran, William Tumas, Krista S. Walton",
    "journal": "Nature Reviews Chemistry",
    "role": "collaboration",
    "metadata_keywords": [
      "defossilization",
      "circular economy",
      "carbon separation",
      "aviation",
      "heavy-duty transportation",
      "maritime transport",
      "chemical industry",
      "greenhouse gas emissions reduction",
      "net-zero emissions",
      "co-design"
    ],
    "tags": [],
    "volume": "8",
    "pages": "376-400",
    "keywords": [
      "carbon",
      "fundamentals-education"
    ],
    "graphic": {
      "src": "assets/publications/openalex-W4396546156.webp",
      "kind": "figure",
      "width": 730,
      "height": 861,
      "source": "https://escholarship.org/content/qt0kd1p37x/qt0kd1p37x.pdf?t=shl589",
      "page": 4
    }
  },
  {
    "id": "kaufman-2024",
    "year": 2024,
    "title": "Absolute Band-Edge Energies are over-Emphasized in the Design of Photoelectrochemical Materials",
    "authors": "A. J. Kaufman, A. C. Nielander, G. J. Meyer, S. Maldonado, S. Ardo, S. W. Boettcher",
    "journal": "Nature Catalysis",
    "doi": "10.1038/s41929-024-01161-0",
    "tags": [
      4
    ],
    "role": "group",
    "metadata_keywords": [
      "band edge potential",
      "photocatalysis",
      "charge transfer kinetics",
      "surface charge accumulation",
      "hydrogen evolution reaction",
      "water oxidation",
      "CO2 reduction"
    ],
    "volume": "7",
    "pages": "615-623",
    "keywords": [
      "hydrogen-evolution",
      "oxygen-evolution",
      "photoelectrochemistry",
      "semiconductor-interfaces",
      "carbon"
    ],
    "graphic": {
      "src": "assets/publications/kaufman-2024.webp",
      "kind": "figure",
      "width": 891,
      "height": 510,
      "source": "https://escholarship.org/content/qt42822028/qt42822028.pdf",
      "page": 14
    }
  },
  {
    "id": "openalex-W4400581749",
    "doi": "10.1557/s43581-024-00099-x",
    "title": "Achieving the hydrogen shot: Interrogating ionomer interfaces",
    "year": 2024,
    "authors": "Julie C. Fornaciari, Shannon Wachter Boettcher, Ethan J. Crumlin, Ahmet Kusoglu, David Prendergast, Daniela Mayumi Ushizima, Iryna V. Zenyuk, Adam Z. Weber",
    "journal": "MRS Energy & Sustainability",
    "role": "collaboration",
    "metadata_keywords": [
      "water electrolysis",
      "hydrogen production",
      "electric double layer",
      "solid electrolytes",
      "electrolyzer durability",
      "digital twin",
      "reaction mechanism",
      "hydrogen economy"
    ],
    "tags": [
      1
    ],
    "volume": "12",
    "pages": "14-22",
    "keywords": [
      "water-electrolysis",
      "ionomers-electrolytes",
      "stability"
    ],
    "graphic": {
      "src": "assets/publications/openalex-W4400581749.webp",
      "kind": "figure",
      "width": 770,
      "height": 645,
      "source": "https://escholarship.org/content/qt7z86054m/qt7z86054m.pdf?t=shfjyx",
      "page": 8
    }
  },
  {
    "id": "openalex-W4399299301",
    "doi": "10.1021/acsenergylett.4c00832",
    "title": "Addressing the Challenge of Electrochemical Ionomer Oxidation in Future Anion Exchange Membrane Water Electrolyzers",
    "year": 2024,
    "authors": "Jihoon Lim, Jeffrey Michael Klein, Seung Geol Lee, Eun Joo Park, Sun Young Kang, Sandip Maurya, William Earl Mustain, Shannon Wachter Boettcher, Yu Seung Kim",
    "journal": "ACS Energy Letters",
    "role": "collaboration",
    "metadata_keywords": [
      "anion exchange membrane water electrolyzer",
      "oxygen evolution reaction",
      "competitive adsorption",
      "platinum group metal-free catalysts",
      "alkaline water electrolysis",
      "hydrogen production",
      "catalyst interfaces"
    ],
    "tags": [
      1,
      5
    ],
    "volume": "9",
    "pages": "3074-3083",
    "keywords": [
      "anion-exchange",
      "water-electrolysis",
      "oxygen-evolution",
      "ionomers-electrolytes",
      "fundamentals-education"
    ],
    "graphic": {
      "src": "assets/publications/openalex-W4399299301.webp",
      "kind": "figure",
      "width": 984,
      "height": 962,
      "source": "https://escholarship.org/content/qt4gw331px/qt4gw331px.pdf?t=shl560",
      "page": 9
    }
  },
  {
    "id": "openalex-W4403465968",
    "doi": "10.1021/acsami.4c12213",
    "title": "Bipolar Membranes Via Divergent Synthesis: On the Interplay between Ion Exchange Capacity and Water Dissociation Catalysis",
    "year": 2024,
    "authors": "Yi-Lin Kao, Fabian Luca Buchauer, Dmytro Serhiichuk, Shannon Wachter Boettcher, David Aili",
    "journal": "ACS Applied Materials & Interfaces",
    "role": "collaboration",
    "metadata_keywords": [
      "bipolar membranes",
      "ion exchange capacity",
      "SEBS",
      "SnO2 catalyst",
      "graphene oxide",
      "titanium dioxide",
      "cation exchange layer",
      "water absorption",
      "ionic conductivity",
      "membrane contact",
      "divergent synthesis"
    ],
    "tags": [
      0
    ],
    "volume": "16",
    "pages": "58637-58647",
    "keywords": [
      "bipolar-membranes",
      "water-dissociation",
      "ionomers-electrolytes",
      "ion-transfer",
      "materials-synthesis"
    ]
  },
  {
    "id": "openalex-W4404199973",
    "doi": "10.1002/aenm.202404285",
    "title": "Bipolar Membranes With Controlled, Microscale 3D Junctions Enhance the Rates of Water Dissociation and Formation",
    "year": 2024,
    "authors": "Tianyue Gao, Leanna Schulte, Langqiu Xiao, Eisuke Yamamoto, Amy S. Metlay, Colton Sheehan, Sariah Marth, Heemin Park, Sayantan Sasmal, Francisco Javier Ubongen Galang, Chulsung Bae, Adam Z. Weber, Shannon Wachter Boettcher, Thomas E. Mallouk",
    "journal": "Advanced Energy Materials",
    "role": "collaboration",
    "metadata_keywords": [
      "bipolar membranes",
      "water dissociation",
      "water splitting",
      "soft lithography",
      "nanosphere lithography",
      "polydimethylsiloxane mold",
      "metal oxide catalysts",
      "H2/O2 fuel cells",
      "high aspect ratio structures"
    ],
    "tags": [
      0
    ],
    "volume": "15",
    "keywords": [
      "bipolar-membranes",
      "water-electrolysis",
      "water-dissociation",
      "ionomers-electrolytes",
      "materials-synthesis"
    ],
    "graphic": {
      "src": "assets/publications/openalex-W4404199973.webp",
      "kind": "figure",
      "width": 769,
      "height": 482,
      "source": "https://escholarship.org/content/qt6884c6r8/qt6884c6r8.pdf",
      "page": 4
    }
  },
  {
    "id": "openalex-W4399083335",
    "doi": "10.1021/acsenergylett.4c01178",
    "title": "Divergent Synthesis of Bipolar Membranes Combining Strong Interfacial Adhesion and High-Rate Capability",
    "year": 2024,
    "authors": "Yi-Lin Kao, Lihaokun Chen, Shannon Wachter Boettcher, David Aili",
    "journal": "ACS Energy Letters",
    "role": "collaboration",
    "metadata_keywords": [
      "bipolar membranes",
      "solid electrolytes",
      "TiO2 catalyst",
      "interfacial adhesion",
      "delamination",
      "electrochemical CO2 reduction",
      "electrodialysis",
      "rate capability"
    ],
    "tags": [
      0
    ],
    "volume": "9",
    "pages": "2953-2959",
    "keywords": [
      "bipolar-membranes",
      "anion-exchange",
      "water-electrolysis",
      "ionomers-electrolytes",
      "carbon",
      "separations",
      "materials-synthesis"
    ],
    "graphic": {
      "src": "assets/publications/openalex-W4399083335.webp",
      "kind": "figure",
      "width": 440,
      "height": 945,
      "source": "https://escholarship.org/content/qt5t32k007/qt5t32k007.pdf?t=shl54i",
      "page": 4
    }
  },
  {
    "id": "expanded-9",
    "year": 2024,
    "title": "Electrically Insulated Catalyst–Ionomer Anode Interfaces toward Durable Alkaline Membrane Electrolyzers",
    "authors": "M. Kwak, K. Ojha, M. Shen, S. W. Boettcher",
    "journal": "ACS Energy Letters",
    "doi": "10.1021/acsenergylett.3c02620",
    "tags": [
      1,
      5
    ],
    "role": "group",
    "metadata_keywords": [
      "anion exchange membrane water electrolysis",
      "oxygen evolution reaction",
      "anode durability",
      "ionomer degradation",
      "hafnium oxide",
      "hydrogen production",
      "hydroxide ion transport",
      "iridium oxide catalysts",
      "cobalt oxide catalysts"
    ],
    "volume": "9",
    "pages": "1025-1034",
    "keywords": [
      "anion-exchange",
      "water-electrolysis",
      "oxygen-evolution",
      "ionomers-electrolytes",
      "ion-transfer",
      "stability",
      "modeling",
      "materials-synthesis"
    ],
    "graphic": {
      "src": "assets/publications/expanded-9.webp",
      "kind": "figure",
      "width": 869,
      "height": 503,
      "source": "https://escholarship.org/content/qt2tt3892x/qt2tt3892x.pdf",
      "page": 6
    }
  },
  {
    "id": "openalex-W4390920697",
    "doi": "10.1039/d3ta06092f",
    "title": "Interfacial degradation of the NMC/Li 6 PS 5 Cl composite cathode in all-solid-state batteries",
    "year": 2024,
    "authors": "Xudong Hu, Zishuo Zhao, Yang Zhao, Xuelong Wang, Sami Sainio, Dennis L. Nordlund, Cristina Mariana Ruse, Xiao-Dong Zhou, Shannon Wachter Boettcher, Dong Hou, Qi‐Jun Hong, Linqin Mu",
    "journal": "Journal of Materials Chemistry A",
    "role": "collaboration",
    "metadata_keywords": [
      "interfacial degradation",
      "composite cathode",
      "NCM cathode",
      "Li6PS5Cl",
      "argyrodite solid electrolyte",
      "all-solid-state batteries",
      "high-voltage cathodes",
      "interfacial reaction"
    ],
    "tags": [],
    "volume": "12",
    "pages": "3700-3710",
    "keywords": [
      "ionomers-electrolytes",
      "stability",
      "energy-storage"
    ]
  },
  {
    "id": "expanded-6",
    "year": 2024,
    "title": "Introduction to Green Hydrogen",
    "authors": "S. W. Boettcher",
    "journal": "Chemical Reviews",
    "doi": "10.1021/acs.chemrev.4c00787",
    "tags": [],
    "role": "group",
    "metadata_keywords": [
      "green hydrogen",
      "water electrolysis",
      "renewable energy",
      "hydrogen production",
      "CO2 emissions",
      "life cycle emissions",
      "grey hydrogen",
      "blue hydrogen",
      "natural gas reforming",
      "CO2 capture"
    ],
    "volume": "124",
    "pages": "13095-13098",
    "keywords": [
      "water-electrolysis",
      "carbon",
      "separations",
      "fundamentals-education"
    ]
  },
  {
    "id": "expanded-5",
    "year": 2024,
    "title": "Local Electric Field Effects on Water Dissociation in Bipolar Membranes Studied Using Core–Shell Catalysts",
    "authors": "P. V. Sarma, B. V. Kramar, L. Chen, S. Sasmal, N. P. Weingartz, J. Huang, J. B. Mitchell, M. Kwak, L. X. Chen, S. W. Boettcher",
    "journal": "Chemistry of Materials",
    "doi": "10.1021/acs.chemmater.4c02190",
    "tags": [
      0
    ],
    "role": "group",
    "metadata_keywords": [
      "bipolar membranes",
      "water dissociation",
      "local electric field",
      "core-shell nanoparticles",
      "TiO2 catalyst",
      "electric field screening",
      "proton transfer",
      "interdiffusion",
      "electrocatalysis"
    ],
    "volume": "36",
    "pages": "11863-11872",
    "keywords": [
      "bipolar-membranes",
      "water-dissociation",
      "photoelectrochemistry",
      "ion-transfer",
      "operando",
      "modeling",
      "materials-synthesis"
    ],
    "graphic": {
      "src": "assets/publications/expanded-5.webp",
      "kind": "figure",
      "width": 984,
      "height": 555,
      "source": "https://escholarship.org/content/qt1vg1s36c/qt1vg1s36c.pdf",
      "page": 6
    }
  },
  {
    "id": "openalex-W4400208243",
    "doi": "10.1038/s41563-024-01943-8",
    "title": "Materials descriptors for advanced water dissociation catalysts in bipolar membranes",
    "year": 2024,
    "authors": "Sayantan Sasmal, Lihaokun Chen, Prasad V. Sarma, Olivia T. Vulpin, Casey R. Simons, Kacie M. Wells, Richard J. Spontak, Shannon Wachter Boettcher",
    "journal": "Nature Materials",
    "role": "group",
    "metadata_keywords": [
      "water dissociation",
      "bipolar membranes",
      "material descriptors",
      "electrical conductivity",
      "surface area",
      "SnO2 nanoparticles",
      "low-temperature synthesis",
      "earth-abundant catalysts",
      "proton exchange membranes",
      "Nafion",
      "electrodialysis",
      "fuel cells",
      "electrolysis"
    ],
    "tags": [
      0
    ],
    "volume": "23",
    "pages": "1421-1427",
    "keywords": [
      "bipolar-membranes",
      "water-dissociation",
      "separations",
      "materials-synthesis"
    ],
    "graphic": {
      "src": "assets/publications/openalex-W4400208243.webp",
      "kind": "figure",
      "width": 986,
      "height": 379,
      "source": "https://escholarship.org/content/qt0098g1hh/qt0098g1hh.pdf",
      "page": 4
    }
  },
  {
    "id": "openalex-W4390739002",
    "doi": "10.1038/s44286-023-00009-x",
    "title": "Multi-scale physics of bipolar membranes in electrochemical processes",
    "year": 2024,
    "authors": "Justin C. Bui, Eric W. Lees, Daniela H. Marin, Timothy Nathan Stovall, Lihaokun Chen, Ahmet Kusoglu, Adam C. Nielander, Thomas Francisco Jaramillo, Shannon Wachter Boettcher, Alexis T. Bell, Adam Z. Weber",
    "journal": "Nature Chemical Engineering",
    "role": "collaboration",
    "metadata_keywords": [
      "bipolar membranes",
      "bipolar membrane electrodialysis",
      "permselectivity",
      "ion transport",
      "structure-property-performance relationships",
      "membrane durability",
      "charged polymers",
      "energy storage and conversion",
      "environmental remediation",
      "pH control"
    ],
    "tags": [
      0
    ],
    "volume": "1",
    "pages": "45-60",
    "keywords": [
      "bipolar-membranes",
      "ionomers-electrolytes",
      "ion-transfer",
      "stability",
      "separations",
      "energy-storage",
      "materials-synthesis",
      "fundamentals-education"
    ],
    "graphic": {
      "src": "assets/publications/openalex-W4390739002.webp",
      "kind": "figure",
      "width": 974,
      "height": 836,
      "source": "https://escholarship.org/content/qt50n7g0rb/qt50n7g0rb.pdf",
      "page": 4
    }
  },
  {
    "id": "expanded-10",
    "year": 2024,
    "title": "Thermodynamic, Kinetic, and Transport Contributions to Hydrogen Evolution Activity and Electrolyte-Stability Windows for Water-in-Salt Electrolytes",
    "authors": "Y. Zhao, X. Hu, G. D. Stucky, S. W. Boettcher",
    "journal": "Journal of the American Chemical Society",
    "doi": "10.1021/jacs.3c12980",
    "tags": [],
    "role": "group",
    "metadata_keywords": [
      "water-in-salt electrolytes",
      "hydrogen evolution reaction",
      "LiTFSI",
      "electrolyte purity",
      "electrolyte impurities",
      "exchange current density",
      "proton activity",
      "electrochemical stability window",
      "aqueous batteries",
      "self-discharge",
      "electrochemical synthesis"
    ],
    "volume": "146",
    "pages": "3438-3448",
    "keywords": [
      "hydrogen-evolution",
      "ionomers-electrolytes",
      "stability",
      "energy-storage",
      "materials-synthesis",
      "fundamentals-education"
    ],
    "graphic": {
      "src": "assets/publications/expanded-10.webp",
      "kind": "toc",
      "width": 1400,
      "height": 754,
      "source": "https://escholarship.org/content/qt4p3409pp/qt4p3409pp.pdf",
      "page": 26
    }
  },
  {
    "id": "expanded-8",
    "year": 2024,
    "title": "Trace Fe Activates Perovskite Nickelate OER Catalysts in Alkaline Media via Redox-Active Surface Ni Species Formed during Electrocatalysis",
    "authors": "L. Twight, A. Tonsberg, S. Samira, K. Velinkar, K. Dumpert, Y. Ou, L. Wang, E. Nikolla, S. W. Boettcher",
    "journal": "Journal of Catalysis",
    "doi": "10.1016/j.jcat.2024.115443",
    "tags": [
      5
    ],
    "role": "group",
    "metadata_keywords": [
      "oxygen evolution reaction",
      "perovskite nickelates",
      "LaNiO3",
      "La2NiO4",
      "Ruddlesden-Popper phases",
      "surface reconstruction",
      "alkaline solution",
      "electrocatalytic activity",
      "epitaxial thin films"
    ],
    "volume": "432",
    "pages": "115443-115443",
    "keywords": [
      "oxygen-evolution",
      "stability",
      "materials-synthesis"
    ],
    "graphic": {
      "src": "assets/publications/expanded-8.webp",
      "kind": "figure",
      "width": 294,
      "height": 224,
      "source": "https://escholarship.org/content/qt9hn478zh/qt9hn478zh.pdf",
      "page": 5
    }
  },
  {
    "id": "kang-2024",
    "year": 2024,
    "title": "Understanding Ion-Transfer Reactions in Silver Electrodissolution and Electrodeposition from First-Principles Calculations and Experiments",
    "authors": "R. Kang, Y. Zhao, D. Hait, J. A. Gauthier, P. A. Kempler, K. A. Thurman, S. W. Boettcher, M. Head-Gordon",
    "journal": "Chemical Science",
    "doi": "10.1039/d3sc05791g",
    "tags": [
      2
    ],
    "role": "collaboration",
    "metadata_keywords": [
      "silver electrodeposition",
      "molecular models",
      "reaction rate",
      "first-principles calculations",
      "electrochemical kinetics"
    ],
    "volume": "15",
    "pages": "4996-5008",
    "keywords": [
      "ion-transfer",
      "stability",
      "metals-corrosion",
      "modeling"
    ],
    "graphic": {
      "src": "assets/publications/kang-2024.webp",
      "kind": "figure",
      "width": 949,
      "height": 599,
      "source": "https://escholarship.org/content/qt5r4413q4/qt5r4413q4.pdf",
      "page": 5
    }
  },
  {
    "id": "expanded-12",
    "year": 2023,
    "title": "Cooperative Fe Sites on Transition Metal (Oxy)Hydroxides Drive High Oxygen Evolution Activity in Base",
    "authors": "Y. Ou, L. P. Twight, B. Samanta, L. Liu, S. Biswas, J. L. Fehrs, N. A. Sagui, J. Villalobos, J. Morales-Santelices, D. Antipin, et al.",
    "journal": "Nature Communications",
    "doi": "10.1038/s41467-023-43305-z",
    "tags": [
      5
    ],
    "role": "group",
    "metadata_keywords": [
      "oxygen evolution reaction",
      "alkaline electrocatalysis",
      "turnover frequency",
      "anode potential",
      "potential cycling"
    ],
    "volume": "14",
    "pages": "7688-7688",
    "keywords": [
      "oxygen-evolution",
      "ionomers-electrolytes",
      "stability"
    ],
    "graphic": {
      "src": "assets/publications/expanded-12.webp",
      "kind": "figure",
      "width": 1076,
      "height": 507,
      "source": "https://escholarship.org/content/qt0tc4f883/qt0tc4f883.pdf",
      "page": 4
    }
  },
  {
    "id": "expanded-15",
    "year": 2023,
    "title": "Hydrogen Production with Seawater-Resilient Bipolar Membrane Electrolyzers",
    "authors": "D. H. Marin, J. T. Perryman, M. A. Hubert, G. A. Lindquist, L. Chen, A. M. Aleman, G. A. Kamat, V. A. Niemann, M. B. Stevens, Y. N. Regmi, S. W. Boettcher, A. C. Nielander, T. F. Jaramillo",
    "journal": "Joule",
    "doi": "10.1016/j.joule.2023.03.005",
    "tags": [
      0
    ],
    "role": "collaboration",
    "metadata_keywords": [
      "seawater electrolysis",
      "hydrogen production",
      "water-energy nexus",
      "ion transport",
      "side reaction suppression",
      "water contaminants"
    ],
    "volume": "7",
    "pages": "765-781",
    "keywords": [
      "bipolar-membranes",
      "water-electrolysis",
      "ion-transfer"
    ],
    "graphic": {
      "src": "assets/publications/expanded-15.webp",
      "kind": "figure",
      "width": 679,
      "height": 354,
      "source": "https://escholarship.org/content/qt3nt0c17c/qt3nt0c17c.pdf",
      "page": 5
    }
  },
  {
    "id": "expanded-14",
    "year": 2023,
    "title": "Kinetics and Mechanism of Heterogeneous Voltage-Driven Water-Dissociation Catalysis",
    "authors": "L. Chen, Q. Xu, S. W. Boettcher",
    "journal": "Joule",
    "doi": "10.1016/j.joule.2023.06.011",
    "tags": [
      0
    ],
    "role": "group",
    "metadata_keywords": [
      "water dissociation",
      "bipolar membranes",
      "electrocatalysis",
      "reaction kinetics",
      "activation energy",
      "overpotential",
      "titanium dioxide nanoparticles",
      "reference electrode",
      "proton transfer",
      "heavy water",
      "Arrhenius analysis",
      "water electrolysis"
    ],
    "volume": "7",
    "pages": "1867-1886",
    "keywords": [
      "bipolar-membranes",
      "water-electrolysis",
      "water-dissociation",
      "ion-transfer",
      "materials-synthesis"
    ],
    "graphic": {
      "src": "assets/publications/expanded-14.webp",
      "kind": "figure",
      "width": 874,
      "height": 422,
      "source": "https://escholarship.org/content/qt8zg036n2/qt8zg036n2.pdf",
      "page": 5
    }
  },
  {
    "id": "expanded-13",
    "year": 2023,
    "title": "Oxidative Instability of Ionomers in Hydroxide-Exchange-Membrane Water Electrolyzers",
    "authors": "G. A. Lindquist, J. C. Gaitor, W. L. Thompson, V. Brogden, K. J. T. Noonan, S. W. Boettcher",
    "journal": "Energy & Environmental Science",
    "doi": "10.1039/d3ee01293j",
    "tags": [
      1
    ],
    "role": "group",
    "metadata_keywords": [
      "oxidative degradation",
      "hydroxide exchange membranes",
      "water electrolyzer",
      "catalyst layer design"
    ],
    "volume": "16",
    "pages": "4373-4387",
    "keywords": [
      "anion-exchange",
      "water-electrolysis",
      "ionomers-electrolytes",
      "stability"
    ],
    "graphic": {
      "src": "assets/publications/expanded-13.webp",
      "kind": "figure",
      "width": 385,
      "height": 646,
      "source": "https://escholarship.org/content/qt6b65h6ps/qt6b65h6ps.pdf",
      "page": 5
    }
  },
  {
    "id": "expanded-17",
    "year": 2023,
    "title": "Oxygen Evolution Electrocatalysis in Acids: Atomic Tuning of the Stability Number for Submonolayer IrOx on Conductive Oxides from Molecular Precursors",
    "authors": "R. A. Krivina, M. Zlatar, T. N. Stovall, G. A. Lindquist, D. Escalera-López, A. K. Cook, J. E. Hutchison, S. Cherevko, S. W. Boettcher",
    "journal": "ACS Catalysis",
    "doi": "10.1021/acscatal.2c04439",
    "tags": [
      5
    ],
    "role": "group",
    "metadata_keywords": [
      "oxygen evolution reaction",
      "iridium oxide electrocatalysts",
      "SnO2",
      "atomic layer deposition",
      "catalyst-support interaction",
      "catalyst dissolution",
      "catalyst stability",
      "acid stability",
      "proton exchange membrane water electrolysis",
      "annealing"
    ],
    "volume": "13",
    "pages": "902-915",
    "keywords": [
      "water-electrolysis",
      "oxygen-evolution",
      "photoelectrochemistry",
      "stability",
      "operando",
      "materials-synthesis"
    ],
    "graphic": {
      "src": "assets/publications/expanded-17.webp",
      "kind": "toc",
      "width": 646,
      "height": 434,
      "source": "https://escholarship.org/content/qt545499md/qt545499md.pdf",
      "page": 36
    }
  },
  {
    "id": "expanded-11",
    "year": 2023,
    "title": "Protocol for Assembling and Operating Bipolar Membrane Water Electrolyzers",
    "authors": "I. Rios Amador, R. T. Hannagan, D. H. Marin, J. T. Perryman, C. Rémy, M. A. Hubert, G. A. Lindquist, L. Chen, M. B. Stevens, S. W. Boettcher, et al.",
    "journal": "STAR Protocols",
    "doi": "10.1016/j.xpro.2023.102606",
    "tags": [
      0
    ],
    "role": "collaboration",
    "metadata_keywords": [
      "hydrogen production",
      "seawater electrolysis",
      "membrane electrode assembly",
      "electrochemical analysis",
      "renewable energy",
      "deionized water"
    ],
    "volume": "4",
    "pages": "102606-102606",
    "keywords": [
      "bipolar-membranes",
      "water-electrolysis"
    ],
    "graphic": {
      "src": "assets/publications/expanded-11.webp",
      "kind": "figure",
      "width": 802,
      "height": 368,
      "source": "https://escholarship.org/content/qt3bc3w281/qt3bc3w281.pdf",
      "page": 5
    }
  },
  {
    "id": "openalex-W4382465302",
    "doi": "10.1149/2.f05232if",
    "title": "Reports From The Frontier: Overcoming Limitations for Pure-water Anion-exchange-membrane Electrolysis",
    "year": 2023,
    "authors": "Grace A. Lindquist, Shannon Wachter Boettcher",
    "journal": "The Electrochemical Society Interface",
    "role": "group",
    "metadata_keywords": [
      "anion exchange membrane water electrolysis",
      "green hydrogen production",
      "alkaline oxygen evolution reaction",
      "oxygen evolution catalysts",
      "catalyst layer design",
      "membrane electrode assembly",
      "phase separation",
      "catalyst stability",
      "water electrolysis"
    ],
    "tags": [
      1,
      5
    ],
    "volume": "32",
    "pages": "32-36",
    "keywords": [
      "anion-exchange",
      "water-electrolysis",
      "oxygen-evolution",
      "ionomers-electrolytes",
      "stability",
      "fundamentals-education"
    ],
    "graphic": {
      "src": "assets/publications/openalex-W4382465302.webp",
      "kind": "figure",
      "width": 259,
      "height": 253,
      "source": "https://escholarship.org/content/qt6vq0f4f1/qt6vq0f4f1.pdf?t=shl68h",
      "page": 3
    }
  },
  {
    "id": "openalex-W4282838394",
    "doi": "10.1088/2515-7655/ac7823",
    "title": "2022 roadmap on low temperature electrochemical CO 2 reduction",
    "year": 2022,
    "authors": "Ifan E. L. Stephens, Karen Chan, Alexander Bagger, Shannon Wachter Boettcher, Julien Bonin, Etienne Boutin, Aya K. Buckley, Raffaella Buonsanti, Etosha R. Cave, Xiaoxia Chang, See Wee Chee, Alisson H. M. da Silva, Phil De Luna, Oliver Einsle, Balázs Endrődi, María Escudero‐Escribano, Jorge V Ferreira de Araujo, Marta Costa Figueiredo, Christopher Hahn, Kentaro Uzuka Hansen, Sophia Haussener, Sara Hunegnaw, Ziyang Huo, Yun Jeong Hwang, Csaba Janáky, Buddhinie Srimali Jayathilake, Feng Jiao, Zarko P. Jovanov, Parisa Karimi, Marc T. M. Koper, Kendra P. Kuhl, Woong Hee Lee, Zhiqin Liang, Xuan Liu, Sichao Ma, Ming Ma, Hyung‐Suk Oh, Marc Robert, Beatriz Roldán Cuenya, Jan Rossmeisl, Claudie Roy, Mary P. Ryan, Edward Hartley Sargent, Paula Sebastián Pascual, Brian Joseph Seger, Ludmilla Steier, Peter Strasser, Ana Sofía Varela, Rafaël E. Vos, Xue Wang, Bingjun Xu, Hossein Yadegari, Yuxiang Zhou",
    "journal": "Journal of Physics Energy",
    "role": "collaboration",
    "metadata_keywords": [
      "electrochemical CO2 reduction",
      "CO2 reduction catalysts",
      "renewable electricity storage",
      "CO2 conversion selectivity",
      "catalyst stability",
      "energy efficiency",
      "operando characterization",
      "benchmarking standards",
      "scale-up",
      "carbon cycle"
    ],
    "tags": [],
    "volume": "4",
    "pages": "042003-042003",
    "keywords": [
      "stability",
      "carbon",
      "separations",
      "operando",
      "fundamentals-education"
    ],
    "graphic": {
      "src": "assets/publications/openalex-W4282838394.webp",
      "kind": "figure",
      "width": 361,
      "height": 494,
      "source": "http://publicatio.bibl.u-szeged.hu/25952/1/Stephens_2022_J._Phys._Energy_4_042003.pdf",
      "page": 8
    }
  },
  {
    "id": "expanded-20",
    "year": 2022,
    "title": "Anode Catalysts in Anion-Exchange-Membrane Electrolysis Without Supporting Electrolyte Conductivity, Dynamics, and Ionomer Degradation",
    "authors": "R. A. Krivina, G. A. Lindquist, S. R. Beaudoin, T. N. Stovall, W. L. Thompson, L. P. Twight, D. Marsh, J. Grzyb, K. Fabrizio, J. E. Hutchison, S. W. Boettcher",
    "journal": "Advanced Materials",
    "doi": "10.1002/adma.202203033",
    "tags": [
      1
    ],
    "role": "group",
    "metadata_keywords": [
      "anion exchange membrane water electrolysis",
      "anode catalysts",
      "non-platinum group metal catalysts",
      "oxygen evolution reaction",
      "catalyst deactivation",
      "ionomer degradation",
      "iron impurities",
      "cobalt oxide nanoparticles",
      "iridium oxide",
      "catalyst restructuring",
      "hydrogen production",
      "catalyst stability"
    ],
    "volume": "34",
    "pages": "e2203033-e2203033",
    "keywords": [
      "anion-exchange",
      "water-electrolysis",
      "oxygen-evolution",
      "ionomers-electrolytes",
      "stability",
      "materials-synthesis",
      "fundamentals-education"
    ],
    "graphic": {
      "src": "assets/publications/expanded-20.webp",
      "kind": "figure",
      "width": 909,
      "height": 746,
      "source": "https://escholarship.org/content/qt7w20j8z6/qt7w20j8z6.pdf",
      "page": 8
    }
  },
  {
    "id": "openalex-W4283388179",
    "doi": "10.1038/s41467-022-31295-3",
    "title": "Bipolar membrane electrolyzers enable high single-pass CO2 electroreduction to multicarbon products",
    "year": 2022,
    "authors": "Ke Xie, Rui Kai Miao, Adnan Ozden, Shijie Liu, Zhu Chen, Cao‐Thang Dinh, Jianan Erick Huang, Qiucheng Xu, Christine M. Gabardo, Geonhui Lee, Jonathan P. Edwards, Colin P. O’Brien, Shannon Wachter Boettcher, David A. Sinton, Edward Hartley Sargent",
    "journal": "Nature Communications",
    "role": "collaboration",
    "metadata_keywords": [
      "electrochemical CO2 reduction",
      "multi-carbon products",
      "alkaline electrolyzer"
    ],
    "tags": [
      0
    ],
    "volume": "13",
    "pages": "3609-3609",
    "keywords": [
      "bipolar-membranes",
      "carbon",
      "operando",
      "modeling"
    ],
    "graphic": {
      "src": "assets/publications/openalex-W4283388179.webp",
      "kind": "figure",
      "width": 348,
      "height": 264,
      "source": "https://www.nature.com/articles/s41467-022-31295-3.pdf?error=cookies_not_supported&code=600a2497-6d72-4f36-a4d8-c077863a52fe",
      "page": 3
    }
  },
  {
    "id": "expanded-18",
    "year": 2022,
    "title": "Catalytic Proton–Hydroxide Recombination for Forward-Bias Bipolar Membranes",
    "authors": "J. B. Mitchell, L. Chen, K. Langworthy, K. Fabrizio, S. W. Boettcher",
    "journal": "ACS Energy Letters",
    "doi": "10.1021/acsenergylett.2c02043",
    "tags": [
      0
    ],
    "role": "group",
    "metadata_keywords": [
      "bipolar membranes",
      "forward bias",
      "catalytic recombination",
      "metal oxide nanoparticles",
      "surface reaction mechanism",
      "rate equations",
      "redox flow batteries",
      "CO2 electrolysis",
      "fuel cells"
    ],
    "volume": "7",
    "pages": "3967-3973",
    "keywords": [
      "bipolar-membranes",
      "water-dissociation",
      "carbon",
      "energy-storage",
      "modeling",
      "materials-synthesis"
    ],
    "graphic": {
      "src": "assets/publications/expanded-18.webp",
      "kind": "toc",
      "width": 774,
      "height": 404,
      "source": "https://escholarship.org/content/qt9jj5687n/qt9jj5687n.pdf",
      "page": 22
    }
  },
  {
    "id": "expanded-23",
    "year": 2022,
    "title": "Controlling Catalyst–Semiconductor Contacts: Interfacial Charge Separation in p-InP Photocathodes",
    "authors": "A. J. Kaufman, R. A. Krivina, M. Shen, S. W. Boettcher",
    "journal": "ACS Energy Letters",
    "doi": "10.1021/acsenergylett.1c02590",
    "tags": [
      4
    ],
    "role": "group",
    "metadata_keywords": [
      "platinum nanoparticles",
      "hydrogen evolution reaction",
      "hydrogen alloying",
      "interfacial charge separation",
      "water splitting",
      "photoanodes"
    ],
    "volume": "7",
    "pages": "541-549",
    "keywords": [
      "water-electrolysis",
      "hydrogen-evolution",
      "photoelectrochemistry",
      "semiconductor-interfaces",
      "materials-synthesis"
    ],
    "graphic": {
      "src": "assets/publications/expanded-23.webp",
      "kind": "toc",
      "width": 629,
      "height": 409,
      "source": "https://escholarship.org/content/qt7mq656t5/qt7mq656t5.pdf",
      "page": 20
    }
  },
  {
    "id": "expanded-19",
    "year": 2022,
    "title": "Design Principles for Water Dissociation Catalysts in High-Performance Bipolar Membranes",
    "authors": "L. Chen, Q. Xu, S. Z. Oener, K. Fabrizio, S. W. Boettcher",
    "journal": "Nature Communications",
    "doi": "10.1038/s41467-022-31429-7",
    "tags": [
      0
    ],
    "role": "group",
    "metadata_keywords": [
      "water dissociation",
      "bipolar membranes",
      "water electrolysis",
      "anatase TiO2",
      "metal oxide nanoparticles",
      "electronic conductivity",
      "interfacial electric field",
      "electrochemical gradient",
      "membrane electrolyzer",
      "low cell voltage",
      "electrodialysis",
      "CO2 capture",
      "carbon utilization"
    ],
    "volume": "13",
    "pages": "3846-3846",
    "keywords": [
      "bipolar-membranes",
      "water-electrolysis",
      "water-dissociation",
      "carbon",
      "separations",
      "materials-synthesis"
    ],
    "graphic": {
      "src": "assets/publications/expanded-19.webp",
      "kind": "figure",
      "width": 331,
      "height": 518,
      "source": "https://escholarship.org/content/qt5gx1t80b/qt5gx1t80b.pdf",
      "page": 3
    }
  },
  {
    "id": "openalex-W4213126643",
    "doi": "10.1016/j.checat.2022.02.001",
    "title": "Hydrogen-evolution-reaction kinetics pH dependence: Is it covered?",
    "year": 2022,
    "authors": "James B. Mitchell, Meikun Shen, Liam Peter Twight, Shannon Wachter Boettcher",
    "journal": "Chem Catalysis",
    "role": "group",
    "metadata_keywords": [
      "hydrogen evolution reaction",
      "reaction kinetics",
      "pH dependence",
      "platinum electrode",
      "gold electrode",
      "electrocatalysis"
    ],
    "tags": [],
    "volume": "2",
    "pages": "236-238",
    "keywords": [
      "hydrogen-evolution"
    ],
    "graphic": {
      "src": "assets/publications/openalex-W4213126643.webp",
      "kind": "figure",
      "width": 525,
      "height": 322,
      "source": "https://escholarship.org/content/qt0kf4t31h/qt0kf4t31h.pdf",
      "page": 3
    }
  },
  {
    "id": "openalex-W4205951242",
    "doi": "10.1039/9781839163708-00135",
    "title": "Metal Oxide Co-catalyst Nanolayers on Photoelectrodes",
    "year": 2022,
    "authors": "Jingjing Qiu, Michael R. Nellist, Shannon Wachter Boettcher",
    "journal": "Royal Society of Chemistry eBooks",
    "role": "group",
    "metadata_keywords": [
      "photoelectrochemical water oxidation",
      "photoanodes",
      "interfacial charge transfer",
      "reaction kinetics",
      "interfacial properties"
    ],
    "tags": [
      4
    ],
    "pages": "135-166",
    "keywords": [
      "oxygen-evolution",
      "photoelectrochemistry",
      "semiconductor-interfaces",
      "operando"
    ]
  },
  {
    "id": "expanded-16",
    "year": 2022,
    "title": "Nanoscale Measurements of Charge Transfer at Cocatalyst/Semiconductor Interfaces in BiVO₄ Particle Photocatalysts",
    "authors": "M. Shen, A. J. Kaufman, J. Huang, C. Price, S. W. Boettcher",
    "journal": "Nano Letters",
    "doi": "10.1021/acs.nanolett.2c03592",
    "tags": [
      1,
      5
    ],
    "role": "group",
    "metadata_keywords": [
      "BiVO4 photocatalyst",
      "charge transfer",
      "hydrogen evolution reaction",
      "oxygen evolution reaction",
      "surface charge",
      "ionomer thin films",
      "conducting atomic force microscopy",
      "solar fuel production"
    ],
    "volume": "22",
    "pages": "9493-9499",
    "keywords": [
      "hydrogen-evolution",
      "oxygen-evolution",
      "photoelectrochemistry",
      "semiconductor-interfaces",
      "ionomers-electrolytes",
      "operando",
      "materials-synthesis"
    ],
    "graphic": {
      "src": "assets/publications/expanded-16.webp",
      "kind": "figure",
      "width": 804,
      "height": 695,
      "source": "https://escholarship.org/content/qt4tj8m7qh/qt4tj8m7qh.pdf",
      "page": 5
    }
  },
  {
    "id": "expanded-21",
    "year": 2022,
    "title": "Purification of Residual Ni and Co Hydroxides from Fe-Free Alkaline Electrolyte for Electrocatalysis Studies",
    "authors": "L. Liu, L. P. Twight, J. L. Fehrs, Y. Ou, D. Sun, S. W. Boettcher",
    "journal": "ChemElectroChem",
    "doi": "10.1002/celc.202200279",
    "tags": [
      5
    ],
    "role": "group",
    "metadata_keywords": [
      "oxygen evolution reaction",
      "nickel hydroxide",
      "cobalt hydroxide",
      "electrolyte purification",
      "continuous electrolysis",
      "KOH electrolyte",
      "electrocatalysis"
    ],
    "volume": "9",
    "keywords": [
      "oxygen-evolution",
      "ionomers-electrolytes"
    ],
    "graphic": {
      "src": "assets/publications/expanded-21.webp",
      "kind": "figure",
      "width": 268,
      "height": 242,
      "source": "https://escholarship.org/content/qt49k4z4c1/qt49k4z4c1.pdf",
      "page": 6
    }
  },
  {
    "id": "openalex-W4292770358",
    "doi": "10.3389/fenrg.2022.908672",
    "title": "Standard operating procedure for post-operation component disassembly and observation of benchtop water electrolyzer testing",
    "year": 2022,
    "authors": "Jennifer R. Glenn, Grace A. Lindquist, George M. Roberts, Shannon Wachter Boettcher, Katherine E. Ayers",
    "journal": "Frontiers in Energy Research",
    "role": "collaboration",
    "metadata_keywords": [
      "water electrolyzer",
      "component inspection",
      "electrochemical environment",
      "standard operating procedures",
      "hydrogen production"
    ],
    "tags": [],
    "volume": "10",
    "keywords": [
      "water-electrolysis"
    ],
    "graphic": {
      "src": "assets/publications/openalex-W4292770358.webp",
      "kind": "figure",
      "width": 699,
      "height": 484,
      "source": "https://www.frontiersin.org/journals/energy-research/articles/10.3389/fenrg.2022.908672/pdf",
      "page": 3
    }
  },
  {
    "id": "openalex-W4280582406",
    "doi": "10.1088/1361-6463/ac6f97",
    "title": "The 2022 solar fuels roadmap",
    "year": 2022,
    "authors": "Gideon Segev, Jakob Kibsgaard, Christopher Hahn, Zhichuan Jason Xu, Wen-Hui Sophia Cheng, Todd Gregory Deutsch, Chengxiang Xiang, Jenny Zhang, Leif Hammarström, Daniel G. Nocera, Adam Z. Weber, Peter Agbo, Takashi Hisatomi, Frank E. Osterloh, Kazunari Domen, Fatwa F. Abdi, Sophia Haussener, Daniel J. Miller, Shane Ardo, Paul C. McIntyre, Thomas Hannappel, Shu Hu, Harry A. Atwater, John M. Gregoire, Mehmed Z. Ertem, Ian D. Sharp, Kyoung‐Shin Choi, Jae Sung Lee, Osamu Ishitani, Joel W. Ager, Rajiv Ramanujam Prabhakar, Alexis T. Bell, Shannon Wachter Boettcher, Kylie A. Vincent, Kazuhiro Takanabe, Vincent Artero, R.W. Napier, Beatriz Roldán Cuenya, Marc T. M. Koper, Roel van de Krol, Frances A. Houle",
    "journal": "Journal of Physics D Applied Physics",
    "role": "collaboration",
    "metadata_keywords": [
      "solar fuels",
      "photoelectrochemical cells",
      "solar hydrogen production",
      "CO2 reduction",
      "photoelectrodes",
      "device scaling",
      "conversion efficiency",
      "stability",
      "product selectivity",
      "materials discovery",
      "catalysis",
      "low-carbon economy"
    ],
    "tags": [
      4
    ],
    "volume": "55",
    "pages": "323003-323003",
    "keywords": [
      "photoelectrochemistry",
      "stability",
      "carbon",
      "fundamentals-education"
    ],
    "graphic": {
      "src": "assets/publications/openalex-W4280582406.webp",
      "kind": "figure",
      "width": 541,
      "height": 540,
      "source": "https://escholarship.org/content/qt6m69r1v4/qt6m69r1v4.pdf",
      "page": 7
    }
  },
  {
    "id": "expanded-22",
    "year": 2022,
    "title": "Three-Electrode Study of Electrochemical Ionomer Degradation Relevant to Anion-Exchange-Membrane Water Electrolyzers",
    "authors": "R. A. Krivina, G. A. Lindquist, M. C. Yang, A. K. Cook, C. H. Hendon, A. R. Motz, C. Capuano, K. E. Ayers, J. E. Hutchison, S. W. Boettcher",
    "journal": "ACS Applied Materials & Interfaces",
    "doi": "10.1021/acsami.1c22472",
    "tags": [
      1,
      5
    ],
    "role": "group",
    "metadata_keywords": [
      "anion exchange membrane water electrolyzer",
      "ionomer degradation",
      "oxygen evolution reaction",
      "supporting electrolyte",
      "pH tolerance",
      "redox potential",
      "non-platinum group metal catalysts",
      "membrane durability"
    ],
    "volume": "14",
    "pages": "18261-18274",
    "keywords": [
      "anion-exchange",
      "water-electrolysis",
      "oxygen-evolution",
      "ionomers-electrolytes",
      "stability"
    ],
    "graphic": {
      "src": "assets/publications/expanded-22.webp",
      "kind": "toc",
      "width": 594,
      "height": 353,
      "source": "https://escholarship.org/content/qt8vt5j6tf/qt8vt5j6tf.pdf",
      "page": 32
    }
  },
  {
    "id": "openalex-W4205770865",
    "doi": "10.1039/d1fd00109d",
    "title": "Understanding methanol dissociative adsorption and oxidation on amorphous oxide films",
    "year": 2022,
    "authors": "Sri Krishna Murthy Padavala, Kateryna Artyushkova, Shannon Wachter Boettcher, Slavomír Nemšák, Kelsey A. Stoerzinger",
    "journal": "Faraday Discussions",
    "role": "collaboration",
    "metadata_keywords": [
      "methanol oxidation",
      "amorphous oxide films",
      "iron oxide catalysts",
      "manganese oxide catalysts",
      "carbonate formation",
      "oxygen vacancies",
      "dehydroxylation",
      "dimethyl ether",
      "metal-support interaction",
      "active site",
      "partial oxidation",
      "carbon dioxide"
    ],
    "tags": [],
    "volume": "236",
    "pages": "58-70",
    "keywords": [
      "carbon",
      "organic-oxidation"
    ],
    "graphic": {
      "src": "assets/publications/openalex-W4205770865.webp",
      "kind": "figure",
      "width": 967,
      "height": 626,
      "source": "https://www.osti.gov/servlets/purl/2281360",
      "page": 7
    }
  },
  {
    "id": "openalex-W4200385999",
    "doi": "10.1149/1945-7111/ac40ca",
    "title": "Electrochemistry-Induced Restructuring of Tin-Doped Indium Oxide Nanocrystal Films of Relevance to CO 2 Reduction",
    "year": 2021,
    "authors": "Tawney A. Knecht, Shannon Wachter Boettcher, James Evan Hutchison",
    "journal": "Journal of The Electrochemical Society",
    "role": "collaboration",
    "metadata_keywords": [
      "CO2 reduction",
      "electrocatalysts",
      "indium tin oxide",
      "nanocrystal films",
      "morphological evolution",
      "sintering",
      "formate"
    ],
    "tags": [],
    "volume": "168",
    "pages": "126521-126521",
    "keywords": [
      "carbon",
      "materials-synthesis"
    ],
    "graphic": {
      "src": "assets/publications/openalex-W4200385999.webp",
      "kind": "figure",
      "width": 471,
      "height": 884,
      "source": "https://www.osti.gov/servlets/purl/1980864",
      "page": 26
    }
  },
  {
    "id": "expanded-29",
    "year": 2021,
    "title": "Heterogeneous Electrocatalysis Goes Chemical",
    "authors": "S. W. Boettcher, Y. Surendranath",
    "journal": "Nature Catalysis",
    "doi": "10.1038/s41929-020-00570-1",
    "tags": [],
    "role": "collaboration",
    "keywords": [
      "fundamentals-education"
    ],
    "graphic": {
      "src": "assets/publications/expanded-29.webp",
      "kind": "figure",
      "width": 312,
      "height": 193,
      "source": "https://media.springernature.com/m312/springer-static/image/art%3A10.1038%2Fs41929-020-00570-1/MediaObjects/41929_2020_570_Fig1_HTML.png",
      "page": 1
    }
  },
  {
    "id": "expanded-26",
    "year": 2021,
    "title": "Integrated Reference Electrodes in Anion-Exchange-Membrane Electrolyzers: Impact of Stainless-Steel Gas-Diffusion Layers and Internal Mechanical Pressure",
    "authors": "Q. Xu, S. Z. Oener, G. Lindquist, H. Jiang, C. Li, S. W. Boettcher",
    "journal": "ACS Energy Letters",
    "doi": "10.1021/acsenergylett.0c02338",
    "tags": [
      1
    ],
    "role": "group",
    "metadata_keywords": [
      "reference electrode",
      "anion exchange membrane water electrolyzer",
      "alkaline water electrolysis",
      "membrane electrode assembly",
      "hydrogen production",
      "polarimetry",
      "impedance measurement",
      "structure-activity relationship",
      "GDL thickness"
    ],
    "volume": "6",
    "pages": "305-312",
    "keywords": [
      "anion-exchange",
      "water-electrolysis",
      "stability"
    ],
    "graphic": {
      "src": "assets/publications/expanded-26.webp",
      "kind": "figure",
      "width": 899,
      "height": 358,
      "source": "https://escholarship.org/content/qt8gh3v0tx/qt8gh3v0tx.pdf",
      "page": 5
    }
  },
  {
    "id": "expanded-27",
    "year": 2021,
    "title": "Oxygen Electrocatalysis on Mixed-Metal Oxides/Oxyhydroxides: From Fundamentals to Membrane Electrolyzer Technology",
    "authors": "R. A. Krivina, Y. Ou, Q. Xu, L. P. Twight, T. N. Stovall, S. W. Boettcher",
    "journal": "Accounts of Materials Research",
    "doi": "10.1021/accountsmr.1c00087",
    "tags": [
      1,
      5
    ],
    "role": "group",
    "metadata_keywords": [
      "oxygen evolution reaction",
      "mixed metal oxides",
      "iron doping",
      "active site",
      "catalyst stability",
      "anion exchange membrane water electrolyzer",
      "hydrogen production",
      "catalyst layer thickness",
      "electrical conductivity",
      "earth-abundant catalysts",
      "photoelectrolysis"
    ],
    "volume": "2",
    "pages": "548-558",
    "keywords": [
      "anion-exchange",
      "water-electrolysis",
      "oxygen-evolution",
      "photoelectrochemistry",
      "ionomers-electrolytes",
      "stability",
      "energy-storage",
      "modeling",
      "materials-synthesis",
      "fundamentals-education"
    ],
    "graphic": {
      "src": "assets/publications/expanded-27.webp",
      "kind": "toc",
      "width": 925,
      "height": 738,
      "source": "https://escholarship.org/content/qt9250g9h0/qt9250g9h0.pdf",
      "page": 33
    }
  },
  {
    "id": "expanded-24",
    "year": 2021,
    "title": "Performance and Durability of Pure-Water-Fed Anion Exchange Membrane Electrolyzers Using Baseline Materials and Operation",
    "authors": "G. A. Lindquist, S. Z. Oener, R. Krivina, A. R. Motz, A. Keane, C. Capuano, K. E. Ayers, S. W. Boettcher",
    "journal": "ACS Applied Materials & Interfaces",
    "doi": "10.1021/acsami.1c06053",
    "tags": [
      1,
      5
    ],
    "role": "group",
    "metadata_keywords": [
      "anion exchange membrane water electrolyzer",
      "water electrolysis",
      "green hydrogen production",
      "electrolyzer durability",
      "membrane degradation",
      "non-noble metal catalysts",
      "oxygen evolution reaction",
      "hydrogen evolution reaction",
      "gas diffusion layer",
      "ionomers"
    ],
    "volume": "13",
    "pages": "51917-51924",
    "keywords": [
      "anion-exchange",
      "water-electrolysis",
      "hydrogen-evolution",
      "oxygen-evolution",
      "ionomers-electrolytes",
      "stability",
      "fundamentals-education"
    ],
    "graphic": {
      "src": "assets/publications/expanded-24.webp",
      "kind": "toc",
      "width": 619,
      "height": 478,
      "source": "https://escholarship.org/content/qt4jd1j5cr/qt4jd1j5cr.pdf",
      "page": 25
    }
  },
  {
    "id": "expanded-30",
    "year": 2021,
    "title": "Potentially Confusing: Potentials in Electrochemistry",
    "authors": "S. W. Boettcher, S. Z. Oener, M. C. Lonergan, Y. Surendranath, S. Ardo, C. Brozek, P. A. Kempler",
    "journal": "ACS Energy Letters",
    "doi": "10.1021/acsenergylett.0c02443",
    "tags": [],
    "role": "collaboration",
    "metadata_keywords": [
      "electrochemical potential",
      "electrode potential",
      "electrochemical potential difference",
      "electrochemical gradient"
    ],
    "volume": "6",
    "pages": "261-266",
    "keywords": [
      "fundamentals-education"
    ],
    "graphic": {
      "src": "assets/publications/expanded-30.webp",
      "kind": "figure",
      "width": 849,
      "height": 361,
      "source": "https://escholarship.org/content/qt2571t424/qt2571t424.pdf",
      "page": 4
    }
  },
  {
    "id": "expanded-28",
    "year": 2021,
    "title": "Reinvigorating Electrochemistry Education",
    "authors": "P. A. Kempler, S. W. Boettcher, S. Ardo",
    "journal": "iScience",
    "doi": "10.1016/j.isci.2021.102481",
    "tags": [],
    "role": "collaboration",
    "metadata_keywords": [
      "electrochemistry education",
      "interdisciplinary teaching",
      "energy storage",
      "energy conversion",
      "open source software",
      "low-cost electronics",
      "clean energy technologies",
      "science education reform"
    ],
    "volume": "24",
    "pages": "102481-102481",
    "keywords": [
      "energy-storage",
      "materials-synthesis",
      "fundamentals-education"
    ],
    "graphic": {
      "src": "assets/publications/expanded-28.webp",
      "kind": "figure",
      "width": 527,
      "height": 400,
      "source": "https://escholarship.org/content/qt7gg5c8tt/qt7gg5c8tt.pdf",
      "page": 5
    }
  },
  {
    "id": "expanded-25",
    "year": 2021,
    "title": "What Structural Features Make Porous Carbons Work for Redox-Enhanced Electrochemical Capacitors? A Fundamental Investigation",
    "authors": "Y. Zhao, E. E. Taylor, X. Hu, B. Evanko, X. Zeng, H. Wang, R. Ohnishi, T. Tsukazaki, J.-F. Li, N. P. Stadie, S. J. Yoo, G. D. Stucky, S. W. Boettcher",
    "journal": "ACS Energy Letters",
    "doi": "10.1021/acsenergylett.0c02424",
    "tags": [],
    "role": "group",
    "metadata_keywords": [
      "porous carbon electrodes",
      "hierarchical porous structure",
      "micropores",
      "mesopores",
      "iodide",
      "specific energy density",
      "pore volume",
      "self-discharge",
      "ion-selective membranes"
    ],
    "volume": "6",
    "pages": "854-861",
    "keywords": [
      "ionomers-electrolytes",
      "separations",
      "energy-storage",
      "modeling",
      "fundamentals-education"
    ],
    "graphic": {
      "src": "assets/publications/expanded-25.webp",
      "kind": "figure",
      "width": 528,
      "height": 403,
      "source": "https://escholarship.org/content/qt7qh33065/qt7qh33065.pdf",
      "page": 6
    }
  },
  {
    "id": "oener-2020",
    "year": 2020,
    "title": "Accelerating water dissociation in bipolar membranes and for electrocatalysis",
    "authors": "S. Z. Oener, M. J. Foster, S. W. Boettcher",
    "journal": "Science",
    "doi": "10.1126/science.aaz1487",
    "tags": [
      0,
      5
    ],
    "role": "group",
    "metadata_keywords": [
      "bipolar membranes",
      "water dissociation",
      "electrocatalysis",
      "hydrogen evolution reaction",
      "oxygen evolution reaction",
      "water splitting",
      "overpotential",
      "membrane electrolyzer"
    ],
    "volume": "369",
    "pages": "1099-1103",
    "keywords": [
      "bipolar-membranes",
      "water-electrolysis",
      "water-dissociation",
      "hydrogen-evolution",
      "oxygen-evolution"
    ],
    "graphic": {
      "src": "assets/publications/oener-2020.webp",
      "kind": "figure",
      "width": 975,
      "height": 1046,
      "source": "https://escholarship.org/content/qt367576fr/qt367576fr.pdf",
      "page": 11
    }
  },
  {
    "id": "openalex-W3108609492",
    "doi": "10.1021/acs.nanolett.0c03950",
    "title": "Fluorination-enabled Reconstruction of NiFe Electrocatalysts for Efficient Water Oxidation",
    "year": 2020,
    "authors": "Qiucheng Xu, Hao Jiang, Xuezhi Duan, Zheng Jiang, Yanjie Hu, Shannon Wachter Boettcher, Weiyu Zhang, Shaojun Guo, Chunzhong Li",
    "journal": "Nano Letters",
    "role": "collaboration",
    "metadata_keywords": [
      "NiFe electrocatalyst",
      "oxygen evolution reaction",
      "fluorination",
      "electrochemical reconstruction",
      "nanosheets",
      "alkaline water electrolysis",
      "wettability",
      "gas bubble release",
      "operando Raman spectroscopy"
    ],
    "tags": [
      5
    ],
    "volume": "21",
    "pages": "492-499",
    "keywords": [
      "water-electrolysis",
      "oxygen-evolution",
      "stability",
      "carbon",
      "operando"
    ]
  },
  {
    "id": "expanded-32",
    "year": 2020,
    "title": "Membrane Electrolyzers for Impure Water Splitting",
    "authors": "G. A. Lindquist, Q. Xu, S. Z. Oener, S. W. Boettcher",
    "journal": "Joule",
    "doi": "10.1016/j.joule.2020.09.020",
    "tags": [],
    "role": "group",
    "metadata_keywords": [
      "membrane electrolyzer",
      "anion exchange membrane water electrolyzer",
      "proton exchange membrane electrolyzer",
      "hydrogen production",
      "high-purity hydrogen",
      "technical challenges"
    ],
    "volume": "4",
    "pages": "2549-2561",
    "keywords": [
      "anion-exchange",
      "water-electrolysis"
    ],
    "graphic": {
      "src": "assets/publications/expanded-32.webp",
      "kind": "toc",
      "width": 657,
      "height": 634,
      "source": "https://escholarship.org/content/qt3rh1g8h2/qt3rh1g8h2.pdf",
      "page": 2
    }
  },
  {
    "id": "openalex-W3089327704",
    "doi": "10.1021/acs.chemmater.0c03225",
    "title": "Sculpting Optical Properties of Thin Film IR Filters through Nanocrystal Synthesis and Additive, Solution Processing",
    "year": 2020,
    "authors": "Raina A. Krivina, Tawney A. Knecht, Brandon M. Crockett, Shannon Wachter Boettcher, James Evan Hutchison",
    "journal": "Chemistry of Materials",
    "role": "collaboration",
    "metadata_keywords": [
      "localized surface plasmon resonance",
      "solution-processed thin films",
      "spin coating",
      "mid-infrared optics",
      "near-infrared optics"
    ],
    "tags": [],
    "volume": "32",
    "pages": "8683-8693",
    "keywords": [
      "materials-synthesis"
    ]
  },
  {
    "id": "expanded-31",
    "year": 2020,
    "title": "Thin Cation-Exchange Layers Enable High-Current-Density Bipolar-Membrane Electrolyzers via Improved Water Transport",
    "authors": "S. Z. Oener, L. P. Twight, G. A. Lindquist, S. W. Boettcher",
    "journal": "ACS Energy Letters",
    "doi": "10.1021/acsenergylett.0c02078",
    "tags": [
      0,
      1
    ],
    "role": "group",
    "metadata_keywords": [
      "bipolar membranes",
      "water dissociation",
      "cation exchange layer",
      "water transport",
      "membrane electrolyzer",
      "high current density",
      "Nafion",
      "titanium dioxide",
      "nickel oxide",
      "alkaline water electrolysis",
      "acidic electrolysis",
      "pH gradient",
      "durability",
      "CO2 electrolysis",
      "regenerative fuel cells"
    ],
    "volume": "6",
    "pages": "1-8",
    "keywords": [
      "bipolar-membranes",
      "water-electrolysis",
      "water-dissociation",
      "ionomers-electrolytes",
      "stability",
      "carbon"
    ],
    "graphic": {
      "src": "assets/publications/expanded-31.webp",
      "kind": "toc",
      "width": 975,
      "height": 398,
      "source": "https://escholarship.org/content/qt35c2m0g2/qt35c2m0g2.pdf",
      "page": 18
    }
  },
  {
    "id": "expanded-35",
    "year": 2019,
    "title": "Earth-Abundant Oxygen Electrocatalysts for Alkaline Anion-Exchange-Membrane Water Electrolysis",
    "authors": "D. Xu, M. B. Stevens, M. R. Cosby, S. Z. Oener, A. M. Smith, L. J. Enman, K. E. Ayers, C. B. Capuano, J. N. Renner, N. Danilovic, Y. Li, H. Wang, Q. Zhang, S. W. Boettcher",
    "journal": "ACS Catalysis",
    "doi": "10.1021/acscatal.8b04001",
    "tags": [
      1
    ],
    "role": "group",
    "keywords": [
      "anion-exchange",
      "water-electrolysis"
    ]
  },
  {
    "id": "expanded-34",
    "year": 2019,
    "title": "Metal Oxide/(Oxy)Hydroxide Overlayers as Hole Collectors and Oxygen Evolution Catalysts on Water Splitting Photoanodes",
    "authors": "F. A. L. Laskowski, M. R. Nellist, J. Qiu, S. W. Boettcher",
    "journal": "Journal of the American Chemical Society",
    "doi": "10.1021/jacs.8b09449",
    "tags": [
      4,
      5
    ],
    "role": "group",
    "keywords": [
      "water-electrolysis",
      "oxygen-evolution",
      "photoelectrochemistry"
    ]
  },
  {
    "id": "expanded-33",
    "year": 2019,
    "title": "Nanoscale Catalyst/Semiconductor Interfaces in Photoelectrochemistry",
    "authors": "F. A. L. Laskowski, S. Z. Oener, M. R. Nellist, A. M. Gordon, D. C. Bain, J. L. Fehrs, S. W. Boettcher",
    "journal": "Nature Materials",
    "doi": "10.1038/s41563-019-0488-z",
    "tags": [
      4
    ],
    "role": "group",
    "keywords": [
      "photoelectrochemistry",
      "semiconductor-interfaces"
    ]
  },
  {
    "id": "expanded-37",
    "year": 2018,
    "title": "Operando X-Ray Absorption Spectroscopy Shows Iron Oxidation Is Concurrent with Oxygen Evolution in Cobalt–Iron (Oxy)hydroxide Electrocatalysts",
    "authors": "L. J. Enman, M. B. Stevens, M. H. Dahan, M. R. Nellist, M. C. Toroker, S. W. Boettcher",
    "journal": "Angewandte Chemie International Edition",
    "doi": "10.1002/anie.201808818",
    "tags": [
      5
    ],
    "role": "group",
    "keywords": [
      "oxygen-evolution",
      "operando"
    ]
  },
  {
    "id": "expanded-36",
    "year": 2018,
    "title": "Potential-Sensing Electrochemical AFM Shows CoPi as a Hole Collector and Oxygen Evolution Catalyst on BiVO₄ Water-Splitting Photoanodes",
    "authors": "M. R. Nellist, J. Qiu, F. A. L. Laskowski, F. M. Toma, S. W. Boettcher",
    "journal": "ACS Energy Letters",
    "doi": "10.1021/acsenergylett.8b01150",
    "tags": [
      4,
      5
    ],
    "role": "group",
    "keywords": [
      "water-electrolysis",
      "oxygen-evolution",
      "photoelectrochemistry"
    ]
  }
];

  const NEWS = [
    {type:'RESEARCH SPOTLIGHT',date:'2026',title:'What really drives water dissociation in bipolar membranes?',summary:'A new JACS publication examines the mechanisms at the heart of high-performance bipolar membrane systems.',doi:'10.1021/jacs.6c05146',paper:'wu-2026'},
    {type:'PUBLICATION',date:'2026',title:'Local pH control for water-fed electrolyzers',summary:'Research published in Energy & Environmental Science addresses bipolar-membrane operation with impure water.',doi:'10.1039/D6EE02476A',paper:'han-2026'},
    {type:'GROUP MILESTONE',date:'2025',title:'Durable pure-water electrolyzers in Science',summary:'A group publication highlights interphase engineering in anion-exchange membrane electrolysis.',doi:'10.1126/science.adw7100',paper:'hou-2025'},
    {type:'EDUCATION',date:'2026 PROGRAM',title:'Summer Electrochemistry Academy at Berkeley',summary:'CESET offers hands-on summer electrochemistry courses spanning fundamentals and advanced electrochemical technologies.',url:'#/outreach'}
  ];
  // Roster imported from the official team page, with owner-supplied additions. Image provenance: docs/team-photo-sources.json.
  const TEAM = [
  {
    "name": "Anthony Ekennia",
    "role": "Postdoctoral Scholar",
    "category": "Postdoctoral Scholars",
    "image": "assets/team/anthony-ekennia.webp",
    "imageWidth": 300,
    "imageHeight": 304,
    "bio": "<div><div>\n\n\n<p>Anthony graduated with a Ph.D. in Inorganic Chemistry at the University of Ibadan, Nigeria. At UC Berkeley, he is a postdoctoral scholar focused on developing catalysts/membranes for electrocatalytic water splitting and photovoltaic cells.</p>\n<p>email: <a href=\"mailto:aekennia@berkeley.edu\">aekennia@berkeley.edu</a></p>\n\n</div></div>"
  },
  {
    "name": "Arunavo Chakraborty",
    "role": "Postdoctoral Scholar",
    "category": "Postdoctoral Scholars",
    "image": "assets/team/arunavo-chakraborty.webp",
    "imageWidth": 300,
    "imageHeight": 268,
    "bio": "<p>Arun received his PhD from UC Santa Barbara working with Lior Sepunaru. At UC Berkeley, he will launch a new project targeting the development of intermediate temperature electrochemical platforms for decarbonization and fuel synthesis.</p>\n<p>email: <a href=\"mailto:achakraborty2@berkeley.edu\">achakraborty2@berkeley.edu</a> — <a href=\"https://www.linkedin.com/in/arunavo-chakraborty/\" target=\"_blank\" rel=\"noopener noreferrer\">linkedin</a></p>"
  },
  {
    "name": "Yang Zhao - 赵洋",
    "role": "Postdoctoral Scholar · LBNL",
    "category": "Postdoctoral Scholars",
    "image": "assets/team/yang-zhao.webp",
    "imageWidth": 300,
    "imageHeight": 298,
    "bio": "<p>Yang received her Ph.D. in Chemistry from the University of Oregon in May 2024 and is a graduate of the Boettcher group. Starting in August 2024, she continues her work in the Boettcher lab as a postdoctoral researcher at Lawrence Berkeley National Laboratory. During her Ph.D., she focused on fundamentally investigating the kinetics of ion transfer processes and surface-modified Cu catalysts for CO<sub>2</sub> reduction reactions, funded by the Liquid Sunlight Alliance (LiSA). </p>\n<p>email: <a href=\"mailto:yangzhao0105@berkeley.edu\">yangzhao0105@berkeley.edu</a> — <a href=\"https://www.linkedin.com/in/yang-zhao-83447a229/%20\" target=\"_blank\" rel=\"noopener noreferrer\">linkedin</a><br></p>"
  },
  {
    "name": "Jin Wook Yang",
    "role": "Postdoctoral Scholar",
    "category": "Postdoctoral Scholars",
    "image": "assets/team/jin-wook-yang.webp",
    "imageWidth": 300,
    "imageHeight": 281,
    "bio": "<p>Jin Wook received his Ph.D. from the Department of Materials Science and Engineering at Seoul National University, where he worked on the materials synthesis and designing (photo)electrocatalysts for energy conversion devices with Prof. Ho Won Jang. At UC Berkeley, his postdoctoral research will focus on artificial photosynthesis integrating biomass upgrading and green fuel production.</p>\n<p>email: <a href=\"mailto:jwyang@berkeley.edu\">jwyang@berkeley.edu</a></p>"
  },
  {
    "name": "Gwan Hyun Choi",
    "role": "Postdoctoral Scholar",
    "category": "Postdoctoral Scholars",
    "image": "assets/team/gwan-hyun-choi.webp",
    "imageWidth": 300,
    "imageHeight": 314,
    "bio": "<p>Gwan Hyun received his Ph.D. in Chemical Engineering from Sungkyunkwan University (SKKU) under Prof. Pil J. Yoo and later developed water electrolyzers as a postdoctoral associate at the Korea Institute of Science and Technology (KIST) with Dr. Albert S. Lee. At UC Berkeley, his postdoctoral research will explore interfacial (electro)chemistry in bipolar membranes and an ammonia production system for sustainable energy conversion toward carbon neutrality.</p>\n<p>email: <a href=\"mailto:gwanhchoi@berkeley.edu\">gwanhchoi@berkeley.edu</a></p>"
  },
  {
    "name": "Wenbo Zhang",
    "role": "Postdoctoral Scholar",
    "category": "Postdoctoral Scholars",
    "image": "assets/team/wenbo-zhang.webp",
    "imageWidth": 300,
    "imageHeight": 302,
    "bio": "<p>Wenbo Zhang received his Ph.D. in Materials Science and Engineering at Stanford University. There, he studied the mechanisms of Li metal anode corrosion and recovery in batteries under the guidance of Professor Yi Cui. At Berkeley, he is developing operando platforms to characterize interfacial phenomena and material degradation in electrochemical systems.</p>\n<p>email: <a href=\"mailto:wen_zhang@berkeley.edu\">wen_zhang@berkeley.edu</a></p>"
  },
  {
    "name": "Dawei Xi",
    "role": "Postdoctoral Scholar",
    "category": "Postdoctoral Scholars",
    "image": "assets/team/dawei-xi.webp",
    "imageWidth": 300,
    "imageHeight": 284,
    "bio": "<p>Dawei graduated with a Ph.D. in Materials Science and Mechanical Engineering from Harvard University, where he worked on flow chemistry and electrochemical engineering with Prof. Michael J. Aziz. He earned his M.S. and B.S. degree in Chemistry from University of Science and Technology of China (USTC), where he worked on electrocatalysis with Prof. Yujie Xiong. At UC Berkeley, he is a postdoctoral scholar focusing on developing membrane mechanisms, and their applications in intermediate temperature and high pressure electrochemistry.</p>\n<p>email: <a href=\"mailto:daweixi@berkeley.edu\">daweixi@berkeley.edu</a> — <a href=\"https://www.linkedin.com/in/dawei-xi-517a87229/\" target=\"_blank\" rel=\"noopener noreferrer\">linkedin</a></p>"
  },
  {
    "name": "Chulhee Lim",
    "role": "Postdoctoral Scholar",
    "category": "Postdoctoral Scholars",
    "image": "assets/team/chulhee-lim.webp",
    "imageWidth": 300,
    "imageHeight": 303,
    "bio": "<p>Chulhee Lim received his Ph.D. from the Department of Chemical and Biomolecular Engineering at Korea Advanced Institute of Science and Technology, where he worked on the development of the conjugated polymers and oligomers for stretchable electronics with Prof. Bumjoon J. Kim. At UC Berkeley, his postdoctoral research will focus on designing ion-exchange polymers for bipolar membrane systems.</p>\n<p>email: <a href=\"mailto:dr.ironman@berkeley.edu\">dr.ironman@berkeley.edu</a></p>"
  },
  {
    "name": "Jaerim Kim",
    "role": "Postdoctoral Scholar",
    "category": "Postdoctoral Scholars",
    "image": "assets/team/jaerim-kim.webp",
    "imageWidth": 300,
    "imageHeight": 300,
    "bio": "<p>Jaerim Kim received her Ph.D. in Materials Science and Engineering from Pohang University of Science and Technology (POSTECH) working with Prof. Jong Kyu Kim. She subsequently developed water electrolyzers as a postdoctoral scholar in the Department of Chemistry at Northwestern University in the group of Prof. Edward H. Sargent. At UC Berkeley, her postdoctoral research will explore interfacial (electro)chemistry in bipolar membrane systems and anion exchange membrane water electrolyzers.</p>\n<p>email: <a href=\"mailto:jrkim@berkeley.edu\">jrkim@berkeley.edu</a> — <a href=\"https://www.linkedin.com/in/jaerim-kim-56abb1279/?locale=ko\" target=\"_blank\" rel=\"noopener noreferrer\">linkedin</a></p>"
  },
  {
    "name": "Jun Ho Lee",
    "role": "Postdoctoral Scholar",
    "category": "Postdoctoral Scholars",
    "image": "assets/team/jun-ho-lee.webp",
    "imageWidth": 300,
    "imageHeight": 301,
    "bio": "<p>Jun Ho received his Ph.D. in Materials Science and Engineering from Stanford University under the supervision of Prof. Yi Cui, where his research focused on material-property-driven strategies to improve the cyclability of lithium metal anodes. At UC Berkeley and LBNL, he will investigate degradation mechanisms at battery material interfaces using advanced in situ and operando characterization techniques.</p>\n<p>email: <a href=\"mailto:jhl1221@berkeley.edu\">jhl1221@berkeley.edu</a> — <a href=\"https://linkedin.com/in/jun-ho-lee-a76191205\" target=\"_blank\" rel=\"noopener noreferrer\">linkedin</a></p>"
  },
  {
    "name": "Hyun Woo Lim",
    "role": "Postdoctoral Scholar",
    "category": "Postdoctoral Scholars",
    "image": "assets/team/hyun-woo-lim.webp",
    "imageWidth": 300,
    "imageHeight": 288,
    "bio": "<p>Hyun Woo received his Ph.D. from the Department of Materials Science and Engineering at Seoul National University, where he worked on core-shell electrocatalysts with Prof. Jin Young Kim. At UC Berkeley, his research will focus on applying these catalysts to anion exchange membrane and bipolar membrane water electrolysis, with an emphasis on interfacial engineering.</p>\n<p>email: <a href=\"mailto:wisefriend@berkeley.edu\">wisefriend@berkeley.edu</a></p>"
  },
  {
    "name": "Chihyung Lee",
    "role": "Postdoctoral Scholar",
    "category": "Postdoctoral Scholars",
    "image": "assets/team/chihyung-lee.webp",
    "imageWidth": 300,
    "imageHeight": 298,
    "bio": "<p>Chihyung Lee received his Ph.D. in Chemistry from Sungkyunkwan University under the supervision of Prof. Doo-Hyun Ko, where his research focused on thermodynamics and morphology in multicomponent organic semiconductor systems. His work aims to understand how molecular interactions and phase behavior govern nanoscale morphology and functional properties. At UC Berkeley, he is extending these concepts to ionomer and membrane systems for electrochemical energy applications, exploring how thermodynamic conditions and interfacial environments influence morphology and ion transport.</p>\n<p>email: <a href=\"mailto:chihyung@berkeley.edu\">chihyung@berkeley.edu</a> — <a href=\"https://linkedin.com/in/%EC%9D%B4%EC%B9%98%ED%98%95-%ED%99%94%ED%95%99%EA%B3%BC-b50b45346\" target=\"_blank\" rel=\"noopener noreferrer\">linkedin</a></p>"
  },
  {
    "name": "Nick D'Antona",
    "role": "Graduate Student",
    "category": "Graduate Students",
    "image": "assets/team/nick-d-antona.webp",
    "imageWidth": 300,
    "imageHeight": 345,
    "bio": "<p>Nick graduated from St. Mary’s College of Maryland with degrees in chemistry and applied physics. In the Boettcher lab he is studying the kinetics and mechanism of ion transfer at the interface between two immiscible electrolyte solutions (ITIES), primarily using nanopipette voltammetry.</p>\n<p>email: <a href=\"mailto:ndantona@berkeley.edu\">ndantona@berkeley.edu</a></p>"
  },
  {
    "name": "Kam Yun \"Kelvin\" Li",
    "role": "Graduate Student",
    "category": "Graduate Students",
    "image": "assets/team/kam-yun-kelvin-li.webp",
    "imageWidth": 300,
    "imageHeight": 264,
    "bio": "<p>Kelvin is a PhD student working jointly with Gregory Su at LBNL Advanced Light Source (ALS) and the Boettcher group in studying ionomer nanocomposites and their structure-propriety relationships. He is currently working on morphological impacts of incorporating metal-oxide nanoparticles in perfluorinated sulfonic acid ionomers.</p>\n<p>email: <a href=\"mailto:kelvinkyli@lbl.gov\">kelvinkyli@lbl.gov</a> — <a href=\"https://www.linkedin.com/in/kam-yun-li-6195a5153/\" target=\"_blank\" rel=\"noopener noreferrer\">linkedin</a></p>"
  },
  {
    "name": "Nicole Sagui",
    "role": "Graduate Student",
    "category": "Graduate Students",
    "image": "assets/team/nicole-sagui.webp",
    "imageWidth": 300,
    "imageHeight": 261,
    "bio": "<p>Nicole grew up in northern Italy, where she received a BS in Chemistry from the University of Milano-Bicocca. Before moving to Oregon, she lived in Sweden for a couple of years and completed the Chemistry for Renewable Energy MS program at Uppsala University. She joined the Boettcher lab in summer 2022 and will be studying fundamentals of water oxidation catalysis and applications in anion exchange membrane electrolyzers.</p>\n<p>email: <a href=\"mailto:nsagui@berkeley.edu\">nsagui@berkeley.edu</a></p>"
  },
  {
    "name": "Francisco \"Kiko\" Galang",
    "role": "Graduate Student · Collaborator",
    "category": "Graduate Students",
    "image": "assets/team/francisco-kiko-galang.webp",
    "imageWidth": 300,
    "imageHeight": 263,
    "bio": "<p>Kiko is a PhD Candidate with Prof. Alexis T. Bell at UC Berkeley and Dr. Adam Z. Weber at LBNL and collaborates regularly with the Boettcher Lab. He received his B.S. in Chemical Engineering from UCLA in 2022. He works on the study of, theory development, and computational modelling of electrochemical systems in particular Bipolar Membranes for electrochemical devices. As a modeller, he collaborates with the experimentalists of the Boettcher Lab.</p>\n<p>email: <a href=\"mailto:kgalang@berkeley.edu\">kgalang@berkeley.edu</a></p>"
  },
  {
    "name": "Dwaipayan Roychowdhury",
    "role": "Graduate Student · University of Oregon",
    "category": "Graduate Students",
    "image": "assets/team/dwaipayan-roychowdhury.webp",
    "imageWidth": 300,
    "imageHeight": 285,
    "bio": "<p><em>Currently at the University of Oregon. </em>Roy earned his master&#39;s from the University of Kalyani, India, then researched on formic acid oxidation on Pt at IISc Bangalore&#39;s Ranjan Lab. In summer 2023, he joined the Boettcher Group, where he studies ion intercalation kinetics at solid-electrolyte interfaces.</p>\n<p>He is a LFC supporter and is considerate towards people who call football “soccer”.</p>\n<p>email: <a href=\"mailto:droychow@uoregon.edu\">droychow@uoregon.edu</a></p>"
  },
  {
    "name": "Raj Shekhar",
    "role": "Graduate Student · University of Oregon",
    "category": "Graduate Students",
    "image": "assets/team/raj-shekhar.webp",
    "imageWidth": 300,
    "imageHeight": 300,
    "bio": "<p><em>Currently at the University of Oregon.</em> Raj is a PhD student studying the fundamentals of the electro-reduction of iron from its ores in collaboration with the <a href=\"https://kempler.uoregon.edu/\" target=\"_blank\" rel=\"noopener noreferrer\">Kempler group</a>. He joined the Boettcher Lab in January 2023 after completing his MS from Paris-Saclay University in 2022. Previously, he graduated from NIT Rourkela with an integrated master’s in chemistry in 2021.</p>\n<p>email: <a href=\"mailto:rajs@uoregon.edu\">rajs@uoregon.edu</a> — <a href=\"https://www.linkedin.com/in/raj-shekhar-149b1a134/\" target=\"_blank\" rel=\"noopener noreferrer\">linkedin</a><br></p>"
  },
  {
    "name": "Nathan Stovall",
    "role": "Graduate Student · Collaborator",
    "category": "Graduate Students",
    "image": "assets/team/nathan-stovall.webp",
    "imageWidth": 300,
    "imageHeight": 300,
    "bio": "<p>Nathan graduated from the University of Oregon with a degree in chemistry in 2022. He is now a PhD student with Dr. Adam Weber at UC Berkeley and Lawrence Berkeley National Lab. In collaboration with the Boettcher group, Nathan studies charge transfer reactions at polarized interfaces in bipolar membranes and other electrochemical interfaces.</p>\n<p>email: <a href=\"mailto:nstovall@berkeley.edu\">nstovall@berkeley.edu</a></p>"
  },
  {
    "name": "Louka Moutarlier",
    "role": "Graduate Student · University of Oregon",
    "category": "Graduate Students",
    "image": "assets/team/louka-moutarlier.webp",
    "imageWidth": 220,
    "imageHeight": 200,
    "bio": "<p><em>Currently at the University of Oregon.</em> Louka graduated from the University of Oregon in 2019 with a B.Sc. in Biochemistry, before working as a high school Chemistry/Physics teacher for two years. In 2022, Louka earned an M.A. in Chemistry with an emphasis in Chemical Education from the University of California, Santa Barbara. He then returned to UO to join the Electrochemistry Masters Internship Program (class of 2023) where he interned with EnZinc studying advanced anodes for secondary zinc batteries. As a Ph.D. student he is researching metal oxide/metal conversion reactions in alkaline zinc anodes for grid-scale energy storage in collaboration with the <a href=\"https://kempler.uoregon.edu/\" target=\"_blank\" rel=\"noopener noreferrer\">Kempler group</a> and <a href=\"https://enzinc.com/\" target=\"_blank\" rel=\"noopener noreferrer\">EnZinc</a>.</p>\n<p>email: <a href=\"mailto:loukam@uoregon.edu\">loukam@uoregon.edu</a> — <a href=\"https://www.linkedin.com/in/louka-moutarlier-88a669239/\" target=\"_blank\" rel=\"noopener noreferrer\">linkedin</a></p>"
  },
  {
    "name": "Catherine Wallace",
    "role": "Graduate Student",
    "category": "Graduate Students",
    "image": "assets/team/catherine-wallace.webp",
    "imageWidth": 300,
    "imageHeight": 299,
    "bio": "<p>Catherine is a PhD student studying fundamental ion transfer kinetics and mechanisms at the interfacial layer, with a current focus on copper corrosion.  They completed their chemistry and mathematics B.S. degrees at Syracuse University where they conducted research with Timothy Korter. They are a proud cat mom to Tin (right) and Plutonium (left)!</p>\n<p>email: <a href=\"mailto:cswallace@berkeley.edu\">cswallace@berkeley.edu</a></p>"
  },
  {
    "name": "Yifan Wu - 吴一凡",
    "role": "Graduate Student",
    "category": "Graduate Students",
    "image": "assets/team/yifan-wu.webp",
    "imageWidth": 300,
    "imageHeight": 324,
    "bio": "<p>Yifan received his B.S. in Chemistry at Wuhan University. In the Boettcher group, he studies the catalysts for water dissociation in bipolar membranes. Currently, he is excited about learning different characterization techniques. He is a crazy fictional map creator. Please reach out if you want to discuss map art with him! </p>\n<p>email: <a href=\"mailto:yifan-wu@berkeley.edu\">yifan-wu@berkeley.edu</a> — <a href=\"https://www.linkedin.com/in/yifan-ivan-wu-542982226/\" target=\"_blank\" rel=\"noopener noreferrer\">linkedin</a></p>"
  },
  {
    "name": "Madelaine Dolich",
    "role": "Graduate Student",
    "category": "Graduate Students",
    "image": "assets/team/madelaine-dolich.webp",
    "imageWidth": 300,
    "imageHeight": 275,
    "bio": "<div>Madelaine graduated with a B.A. in Chemistry from Barnard College in 2024. She started her PhD at UC Berkeley later that year, and is co-advised with Dr. Andrew Haddad at LBL in collaboration with the Boettcher group to study ion separation in molten salt electrolytes. </div>\n<div>\n<p><br>email: <a href=\"mailto:mdolich@berkeley.edu\">mdolich@berkeley.edu</a></p>\n\n</div>"
  },
  {
    "name": "Yiwen Sun",
    "role": "Graduate Student",
    "category": "Graduate Students",
    "image": "assets/team/yiwen-sun.webp",
    "imageWidth": 300,
    "imageHeight": 299,
    "bio": "<p>Yiwen graduated with a B.S. in Chemical Engineering from the University of Rochester in 2024. Her research is centered on promoting green technology. Currently, in the Boettcher Lab, she is focused on enhancing the durability of anion exchange membranes (AEMs) and exploring the fundamental aspects of ionomers in electrolyzers.</p>\n<p>email: <a href=\"mailto:yiwen_sun74@berkeley.edu\">yiwen_sun74@berkeley.edu</a></p>"
  },
  {
    "name": "Meg Takezawa",
    "role": "Graduate Student",
    "category": "Graduate Students",
    "image": "assets/team/meg-takezawa.webp",
    "imageWidth": 300,
    "imageHeight": 300,
    "bio": "<p>Meg received a BS in Chemistry from the University of Washington, Seattle. In the Boettcher group, she is engineering a high-throughput electrochemical setup to enable clean, reproducible capacitance measurements and benchmark differential capacitance behaviors of samples under various experimental conditions.</p>\n<p>email: <a href=\"mailto:meg_takezawa@berkeley.edu\">meg_takezawa@berkeley.edu</a> — <a href=\"https://www.linkedin.com/in/meg-takezawa-15b3261b4/\" target=\"_blank\" rel=\"noopener noreferrer\">linkedin</a></p>"
  },
  {
    "name": "Jihan Zhang",
    "role": "Graduate Student",
    "category": "Graduate Students",
    "image": "assets/team/jihan-zhang.webp",
    "imageWidth": 300,
    "imageHeight": 280,
    "bio": "<p>Jihan received his BS in Chemistry from Peking University, where he worked on heterogeneous catalysis for hydrogen production with Prof. Ding Ma and Prof. Wulin Yang. He also spent a summer at Johns Hopkins, working with Prof. Yayuan Liu, focusing on electrochemical metal recovery and direct air CO2 capture. In Berkeley, he will keep working on catalysis and related characterization.</p>\n<p>email: <a href=\"mailto:jihan_zhang@berkeley.edu\">jihan_zhang@berkeley.edu</a></p>"
  },
  {
    "name": "Richik Haldar",
    "role": "Graduate Student",
    "category": "Graduate Students",
    "image": "assets/team/richik-haldar.webp",
    "imageWidth": 300,
    "imageHeight": 293,
    "bio": "<p>Richik received his BS in Chemical Engineering from UCLA in 2025, where he worked on liquid electrolyte development and machine learning-based fast charging for lithium and zinc batteries. In his day job in the Boettcher group, he is investigating ion transport across ion-exchange membranes to engineer advanced bipolar membrane electrodialysis for electrochemical applications. Outside the lab, he&#39;s the guitarist/vocalist frontman for a multilingual Berkeley-based pop-rock band (please reach out if interested!) He also enjoys cooking and learning languages.</p>\n<p>email: <a href=\"mailto:richikhaldar25@berkeley.edu\">richikhaldar25@berkeley.edu</a> — <a href=\"https://www.linkedin.com/in/richik-haldar-653654220/\" target=\"_blank\" rel=\"noopener noreferrer\">linkedin</a></p>"
  },
  {
    "name": "Martha Kubakh",
    "role": "Graduate Student",
    "category": "Graduate Students",
    "image": "assets/team/martha-kubakh.webp",
    "imageWidth": 300,
    "imageHeight": 305,
    "bio": "<p>Martha received her B.S in Chemistry and minor in Sustainability, Energy and Environment from the University of Illinois Urbana-Champaign in 2025. She worked for Prof. Paul Braun working on solid-state lithium batteries and worked on electrochemical mediated changes to graphite electrodes in dual-ion battery systems with Prof. Joaquín Rodríguez-López. At the Boettcher Lab, she investigates carrier-selective contacts and how barrier heights are modulated at electrocatalyst–semiconductor interfaces. Outside of lab, she enjoys going to Chem Keg every Friday, hiking, and exploring SF. </p>\n<p>email: <a href=\"mailto:marthakubakh@berkeley.edu\">marthakubakh@berkeley.edu</a></p>"
  },
  {
    "name": "Paul McKinley",
    "role": "Graduate Student",
    "category": "Graduate Students",
    "image": "assets/team/paul-mckinley.webp",
    "imageWidth": 300,
    "imageHeight": 286,
    "bio": "<p>Paul received his bachelor’s degree in physics from Pomona College and his master’s degree in energy technology engineering from the University of Cambridge. In the Boettcher group, he is investigating interfacial electrochemistry in nanoscale devices to better understand mechanisms of degradation in existing energy storage and conversion systems. Outside of the lab, he enjoys trail running and playing piano!</p>\n<p>email: <a href=\"mailto:pcmckinley@berkeley.edu\">pcmckinley@berkeley.edu</a> — <a href=\"https://www.linkedin.com/in/paul-mckinley-56184122a/\" target=\"_blank\" rel=\"noopener noreferrer\">linkedin</a></p>"
  },
  {
    "name": "Jack Pereira",
    "role": "Graduate Student",
    "category": "Graduate Students",
    "image": "assets/team/jack-pereira.webp",
    "imageWidth": 300,
    "imageHeight": 301,
    "bio": "<p>Jack received his B.S. in Chemical Engineering at the University of Washington, where he worked with Dr. Stuart Adler on machine learning-based electrochemical impedance modeling. Co-advised by Dr. Sarah Berlinger at LBL, he is investigating the structure and dynamics of electrochemical interfaces to further our understanding of interfacial charge transfer.</p>\n<p>email: <a href=\"mailto:jack_pereira@berkeley.edu\">jack_pereira@berkeley.edu</a></p>"
  },
  {
    "name": "Sree Sundararaman",
    "role": "Graduate Student",
    "category": "Graduate Students",
    "image": "assets/team/sree-sundararaman.webp",
    "imageWidth": 300,
    "imageHeight": 288,
    "bio": "<p>Sree received her B.S. in Materials Science and Engineering at Stanford University in 2024, where she worked on thin film solid state electrolytes in Will Chueh’s group. Prior to starting her Ph.D. at Berkeley, she spent a year working at Ammobia, a startup focusing on low temperature, low pressure ammonia synthesis. At the Boettcher lab, her research focuses on the development of combined electrochemical-thermocatalytic reactors for decarbonisation of fuels. Outside of the lab she enjoys weightlifting, reading, hiking and drinking coffee.</p>\n<p>email: <a href=\"mailto:sreesundar@berkeley.edu\">sreesundar@berkeley.edu</a> — <a href=\"https://www.linkedin.com/in/sree-sundararaman-138777220\" target=\"_blank\" rel=\"noopener noreferrer\">linkedin</a><br></p>"
  },
  {
    "name": "Matthew Zoerb",
    "role": "Graduate Student",
    "category": "Graduate Students",
    "image": "assets/team/matthew-zoerb.webp",
    "imageWidth": 663,
    "imageHeight": 856
  },
  {
    "name": "Abigail Derrico",
    "role": "Graduate Student",
    "category": "Graduate Students"
  },
  {
    "name": "Nadia Barnard",
    "role": "Graduate Student",
    "category": "Graduate Students"
  },
  {
    "name": "Lavanya Gupta",
    "role": "Graduate Student",
    "category": "Graduate Students"
  },
  {
    "name": "Yun-Seok Kang",
    "role": "Visiting Student",
    "category": "Visiting Students",
    "image": "assets/team/yun-seok-kang.webp",
    "imageWidth": 300,
    "imageHeight": 295,
    "bio": "<p>Yun-Seok is a Ph.D. student in Energy Engineering at the Ulsan National Institute of Science &amp; Technology (UNIST) in Jungki&#39;s group. His research has focused on manipulating bubbles in water electrolysis systems by managing wetting properties and analyzing fluid flow and mass transport. Currently, he is a visiting scholar at the Boettcher lab, studying the interactions between electrocatalysts and ionomers for durable water electrolysis.</p>\n<p>email: <a href=\"mailto:flyingkang@berkeley.edu\">flyingkang@berkeley.edu</a></p>"
  },
  {
    "name": "Minseo Kim",
    "role": "Visiting Student",
    "category": "Visiting Students",
    "image": "assets/team/minseo-kim.webp",
    "imageWidth": 300,
    "imageHeight": 295,
    "bio": "<p>Minseo Kim is a Ph.D. student in the Department of Chemistry at Sungkyunkwan University, in Prof. Hyoyoung Lee’s Group. Her research interest is designing electrocatalysts for water oxidation in Proton Exchange Membrane Water Electrolysis (PEMWE) systems. Currently, she is a visiting scholar in the Boettcher lab, focusing on bipolar membrane systems.</p>\n<p>email: <a href=\"mailto:soohyuk1793@berkeley.edu\">soohyuk1793@berkeley.edu</a></p>"
  },
  {
    "name": "Jaqueline Savoia",
    "role": "Visiting Student",
    "category": "Visiting Students",
    "image": "assets/team/jaqueline-savoia.webp",
    "imageWidth": 300,
    "imageHeight": 282,
    "bio": "<div>Jaqueline is a Ph.D. student in Chemical Engineering at University of São Paulo (USP), Brazil. Her research focuses on thermocatalytic ammonia decomposition for hydrogen production, particularly under high-pressure conditions. She is interested in integrating heterogeneous catalysis and hydrogen-selective Pd-based membranes in membrane reactor systems to improve hydrogen production and separation. \n<p>focusing on bipolar membrane systems.</p>\n<p>email: <a href=\"mailto:jaquelinesavoia@berkeley.edu\">jaquelinesavoia@berkeley.edu</a> — <a href=\"https://www.linkedin.com/in/jaqueline-savoia-437164b4/%20%20\" target=\"_blank\" rel=\"noopener noreferrer\">linkedin</a></p>\n\n</div>"
  },
  {
    "name": "Tae-Hoon Kong",
    "role": "Visiting Student",
    "category": "Visiting Students",
    "image": "assets/team/tae-hoon-kong.webp",
    "imageWidth": 300,
    "imageHeight": 274,
    "bio": "<p>Tae-Hoon is a Ph.D. student in Energy Engineering at Ulsan National Institute of Science and Technology (UNIST), where he works in Prof. Youngkook Kwon’s group. His research focuses on diagnosing electrode-specific performance and degradation in water electrolyzers using membrane-sensing techniques and voltage-loss breakdown analysis. Currently, he is a visiting scholar in the Boettcher Lab, studying the dynamic behavior of water electrolyzers through electrochemical experiments and modeling.</p>\n<p>email: <a href=\"mailto:thkong@berkeley.edu\">thkong@berkeley.edu</a>/<a href=\"mailto:thkong@lbl.gov\">thkong@lbl.gov</a> — <a href=\"https://www.linkedin.com/in/tae-hoon-kong-6bb4a1413/\" target=\"_blank\" rel=\"noopener noreferrer\">linkedin</a></p>"
  },
  {
    "name": "Jiashen Yang",
    "role": "Visiting Student",
    "category": "Visiting Students",
    "image": "assets/team/jiashen-yang.webp",
    "imageWidth": 300,
    "imageHeight": 300,
    "bio": "<p>Jiashen is an undergraduate student at the School of Chemistry, Nanjing University, advised by Prof. Hai-Xu Wang. His previous research experience includes density functional theory (DFT) studies of organic reaction mechanisms and thermal catalytic olefin epoxidation. Currently, he is a Visiting Student Researcher in the Boettcher Lab at UC Berkeley, where his research focuses on bipolar membranes.</p>\n<p>email: <a href=\"mailto:js.yang@berkeley.edu\">js.yang@berkeley.edu</a> — <a href=\"https://www.linkedin.com/in/js-yang/\" target=\"_blank\" rel=\"noopener noreferrer\">linkedin</a></p>"
  },
  {
    "name": "Xianglong Zhou",
    "role": "Visiting Student",
    "category": "Visiting Students",
    "image": "assets/team/xianglong-zhou.webp",
    "imageWidth": 300,
    "imageHeight": 295,
    "bio": "<p>Xianglong is an undergraduate student at the School of Chemistry and Materials Science, University of Science and Technology of China (USTC), advised by Prof. Hai-Wei Liang. His previous research experience includes carbon support materials for proton exchange membrane fuel cells (PEMFCs). Currently, he is a Visiting Student Researcher in the Boettcher Lab at UC Berkeley, where his research focuses on bipolar membranes.</p>\n<p>email: <a href=\"mailto:xianglongzhou@berkeley.edu\">xianglongzhou@berkeley.edu</a></p>"
  },
  {
    "name": "Jinghan (Skylar) Gao",
    "role": "Master's Graduate",
    "category": "Master's and Undergraduate Students",
    "image": "assets/team/jinghan-skylar-gao.webp",
    "imageWidth": 300,
    "imageHeight": 284,
    "bio": "<p>Jinghan is a recent graduate with an M.S. degree in Chemical Engineering from UC Berkeley. She is preparing her PhD applications, with research interests centered on electrochemical interfaces across biomedical and bioengineering applications. She is currently focusing on experimental optimization for reproducible capacitance measurements. </p>\n<p>email: <a href=\"mailto:gjh2025@berkeley.edu\">gjh2025@berkeley.edu</a> —<a href=\"http://www.linkedin.com/in/gjh2025\" target=\"_blank\" rel=\"noopener noreferrer\">linkedin</a></p>"
  },
  {
    "name": "Jack Tobin",
    "role": "Master's Student",
    "category": "Master's and Undergraduate Students",
    "image": "assets/team/jack-tobin.webp",
    "imageWidth": 300,
    "imageHeight": 289,
    "bio": "<p>Jack completed his B.S. in Chemical Engineering at Cal Poly Pomona and is now a MEng student in Materials Science and Engineering at UCB. He is studying the synthesis and properties of electrochemically activated surfactants.</p>\n\n<p>email: <a href=\"mailto:jtobin22@berkeley.edu\">jtobin22@berkeley.edu</a> — <a href=\"https://linkedin.com/in/jacktobin22\" target=\"_blank\" rel=\"noopener noreferrer\">linkedin</a></p>"
  },
  {
    "name": "Zachary Asawesna",
    "role": "Undergraduate Student",
    "category": "Master's and Undergraduate Students",
    "image": "assets/team/zachary-asawesna.webp",
    "imageWidth": 300,
    "imageHeight": 284,
    "bio": "<p>Zach is an undergraduate majoring in Chemical Engineering, developing digital twins for nano electrolyzers and multi-physics modelling of interfaces within electrolyzers.</p>\n<p>email: <a href=\"mailto:zacharyasa05@berkeley.edu\">zacharyasa05@berkeley.edu</a></p>"
  },
  {
    "name": "Tingkai Chang",
    "role": "Undergraduate Student",
    "category": "Master's and Undergraduate Students",
    "image": "assets/team/tingkai-chang.webp",
    "imageWidth": 300,
    "imageHeight": 268,
    "bio": "<p>Tingkai is an undergraduate majoring in Chemical Engineering and Materials Science and Engineering, studying the durability of anion exchange membranes.</p>\n<p>email: <a href=\"mailto:tingkaichang@berkeley.edu\">tingkaichang@berkeley.edu</a></p>"
  },
  {
    "name": "Zhi Hao \"Kevin\" Chong",
    "role": "Undergraduate Student",
    "category": "Master's and Undergraduate Students",
    "image": "assets/team/zhi-hao-kevin-chong.webp",
    "imageWidth": 300,
    "imageHeight": 289,
    "bio": "<p>Kevin is an undergraduate student majoring in Chemical Engineering with a concentration in Materials Science and Technology. In the Boettcher Lab, he is working on ion-exchange polymers for bipolar membrane systems.</p>\n<p>email: <a href=\"mailto:zhihao_chong@berkeley.edu\">zhihao_chong@berkeley.edu</a></p>"
  },
  {
    "name": "Jeslyn Gao",
    "role": "Undergraduate Student",
    "category": "Master's and Undergraduate Students",
    "image": "assets/team/jeslyn-gao.webp",
    "imageWidth": 300,
    "imageHeight": 300,
    "bio": "<p>Jeslyn is an undergraduate student majoring in Chemical Engineering studying metal ion partitioning in liquid alkaline systems.</p>\n<p>email: <a href=\"mailto:jeslyn_gao@berkeley.edu\">jeslyn_gao@berkeley.edu</a></p>"
  },
  {
    "name": "Haeun Kim",
    "role": "Undergraduate Student",
    "category": "Master's and Undergraduate Students",
    "image": "assets/team/haeun-kim.webp",
    "imageWidth": 300,
    "imageHeight": 287,
    "bio": "<p>Haeun is currently a Chemistry undergraduate student at UC Berkeley, transferring from Skagit Valley College with an A.S. in Chemical Engineering. She has wide-ranging interests in the field of materials chemistry, including batteries, electrocatalytic interfaces, and semiconductor materials. In the Boettcher lab, she is studying the photoelectrochemistry of water oxidation, specifically hydroxide-permeable passivation layers.</p>\n<p>email: <a href=\"mailto:hkim7373@berkeley.edu\">hkim7373@berkeley.edu</a> — <a href=\"https://www.linkedin.com/in/haeun-kim-03353b387/?isSelfProfile=true\" target=\"_blank\" rel=\"noopener noreferrer\">linkedin</a></p>"
  },
  {
    "name": "Heesoo Kim",
    "role": "Undergraduate Student",
    "category": "Master's and Undergraduate Students",
    "image": "assets/team/heesoo-kim.webp",
    "imageWidth": 300,
    "imageHeight": 300,
    "bio": "<p>Heesoo is an undergraduate student majoring in Chemical Engineering with a minor in Physics. She has a background in all-solid-state battery and gas sensor research, and will be studying ion separations for molten salt and lanthanide electrolytes in this lab.</p>\n<p>email: <a href=\"mailto:hkim05@berkeley.edu\">hkim05@berkeley.edu</a> — <a href=\"https://www.linkedin.com/in/heesoo-kim-87875a26b/\" target=\"_blank\" rel=\"noopener noreferrer\">linkedin</a></p>"
  },
  {
    "name": "Paulina Plater",
    "role": "Undergraduate Student",
    "category": "Master's and Undergraduate Students",
    "image": "assets/team/paulina-plater.webp",
    "imageWidth": 300,
    "imageHeight": 288,
    "bio": "<p>Paulina is an undergraduate at UC Berkeley majoring in Chemistry with a concentration in Material Science studying ion transfer in a model lithium-ion battery system.</p>\n<p>email: <a href=\"mailto:paulina_plater@berkeley.edu\">paulina_plater@berkeley.edu</a> — <a href=\"https://www.linkedin.com/in/paulinaplater-ucberkeley/\" target=\"_blank\" rel=\"noopener noreferrer\">linkedin</a></p>"
  },
  {
    "name": "Jiwen Qin",
    "role": "Undergraduate Student",
    "category": "Master's and Undergraduate Students",
    "image": "assets/team/jiwen-qin.webp",
    "imageWidth": 300,
    "imageHeight": 300,
    "bio": "<p>Jiwen is an undergraduate majoring in Engineering Mathematics and Statistics, studying electrochemical impedance spectroscopy in bipolar membrane (BPM) electrolyzers.</p>\n<p>email: <a href=\"mailto:qjw0515@berkeley.edu\">qjw0515@berkeley.edu</a> — <a href=\"https://www.linkedin.com/in/jiwen-qin-3331a4389/\" target=\"_blank\" rel=\"noopener noreferrer\">linkedin</a></p>"
  },
  {
    "name": "Ben Tonnos",
    "role": "Undergraduate Student",
    "category": "Master's and Undergraduate Students",
    "image": "assets/team/ben-tonnos.webp",
    "imageWidth": 285,
    "imageHeight": 300,
    "bio": "<p>Ben is an undergraduate majoring in Chemical Engineering and Nuclear Engineering studying deuterium separation by utilizing water dissociation in a palladium membrane.</p>\n<p>email: <a href=\"mailto:bentonnos1@berkeley.edu\">bentonnos1@berkeley.edu</a></p>"
  }
];
  const SOURCES = {
    lab:'#/about',team:'#/team',publications:'#/publications',research:'#/research',join:'#/join',academy:'#/outreach',learn:'#/outreach',ceset:'#/ceset',
    intranet:'https://sites.google.com/berkeley.edu/boettcher-internal/home',
    oregon:'https://electrochemistry.uoregon.edu',
    faculty:'https://chemistry.berkeley.edu/people/shannon-boettcher',
  };

