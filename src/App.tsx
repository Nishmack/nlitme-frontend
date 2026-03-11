/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Search, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  Video, 
  Users, 
  FileText, 
  Wind, 
  Heart, 
  BarChart2, 
  CloudRain, 
  Brain, 
  BookOpen, 
  Shield, 
  Flame,
  Calendar,
  ClipboardList,
  Star,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  BrainCircuit,
  Check,
  Clock,
  ChevronRight,
  ChevronDown,
  Droplets,
  Sun,
  TrendingUp,
  Mail,
  User,
  ArrowUp,
  MessageSquare,
  Briefcase,
  Camera,
  LayoutDashboard
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const Header = ({ currentPage, setCurrentPage }: { currentPage: string, setCurrentPage: (page: string) => void }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { id: 'services', label: 'All Services' },
    { id: 'adhd', label: 'ADHD Therapy' },
    { id: 'anxiety', label: 'Anxiety Focus' },
    { id: 'relationships', label: 'Relationships' },
  ];

  const pages = [
    { id: 'appointment', label: 'Appointment' },
    { id: 'contact', label: 'Contacts' },
    { id: 'shop', label: 'Shop' },
    { id: 'imageCredits', label: 'Image Credits' },
  ];

  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white/80 backdrop-blur-md px-6 py-4 lg:px-20 sticky top-0 z-50">
      <div className="flex items-center gap-2 text-primary cursor-pointer" onClick={() => setCurrentPage('home')}>
        <div className="size-10 bg-primary rounded-lg flex items-center justify-center">
          <span className="material-symbols-outlined text-white text-2xl">spa</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-primary">nlitme</h2>
      </div>
      <nav className="hidden md:flex flex-1 justify-center gap-8">
        <button 
          onClick={() => setCurrentPage('home')}
          className={`text-sm font-semibold transition-colors ${currentPage === 'home' ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}
        >
          Home
        </button>
        <div 
          className="relative group"
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}
        >
          <button 
            onClick={() => setCurrentPage('services')}
            className={`text-sm font-semibold transition-colors flex items-center gap-1 ${['services', 'adhd', 'anxiety', 'relationships', 'mood', 'depression', 'learning', 'ocd', 'anger'].includes(currentPage) ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}
          >
            Services <ChevronDown className="size-4" />
          </button>
          <AnimatePresence>
            {isServicesOpen && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden py-2"
              >
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => {
                      setCurrentPage(service.id);
                      setIsServicesOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-primary transition-colors"
                  >
                    {service.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <button 
          onClick={() => setCurrentPage('about')}
          className={`text-sm font-semibold transition-colors ${currentPage === 'about' ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}
        >
          About Us
        </button>
        
        <div className="relative group">
          <button 
            className={`text-sm font-semibold transition-colors flex items-center gap-1 ${['appointment', 'shop', 'imageCredits'].includes(currentPage) ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}
          >
            Pages <ChevronDown className="size-4" />
          </button>
          <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
            {pages.map((page) => (
              <button
                key={page.id}
                onClick={() => setCurrentPage(page.id)}
                className="w-full text-left px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-primary transition-colors"
              >
                {page.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
      <div className="flex items-center gap-6">
        <button 
          onClick={() => setCurrentPage('contact')}
          className="hidden sm:block text-sm font-bold text-slate-600 hover:text-primary transition-colors"
        >
          Contact Us
        </button>
        <button 
          onClick={() => setCurrentPage('appointment')}
          className="flex items-center justify-center rounded-xl h-11 px-6 bg-primary text-white text-sm font-bold gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
        >
          <span>Book Now</span>
        </button>
      </div>
    </header>
  );
};

const HomeHero = () => (
  <section className="max-w-7xl mx-auto px-6 py-12 lg:py-24">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-10 order-2 lg:order-1"
      >
        <div className="flex flex-col gap-6">
          <h1 className="text-slate-900 text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight">
            Highly evaluated therapists, selected for you
          </h1>
          <p className="text-slate-600 text-xl leading-relaxed max-w-xl">
            Modern therapist search fields for your unique mental health needs. Find the perfect match today.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-2 bg-white p-3 rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100">
          <div className="flex items-center flex-1 px-4 py-3 gap-3">
            <Search className="text-slate-400 size-5" />
            <input 
              className="w-full bg-transparent border-none focus:ring-0 text-slate-900 placeholder:text-slate-400 font-medium" 
              placeholder="Specialty or therapist name..."
            />
          </div>
          <div className="hidden sm:block w-px h-10 bg-slate-100 self-center"></div>
          <div className="flex items-center flex-1 px-4 py-3 gap-3">
            <MapPin className="text-slate-400 size-5" />
            <input 
              className="w-full bg-transparent border-none focus:ring-0 text-slate-900 placeholder:text-slate-400 font-medium" 
              placeholder="Location..."
            />
          </div>
          <button className="bg-primary text-white px-10 py-4 rounded-xl font-bold hover:bg-primary/95 transition-all shadow-xl shadow-primary/20">
            Search
          </button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="order-1 lg:order-2 relative"
      >
        <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
          <img 
            alt="Professional therapist" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWXJe2gO33snNIcQKb-fNDLOPvWccYssJjGsktnZ1GCqCl2Ai7JVVnsmgyFl9sy_E2BqKebt10Zh4i2C2bkeyENLi6bPTYqOneSwO0A0bprybFVF0BaG_S052A5Wro1uj8QjoQoVwzVb76wpoT006sUqrajQ4FeJkT8TL43Y03rpGjwvYOd2xT02UNGbeNEdyB1supfFyHo7Wz0V1r6EWCrOD3KB6TD8xy2KEyz1-PeQToMB13WboESLOiVVhZQMqyg68Wk0qBJZyb"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl border border-white/20 flex items-center gap-5 shadow-2xl">
            <div className="size-12 bg-primary/10 rounded-full flex items-center justify-center">
              <CheckCircle2 className="text-primary size-6" />
            </div>
            <div>
              <p className="text-base font-bold text-slate-900">1,000+ Verified Therapists</p>
              <p className="text-sm text-slate-500 font-medium">Selected based on rigorous evaluation</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const AboutHero = () => (
  <section className="max-w-7xl mx-auto px-6 py-12 lg:py-24">
    <div className="flex flex-col lg:flex-row gap-16 items-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 aspect-video bg-cover bg-center rounded-[2.5rem] shadow-2xl overflow-hidden"
        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDux4tgc24IS9ApbNw5EU4kuJqSeb6BOo9srb1U_F7DDvZ3RZfqcQIBjnj6yAJ3mpkmH7Rf_tSq2I1sslXT0vEIUm2u6a5BDOr9H5iB-5Ntkxn4LBW1LTnEw0ie36ZLwevm4umhx1MYk-4UqqgzIs9wxnmEqo4SeOxC_u-uwnR3WU7L1rMLWJWwkIP7L8Dp6PNTVWVWOSuest6aS7Hodu55butQJdEKdSsFA-0aq9mirkaHvyb0ZCwbyUnBXhFz_EPC7Q9wIDq-kqxk")' }}
      />
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-8 lg:w-1/2"
      >
        <div className="flex flex-col gap-6">
          <h1 className="text-slate-900 text-5xl lg:text-6xl font-black leading-tight tracking-tight">
            Why We're Your Trusted Support
          </h1>
          <p className="text-slate-600 text-xl leading-relaxed font-medium">
            Empowering your mental wellness with culturally sensitive care and expert guidance tailored for the Asian community. We understand the nuances of heritage and the pressures of modern life.
          </p>
        </div>
        <button className="bg-primary text-white px-10 py-4 rounded-xl font-bold hover:bg-primary/95 transition-all shadow-xl shadow-primary/20 w-fit">
          Learn Our Mission
        </button>
      </motion.div>
    </div>
  </section>
);

const MissionApproach = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-black mb-12 tracking-tight">About Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div 
          whileHover={{ y: -5 }}
          className="flex flex-col gap-6"
        >
          <div className="w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-xl">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdUsDRKLeOUel0vvO5ygv4Cs-aeQYYGmZAGyZG7FXcs7FMBXWI5MIh77y2LptOcFJZxoBwEDtRaWa5b-6CdlU1PAy37_e-9y-EBNHunAM122UzMIRt8SEjPt4Z0_6aIdIDsp4-9vnEGQcOZfdD5YhDgcKABBqYI3_llC00F2NSu2dMFbLk_TJuQ1Uf_L5yVjGw4sppQx2tF9hYD1jxFwC7PY7VFVB2hFEoqr_Pk1TZF4xUMeX-7gg0X2K-r_GNKml9lQkvDq27htDC" 
              alt="Mission" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900">Our Mission</h3>
            <p className="text-slate-500 text-lg font-medium leading-relaxed">Providing accessible, destigmatized mental health support for diverse Asian identities. We bridge the gap between traditional values and modern psychological science.</p>
          </div>
        </motion.div>
        <motion.div 
          whileHover={{ y: -5 }}
          className="flex flex-col gap-6"
        >
          <div className="w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-xl">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1MbOmBilqhWZzD9_aQlaY_AlsJTx1s9TsWf71Tlix1vx75jtPHQDkS7lo2Ft9qo-WwAok48vu6_pCFt1itgIRxTrM8RXILX1c6ba07MUjK_pbxRkYPi-W5lmOsB2LOcLRzwnioP-fmTczTCXWM7FHMvp5vEqm3MUZrBmDI6C6yWnKzvLs-d3ww4arnrhgU-z-nE2RWE6nSuabPV29VXlZn2JNb7A7qw8aR0VtzvdyPTc47X5Ckxa8D-2jvU506qdf3T4gwhhu76Pl" 
              alt="Approach" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900">Our Approach</h3>
            <p className="text-slate-500 text-lg font-medium leading-relaxed">Evidence-based therapy combined with deep cultural empathy. We create safe spaces where your background is celebrated as part of your healing journey.</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const TopSpecialties = () => {
  const specialties = [
    { name: "Anxiety", icon: <Brain className="size-8" />, desc: "Techniques to manage intrusive thoughts and physical symptoms of stress." },
    { name: "Relationships", icon: <Users className="size-8" />, desc: "Navigating family dynamics, dating, and interpersonal communication." },
    { name: "Mood Disorders", icon: <BarChart2 className="size-8" />, desc: "Balanced support for managing persistent emotional fluctuations." },
    { name: "Depression", icon: <CloudRain className="size-8" />, desc: "Compassionate paths toward finding purpose and renewed energy." },
  ];

  return (
    <section className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-black tracking-tight">Top Specialties</h2>
            <p className="text-slate-500 text-lg font-medium mt-2">Focused care for life's most common challenges.</p>
          </div>
          <button className="text-primary font-bold flex items-center gap-2 hover:underline text-lg">
            View All Services <ChevronRight className="size-5" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialties.map((spec, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="size-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6">
                {spec.icon}
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-900">{spec.name}</h4>
              <p className="text-slate-500 font-medium leading-relaxed">{spec.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CommunityVoices = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black mb-4 tracking-tight">Voices of Our Community</h2>
        <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto">Hear from individuals who found their path to wellness with nlitme.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            name: "Aditya K.",
            text: "Finally a space where I don't have to explain my cultural background before I start healing.",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCClhTegthmTHW5VHR0fMYgXW_QDIhln0NLQ16gsA6quoh7Nkvle0ogLw96moJuv04fEmAb7zZ48IttXzKxTbtVHupycnCXVKlp84XY2f7qLTHP2QtvVAzoGtd44NL6aL5XVC6Bu5PjrD-SaHMnfm0FZ_LsgollLyPsKfRYrgS6DTBBn_UKUQGtuEC1N2tNJIzZuwcb8zbNI2YbAXMJ85io-67_zGwHtVzFjtadFHlYOMsYuT7wjVfMS8EDrbYA1IGCqPQqbkokN3ul"
          },
          {
            name: "Mei L.",
            text: "The therapist understood the nuances of my family expectations. It was a breakthrough.",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmm9XL5OcFQbJN2b0w4dRe9ocbtG4XoI5GXNQdzK3cjJwu8jtmQ0fetOL5fqDGnpzgu6slPOkgPwzrpWvPI8JpkpUW3I-YIaklvpS-IxVXYJ-P1FvPG8t-kNfUoeHMzdg3gPGoG2uQlcaHy2pGnF9KCK3lh1aiuN8cXMtdL56Qry-YbOZcDSMUT23Xnd0Dvtv8KawkBocJpEgjoEjOjlQJdkCeScGKKiPXeqyOx08ll6J4zBMSzSzsC2bzOGZC_YZ31fOsxFBfD4AA"
          },
          {
            name: "Tan V.",
            text: "Inclusive, warm, and highly professional. Highly recommend for any young professionals.",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9ImJMlOVUXuLo38d2vnJpSq7lp4pgyrpvh__CGY97vDymKKB8xFUi8ncmY98RGp6cuHr27PmMVNvX65i9vkN5ikSg0kA2MyB9YqybBBldFj23RtaIequcrYJMwORuz0wYfYGW94kcdrRGdH-G_nJYFNcCSlOEqFoe9km7wTgCBFJ3bDcw1O7aZaBSlYLqXlk0Vmsgp4MWeVK-5JAtQO5rDsK-5NcOsjn3AdZ7n6C8tlI2R_vLyGHqCh4Z4dUNpn_MxwqTbZ6nVpCf"
          },
          {
            name: "Sarah P.",
            text: "I feel heard and seen. nlitme has truly enlightened my perspective on mental health.",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCx8u9wX1jrDbRpCEywYRHk0CktU93rPi-3dsFL9vQOaYzMY6xpB5v6KRLZDT0L0AmUpZC0O99ShRy5g5fhAlaqka804P6AMeP5VcPSRTsrB_91yIfnjY4CKQKll9UmA7PmyingsG289xOl8d0mLZc_icU5gi_4AF2Rx-PGKbbm4c6cohZmkXMtdeTBBxKh01ArtArIyGBGibKmp9xj6Pu6m54cZNlMUmGLJ8yL1RPoMogMXfKrYLlEVxlPM8NN3qGjDkrT4trbKbnE"
          }
        ].map((t, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -5 }}
            className="bg-primary/5 p-8 rounded-3xl flex flex-col justify-between border border-primary/5 hover:bg-primary/10 transition-all"
          >
            <p className="text-slate-700 font-medium italic mb-8 leading-relaxed text-lg">"{t.text}"</p>
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                <img alt={t.name} className="w-full h-full object-cover" src={t.img} referrerPolicy="no-referrer" />
              </div>
              <div>
                <p className="font-bold text-slate-900">{t.name}</p>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Member</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const AppointmentForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning (9 AM - 12 PM)');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitSuccess(null);
    setSubmitError(null);

    if (!name.trim() || !preferredDate || !preferredTime) {
      setSubmitError('Please fill in your name, preferred date, and time.');
      return;
    }

    const messageLines = [
      'Request an Appointment (About page)',
      '',
      `Name: ${name.trim()}`,
      email.trim() ? `Email: ${email.trim()}` : null,
      `Preferred Date: ${preferredDate}`,
      `Preferred Time: ${preferredTime}`,
      '',
      'Notes:',
      notes.trim() || '(none)'
    ].filter(Boolean);

    try {
      setIsSubmitting(true);
      const res = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim() || undefined,
          message: messageLines.join('\n')
        })
      });

      if (!res.ok) {
        throw new Error();
      }

      setSubmitSuccess('Your appointment request has been sent. We will contact you shortly.');
      setName('');
      setEmail('');
      setPreferredDate('');
      setPreferredTime('Morning (9 AM - 12 PM)');
      setNotes('');
    } catch {
      setSubmitError('Unable to send your appointment request right now. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-background-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">
          <div className="lg:w-1/3 bg-primary p-12 lg:p-16 text-white flex flex-col justify-center">
            <h2 className="text-4xl font-black mb-6 tracking-tight">Start Your Journey</h2>
            <p className="text-white/70 mb-10 leading-relaxed text-lg font-medium">Schedule a consultation with one of our specialized counselors today. Most appointments are confirmed within 24 hours.</p>
            <ul className="space-y-6">
              {[
                "100% Confidential",
                "Online & In-person",
                "Sliding Scale Available"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 font-bold">
                  <div className="size-6 bg-white rounded-full flex items-center justify-center">
                    <Check className="text-primary size-4" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-2/3 p-12 lg:p-16 bg-white">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-8" onSubmit={handleSubmit}>
              {submitSuccess && (
                <div className="sm:col-span-2">
                  <p className="text-sm font-medium text-emerald-600">
                    {submitSuccess}
                  </p>
                </div>
              )}
              {submitError && (
                <div className="sm:col-span-2">
                  <p className="text-sm font-medium text-red-600">
                    {submitError}
                  </p>
                </div>
              )}
              <div className="flex flex-col gap-3">
                <label className="text-sm font-black text-slate-900 uppercase tracking-wider">Full Name</label>
                <input 
                  className="w-full h-14 px-5 rounded-2xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all font-medium" 
                  placeholder="e.g. Anjali Gupta" 
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-sm font-black text-slate-900 uppercase tracking-wider">Email Address</label>
                <input 
                  className="w-full h-14 px-5 rounded-2xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all font-medium" 
                  placeholder="email@example.com" 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-sm font-black text-slate-900 uppercase tracking-wider">Preferred Date</label>
                <div className="relative">
                  <input 
                    className="w-full h-14 px-5 rounded-2xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all font-medium" 
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                  />
                  <Calendar className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 size-5 pointer-events-none" />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-sm font-black text-slate-900 uppercase tracking-wider">Preferred Time</label>
                <div className="relative">
                  <select
                    className="w-full h-14 px-5 rounded-2xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all font-medium appearance-none"
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                  >
                    <option>Morning (9 AM - 12 PM)</option>
                    <option>Afternoon (12 PM - 5 PM)</option>
                    <option>Evening (5 PM - 8 PM)</option>
                  </select>
                  <Clock className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 size-5 pointer-events-none" />
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:col-span-2">
                <label className="text-sm font-black text-slate-900 uppercase tracking-wider">Briefly share what's on your mind</label>
                <textarea 
                  className="w-full p-5 rounded-2xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all font-medium" 
                  placeholder="I'm interested in..." 
                  rows={4}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                ></textarea>
              </div>
              <div className="sm:col-span-2">
                <button
                  className="w-full bg-primary text-white font-black py-5 rounded-2xl hover:bg-primary/95 transition-all shadow-xl shadow-primary/20 text-lg disabled:opacity-60 disabled:cursor-not-allowed"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Request an Appointment'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Benefits = () => (
  <section className="bg-white py-24">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl lg:text-5xl font-black mb-6 tracking-tight">Therapy on your terms</h2>
        <p className="text-slate-500 text-lg font-medium">Experience a modern approach to mental wellness with our core benefits.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-10">
        {[
          {
            title: "Online session",
            desc: "Therapy on your terms. Connect from the comfort of your home with encrypted video calls.",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwlsTyXWk4eAculbhywFyEtDP6pGgsdjvmqCXFcKDm8yjm83-MvRt9Gtj0mhpGYL2mQSSkcwLdEXhYOpkZvgp1OM3c9wzxjc4kkaRgGhMRh6Cv7Rfun8h7kMNF8xXVBvZbLVDq7h_8HuJkMHYv7rLKYnI8JNFYs00DZWjsV-UCVs8VQ0VwDPTFlvDfioyfKWj24U-pSHn2y-kDFa5pOdcxOuzy20tUD-arV-JPU7m6XSz1tbIkN9CfyB-maKD6w6reFmDo6e605EEz",
            icon: <Video className="size-6 text-primary" />
          },
          {
            title: "Family/couple therapy",
            desc: "Online or in-person. Strengthen your bonds with specialized relationship counseling.",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2sQ1ma-t35D4anIXDoseV7ecNyiQafHdzQiStRuKx6Z928f2AWDsWwKeAF0cNGOl-bM_qK7lgjbwHbFpW6MkIvmgnJf0YrGWwXYFvPUjZ2nBXi6DfqY4HmaQ4SbsKt7EVlncpzfMUKb9eVU4LEgowx3cSv4YXzKj3kxuoatV9TUhTvCA7CNKUEdz2dgwu_12q-FnwtzNlQTU5hY-Hn32kw4DRaRIh0uTnxLib3mcvZgNSRgK2Vsl9mGXwa4T4d0XOdpmE6VUZjMAG",
            icon: <Users className="size-6 text-primary" />
          },
          {
            title: "Client/therapist notes",
            desc: "Highly qualified therapists who provide collaborative tools to track your progress.",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8L_vLNXH8wQ2nwnecBDrxOalsyZkMkaOcvKjKOXXEo8KIjLrai_VyhBC0PQ8ho_2NKp0EPyKypwCk4OTFqrjLKCD4gpJi6qAAefxGH9pVom7DiFrSxawx__--s39vlSNRLy0x-XrW19HTCireD5NeTeKB_YIfkh9LCAfTjVXCP1udEFxcdGA4tAaBiYGs_9XD3parB_y9c5S8Bt5ZueiP951eog6IcRKqKwV7AAmexEOU7vQORsYlaarfqR7i1Qrpzo-6UpaxcFr2",
            icon: <FileText className="size-6 text-primary" />
          }
        ].map((benefit, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -10 }}
            className="flex flex-col gap-8 p-4 rounded-3xl border border-transparent hover:border-slate-100 hover:bg-slate-50/50 transition-all group"
          >
            <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-lg">
              <img 
                alt={benefit.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                src={benefit.img}
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="px-2">
              <h3 className="text-2xl font-bold mb-3 text-slate-900">{benefit.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">{benefit.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Services = ({ setCurrentPage }: { setCurrentPage: (page: string) => void, key?: string }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <section className="max-w-7xl mx-auto px-6 py-12 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="flex flex-col gap-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider w-fit">
          Professional Care
        </div>
        <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tight text-slate-900">
          Our Services
        </h1>
        <p className="text-lg text-slate-600 max-w-lg leading-relaxed font-medium">
          Compassionate care tailored for Southeast and South Asian communities, focusing on anxiety and relationship healing through culturally sensitive therapy.
        </p>
        <div className="flex gap-4">
          <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-base hover:shadow-xl transition-all shadow-lg shadow-primary/20">
            Consultation
          </button>
          <button className="border border-slate-300 px-8 py-4 rounded-xl font-bold text-base hover:bg-slate-50 transition-all">
            View FAQs
          </button>
        </div>
      </div>
      <div className="relative group">
        <div className="aspect-[4/3] rounded-[2.5rem] bg-slate-200 overflow-hidden shadow-2xl">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRvJYYCk___dfh5-x9antLjO8rVuojaPFhkw0XNEg_4FkElbHUAm9xHe9e9yJaLfsASd16wUqhm74oGuOSsYnGtrhkPfBsdIvAwhumOKSGFnxlav2vjWoTLJbHLNXz3bWu-EmS3y7jamzQafgurGThl_QSIoKYW60BH0kcPasF6zRfUUXX8hLXZo0UB08OSl49kJSxzkAvP7EfHZHOPdiv5up_hvKYyITwjjGNOmC0grnIVZCF1XpU14bedF43JHSe4kk1TOEg1xKY" 
            alt="Support" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
        </div>
      </div>
    </section>

    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-black tracking-tight mb-4">Specialized Areas of Care</h2>
            <p className="text-slate-500 text-lg font-medium">We offer specialized psychological support across a wide range of mental health challenges, with deep expertise in Asian cultural dynamics.</p>
          </div>
          <button className="text-primary font-bold text-lg flex items-center gap-2 hover:underline group">
            See All Specialties <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Anxiety", desc: "Managing social anxiety and cultural performance pressure.", icon: <Shield className="size-8" />, id: 'anxiety' },
            { name: "Relationships", desc: "Navigating family boundaries and intergenerational conflicts.", icon: <Users className="size-8" />, id: 'relationships' },
            { name: "Mood Disorders", desc: "Balance and regulation for emotional well-being.", icon: <Droplets className="size-8" />, id: 'mood' },
            { name: "Depression", desc: "Renewing hope and finding light in difficult seasons.", icon: <Sun className="size-8" />, id: 'depression' },
            { name: "ADHD", desc: "Executive function support and focus strategies.", icon: <Brain className="size-8" />, id: 'adhd' },
            { name: "Learning Problems", desc: "Educational assessments and student support.", icon: <BookOpen className="size-8" />, id: 'learning' },
            { name: "OCD", desc: "Exposure therapies for intrusive thoughts and rituals.", icon: <TrendingUp className="size-8" />, id: 'ocd' },
            { name: "Anger Management", desc: "Healthy communication and emotional processing.", icon: <Flame className="size-8" />, id: 'anger' },
          ].map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              onClick={() => setCurrentPage(service.id)}
              className="group p-10 rounded-[2rem] border border-slate-100 bg-white hover:border-primary transition-all hover:shadow-2xl cursor-pointer"
            >
              <div className="size-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">{service.name}</h3>
              <p className="text-slate-500 font-medium mb-8 leading-relaxed">{service.desc}</p>
              <div className="text-primary font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                View Details <ChevronRight className="size-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 bg-primary/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black mb-6 tracking-tight">What Our Community Says</h2>
          <p className="text-slate-600 text-xl font-medium max-w-2xl mx-auto italic">"Healing is not a solo journey. We walk this path together with cultural understanding and clinical excellence."</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              name: "Arjun K.",
              role: "Tech Lead",
              text: "Finally a therapist who understands the nuances of a South Asian household without me having to explain the basics of our culture.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9AwVMpxnwHr_r_Cqnx0RDQx7NJQRgB9A04GqYsYb54xZ0igOpoannaPIWLAvXgAqQiLxhiMQ3ttlQIJzQaJiH4yQ1aQ__7HK3JbxIQASf8Oh8MubQxX-erRx_EWjpCFWZhMftvH6cE0jNhjvhQtLulojPP8SHwxv3kcWBOz9oRpilZNQsA71i0x3-AwWUQi9qUgllv_kdoP5ZV8gLumLaMxsKhQIiKjLcf99M4GBqrim2nzkjWzn-etLxeRfbN5AtI_37V7zctZQB"
            },
            {
              name: "Meilin S.",
              role: "Graphic Designer",
              text: "The relationship counseling helped us navigate boundary setting with our parents in a way that felt respectful yet empowering.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGYll8zcxJbPFrXg9ijByO-DC4I9KSu0S4sgK0YSM2xlZKGW9-BOoqjOL3wXrztdX4XRV6T2POTTfM318TTjSvmbfnFuCeNw8l18betiVqc1EeJ-C8qItLXnrCFcejuyFdiRs55B_s3-Nc6_p_F1C9RBlUITEEHKgDfi2lM6MNP3z2sVyALuvykyIeOwjtCcCjgDqJ0TK9-JONx517BybybGf7jr9_pxb246NZOg0VipVyZ-SyhdiVMOpntHVjzManz2ZXDWdMLeL9"
            },
            {
              name: "Priya R.",
              role: "Healthcare Professional",
              text: "The anxiety management tools were practical and culturally relevant. I felt truly heard for the first time.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIPQslHX2J5HxRf52U9Kp5y8LBXJq8BAEBOPGtL86s7ddkoJpPKxCFVI_9Fry_77hc8hfjmPP008RcBGfxV_Ww3PORcLiaVAFTMrdMkTk3ZUyjUlh7atbxIs96aH4ZNdhyPKPXUW-9vokkhWrfXDCu8KsGZDIaWpbcLG4Lz1VL7KwP1-t_nuMjoryqO2lUUxQuMMsi6WaJQBxQiQ8jTuI1xEGo6LwaOPw_MxB8g3wKu6qSBvO2ZAHiS9eDEUyuSnP5H8nTk5PvoPpw"
            },
            {
              name: "Kevin H.",
              role: "Graduate Student",
              text: "Safe, professional, and deeply empathetic. The focus on ADHD within an Asian context was life-changing for my studies.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBaTlGJQYXDPgUlDbDrFYyy6MVQe92XJsfHKmGf33hzgtceZSmVKBaC2q8IUBf65iq_PFPdmsxAi7Yja55kw94vLO_HesxeC0qVk6TQrL3v4dphAMnsnxxwKOGVDNonMP4cnzVuf5qwl0yzdYxn66rpMFeKnCfkexFe0uh0k4Zv1taa_1l14Wh51PpwGc2fHoaSsXpmKg4-7Q7AuWThP6ChlNXwy9HSnmE2ruwOEwyVNYkViaOafWsiXj6a5wTSHQ4eXtw67e1oX-vy"
            }
          ].map((t, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 flex flex-col gap-8"
            >
              <p className="text-slate-600 text-xl font-medium leading-relaxed italic">"{t.text}"</p>
              <div className="flex items-center gap-5 mt-auto">
                <div className="size-16 rounded-full overflow-hidden border-4 border-slate-50 shadow-sm">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">{t.name}</h4>
                  <p className="text-sm text-slate-400 font-bold uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white border border-slate-100 rounded-[3rem] overflow-hidden shadow-2xl">
          <div className="bg-primary p-12 text-white text-center">
            <h2 className="text-4xl font-black mb-4 tracking-tight">Request an Appointment</h2>
            <p className="text-white/70 text-lg font-medium">Take the first step towards mental clarity and peace.</p>
          </div>
          <div className="p-12 lg:p-16">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-col gap-3">
                <label className="text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <User className="size-4" /> Full Name
                </label>
                <input className="w-full h-14 px-5 rounded-2xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all font-medium" placeholder="John Doe" type="text"/>
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <Mail className="size-4" /> Email Address
                </label>
                <input className="w-full h-14 px-5 rounded-2xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all font-medium" placeholder="john@example.com" type="email"/>
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <LayoutDashboard className="size-4" /> Service Interest
                </label>
                <select className="w-full h-14 px-5 rounded-2xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all font-medium appearance-none">
                  <option>Anxiety Focus</option>
                  <option>Relationship Counseling</option>
                  <option>ADHD Assessment</option>
                  <option>Mood Support</option>
                </select>
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <Calendar className="size-4" /> Preferred Time
                </label>
                <input className="w-full h-14 px-5 rounded-2xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all font-medium" type="datetime-local"/>
              </div>
              <div className="flex flex-col gap-3 md:col-span-2">
                <label className="text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <FileText className="size-4" /> Tell us a little more (Optional)
                </label>
                <textarea className="w-full p-5 rounded-2xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all font-medium" placeholder="Briefly share your current concerns..." rows={4}></textarea>
              </div>
              <div className="md:col-span-2">
                <button className="w-full bg-primary text-white font-black py-5 rounded-2xl shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all text-lg">
                  Send Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </motion.div>
);

const servicesContent: Record<string, any> = {
  adhd: {
    name: "ADHD",
    title: "ADHD Therapy",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCy4FH8dl7LBdgLa6Wx5m0VAOTXTMui2eSgoi24W3Ro0rLSpKH_66xXDBW-ZxBSvZNcIskRjJVM0xEBWEAwUPQO2XLfalUOxtAEN3qgeTd4hZmgLzs-BPRP0cYcut2HjCkmoU3pogBA0lc75DMtEN0YAvG_8DZ1maXJeMje0THkXbBFfDZVUkktVVmiCoa9wbGxl3XYLHnyUjHhbBgWX--UlDiSM20CgN6H8OTsAev4fiuy073urT6VnoXFfa6GJRh-PDAWyHWYiMQC",
    about: [
      "Attention-Deficit/Hyperactivity Disorder (ADHD) is a neurodevelopmental condition that affects focus, impulse control, and activity levels. Our specialized therapy services provide a comprehensive framework for understanding and managing these challenges across all stages of life.",
      "We utilize evidence-based strategies, including Cognitive Behavioral Therapy (CBT), executive function coaching, and mindfulness-based interventions. Our approach is holistic, focusing not just on symptom management but on identifying your unique strengths and creating systems that work for your brain."
    ],
    faqs: [
      { q: "What are the common symptoms of ADHD?", a: "Common symptoms include difficulty sustaining attention in tasks, frequent careless mistakes, trouble organizing activities, avoiding tasks that require sustained mental effort, being easily distracted, and forgetfulness in daily activities." },
      { q: "How is ADHD diagnosed?", a: "Diagnosis involves a comprehensive clinical evaluation, including medical history, symptom checklists, and often psychological testing to rule out other conditions." },
      { q: "What treatments are available for ADHD?", a: "Treatments include behavioral therapy, executive function coaching, lifestyle modifications, and in some cases, medication management in collaboration with psychiatrists." }
    ]
  },
  anxiety: {
    name: "Anxiety",
    title: "Anxiety Focus",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDux4tgc24IS9ApbNw5EU4kuJqSeb6BOo9srb1U_F7DDvZ3RZfqcQIBjnj6yAJ3mpkmH7Rf_tSq2I1sslXT0vEIUm2u6a5BDOr9H5iB-5Ntkxn4LBW1LTnEw0ie36ZLwevm4umhx1MYk-4UqqgzIs9wxnmEqo4SeOxC_u-uwnR3WU7L1rMLWJWwkIP7L8Dp6PNTVWVWOSuest6aS7Hodu55butQJdEKdSsFA-0aq9mirkaHvyb0ZCwbyUnBXhFz_EPC7Q9wIDq-kqxk",
    about: [
      "Anxiety can manifest as persistent worry, physical tension, and a sense of being overwhelmed. Our anxiety-focused therapy helps you understand the root causes of your stress and provides practical tools to regain calm and control.",
      "We specialize in addressing cultural performance pressure and social anxiety within the Asian diaspora, recognizing how family expectations and societal standards can contribute to heightened stress levels."
    ],
    faqs: [
      { q: "How do I know if my anxiety is 'normal'?", a: "While some stress is normal, persistent anxiety that interferes with your daily life, sleep, or relationships often benefits from professional support." },
      { q: "What techniques do you use for anxiety?", a: "We use CBT, mindfulness, and somatic experiencing to help you manage both the mental and physical symptoms of anxiety." }
    ]
  },
  relationships: {
    name: "Relationships",
    title: "Relationship Counseling",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2sQ1ma-t35D4anIXDoseV7ecNyiQafHdzQiStRuKx6Z928f2AWDsWwKeAF0cNGOl-bM_qK7lgjbwHbFpW6MkIvmgnJf0YrGWwXYFvPUjZ2nBXi6DfqY4HmaQ4SbsKt7EVlncpzfMUKb9eVU4LEgowx3cSv4YXzKj3kxuoatV9TUhTvCA7CNKUEdz2dgwu_12q-FnwtzNlQTU5hY-Hn32kw4DRaRIh0uTnxLib3mcvZgNSRgK2Vsl9mGXwa4T4d0XOdpmE6VUZjMAG",
    about: [
      "Healthy relationships are the cornerstone of a fulfilling life. Our counseling services help individuals and couples navigate family boundaries, intergenerational conflicts, and interpersonal communication.",
      "We provide a safe space to explore the complexities of dating, marriage, and family dynamics, especially as they relate to cultural heritage and modern expectations."
    ],
    faqs: [
      { q: "Do we need to come as a couple?", a: "Not necessarily. We offer both individual relationship coaching and traditional couples therapy." },
      { q: "How can therapy help with family conflict?", a: "We help you develop healthy boundaries and communication strategies to navigate difficult family dynamics while respecting your values." }
    ]
  },
  mood: {
    name: "Mood Disorders",
    title: "Mood Support",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8L_vLNXH8wQ2nwnecBDrxOalsyZkMkaOcvKjKOXXEo8KIjLrai_VyhBC0PQ8ho_2NKp0EPyKypwCk4OTFqrjLKCD4gpJi6qAAefxGH9pVom7DiFrSxawx__--s39vlSNRLy0x-XrW19HTCireD5NeTeKB_YIfkh9LCAfTjVXCP1udEFxcdGA4tAaBiYGs_9XD3parB_y9c5S8Bt5ZueiP951eog6IcRKqKwV7AAmexEOU7vQORsYlaarfqR7i1Qrpzo-6UpaxcFr2",
    about: [
      "Mood disorders, including bipolar disorder and persistent depressive disorder, can significantly impact your quality of life. We provide balanced support for managing emotional fluctuations and finding stability.",
      "Our approach combines clinical expertise with a deep understanding of how cultural factors can influence the perception and management of mood disorders."
    ],
    faqs: [
      { q: "What is the difference between moodiness and a mood disorder?", a: "Mood disorders involve persistent emotional states that significantly disrupt your ability to function in daily life." },
      { q: "Can mood disorders be managed without medication?", a: "While therapy is highly effective, some mood disorders benefit from a combination of therapy and medication. We work collaboratively with your healthcare providers." }
    ]
  },
  depression: {
    name: "Depression",
    title: "Depression Care",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGYll8zcxJbPFrXg9ijByO-DC4I9KSu0S4sgK0YSM2xlZKGW9-BOoqjOL3wXrztdX4XRV6T2POTTfM318TTjSvmbfnFuCeNw8l18betiVqc1EeJ-C8qItLXnrCFcejuyFdiRs55B_s3-Nc6_p_F1C9RBlUITEEHKgDfi2lM6MNP3z2sVyALuvykyIeOwjtCcCjgDqJ0TK9-JONx517BybybGf7jr9_pxb246NZOg0VipVyZ-SyhdiVMOpntHVjzManz2ZXDWdMLeL9",
    about: [
      "Depression is more than just feeling sad; it's a persistent weight that can make even simple tasks feel impossible. We offer compassionate paths toward finding purpose and renewed energy.",
      "We recognize the stigma often associated with depression in Asian cultures and provide a discreet, supportive environment where you can heal without judgment."
    ],
    faqs: [
      { q: "How long does depression therapy take?", a: "The duration varies for everyone, but many clients begin to feel a sense of relief and hope within the first few months of consistent therapy." },
      { q: "What if I feel like I'm beyond help?", a: "That feeling is often a symptom of depression itself. We are here to hold hope for you until you can find it for yourself." }
    ]
  }
};

const ServiceDetail = ({ serviceId, setCurrentPage }: { serviceId: string, setCurrentPage: (page: string) => void, key?: string }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const content = servicesContent[serviceId] || servicesContent['adhd'];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-full h-full bg-gradient-to-br from-blue-50/50 via-slate-50/30 to-white opacity-60"></div>
        <div className="absolute -top-[10%] -right-[10%] w-[500px] h-[500px] bg-blue-100/20 rounded-full blur-3xl"></div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Sidebar */}
          <aside className="lg:col-span-3 flex flex-col gap-10">
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
              <h3 className="text-xl font-black mb-8 flex items-center gap-2 tracking-tight">
                Our Services
              </h3>
              <nav className="flex flex-col gap-2">
                {[
                  { name: 'Anger Management', id: 'anger' },
                  { name: 'OCD', id: 'ocd' },
                  { name: 'Anxiety', id: 'anxiety' },
                  { name: 'Relationships', id: 'relationships' },
                  { name: 'Mood Disorders', id: 'mood' },
                  { name: 'Depression', id: 'depression' },
                  { name: 'ADHD', id: 'adhd' },
                  { name: 'Learning Problem', id: 'learning' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentPage(item.id)}
                    className={`group flex items-center justify-between p-4 rounded-2xl transition-all ${serviceId === item.id ? 'bg-primary text-white shadow-xl shadow-primary/20' : 'hover:bg-slate-50 text-slate-600'}`}
                  >
                    <span className={`text-sm ${serviceId === item.id ? 'font-black' : 'font-semibold'}`}>{item.name}</span>
                    <ChevronRight className={`size-4 ${serviceId === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-all`} />
                  </button>
                ))}
              </nav>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
              <h3 className="text-xl font-black mb-8 tracking-tight">Book a Consultation</h3>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">First Name</label>
                  <input className="w-full bg-slate-50 border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary/20 font-medium" placeholder="Your name" type="text"/>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Family Name</label>
                  <input className="w-full bg-slate-50 border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary/20 font-medium" placeholder="Your family name" type="text"/>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Phone</label>
                  <input className="w-full bg-slate-50 border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary/20 font-medium" placeholder="000-000-0000" type="tel"/>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Date</label>
                    <input className="w-full bg-slate-50 border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary/20 font-medium" type="date"/>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Time</label>
                    <input className="w-full bg-slate-50 border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary/20 font-medium" type="time"/>
                  </div>
                </div>
                <button className="w-full bg-primary text-white font-black py-5 rounded-2xl mt-4 shadow-xl shadow-primary/20 hover:bg-primary/95 transition-all active:scale-[0.98] text-lg">
                  Book Online
                </button>
              </form>
            </div>
          </aside>

          {/* Content Area */}
          <div className="lg:col-span-9 space-y-16">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl group">
              <div className="aspect-[16/9] w-full">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  alt={content.title} 
                  src={content.image}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent flex flex-col justify-end p-12 lg:p-20">
                <h2 className="text-white text-5xl md:text-7xl font-black tracking-tight">{content.title}</h2>
              </div>
            </div>

            <section className="bg-white rounded-[3rem] p-12 lg:p-20 shadow-xl shadow-slate-200/50 border border-slate-100">
              <h3 className="text-3xl font-black mb-8 text-primary tracking-tight">About {content.name} Services</h3>
              <div className="text-slate-600 text-xl leading-relaxed space-y-8 font-medium">
                {content.about.map((p: string, i: number) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>

            <section className="space-y-10">
              <h3 className="text-3xl font-black text-primary px-4 tracking-tight">Frequently Asked Questions</h3>
              <div className="space-y-6">
                {content.faqs.map((faq: any, idx: number) => (
                  <div key={idx} className={`bg-white rounded-[2rem] border transition-all ${openFaq === idx ? 'border-primary/20 shadow-2xl shadow-primary/5' : 'border-slate-100 shadow-sm'}`}>
                    <button 
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-8 text-left group"
                    >
                      <span className={`text-xl font-black tracking-tight ${openFaq === idx ? 'text-primary' : 'text-slate-800'}`}>{faq.q}</span>
                      <ChevronRight className={`size-6 transition-transform ${openFaq === idx ? 'text-primary rotate-90' : 'text-slate-400'}`} />
                    </button>
                    <AnimatePresence>
                      {openFaq === idx && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="px-8 pb-10 text-slate-500 text-lg font-medium leading-relaxed border-t border-slate-50 pt-8">
                            <p>{faq.a}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </motion.div>
  );
};
const Home = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <HomeHero />
    <Benefits />
    <Specialties />
    <Process />
    <Testimonials />
    <CTA />
  </motion.div>
);

const About = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <AboutHero />
    <MissionApproach />
    <TopSpecialties />
    <CommunityVoices />
    <AppointmentForm />
  </motion.div>
);

const Specialties = () => {
  const specialties = [
    { name: "Anxiety", icon: <Wind className="size-7" /> },
    { name: "Relationships", icon: <Heart className="size-7" /> },
    { name: "Mood Disorders", icon: <BarChart2 className="size-7" /> },
    { name: "Depression", icon: <CloudRain className="size-7" /> },
    { name: "ADHD", icon: <Brain className="size-7" /> },
    { name: "Learning Problems", icon: <BookOpen className="size-7" /> },
    { name: "OCD", icon: <Shield className="size-7" /> },
    { name: "Anger Management", icon: <Flame className="size-7" /> },
  ];

  return (
    <section className="py-24 bg-background-light">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-black mb-16 tracking-tight">Our Specialties</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {specialties.map((spec, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
              className="p-8 bg-white rounded-2xl border border-slate-100 flex flex-col items-center gap-5 transition-all cursor-pointer"
            >
              <div className="size-14 bg-primary/5 rounded-xl flex items-center justify-center text-primary">
                {spec.icon}
              </div>
              <h4 className="font-bold text-slate-800">{spec.name}</h4>
            </motion.div>
          ))}
        </div>
        <button className="mt-16 px-10 py-4 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all shadow-lg shadow-primary/5">
          View all Services
        </button>
      </div>
    </section>
  );
};

const Process = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        <div className="flex-1 space-y-12">
          <h2 className="text-5xl font-black tracking-tight leading-tight">A simple path to wellness</h2>
          <div className="space-y-10">
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 size-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Calendar className="text-primary size-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-slate-900">1. Schedule a call</h3>
                <p className="text-slate-500 text-lg font-medium leading-relaxed">Book a free introductory consultation with your preferred expert.</p>
              </div>
            </div>
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 size-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <ClipboardList className="text-primary size-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-slate-900">2. Fill details</h3>
                <p className="text-slate-500 text-lg font-medium leading-relaxed">Share your history and goals through our secure, private platform.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[3rem] overflow-hidden shadow-2xl aspect-square border-8 border-slate-50"
          >
            <img 
              alt="Therapy process" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCv5gOKZSXvEuapcyFqSJRKs8ZHA2c9etXu6iYrsISEhPXzaenzbO-AOqqPwb2wjOxDzpVZYZC3jkEMVvsyQNXGrDCpbEJF-MPSEmztC4g56IaXSni4ANyw0bnhwwHAedXl1ABwQ1vgwI_yReHr8jbcxY7LpsFzVf07LptyqvVLhwoo4tGo7MdEPMD0vm1Zrxm4SUUGigky0eYmgFEGr6BzCTutYMXqH_Nt56h-NBIwL1XoqxuRJQ1eLh7TlOe_Ggn54NVHcYgNc1XF"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 bg-background-light overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-center text-4xl lg:text-5xl font-black mb-20 tracking-tight">What our clients say</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            name: "Kenji T.",
            text: "The search process was so intuitive. I found exactly who I needed within minutes.",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0mZx-GXQfrRNf2nC81BOvZFGjB_D23F2jO6xeXjlx_ksb9Gh-TDICk9WXYHISwlhBZsyWOhu_cPXyXvyXEO9pKq4vhF-jbru_xUanE9YUvYk83BWWA0rHt83hZy1LyI9G4RucuAgG6-DHjlOmwKKSkcHh5evhcpMY4vggKUuXmTvAOK5Ya_o1276k5wfWgHGLQ3iG5CuxFT4SGFq-4T4GtmNRtJt3JWwWq1o6KU4WZs3MjDh6RDrVWOryR78-ozevHWq2vpwtQDJS"
          },
          {
            name: "Mei L.",
            text: "Highly professional and compassionate therapists. nlitme changed my outlook on life.",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCL4ldsYNPhiX5qAzfvIasEIePSX84DIJ2Nmm_4RoZVQMDjAA-3iPyqOyU5HdrBvbcqCfiA7Ww0e8CSz-lRaaKPbW8ZC8afDpfbECDICzV5bxdAImrZHf59gWOKQOn9Jw6grywdBr5xoIipP4KrILpYnZJlbe_kBnEFWREu17yfl3l01B-0jhKvOSdUWxVztsyKLnhX5EMlRNz4Y787bAqXONXYGq7TQXAaf9U6e0y_MAiXs_fSANq4gh7LU8sP5Yb0bxH18aTRhv69"
          },
          {
            name: "David W.",
            text: "The online sessions are seamless. I appreciate the focus on privacy and security.",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJlLpvoWUo52u206vZhN5CxWf6fW8p_hxRbVd2TalU71ueld7stkpy3ucnUR4admEJQSRC5MlgXt2oZtHkKqZhmKPbHCOQO-rpNLO2j0WyG-ad_xIRoqpZXvckoW9u5YbVlTN3GWn5JpfZ0hn371nPTkltH91ONsYNVV7MDrdlkL8FyHYKNQLJQBqKtF-jMZ0duDEOp7BgKrbggHgPHjzoHvwxNqNEjDFouXeols7gt-_-NQyo86YezYAK_IL3MhAh8-5QXsOMn-lD"
          },
          {
            name: "Aria S.",
            text: "The specialized ADHD support I found here has been a game changer for my career.",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGL3TU653CTiplBN-DR7OP8SKdeD3JVGIrH75cJgOK-4LkAtg2Dda6rEjylUKibJsoQSl3pIGW8qeYGy1Wjapy3hYohAKd4uPX8XuzszKhCAiVq3kObHrpAigQ2yoZx9AR9gPAPWKAcWwtcdwUfmvz_y0g8RFweRqD4RQzMfb5jLiVzrLKBi0ShuHuq-t0Tj0UlBmn88-TJ-dhUNTDksoQmzIELfNnkIkbiie6Ph0jEGttWuD2rmk0d-iW4qH34H-KwF2Z9onUCqPD"
          }
        ].map((t, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-[2rem] border border-slate-100 space-y-6 shadow-sm hover:shadow-xl transition-all"
          >
            <div className="flex text-yellow-400 gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="size-4 fill-current" />)}
            </div>
            <p className="text-slate-600 font-medium italic leading-relaxed">"{t.text}"</p>
            <div className="flex items-center gap-4 pt-2">
              <div className="size-12 rounded-full overflow-hidden bg-slate-100 border-2 border-slate-50">
                <img alt={t.name} className="w-full h-full object-cover" src={t.img} referrerPolicy="no-referrer" />
              </div>
              <span className="font-bold text-slate-900">{t.name}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-24 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <div className="relative rounded-[3rem] bg-primary overflow-hidden flex flex-col md:flex-row items-center shadow-2xl shadow-primary/30">
        <div className="flex-1 p-10 lg:p-16 text-white space-y-8">
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight">Need assistance?</h2>
          <p className="text-white/80 text-xl font-medium leading-relaxed">Request a call now and our team will help you find the perfect match for your needs.</p>
          <button className="bg-white text-primary px-10 py-5 rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center gap-3 shadow-xl shadow-black/10">
            <Phone className="size-5" />
            Request a Call
          </button>
        </div>
        <div className="flex-1 h-80 md:h-[500px] w-full">
          <img 
            alt="Support team" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCW4-qJmnUJcHUE0CjLQedikCDfB1asux95XBmlLRQKn-VEZUrb3oy_ILiEyYaqDV4nugkI7EwWNhG83ROQnYG1O8m-_h14I3zYpPIscTrewWgTSAKqkI_aPQ_otwJEPySsYy8XJZfgiTfHvKp5cGFYHB4zWoqYbyufscddeRKUwTVYQrB_iSgV22HadJHKitsOFwJQYPYwBHnCdmQSeoZVMP7tuRquWZ7agAil-IssrGu1F7MMsh1MkoY_oUNxmLPyXxHT7tPI18uX"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  </section>
);

const Footer = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => (
  <footer className="bg-primary text-slate-300 pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-slate-800 pb-16">
        <div className="md:col-span-5 space-y-6">
          <div className="flex items-center gap-3">
            <div className="size-12 bg-white/10 rounded-xl flex items-center justify-center text-white border border-white/10">
              <span className="material-symbols-outlined text-3xl">spa</span>
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">nlitme</h2>
          </div>
          <p className="text-slate-400 text-lg leading-relaxed max-w-md">
            Empowering individuals through sophisticated mental wellness solutions and professional care. Your journey to inner peace begins here.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="size-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-white/20 transition-all">
              <Facebook className="size-5 text-white" />
            </a>
            <a href="#" className="size-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-white/20 transition-all">
              <Instagram className="size-5 text-white" />
            </a>
            <a href="#" className="size-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-white/20 transition-all">
              <Linkedin className="size-5 text-white" />
            </a>
            <a href="#" className="size-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-white/20 transition-all">
              <Twitter className="size-5 text-white" />
            </a>
          </div>
        </div>
        
        <div className="md:col-span-2 space-y-6">
          <h4 className="text-white font-bold text-lg">Services</h4>
          <ul className="space-y-4">
            <li><button onClick={() => setCurrentPage('anxiety')} className="hover:text-white transition-colors">Counseling</button></li>
            <li><button onClick={() => setCurrentPage('mood')} className="hover:text-white transition-colors">Meditation</button></li>
            <li><button onClick={() => setCurrentPage('services')} className="hover:text-white transition-colors">Workshops</button></li>
            <li><button onClick={() => setCurrentPage('depression')} className="hover:text-white transition-colors">Therapy</button></li>
          </ul>
        </div>
        
        <div className="md:col-span-2 space-y-6">
          <h4 className="text-white font-bold text-lg">Pages</h4>
          <ul className="space-y-4">
            <li><button onClick={() => setCurrentPage('about')} className="hover:text-white transition-colors">About Us</button></li>
            <li><button onClick={() => setCurrentPage('contact')} className="hover:text-white transition-colors">Contact</button></li>
            <li><button onClick={() => setCurrentPage('shop')} className="hover:text-white transition-colors">Shop</button></li>
            <li><button onClick={() => setCurrentPage('imageCredits')} className="hover:text-white transition-colors">Image Credits</button></li>
          </ul>
        </div>

        <div className="md:col-span-3 flex md:justify-end items-start">
          <button 
            className="group flex items-center gap-3 text-white font-bold bg-white/5 border border-white/10 px-6 py-4 rounded-xl hover:bg-white/10 transition-all"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Scroll to Top
            <ArrowUp className="size-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
      
      <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500 font-medium">
        <p>© 2026 nlitme - All rights reserved. Designed for wellbeing.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-slate-300 transition-colors">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>
);

const Contact = ({ key }: { key?: string }) => {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [contactSuccess, setContactSuccess] = useState<string | null>(null);
  const [contactError, setContactError] = useState<string | null>(null);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setContactSuccess(null);
    setContactError(null);

    if (!contactName.trim() || !contactMessage.trim()) {
      setContactError('Please fill in your name and message.');
      return;
    }

    try {
      setIsSending(true);
      await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: contactName.trim(),
          email: contactEmail.trim() || undefined,
          message: contactMessage.trim()
        })
      });

      setContactSuccess('Your message has been sent. We will get back to you within 24 hours.');
      setContactName('');
      setContactEmail('');
      setContactMessage('');
    } catch {
      setContactError('Unable to send your message right now. Please try again later.');
    } finally {
      setIsSending(false);
    }
  };

  return (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    className="gradient-bg min-h-screen"
  >
    <section className="max-w-7xl mx-auto px-6 lg:px-20 py-12 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 flex flex-col gap-8">
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full">Get in touch</span>
            <h1 className="text-4xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Contact us easily online, by phone or by dropping In
            </h1>
            <p className="text-lg text-slate-600 max-w-lg">
              Experience professional and accessible support tailored to your unique wellness journey. We're here to listen and help.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:translate-y-[-2px] transition-all shadow-lg">
              <Calendar className="size-5" />
              Schedule a call
            </button>
            <button className="bg-white border-2 border-slate-200 text-slate-900 px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-50 transition-all">
              <Phone className="size-5" />
              1-800-NLIT-ME
            </button>
          </div>
        </div>
        <div className="order-1 lg:order-2 relative">
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
            <img 
              alt="Smiling East Asian woman" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD94wHopYke5__Ss7vJNIhGFpWV0CR-SPtSQclmVjUZjXmi5-9n1bWUjzn5xNJ7C1KvJnaySTIJja32tkILK5jAUPH-vfagxD_AslRp-T3P_qjRqAiQYnbOi-WNOTFRLEQcEk7NnkMn7riD5gK9R8h1j8WTJHTQYcxKha3RVXuSknx76uxVA201Np77hmOLzp93BA2NWdzQm1N9N46yWSowSNBd0XLZEPFi87UJh5k6ynkYmFilYgPeaS9N7eI3TSIOO8g976H7dQEA"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block border border-slate-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">99%</div>
              <div>
                <p className="text-sm font-bold">Response Rate</p>
                <p className="text-xs text-slate-500">Average response under 2h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-white/50 py-20 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <span className="material-symbols-outlined text-primary">info</span>
          Contact Information
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="p-8 rounded-2xl bg-white shadow-sm border border-slate-100 flex gap-6">
            <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary">
              <MapPin className="size-6" />
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900">Main Headquarters</h3>
              <p className="text-slate-600">123 Wellness Way, Suite 100<br/>Minneapolis, MN 55401</p>
            </div>
          </div>
          <div className="p-8 rounded-2xl bg-white shadow-sm border border-slate-100 flex gap-6">
            <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary">
              <Clock className="size-6" />
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900">Office Hours</h3>
              <p className="text-slate-600">Mon-Fri: 9am - 6pm<br/>Sat: 10am - 2pm</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-6 lg:px-20 py-20">
      <div className="flex justify-between items-end mb-12">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">All Locations</h2>
          <p className="text-slate-500">Find the nearest nlit.me center to you.</p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all">
          <div className="aspect-video relative">
            <img 
              alt="Apple Valley Clinic" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDclohcdBOyNCOGBrqF6iJuhXyHtbmw4CUdw-OqNoaYUosAojShgto8UUPTHwmgz9KntLFXpN7GI5spYfVDPzT18naT7JJCkb4qROzt5B3eDvesJYT5S6p8QE_WEzAchAwi_YAmmnzp7_GsO5I9ZhyHBJLSHw3Wubli8fwDc4aO6Y476ayqs1Dx-nbhAinNbYtuaPe8VhSaOXeEgA1uGedg7wgjYO5FXIjyTP4ZCp99AMjZfj7JeBvjoNLg7gDXsug261cYBNoCpNKf"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold">Apple Valley</div>
          </div>
          <div className="p-8 space-y-4">
            <h3 className="text-xl font-bold">Apple Valley Clinic</h3>
            <p className="text-slate-600 text-sm">7654 Gardenia Lane, Apple Valley, MN 55124</p>
            <a className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline" href="#">
              Get Directions <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
        <div className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all">
          <div className="aspect-video relative">
            <img 
              alt="White Bear Lake Clinic" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBA_WVr1l5P2ZcL61N8A-i7anZthF2CSQTZrNO3oLdx7vN2atSgNTx4dyS-bOeykRkUSsXHSK0xPpTE231cs00Le7BkCkGP6l-BQ5PH3zREM5kR7iGLS3xvAuwhG6mGAiFoDZN8WmMJIVX1_1lyC1QYA-30EmRuPEYb452ZlqiflIICqn5htkICg4ZLpBVucIgtnfseqzO5EfsZUSx9T8ir4uuTEgyhKX-XBcanW8TikS6D7e5xwpdNP99tPQUiP2m18Z56XqmnvNuT"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold">White Bear Lake</div>
          </div>
          <div className="p-8 space-y-4">
            <h3 className="text-xl font-bold">White Bear Lake Clinic</h3>
            <p className="text-slate-600 text-sm">3321 Birch Street, White Bear Lake, MN 55110</p>
            <a className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline" href="#">
              Get Directions <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-6 lg:px-20 py-24">
          <div className="bg-primary/5 rounded-[3rem] overflow-hidden border border-primary/10">
        <div className="grid lg:grid-cols-2">
          <div className="hidden lg:block relative">
            <img 
              alt="Professional working" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuChHtGMSasWpbQU7mlUFf0y3YxhK5ZLP89UNblLat6jPWzmhZySTWJEUYKR4hoXXOjYwaPPrxmVwO86bDMKXMzAxwLr3-Da7YIKX9kclcswIb3bf5mIVr9fMW-QGj8HsBbu1wrz6FR4d2JVruywvKpkrjYX9sqGBWBfSzSx4TnBETyMqSL5zh3JYOuUBkp7Ka8CQ5q7zNPuSEsdw7m52H_P3wdJZs3AusTqNMaEMEMtMaYjFY61zsE_oZ6VEizW1u6Kk77erJLS-jvO"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/5"></div>
          </div>
            <div className="p-8 lg:p-16 space-y-8 bg-white/40">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Ask a Question</h2>
              <p className="text-slate-600">Can't find what you're looking for? Send us a message and our team will get back to you within 24 hours.</p>
            </div>
            <form className="space-y-6" onSubmit={handleContactSubmit}>
              {contactSuccess && (
                <p className="text-sm font-medium text-emerald-600">
                  {contactSuccess}
                </p>
              )}
              {contactError && (
                <p className="text-sm font-medium text-red-600">
                  {contactError}
                </p>
              )}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Full Name</label>
                  <input
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="John Doe"
                    type="text"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Email Address</label>
                  <input
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="john@example.com"
                    type="email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Your Message</label>
                <textarea
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  placeholder="How can we help you today?"
                  rows={4}
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                ></textarea>
              </div>
              <button
                className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-opacity-90 transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                type="submit"
                disabled={isSending}
              >
                {isSending ? 'Sending...' : 'Send Message'}
                <span className="material-symbols-outlined">send</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </motion.div>
  );
};

const Appointment = ({ setCurrentPage }: { setCurrentPage: (page: string) => void, key?: string }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('Morning (9 AM - 12 PM)');
  const [reason, setReason] = useState('');
  const [services, setServices] = useState<{ _id: string; name: string }[]>([]);
  const [serviceId, setServiceId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/services`);
        if (!res.ok) return;
        const data = await res.json();
        setServices(data);
      } catch {
        // ignore; form still usable without services
      }
    };
    fetchServices();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitSuccess(null);

    if (!fullName.trim() || !phone.trim() || !date || !timeSlot) {
      setSubmitError('Please fill in your name, phone, date, and time.');
      return;
    }

    try {
      setIsSubmitting(true);
      const res = await fetch(`${API_BASE_URL}/api/appointments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: fullName.trim(),
          phone: phone.trim(),
          date,
          time: timeSlot,
          notes: reason.trim() || undefined,
          serviceId: serviceId || undefined
        })
      });

      if (!res.ok) {
        const errorBody = await res.json().catch(() => null);
        throw new Error(errorBody?.message || 'Unable to book appointment. Please try again.');
      }

      setSubmitSuccess('Your appointment request has been sent. We will contact you shortly.');
      setFullName('');
      setPhone('');
      setDate('');
      setTimeSlot('Morning (9 AM - 12 PM)');
      setReason('');
      setServiceId('');
    } catch (err: any) {
      setSubmitError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex flex-col gap-6 md:gap-12 md:flex-row items-center bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
        <div 
          className="w-full md:w-1/2 h-[300px] md:h-[500px] bg-center bg-no-repeat bg-cover" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDb_-TNHzvzqzAg2-_UXo9fhoV3xQDurNB8W_ZvdLr5tuWj3P82M8QnE924hy3QLdE4FiOWLiu-Cvy_2THI812PTIgCwssqduqiK0OwX0_A2euZCcpDwi2NN8fYR1Md0xX3FEaczyhKX3J4pABiCOkDogqkGch6GgUfRMrbMFqB-mkBcgu_Gj2PbTDhQKrzTRKcEgOErKXPJTt4SN3DNqyG9-s0AArd3ViIxVH4XhtQlkgG2JwKPSxkkSB_maczQLuQtsCvv6ZqE2pG')" }}
        >
        </div>
        <div className="flex flex-col gap-6 p-8 md:w-1/2">
          <div className="flex flex-col gap-3">
            <span className="text-primary font-bold tracking-widest text-xs uppercase">Mental Well-being</span>
            <h1 className="text-slate-900 text-4xl md:text-5xl font-black leading-tight tracking-tight">
              Book an Appointment
            </h1>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Take the first step towards a healthier mind. Our specialists are here to guide you through your journey of self-discovery and healing.
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="size-8 rounded-full border-2 border-white bg-slate-200"></div>
              ))}
            </div>
            <span className="text-sm font-medium text-slate-500">Joined by 500+ happy clients</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 py-10">
        <div className="lg:col-span-2 flex flex-col gap-8">
          <section className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Appointment Request Form</h2>
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="flex flex-col gap-2">
                  <span className="text-slate-700 text-sm font-semibold">Full Name</span>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 size-5" />
                    <input
                      className="w-full pl-11 pr-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      placeholder="E.g. Ananya Sharma"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-slate-700 text-sm font-semibold">Phone Number</span>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 size-5" />
                    <input
                      className="w-full pl-11 pr-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      placeholder="+91 00000 00000"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-slate-700 text-sm font-semibold">Preferred Date</span>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 size-5" />
                    <input
                      className="w-full pl-11 pr-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-slate-700 text-sm font-semibold">Preferred Time Slot</span>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 size-5" />
                    <select
                      className="w-full pl-11 pr-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none"
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                    >
                      <option>Morning (9 AM - 12 PM)</option>
                      <option>Afternoon (12 PM - 4 PM)</option>
                      <option>Evening (4 PM - 8 PM)</option>
                    </select>
                  </div>
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-slate-700 text-sm font-semibold">Service Interest</span>
                  <div className="relative">
                    <LayoutDashboard className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 size-5" />
                    <select
                      className="w-full pl-11 pr-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none"
                      value={serviceId}
                      onChange={(e) => setServiceId(e.target.value)}
                    >
                      <option value="">Select a service (optional)</option>
                      {services.map((service) => (
                        <option key={service._id} value={service._id}>
                          {service.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </label>
              </div>
              <label className="flex flex-col gap-2">
                <span className="text-slate-700 text-sm font-semibold">Reason for Appointment (Optional)</span>
                <textarea
                  className="w-full p-4 rounded-lg border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  placeholder="How can we help you?"
                  rows={4}
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                ></textarea>
              </label>
              {submitError && (
                <p className="text-sm text-red-600 font-medium">{submitError}</p>
              )}
              {submitSuccess && (
                <p className="text-sm text-emerald-600 font-medium">{submitSuccess}</p>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-max px-10 py-4 bg-primary text-white font-bold rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? 'Booking...' : 'Book an Appointment'}</span>
                {!isSubmitting && <ArrowRight className="size-5" />}
              </button>
            </form>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-6">What happens next?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "1. Fill out form", desc: "Provide your basic details and preference for the session.", icon: <FileText className="size-6" /> },
                { title: "2. Specialist call", desc: "Our intake specialist will call you for a brief assessment.", icon: <Phone className="size-6" /> },
                { title: "3. Match with therapist", desc: "We pair you with the best professional for your specific needs.", icon: <User className="size-6" /> }
              ].map((step, i) => (
                <div key={i} className="flex flex-col gap-4 p-8 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{step.title}</h4>
                    <p className="text-sm text-slate-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="flex flex-col gap-10">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold mb-5 flex items-center gap-2">
              <Brain className="text-primary size-5" />
              Our Specialties
            </h3>
            <ul className="flex flex-col gap-3">
              {['Anxiety', 'Relationships', 'Mood Disorders', 'Depression', 'ADHD', 'Learning Problems', 'OCD', 'Anger Management'].map(s => (
                <li key={s} className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg cursor-pointer">
                  <CheckCircle2 className="text-primary/60 size-4" />
                  <span className="text-sm font-medium">{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold mb-5 flex items-center gap-2">
              <ClipboardList className="text-primary size-5" />
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {['About Us', 'Our Services', 'Contacts', 'Shop', 'Image Credits'].map(link => (
                <li key={link}>
                  <button onClick={() => setCurrentPage(link === 'About Us' ? 'about' : link === 'Our Services' ? 'services' : link === 'Contacts' ? 'contact' : link === 'Shop' ? 'shop' : 'imageCredits')} className="text-sm text-slate-600 hover:text-primary py-1 block text-left w-full">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  </motion.div>
  );
};

const ComingSoon = ({ key }: { key?: string }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    className="flex flex-1 flex-col items-center justify-center px-6 py-20 text-center relative overflow-hidden min-h-[60vh]"
  >
    <div className="absolute inset-0 -z-10 opacity-30">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 via-stone-50 to-white"></div>
    </div>
    <div className="mx-auto max-w-3xl">
      <span className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
        Coming Soon
      </span>
      <h1 className="font-serif text-5xl font-bold leading-tight text-primary md:text-7xl">
        Great things are on the horizon
      </h1>
      <p className="mt-8 text-lg leading-relaxed text-slate-600 md:text-xl">
        Something big is brewing! Our store is in the works and will be launching soon!
      </p>
      <div className="mt-12 flex flex-wrap justify-center gap-4 md:gap-8">
        {[
          { val: '05', label: 'Days' },
          { val: '12', label: 'Hours' },
          { val: '45', label: 'Minutes' },
          { val: '30', label: 'Seconds' }
        ].map(item => (
          <div key={item.label} className="flex min-w-[100px] flex-col gap-2">
            <div className="flex h-20 items-center justify-center rounded-2xl bg-white text-3xl font-bold text-primary shadow-xl shadow-primary/5">
              {item.val}
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{item.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <input className="w-full max-w-sm rounded-lg border-primary/10 bg-white px-6 py-4 shadow-sm focus:border-primary focus:ring-primary sm:w-80" placeholder="Enter your email" type="email"/>
        <button className="w-full rounded-lg bg-primary px-8 py-4 font-bold text-white transition-all hover:scale-105 active:scale-95 sm:w-auto">Notify Me</button>
      </div>
    </div>
  </motion.div>
);

const ImageCredits = ({ key }: { key?: string }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <section className="relative w-full py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-orange-50/30 -z-10"></div>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="font-serif text-5xl md:text-7xl text-slate-900 mb-6 tracking-tight">Image Credits</h1>
        <div className="flex items-center justify-center gap-2 text-slate-500 font-medium">
          <span>Home</span>
          <ChevronRight className="size-4" />
          <span className="text-primary">Image Credits</span>
        </div>
      </div>
    </section>
    <main className="max-w-7xl mx-auto px-6 py-20 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
        {[
          { provider: "Streamline", desc: "Premium icons and detailed vector illustrations used throughout the platform to enhance visual clarity and mental wellness guidance.", icon: <LayoutDashboard className="size-6" /> },
          { provider: "Pexels", desc: "High-quality, diverse stock photography focusing on serenity, natural wellness, and professional mental health environments.", icon: <Camera className="size-6" /> },
          { provider: "Freepik", desc: "Elegant vector graphics, background patterns, and creative assets that form the foundation of our sophisticated brand aesthetic.", icon: <ClipboardList className="size-6" /> },
          { provider: "Unsplash", desc: "Premium atmospheric imagery and artistic landscape shots curated to provide a calming, inviting experience for our visitors.", icon: <Camera className="size-6" /> }
        ].map((item, i) => (
          <div key={i} className="group border-t border-slate-200 pt-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-xs font-bold tracking-[0.2em] text-primary/50 uppercase">Provider</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">{item.provider}</h3>
              </div>
              <div className="text-slate-300 group-hover:text-primary transition-colors">
                {item.icon}
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed text-lg">{item.desc}</p>
            <a className="inline-flex items-center gap-2 mt-6 text-primary font-bold hover:gap-3 transition-all" href="#">
              View Resources <ArrowRight className="size-4" />
            </a>
          </div>
        ))}
      </div>
    </main>
  </motion.div>
);

export default function App() {
  const getInitialPageFromPath = () => {
    const rawPath = window.location.pathname.replace(/^\//, '').toLowerCase();
    if (!rawPath || rawPath === '') return 'home';
    if (rawPath === 'about') return 'about';
    if (rawPath === 'services') return 'services';
    if (rawPath === 'contact') return 'contact';
    if (rawPath === 'appointment') return 'appointment';
    if (rawPath === 'shop') return 'shop';
    if (rawPath === 'image-credits' || rawPath === 'imagecredits') return 'imageCredits';
    if (['adhd', 'anxiety', 'relationships', 'mood', 'depression', 'learning', 'ocd', 'anger'].includes(rawPath)) {
      return rawPath;
    }
    return 'home';
  };

  const [currentPage, setCurrentPageState] = useState(getInitialPageFromPath);

  const setCurrentPage = (page: string) => {
    setCurrentPageState(page);

    let path = '/';
    if (page === 'about') path = '/about';
    else if (page === 'services') path = '/services';
    else if (page === 'contact') path = '/contact';
    else if (page === 'appointment') path = '/appointment';
    else if (page === 'shop') path = '/shop';
    else if (page === 'imageCredits') path = '/image-credits';
    else if (['adhd', 'anxiety', 'relationships', 'mood', 'depression', 'learning', 'ocd', 'anger'].includes(page)) {
      path = `/${page}`;
    }

    window.history.pushState({}, '', path);
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPageState(getInitialPageFromPath());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && <Home key="home" />}
          {currentPage === 'about' && <About key="about" />}
          {currentPage === 'services' && <Services key="services" setCurrentPage={setCurrentPage} />}
          {['adhd', 'anxiety', 'relationships', 'mood', 'depression', 'learning', 'ocd', 'anger'].includes(currentPage) && (
            <ServiceDetail key={currentPage} serviceId={currentPage} setCurrentPage={setCurrentPage} />
          )}
          {currentPage === 'contact' && <Contact key="contact" />}
          {currentPage === 'appointment' && <Appointment key="appointment" setCurrentPage={setCurrentPage} />}
          {currentPage === 'shop' && <ComingSoon key="shop" />}
          {currentPage === 'imageCredits' && <ImageCredits key="imageCredits" />}
        </AnimatePresence>
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
