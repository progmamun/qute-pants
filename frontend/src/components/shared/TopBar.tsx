import { Mail, Phone } from "lucide-react";

export const TopBar: React.FC = () => {
  return (
    <div className="w-full bg-accent text-white py-2 animate-slideDown">
      <div className="container mx-auto px-4">
        <div className="flex md:justify-end items-center text-sm justify-center">
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
          <span>|</span>
          <button className="bg-primary px-4 py-1 rounded-md font-semibold hover:bg-accent transition-all">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};
