const CERTIFICATION = "Certifications";
const EDUCATION = "Education";
const TRAINING = "Training";
const YEARS = "years";
const HOURS = "hours";
const LIFE_LONG_LEARNING_TYPE = [CERTIFICATION, EDUCATION, TRAINING];
const LIFE_LONG_LEARNING = [
  {
    type: CERTIFICATION,
    name: "Scrum Master Accredited Certification&trade;",
    image: "scrum-master-cert.webp",
    imageAlt: "Scrum Master Accredited Certification Diploma",
    link: "https://www.scrum-institute.org/International_Scrum_Institute_Certificate_Validation_Tool.php?AUTHORIZED_CERTIFICATE_ID=41464305568486&submitted=y",
    institution: "International Scrum Institute",
    certificationId: "41464305568486",
    periodType: HOURS,
    startYear: 0,
    endYear: 2016,
    startMonth: 0,
    endMonth: 12,
    hours: 0
  },
  {
    type: CERTIFICATION,
    name: "Responsive Web Design Certification",
    image: "resp-web-des-cert.webp",
    imageAlt: "freeCodeCamp Web Design Certification Diploma",
    link: "https://www.freecodecamp.org/certification/fccd950f534-84e4-4c60-9aae-b49ea26c70da/responsive-web-design",
    institution: "freeCodeCamp",
    certificationId: "fccd950f534-84e4-4c60-9aae-b49ea26c70da",
    periodType: HOURS,
    startYear: 0,
    endYear: 2019,
    startMonth: 0,
    endMonth: 7,
    hours: 300
  },
  {
    type: CERTIFICATION,
    name: "JavaScript Algorithms and Data Structures Certification",
    image: "js-alg-n-str-cert.webp",
    imageAlt: "freeCodeCamp JavaScript Algorithms and Data Structures Certification Diploma",
    link: "https://www.freecodecamp.org/certification/fccd950f534-84e4-4c60-9aae-b49ea26c70da/javascript-algorithms-and-data-structures",
    institution: "freeCodeCamp",
    certificationId: "fccd950f534-84e4-4c60-9aae-b49ea26c70da",
    periodType: HOURS,
    startYear: 0,
    endYear: 2019,
    startMonth: 0,
    endMonth: 9,
    hours: 300
  },
  {
    type: CERTIFICATION,
    name: "Front End Libraries Certification",
    image: "front-end-libs-cert.webp",
    imageAlt: "freeCodeCamp Front End Libraries Certification Diploma",
    link: "https://www.freecodecamp.org/certification/fccd950f534-84e4-4c60-9aae-b49ea26c70da/front-end-libraries",
    institution: "freeCodeCamp",
    certificationId: "fccd950f534-84e4-4c60-9aae-b49ea26c70da",
    periodType: HOURS,
    startYear: 0,
    endYear: 2019,
    startMonth: 0,
    endMonth: 11,
    hours: 300
  },
  {
    type: CERTIFICATION,
    name: "Data Visualization Certification",
    image: "data-vis-cert.webp",
    imageAlt: "freeCodeCamp Data Visualization Certification Diploma",
    link: "https://www.freecodecamp.org/certification/fccd950f534-84e4-4c60-9aae-b49ea26c70da/data-visualization",
    institution: "freeCodeCamp",
    certificationId: "fccd950f534-84e4-4c60-9aae-b49ea26c70da",
    periodType: HOURS,
    startYear: 0,
    endYear: 2019,
    startMonth: 0,
    endMonth: 12,
    hours: 300
  },
  {
    type: CERTIFICATION,
    name: "APIs and Microservices Certification",
    image: "apis-n-msvcs-cert.webp",
    imageAlt: "freeCodeCamp APIs and Microservices Certification Diploma",
    link: "https://www.freecodecamp.org/certification/fccd950f534-84e4-4c60-9aae-b49ea26c70da/apis-and-microservices",
    institution: "freeCodeCamp",
    certificationId: "fccd950f534-84e4-4c60-9aae-b49ea26c70da",
    periodType: HOURS,
    startYear: 0,
    endYear: 2019,
    startMonth: 0,
    endMonth: 12,
    hours: 300
  },
  {
    type: EDUCATION,
    name: "Professional Technician in Instrumentation and Control",
    image: "pt-inst-n-ctrl-dip.webp",
    imageAlt: "Professional Technician in Instrumentation and Control Diploma",
    link: "",
    institution: "Colegio Nacional de Educación Profesional Técnica",
    certificationId: "",
    periodType: YEARS,
    startYear: 2015,
    endYear: 2018,
    startMonth: 0,
    endMonth: 0,
    hours: 0
  },
  {
    type: EDUCATION,
    name: "Diploma in Programming",
    image: "dp-prog.webp",
    imageAlt: "Diploma in Programming",
    link: "",
    institution: "Instituto Technológico de Estudios Superiores de Monterrey",
    certificationId: "",
    periodType: HOURS,
    startYear: 0,
    endYear: 2004,
    startMonth: 0,
    endMonth: 11,
    hours: 138
  },
  {
    type: EDUCATION,
    name: "Diploma in Project Management (PMI)",
    image: "dp-pm.webp",
    imageAlt: "Diploma in Project Management",
    link: "",
    institution: "Instituto Tecnológico de Estudios Superiores de Occidente",
    certificationId: "",
    periodType: HOURS,
    startYear: 0,
    endYear: 2006,
    startMonth: 0,
    endMonth: 7,
    hours: 120
  },
  {
    type: EDUCATION,
    name: "Diploma in High-Performance Teams",
    image: "dp-high-perf-teams.webp",
    imageAlt: "Diploma in High-Performance Teams",
    link: "",
    institution: "Instituto Tecnológico de Estudios Superiores de Occidente",
    certificationId: "",
    periodType: HOURS,
    startYear: 0,
    endYear: 2007,
    startMonth: 0,
    endMonth: 12,
    hours: 120
  },
  {
    type: EDUCATION,
    name: "Diploma in Software Development Processes",
    image: "dp-sw-dev-processes.webp",
    imageAlt: "Diploma in Software Development Processes",
    link: "",
    institution: "Instituto Tecnológico de Estudios Superiores de Occidente",
    certificationId: "",
    periodType: HOURS,
    startYear: 0,
    endYear: 2006,
    startMonth: 0,
    endMonth: 10,
    hours: 120
  },
  {
    type: EDUCATION,
    name: "Diploma in Windows and Linux Networking",
    image: "dp-win-n-lnx-ntwks.webp",
    imageAlt: "Diploma in Windows and Linux Networking",
    link: "",
    institution: "Colegio Nacional de Educación Profesional Técnica",
    certificationId: "",
    periodType: HOURS,
    startYear: 0,
    endYear: 2003,
    startMonth: 0,
    endMonth: 9,
    hours: 140
  },
  {
    type: EDUCATION,
    name: "Diploma in Computing",
    image: "#",
    imageAlt: "Diploma in Computing - Image not available",
    link: "",
    institution: "Instituto Tecnológico de Estudios Informaticos",
    certificationId: "",
    periodType: HOURS,
    startYear: 0,
    endYear: 2001,
    startMonth: 0,
    endMonth: 12,
    hours: 200
  },
  {
    type: TRAINING,
    name: "Introduction to Software Product Management",
    image: "https://leovago.files.wordpress.com/2019/08/coursera-introduction-to-software-product-management-1.png",
    imageAlt: "Introduction to Software Product Management Course Certificate",
    link: "https://coursera.org/verify/8JR8HPLN6KYG",
    institution: "University of Alberta",
    certificationId: "8JR8HPLN6KYG",
    periodType: HOURS,
    startYear: 0,
    endYear: 2016,
    startMonth: 0,
    endMonth: 7,
    hours: 5
  },
  {
    type: TRAINING,
    name: "Software Processes and Agile Practices",
    image: "https://leovago.files.wordpress.com/2019/08/coursera-software-processes-and-agile-practices-1.png",
    imageAlt: "Software Processes and Agile Practices Course Certificate",
    link: "https://coursera.org/verify/YAWT3KJNT5YQ",
    institution: "University of Alberta",
    certificationId: "YAWT3KJNT5YQ",
    periodType: HOURS,
    startYear: 0,
    endYear: 2016,
    startMonth: 0,
    endMonth: 8,
    hours: 9
  },
  {
    type: CERTIFICATION,
    name: "",
    image: "",
    imageAlt: "",
    link: "",
    institution: "",
    certificationId: "",
    periodType: YEARS,
    startYear: 2019,
    endYear: 0,
    startMonth: 0,
    endMonth: 0,
    hours: 300
  },
  {
    type: CERTIFICATION,
    name: "",
    image: "",
    imageAlt: "",
    link: "",
    institution: "",
    certificationId: "",
    periodType: YEARS,
    startYear: 2019,
    endYear: 0,
    startMonth: 0,
    endMonth: 0,
    hours: 300
  },
  {
    type: CERTIFICATION,
    name: "",
    image: "",
    imageAlt: "",
    link: "",
    institution: "",
    certificationId: "",
    periodType: YEARS,
    startYear: 2019,
    endYear: 0,
    startMonth: 0,
    endMonth: 0,
    hours: 300
  },
  {
    type: CERTIFICATION,
    name: "",
    image: "",
    imageAlt: "",
    link: "",
    institution: "",
    certificationId: "",
    periodType: YEARS,
    startYear: 2019,
    endYear: 0,
    startMonth: 0,
    endMonth: 0,
    hours: 300
  },
  {
    type: CERTIFICATION,
    name: "",
    image: "",
    imageAlt: "",
    link: "",
    institution: "",
    certificationId: "",
    periodType: YEARS,
    startYear: 2019,
    endYear: 0,
    startMonth: 0,
    endMonth: 0,
    hours: 300
  },
  {
    type: TRAINING,
    name: "",
    image: "",
    imageAlt: "",
    link: "",
    institution: "",
    certificationId: "",
    periodType: YEARS,
    startYear: 2019,
    endYear: 0,
    startMonth: 0,
    endMonth: 0,
    hours: 300
  }
];

