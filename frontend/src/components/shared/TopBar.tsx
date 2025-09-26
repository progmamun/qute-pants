import { Mail, Phone } from "lucide-react";

export const TopBar: React.FC = () => {
  return (
    <div className="w-full bg-blue-500 text-white py-2 animate-slideDown">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone className="w-3 h-3" />
              +1 234 567 8900
            </span>
            <span className="hidden sm:flex items-center gap-1">
              <Mail className="w-3 h-3" />
              info@qutepants.com
            </span>
          </div>
          <button className="bg-white text-blue-500 px-4 py-1 rounded-md font-semibold hover:bg-opacity-90 transition-all">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};
