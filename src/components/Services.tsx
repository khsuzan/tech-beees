import { motion } from 'motion/react';
import { Brain, Code, Zap, LineChart, Shield, Layers } from 'lucide-react';
import { Card } from './ui/card';

const services = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Custom AI models and machine learning solutions tailored to solve your unique business challenges.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Code,
    title: 'Application Development',
    description: 'Full-stack web and mobile applications built with the latest technologies and best practices.',
    color: 'from-amber-500 to-orange-500'
  },
  {
    icon: Zap,
    title: 'Process Automation',
    description: 'Intelligent automation solutions that streamline workflows and boost productivity.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: LineChart,
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights with advanced analytics and visualization.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Enterprise-grade security measures to protect your applications and data.',
    color: 'from-red-500 to-pink-500'
  },
  {
    icon: Layers,
    title: 'Cloud Integration',
    description: 'Seamless cloud deployment and integration with major platforms like AWS, Azure, and GCP.',
    color: 'from-indigo-500 to-purple-500'
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full mb-4">Our Services</span>
          <h2 className="text-3xl md:text-5xl mb-4">What We Offer</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive AI-powered solutions to transform your business and drive innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 lg:p-8 h-full hover:shadow-lg transition-shadow border-2 hover:border-amber-200 group">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}