const JOB_EXPERIENCE = [
  {
    company: "Jabil",
    position: "",
    startYear: 2000,
    endYear: 2000,
    startMonth: 12,
    endMonth: 12
  }
];


$(document).ready(function (){
  console.clear();

  let certifications = LIFE_LONG_LEARNING.filter((x) => (x.type === CERTIFICATION && x.name != ""));
  certifications.forEach(function (certification){
    addLifeLongLearning(CERTIFICATION.toLowerCase(), certification);
    loadCertificationsAndEducationImages(certification);
  });

  let education = LIFE_LONG_LEARNING.filter((x) => (x.type === EDUCATION && x.name != ""));
  education.forEach(function (diploma){
    addLifeLongLearning(EDUCATION.toLowerCase(), diploma);
    loadCertificationsAndEducationImages(diploma);
  });

  let courses = LIFE_LONG_LEARNING.filter((x) => (x.type === TRAINING && x.name != ""));
  courses.forEach((course) => (addLifeLongLearning(TRAINING.toLowerCase(), course)));
  
  function loadCertificationsAndEducationImages(obj){
    if (obj.image != "#" && obj.image != "") {
      $("#diplomas").append(
        `<img src="${obj.image}" alt="${obj.imageAlt}" />`
      );
    }
  }
  
  
  // Add Life Long Learning Education, Certifications and Courses
  function addLifeLongLearning(type, obj){
    let period = '';
    if (obj.periodType === YEARS) {
      period = `${obj.startYear} - ${obj.endYear}`;
    } else {
      period = `${obj.endMonth}/${obj.endYear}${(obj.hours == 0)? ("") : (" - " + obj.hours + " Hours")}`
    }
    $("#" + type).append(
    `<div class="box-learning">
      <h4>${obj.name} 
        <a href="${(obj.type == CERTIFICATION)?obj.link:obj.image}" target="_blank" rel="noreferrer">
          <i class="material-icons md-18">open_in_new</i>
        </a>
      </h4>
      <p>${obj.institution}</p>
      ${(obj.type == CERTIFICATION)?"<p>" + obj.certificationId + "</p>":""}
      <p>${period}</p>
    </div>`);
  }
  
});