
import { motion } from "framer-motion";
import { Users, PartyPopper, Target, ArrowRight, Github, Twitter, MessageSquare } from "lucide-react";
import { FaDiscord, FaSquareXTwitter, FaGithub } from "react-icons/fa6";
import { BiLogoTelegram } from "react-icons/bi";
import { Button } from "@/components/ui/button";

const Index = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/image/background.png')" }}
      >
      {/* <section className="relative h-screen flex items-center justify-center overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-b from-desert-50 to-desert-100 -z-10" /> */}
        <div className="absolute inset-0  -z-10" />
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-col items-center text-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <div className="bg-green-500 bg-opacity-75 px-8 py-4 rounded-lg text-center mt-[-175px]">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                Welcome to Tres Amigos
              </h1>

              <p className="text-xl md:text-2xl text-white">
                Where the community comes first, and the fiesta never ends!
              </p>

              {/* Social Media Links */}
              <motion.div 
                className="flex items-center justify-center gap-6 mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <a 
                  href="https://github.com/userbox020/3Amigos.io" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <FaGithub size={24} />
                </a>
                <a 
                  href="https://x.com/3amigos_SOL" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <FaSquareXTwitter size={24} />
                </a>
                <a 
                  href="https://discord.gg/tTzUATv9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <FaDiscord size={24} />
                </a>
                <a 
                  href="https://t.me/+lyCAoLcOAf8wNmI0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <BiLogoTelegram size={24} />
                </a>                
              </motion.div>


            </div>


            <motion.img
              src="/image/mascot.png"
              alt="Tres Amigos Mascot"
              className="w-48 h-48 mb-8 animate-float"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            />
            



            <Button 
              className="bg-desert-500 hover:bg-desert-600 text-white px-8 py-6 text-lg rounded-full hover-trigger"
            >
              Join the Adventure <ArrowRight className="ml-2" />
            </Button>
            

          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-gradient-to-b from-desert-50 to-desert-100">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="text-desert-500 text-lg font-semibold">Our Story</span>
            <h2 className="text-4xl font-bold mt-2 mb-8">The Tale of Three Heroes</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              In the wild west of the blockchain, three unlikely heroes grew tired of the constant rug pulls and empty promises. 
              They strapped on their dusty sombreros, loaded their shotguns, and set out to create something different - 
              a project where the community always comes first.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-desert-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="glass-card p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Users className="w-12 h-12 text-desert-500 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Community First</h3>
              <p className="text-gray-600">Join a family of loyal compadres where every member matters.</p>
            </motion.div>

            <motion.div 
              className="glass-card p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <PartyPopper className="w-12 h-12 text-desert-500 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Endless Fiesta</h3>
              <p className="text-gray-600">Experience the never-ending celebration on the blockchain.</p>
            </motion.div>

            <motion.div 
              className="glass-card p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <Target className="w-12 h-12 text-desert-500 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Real Rewards</h3>
              <p className="text-gray-600">Earn rewards with every NFT minted and token staked.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-desert-400 to-fiesta-200">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Join the Family?</h2>
            <Button 
              className="bg-white text-desert-500 hover:bg-gray-100 px-8 py-6 text-lg rounded-full hover-trigger"
            >
              Start Your Journey <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
