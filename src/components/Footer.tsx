import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo.tsx';
import { Mail, Phone, MapPin, Clock, ArrowUp, Download, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [copiedContact, setCopiedContact] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedContact(label);
    setTimeout(() => setCopiedContact(null), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121710] text-[#E5EAE1] pt-16 pb-12 border-t border-[#222B1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-[#242F20]">
          {/* Col 1: Brand & Philosophy */}
          <div className="lg:col-span-5 space-y-5">
            <BrandLogo variant="header" inverted={true} />
            <p className="text-sm text-[#9CAD95] max-w-sm leading-relaxed font-sans-body">
              Fourteen certified-organic acres an hour south of Bengaluru.
              Pick your vegetables, cook with our resident chef, and eat them at the long table
              within sixty minutes of leaving the soil.
            </p>
            <div className="pt-2 text-xs text-[#7D9176]">
              50 guests daily · Open 7 days a week (Monday to Sunday)
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#DFA74E]">
              Navigate
            </h4>
            <ul className="space-y-2.5 text-sm text-[#B4C4AD]">
              <li>
                <a href="#things-to-do" className="hover:text-white transition-colors">
                  Things to do
                </a>
              </li>
              <li>
                <a href="#our-story" className="hover:text-white transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  Guest Notes & Reviews
                </a>
              </li>
              <li>
                <a href="#pantry-and-gatherings" className="hover:text-white transition-colors">
                  Farm Pantry & Buyouts
                </a>
              </li>
              <li>
                <a href="#rates" className="hover:text-white transition-colors">
                  Rates & Pricing
                </a>
              </li>
              <li>
                <a href="#visit" className="hover:text-white transition-colors">
                  Getting Here
                </a>
              </li>
              <li>
                <a href="#book-a-day" className="hover:text-white transition-colors">
                  Book a day
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Address & Visiting */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#DFA74E]">
              The Farm
            </h4>
            <div className="text-sm text-[#9CAD95] space-y-2.5">
              <p className="select-all">
                Survey No. 112/3, Bilikal Betta Road, Harohalli Hobli,
                Kanakapura Taluk, Ramanagara District, Karnataka 562112
              </p>
              <p className="text-xs text-[#7D9176]">
                58 km from MG Road (approx. 90 minutes)
              </p>
              <div className="pt-1 text-xs text-[#B4C4AD]">
                <strong>Sittings:</strong> 8:30 AM & 11:30 AM
              </div>
            </div>
          </div>

          {/* Col 4: Selectable Contact Text & Socials */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#DFA74E]">
              Contact Us
            </h4>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#7D9176] block">
                  Email
                </span>
                <button
                  type="button"
                  onClick={() => handleCopy('visit@harvesthour.in', 'email')}
                  className="text-left font-mono text-xs text-[#E5EAE1] hover:text-[#DFA74E] transition-colors select-all"
                  title="Click to copy email address"
                >
                  visit@harvesthour.in
                </button>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#7D9176] block">
                  Telephone
                </span>
                <button
                  type="button"
                  onClick={() => handleCopy('+91 80 2843 7100', 'phone')}
                  className="text-left font-mono text-xs text-[#E5EAE1] hover:text-[#DFA74E] transition-colors select-all"
                  title="Click to copy phone number"
                >
                  +91 80 2843 7100
                </button>
              </div>

              {copiedContact && (
                <div className="text-[11px] text-[#DFA74E] flex items-center gap-1 font-medium animate-in fade-in">
                  <Check className="w-3 h-3" />
                  Copied {copiedContact} to clipboard
                </div>
              )}

              {/* Social Links */}
              <div className="pt-2">
                <span className="text-[11px] uppercase tracking-wider text-[#7D9176] block mb-2">
                  Journal & Updates
                </span>
                <div className="flex items-center gap-3 text-xs text-[#9CAD95]">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Instagram
                  </a>
                  <span>·</span>
                  <a
                    href="https://whatsapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Mandatory GIM note, copyright, and Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7D9176]">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Harvest Hour. All rights reserved.</span>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            {/* Mandatory Student Venture Line */}
            <span className="italic text-[#9CAD95]">
              A student venture concept, Goa Institute of Management.
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/harvest-hour-standalone.html"
              download="harvest-hour-standalone.html"
              className="inline-flex items-center gap-1.5 text-xs text-[#B4C4AD] hover:text-[#DFA74E] transition-colors bg-[#1E271B] px-3 py-1.5 rounded-md border border-[#2B3926]"
              title="Download single self-contained HTML file"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Standalone HTML</span>
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-[#9CAD95] hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
