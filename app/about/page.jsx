import { FiDownload, FiBriefcase, FiMapPin, FiCalendar, FiExternalLink } from 'react-icons/fi';
import { FaJava, FaAws } from 'react-icons/fa6';
import { 
  SiPython, SiJavascript, SiTypescript, SiSpringboot, SiReact, 
  SiNodedotjs, SiTensorflow, SiPytorch, SiPostgresql, SiDocker, 
  SiKubernetes, SiGooglecloud, SiTerraform, SiLinux, SiWindows 
} from 'react-icons/si';

const skills = [
  { name: "Java", icon: FaJava, color: "text-red-500" },
  { name: "Python", icon: SiPython, color: "text-blue-500" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "Spring Boot", icon: SiSpringboot, color: "text-green-500" },
  { name: "React", icon: SiReact, color: "text-cyan-400" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
  { name: "FastAPI", icon: SiPython, color: "text-teal-500" }, // Using Python icon as fallback
  { name: "TensorFlow", icon: SiTensorflow, color: "text-orange-500" },
  { name: "PyTorch", icon: SiPytorch, color: "text-red-600" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
  { name: "Docker", icon: SiDocker, color: "text-blue-500" },
  { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-600" },
  { name: "AWS", icon: FaAws, color: "text-orange-400" },
  { name: "GCP", icon: SiGooglecloud, color: "text-red-500" },
  { name: "Terraform", icon: SiTerraform, color: "text-purple-500" },
];

const experiences = [
  {
    role: "Software Technical Lead",
    company: "TD Markets",
    location: "United Kingdom",
    period: "Feb. 2025 - Present",
    description: "Leading technical development and architectural decisions for trading platforms.",
    link: "#"
  },
  {
    role: "Software Engineer",
    company: "IntelliDigest",
    location: "United Kingdom",
    period: "Jun. 2024 - Dec. 2024",
    description: "Developed sustainable food waste solutions using Java and Spring Boot microservices.",
    link: "#"
  }
];

export default function AboutPage() {
  return (
    <div className="p-8 md:p-12 lg:p-16 min-h-full">
       <header className="mb-12">
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <div className="flex items-center gap-6 text-gray-500 mb-8">
             <span className="flex items-center gap-2"><FiMapPin /> Edinburgh, Scotland</span>
             <span className="flex items-center gap-2">Software Engineer</span>
          </div>
       </header>
       
       <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
           <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
               <p>
                  I’m a forward-thinking Software Engineer specializing in designing, building, and deploying resilient, scalable, data-driven applications using Java and Python across cloud platforms.
               </p>
               <p>
                  Experienced in architecting microservices, I have a proven ability to accelerate development cycles through CI/CD automation and ensure rigorous, high-quality solutions through test-driven development (TDD). I am committed to maintaining robust system integrity and reliability in every project I undertake.
               </p>
               <p>
                  My expertise spans across full-stack development, cloud infrastructure, and machine learning integration, making me a versatile asset in modern software engineering teams.
               </p>
               
               <div className="pt-6">
                   <a 
                     href="/Wilson_Dagah.pdf" 
                     download
                     className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                   >
                      <FiDownload /> Download Resume
                   </a>
               </div>
           </div>
           
           <div className="bg-gray-50 p-8 rounded-3xl">
               <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
               <div className="flex flex-wrap gap-3">
                  {skills.map(skill => (
                     <div key={skill.name} className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-sm text-gray-700 font-medium hover:shadow-md transition-shadow cursor-default">
                        <skill.icon className={`text-xl ${skill.color}`} />
                        <span>{skill.name}</span>
                     </div>
                  ))}
               </div>
           </div>
       </div>

       {/* Experience Section */}
       <section>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
             <FiBriefcase className="text-[#ea580c]" /> Experience
          </h2>
          
          <div className="space-y-6">
             {experiences.map((exp, index) => (
                <div key={index} className="group relative bg-gray-50 hover:bg-gray-100 p-8 rounded-3xl transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <div>
                           <h3 className="text-xl font-bold">{exp.role}</h3>
                           <p className="text-lg text-gray-700 font-medium">{exp.company}</p>
                        </div>
                        <div className="flex flex-col md:items-end gap-1">
                           <span className="text-sm font-bold text-[#ea580c]">{exp.period}</span>
                           <span className="text-sm text-gray-500">{exp.location}</span>
                        </div>
                    </div>
                    <p className="text-gray-600 max-w-3xl mb-4">{exp.description}</p>
                    <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                       <FiExternalLink className="text-xl text-gray-400" />
                    </div>
                </div>
             ))}
          </div>
       </section>
    </div>
  );
}
