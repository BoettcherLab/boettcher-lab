'use strict';
  const TOPICS = [
    'Bipolar membranes',
    'Anion-exchange membranes',
    'Interfacial ion transfer',
    'Thermo-electrocatalysis',
    'Photo-electrochemistry',
    'Oxygen evolution reaction'
  ];
  const RESEARCH = [
    {slug:'bipolar',title:TOPICS[0],paper:'wu-2026'},
    {slug:'anion',title:TOPICS[1],paper:'hou-2025'},
    {slug:'ion-transfer',title:TOPICS[2],paper:'dantona-2025'},
    {slug:'thermo',title:TOPICS[3],paper:null},
    {slug:'photo',title:TOPICS[4],paper:'yang-2026'},
    {slug:'oer',title:TOPICS[5],paper:'liu-2025'}
  ];
  // Citations below were transcribed from the lab's public publications list (2024–2026).
  // Authors are supplied as displayed; several entries use et al. where the public listing is abbreviated.
  let PUBLICATIONS = [
    {id:'expanded-0',year:2025,title:'Electrochemical Proton-Transfer Kinetics Using Model Tungsten Oxide Thin Films',authors:'D. Roychowdhury, N. D’Antona, Y. Zhao, Y. Surendranath, V. Augustyn, P. A. Kempler, S. W. Boettcher',journal:'ACS Electrochemistry',doi:'10.1021/acselectrochem.5c00137',tags:[]},
    {id:'expanded-1',year:2025,title:'Thrifting Iridium for Hydrogen',authors:'A. D. Pendergast, S. W. Boettcher',journal:'Science',doi:'10.1126/science.adv4929',tags:[]},
    {id:'expanded-2',year:2025,title:'Perovskite Catalysts for Pure-Water-Fed Anion-Exchange-Membrane Electrolyzer Anodes: Co-design of Electrically Conductive Nanoparticle Cores and Active Surfaces',authors:'T. Zhai, H. Wang, S. R. Beaudoin, R. Zhang, M. Kwak, S. Hou, Z. Guo, S. W. Boettcher',journal:'Journal of the American Chemical Society',doi:'10.1021/jacs.5c01621',tags:[]},
    {id:'expanded-3',year:2025,title:'Impacts of Dissolved Iron on Alkaline Water Electrolysis Cells',authors:'M. Rajeev, A. Jerome-Saboori, R. Shekhar, S. W. Boettcher, P. A. Kempler',journal:'ACS Catalysis',doi:'10.1021/acscatal.4c07439',tags:[]},
    {id:'expanded-4',year:2025,title:'Comparing Advanced Bipolar Membranes for High-Current Electrodialysis and Membrane Electrolysis',authors:'O. T. Vulpin, J. B. Mitchell, L. Chen, J. Lim, S. Sasmal, N. G. Price, S. R. Jarvis, S. W. Boettcher',journal:'ACS Energy Letters',doi:'10.1021/acsenergylett.4c03538',tags:[]},
    {id:'expanded-5',year:2024,title:'Local Electric Field Effects on Water Dissociation in Bipolar Membranes Studied Using Core–Shell Catalysts',authors:'P. V. Sarma, B. V. Kramar, L. Chen, S. Sasmal, N. P. Weingartz, J. Huang, J. B. Mitchell, M. Kwak, L. X. Chen, S. W. Boettcher',journal:'Chemistry of Materials',doi:'10.1021/acs.chemmater.4c02190',tags:[]},
    {id:'expanded-6',year:2024,title:'Introduction to Green Hydrogen',authors:'S. W. Boettcher',journal:'Chemical Reviews',doi:'10.1021/acs.chemrev.4c00787',tags:[]},
    {id:'expanded-7',year:2025,title:'Anions in Corrosion: Influence of Polymer Electrolytes on the Interfacial Ion Transfer Kinetics of Cu at Au(111) Surfaces',authors:'K. A. Thurman, C. M. Cannan, R. Shekhar, Y. Zhao, S. W. Boettcher, P. A. Kempler',journal:'ACS Electrochemistry',doi:'10.1021/acselectrochem.4c00181',tags:[]},
    {id:'expanded-8',year:2024,title:'Trace Fe Activates Perovskite Nickelate OER Catalysts in Alkaline Media via Redox-Active Surface Ni Species Formed during Electrocatalysis',authors:'L. Twight, A. Tonsberg, S. Samira, K. Velinkar, K. Dumpert, Y. Ou, L. Wang, E. Nikolla, S. W. Boettcher',journal:'Journal of Catalysis',doi:'10.1016/j.jcat.2024.115443',tags:[]},
    {id:'expanded-9',year:2024,title:'Electrically Insulated Catalyst–Ionomer Anode Interfaces toward Durable Alkaline Membrane Electrolyzers',authors:'M. Kwak, K. Ojha, M. Shen, S. W. Boettcher',journal:'ACS Energy Letters',doi:'10.1021/acsenergylett.3c02620',tags:[]},
    {id:'expanded-10',year:2024,title:'Thermodynamic, Kinetic, and Transport Contributions to Hydrogen Evolution Activity and Electrolyte-Stability Windows for Water-in-Salt Electrolytes',authors:'Y. Zhao, X. Hu, G. D. Stucky, S. W. Boettcher',journal:'Journal of the American Chemical Society',doi:'10.1021/jacs.3c12980',tags:[]},
    {id:'expanded-11',year:2023,title:'Protocol for Assembling and Operating Bipolar Membrane Water Electrolyzers',authors:'I. Rios Amador, R. T. Hannagan, D. H. Marin, J. T. Perryman, C. Rémy, M. A. Hubert, G. A. Lindquist, L. Chen, M. B. Stevens, S. W. Boettcher, et al.',journal:'STAR Protocols',doi:'10.1016/j.xpro.2023.102606',tags:[]},
    {id:'expanded-12',year:2023,title:'Cooperative Fe Sites on Transition Metal (Oxy)Hydroxides Drive High Oxygen Evolution Activity in Base',authors:'Y. Ou, L. P. Twight, B. Samanta, L. Liu, S. Biswas, J. L. Fehrs, N. A. Sagui, J. Villalobos, J. Morales-Santelices, D. Antipin, et al.',journal:'Nature Communications',doi:'10.1038/s41467-023-43305-z',tags:[]},
    {id:'expanded-13',year:2023,title:'Oxidative Instability of Ionomers in Hydroxide-Exchange-Membrane Water Electrolyzers',authors:'G. A. Lindquist, J. C. Gaitor, W. L. Thompson, V. Brogden, K. J. T. Noonan, S. W. Boettcher',journal:'Energy & Environmental Science',doi:'10.1039/d3ee01293j',tags:[]},
    {id:'expanded-14',year:2023,title:'Kinetics and Mechanism of Heterogeneous Voltage-Driven Water-Dissociation Catalysis',authors:'L. Chen, Q. Xu, S. W. Boettcher',journal:'Joule',doi:'10.1016/j.joule.2023.06.011',tags:[]},
    {id:'expanded-15',year:2023,title:'Hydrogen Production with Seawater-Resilient Bipolar Membrane Electrolyzers',authors:'D. H. Marin, J. T. Perryman, M. A. Hubert, G. A. Lindquist, L. Chen, A. M. Aleman, G. A. Kamat, V. A. Niemann, M. B. Stevens, Y. N. Regmi, S. W. Boettcher, A. C. Nielander, T. F. Jaramillo',journal:'Joule',doi:'10.1016/j.joule.2023.03.005',tags:[]},
    {id:'expanded-16',year:2022,title:'Nanoscale Measurements of Charge Transfer at Cocatalyst/Semiconductor Interfaces in BiVO₄ Particle Photocatalysts',authors:'M. Shen, A. J. Kaufman, J. Huang, C. Price, S. W. Boettcher',journal:'Nano Letters',doi:'10.1021/acs.nanolett.2c03592',tags:[]},
    {id:'expanded-17',year:2023,title:'Oxygen Evolution Electrocatalysis in Acids: Atomic Tuning of the Stability Number for Submonolayer IrOx on Conductive Oxides from Molecular Precursors',authors:'R. A. Krivina, M. Zlatar, T. N. Stovall, G. A. Lindquist, D. Escalera-López, A. K. Cook, J. E. Hutchison, S. Cherevko, S. W. Boettcher',journal:'ACS Catalysis',doi:'10.1021/acscatal.2c04439',tags:[]},
    {id:'expanded-18',year:2022,title:'Catalytic Proton–Hydroxide Recombination for Forward-Bias Bipolar Membranes',authors:'J. B. Mitchell, L. Chen, K. Langworthy, K. Fabrizio, S. W. Boettcher',journal:'ACS Energy Letters',doi:'10.1021/acsenergylett.2c02043',tags:[]},
    {id:'expanded-19',year:2022,title:'Design Principles for Water Dissociation Catalysts in High-Performance Bipolar Membranes',authors:'L. Chen, Q. Xu, S. Z. Oener, K. Fabrizio, S. W. Boettcher',journal:'Nature Communications',doi:'10.1038/s41467-022-31429-7',tags:[]},
    {id:'expanded-20',year:2022,title:'Anode Catalysts in Anion-Exchange-Membrane Electrolysis Without Supporting Electrolyte Conductivity, Dynamics, and Ionomer Degradation',authors:'R. A. Krivina, G. A. Lindquist, S. R. Beaudoin, T. N. Stovall, W. L. Thompson, L. P. Twight, D. Marsh, J. Grzyb, K. Fabrizio, J. E. Hutchison, S. W. Boettcher',journal:'Advanced Materials',doi:'10.1002/adma.202203033',tags:[]},
    {id:'expanded-21',year:2022,title:'Purification of Residual Ni and Co Hydroxides from Fe-Free Alkaline Electrolyte for Electrocatalysis Studies',authors:'L. Liu, L. P. Twight, J. L. Fehrs, Y. Ou, D. Sun, S. W. Boettcher',journal:'ChemElectroChem',doi:'10.1002/celc.202200279',tags:[]},
    {id:'expanded-22',year:2022,title:'Three-Electrode Study of Electrochemical Ionomer Degradation Relevant to Anion-Exchange-Membrane Water Electrolyzers',authors:'R. A. Krivina, G. A. Lindquist, M. C. Yang, A. K. Cook, C. H. Hendon, A. R. Motz, C. Capuano, K. E. Ayers, J. E. Hutchison, S. W. Boettcher',journal:'ACS Applied Materials & Interfaces',doi:'10.1021/acsami.1c22472',tags:[]},
    {id:'expanded-23',year:2022,title:'Controlling Catalyst–Semiconductor Contacts: Interfacial Charge Separation in p-InP Photocathodes',authors:'A. J. Kaufman, R. A. Krivina, M. Shen, S. W. Boettcher',journal:'ACS Energy Letters',doi:'10.1021/acsenergylett.1c02590',tags:[]},
    {id:'expanded-24',year:2021,title:'Performance and Durability of Pure-Water-Fed Anion Exchange Membrane Electrolyzers Using Baseline Materials and Operation',authors:'G. A. Lindquist, S. Z. Oener, R. Krivina, A. R. Motz, A. Keane, C. Capuano, K. E. Ayers, S. W. Boettcher',journal:'ACS Applied Materials & Interfaces',doi:'10.1021/acsami.1c06053',tags:[]},
    {id:'expanded-25',year:2021,title:'What Structural Features Make Porous Carbons Work for Redox-Enhanced Electrochemical Capacitors? A Fundamental Investigation',authors:'Y. Zhao, E. E. Taylor, X. Hu, B. Evanko, X. Zeng, H. Wang, R. Ohnishi, T. Tsukazaki, J.-F. Li, N. P. Stadie, S. J. Yoo, G. D. Stucky, S. W. Boettcher',journal:'ACS Energy Letters',doi:'10.1021/acsenergylett.0c02424',tags:[]},
    {id:'expanded-26',year:2021,title:'Integrated Reference Electrodes in Anion-Exchange-Membrane Electrolyzers: Impact of Stainless-Steel Gas-Diffusion Layers and Internal Mechanical Pressure',authors:'Q. Xu, S. Z. Oener, G. Lindquist, H. Jiang, C. Li, S. W. Boettcher',journal:'ACS Energy Letters',doi:'10.1021/acsenergylett.0c02338',tags:[]},
    {id:'expanded-27',year:2021,title:'Oxygen Electrocatalysis on Mixed-Metal Oxides/Oxyhydroxides: From Fundamentals to Membrane Electrolyzer Technology',authors:'R. A. Krivina, Y. Ou, Q. Xu, L. P. Twight, T. N. Stovall, S. W. Boettcher',journal:'Accounts of Materials Research',doi:'10.1021/accountsmr.1c00087',tags:[]},
    {id:'expanded-28',year:2021,title:'Reinvigorating Electrochemistry Education',authors:'P. A. Kempler, S. W. Boettcher, S. Ardo',journal:'iScience',doi:'10.1016/j.isci.2021.102481',tags:[]},
    {id:'expanded-29',year:2021,title:'Heterogeneous Electrocatalysis Goes Chemical',authors:'S. W. Boettcher, Y. Surendranath',journal:'Nature Catalysis',doi:'10.1038/s41929-020-00570-1',tags:[]},
    {id:'expanded-30',year:2021,title:'Potentially Confusing: Potentials in Electrochemistry',authors:'S. W. Boettcher, S. Z. Oener, M. C. Lonergan, Y. Surendranath, S. Ardo, C. Brozek, P. A. Kempler',journal:'ACS Energy Letters',doi:'10.1021/acsenergylett.0c02443',tags:[]},
    {id:'expanded-31',year:2020,title:'Thin Cation-Exchange Layers Enable High-Current-Density Bipolar-Membrane Electrolyzers via Improved Water Transport',authors:'S. Z. Oener, L. P. Twight, G. A. Lindquist, S. W. Boettcher',journal:'ACS Energy Letters',doi:'10.1021/acsenergylett.0c02078',tags:[]},
    {id:'expanded-32',year:2020,title:'Membrane Electrolyzers for Impure Water Splitting',authors:'G. A. Lindquist, Q. Xu, S. Z. Oener, S. W. Boettcher',journal:'Joule',doi:'10.1016/j.joule.2020.09.020',tags:[]},
    {id:'expanded-33',year:2019,title:'Nanoscale Catalyst/Semiconductor Interfaces in Photoelectrochemistry',authors:'F. A. L. Laskowski, S. Z. Oener, M. R. Nellist, A. M. Gordon, D. C. Bain, J. L. Fehrs, S. W. Boettcher',journal:'Nature Materials',doi:'10.1038/s41563-019-0488-z',tags:[]},
    {id:'expanded-34',year:2019,title:'Metal Oxide/(Oxy)Hydroxide Overlayers as Hole Collectors and Oxygen Evolution Catalysts on Water Splitting Photoanodes',authors:'F. A. L. Laskowski, M. R. Nellist, J. Qiu, S. W. Boettcher',journal:'Journal of the American Chemical Society',doi:'10.1021/jacs.8b09449',tags:[]},
    {id:'expanded-35',year:2019,title:'Earth-Abundant Oxygen Electrocatalysts for Alkaline Anion-Exchange-Membrane Water Electrolysis',authors:'D. Xu, M. B. Stevens, M. R. Cosby, S. Z. Oener, A. M. Smith, L. J. Enman, K. E. Ayers, C. B. Capuano, J. N. Renner, N. Danilovic, Y. Li, H. Wang, Q. Zhang, S. W. Boettcher',journal:'ACS Catalysis',doi:'10.1021/acscatal.8b04001',tags:[]},
    {id:'expanded-36',year:2018,title:'Potential-Sensing Electrochemical AFM Shows CoPi as a Hole Collector and Oxygen Evolution Catalyst on BiVO₄ Water-Splitting Photoanodes',authors:'M. R. Nellist, J. Qiu, F. A. L. Laskowski, F. M. Toma, S. W. Boettcher',journal:'ACS Energy Letters',doi:'10.1021/acsenergylett.8b01150',tags:[]},
    {id:'expanded-37',year:2018,title:'Operando X-Ray Absorption Spectroscopy Shows Iron Oxidation Is Concurrent with Oxygen Evolution in Cobalt–Iron (Oxy)hydroxide Electrocatalysts',authors:'L. J. Enman, M. B. Stevens, M. H. Dahan, M. R. Nellist, M. C. Toroker, S. W. Boettcher',journal:'Angewandte Chemie International Edition',doi:'10.1002/anie.201808818',tags:[]},
    {id:'han-2026',year:2026,title:'Local pH Control for Impure-Water-Fed Bipolar-Membrane Electrolyzers',authors:'S. Han, G. H. Choi, W. Zhang, D. Xi, D. Syar, J. Shim, J. Y. Lee, T. F. Jaramillo, J. Ryu, S. W. Boettcher',journal:'Energy & Environmental Science',doi:'10.1039/D6EE02476A',tags:[0]},
    {id:'yang-2026',year:2026,title:'Operation-Induced BiVO₄ Surface Reconstruction Modulates Photoelectrochemical Glycerol Photooxidation Stability and Activity',authors:'J. W. Yang, H. R. Kwon, D. S. Kim, N. A. Sagui, Y. J. Hwang, H. W. Jang, S. W. Boettcher',journal:'ACS Energy Letters',doi:'10.1021/acsenergylett.6c01409',tags:[3]},
    {id:'xi-2026',year:2026,title:'Oxygen-tolerant CO₂ capture using protected redox-driven reverse bias bipolar membrane electrodialysis',authors:'D. Xi, P. Zhao, M. Bansal, O. T. Vulpin, S. W. Boettcher, M. J. Aziz',journal:'Carbon Future',doi:'10.26599/CF.2026.9200066',tags:[0]},
    {id:'wu-2026',year:2026,title:'How Does Water Dissociation Work in Bipolar Membranes?',authors:'Y. Wu, T. N. Stovall, D. Xi, S. Hou, P. Sarma, O. T. Vulpin, S. Sasmal, A. Z. Weber, J. C. Bui, S. W. Boettcher',journal:'Journal of the American Chemical Society',doi:'10.1021/jacs.6c05146',tags:[0,1]},
    {id:'kwak-2026',year:2026,title:'Engineering CoOx-Based Self-Supported Anodes for Pure-Water-Fed Anion-Exchange-Membrane Electrolysis',authors:'M. Kwak, S. Hou, K. J. Spence, T. T. Debela, S. W. Boettcher',journal:'ACS Catalysis',doi:'10.1021/acscatal.5c05942',tags:[0,4]},
    {id:'hou-2026',year:2026,title:'Measuring pH Changes Inside a Bipolar Membrane Junction',authors:'S. Hou, T. N. Stovall, A. Z. Weber, S. W. Boettcher',journal:'ACS Energy Letters',doi:'10.1021/acsenergylett.5c03710',tags:[0,1]},
    {id:'hou-2025',year:2025,title:'Durable, pure water–fed, anion-exchange membrane electrolyzers through interphase engineering',authors:'S. Hou, A. Sekar, Y. Zhao, M. Kwak, J. Oh, K. K.-Y. Li, P. Wu, R. T. Hannagan, V. Cartagena, A. C. Ekennia, et al.',journal:'Science',doi:'10.1126/science.adw7100',tags:[0]},
    {id:'dantona-2025',year:2025,title:'Proton-Transfer Kinetics at Liquid–Liquid Interfaces',authors:'N. D’Antona, J. Kelly, N. Barnard, S. Ardo, Y. Wang, Y. Surendranath, T. E. Markland, P. A. Kempler, S. W. Boettcher',journal:'Journal of the American Chemical Society',doi:'10.1021/jacs.4c18349',tags:[1]},
    {id:'basera-2025',year:2025,title:'The Role of Cu³⁺ in the Oxygen Evolution Activity of Copper Oxides',authors:'P. Basera, Y. Zhao, A. T. Garcia-Esparza, F. Babbe, N. Bothra, J. Vinson, D. Sokaras, J. Yano, S. W. Boettcher, M. Bajdich',journal:'Journal of the American Chemical Society',doi:'10.1021/jacs.4c18147',tags:[4]},
    {id:'han-2025',year:2025,title:'Advancing SnO₂-Based Water Dissociation Catalysis in Bipolar-Membrane Water Electrolyzers',authors:'S. Han, S. Sasmal, M. Shen, Y. Wu, O. T. Vulpin, S. Hou, S. Kim, J. Y. Lee, J. Yoon, S. W. Boettcher',journal:'ACS Energy Letters',doi:'10.1021/acsenergylett.5c00309',tags:[0]},
    {id:'liu-2025',year:2025,title:'Dynamics of Fe Adsorption and Desorption from CoOxHy During Oxygen Evolution Reaction Electrocatalysis',authors:'L. Liu, L. P. Twight, S. Xi, Y. Ou, S. W. Boettcher',journal:'ACS Catalysis',doi:'10.1021/acscatal.4c04777',tags:[4]},
    {id:'kaufman-2024',year:2024,title:'Absolute Band-Edge Energies are over-Emphasized in the Design of Photoelectrochemical Materials',authors:'A. J. Kaufman, A. C. Nielander, G. J. Meyer, S. Maldonado, S. Ardo, S. W. Boettcher',journal:'Nature Catalysis',doi:'10.1038/s41929-024-01161-0',tags:[3]},
    {id:'kang-2024',year:2024,title:'Understanding Ion-Transfer Reactions in Silver Electrodissolution and Electrodeposition from First-Principles Calculations and Experiments',authors:'R. Kang, Y. Zhao, D. Hait, J. A. Gauthier, P. A. Kempler, K. A. Thurman, S. W. Boettcher, M. Head-Gordon',journal:'Chemical Science',doi:'10.1039/D3SC05791G',tags:[1]},
    {id:'oener-2020',year:2020,title:'Accelerating water dissociation in bipolar membranes and for electrocatalysis',authors:'S. Z. Oener, M. J. Foster, S. W. Boettcher',journal:'Science',doi:'10.1126/science.aaz1487',tags:[0]}
  ];
  const NEWS = [
    {type:'RESEARCH SPOTLIGHT',date:'2026',title:'What really drives water dissociation in bipolar membranes?',summary:'A new JACS publication examines the mechanisms at the heart of high-performance bipolar membrane systems.',doi:'10.1021/jacs.6c05146',paper:'wu-2026'},
    {type:'PUBLICATION',date:'2026',title:'Local pH control for water-fed electrolyzers',summary:'Research published in Energy & Environmental Science addresses bipolar-membrane operation with impure water.',doi:'10.1039/D6EE02476A',paper:'han-2026'},
    {type:'GROUP MILESTONE',date:'2025',title:'Durable pure-water electrolyzers in Science',summary:'A group publication highlights interphase engineering in anion-exchange membrane electrolysis.',doi:'10.1126/science.adw7100',paper:'hou-2025'},
    {type:'EDUCATION',date:'2026 PROGRAM',title:'Summer Electrochemistry Academy at Berkeley',summary:'CESET offers hands-on summer electrochemistry courses spanning fundamentals and advanced electrochemical technologies.',url:'https://electrochemistry.berkeley.edu/summer-electrochemistry-academy'}
  ];
  const TEAM = [
    {name:'Anthony Ekennia',role:'Postdoctoral Scholar'},
    {name:'Arunavo Chakraborty',role:'Postdoctoral Scholar'},
    {name:'Yang Zhao',role:'Postdoctoral Scholar · LBNL'},
    {name:'Jin Wook Yang',role:'Postdoctoral Scholar'},
    {name:'Gwan Hyun Choi',role:'Postdoctoral Scholar'},
    {name:'Wenbo Zhang',role:'Postdoctoral Scholar'},
    {name:'Dawei Xi',role:'Postdoctoral Scholar'},
    {name:'Jaerim Kim',role:'Postdoctoral Scholar'},
    {name:'Nick D’Antona',role:'Graduate Student'},
    {name:'Kam Yun “Kelvin” Li',role:'Graduate Student'},
    {name:'Nicole Sagui',role:'Graduate Student'},
    {name:'Nathan Stovall',role:'Graduate Student · Collaborator'},
    {name:'Catherine Wallace',role:'Graduate Student'}
  ];
  const BASE = 'https://electrochemistry.berkeley.edu';
  const SOURCES = {
    lab:BASE+'/boettcher-lab',
    team:BASE+'/boettcher-lab/boettcher-lab-team',
    publications:BASE+'/boettcher-group-publications',
    research:BASE+'/boettcher-lab/current-research',
    join:BASE+'/boettcher-lab/join-team',
    academy:BASE+'/summer-electrochemistry-academy',
    learn:BASE+'/boettcher-lab/learn-electrochemistry',
    bluesky:'https://x.com/BoettcherLab',
    oregon:'https://electrochemistry.uoregon.edu',
    faculty:'https://chemistry.berkeley.edu/people/shannon-boettcher',
    scholar:'https://scholar.google.com/citations?user=ctl63ygAAAAJ&hl=en'
  };
