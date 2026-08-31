import OrbitingSkills from '../ui/SkillsSection/skills-orbit'
import { ExpandableSkillTags } from '../ui/SkillsSection/expandable-skill-tags'
import jsImg from '../assets/js logo.svg'
import typescriptImg from '../assets/typescript logo.svg'
import htmlImg from '../assets/html logo.svg'
import cssImg from '../assets/css logo.svg'
import reactImg from '../assets/react logo.svg'
import vueImg from '../assets/vueLogo.svg'
import nextImg from '../assets/nextjs logo.svg'
import tailwindcssImg from '../assets/tailwindcss logo.svg'
import vuetifyImg from '../assets/vuetifylogo.svg'
import materialuiImg from '../assets/material logo.svg'
import reduxImg from '../assets/redux logo.svg'
import vuexImg from '../assets/vueLogo.svg'
import tanstackImg from '../assets/tanstack Logo.png'
import graphqlImg from '../assets/graphql logo.svg'
import restapiImg from '../assets/restapiLogo.svg'
import mongodbImg from '../assets/mongodb logo.svg'
import mysqlImg from '../assets/mysql logo.svg'
import gitImg from '../assets/GitLogo.svg'
import githubImg from '../assets/github logo.svg'
import postmanImg from '../assets/postman logo.svg'
import figmaImg from '../assets/figma logo.svg'
import awsLambdaImg from '../assets/Lambda.svg'
import apiGatewayImg from '../assets/API Gateway.svg'
import dynamoDbImg from '../assets/DynamoDB.svg'
import cognitoImg from '../assets/Cognito.svg'
import s3Img from '../assets/Simple Storage Service.svg'
import appSyncImg from '../assets/AppSync.svg'
import vercelImg from '../assets/vercel logo.svg'
import netlifyImg from '../assets/netlify logo.svg'

// NEW: Backend runtime + framework icons
import nodeImg from '../assets/nodejs.svg'
import expressImg from '../assets/Express.svg'

// NEW: Additional AWS serverless service icons
import stepFunctionsImg from '../assets/Step Functions.svg'
import cloudFrontImg from '../assets/CloudFront.svg'
import route53Img from '../assets/Route 53.svg'


const SkillsPage = () => {
  return (
    <>

      <section
        id="skills"
        className="w-full  bg-black overflow-hidden"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white  bg-black pt-6 pb-6 text-center w-full">
          TECHNICAL SKILLS
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 px-6 bg-black overflow-hidden">

          {/* LEFT SIDE - SKILL TAGS */}
          <div className="w-full md:w-1/2 max-w-xl">
            <ExpandableSkillTags
              title="Skills"
              skills={[
                // Languages
                { label: "JavaScript", icon: jsImg },
                { label: "TypeScript", icon: typescriptImg },
                { label: "HTML5", icon: htmlImg },
                { label: "CSS3", icon: cssImg },

                // Frontend
                { label: "React", icon: reactImg },
                { label: "Vue.js", icon: vueImg },
                { label: "Next.js", icon: nextImg },


                // Backend
                { label: "Node.js", icon: nodeImg }, // NEW: added to match resume Backend section
                { label: "Express.js", icon: expressImg }, // NEW: added to match resume Backend section


                 // Backend & Cloud
                { label: "AWS Lambda", icon: awsLambdaImg },
                { label: "API Gateway", icon: apiGatewayImg },
                { label: "DynamoDB", icon: dynamoDbImg },
                { label: "Cognito", icon: cognitoImg },
                { label: "S3", icon: s3Img },
                { label: "AppSync", icon: appSyncImg },
                { label: "Step Functions", icon: stepFunctionsImg }, 
                { label: "CloudFront", icon: cloudFrontImg }, 
                { label: "Route53", icon: route53Img }, 

                // UI & Styling
                { label: "Tailwind CSS", icon: tailwindcssImg },
                { label: "Vuetify", icon: vuetifyImg },
                { label: "Material UI", icon: materialuiImg },

                // State & Data
                { label: "Redux", icon: reduxImg },
                { label: "Vuex", icon: vuexImg },
                { label: "TanStack Query", icon: tanstackImg },
                { label: "GraphQL", icon: graphqlImg },
                { label: "REST APIs", icon: restapiImg },

               


                // Databases
                { label: "MongoDB", icon: mongodbImg },
                { label: "MySQL", icon: mysqlImg },

                // Tools
                { label: "Git", icon: gitImg },
                { label: "GitHub", icon: githubImg },
                { label: "Postman", icon: postmanImg },
                { label: "Figma", icon: figmaImg },
                { label: "Vercel", icon: vercelImg },
                { label: "Netlify", icon: netlifyImg },
              ]}
              className="p-6"
            />
          </div>

          {/* RIGHT SIDE - ORBIT */}
          <div className="w-full md:w-1/2 flex justify-center">
            <OrbitingSkills />
          </div>
        </div>
      </section>
    </>
  )
}

export default SkillsPage