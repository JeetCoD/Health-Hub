const hospitals = [
  {
    isTakingAppointments: true,
    imageURL:
      "https://images.pexels.com/photos/3845129/pexels-photo-3845129.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Mayo Clinic",
    description:
      "World-renowned for exceptional medical care, research, and education across multiple specialties.",
    rating: 4.8,
    facilities: [
      "Emergency Department",
      "Cancer Center",
      "Transplant Center",
      "Neurology Center",
    ],
    treatedDiseases: [
      "Cancer",
      "Heart Disease",
      "Neurological Disorders",
      "Organ Transplants",
    ],
    location: {
      city: "Rochester",
      state: "Minnesota",
      country: "USA",
      coordinates: { lat: 44.0225, lon: -92.4668 },
    },
    bedsAvailable: 1265,
    acceptingNewPatients: true,
    specialties: ["Oncology", "Cardiology", "Neurology", "Transplant Medicine"],
    contactInfo: {
      phone: "+1 (507) 284-2511",
      email: "info@mayoclinic.org",
      website: "www.mayoclinic.org",
    },
  },
  {
    isTakingAppointments: true,
    imageURL:
      "https://images.pexels.com/photos/3845128/pexels-photo-3845128.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Johns Hopkins Hospital",
    description:
      "A leading academic medical center known for groundbreaking research and innovative patient care.",

    rating: 4.7,
    facilities: [
      "Emergency Room",
      "Comprehensive Cancer Center",
      "Heart and Vascular Institute",
    ],
    treatedDiseases: [
      "Cancer",
      "Cardiovascular Diseases",
      "Neurological Disorders",
      "Infectious Diseases",
    ],
    location: {
      city: "Baltimore",
      state: "Maryland",
      country: "USA",
      coordinates: { lat: 39.2962, lon: -76.5922 },
    },
    bedsAvailable: 1000,
    acceptingNewPatients: true,
    specialties: ["Neurosurgery", "Oncology", "Pediatrics", "Rheumatology"],
    contactInfo: {
      phone: "+1 (410) 955-5000",
      email: "info@jhmi.edu",
      website: "www.hopkinsmedicine.org",
    },
  },
  {
    isTakingAppointments: true,
    imageURL:
      "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Cleveland Clinic",
    description:
      "Consistently ranked among the best hospitals, particularly excelling in cardiac care and research.",

    rating: 4.6,
    facilities: [
      "Heart, Vascular & Thoracic Institute",
      "Neurological Institute",
      "Digestive Disease Institute",
    ],
    treatedDiseases: [
      "Heart Disease",
      "Neurological Disorders",
      "Digestive Disorders",
      "Cancer",
    ],
    location: {
      city: "Cleveland",
      state: "Ohio",
      country: "USA",
      coordinates: { lat: 41.5026, lon: -81.6208 },
    },
    bedsAvailable: 1285,
    acceptingNewPatients: true,
    specialties: ["Cardiology", "Neurology", "Gastroenterology", "Orthopedics"],
    contactInfo: {
      phone: "+1 (216) 444-2200",
      email: "info@ccf.org",
      website: "www.clevelandclinic.org",
    },
  },
  {
    isTakingAppointments: false,
    imageURL:
      "https://th.bing.com/th/id/OIP.493NM_21aBCeepuml0ExZwHaFn?pid=ImgDet&w=179&h=135&c=7&dpr=1.5",
    name: "Massachusetts General Hospital",
    rating: 4.5,
    description:
      "A Harvard Medical School teaching hospital, pioneering in medical discoveries and patient care.",

    facilities: [
      "Cancer Center",
      "Digestive Healthcare Center",
      "Heart Center",
      "Transplant Center",
    ],
    treatedDiseases: [
      "Cancer",
      "Digestive Disorders",
      "Heart Disease",
      "Kidney Disease",
    ],
    location: {
      city: "Boston",
      state: "Massachusetts",
      country: "USA",
      coordinates: { lat: 42.3625, lon: -71.0686 },
    },
    bedsAvailable: 999,
    acceptingNewPatients: true,
    specialties: [
      "Oncology",
      "Gastroenterology",
      "Cardiology",
      "Transplant Surgery",
    ],
    contactInfo: {
      phone: "+1 (617) 726-2000",
      email: "info@mgh.harvard.edu",
      website: "www.massgeneral.org",
    },
  },
  {
    isTakingAppointments: true,
    imageURL:
      "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Toronto General Hospital",
    description:
      "A major organ transplant center and leader in complex cardiac and vascular care in Canada.",

    rating: 4.4,
    facilities: [
      "Peter Munk Cardiac Centre",
      "Multi-Organ Transplant Program",
      "Medical and Surgical Intensive Care Units",
    ],
    treatedDiseases: [
      "Heart Disease",
      "Organ Failure",
      "Cancer",
      "Respiratory Diseases",
    ],
    location: {
      city: "Toronto",
      state: "Ontario",
      country: "Canada",
      coordinates: { lat: 43.6591, lon: -79.3905 },
    },
    bedsAvailable: 471,
    acceptingNewPatients: true,
    specialties: [
      "Cardiology",
      "Transplant Medicine",
      "Oncology",
      "Respirology",
    ],
    contactInfo: {
      phone: "+1 (416) 340-4800",
      email: "info@uhn.ca",
      website: "www.uhn.ca/TorontoGeneral",
    },
  },
  {
    isTakingAppointments: false,
    imageURL:
      "https://th.bing.com/th/id/OIP.L9WvADpHKvo_qheNwynVMgHaFu?w=221&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    name: "Charité - Universitätsmedizin Berlin",
    rating: 4.3,
    description:
      "One of Europe's largest university hospitals, known for cutting-edge research and medical education.",

    facilities: [
      "Emergency Departments",
      "Cardiology Center",
      "Neurology Center",
      "Oncology Center",
    ],
    treatedDiseases: [
      "Heart Diseases",
      "Neurological Disorders",
      "Cancer",
      "Infectious Diseases",
    ],
    location: {
      city: "Berlin",
      country: "Germany",
      coordinates: { lat: 52.5259, lon: 13.3774 },
    },
    bedsAvailable: 3011,
    acceptingNewPatients: true,
    specialties: ["Cardiology", "Neurology", "Oncology", "Virology"],
    contactInfo: {
      phone: "+49 30 450 50",
      email: "info@charite.de",
      website: "www.charite.de",
    },
  },
  {
    isTakingAppointments: true,
    imageURL:
      "https://images.adsttc.com/media/images/5181/866a/b3fc/4bde/c800/0050/large_jpg/%CE%A9%C2%A8%C2%A1%C3%93%E2%88%8F%EF%AC%81%C2%B5%EF%A3%BF(re-a3)-01.jpg?1367443039",
    name: "Singapore General Hospital",
    description:
      "The flagship hospital of Singapore's public healthcare system, offering multidisciplinary care.",

    rating: 4.2,
    facilities: [
      "Emergency Department",
      "Cancer Centre",
      "National Heart Centre",
      "National Neuroscience Institute",
    ],
    treatedDiseases: [
      "Cancer",
      "Heart Disease",
      "Neurological Disorders",
      "Kidney Disease",
    ],
    location: {
      city: "Singapore",
      country: "Singapore",
      coordinates: { lat: 1.2796, lon: 103.8357 },
    },
    bedsAvailable: 1785,
    acceptingNewPatients: true,
    specialties: ["Oncology", "Cardiology", "Neurology", "Nephrology"],
    contactInfo: {
      phone: "+65 6222 3322",
      email: "info@sgh.com.sg",
      website: "www.sgh.com.sg",
    },
  },
  {
    isTakingAppointments: false,
    imageURL:
      "https://th.bing.com/th/id/OIP.GQYgrijIdolu1LdpE_Yo5wHaFj?pid=ImgDet&w=179&h=134&c=7&dpr=1.5",
    name: "Karolinska University Hospital",
    rating: 4.1,
    description:
      "A leading Swedish hospital closely associated with the Karolinska Institute, known for its Nobel Assembly.",

    facilities: [
      "Emergency Department",
      "Cancer Center",
      "Heart and Vascular Theme",
      "Neurology Center",
    ],
    treatedDiseases: [
      "Cancer",
      "Cardiovascular Diseases",
      "Neurological Disorders",
      "Rare Diseases",
    ],
    location: {
      city: "Stockholm",
      country: "Sweden",
      coordinates: { lat: 59.3505, lon: 18.0328 },
    },
    bedsAvailable: 1340,
    acceptingNewPatients: true,
    specialties: ["Oncology", "Cardiology", "Neurology", "Pediatrics"],
    contactInfo: {
      phone: "+46 8 517 700 00",
      email: "info@karolinska.se",
      website: "www.karolinska.se",
    },
  },
  {
    isTakingAppointments: true,
    imageURL:
      "https://th.bing.com/th/id/OIP.01wvWpNWfJu9q9gYiZdO0QHaEj?pid=ImgDet&w=179&h=109&c=7&dpr=1.5",
    name: "The Alfred Hospital",
    description:
      "A major tertiary referral hospital in Melbourne, specializing in many statewide services.",

    rating: 4.0,
    facilities: [
      "Emergency and Trauma Centre",
      "Heart and Lung Transplant Service",
      "Burns Unit",
    ],
    treatedDiseases: [
      "Traumatic Injuries",
      "Heart and Lung Diseases",
      "Burns",
      "Cancer",
    ],
    location: {
      city: "Melbourne",
      state: "Victoria",
      country: "Australia",
      coordinates: { lat: -37.8468, lon: 144.9816 },
    },
    bedsAvailable: 638,
    acceptingNewPatients: true,
    specialties: [
      "Trauma Care",
      "Transplant Medicine",
      "Burns Treatment",
      "Oncology",
    ],
    contactInfo: {
      phone: "+61 3 9076 2000",
      email: "info@alfred.org.au",
      website: "www.alfredhealth.org.au",
    },
  },
  {
    isTakingAppointments: true,
    imageURL:
      "https://th.bing.com/th/id/OIP.u6bJ5sFlxby6OuWL9Ya2SwHaFF?pid=ImgDet&w=179&h=122&c=7&dpr=1.5",
    name: "Hospital Israelita Albert Einstein",
    rating: 4.6,
    description:
      "One of Latin America's leading hospitals, known for its advanced medical technology and research.",

    facilities: [
      "Emergency Care",
      "Oncology Center",
      "Neurology and Neurosurgery Center",
      "Cardiology Institute",
    ],
    treatedDiseases: [
      "Cancer",
      "Neurological Disorders",
      "Heart Diseases",
      "Orthopedic Conditions",
    ],
    location: {
      city: "São Paulo",
      country: "Brazil",
      coordinates: { lat: -23.5987, lon: -46.7171 },
    },
    bedsAvailable: 627,
    acceptingNewPatients: true,
    specialties: ["Oncology", "Neurosurgery", "Cardiology", "Orthopedics"],
    contactInfo: {
      phone: "+55 11 2151-1233",
      email: "info@einstein.br",
      website: "www.einstein.br",
    },
  },
  {
    isTakingAppointments: true,
    imageURL:
      "https://th.bing.com/th/id/OIP.hEq_MJIWC7LhCFCm6lDongHaDq?pid=ImgDet&w=179&h=88&c=7&dpr=1.5",
    name: "Guy's and St Thomas' NHS Foundation Trust",
    description:
      "A historic London hospital trust providing a wide range of specialist services to the local community and beyond.",

    rating: 4.2,
    facilities: [
      "Accident & Emergency",
      "Cancer Centre",
      "Cardiovascular Centre",
      "Children's Services",
    ],
    treatedDiseases: [
      "Cancer",
      "Heart Diseases",
      "Pediatric Conditions",
      "Kidney Diseases",
    ],
    location: {
      city: "London",
      country: "United Kingdom",
      coordinates: { lat: 51.4988, lon: -0.1019 },
    },
    bedsAvailable: 1277,
    acceptingNewPatients: true,
    specialties: ["Oncology", "Cardiology", "Pediatrics", "Nephrology"],
    contactInfo: {
      phone: "+44 20 7188 7188",
      email: "info@gstt.nhs.uk",
      website: "www.guysandstthomas.nhs.uk",
    },
  },
  {
    isTakingAppointments: true,
    imageURL:
      "https://th.bing.com/th/id/OIP.VbDO_AXmZk6qf0OjUpKixwHaDp?pid=ImgDet&w=179&h=87&c=7&dpr=1.5",
    name: "Apollo Hospitals",
    description:
      "A pioneering force in private healthcare in India, known for its comprehensive and accessible medical services.",

    rating: 4.3,
    facilities: [
      "Emergency Services",
      "Heart Institute",
      "Cancer Institute",
      "Robotic Surgery Unit",
    ],
    treatedDiseases: [
      "Heart Diseases",
      "Cancer",
      "Neurological Disorders",
      "Orthopedic Conditions",
    ],
    location: {
      city: "Chennai",
      state: "Tamil Nadu",
      country: "India",
      coordinates: { lat: 13.0067, lon: 80.2206 },
    },
    bedsAvailable: 700,
    acceptingNewPatients: true,
    specialties: ["Cardiology", "Oncology", "Neurology", "Orthopedics"],
    contactInfo: {
      phone: "+91 44 2829 3333",
      email: "info@apollohospitals.com",
      website: "www.apollohospitals.com",
    },
  },
  {
    isTakingAppointments: true,
    imageURL:
      "https://th.bing.com/th/id/R.95d448d7f838d692aca9e3aa5fb33b45?rik=ltffVOV12Jv6fQ&riu=http%3a%2f%2fi.imgur.com%2fRKbG9jq.jpg&ehk=%2bHe8xM%2bZwVNIDWSX3frXVWoRZrJwn9k8d%2bj8uZDqSOI%3d&risl=&pid=ImgRaw&r=0",
    description:
      "A leading medical institution in South Korea, combining advanced patient care with innovative medical research.",

    name: "Seoul National University Hospital",
    rating: 4.4,
    facilities: [
      "Emergency Medical Center",
      "Cancer Hospital",
      "Clinical Research Institute",
      "Robotic Surgery Center",
    ],
    treatedDiseases: [
      "Cancer",
      "Cardiovascular Diseases",
      "Neurological Disorders",
      "Rare Diseases",
    ],
    location: {
      city: "Seoul",
      country: "South Korea",
      coordinates: { lat: 37.5796, lon: 126.9988 },
    },
    bedsAvailable: 1786,
    acceptingNewPatients: true,
    specialties: [
      "Oncology",
      "Cardiology",
      "Neurology",
      "Rare Disease Treatment",
    ],
    contactInfo: {
      phone: "+82 2-2072-2114",
      email: "info@snuh.org",
      website: "www.snuh.org/global/en",
    },
  },
  {
    isTakingAppointments: true,
    imageURL:
      "https://th.bing.com/th/id/OIP.QxmAD4lQS__9CI8SLkhwagHaFj?pid=ImgDet&w=179&h=134&c=7&dpr=1.5",
    name: "University Hospital Zurich",
    description:
      "One of Switzerland's largest hospitals, offering a full range of medical services and cutting-edge treatments.",

    rating: 4.5,
    facilities: [
      "Emergency Department",
      "Heart and Vascular Center",
      "Comprehensive Cancer Center",
      "Neurocenter",
    ],
    treatedDiseases: [
      "Heart Diseases",
      "Cancer",
      "Neurological Disorders",
      "Digestive Diseases",
    ],
    location: {
      city: "Zurich",
      country: "Switzerland",
      coordinates: { lat: 47.3774, lon: 8.5518 },
    },
    bedsAvailable: 980,
    acceptingNewPatients: true,
    specialties: ["Cardiology", "Oncology", "Neurology", "Gastroenterology"],
    contactInfo: {
      phone: "+41 44 255 11 11",
      email: "info@usz.ch",
      website: "www.usz.ch",
    },
  },
  {
    isTakingAppointments: true,
    imageURL:
      "https://th.bing.com/th/id/OIP.493NM_21aBCeepuml0ExZwHaFn?pid=ImgDet&w=179&h=135&c=7&dpr=1.5",
    name: "Aga Khan University Hospital",
    description:
      "A private, not-for-profit institution in Pakistan, providing high-quality healthcare and medical education.",

    rating: 4.1,
    facilities: [
      "Emergency Department",
      "Heart and Cancer Center",
      "Women's Healthcare Center",
      "Children's Hospital",
    ],
    treatedDiseases: [
      "Heart Diseases",
      "Cancer",
      "Women's Health Issues",
      "Pediatric Conditions",
    ],
    location: {
      city: "Karachi",
      country: "Pakistan",
      coordinates: { lat: 24.8918, lon: 67.0714 },
    },
    bedsAvailable: 721,
    acceptingNewPatients: true,
    specialties: [
      "Cardiology",
      "Oncology",
      "Obstetrics and Gynecology",
      "Pediatrics",
    ],
    contactInfo: {
      phone: "+92 21 111 911 911",
      email: "info@aku.edu",
      website: "www.hospitals.aku.edu/karachi",
    },
  },
];

