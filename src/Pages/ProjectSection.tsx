import { ProjectCard } from "../ui/ProjectSection/project-card";
import  ReactIcon from '../assets/react logo.svg'
import GraphQLIcon from '../assets/graphql logo.svg'
import VuetifyIcon from '../assets/vuetifylogo.svg'
import VueIcon from '../assets/vueLogo.svg' 
import tanstackIcon from '../assets/tanstack Logo.png'
import RestapiIcon from '../assets/restapiLogo.svg'
import AssetBMSImg from '../assets/AssetBMSImg.png'
import ChatsAppImg from '../assets/ChatsAppImg.png'
import EcomImg from '../assets/EcomImg.png'
export default function ProjectCardSection() {
  return (
    <section
      id="projects"
      className="w-full  bg-black overflow-hidden"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white  bg-black pt-6 pb-6 text-center w-full">
         PROJECTS
      </h2>
      <div className="grid grid-cols-1 gap-8 p-4 md:p-8 md:grid-cols-2 lg:grid-cols-3">
       <ProjectCard
  title="Asset-BMS Dashboard"
  description="Enterprise asset management dashboard with real-time tracking, RBAC, and workflow automation."
  imgSrc={AssetBMSImg}
  liveLink="https://suhail-asset-management-application.vercel.app/"
  gitRepoLink="https://github.com/suhailullakhan619/AssetManagementApplication"
  tech={[
    { label: "Vue.js", icon: VueIcon },
    { label: "Vuetify", icon: VuetifyIcon },
    { label: "GraphQL", icon: GraphQLIcon }
  ]}
/>

<ProjectCard
  title="Real-Time Chat Application"
  description="Interactive chat interface with dynamic UI updates and persistent state management."
  imgSrc={ChatsAppImg}
  liveLink="https://suhail-chatapp-one.vercel.app/"
  gitRepoLink="https://github.com/suhailullakhan619/CHATAPP"
  tech={[
    { label: "Vue.js", icon: VueIcon },
    { label: "Vuetify", icon: VuetifyIcon },
    { label: "GraphQL", icon: GraphQLIcon }
  ]}
/>

<ProjectCard
  title="E-Commerce Web App"
  description="Scalable storefront with API integration and optimized data fetching."
  imgSrc={EcomImg}
  liveLink="https://suhailecomwebsite1.netlify.app/"
  gitRepoLink="https://github.com/suhailullakhan619/E-com-Website-frontend"
  tech={[
    { label: "React.js", icon: ReactIcon },
    { label: "TanStack Query", icon: tanstackIcon },
    {label:'Rest APIs',icon:RestapiIcon}
  ]}
/>
      </div>
    </section>
  );
}