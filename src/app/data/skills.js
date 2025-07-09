// skillsData.js
import {
  AmazonwebservicesOriginalWordmark,
  AngularOriginal,
  BootstrapOriginal,
  ConfluenceOriginal,
  Css3OriginalWordmark,
  DockerOriginal,
  DockerOriginalWordmark,
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
  JsonOriginal,
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
  TensorflowOriginal,
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
    category: "Databases",
    skills: [
      { name: "MySQL", logo: <MysqlOriginal size={32} /> },
      { name: "PostgreSQL", logo: <PostgresqlOriginal size={32} /> },
      { name: "MongoDB", logo: <MongodbOriginal size={32} /> },
      { name: "DynamoDB", logo: <DynamodbOriginal size={32} /> }
    ]
  },
  {
    category: "API Development & Testing",
    skills: [
      { name: "REST API", }, 
      { name: "Postman", logo : <PostmanOriginal size={32} /> },   
      {name: "GraphQL", logo : <GraphqlPlainWordmark size={32}/>},
      { name: "JWT Authentication", logo : <JsonPlain size={32}/> }
    ]
  },
  {
    category: "DevOps & CI/CD",
    skills: [
      { name: "Git", logo: <GitOriginalWordmark size={32} /> },
      { name: "Docker", logo: <DockerOriginalWordmark size={32} /> },
      { name: "GitHub Actions" }, 
      { name: "CI/CD Pipelines" }
    ]
  },
  {
    category: "Project Management & Documentation",
    skills: [
      { name: "Jira", logo: <JiraOriginal size={32} /> },
      { name: "Confluence", logo: <ConfluenceOriginal size={32} /> }
    ]
  },
  {
    category: "UI/UX & Frontend Tools",
    skills: [
      { name: "Tailwind CSS", logo: <TailwindcssOriginal size={32} /> },
      { name: "CSS3", logo: <Css3OriginalWordmark size={32} /> },
      { name: "Bootstrap", logo: <BootstrapOriginal size={32} /> },
      { name: "Shadcn UI" } 
    ]
  },
  {
    category: "Cloud & Hosting",
    skills: [
      { name: "GCP", logo: <GooglecloudOriginal size={32} /> },
      { name: "Firebase", logo: <FirebaseOriginal size={32} /> },
      { name: "Vercel", logo: <VercelOriginal size={32} /> },
      { name: "Render" }, 
      { name: "AWS", logo: <AmazonwebservicesOriginalWordmark size={32} /> }
    ]
  },
  {
    category: "AI & ML Integration",
    skills: [
      { name: "Tensorflow", logo: <TensorflowOriginal size={32} /> },
      { name: "OpenAI API" },
      { name: "ChatGPT" },
      { name: "GitHub Copilot", logo: <GithubOriginalWordmark size={32} /> },
      { name: "Data Visualization" },
      {name : "Basic of Neural Networks"}
    ]
  }
];