const appointmentDescriptions = [
  {
    type: "General Checkup",
    description: "Annual physical examination to assess your overall health. No special preparation required.",
  },
  {
    type: "Blood Test",
    description: "Fasting for 8-12 hours may be required. Please confirm with your doctor.",
  },
  {
    type: "X-Ray",
    description: "Wear comfortable clothing without metal zippers or buttons. Jewelry should be removed.",
  },
  {
    type: "MRI Scan",
    description: "Inform staff of any metal implants or devices in your body. Claustrophobic patients should notify us in advance.",
  },
  {
    type: "Dental Cleaning",
    description: "Brush and floss before your appointment. Bring a list of current medications.",
  },
  {
    type: "Pediatric Visit",
    description: "Bring your child's immunization records and a favorite toy for comfort.",
  },
  {
    type: "Cardiology Consultation",
    description: "Wear comfortable clothing. Bring a list of current medications and any recent test results.",
  },
  {
    type: "Prenatal Checkup",
    description: "Bring any prenatal vitamins you're taking and a list of questions for your doctor.",
  },
  {
    type: "Dermatology Appointment",
    description: "Come with clean skin, free of makeup or lotions. Wear clothing that allows easy examination of concerning areas.",
  },
  {
    type: "Physical Therapy Session",
    description: "Wear loose, comfortable clothing and athletic shoes. Bring any assistive devices you normally use.",
  },
  {
    type: "Allergy Testing",
    description: "Avoid antihistamines for 5 days prior to the appointment. Wear short sleeves or easily rolled-up sleeves.",
  },
  {
    type: "Eye Exam",
    description: "Bring your current glasses or contact lenses. If driving, you may need someone to drive you home if your eyes are dilated.",
  },
  {
    type: "Vaccination",
    description: "Wear clothing that allows easy access to the upper arm. Bring your vaccination record if available.",
  },
  {
    type: "Colonoscopy",
    description: "Follow the specific preparation instructions provided by your doctor. Arrange for someone to drive you home after the procedure.",
  },
  {
    type: "Mammogram",
    description: "Do not use deodorant, powder, or lotion under your arms or on your breasts on the day of the exam. Wear a two-piece outfit for convenience.",
  }
];

export {appointmentDescriptions, hospitals}
