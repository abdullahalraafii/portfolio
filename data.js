/* ======================== EDIT EVERYTHING HERE ======================== */
const CONFIG={
 name:"Abdullah Al Rafi", authorName:"Abdullah Al Rafi", photo:"profile.jpg",
 github:"",                      // add your GitHub username to show a live code section
 cv:"",                          // e.g. "cv.pdf" (upload it next to index.html) to show a Download CV button
 email:"abdullahalrafi.ustc@gmail.com",
 social:[{label:"LinkedIn",url:"https://www.linkedin.com/in/abdullahalraafi/"},{label:"Blog",url:"https://abdullah-rafi.blogspot.com/"}],
 role:"BSc student in Biochemistry and Biotechnology",
 affiliation:"University of Science and Technology Chittagong (USTC), Bangladesh",
 words:["neurobiology","bioinformatics","drug design","neuroinflammation"],
 pitch:"I aim to contribute to innovative healthcare solutions through research, collaboration and science communication.",
 bio:["I am Abdullah Al Rafi, a Bachelor of Science student in Biochemistry and Biotechnology at the University of Science and Technology Chittagong (USTC). My research interests lie in neurobiology, bioinformatics and drug design, with a strong aspiration to contribute to innovative healthcare solutions.","Alongside my studies, I actively engage in global scientific communities, sustainability leadership and science communication, reflecting my commitment to research, collaboration and social impact."],
 marquee:["Neurobiology","Neuroinflammation","Bioinformatics","Computer-aided drug design","Public health data","Science communication","Leadership"],
 interests:[
  {title:"Neurobiology",text:"Neuroinflammation, microglia–astrocyte crosstalk, neurodegeneration and heavy-metal neurotoxicity.",tags:["Microglia","Astrocytes","Cytokines","Neurodegeneration"]},
  {title:"Bioinformatics and drug design",text:"AI-assisted computational drug discovery and computer-aided drug design (CADD).",tags:["CADD","AI","Bromodomains","Leukemia"]},
  {title:"Disease burden and data analysis",text:"Data-driven trend analysis and forecasting of cancer and diabetes in Bangladesh.",tags:["Epidemiology","Forecasting","Public health"]}],
 projects:[
  {when:"30/04/2026 – current",kind:"Wet lab",title:"Diuretic activity of Lasia spinosa extract in experimental animal models",who:"Supervised by Dr. Mohammad Shahangir Biswas"},
  {when:"01/03/2026 – current",kind:"Dry lab",title:"AI for computational drug discovery: CBP/p300 bromodomain–Y16515 interactions in acute myeloid leukemia therapy",who:"Supervised by Dr. Rasel A. AlAmin"}],
 publications:[
  {when:"2025",status:"Preprint",kind:"Research article",title:"Trends and Burden of Breast and Cervical Cancer in Bangladesh: A Data-Driven Analysis and Future Outlook",authors:"Abdullah Al Rafi, Kashefatun Nur Orni, Tasnuba Ashraf Subah, Saima Akther, Ankita Acharjee, Imran Al Zuhayr, Debabrata Mallick",venue:"medRxiv 2025.12.05.25341679",link:"https://doi.org/10.64898/2025.12.05.25341679"},
  {when:"2025",status:"Preprint",kind:"Research article",title:"The Diabetes Epidemic in Bangladesh: Trends and Forecasts (2000 to 2050)",authors:"Jannatul Nayma Eshita, Abu Bakar Al Mizan, Istekab Bin Yousuf, Tazeen Tarannum Sadia, Sidratul Muntaha, Sumaia Alam, Abdullah Al Rafi, Debabrata Mallick",venue:"medRxiv 2025.12.25.25342994",link:"https://doi.org/10.64898/2025.12.25.25342994"},
  {when:"Submitted",status:"Submitted",kind:"Book chapter",title:"Lead-Induced Cognitive Dysfunction",authors:"",venue:"Submitted to Bentham Science Publishers"},
  {when:"Submitted",status:"Submitted",kind:"Review article",title:"Nanoformulation-Based Therapeutic Strategies of Natural Products in Esophageal Cancer Chemoresistance and Associated Challenges",authors:"",venue:"Submitted to Nanomedicine: Nanotechnology, Biology, and Medicine"},
  {when:"Submitted",status:"Submitted",kind:"Review article",title:"Heavy Metals and Neurodegeneration: Mechanisms, Implications, and Therapeutic Perspectives",authors:"",venue:"Submitted to IBRO Neuroscience Reports"},
  {when:"In preparation",status:"In preparation",kind:"Review article",title:"Emerging Insights into Neuroinflammation in Cerebrovascular Diseases: The Role of Microglia, Astrocytes, and Cytokine Cascades",authors:"",venue:"Supervised by Dr. Mohammad Shahangir Biswas"},
  {when:"In preparation",status:"In preparation",kind:"Review article",title:"Recent Advances in the Diagnosis and Management of Neurodegenerative Diseases",authors:"",venue:"Supervised by Dr. Mohammad Shahangir Biswas"}],
 education:[
  {when:"01/01/2024 – current",title:"BSc in Biochemistry and Biotechnology",place:"University of Science and Technology Chittagong, Chattogram",detail:"CGPA 3.60 / 4.00 (average of semesters 1–4). EQF level 6.",link:"https://ustc.ac.bd/"},
  {when:"01/06/2019 – 01/06/2021",title:"Higher School Certificate (HSC), Science",place:"Islamia University College Chittagong",detail:"GPA 4.75. EQF level 4."},
  {when:"Secondary",title:"Secondary School Certificate (SSC), Science",place:"Chittagong Government High School",detail:"GPA 4.67. EQF level 2."}],
 gpa:[["1st",3.75],["2nd",3.75],["3rd",3.63],["4th",3.29]],
 experience:[
  {when:"10/2025 – current",title:"Cambridge Academic Panel Member",place:"Cambridge University Press & Assessment, UK",items:["Research and user-experience activities to improve products for researchers and authors.","Insights on academic publishing, Open Access challenges and research support tools.","Monthly surveys, feedback sessions and community discussions under ethical guidelines."]},
  {when:"09/2025 – current",title:"Public Relationship Officer (PRO)",place:"BBTech Journal Club, USTC",items:["Manage the club’s public image through social media and outreach.","Coordinate collaborations with academic and research organisations.","Promote scientific events, seminars and publications; create media content for science outreach."]},
  {when:"09/2025 – current",title:"Young Campus Ambassador 2025",place:"BioLuster Research Center Ltd, Dhaka",items:["Promote research awareness and bridge BioLuster initiatives with campus communities.","Lead science-focused activities and inspire peers."]},
  {when:"01/2025 – 06/2025",title:"Executive Member",place:"BBTech Science Club, USTC",items:["Planned and organised science and technology events and workshops.","Supported strategic planning of student-led initiatives."],link:"https://www.facebook.com/bbtechscienceclub"},
  {when:"01/2025 – current",title:"UPG Champion",place:"United People Global, Geneva, Switzerland",items:["Advocate for sustainability, social impact and innovation.","Lead global community projects with international changemakers."],link:"https://unitedpeople.global/"},
  {when:"07/2024 – 11/2024",title:"Four-month Internship on Leadership",place:"Aspire Institute Inc.",items:["Programme on strategic decision-making, teamwork and leadership.","Executed practical leadership projects in communication and collaboration."],link:"https://www.aspireleaders.org/"}],
 conferences:[
  {when:"25 Apr 2026",title:"6th International Young Biotechnologist Congress 2026 & Future Biotechnologists Summit 2026",place:"Nabab Nawab Ali Chowdhury Senate Bhaban, University of Dhaka",posters:["Role of Neuroinflammation in Brain Tumor Progression: Microglia–Astrocyte Crosstalk as a Therapeutic Target","Neuroinflammation in Cerebrovascular Diseases: The Role of Microglia, Astrocytes, and Cytokine Cascades"]},
  {when:"24 Apr 2026",title:"2nd National Youth Cancer Congress 2026",place:"Bishwo Shahitto Kendro, Dhaka",posters:["Role of Neuroinflammation in Brain Tumor Progression: Microglia–Astrocyte Crosstalk as a Therapeutic Target"]},
  {when:"31 Jan 2026",title:"Scholars’ Convergence: Research & Innovation Summit 2026",place:"Chittagong University",posters:["Recent Advances in the Diagnosis and Management of Neurodegenerative Diseases"]},
  {when:"19 Dec 2025",title:"1st International Conference on Life and Earth Sciences for Sustainable Development (ICLESSD-2025)",place:"Jagannath University, Dhaka",posters:["Recent Advances in the Diagnosis and Management of Neurodegenerative Diseases"],note:"Plenary, scientific and poster sessions across biochemistry, genomics and bioinformatics, microbiome and public health, genetic engineering, pharmaceutical sciences and sustainability.",link:"https://lnkd.in/g6eH8Fxv"},
  {when:"14–15 Nov 2025",title:"2nd International Conference on Recent Advances in Science and Technology (ICRAST 2025)",place:"University of Rajshahi",posters:["Neuroinflammation in Cerebrovascular Diseases: The Role of Microglia, Astrocytes, and Cytokine Cascades"],note:"Engaged with national and international researchers; discussed neuroinflammatory mechanisms and therapeutic implications.",link:"https://lnkd.in/gnBGSKdy"},
  {when:"26–27 Sep 2025",title:"6th International Conference on Biotechnology in Health and Agriculture (ICBHA 2025)",place:"Sher-e-Bangla Agricultural University, Dhaka",posters:["Emerging Insights into Neuroinflammation in Cerebrovascular Diseases: The Role of Microglia, Astrocytes, and Cytokine Cascades"],note:"Insights into genome editing, cancer biology, bioinformatics and environmental biotechnology.",link:"https://lnkd.in/gDeVJtNV"},
  {when:"25 Sep 2025",title:"CEAB–CCRTB International Conference 2025 (UNESCO Participation Program 2024–25)",place:"Nabab Nawab Ali Chowdhury Senate Bhaban, University of Dhaka",posters:["Emerging Insights into Neuroinflammation in Cerebrovascular Diseases"],link:"https://lnkd.in/gZgutyxm"},
  {when:"24 Aug 2025",title:"World DNA Day 2025, BBTech Science Club",place:"USTC, Chattogram",posters:["Oral and poster presentations"],note:"Built skills in audience engagement, visual aids and concise poster design.",link:"https://lnkd.in/gb8wuHKd"},
  {when:"7–8 Feb 2025",title:"1st National Youth Cancer Congress 2025",place:"Bishwo Shahitto Kendro, Dhaka",posters:[],note:"Sessions on cancer prevention, treatment and research; strengthened understanding of cancer care in Bangladesh.",link:"https://lnkd.in/gT-c3-U9"}],
 awards:[
  {when:"10 Nov 2025",title:"Champion, USTC Central Debate Competition 2025",text:"Awarded the Champion’s Crest by Vice-Chancellor Professor Dr. Mohammed Solaiman for outstanding team debate performance.",links:[["Post 1","https://www.facebook.com/share/p/1Buwf6e6sY/"],["Post 2","https://www.facebook.com/share/p/1MPU6HVyhB/"],["Post 3","https://www.facebook.com/share/p/1Cx3UNtb7w/"]]},
  {when:"Sep 2025",title:"Certificate of Appreciation, BBTech Journal Club, USTC",text:"Recognised for service as Public Relationship Officer, promoting scientific discussion, communication and collaboration.",links:[["Certificate","https://lnkd.in/gSnqg6mX"]]},
  {when:"Jun 2024",title:"1st Place, Essay Competition, Biology Faculty Co-curricular Society (BFCS), CU",text:"Event: Clean Energy: Innovation for a Brighter Tomorrow. Theme: Sundarbans Restoration, a Bangladesh perspective.",links:[["Certificate","https://lnkd.in/gtCSxZ6x"]]}],
 certs:[
  {when:"11/2024",title:"Basic Molecular Biology Modules 3 & 4: Nucleic Acid Extraction; PCR & Real-Time PCR",org:"Centers for Disease Control and Prevention"},
  {when:"11/2024",title:"Fully funded International Genomics and Bioinformatics Bootcamp",org:"Genomac Institute Inc."},
  {when:"2025",title:"Basic Research Training in Computer-Aided Drug Design & Publication",org:"CADD Lab, GSTU"},
  {when:"10 May 2024",title:"Workshop on Bioinformatics and Computer-Aided Drug Design (CADD)",org:"BioPc, a Bioinformatics Lab of Research and Training"},
  {when:"5 Apr 2024",title:"Workshop on Bioinformatics: Bridging Science and Computer",org:"BioChemix Club, RU"},
  {when:"2025",title:"Advanced Training: Methods in Health Research & Ethics",org:"Global-ALT"},
  {when:"11/2024 – 11/2025",title:"Infection prevention and control measures in health-care settings for Ebola or Marburg disease outbreaks",org:"World Health Organization"},
  {when:"2024",title:"Pandemic Planning: Getting “PRET” for the Next Pandemic",org:"World Health Organization"},
  {when:"2024",title:"Clinical Microbiology Virtual Journal Club Webinars",org:"American Society for Microbiology"}],
 memberships:[
  ["American Society for Microbiology (ASM)","Washington, DC, USA · since 04/2024"],["Microbiology Society","United Kingdom · since 03/2025"],
  ["British Society for Immunology (BSI)","London, UK · since 01/2025"],["American Chemical Society (ACS)","Washington, DC, USA · since 12/2024"],
  ["Royal Society of Chemistry (RSC)","United Kingdom · since 12/2024"],["German Chemical Society (GDCh)","Frankfurt am Main, Germany · since 01/2025"],
  ["Royal Microscopical Society (RMS)","Oxford, UK · since 02/2025"],["Australasian Association for Clinical Biochemistry and Laboratory Medicine (AACB)","Alexandria NSW, Australia · since 12/2024"]],
 skills:["Leadership","Community education","Leadership development","Sustainable development","Community project management","Global networking","Science communication","Scientific writing","Poster presentation","Microsoft Office","Microsoft Word"],
 mother:"Mother tongue: Bengali",
 cols:["Listening","Reading","Spoken production","Spoken interaction","Writing"],
 languages:[["English",["C1","B2","B2","B2","B2"]],["Hindi",["C1","A1","B2","C1","A1"]]],
 cta:"I welcome research collaborations, mentoring conversations and invitations to speak or contribute.",
 maxRepos:6
};
