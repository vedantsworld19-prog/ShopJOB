const defined_colors=['#00d9ff','#ff006e','#FFD600','#bbf7d0','#00d9ff','#ff006e'];
const R={
frontend:{title:"Frontend Wizard",tag:"HOT 🔥",tagBg:"#FFD600",salary:"$80k - $150k",desc:"Your complete roadmap from zero to getting hired as a Frontend Developer.",phases:[
{name:"HTML & CSS Foundations",skills:["HTML5 Semantics","CSS Flexbox & Grid","Responsive Design","Accessibility"],courses:[
{t:"Responsive Web Design",p:"freeCodeCamp",u:"https://www.freecodecamp.org/learn/2022/responsive-web-design/",free:true},
{t:"HTML CSS Complete Course",p:"Udemy",u:"https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/",free:false}]},
{name:"JavaScript Mastery",skills:["ES6+","DOM Manipulation","Async/Await","Fetch API"],courses:[
{t:"JavaScript Algorithms & DS",p:"freeCodeCamp",u:"https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/",free:true},
{t:"The Complete JavaScript Course",p:"Udemy",u:"https://www.udemy.com/course/the-complete-javascript-course/",free:false}]},
{name:"React & Frameworks",skills:["React","Next.js","State Management","Component Patterns"],courses:[
{t:"React - The Complete Guide",p:"Udemy",u:"https://www.udemy.com/course/react-the-complete-guide-incl-redux/",free:false},
{t:"Full Stack Open",p:"University of Helsinki",u:"https://fullstackopen.com/en/",free:true}]},
{name:"Tooling & Testing",skills:["Git & GitHub","Webpack/Vite","Jest","CI/CD Basics"],courses:[
{t:"Git & GitHub Crash Course",p:"Udemy",u:"https://www.udemy.com/course/git-and-github-bootcamp/",free:false},
{t:"Testing JavaScript",p:"Testing JS",u:"https://testingjavascript.com/",free:false}]},
{name:"Portfolio & Projects",skills:["Personal Website","3+ Real Projects","Open Source","Technical Blog"],courses:[
{t:"Build Responsive Websites",p:"Scrimba",u:"https://scrimba.com/learn/responsive",free:true},
{t:"Frontend Mentor Challenges",p:"Frontend Mentor",u:"https://www.frontendmentor.io/",free:true}]},
{name:"Interview & Get Hired",skills:["DSA Basics","System Design","Behavioral Prep","Networking"],courses:[
{t:"Frontend Interview Prep",p:"GreatFrontEnd",u:"https://www.greatfrontend.com/",free:false},
{t:"JavaScript Interview Prep",p:"Udemy",u:"https://www.udemy.com/course/js-interviews/",free:false}]}
],certs:[
{t:"Meta Front-End Developer Certificate",p:"Coursera / Meta",u:"https://www.coursera.org/professional-certificates/meta-front-end-developer"},
{t:"Responsive Web Design Certification",p:"freeCodeCamp",u:"https://www.freecodecamp.org/learn/2022/responsive-web-design/"},
{t:"Front End Libraries Certification",p:"freeCodeCamp",u:"https://www.freecodecamp.org/learn/front-end-development-libraries/"}]},

backend:{title:"Backend Overlord",tag:"",tagBg:"",salary:"$90k - $170k",desc:"Master server-side development from scratch to production-ready systems.",phases:[
{name:"Pick a Language",skills:["Python or Node.js","Variables & Logic","OOP Basics","CLI Tools"],courses:[
{t:"Python for Everybody",p:"Coursera / UMich",u:"https://www.coursera.org/specializations/python",free:true},
{t:"The Complete Node.js Course",p:"Udemy",u:"https://www.udemy.com/course/the-complete-nodejs-developer-course-2/",free:false}]},
{name:"Databases",skills:["SQL (PostgreSQL)","NoSQL (MongoDB)","ORMs","Data Modeling"],courses:[
{t:"SQL for Data Science",p:"Coursera / UC Davis",u:"https://www.coursera.org/learn/sql-for-data-science",free:true},
{t:"MongoDB University",p:"MongoDB",u:"https://university.mongodb.com/",free:true}]},
{name:"APIs & Frameworks",skills:["REST APIs","Express / Django","Authentication","Middleware"],courses:[
{t:"APIs with Node & Express",p:"Udemy",u:"https://www.udemy.com/course/nodejs-api-masterclass/",free:false},
{t:"Django for Everybody",p:"Coursera / UMich",u:"https://www.coursera.org/specializations/django",free:true}]},
{name:"Auth & Security",skills:["JWT","OAuth 2.0","HTTPS/TLS","Input Validation"],courses:[
{t:"Web Security Fundamentals",p:"edX / KU Leuven",u:"https://www.edx.org/learn/web-security",free:true},
{t:"API Security on Google Cloud",p:"Coursera",u:"https://www.coursera.org/learn/api-security-google-cloud",free:true}]},
{name:"DevOps Basics",skills:["Docker","Linux CLI","Nginx","Cloud Deploy"],courses:[
{t:"Docker Mastery",p:"Udemy",u:"https://www.udemy.com/course/docker-mastery/",free:false},
{t:"Linux Command Line Basics",p:"Udemy",u:"https://www.udemy.com/course/linux-command-line-volume1/",free:false}]},
{name:"System Design & Hiring",skills:["Caching","Load Balancing","Message Queues","Interview Prep"],courses:[
{t:"System Design Primer",p:"GitHub",u:"https://github.com/donnemartin/system-design-primer",free:true},
{t:"Grokking System Design",p:"DesignGurus",u:"https://www.designgurus.io/course/grokking-the-system-design-interview",free:false}]}
],certs:[
{t:"Meta Back-End Developer Certificate",p:"Coursera / Meta",u:"https://www.coursera.org/professional-certificates/meta-back-end-developer"},
{t:"AWS Cloud Practitioner",p:"Amazon Web Services",u:"https://aws.amazon.com/certification/certified-cloud-practitioner/"},
{t:"Back End Development & APIs",p:"freeCodeCamp",u:"https://www.freecodecamp.org/learn/back-end-development-and-apis/"}]},

fullstack:{title:"Fullstack Beast",tag:"GOD MODE",tagBg:"#ff006e",salary:"$100k - $180k",desc:"Become the developer who can build anything, end to end.",phases:[
{name:"Web Fundamentals",skills:["HTML/CSS/JS","HTTP Protocol","Browser DevTools","Terminal"],courses:[
{t:"The Odin Project",p:"The Odin Project",u:"https://www.theodinproject.com/",free:true},
{t:"CS50 Web Programming",p:"edX / Harvard",u:"https://cs50.harvard.edu/web/",free:true}]},
{name:"Frontend Framework",skills:["React or Vue","Component Architecture","Routing","State Mgmt"],courses:[
{t:"React - Complete Guide",p:"Udemy",u:"https://www.udemy.com/course/react-the-complete-guide-incl-redux/",free:false},
{t:"Vue Mastery",p:"Vue Mastery",u:"https://www.vuemastery.com/courses/intro-to-vue-3/intro-to-vue3",free:true}]},
{name:"Backend + Database",skills:["Node.js / Python","PostgreSQL","REST & GraphQL","Auth"],courses:[
{t:"Full Stack Open",p:"University of Helsinki",u:"https://fullstackopen.com/en/",free:true},
{t:"Node.js, Express & MongoDB",p:"Udemy",u:"https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/",free:false}]},
{name:"Full App Projects",skills:["E-commerce App","Social Media Clone","SaaS Dashboard","Real-time Chat"],courses:[
{t:"MERN Stack Course",p:"Udemy",u:"https://www.udemy.com/course/mern-stack-front-to-back/",free:false},
{t:"Next.js Full Stack App",p:"Vercel",u:"https://nextjs.org/learn",free:true}]},
{name:"Cloud & DevOps",skills:["AWS/Vercel","Docker","CI/CD","Monitoring"],courses:[
{t:"AWS for Developers",p:"Coursera",u:"https://www.coursera.org/learn/aws-fundamentals",free:true},
{t:"Vercel & Next.js Deploy",p:"Vercel Docs",u:"https://vercel.com/docs",free:true}]},
{name:"Get Hired",skills:["Portfolio Site","GitHub Profile","Mock Interviews","Networking"],courses:[
{t:"Tech Interview Handbook",p:"GitHub",u:"https://www.techinterviewhandbook.org/",free:true},
{t:"LeetCode",p:"LeetCode",u:"https://leetcode.com/",free:true}]}
],certs:[
{t:"IBM Full Stack Developer",p:"Coursera / IBM",u:"https://www.coursera.org/professional-certificates/ibm-full-stack-cloud-developer"},
{t:"Meta Full-Stack Engineer",p:"Codecademy",u:"https://www.codecademy.com/learn/paths/full-stack-engineer-career-path"},
{t:"Full Stack Certification",p:"freeCodeCamp",u:"https://www.freecodecamp.org/learn/"}]},

uiux:{title:"UI/UX Architect",tag:"",tagBg:"",salary:"$75k - $145k",desc:"Design experiences people love. From wireframes to polished interfaces.",phases:[
{name:"Design Foundations",skills:["Color Theory","Typography","Layout Principles","Visual Hierarchy"],courses:[
{t:"Google UX Design Certificate",p:"Coursera / Google",u:"https://www.coursera.org/professional-certificates/google-ux-design",free:false},
{t:"Graphic Design Basics",p:"Coursera / CalArts",u:"https://www.coursera.org/learn/fundamentals-of-graphic-design",free:true}]},
{name:"Figma & Tools",skills:["Figma","Auto Layout","Components","Prototyping"],courses:[
{t:"Figma UI/UX Essentials",p:"Udemy",u:"https://www.udemy.com/course/figma-ux-ui-design-user-experience-tutorial-course/",free:false},
{t:"Figma Official Tutorials",p:"Figma",u:"https://help.figma.com/hc/en-us/categories/360002051613",free:true}]},
{name:"UX Research",skills:["User Interviews","Personas","Journey Mapping","Usability Testing"],courses:[
{t:"UX Research & Strategy",p:"Coursera / UMich",u:"https://www.coursera.org/learn/ux-research-and-strategy",free:true},
{t:"Interaction Design Foundation",p:"IxDF",u:"https://www.interaction-design.org/courses",free:false}]},
{name:"UI Design Systems",skills:["Design Tokens","Component Libraries","Responsive Design","Accessibility"],courses:[
{t:"Design Systems with Figma",p:"Udemy",u:"https://www.udemy.com/course/design-system-figma/",free:false},
{t:"Material Design Guide",p:"Google",u:"https://m3.material.io/",free:true}]},
{name:"Portfolio",skills:["3+ Case Studies","Process Docs","Behance/Dribbble","Personal Brand"],courses:[
{t:"UX Portfolio Tips",p:"NNGroup",u:"https://www.nngroup.com/articles/ux-portfolio/",free:true},
{t:"Building a Design Portfolio",p:"Coursera",u:"https://www.coursera.org/learn/ux-design-portfolio",free:true}]},
{name:"Job Prep",skills:["Design Challenges","Whiteboard Exercises","Stakeholder Skills","Salary Negotiation"],courses:[
{t:"Preparing for UX Interviews",p:"Coursera",u:"https://www.coursera.org/learn/ux-interviews",free:true},
{t:"UX Career Guide",p:"NNGroup",u:"https://www.nngroup.com/topic/career-advice/",free:true}]}
],certs:[
{t:"Google UX Design Professional Certificate",p:"Coursera / Google",u:"https://www.coursera.org/professional-certificates/google-ux-design"},
{t:"IxDF UX Design Certificate",p:"Interaction Design Foundation",u:"https://www.interaction-design.org/courses"},
{t:"Adobe Certified Professional",p:"Adobe",u:"https://www.adobe.com/products/xd.html"}]}
};
