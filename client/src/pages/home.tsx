import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Invalid email address"),
  experience: z.string().min(1, "Please select your experience level"),
});

type FormData = z.infer<typeof formSchema>;

export default function Home() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Registration Successful!",
      description: "We'll contact you soon with class details.",
    });

    setIsSubmitting(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen text-gray-100 font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass-card glow-border">
        <div className="container mx-auto px-6 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-gold-400 to-gold-600">
                <img
                  src="/logo1.jpg" // <-- Use your image path in public folder
                  alt="Logo1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-serif font-bold text-gold-400">RadheKrishna</h1>
                <p className="text-lg font-script text-gold-300">Garba Classes</p>
              </div>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden p-2 rounded-lg hover:bg-dark-700 transition-colors" data-testid="button-mobile-menu">
              <span className="material-icons text-gold-400">menu</span>
            </button>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection('classes')}
                className="text-gray-300 hover:text-gold-400 transition-colors font-medium"
                data-testid="link-classes"
              >
                Classes
              </button>
              <button
                onClick={() => scrollToSection('instructor')}
                className="text-gray-300 hover:text-gold-400 transition-colors font-medium"
                data-testid="link-instructor"
              >
                Instructor
              </button>
              <button
                onClick={() => scrollToSection('register')}
                className="bg-gold-500 hover:bg-gold-600 text-dark-900 px-6 py-2 rounded-lg font-semibold transition-colors"
                data-testid="button-register-nav"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Hero Section */}
        <div className="glass-card rounded-2xl p-4 md:p-4 hover-lift relative overflow-hidden">
          <div className="relative z-10">
            <h2
              className="text-2xl md:text-4xl font-serif font-bold mb-4 leading-tight text-center bg-gradient-to-r from-pink-400 via-gold-400 to-purple-400 bg-clip-text text-transparent animate-gradient"
            >
              NAVRATRI 2025
            </h2>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 leading-tight">
              Transform your Garba skills in just{" "}
              <span className="text-gold-400">10 days!</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-2 font-medium">No prior Experience needed</p>
            <p className="text-lg text-gold-300 font-script mb-8">એ હાલો ગરબા શીખવા...</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('register')}
                className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-dark-900 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                data-testid="button-register-hero"
              >
                Register Now
              </button>
              <button className="border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-dark-900 font-semibold py-4 px-8 rounded-xl transition-all duration-300" data-testid="button-demo">
                <span className="material-icons inline mr-2">play_circle</span>
                Watch Demo
              </button>
            </div>
          </div>

          {/* Decorative elements */}
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400 opacity-5 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500 opacity-5 rounded-full translate-y-12 -translate-x-12"></div>
          <img
            src="/hero_background.png"
            alt="Hero Decorative"
            className="
    absolute
    sm:right-4 sm:w-56 sm:h-32 sm:bottom-4
    md:right-15 md:w-78 md:h-40 md:bottom-9
    lg:right-30 lg:w-96 lg:h-56 lg:bottom-2
    object-cover
    rounded-2xl
    opacity-90
    pointer-events-none
  "
            style={{ zIndex: 1 }}
          />
        </div>

        {/* Class Details Grid */}
        <div className="grid md:grid-cols-2 gap-8" id="classes">
          {/* Class Schedule Card */}
          <div className="glass-card rounded-2xl p-4 hover-lift">
            <h3 className="text-2xl font-serif font-bold text-gold-400 mb-6 flex items-center gap-3">
              <span className="material-icons text-3xl">schedule</span>
              Class Details
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 rounded-lg bg-dark-800/50">
                <span className="material-icons text-gold-400">access_time</span>
                <span className="text-gray-300 font-medium" data-testid="text-duration">1 Hr daily classes</span>
              </div>
              <div className="flex items-center gap-4 p-3 rounded-lg bg-dark-800/50">
                <span className="material-icons text-emerald-400">celebration</span>
                <span className="text-gray-300 font-medium" data-testid="text-style">Learn Traditional & Modern Garba steps</span>
              </div>
              <div className="flex items-center gap-4 p-3 rounded-lg bg-dark-800/50">
                <span className="material-icons text-blue-400">calendar_today</span>
                <span className="text-gray-300 font-medium" data-testid="text-days">Monday to Friday</span>
              </div>
              <div className="flex items-center gap-4 p-3 rounded-lg bg-dark-800/50">
                <span className="material-icons text-purple-400">wb_twilight</span>
                <span className="text-gray-300 font-medium" data-testid="text-timing">6:00 PM - 7:00 PM</span>
              </div>
            </div>
          </div>

          {/* Garba Styles Card */}
          <div className="glass-card rounded-2xl p-4 hover-lift">
            <h3 className="text-2xl font-serif font-bold text-gold-400 mb-6 flex items-center gap-3">
              <span className="material-icons text-3xl">music_note</span>
              Garba Styles
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-lg p-3 text-center hover:border-purple-400/50 transition-colors">
                <span className="text-purple-300 font-medium" data-testid="style-timli">2 tali- 3 tali</span>
              </div>
              <div className="bg-gradient-to-r from-pink-500/20 to-red-500/20 border border-pink-400/30 rounded-lg p-3 text-center hover:border-pink-400/50 transition-colors">
                <span className="text-pink-300 font-medium" data-testid="style-timli">Timli</span>
              </div>
              <div className="bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-400/30 rounded-lg p-3 text-center hover:border-emerald-400/50 transition-colors">
                <span className="text-emerald-300 font-medium" data-testid="style-titodo">Titodo</span>
              </div>
              <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-lg p-3 text-center hover:border-blue-400/50 transition-colors">
                <span className="text-blue-300 font-medium" data-testid="style-dodhiyu">Dodhiyu</span>
              </div>
              <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 rounded-lg p-3 text-center hover:border-yellow-400/50 transition-colors">
                <span className="text-yellow-300 font-medium" data-testid="style-betaali">Popatiyu</span>
              </div>
              <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-400/30 rounded-lg p-3 text-center hover:border-red-400/50 transition-colors">
                <span className="text-red-300 font-medium" data-testid="style-betaali">Dakla</span>
              </div>
              <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-400/30 rounded-lg p-3 text-center hover:border-indigo-400/50 transition-colors">
                <span className="text-indigo-300 font-medium" data-testid="style-sanedo">Ras</span>
              </div>
            </div>
          </div>
        </div>

        {/* Instructor Section */}
        <div className="glass-card rounded-2xl p-4 hover-lift" id="instructor">
          <h3 className="text-3xl font-serif font-bold text-gold-400 mb-8 text-center">Meet Your Garba Instructor</h3>
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Instructor Image Placeholder */}
            <div className="md:col-span-1">
              <img
                src="/portfolio2.jpeg"
                alt="Shahil Chaudhari - Garba Instructor"
                className="w-full h-80 object-cover rounded-2xl border-2 border-gold-400/30"
                data-testid="img-instructor"
              />
            </div>

            <div className="md:col-span-2 space-y-6">
              <div>
                <h4 className="text-2xl font-serif font-bold text-white mb-2" data-testid="text-instructor-name">Shahil Chaudhari</h4>
                <p className="text-gray-300 leading-relaxed" data-testid="text-instructor-bio">
                  Gujarati, over 15 years of dedicated practice, Shahil brings authentic traditional knowledge combined with modern teaching techniques to help students master the beautiful art of Garba.
                </p>
                <br />
                <p className="text-gray-300 leading-relaxed" data-testid="text-instructor-bio">
                  With a passion for dance and a commitment to sharing the joy of Garba, helping them connect with their cultural roots while having fun.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="bg-emerald-400/20 text-emerald-300 text-sm px-4 py-2 rounded-full border border-emerald-400/30" data-testid="badge-patient">Patient Guide</span>
                <span className="bg-purple-400/20 text-purple-300 text-sm px-4 py-2 rounded-full border border-purple-400/30" data-testid="badge-friendly">Friendly Mentor</span>
              </div>

              <div className="flex items-center gap-4 p-4 bg-dark-800/50 rounded-lg">
                <span className="material-icons text-gold-400">phone</span>
                <span className="text-gray-300 font-medium" data-testid="text-instructor-contact">Contact: 123-456-7890</span>
              </div>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="glass-card rounded-2xl p-4 hover-lift">
          <h3 className="text-2xl font-serif font-bold text-gold-400 mb-6 flex items-center gap-3">
            <span className="material-icons text-3xl">location_on</span>
            Location & Contact
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold text-white mb-2" data-testid="text-academy-name">RadheKrishna Dance Academy</h4>
                <p className="text-gray-300" data-testid="text-academy-address">123 Dance Street, City, State</p>
                <p className="text-gray-400 text-sm" data-testid="text-academy-contact">Contact: 987-654-3210</p>
              </div>

              <div className="p-4 bg-dark-800/50 rounded-lg">
                <h5 className="font-semibold text-gold-300 mb-3">Follow us for updates</h5>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors"
                    data-testid="link-instagram"
                  >
                    <span className="material-icons">camera_alt</span>
                    Instagram
                  </a>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    data-testid="link-facebook"
                  >
                    <span className="material-icons">facebook</span>
                    Facebook
                  </a>
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors"
                    data-testid="link-youtube"
                  >
                    <span className="material-icons">play_circle</span>
                    YouTube
                  </a>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-dark-800/50 rounded-lg p-0 flex items-center justify-center min-h-[200px] border border-dark-600 overflow-hidden">
              <iframe
                title="RadheKrishna Dance Academy Location"
                src="https://www.google.com/maps?q=19.8496852,75.3533782&z=15&output=embed"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                data-testid="iframe-map"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Registration Form */}
        <div className="glass-card rounded-2xl p-8 hover-lift" id="register">
          <h3 className="text-3xl font-serif font-bold text-gold-400 mb-8 text-center">Register Now</h3>

          <form
            action="https://formspree.io/f/xwplpoja" // <-- Replace {your-id} with your Formspree form ID
            method="POST"
            className="max-w-2xl mx-auto space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="text-gray-300 mb-2 font-medium">
                  Full Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-dark-800/50 border border-dark-600 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all"
                  placeholder="Enter your full name"
                  data-testid="input-name"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-gray-300 mb-2 font-medium">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="w-full px-4 py-3 bg-dark-800/50 border border-dark-600 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all"
                  placeholder="Enter your phone number"
                  data-testid="input-phone"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="email" className="text-gray-300 mb-2 font-medium">
                Email Address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 bg-dark-800/50 border border-dark-600 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all"
                placeholder="Enter your email"
                data-testid="input-email"
              />
            </div>
            <div>
              <Label htmlFor="experience" className="text-gray-300 mb-2 font-medium">
                Dance Experience Level
              </Label>
              <select
                id="experience"
                name="experience"
                required
                className="w-full px-4 py-3 bg-dark-800/50 border border-dark-600 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all"
                data-testid="select-experience"
              >
                <option value="">Select your experience level</option>
                <option value="beginner">Beginner (No experience)</option>
                <option value="intermediate">Intermediate (Some experience)</option>
                <option value="advanced">Advanced (Regular dancer)</option>
              </select>
            </div>
            <div>
              <Label htmlFor="message" className="text-gray-300 mb-2 font-medium">
                Message
              </Label>
              <textarea
                id="message"
                name="message"
                className="w-full px-4 py-3 bg-dark-800/50 border border-dark-600 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all resize-none"
                placeholder="Type your message here"
                rows={4}
                data-testid="input-message"
              />
            </div>
            <Button
              type="submit"
              className="w-full font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-dark-900"
              data-testid="button-submit"
            >
              <span className="flex items-center justify-center gap-2">
                <span className="material-icons">send</span>
                Submit Registration
              </span>
            </Button>
          </form>


        </div>
      </div>

      {/* Footer */}
      <footer className="glass-card mt-16 border-t border-gold-400/20">
        <div className="container mx-auto px-6 py-8 text-center">
          <div className="mb-4">
            <h4 className="text-2xl font-serif font-bold text-gold-400 mb-2" data-testid="text-footer-title">RadheKrishna Garba Classes</h4>
            <p className="text-gold-300 font-script text-lg" data-testid="text-footer-tagline">Celebrating the divine through dance</p>
          </div>

          <div className="border-t border-dark-600 pt-4">
            <p className="text-gray-400 text-sm" data-testid="text-copyright">
              &copy; 2023 RadheKrishna Garba Classes. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
