const userData = {
  githubUsername: "lucavg",
  name: "Luca Van Genechten",
  designation: "Flutter Developer",
  avatarUrl: "/avatar.jpg",
  email: "lucavg@icloud.com",
  phone: "+32 471016602",
  address: "Vorselaar, Antwerp, Belgium.",
  // TODO: change projects
  projects: [
    {
      key: "pfa",
      title: "Portfolio Application",
      link: "https://github.com/lucavg/next-js-portfolio",
      imgUrl: "/tmk.jpg",
      publicProject: true,
    },
    {
      key: "cgol",
      title: "Conway's Game of Life",
      link: "https://github.com/lucavg/next-js-portfolio",
      imgUrl: "/tmk.jpg",
      publicProject: true,
    },
    {
      key: "fba",
      title: "Flutter Beer App",
      link: "https://github.com/lucavg/flutter-beer-app",
      imgUrl: "/tmk.jpg",
      publicProject: true,
    },
  ],
  about: {
    title: "Just a student who loves to code!",
    description: [
      `Hi! My name is Luca Van Genechten, a student in Application Development at Thomas More Geel. I previously studied 2 years at Karel de Grote University College in Antwerpen, but I later made the switch to Thomas More, where I am currently in my final year.`,
      `My favorite subject in IT is application development, specifically using React Native or Flutter. My knowledge of the IT spectrum is quite wide, but my passion lies in mobile development.`,
      `My hobbies are programming, Dungeons & Dragons, padel, and I often go swimming as well.`,
    ],
    // TODO: update project
    currentProject: "Tour de icapps",
    currentProjectUrl: "https://flutter-tour-d-icapps.web.app/",
  },
  // TODO: update experience
  experience: [
    {
      title: "IT Services & SAP",
      company: "Hout Luyten Morkhoven",
      year: "2020-2022",
      companyLink: "http://www.houtluyten.be/",
      desc:
        "At Hout Luyten my job consisted of assisting with the transition from the old ERP system (SDP) to the current system used by Hout Luyten (SAP Business One 9.3). My tasks mostly consisted of entering articles into the system and making sure all the data was accounted for." +
        " During this time I also had the privilege of joining business meetings that consisted of the general management at Hout Luyten and representatives of SAP.",
    },
    {
      title: "Website Maintenace & Registration",
      company: "Chiro Vorselaar",
      year: "2018-now",
      companyLink: "http://www.chiro-vorselaar.be/",
      desc: "Our team of 3 leaders are responsible for maintaining and editing the website of Chiro Vorselaar. With my peers, we successfully enabled our members to register online for general registration and camps during the Covid-19 epidemic.",
    },
    {
      title: "IT Helpdesk & SAP",
      company: "Ecover Malle",
      year: "2018",
      companyLink: "https://www.ecover.com/be-nl/",
      desc: "I assisted in the migration from an on-premise working environment to a cloud-based environment using SAP Fiori. I also helped with designing a modern, sleek user interface for the SAP Fiori environment.",
    },
  ],
  // TODO: change resume URL
  resumeUrl:
    "https://drive.google.com/file/d/1xmE3BOmgM7TAOOgVp36xQIQvYDntDYoo/view?usp=sharing",
  socialLinks: {
    instagram: "https://www.instagram.com/lucavangenechten",
    twitter: "https://twitter.com/LucaVGTM",
    linkedin: "https://www.linkedin.com/in/luca-van-genechten-560b36212/",
    github: "https://github.com/lucavg",
  },
};

export default userData;
