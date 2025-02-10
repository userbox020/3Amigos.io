
import { motion } from "framer-motion";
import { Users, PartyPopper, Target, ArrowRight, Github, Twitter, MessageSquare } from "lucide-react";
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
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-desert-50 to-desert-100 -z-10" />
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-col items-center text-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src="/lovable-uploads/2edc9161-f34c-4cd7-bad1-756c42dcc7c8.png"
              alt="Tres Amigos Mascot"
              className="w-48 h-48 mb-8 animate-float"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            />
            <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-4">
              Welcome to Tres Amigos
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mb-8">
              Where the community comes first, and the fiesta never ends!
            </p>
            <Button 
              className="bg-desert-500 hover:bg-desert-600 text-white px-8 py-6 text-lg rounded-full hover-trigger"
            >
              Join the Adventure <ArrowRight className="ml-2" />
            </Button>
            
            {/* Social Media Links */}
            <motion.div 
              className="flex gap-6 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <a 
                href="https://github.com/tresamigos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-desert-500 hover:text-desert-600 transition-colors"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://twitter.com/tresamigos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-desert-500 hover:text-desert-600 transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a 
                href="https://discord.gg/tresamigos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-desert-500 hover:text-desert-600 transition-colors"
              >
                <MessageSquare size={24} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
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
