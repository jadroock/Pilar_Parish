import { useState, useEffect } from 'react';
import { 
  Church, 
  Clock, 
  Calendar, 
  Heart, 
  Users, 
  MessageSquare, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronRight, 
  Menu, 
  X,
  Info,
  HandHeart,
  Newspaper
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MASS_SCHEDULE, CONFESSION_SCHEDULE, SACRAMENTS, MINISTRIES, EVENTS, NEWS } from './constants';

type Page = 'home' | 'about' | 'mass-times' | 'ministries' | 'events' | 'news' | 'donate' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navItems = [
    { id: 'home', label: 'Home', icon: Church },
    { id: 'about', label: 'About', icon: Info },
    { id: 'mass-times', label: 'Mass Times', icon: Clock },
    { id: 'ministries', label: 'Ministries', icon: Users },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'news', label: 'News', icon: Newspaper },
    { id: 'donate', label: 'Donate', icon: Heart },
    { id: 'contact', label: 'Contact', icon: MapPin },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div 
              className="flex items-center cursor-pointer" 
              onClick={() => setCurrentPage('home')}
            >
              <div className="w-12 h-12 bg-church-blue rounded-full flex items-center justify-center text-white mr-3">
                <Church size={24} />
              </div>
              <div>
                <h1 className="text-lg font-serif font-bold text-church-blue leading-tight">
                  Our Lady of the Holy Rosary of Fatima
                </h1>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-medium">
                  Poblacion, Pilar, Abra
                </p>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id as Page)}
                  className={`text-sm font-medium transition-colors hover:text-church-blue ${
                    currentPage === item.id ? 'text-church-blue border-b-2 border-church-blue' : 'text-slate-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="hidden md:block">
              <button 
                onClick={() => setCurrentPage('donate')}
                className="bg-church-blue text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-800 transition-all shadow-md"
              >
                Donate
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.id as Page);
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center w-full px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
                  >
                    <item.icon size={20} className="mr-3 text-church-blue" />
                    {item.label}
                  </button>
                ))}
                <button 
                  onClick={() => {
                    setCurrentPage('donate');
                    setIsMenuOpen(false);
                  }}
                  className="w-full mt-4 bg-church-blue text-white px-6 py-3 rounded-lg text-center font-semibold"
                >
                  Donate Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {currentPage === 'home' && <HomePage onNavigate={setCurrentPage} />}
            {currentPage === 'about' && <AboutPage />}
            {currentPage === 'mass-times' && <MassTimesPage />}
            {currentPage === 'ministries' && <MinistriesPage />}
            {currentPage === 'events' && <EventsPage />}
            {currentPage === 'news' && <NewsPage />}
            {currentPage === 'donate' && <DonatePage />}
            {currentPage === 'contact' && <ContactPage />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center mb-6">
                <Church size={32} className="text-blue-400 mr-3" />
                <h2 className="text-xl font-serif font-bold">Our Lady of Fatima</h2>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                A community of faith, hope, and love in the heart of Pilar, Abra. 
                Dedicated to the spiritual growth and service of our parishioners.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-church-blue transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><button onClick={() => setCurrentPage('mass-times')} className="hover:text-white transition-colors">Mass Schedule</button></li>
                <li><button onClick={() => setCurrentPage('about')} className="hover:text-white transition-colors">Our History</button></li>
                <li><button onClick={() => setCurrentPage('ministries')} className="hover:text-white transition-colors">Ministries</button></li>
                <li><button onClick={() => setCurrentPage('donate')} className="hover:text-white transition-colors">Online Giving</button></li>
                <li><button onClick={() => setCurrentPage('contact')} className="hover:text-white transition-colors">Contact Us</button></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Mass Times</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="flex justify-between"><span>Mon-Sat:</span> <span>6:00 AM</span></li>
                <li className="flex justify-between"><span>Sat (Antic):</span> <span>5:00 PM</span></li>
                <li className="flex justify-between font-medium text-white"><span>Sunday:</span> <span>7:00 AM, 9:00 AM, 5:00 PM</span></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li className="flex items-start">
                  <MapPin size={18} className="mr-3 text-blue-400 shrink-0" />
                  <span>Poblacion, Pilar, Abra, 2812 Philippines</span>
                </li>
                <li className="flex items-center">
                  <Phone size={18} className="mr-3 text-blue-400 shrink-0" />
                  <span>+63 (074) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <Mail size={18} className="mr-3 text-blue-400 shrink-0" />
                  <span>office@fatimapilarabra.ph</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
            <p>&copy; {new Date().getFullYear()} Parish of Our Lady of the Holy Rosary of Fatima. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- Page Components ---

function HomePage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/church-pilar/1920/1080" 
            alt="Parish Church" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-church-blue/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl"
          >
            <h2 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
              Welcome to Our Parish Family
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-blue-50 font-light">
              Join us in worship, service, and community as we follow the path of Christ under the mantle of Our Lady.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavigate('mass-times')}
                className="bg-white text-church-blue px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-lg flex items-center justify-center"
              >
                View Mass Times <ChevronRight size={20} className="ml-2" />
              </button>
              <button 
                onClick={() => onNavigate('about')}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center"
              >
                Our Story
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Next Mass Banner */}
      <div className="bg-church-light-blue py-6 border-y border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-6 text-church-blue">
          <div className="flex items-center font-semibold">
            <Clock size={24} className="mr-3" />
            <span className="text-lg">Next Mass: Today at 5:00 PM (Anticipated)</span>
          </div>
          <div className="h-px w-12 bg-blue-300 hidden md:block"></div>
          <button 
            onClick={() => onNavigate('mass-times')}
            className="text-sm font-bold uppercase tracking-widest hover:underline"
          >
            Full Schedule
          </button>
        </div>
      </div>

      {/* Feature Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">How Can We Serve You?</h2>
            <div className="w-24 h-1 bg-church-blue mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Users} 
              title="Ministries" 
              description="Find your place in our community through our various service groups and youth programs."
              onClick={() => onNavigate('ministries')}
            />
            <FeatureCard 
              icon={Calendar} 
              title="Events" 
              description="Stay updated with our parish calendar, retreats, and community gatherings."
              onClick={() => onNavigate('events')}
            />
            <FeatureCard 
              icon={HandHeart} 
              title="Prayer Requests" 
              description="Submit your intentions and let our community join you in prayer."
              onClick={() => onNavigate('contact')}
            />
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-slate-900">Latest Announcements</h2>
              <p className="text-slate-500 mt-2">Stay informed with the latest from our parish.</p>
            </div>
            <button 
              onClick={() => onNavigate('news')}
              className="hidden md:flex items-center text-church-blue font-bold hover:underline"
            >
              View All News <ChevronRight size={18} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {NEWS.slice(0, 2).map((item) => (
              <div key={item.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full">
                <span className="text-xs font-bold text-church-blue uppercase tracking-widest mb-4">{item.category}</span>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 mb-6 flex-grow">{item.excerpt}</p>
                <div className="flex justify-between items-center pt-6 border-t border-slate-50">
                  <span className="text-sm text-slate-400">{item.date}</span>
                  <button onClick={() => onNavigate('news')} className="text-church-blue font-semibold hover:underline">Read More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stewardship Banner */}
      <section className="py-20 marian-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Support Our Mission</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Your generosity allows us to maintain our beautiful church and continue our outreach programs for those in need.
          </p>
          <button 
            onClick={() => onNavigate('donate')}
            className="bg-white text-church-blue px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-xl"
          >
            Give Online
          </button>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, description, onClick }: { icon: any, title: string, description: string, onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="group bg-white p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all cursor-pointer hover:-translate-y-1"
    >
      <div className="w-16 h-16 bg-church-light-blue rounded-2xl flex items-center justify-center text-church-blue mb-8 group-hover:bg-church-blue group-hover:text-white transition-colors">
        <Icon size={32} />
      </div>
      <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">{title}</h3>
      <p className="text-slate-600 leading-relaxed mb-6">{description}</p>
      <div className="flex items-center text-church-blue font-bold group-hover:translate-x-2 transition-transform">
        Learn More <ChevronRight size={18} className="ml-1" />
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif font-bold text-church-blue mb-8 text-center">Our Story</h2>
        <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
          <p className="mb-6">
            The Parish of Our Lady of the Holy Rosary of Fatima in Poblacion, Pilar, Abra, has been a beacon of faith for generations. 
            Founded with a mission to serve the spiritual needs of the community, our church stands as a testament to the enduring 
            devotion of the people of Pilar.
          </p>
          
          <div className="my-12 bg-church-light-blue p-8 rounded-2xl border-l-4 border-church-blue italic font-serif text-xl text-church-blue">
            "To be a vibrant community of faith, united in Christ, serving one another with love and compassion under the guidance of Mary."
          </div>

          <h3 className="text-2xl font-serif font-bold text-slate-900 mt-12 mb-6">Our History</h3>
          <p className="mb-6">
            Established in the mid-20th century, the parish has grown from a small chapel to the beautiful structure it is today. 
            Throughout the years, it has survived challenges and celebrated countless milestones, always remaining at the heart 
            of the town's cultural and spiritual life.
          </p>

          <h3 className="text-2xl font-serif font-bold text-slate-900 mt-12 mb-6">Pastoral Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 not-prose">
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-lg text-church-blue">Rev. Fr. Antonio Reyes</h4>
              <p className="text-sm text-slate-500 mb-2">Parish Priest</p>
              <p className="text-slate-600 text-sm">Serving our parish since 2020 with a heart for youth and community building.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-lg text-church-blue">Rev. Fr. Joseph Lalin</h4>
              <p className="text-sm text-slate-500 mb-2">Parochial Vicar</p>
              <p className="text-slate-600 text-sm">Dedicated to liturgical excellence and pastoral care for the elderly.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MassTimesPage() {
  return (
    <div className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-church-blue mb-4">Mass Times & Sacraments</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Join us in the celebration of the Holy Eucharist and the reception of the Sacraments.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Mass Schedule */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center mb-8">
                <Clock className="text-church-blue mr-3" size={28} />
                <h3 className="text-2xl font-serif font-bold">Weekly Mass Schedule</h3>
              </div>
              <div className="divide-y divide-slate-100">
                {MASS_SCHEDULE.map((item, idx) => (
                  <div key={idx} className="py-4 flex justify-between items-center">
                    <div>
                      <span className="font-bold text-slate-900">{item.day}</span>
                      <p className="text-sm text-slate-500">{item.type}</p>
                    </div>
                    <span className="text-church-blue font-serif font-bold text-xl">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center mb-6">
                <MessageSquare className="text-church-blue mr-3" size={28} />
                <h3 className="text-2xl font-serif font-bold">Confession</h3>
              </div>
              <p className="text-slate-700 text-lg">{CONFESSION_SCHEDULE}</p>
            </div>
          </div>

          {/* Sacraments Sidebar */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">Sacramental Information</h3>
            {SACRAMENTS.map((sac, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-church-blue mb-2">{sac.title}</h4>
                <p className="text-sm text-slate-600 mb-4">{sac.description}</p>
                {sac.requirements && (
                  <div className="mt-2">
                    <p className="text-xs font-bold uppercase text-slate-400 mb-2">Requirements:</p>
                    <ul className="text-xs text-slate-500 list-disc pl-4 space-y-1">
                      {sac.requirements.map((req, i) => <li key={i}>{req}</li>)}
                    </ul>
                  </div>
                )}
              </div>
            ))}
            <div className="bg-church-blue p-6 rounded-xl text-white">
              <h4 className="font-bold mb-2">Need to schedule?</h4>
              <p className="text-sm text-blue-100 mb-4">For weddings, funerals, or house blessings, please visit the parish office.</p>
              <button className="w-full bg-white text-church-blue py-2 rounded-lg font-bold text-sm">Contact Office</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MinistriesPage() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-church-blue mb-4">Our Ministries</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Discover how you can use your talents to serve God and our community.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MINISTRIES.map((min) => (
            <div key={min.id} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-serif font-bold text-church-blue mb-4">{min.name}</h3>
              <p className="text-slate-600 mb-6">{min.description}</p>
              <div className="space-y-3 text-sm">
                <div className="flex items-center text-slate-500">
                  <Clock size={16} className="mr-2" />
                  <span>{min.schedule}</span>
                </div>
                <div className="flex items-center text-slate-500">
                  <Users size={16} className="mr-2" />
                  <span>Contact: {min.contact}</span>
                </div>
              </div>
              <button className="mt-8 w-full border border-church-blue text-church-blue py-2 rounded-lg font-bold hover:bg-church-blue hover:text-white transition-all">
                Join Ministry
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function EventsPage() {
  return (
    <div className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif font-bold text-church-blue mb-12 text-center">Upcoming Events</h2>
        <div className="grid grid-cols-1 gap-8">
          {EVENTS.map((event) => (
            <div key={event.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 flex flex-col md:flex-row">
              <div className="md:w-48 bg-church-blue text-white flex flex-col items-center justify-center p-8 text-center">
                <span className="text-sm uppercase tracking-widest font-bold opacity-80">{new Date(event.date).toLocaleString('default', { month: 'short' })}</span>
                <span className="text-5xl font-serif font-bold">{new Date(event.date).getDate()}</span>
                <span className="text-sm mt-2">{new Date(event.date).getFullYear()}</span>
              </div>
              <div className="p-8 flex-grow">
                <div className="flex items-center mb-2">
                  <span className="px-3 py-1 bg-blue-100 text-church-blue text-xs font-bold rounded-full uppercase tracking-wider">{event.category}</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">{event.title}</h3>
                <p className="text-slate-600 mb-6">{event.description}</p>
                <div className="flex flex-wrap gap-6 text-sm text-slate-500">
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2 text-church-blue" />
                    {event.time}
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2 text-church-blue" />
                    {event.location}
                  </div>
                </div>
              </div>
              <div className="p-8 bg-slate-50 flex items-center justify-center">
                <button className="bg-church-blue text-white px-8 py-3 rounded-full font-bold shadow-md hover:bg-blue-800 transition-all">
                  RSVP Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function NewsPage() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif font-bold text-church-blue mb-12 text-center">Parish News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {NEWS.map((item) => (
            <article key={item.id} className="group cursor-pointer">
              <div className="aspect-video bg-slate-200 rounded-2xl mb-6 overflow-hidden">
                <img src={`https://picsum.photos/seed/news-${item.id}/800/450`} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs font-bold text-church-blue uppercase tracking-widest">{item.category}</span>
                <span className="text-xs text-slate-400">{item.date}</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4 group-hover:text-church-blue transition-colors">{item.title}</h3>
              <p className="text-slate-600 mb-6 line-clamp-3">{item.excerpt}</p>
              <div className="flex items-center text-church-blue font-bold">
                Read Full Story <ChevronRight size={18} className="ml-1" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function DonatePage() {
  const [amount, setAmount] = useState('500');
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time');

  return (
    <div className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-church-blue mb-4">Stewardship & Giving</h2>
          <p className="text-slate-500">Your contributions support our parish operations and outreach missions.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
          <div className="marian-gradient p-10 text-white text-center">
            <h3 className="text-2xl font-serif font-bold mb-2">Make a Donation</h3>
            <p className="text-blue-100">"God loves a cheerful giver." — 2 Corinthians 9:7</p>
          </div>
          
          <div className="p-10">
            <div className="flex justify-center mb-10">
              <div className="bg-slate-100 p-1 rounded-full flex">
                <button 
                  onClick={() => setFrequency('one-time')}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${frequency === 'one-time' ? 'bg-white text-church-blue shadow-sm' : 'text-slate-500'}`}
                >
                  One-time
                </button>
                <button 
                  onClick={() => setFrequency('monthly')}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${frequency === 'monthly' ? 'bg-white text-church-blue shadow-sm' : 'text-slate-500'}`}
                >
                  Monthly
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {['200', '500', '1000'].map((val) => (
                <button
                  key={val}
                  onClick={() => setAmount(val)}
                  className={`py-4 rounded-xl border-2 font-bold text-lg transition-all ${amount === val ? 'border-church-blue bg-blue-50 text-church-blue' : 'border-slate-100 text-slate-500 hover:border-blue-200'}`}
                >
                  ₱{val}
                </button>
              ))}
            </div>

            <div className="mb-10">
              <label className="block text-sm font-bold text-slate-700 mb-2">Custom Amount (PHP)</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₱</span>
                <input 
                  type="number" 
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full pl-10 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-church-blue font-bold text-xl"
                  placeholder="Enter amount"
                />
              </div>
            </div>

            <button className="w-full bg-church-blue text-white py-5 rounded-2xl font-bold text-xl shadow-lg hover:bg-blue-800 transition-all flex items-center justify-center">
              Donate ₱{amount} {frequency === 'monthly' ? '/ month' : ''}
            </button>

            <div className="mt-8 flex items-center justify-center gap-6 opacity-50 grayscale">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-4" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-6" />
              <span className="font-bold text-slate-900">GCash</span>
              <span className="font-bold text-slate-900">PayMaya</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-serif font-bold text-church-blue mb-6">Get in Touch</h2>
            <p className="text-slate-600 mb-10 text-lg">
              Have questions about sacraments, volunteering, or our parish life? 
              We're here to help. Reach out to us or visit the parish office.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-church-light-blue rounded-xl flex items-center justify-center text-church-blue mr-4 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Address</h4>
                  <p className="text-slate-600">Poblacion, Pilar, Abra, 2812 Philippines</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-church-light-blue rounded-xl flex items-center justify-center text-church-blue mr-4 shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Office Hours</h4>
                  <p className="text-slate-600">Tuesday - Saturday: 8:00 AM - 12:00 PM, 1:30 PM - 5:00 PM</p>
                  <p className="text-slate-600">Sunday: 8:00 AM - 12:00 PM</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-church-light-blue rounded-xl flex items-center justify-center text-church-blue mr-4 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Phone & Email</h4>
                  <p className="text-slate-600">+63 (074) 123-4567</p>
                  <p className="text-slate-600">office@fatimapilarabra.ph</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-8">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-church-blue outline-none" placeholder="Juan Dela Cruz" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-church-blue outline-none" placeholder="juan@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-church-blue outline-none">
                  <option>General Inquiry</option>
                  <option>Sacrament Inquiry</option>
                  <option>Prayer Request</option>
                  <option>Volunteer Interest</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea rows={5} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-church-blue outline-none" placeholder="How can we help you?"></textarea>
              </div>
              <button className="w-full bg-church-blue text-white py-4 rounded-xl font-bold shadow-lg hover:bg-blue-800 transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-20 h-[400px] bg-slate-200 rounded-3xl overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-bold">
            <div className="text-center">
              <MapPin size={48} className="mx-auto mb-4 opacity-20" />
              <p>Google Map Integration Placeholder</p>
              <p className="text-sm font-normal">Poblacion, Pilar, Abra</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
