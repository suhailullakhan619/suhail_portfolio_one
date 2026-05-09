

import { TiltCard } from "../ui/EducationSection/TiltCard";
import sapthagiriLogo from '../assets/Sapthagiri Logo.jpeg';
import stellaLogo from '../assets/stellaLogo.png'
function TiltCardSection() {
  type EductionDetailsType={
    logo:string;
    duration:string;
    collegeName:string;
    courseDes?:string;
    cgpaOrPercentage:string;
  }

  const educationDetails:EductionDetailsType[]=[
{
  logo:sapthagiriLogo,
  duration:"2021 - 2025",
  collegeName:"Sapthagiri College of Engineering",
  courseDes:"B.E. in Electronics and Communication Engineering",
  cgpaOrPercentage:"CGPA - 8.25"
},
{
  logo:stellaLogo,
  duration:"2019 - 2021",
  collegeName:"Stella Maris P U College",
   courseDes:"PCMB",
  cgpaOrPercentage:"Percentage - 82%"
},
{
  logo:stellaLogo,
  duration:"2018 - 2019",
  collegeName:"Stella Maris High School",
  cgpaOrPercentage:"Percentage - 77.12%"
}
  ]
  return (<>

    <section id="education" className=" bg-black w-full pt-6 pb-6  ">
      <h2 className="text-3xl md:text-4xl font-bold text-white bg-black  pb-6 text-center w-full">
        EDUCATION
      </h2>
      <div className="grid gap-6 md:grid-cols-3 p-4 md:p-8">
        {educationDetails.map((item,index)=>{
          return( <TiltCard key={index} className="h-full w-full rounded-3xl border bg-card p-7 shadow-2xl">
          <div className="relative z-20 h-full lato">
            <div className="mb-6 flex items-center justify-between">
              {/* <span className="rounded-full bg-foreground px-3 py-1 text-xs font-medium text-background">
                Interactive
              </span> */}
              <div className=" rounded-4xl border-2 border-cyan-400" style={{maxHeight:'60px',maxWidth:'60px',width:'100%'}}>
                <img className=" rounded-4xl" src={item.logo} alt={`${item.collegeName} logo`} />
              </div>
              <span className="text-sm text-muted-foreground">{item.duration}</span>
            </div>
            <h3 className="text-3xl font-semibold tracking-tight ">{item.collegeName}</h3>
           {item.courseDes&&(<p className="mt-3 text-sm leading-6 text-muted-foreground ">
             {item.courseDes}
            </p>)} 
            <p className="mt-3 text-sm leading-6 text-muted-foreground ">
              {item.cgpaOrPercentage}
            </p>
          </div>
        </TiltCard>
          )
        })}
        

            
      </div>

    </section>



  </>

  );
}


export default TiltCardSection;
