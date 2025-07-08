// skillsData.js
import {
  BootstrapOriginal,
  ConfluenceOriginal,
  Css3OriginalWordmark,
  DockerOriginal,
  DockerOriginalWordmark,
  DynamodbOriginal,
  FastapiOriginal,
  FirebaseOriginal,
  GithubOriginalWordmark,
  GitOriginalWordmark,
  GooglecloudOriginal,
  JavascriptOriginal,
  JiraOriginal,
  MongodbOriginal,
  MysqlOriginal,
  NextjsOriginal,
  NodejsOriginalWordmark,
  PostgresqlOriginal,
  PythonOriginal,
  ReactOriginal,
  TailwindcssOriginal,
  TensorflowOriginal,
  TypescriptOriginal,
  VercelOriginal,
  VscodeOriginal
} from 'devicons-react';

export const skillsData = [
  {
    category: "Languages & Framework",
    skills: [
      { name: "TypeScript", logo: <TypescriptOriginal size={32}/> },
      { name: "JavaScript", logo: <JavascriptOriginal size={32}/> },
      { name: "Node.js", logo: <NodejsOriginalWordmark size={32}/> },
      { name: "React", logo: <ReactOriginal size={32}/> },
      { name: "Next.js", logo: <NextjsOriginal size={32}/> },
      { name: "Python", logo: <PythonOriginal size={32}/> },
      { name: "FastAPI", logo: <FastapiOriginal size={32}/> },
      { name: "React Native", logo: <ReactOriginal size={32}/> }
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", logo: <MysqlOriginal size={32}/> },
      { name: "PostgreSQL", logo: <PostgresqlOriginal size={32}/> },
      { name: "MongoDB", logo: <MongodbOriginal size={32}/> },
      { name: "DynamoDB", logo: <DynamodbOriginal size={32}/> }
    ]
  },
  {
    category: "DevOps & Practices",
    skills: [
      { name: "Git", logo: <GitOriginalWordmark size={32}/> },
      { name: "Docker", logo: <DockerOriginalWordmark size={32}/> },
      { name: "Rest Api" },
      { name: "Jira", logo: <JiraOriginal size={32}/> },
      { name: "Confluence", logo: <ConfluenceOriginal size={32}/> }
    ]
  },
  {
    category: "UI/UX & Tools",
    skills: [
      { name: "Tailwind CSS", logo: <TailwindcssOriginal size={32}/> },
      { name: "CSS3", logo: <Css3OriginalWordmark size={32}/> },
      { name: "Bootstrap", logo: <BootstrapOriginal size={32}/> }
    ]
  },
  {
    category: "Cloud & Hosting",
    skills: [
      { name: "GCP", logo: <GooglecloudOriginal size={32}/> },
      { name: "Firebase", logo: <FirebaseOriginal size={32}/> },
      { name: "Vercel", logo: <VercelOriginal size={32}/> },
      { name: "Render" },
      { name: "Microservices", logo: <DockerOriginal size={32}/> }
    ]
  },
  {
    category: "AI & ML Integration",
    skills: [
      { name: "Data Visualization" },
      { name: "Tensorflow", logo: <TensorflowOriginal size={32}/> },
      { name: "OpenAI API" },
      { name: "ChatGPT" },
      { name: "GitHub Copilot", logo: <GithubOriginalWordmark size={32}/> }
    ]
  }
];
