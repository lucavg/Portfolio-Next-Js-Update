const userDataEn = {
  githubUsername: "lucavg",
  name: "Luca Van Genechten",
  designation: "Full-Stack Developer",
  avatarUrl: "/avatar.jpg",
  email: "lucavg@icloud.com",
  phone: "+32 471016602",
  address: "Vorselaar, Antwerp, Belgium.",
  about: {
    title: "Just a developer who loves to code!",
    description: [
      `Hi! My name is Luca Van Genechten, currently acquiring my bachelor in Application Development at Thomas More Geel. I previously studied 2 years at Karel de Grote University College in Antwerpen, but I later made the switch to Thomas More, where I am currently in my final year.`,
      `My favorite subject in IT is application development, specifically using Flutter. My knowledge of the IT spectrum is quite wide, though I still learn on a daily basis and intend to keep doing so.`,
      `My hobbies are programming, Dungeons & Dragons, padel, and I often go swimming as well. I'm also a music lover and I am currently working on a collection of vinyl.`,
    ],
    currentProject: "VinylVault 💿",
    currentProjectUrl: "https://angularnetvinyl.azurewebsites.net/",
  },
  experience: [
    {
      title: "Internship Flutter Developer",
      company: "icapps Antwerp",
      year: "2023",
      date: "Februari - May",
      companyLink: "https://icapps.com/",
      desc: 'During my 13-week internship at <b>icapps</b>, I worked as a <b>Flutter Developer</b> on the "Tour de icapps" project, focusing on <b>Flutter for Web</b> development. I worked on this project as a Flutter developer to <b>design</b> and <b>implement</b> features, <b>optimize</b> performance, and ensure a seamless user experience. It was a valuable opportunity to refine my <b>Flutter</b> skills and gain hands-on experience in cross-platform app development.',
    },
    {
      title: "IT Services & SAP",
      company: "Hout Luyten Morkhoven",
      year: "2020-2022",
      companyLink: "http://www.houtluyten.be/",
      desc:
        "At Hout Luyten my job consisted of assisting with the transition from the old <b>ERP system</b> (SDP) to the current system used by Hout Luyten (<b>SAP Business One 9.3</b>). My tasks mostly consisted of entering articles into the system and making sure all the data was accounted for." +
        " During this time I also had the privilege of joining <b>business meetings</b> that consisted of the general management at Hout Luyten and representatives of SAP.",
    },
    {
      title: "Website Maintenace & Registration",
      company: "Chiro Vorselaar",
      year: "2018-now",
      companyLink: "http://www.chiro-vorselaar.be/",
      desc: "Our team of 3 leaders are responsible for <b>maintaining</b> and <b>editing</b> the website of Chiro Vorselaar. With my peers, we successfully enabled our members to <b>register</b> online for general registration and camps during the Covid-19 epidemic.",
    },
    {
      title: "IT Helpdesk & SAP",
      company: "Ecover Malle",
      date: "Februari",
      year: "2018",
      companyLink: "https://www.ecover.com/be-nl/",
      desc: "I assisted in the migration from an <b>on-premise</b> working environment to a <b>cloud-based environment</b> using <b>SAP Fiori</b>. I also helped with <b>designing</b> a modern, sleek user interface for the SAP Fiori environment.",
    },
  ],
  resumeUrl:
    "https://drive.google.com/file/d/1BryYhwZw4c0bczsJLKeDo-pyx70kVkaE/view?usp=share_link",
  socialLinks: {
    instagram: "https://www.instagram.com/lucavangenechten",
    twitter: "https://twitter.com/LucaVGTM",
    linkedin: "https://www.linkedin.com/in/luca-van-genechten/",
    github: "https://github.com/lucavg",
  },
  projects: [
    {
      title: "CAD-Dieren",
      favourite: true,
      imgUrl: "/CAD.png",
      category: "Web Development",
      tags: ["Angular", "Nest JS", "MongoDB", "TypeScript"],
      githubLink: "https://github.com/lucavg/CAD-Dieren",
      project:
        "CAD is a beautiful one-woman <b>animal protection service</b>, led by my aunt Sophie Vandenbroucke. The current CAD website is very archaic and simple and requires manual editing to update each page. I was tasked with renewing this website in order to <b>improve the user experience</b>, not only for visitors of the website but also for my aunt, the administrator of the website. At her request, I am currently recreating the entire website with newer technologies such as <b>Angular</b>, while maintaining the old and beloved feel of the previous rendition.",
      image: "/projectsProof/CAD.png",
      development:
        "In order to complete this project, there are a few technologies I will be using. For the front-end of the website, I will be using the <b>Angular</b> framework as it is very simple to use and provides exactly what we need to <b>recreate</b> the <b>look and feel</b> of the old website. The current database of the website is made using <b>dBase 2</b>, which is nearly 20 years old and very much out of date. A modern replacement that I will be using for this is the <b>Nest JS</b> framework, which not only provides us with a handy <b>SQL database</b> to store all of our old data in, but also provides an API to <b>handle communication</b> between front- and back-end. Finally, I will be using <b>Tailwind CSS</b> for the styling as it is easy to use, lightweight and provides beautiful styling.",
      learned:
        "What I have learned from this project is that creating a website is not to be underestimated. There were several <b>obstacles</b> that I encountered during the project which proved to be quite annoying to deal with, such as <b>designing</b> a modern replacement for the website while retaining the old look and feel, as well as handling data from a 20-year old database. Another major obstacle was how <b>separated and chaotic</b> the data was when I first received it. There was some structure to be found but data was usually just strewn about. Nonetheless, this project provided me with a sense of <b>autonomy</b> and <b>self-governance</b>. I was able to work on this project at my own pace and I was able to make my own decisions regarding the design and implementation of the website. All in all, this project was a great learning experience and I am very proud of the result so far. I am excited to see the final results.",
    },
    {
      title: "Flutter Beer App",
      favourite: true,
      imgUrl: "/icapps.png",
      category: "Mobile Development",
      tags: ["Flutter", "Dart", "Flutter for Web", "Drift"],
      githubLink: "https://github.com/lucavg/flutter-beer-app",
      shortDescription: "A sporty app for a sporty company",
      project:
        "When I first started my internship at icapps, I received an <b>onboarding program</b> which consisted of a starter project. This project was meant to teach me the basics of <b>Flutter</b> and how to use it to create a fully fledged application. The project was a <b>beer database</b>, where I could store my favorite beers and give them a rating. The project was a great way to learn the basics of Flutter and how to use it to create a fully fledged application.",
      image: "/projectsProof/beer.png",
      development:
        "The project itself is developed entirely using Flutter, which is a <b>cross-platform framework</b> developed by Google. Flutter is a very powerful framework that allows you to create applications for both Android and iOS using a <b>single codebase</b>. This means that you only have to write the code once and it will work on both platforms. The project also uses <b>Drift</b>, which is a Dart package that can be used to create local databases using <b>SQL</b>. This is what I used to store all of the data for the beers locally, as well as the rating each beer received.",
      learned:
        "What I learned from this project is how to use Flutter to create a fully fledged application. I learned how to use the different widgets that Flutter provides, in which situation I can use each widget to its <b>best potential</b> and how to use the different packages that Flutter provides. I also learned how to use the <b>Dio</b> and <b>Retrofit</b> packages to make API calls to an online API, as well as how to use <b>Drift</b> to create a local database. All in all, this project was a great way to <b>learn the basics</b> of Flutter and how to use it to create a fully fledged application.",
    },
    {
      title: "Conway's Game of Life",
      favourite: true,
      imgUrl: "/game_of_life_glider.gif",
      participants: 2,
      category: "Desktop Application",
      tags: ["Java", "JavaFX", "Java Swing", "Java AWT", "Other"],
      githubLink: "https://github.com/lucavg/Game_of_Life",
      project:
        "In cooperation with a fellow student at <b>Karel de Grote</b> college in Antwerp, I created an application based on <b>Conway's Game of Life</b>. It is fully written using <b>Java</b> and recreates a fully fledged <b>living colony of pixels</b>. The concept of Conway's Game of Life is quite simple. It is a <b>cellular automaton</b>, which means that it consists of a grid of cells that can be either alive or dead. The cells evolve over time, depending on the state of their neighbors. <br/><br/> The <b>rules</b> are as follows: <ol><li>1. Any live cell with fewer than two live neighbors dies, as if by underpopulation.</li><li>2. Any live cell with two or three live neighbors lives on to the next generation.</li><li>3. Any live cell with more than three live neighbors dies, as if by overpopulation.</li><li>4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.</li></ol><br/> The goal of the game is to create a colony of cells that can survive for as long as possible. The game is over when all cells are dead. Using the power of Java, we were able to recreate this game in a fully fledged application. A user can paint a grid of cells and start the game to see how the cells evolve over time.",
      image: "/projectsProof/game_of_life.png",
      development:
        "During the development of this project, we used Java to create the application. We used <b>JavaFX</b> to create the GUI, <b>Java Swing</b> to create the grid of cells and <b>Java AWT</b> to create the menu bar. Finally, we introduced a <b>load and save</b> functionality which allowed users to save their favorite cell grids as well as load in a variety of <b>preset grids</b> to experiment with. This gave us the final result of a fully fledged application that could simulate Conway's Game of Life.",
      learned:
        "What I learned from this project is how to use Java to create a fully fledged application. I learned how to use the different classes that Java provides, in which situation I can use each class to its <b>best potential</b> and how to use the different packages that Java provides. All in all, this project was a great way to learn the basics of Java and how to use it to create a fully fledged desktop application.",
    },
    {
      title: "DevOps Case Study",
      favourite: false,
      imgUrl: "/selenium.png",
      category: "Desktop Application",
      tags: ["C#", "Selenium", ".NET Core", "Dev Ops"],
      githubLink: "https://github.com/lucavg/DevOpsCaseStudy",
      project:
        "During my second year at Thomas More Geel, I was tasked with creating a <b>case study</b> for the course DevOps. The goal of this project was to create a <b>.NET Core</b> application that could search for subjects on sites like <b>Youtube</b>, scrape the resulting searches and write those results to a file. This project provided me with knowledge about <b>Selenium</b>, which I previously had no experience with. The main goal of this project was to learn how the concept of <b>web scraping</b> works and how to implement it in a <b>.NET Core</b> project.",
      image: "/projectsProof/webscraper.png",
      development:
        "To get started on this project, I first researched <b>Selenium</b> and its applications thoroughly. I learned that Selenium can be used for a variety of purposes, such as <b>testing, web scraping and more</b>. I also learned that Selenium can be used in a variety of languages, such as <b>Java, C#, Python</b> and more, but for this course our choice was limited to <b>C#</b>, or more specifically <b>.NET Core</b>. After thorough research, I decided to put my knowledge to the test and create a simple application that could search for subjects on <b>Youtube</b> and write those results to a file. I used the Selenium <b>NuGet package</b> to implement the functionality of Selenium in my application. I also used the <b>Selenium Chrome Driver</b> to allow Selenium to use the Chrome browser to search for subjects on Youtube. Finally, I used a <b>StreamWriter</b> object to write the results to a CSV file, which would then be stored on a specific folder. Finally, once I was able to get one site to work, I expanded this functionality by adding more sites to the application, such as <b>Indeed</b> and <b>YgoProDeck</b>.",
      learned:
        "Throughout this project, I have acquired valuable knowledge and skills. This project introduced me to the world of <b>web scraping</b> and more specifically Selenium, a versatile tool with applications ranging from <b>testing to web data extraction</b>. I delved into extensive research to understand the fundamentals of Selenium, discovering its compatibility with various programming languages but specifically Java, C#, and Python. Given the project's scope, I focused on implementing Selenium in a <b>.NET Core</b> environment, leveraging the Selenium NuGet package and the Selenium Chrome Driver to interact with the Chrome browser for web searches. As the project progressed, I expanded the application's functionality by incorporating additional sites, such as Indeed and YgoProDeck, thus broadening my knowledge in web scraping and enhancing my ability to develop <b>robust</b> and <b>versatile</b> data-driven applications.",
    },
    {
      title: "Portfolio Application",
      favourite: false,
      imgUrl: "/logoportfolio.png",
      category: "Web Development",
      tags: ["React", "Next.js", "Tailwind", "Vercel"],
      hyperLink: "https://lucavangenechten.com/",
      githubLink: "https://github.com/lucavg/Portfolio-Next-Js-Update",
      project:
        "A portfolio application developed for the course <b>Professional Skills</b> at Thomas More Geel. This is meant to be a digital version of a <b>resume</b>, fully programmed using <b>Next.js</b>. The goal of this project is to develop a portfolio application that can be used to showcase my skills and projects in a <b>professional fashion</b>. The application is meant to be a digital version of a resume, fully programmed in <b>Next.js</b> and <b>React</b>. The application is also meant to be fully <b>responsive</b>, meaning that it can be viewed on any device, ranging from a mobile phone to a desktop computer. Once developed, this project will then serve as my <b>digital resume</b>.",
      development:
        'During the development of this project we were given the choice to use any framework we wanted. I chose to use <b>Next.js</b> as it is a very powerful framework that allows you to create a fully fledged web application. I also used <b>React</b> to create the components of the application. Finally, I used <b>Tailwind CSS</b> for the styling as it is easy to use, lightweight and provides beautiful styling. Along the way, I <b>experimented</b> with a variety of different packages, such as <b>next-intl</b>, <b>react-simple-animate</b> and more. These packages allowed me to add additional functionality to the application, such as a <b>fade-in animations</b> and <b>localization</b>. Once I had a first version of the application, I deployed it using <b>Vercel</b>, which is a platform that allows you to deploy your application with ease. Finally, I purchased a domain name under the name "lucavangenechten.com", which I then linked to my Vercel deployment.',
      learned:
        "What I learned during this project is how to use Next.js to create a fully fledged application. I learned how to use the different components that Next.js provides, in which situation I can use each component to its <b>best potential</b> and how to use the different packages that Next.js provides. I also learned how to <b>create</b> my own <b>components</b> and how to use Tailwind CSS to <b>style</b> those components. All in all, this project was a great way to learn the basics of Next.js and how to use it to create a web application.",
    },
    {
      title: "Cordova Application",
      favourite: false,
      imgUrl: "/chiro.png",
      category: "Mobile Development",
      tags: ["Cordova", "JavaScript", "HTML", "CSS"],
      githubLink:
        "https://github.com/itfactory-tm/2021_2022_2appai_cordova-lucavg",
      project:
        "This Cordova application was developed for the course Cordova at Thomas More Geel. The application is meant for the administrators and leaders of <b>Chiro Vorselaar</b>, who can use the app to connect to an online database on our website to <b>mark off members</b> as present, as well as <b>look up</b> their <b>personal data</b>.",
      development:
        "I started development on this application by <b>researching</b> Cordova and its applications thoroughly. I learned that Cordova can be used to create mobile applications using HTML, CSS and JavaScript. I also learned that Cordova can be used to create applications for both <b>Android and iOS</b>, which is what I did for this project. The main goal of this project was to learn how the concept of Cordova works and how to implement it in a mobile application.",
      learned:
        "This project proved to me how <b>out of date</b> Cordova is. The application was very <b>slow</b> and <b>unresponsive</b>, and it was very difficult to implement the functionality that I wanted. I also learned that Cordova is <b>not very well documented</b>, which made it even more difficult to properly develop features. All in all, this project was a great way to learn the basics of Cordova and how to use it to create a mobile application. I now know however for <b>future projects</b> that if I want to develop a mobile application, I'll probably use <b>Flutter</b> instead of Cordova.",
    },
    {
      title: "Project 4.0",
      favourite: false,
      imgUrl: "/projectsProof/elysium.png",
      participants: 5,
      category: "Full Stack Development",
      tags: ["Next.js", "Tailwind", "Java", "Spring", "AWS"],
      fileLink: "/projectsProof/Final_Documentation_Project_Elision.pdf",
      videoLink: "https://www.youtube.com/watch?v=ozv3I7oN9qw",
      project:
        "<b>Elision</b> has tasked us to create a state-of-the-art, composable <b>e-commerce platform</b> that is <b>scalable, connected</b>, and provides the <b>best experience</b> to customers. The platform will be built using <b>Next.js</b>, with <b>React</b> as the JavaScript library for the user interface. The backend will be Java-based, using the <b>Spring (Boot)</b> framework, with REST APIs facilitating communication between the database, backend, and frontend. The platform will be hosted in the cloud using <b>AWS</b>, and a relational database will be used.<br /><br /> External services such as search capabilities via <b>Algolia</b>, CMS via <b>Contentful</b> and <b>recommendation engines</b> will be chosen based on research, consulting with coaches, and evaluating their value proposition.<br /><br />The project will be divided into two main specializations: <b>App/AI development</b> and <b>Infrastructure</b>. App/AI development will focus on developing the web application using <b>Java</b> and <b>Spring Boot</b>, setting up APIs and interfaces, integrating external services, and creating search capabilities, and recommendation engines. Infrastructure will focus on configuring and managing the cloud-based infrastructure on <b>AWS</b>, database, and addressing issues such as privacy, security, communication, backup, and database selection.",
      development:
        "The primary goal of the project is to create a state-of-the-art, composable <b>e-commerce platform</b> that is scalable, connected, and provides the best experience to customers. This will be achieved by:<br><br>&#x2022;&emsp;Developing a web application using a <b>progressive web app (PWA) framework</b>, Next.js, and React as the JavaScript library for the user interface.<br>&#x2022;&emsp;Building a <b>scalable and connected backend</b> using Java, Spring (Boot) framework, and REST APIs that <b>facilitate communication</b> between the database, backend, and frontend.<br>&#x2022;&emsp;Selecting and <b>integrating external services</b> such as search capabilities via Algolia, CMS via Contentful, and recommendation engines that add value to the platform.<br>&#x2022;&emsp;<b>Hosting</b> the platform in the <b>cloud</b> and selecting a relational database to store and manage data.<br>&#x2022;&emsp;<b>Configuring and managing</b> the <b>cloud-based infrastructure</b> and addressing issues such as privacy, security, communication, backup, and database selection.<br><br>The successful completion of the project will result in a scalable, connected, and composable e-commerce platform that provides customers with an <b>exceptional shopping experience</b>. The platform will be built using modern web technologies, hosted in the cloud, and integrated with external services that add value to the platform. The project will also provide an opportunity for students to <b>develop</b> their <b>skills</b> in web application development and cloud infrastructure management.",
      learned:
        "In summary, our team has <b>successfully achieved</b> the objectives of the project by developing a composable e-commerce platform. We utilized Next.js and a Java-based backend, with REST APIs to connect the database, backend, and frontend. After <b>thorough research</b>, <b>evaluation</b>, and <b>consultation</b> with coaches, we integrated external services like Algolia, Contentful, and recommendation engines, which significantly enhanced the platform's functionality. Despite initial challenges, we were able to complete all <b>must-haves</b> and <b>should-haves</b> within the project timeline, displaying <b>great teamwork</b> and <b>communication</b> skills throughout, despite one team member's departure.<br><br>Nevertheless, due to <b>time constraints</b>, we could not allocate more time to <b>polish</b> the platform. We acknowledge that the platform could have benefited from <b>SonarQube/unit tests</b>, which could have improved the <b>overall quality</b> and <b>functionality</b> of the platform. However, given the time we had, we believe that we did our best.<br><br>Overall, our team's ability to choose and incorporate external services, create a <b>scalable and well-connected</b> infrastructure, and <b>manage communication</b> effectively resulted in the final product. We are <b>proud</b> to have developed a modern e-commerce platform that can be of immense value to businesses.",
    },
    {
      title: "PHP Project",
      favourite: false,
      imgUrl: "/php_project.png",
      participants: 6,
      category: "Full Stack Development",
      tags: ["PHP", "Laravel", "MySQL", "HTML", "CSS"],
      githubLink: "https://github.com/itfactory-tm/2022-ProjectPHP-302",
      project:
        "A <b>consulting bureau</b> application made with <b>Laravel</b> and <b>PHP</b>, developed in cooperation with 5 of my fellow students. This project provided me with a great sense of what it's like to work in group, as well as working with a client.",
      development:
        "During the development of this project, I was assigned as the <b>SCRUM master</b>, as well as assisting in the development of the application. I was responsible for the <b>planning</b> of the project as well as the <b>daily standups</b>. I also provided a large chunk of the <b>development</b> of the application, which was made using Laravel and PHP. I also assisted in the creation of the <b>database</b>, which was made using MySQL. Finally, I assisted in the creation of the <b>front-end</b> of the application, which was made using PHP and styled using <b>Bootstrap</b>. Currently, the repository for this project is set to <b>private</b> and is thus <b>not accessible</b>.",
      learned:
        "What I learned from this project is the <b>importance</b> of <b>teamwork</b>. In order to achieve a fully finished project, <b>teamwork</b> and <b>communication</b> are a must. This was something I felt was <b>lacking</b> in this project, as there was a lot of <b>miscommunication</b> between the team members. This resulted in a lot of <b>confusion</b> and <b>frustration</b>, which could have been avoided if we had communicated better. All in all, this project was a great way to learn the basics of teamwork and communication, as well as how to use Laravel and PHP.",
    },
    {
      title: "Requirements Analysis",
      favourite: false,
      imgUrl: "/UML.png",
      participants: 6,
      category: "Other",
      tags: [
        "UML",
        "Requirements Analysis",
        "Design Report",
        "Analysis Report",
      ],
      image: "/projectsProof/eisenanalyse.png",
      fileLink:
        "/projectsProof/Analyse-en-ontwerprapport_volledig_sjabloon.pdf",
      project:
        "An analysis and design report made for the course <b>Requirements Analysis</b> during my second year at Thomas More Geel. The report details how to create an application for an <b>alumni night</b>. During this project we were required to plan out a <b>complete analysis and design report</b> as this was meant to become a basis for other groups to build upon in the continuation of this project: <b>Project PHP</b>.",
      development:
        "We are conducting an <b>analysis</b> to <b>organize</b> alumni nights more <b>efficiently</b> and better. The client would like a new system because currently it is <b>not structured</b>, and <b>problems</b> regularly <b>arise</b> due to data not being entered. Currently they use <b>Excel</b> files; they would like to replace these in the future with a better way.<br><br>Every year an alumni evening is organized where <b>former students</b> are invited to tell more about their daily job within IT. Currently all near graduates are first <b>asked</b> if they still want to be <b>contacted</b> by the college. A <b>list</b> of these is made by the alumni person in charge of a program.<br><br>The alumni responsible then keeps a list of those who let it be known that they can come. Then a <b>reminder</b> to all alumni who have not let us know 2 weeks before the evening is sent. After this, <b>speed dates</b> are organized where sophomores can speak with about 3 alumni, preferably with the <b>same major</b>. Classrooms will be <b>allocated</b> based on the number of alumni and students per direction.<br><br>At the end of the evening there will be an <b>informal drink</b> supported by colleagues who have signed up for this. In previous editions, regular data not/erroneously was occasionally inserted due to miscommunication, et cetera. In our current version, this should not occur.",
      learned:
        "What this project taught me was the <b>importance of planning</b> a project, as well as <b>agreeing on functionalities</b> with your customer. Because none of us were proficient in planning out a <b>large-scale project</b> such as this, we had to learn how to do so. This was a great learning experience for all of us, as we were able to plan out a decent analysis and design, as well as improve our communication skills.",
    },
  ],
  internshipDescription: [
    'During my 13-week internship at <b>icapps</b>, I had the opportunity to work as a <b>Flutter Developer</b> on the "<b>Tour de icapps</b>" project, which focused on developing a <b>Flutter for Web</b> application. The Tour de icapps is a <b>competition</b> organized to run parallel to the <b>Tour de France</b>, consisting of multiple <b>stages</b> with <b>challenges</b> for participating teams.',
    "As the sole developer assigned to the project, I took on the <b>responsibility</b> of creating the Tour de icapps application from start to finish. Throughout the internship, I received valuable guidance and support from my team members, who provided me with insights and expertise to ensure the success of the project. My role involved leveraging my proficiency in <b>Flutter</b> to implement a dynamic and engaging user interface for the Tour de icapps application.",
    "During the development process, I encountered various <b>challenges</b> that required <b>problem-solving</b> skills and <b>adaptability</b>. I successfully addressed these challenges by collaborating with my team, conducting research, and applying industry best practices to optimize the application's performance.",
    "Working on the Tour de icapps project allowed me to enhance my expertise in <b>Flutter for Web</b> development and gain hands-on experience in working independently on a significant project. It strengthened my ability to <b>manage</b> timelines, <b>prioritize</b> tasks, and deliver <b>high-quality</b> results within a dynamic environment.",
    "In the following documents, you can find the result of this wonderful journey, as well as the process I went through to get there and my view on the journey.",
  ],
  fadeImages: [
    {
      url: "/screenshots/home.png",
      caption: "Home Page",
    },
    {
      url: "/screenshots/authorization.png",
      caption: "Authorization Page",
    },
    {
      url: "/screenshots/team_select.png",
      caption: "Team Select Page",
    },
    {
      url: "/screenshots/tournament.png",
      caption: "Tournament Page",
    },
  ],
  skills: {
    programming: {
      title: "Programming",
      skills: [
        { name: "Flutter", score: 83 },
        { name: "Angular", score: 72 },
        { name: "Java", score: 75 },
        { name: "ASP.NET", score: 70 },
        { name: "MySQL", score: 80 },
        { name: "MongoDB", score: 62 },
        { name: "Nest JS", score: 76 },
        { name: "Next JS", score: 70 },
        { name: "React", score: 70 },
      ],
    },
    other: {
      title: "Other",
      skills: [
        { name: "Windows (server)", score: 56 },
        { name: "Linux", score: 69 },
        { name: "Firebase", score: 73 },
        { name: "Agile", score: 57 },
        { name: "Scrum", score: 62 },
      ],
    },
    softSkills: {
      title: "Soft Skills",
      skills: [
        { name: "Teamwork", score: 80 },
        { name: "Communication", score: 62 },
        { name: "Problem Solving", score: 75 },
        { name: "Time Management", score: 70 },
      ],
    },
    languages: {
      title: "Languages",
      skills: [
        { name: "Dutch", score: 90 },
        { name: "English", score: 85 },
        { name: "French", score: 55 },
      ],
    },
  },
};

export default userDataEn;
