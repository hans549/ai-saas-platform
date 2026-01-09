import { motion } from 'framer-motion';
import {
  Sparkles,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Rocket,
  Brain,
  BarChart3,
  Globe,
  ArrowRight,
  Check
} from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Leverage cutting-edge AI models to automate complex tasks and generate insights instantly.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Process requests in milliseconds with our optimized infrastructure and edge computing.',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and SOC 2 compliance to keep your data safe and secure.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: TrendingUp,
      title: 'Scale Infinitely',
      description: 'Grow from startup to enterprise without worrying about infrastructure limits.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Deployed across 50+ regions worldwide for minimal latency and maximum reliability.',
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Real-time dashboards and insights to track performance and optimize results.',
      gradient: 'from-red-500 to-rose-500'
    }
  ];

  const stats = [
    { value: '10M+', label: 'API Calls Daily' },
    { value: '99.99%', label: 'Uptime SLA' },
    { value: '150+', label: 'Countries' },
    { value: '<100ms', label: 'Avg Response' }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individuals and small teams',
      features: [
        '10,000 API calls/month',
        'Standard AI models',
        'Email support',
        'Basic analytics',
        '99.9% uptime SLA'
      ]
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'For growing businesses and teams',
      features: [
        '100,000 API calls/month',
        'Advanced AI models',
        'Priority support',
        'Advanced analytics',
        '99.99% uptime SLA',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with specific needs',
      features: [
        'Unlimited API calls',
        'Custom AI models',
        'Dedicated support',
        'White-label solution',
        '99.999% uptime SLA',
        'On-premise deployment'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Sparkles className="w-8 h-8 text-blue-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-gradient">
                AI SaaS Pro
              </span>
            </motion.div>
            <motion.div
              className="hidden md:flex items-center space-x-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <a href="#features" className="text-slate-300 hover:text-white transition">Features</a>
              <a href="#pricing" className="text-slate-300 hover:text-white transition">Pricing</a>
              <a href="#docs" className="text-slate-300 hover:text-white transition">Docs</a>
              <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold hover:from-blue-500 hover:to-cyan-500 transition">
                Get Started
              </button>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8">
              <Rocket className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">Powered by Advanced AI</span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 text-gradient animate-gradient bg-[length:200%_auto]">
                Build The Future
              </span>
              <br />
              <span className="text-white">With AI Power</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto">
              Transform your business with enterprise-grade AI solutions. Deploy in minutes, scale to millions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-semibold text-lg hover:from-blue-500 hover:to-cyan-500 transition flex items-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </button>
              <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 rounded-xl font-semibold text-lg transition border border-slate-700">
                View Demo
              </button>
            </div>

            {/* Floating Animation Cards */}
            <div className="relative max-w-5xl mx-auto">
              <motion.div
                className="absolute -top-10 -left-10 w-32 h-32 bg-blue-500/10 rounded-2xl border border-blue-500/20 backdrop-blur-sm p-4"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Users className="w-8 h-8 text-blue-400 mb-2" />
                <p className="text-xs text-slate-400">10M+ Users</p>
              </motion.div>

              <motion.div
                className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/10 rounded-2xl border border-cyan-500/20 backdrop-blur-sm p-4"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <Zap className="w-8 h-8 text-cyan-400 mb-2" />
                <p className="text-xs text-slate-400">99.99% Uptime</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-6 border-y border-slate-800 bg-slate-900/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-4 text-white">
              Everything You Need
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Powerful features designed to accelerate your AI journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`inline-flex p-3 bg-gradient-to-r ${feature.gradient} rounded-xl mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>

                {/* Hover effect gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 bg-slate-900/30">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-4 text-white">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Choose the plan that fits your needs. Upgrade or downgrade anytime.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                className={`relative bg-slate-900/50 border rounded-2xl p-8 ${
                  plan.popular
                    ? 'border-blue-500 shadow-lg shadow-blue-500/20'
                    : 'border-slate-800'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                <p className="text-slate-400 mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-400">{plan.period}</span>
                </div>

                <button className={`w-full py-3 rounded-xl font-semibold transition mb-8 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500'
                    : 'bg-slate-800 hover:bg-slate-700 border border-slate-700'
                }`}>
                  Get Started
                </button>

                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <motion.div
            className="relative bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 md:p-16 text-center overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join thousands of companies already using our AI platform to accelerate growth
              </p>
              <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg hover:bg-blue-50 transition">
                Start Your Free Trial
              </button>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-6 h-6 text-blue-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-gradient">
              AI SaaS Pro
            </span>
          </div>
          <p className="text-slate-400 mb-4">
            Building the future of AI-powered business solutions
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-300 transition">Privacy</a>
            <a href="#" className="hover:text-slate-300 transition">Terms</a>
            <a href="#" className="hover:text-slate-300 transition">Contact</a>
          </div>
          <p className="text-slate-600 text-sm mt-6">
            © 2024 AI SaaS Pro. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
