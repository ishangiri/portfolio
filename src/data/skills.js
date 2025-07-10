// skillsData.js
import {
  AmazonwebservicesOriginalWordmark,
  AngularOriginal,
  BootstrapOriginal,
  ConfluenceOriginal,
  Css3OriginalWordmark,
  DynamodbOriginal,
  ExpressOriginal,
  FastapiOriginal,
  FirebaseOriginal,
  GithubOriginalWordmark,
  GitOriginalWordmark,
  GooglecloudOriginal,
  GraphqlPlainWordmark,
  JavascriptOriginal,
  JiraOriginal,
  JsonPlain,
  MongodbOriginal,
  MysqlOriginal,
  NextjsOriginal,
  NodejsOriginalWordmark,
  PostgresqlOriginal,
  PostmanOriginal,
  PythonOriginal,
  ReactOriginal,
  TailwindcssOriginal,
  TypescriptOriginal,
  VercelOriginal,
} from 'devicons-react';

export const skillsData = [
  {
    category: "Languages & Frameworks",
    skills: [
      { name: "TypeScript", logo: <TypescriptOriginal size={32} /> },
      { name: "JavaScript", logo: <JavascriptOriginal size={32} /> },
      { name: "Python", logo: <PythonOriginal size={32} /> },
      { name: "Node.js", logo: <NodejsOriginalWordmark size={32} /> },
      { name: "Express.js", logo: <ExpressOriginal size={32} /> },
      { name: "FastAPI", logo: <FastapiOriginal size={32} /> },
      { name: "React", logo: <ReactOriginal size={32} /> },
      { name: "Next.js", logo: <NextjsOriginal size={32} /> },
      { name: "React Native", logo: <ReactOriginal size={32} /> },
      { name: "Angular", logo: <AngularOriginal size={32} /> }
    ]
  },
  {
    category: "Databases and Tools",
    skills: [
      { name: "MySQL", logo: <MysqlOriginal size={32} /> },
      { name: "PostgreSQL", logo: <PostgresqlOriginal size={32} /> },
      { name: "MongoDB", logo: <MongodbOriginal size={32} /> },
      { name: "DynamoDB", logo: <DynamodbOriginal size={32} /> },
      {name: "Git", logo:<GitOriginalWordmark/>},
    ]
  },
  {
    category: "API Development, Auth & Testing",
    skills: [
      { name: "REST API", }, 
      { name: "Postman", logo : <PostmanOriginal size={32} /> },   
      {name: "GraphQL", logo : <GraphqlPlainWordmark size={32}/>},
      { name: "JWT Authentication", logo : <JsonPlain size={32}/> },
      {name: "Firebase Auth", logo: <FirebaseOriginal/>}
    ]
  },
  {
    category: "Project Management and Documentation",
    skills: [
      { name: "Jira", logo: <JiraOriginal size={32} /> },
      { name: "Confluence", logo: <ConfluenceOriginal size={32} /> },
      {name: "Sprint Planning"},
      {name: "Agile Methodologies"}
    ]
  },
  {
    category: "UI/UX & Frontend Tools",
    skills: [
      { name: "Tailwind CSS", logo: <TailwindcssOriginal size={32} /> },
      { name: "CSS3", logo: <Css3OriginalWordmark size={32} /> },
      { name: "Bootstrap", logo: <BootstrapOriginal size={32} /> },
      { name: "Shadcn UI" } ,
      {name: "Responsive Design"},
    ]
  },
  {
    category: "Cloud & Hosting",
    skills: [
      { name: "GCP", logo: <GooglecloudOriginal size={32} /> },
      { name: "Vercel", logo: <VercelOriginal size={32} /> },
      { name: "Render" }, 
      { name: "AWS", logo: <AmazonwebservicesOriginalWordmark size={32} /> }
    ]
  },
  {
    category: "AI & ML Integration",
    skills: [
      { name: "OpenAI API" },
      { name: "ChatGPT" },
      { name: "GitHub Copilot", logo: <GithubOriginalWordmark size={32} /> },
      { name: "Data Visualization" },
      {name : "Basic of Neural Networks"}
    ]
  }
];

