import { ToolCard } from "@/types";
import { Lightbulb, Baby, Headphones } from "lucide-react";

export const ToolsSection: React.FC = () => {
  const tools: ToolCard[] = [
    {
      id: 1,
      title: "Conception",
      description: "Expert guidance and tips",
      icon: <Lightbulb className="w-12 h-12" />,
      link: "#conception-blog",
    },
    {
      id: 2,
      title: "Pregnancy",
      description: "Support throughout journey",
      icon: <Baby className="w-12 h-12" />,
      link: "#pregnancy-blog",
    },
    {
      id: 3,
      title: "New Born",
      description: "Essential newborn care",
      icon: <Baby className="w-12 h-12" />,
      link: "#newborn-blog",
    },
    {
      id: 4,
      title: "24/7 Support",
      description: "Always here to help",
      icon: <Headphones className="w-12 h-12" />,
      link: "#support",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Try Our Informative & Others Tools
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <a
              key={tool.id}
              href={tool.link}
              className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl text-center hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-blue-500 mb-4 group-hover:rotate-360 transition-transform duration-500">
                {tool.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                {tool.title}
              </h3>
              <p className="text-sm text-gray-600">{tool.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
