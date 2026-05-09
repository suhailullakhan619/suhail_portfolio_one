import { Contact } from "@/ui/ContactSection/ContactComp";

function ContactSection() {
 
  return (<>

    <section id="contact" className=" bg-black w-full pt-6 pb-6  ">
      <h2 className="text-3xl md:text-4xl font-bold text-white bg-black  pb-6 text-center w-full">
        CONTACT
      </h2>
      
      <Contact/>

    </section>



  </>

  );
}


export default ContactSection;
