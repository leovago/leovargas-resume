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
    image: "img/scrum-master-cert.webp",
    imageAlt: "Scrum Master Accredited Certification Diploma",
    imageSize: [300, 225],
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
    image: "img/resp-web-des-cert.webp",
    imageAlt: "freeCodeCamp Web Design Certification Diploma",
    imageSize: [300, 169],
    link: "https://www.freecodecamp.org/certification/fccd950f534-84e4-4c60-9aae-b49ea26c70da/responsive-web-design",
    institution: "freeCodeCamp",
    certificationId: "",
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
    image: "img/js-alg-n-str-cert.webp",
    imageAlt: "freeCodeCamp JavaScript Algorithms and Data Structures Certification Diploma",
    imageSize: [300, 169],
    link: "https://www.freecodecamp.org/certification/fccd950f534-84e4-4c60-9aae-b49ea26c70da/javascript-algorithms-and-data-structures",
    institution: "freeCodeCamp",
    certificationId: "",
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
    image: "img/front-end-libs-cert.webp",
    imageAlt: "freeCodeCamp Front End Libraries Certification Diploma",
    imageSize: [300, 169],
    link: "https://www.freecodecamp.org/certification/fccd950f534-84e4-4c60-9aae-b49ea26c70da/front-end-libraries",
    institution: "freeCodeCamp",
    certificationId: "",
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
    image: "img/data-vis-cert.webp",
    imageAlt: "freeCodeCamp Data Visualization Certification Diploma",
    imageSize: [300, 169],
    link: "https://www.freecodecamp.org/certification/fccd950f534-84e4-4c60-9aae-b49ea26c70da/data-visualization",
    institution: "freeCodeCamp",
    certificationId: "",
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
    image: "img/apis-n-msvcs-cert.webp",
    imageAlt: "freeCodeCamp APIs and Microservices Certification Diploma",
    imageSize: [300, 169],
    link: "https://www.freecodecamp.org/certification/fccd950f534-84e4-4c60-9aae-b49ea26c70da/apis-and-microservices",
    institution: "freeCodeCamp",
    certificationId: "",
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
    image: "img/pt-inst-n-ctrl-dip.webp",
    imageAlt: "Professional Technician in Instrumentation and Control Diploma",
    imageSize: [169, 300],
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
    image: "img/dp-prog.webp",
    imageAlt: "Diploma in Programming",
    imageSize: [300, 225],
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
    image: "img/dp-pm.webp",
    imageAlt: "Diploma in Project Management",
    imageSize: [300, 225],
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
    image: "img/dp-high-perf-teams.webp",
    imageAlt: "Diploma in High-Performance Teams",
    imageSize: [300, 225],
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
    image: "img/dp-sw-dev-processes.webp",
    imageAlt: "Diploma in Software Development Processes",
    imageSize: [300, 225],
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
    image: "img/dp-win-n-lnx-ntwks.webp",
    imageAlt: "Diploma in Windows and Linux Networking",
    imageSize: [300, 225],
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
    imageSize: [300, 225],
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
    image: "https://www.coursera.org/account/accomplishments/certificate/8JR8HPLN6KYG",
    imageSize: [300, 225],
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
    image: "https://www.coursera.org/account/accomplishments/certificate/YAWT3KJNT5YQ",
    imageSize: [300, 225],
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
    type: TRAINING,
    name: "HTML Fundamentals",
    image: "img/sl-html.jpg",
    imageAlt: "SoloLearn Certificate on HTML Fundamentals",
    imageSize: [300, 225],
    link: "https://www.sololearn.com/Certificate/1014-11393294/pdf/",
    institution: "SoloLearn",
    certificationId: "1014-11393294",
    periodType: HOURS,
    startYear: 0,
    endYear: 2020,
    startMonth: 0,
    endMonth: 1,
    hours: 0
  },
  {
    type: TRAINING,
    name: "CSS Fundamentals",
    image: "img/sl-css.jpg",
    imageAlt: "SoloLearn Certificate on CSS Fundamentals",
    imageSize: [300, 225],
    link: "https://www.sololearn.com/Certificate/1023-11393294/pdf/",
    institution: "SoloLearn",
    certificationId: "1023-11393294",
    periodType: HOURS,
    startYear: 0,
    endYear: 2020,
    startMonth: 0,
    endMonth: 1,
    hours: 0
  },
  {
    type: TRAINING,
    name: "JavaScript",
    image: "img/sl-js.jpg",
    imageAlt: "SoloLearn Certificate on JavaScript",
    imageSize: [300, 225],
    link: "https://www.sololearn.com/Certificate/1024-11393294/pdf/",
    institution: "SoloLearn",
    certificationId: "1024-11393294",
    periodType: HOURS,
    startYear: 0,
    endYear: 2020,
    startMonth: 0,
    endMonth: 1,
    hours: 0
  },
  {
    type: TRAINING,
    name: "Phyton 3",
    image: "img/sl-phyton3.jpg",
    imageAlt: "SoloLearn Certificate on Phyton 3",
    imageSize: [300, 225],
    link: "https://www.sololearn.com/Certificate/1073-11393294/pdf/",
    institution: "SoloLearn",
    certificationId: "1073-11393294",
    periodType: HOURS,
    startYear: 0,
    endYear: 2020,
    startMonth: 0,
    endMonth: 2,
    hours: 0
  },
  {
    type: CERTIFICATION,
    name: "",
    image: "",
    imageAlt: "",
    imageSize: [300, 225],
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
    imageSize: [300, 225],
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
        `<img src="${obj.image}" alt="${obj.imageAlt}" loading="lazy" width=${obj.imageSize[0]} height=${obj.imageSize[1]}/>`
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
      ${(obj.type == CERTIFICATION && obj.certificationId != "")?"<p>" + obj.certificationId + "</p>":""}
      <p>${period}</p>
    </div>`);
  }

    if ("serviceWorker" in navigator) {
        window.addEventListener("load", function() {
            navigator.serviceWorker
                .register("./serviceWorker.js")
                .then(res => console.log("service worker registered"))
                .catch(err => console.log("service worker not registered", err))
        })
    }

  
});