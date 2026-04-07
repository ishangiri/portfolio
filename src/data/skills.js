// skillsData.js
import {
  AmazonwebservicesOriginalWordmark,
  BootstrapOriginal,
  ConfluenceOriginal,
  Css3OriginalWordmark,
  DynamodbOriginal,
  ExpressOriginal,
  FastapiOriginal,
  FirebaseOriginal,
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
    ]
  },
  {
    category: "Databases and Tools",
    skills: [
      { name: "MySQL", logo: <MysqlOriginal size={32} /> },
      { name: "PostgreSQL", logo: <PostgresqlOriginal size={32} /> },
      { name: "MongoDB", logo: <MongodbOriginal size={32} /> },
      {name: "Git", logo:<GitOriginalWordmark/>},
    ]
  },
  {
    category: "Project Management and Documentation",
    skills: [
      { name: "Jira", logo: <JiraOriginal size={32} /> },
      { name: "Confluence", logo: <ConfluenceOriginal size={32} /> },
    ]
  },
  {
    category: "UI/UX & Frontend Tools",
    skills: [
      { name: "Tailwind CSS", logo: <TailwindcssOriginal size={32} /> },
      { name: "CSS3", logo: <Css3OriginalWordmark size={32} /> },
      { name: "Bootstrap", logo: <BootstrapOriginal size={32} /> },
    ]
  },
  {
    category: "Cloud & Hosting",
    skills: [
      { name: "GCP", logo: <GooglecloudOriginal size={32} /> },
      { name: "Vercel", logo: <VercelOriginal size={32} /> },
      { name: "AWS", logo: <AmazonwebservicesOriginalWordmark size={32} /> }
    ]
  },
];

