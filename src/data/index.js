export const services = [
  {
    id: 1,
    icon: 'search',
    title: 'SEO Optimization',
    description: 'Dominate search rankings with data-driven strategies that drive organic traffic and measurable revenue growth.',
    features: ['Technical SEO Audit', 'Keyword Research & Mapping', 'Link Building Campaigns', 'Core Web Vitals Optimization'],
    color: '#005CFF',
    glow: 'rgba(0,92,255,0.3)',
    tag: 'Most Popular'
  },
  {
    id: 2,
    icon: 'bullseye',
    title: 'Meta Ads',
    description: 'Precision-targeted Facebook & Instagram advertising campaigns that maximize ROAS and minimize ad spend.',
    features: ['Audience Research & Targeting', 'Creative A/B Testing', 'Retargeting Funnels', 'ROAS Optimization'],
    color: '#FF2B2B',
    glow: 'rgba(255,43,43,0.3)',
    tag: ''
  },
  {
    id: 3,
    icon: 'hashtag',
    title: 'Social Media Marketing',
    description: 'Build an engaged community and explode your brand reach across all major social platforms.',
    features: ['Content Calendar Planning', 'Community Management', 'Influencer Partnerships', 'Analytics & Reporting'],
    color: '#00C853',
    glow: 'rgba(0,200,83,0.3)',
    tag: ''
  },
  {
    id: 4,
    icon: 'paint',
    title: 'Branding & Identity',
    description: 'Craft an unforgettable brand identity that resonates, converts, and stands apart in a crowded market.',
    features: ['Logo & Visual Identity', 'Brand Strategy & Guidelines', 'Brand Voice Development', 'Collateral Design'],
    color: '#FFD600',
    glow: 'rgba(255,214,0,0.3)',
    tag: ''
  },
  {
    id: 5,
    icon: 'desktop',
    title: 'Web Design & Dev',
    description: 'Pixel-perfect, high-converting websites and web apps that deliver exceptional user experiences.',
    features: ['UI/UX Design', 'React & Next.js Development', 'CMS Integration', 'Performance Optimization'],
    color: '#9D00FF',
    glow: 'rgba(157,0,255,0.3)',
    tag: 'New'
  },
  {
    id: 6,
    icon: 'file',
    title: 'Content Marketing',
    description: 'Strategic content that educates, engages, and converts your target audience at every funnel stage.',
    features: ['Content Strategy', 'Blog & Article Writing', 'Video Scripts', 'Infographic Design'],
    color: '#00F5FF',
    glow: 'rgba(0,245,255,0.3)',
    tag: ''
  },
  {
    id: 7,
    icon: 'users',
    title: 'Lead Generation',
    description: 'Fill your sales pipeline with high-quality, pre-qualified leads using proven multi-channel strategies.',
    features: ['Lead Magnet Creation', 'Landing Page Design', 'Email Nurture Sequences', 'CRM Integration'],
    color: '#FF6B00',
    glow: 'rgba(255,107,0,0.3)',
    tag: ''
  },
  {
    id: 8,
    icon: 'envelope',
    title: 'Email Marketing',
    description: 'Automated email campaigns that nurture leads, retain customers, and generate consistent revenue.',
    features: ['Email Automation Setup', 'Template Design', 'List Segmentation', 'Campaign Analytics'],
    color: '#FF2B2B',
    glow: 'rgba(255,43,43,0.3)',
    tag: ''
  },
]

export const stats = [
  { value: 500, suffix: '+', label: 'Happy Clients', color: '#005CFF' },
  { value: 1200, suffix: '+', label: 'Projects Delivered', color: '#00C853' },
  { value: 98, suffix: '%', label: 'Client Retention', color: '#FFD600' },
  { value: 10, suffix: 'M+', label: 'Revenue Generated', prefix: '$', color: '#FF2B2B' },
]

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechVision Inc.',
    quote: 'Pixel Pulse completely transformed our digital presence. Our organic traffic increased by 340% in just 6 months. The team is incredibly talented and data-driven.',
    rating: 5,
    avatar: 'SJ',
    color: '#005CFF'
  },
  {
    id: 2,
    name: 'Marcus Chen',
    role: 'CMO',
    company: 'NovaBrands',
    quote: "The Meta Ads campaign they ran for us generated a 5.2x ROAS in the first month. Their targeting strategy was absolutely brilliant. Best marketing investment we've made.",
    rating: 5,
    avatar: 'MC',
    color: '#00C853'
  },
  {
    id: 3,
    name: 'Priya Sharma',
    role: 'Founder',
    company: 'StyleAura',
    quote: 'Our Instagram following grew from 2K to 85K in 4 months. The content strategy and community management was top-notch. Pixel Pulse is truly world-class.',
    rating: 5,
    avatar: 'PS',
    color: '#9D00FF'
  },
  {
    id: 4,
    name: 'James Williams',
    role: 'Director of Growth',
    company: 'Fintech Plus',
    quote: "The SEO work Pixel Pulse did for us was phenomenal. We're now ranking #1 for 47 of our target keywords and our lead quality has never been better.",
    rating: 5,
    avatar: 'JW',
    color: '#FFD600'
  },
  {
    id: 5,
    name: 'Aisha Patel',
    role: 'Marketing Head',
    company: 'EcoLux',
    quote: 'From brand identity to website design to social media, they handled everything seamlessly. Our brand perception completely shifted after working with Pixel Pulse.',
    rating: 5,
    avatar: 'AP',
    color: '#FF2B2B'
  },
  {
    id: 6,
    name: 'David Kim',
    role: 'Startup Founder',
    company: 'LaunchPad AI',
    quote: 'As a startup, we needed maximum impact with a lean budget. Pixel Pulse delivered 10x beyond our expectations. Our user acquisition cost dropped by 60%.',
    rating: 5,
    avatar: 'DK',
    color: '#00F5FF'
  },
]

export const pricingPlans = [
  {
    id: 1,
    name: 'Starter',
    monthlyPrice: 999,
    yearlyPrice: 799,
    description: 'Perfect for startups and small businesses ready to make their digital mark.',
    features: [
      'SEO Optimization (Basic)',
      'Social Media Management (2 platforms)',
      'Monthly Performance Report',
      'Content Creation (8 posts/month)',
      'Email Support',
      'Google Analytics Setup',
    ],
    notIncluded: ['Meta Ads Management', 'Branding Package', 'Dedicated Account Manager'],
    color: '#005CFF',
    popular: false,
  },
  {
    id: 2,
    name: 'Growth',
    monthlyPrice: 2499,
    yearlyPrice: 1999,
    description: 'Ideal for growing businesses that want serious digital traction and results.',
    features: [
      'Advanced SEO + Technical Audit',
      'Social Media (4 platforms)',
      'Meta Ads Management ($5K budget)',
      'Content Creation (20 posts/month)',
      'Email Marketing Automation',
      'Branding Consultation',
      'Weekly Performance Reports',
      'Dedicated Account Manager',
      'Priority Support',
    ],
    notIncluded: ['Full Branding Package', 'Custom Web Development'],
    color: '#9D00FF',
    popular: true,
  },
  {
    id: 3,
    name: 'Enterprise',
    monthlyPrice: 5999,
    yearlyPrice: 4799,
    description: 'Full-service digital marketing for enterprise brands demanding top-tier results.',
    features: [
      'Full-Scale SEO Domination',
      'All Social Platforms Managed',
      'Unlimited Meta & Google Ads',
      'Custom Content Strategy',
      'Complete Branding Package',
      'Custom Website Development',
      'CRO & Landing Page Optimization',
      'Daily Reporting Dashboard',
      'Dedicated Team of Experts',
      '24/7 Priority Support',
    ],
    notIncluded: [],
    color: '#00C853',
    popular: false,
  },
]

export const projects = [
  {
    id: 1,
    title: 'NovaTech Rebrand',
    category: 'Branding',
    description: 'Complete brand overhaul for a B2B SaaS company, resulting in 200% increase in brand recognition.',
    result: '+200% Brand Recognition',
    tags: ['Branding', 'Web Design', 'SEO'],
    color: 'from-blue-600 to-purple-600',
    bgColor: '#005CFF'
  },
  {
    id: 2,
    title: 'StyleAura Growth',
    category: 'Social Media',
    description: 'Explosive social media growth strategy that took a fashion brand from 2K to 85K followers.',
    result: '42x Follower Growth',
    tags: ['Social Media', 'Content', 'Influencer'],
    color: 'from-pink-600 to-red-600',
    bgColor: '#FF2B2B'
  },
  {
    id: 3,
    title: 'FinFlow SEO Domination',
    category: 'SEO',
    description: 'Comprehensive SEO strategy for a fintech startup that achieved 1st page rankings for 80+ keywords.',
    result: '#1 Ranking 80+ Keywords',
    tags: ['SEO', 'Content', 'Technical'],
    color: 'from-green-600 to-teal-600',
    bgColor: '#00C853'
  },
  {
    id: 4,
    title: 'EcomBoost Campaign',
    category: 'Meta Ads',
    description: 'Meta Ads campaign for an e-commerce brand delivering exceptional ROAS and conversion rates.',
    result: '8.5x ROAS Achieved',
    tags: ['Meta Ads', 'Retargeting', 'CRO'],
    color: 'from-yellow-500 to-orange-500',
    bgColor: '#FFD600'
  },
  {
    id: 5,
    title: 'MedCore Web Platform',
    category: 'Web Design',
    description: 'Stunning, HIPAA-compliant web platform for a healthcare company with complex user journeys.',
    result: '+180% Lead Generation',
    tags: ['Web Design', 'Dev', 'UX'],
    color: 'from-purple-600 to-pink-600',
    bgColor: '#9D00FF'
  },
  {
    id: 6,
    title: 'CloudSync Lead Gen',
    category: 'Lead Generation',
    description: 'B2B lead generation engine for a cloud software company using multi-channel approach.',
    result: '340% More Qualified Leads',
    tags: ['Lead Gen', 'Email', 'LinkedIn'],
    color: 'from-cyan-500 to-blue-600',
    bgColor: '#00F5FF'
  },
  {
    id: 7,
    title: 'FoodieHub Content',
    category: 'Content Marketing',
    description: 'Viral content strategy for a food delivery platform that drove massive organic reach.',
    result: '2M+ Monthly Reach',
    tags: ['Content', 'Video', 'Social'],
    color: 'from-orange-500 to-red-500',
    bgColor: '#FF6B00'
  },
  {
    id: 8,
    title: 'LuxeHomes Identity',
    category: 'Branding',
    description: 'Luxury real estate brand identity that positioned them as the premium choice in their market.',
    result: '3x Premium Client Acquisition',
    tags: ['Branding', 'Logo', 'Strategy'],
    color: 'from-amber-400 to-yellow-500',
    bgColor: '#FFD600'
  },
  {
    id: 9,
    title: 'SportsPulse Email',
    category: 'Email Marketing',
    description: 'Email marketing automation for a sports brand with personalized campaigns and A/B testing.',
    result: '62% Open Rate Achieved',
    tags: ['Email', 'Automation', 'CRM'],
    color: 'from-green-500 to-emerald-600',
    bgColor: '#00C853'
  },
]

export const blogPosts = [
  {
    id: 1,
    title: '10 SEO Strategies That Will Dominate Search in 2025',
    excerpt: 'Discover the cutting-edge SEO tactics that top agencies are using to crush the competition and capture organic traffic at scale.',
    category: 'SEO',
    date: 'May 15, 2025',
    author: 'Alex Rivera',
    readTime: '8 min read',
    color: '#005CFF',
    featured: true
  },
  {
    id: 2,
    title: 'How to Achieve 5x ROAS with Meta Ads in 2025',
    excerpt: 'A step-by-step breakdown of the exact Meta Ads framework our team uses to consistently deliver exceptional return on ad spend for clients.',
    category: 'Meta Ads',
    date: 'May 10, 2025',
    author: 'Maya Thompson',
    readTime: '12 min read',
    color: '#FF2B2B',
    featured: false
  },
  {
    id: 3,
    title: 'The Psychology of Viral Social Media Content',
    excerpt: "We analyzed 10,000 viral posts to discover the exact patterns, triggers, and frameworks that make content explode. Here's what we found.",
    category: 'Social Media',
    date: 'May 5, 2025',
    author: 'Jordan Lee',
    readTime: '10 min read',
    color: '#00C853',
    featured: false
  },
  {
    id: 4,
    title: 'Brand Identity Design: The Complete 2025 Guide',
    excerpt: 'Everything you need to know about creating a brand identity that resonates, converts, and builds lasting customer loyalty in the digital age.',
    category: 'Branding',
    date: 'Apr 28, 2025',
    author: 'Sophia Chen',
    readTime: '15 min read',
    color: '#FFD600',
    featured: false
  },
  {
    id: 5,
    title: 'Email Marketing Automation: 7 Sequences That Convert',
    excerpt: 'The exact email automation sequences that have generated millions in revenue for our clients, including templates and timing strategies.',
    category: 'Email Marketing',
    date: 'Apr 20, 2025',
    author: 'Alex Rivera',
    readTime: '9 min read',
    color: '#9D00FF',
    featured: false
  },
  {
    id: 6,
    title: 'Web Design Trends Transforming UX in 2025',
    excerpt: 'From glassmorphism to data-driven personalization, explore the design trends that are redefining how users interact with digital products.',
    category: 'Web Design',
    date: 'Apr 15, 2025',
    author: 'Maya Thompson',
    readTime: '7 min read',
    color: '#00F5FF',
    featured: false
  },
]

export const faqs = [
  {
    id: 1,
    category: 'General',
    question: 'What makes Pixel Pulse different from other digital marketing agencies?',
    answer: "Pixel Pulse combines cutting-edge technology with creative excellence. We're not just another agency — we're your growth partner. Every strategy is backed by data, every creative decision is intentional, and every campaign is optimized for maximum ROI. We bring enterprise-level expertise with startup-like agility."
  },
  {
    id: 2,
    category: 'General',
    question: 'How long does it take to see results?',
    answer: "Results vary by service. For Meta Ads and PPC campaigns, you can see meaningful data within 2-4 weeks. SEO typically shows significant improvements in 3-6 months. Social media growth and brand awareness build over 2-3 months. We provide clear timelines during onboarding and keep you updated every step of the way."
  },
  {
    id: 3,
    category: 'Services',
    question: 'Do you offer custom service packages?',
    answer: "Absolutely! While our pricing plans cover most business needs, we regularly create custom packages for clients with unique requirements. Whether you need a specific combination of services or have a unique budget, our team will design a solution that maximizes your ROI. Contact us for a custom quote."
  },
  {
    id: 4,
    category: 'Services',
    question: 'What industries do you specialize in?',
    answer: "We have deep expertise across e-commerce, SaaS/technology, healthcare, finance, real estate, fashion/lifestyle, and B2B services. Our team includes specialists from each vertical who understand the unique challenges and opportunities in your market."
  },
  {
    id: 5,
    category: 'Pricing',
    question: 'Are there any setup fees or hidden costs?',
    answer: "None whatsoever. The price you see is the price you pay. We believe in complete pricing transparency. Our packages include all setup, strategy development, execution, and reporting. The only additional cost would be your actual advertising budget for paid campaigns, which goes directly to the ad platforms."
  },
  {
    id: 6,
    category: 'Pricing',
    question: "What's included in your monthly reporting?",
    answer: "Every client receives a comprehensive monthly performance report that includes key metrics (traffic, leads, conversions, ROAS), progress against goals, competitor analysis, and next month's strategy recommendations. Growth plan clients get weekly reports, and Enterprise clients have access to a real-time analytics dashboard."
  },
  {
    id: 7,
    category: 'Process',
    question: 'How does the onboarding process work?',
    answer: "Our onboarding is thorough but streamlined. It starts with a 90-minute discovery call where we deep-dive into your business, goals, and competition. We then develop a custom strategy in week 2, present it for your approval, and begin execution in week 3. You'll have a dedicated account manager from day one."
  },
  {
    id: 8,
    category: 'Process',
    question: 'How do you communicate with clients throughout the project?',
    answer: "We use a combination of tools: a dedicated Slack channel for daily communication, weekly video calls for strategy reviews, a shared project management dashboard where you can track progress in real-time, and monthly in-depth performance reviews. You'll never be left wondering what's happening with your campaigns."
  },
  {
    id: 9,
    category: 'Technical',
    question: 'Do you handle both paid and organic marketing?',
    answer: "Yes! We're a full-service agency with specialists in both paid media (Meta Ads, Google Ads, LinkedIn Ads) and organic growth (SEO, content marketing, social media). The real magic happens when we integrate both approaches to create a compounding growth engine for your business."
  },
  {
    id: 10,
    category: 'Technical',
    question: 'Can you work with our existing marketing stack and tools?',
    answer: "Absolutely. We're platform-agnostic and work with all major tools including HubSpot, Salesforce, Shopify, WordPress, Webflow, MailChimp, Klaviyo, and more. We can optimize your existing setup or recommend better alternatives based on your specific needs and budget."
  },
]

export const processSteps = [
  {
    number: '01',
    title: 'Discovery & Audit',
    description: 'We deep-dive into your business, audit your current digital presence, analyze competitors, and identify high-impact opportunities.',
    icon: 'search',
    color: '#005CFF'
  },
  {
    number: '02',
    title: 'Strategy Development',
    description: 'Our strategists craft a custom, data-backed growth roadmap tailored to your goals, budget, and timeline.',
    icon: 'chart',
    color: '#9D00FF'
  },
  {
    number: '03',
    title: 'Creative Execution',
    description: 'Our creative team brings the strategy to life with stunning visuals, compelling copy, and pixel-perfect design.',
    icon: 'paint',
    color: '#FF2B2B'
  },
  {
    number: '04',
    title: 'Launch & Amplify',
    description: 'We launch across all channels simultaneously, ensuring maximum reach, optimal ad spend, and perfect timing.',
    icon: 'rocket',
    color: '#FFD600'
  },
  {
    number: '05',
    title: 'Optimize & Scale',
    description: 'Continuous A/B testing, performance optimization, and strategic scaling to compound your results month over month.',
    icon: 'scale',
    color: '#00C853'
  },
]

export const teamMembers = [
  {
    id: 1,
    name: 'Alex Rivera',
    role: 'Founder & CEO',
    bio: '12 years in digital marketing. Former Google strategist. Built 3 successful startups.',
    color: '#005CFF',
    initial: 'AR'
  },
  {
    id: 2,
    name: 'Maya Thompson',
    role: 'Head of Performance Marketing',
    bio: 'Ex-Facebook Ads lead. Managed $50M+ in ad spend. Certified Meta & Google partner.',
    color: '#FF2B2B',
    initial: 'MT'
  },
  {
    id: 3,
    name: 'Sophia Chen',
    role: 'Creative Director',
    bio: 'Award-winning designer with 10 years branding Fortune 500 companies.',
    color: '#FFD600',
    initial: 'SC'
  },
  {
    id: 4,
    name: 'Jordan Lee',
    role: 'Head of SEO & Content',
    bio: '8 years in technical SEO. Has ranked 500+ websites on page 1. SEO speaker & author.',
    color: '#00C853',
    initial: 'JL'
  },
]

export const marqueeItems = [
  'SEO Optimization', 'Meta Ads', 'Social Media Marketing', 'Branding & Identity',
  'Web Design', 'Content Marketing', 'Lead Generation', 'Email Marketing',
  'Google Ads', 'Conversion Rate Optimization', 'Influencer Marketing', 'Video Marketing',
]

export const navLinks = [
  { label: 'Home',     path: '/' },
  { label: 'About',    path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Pricing',  path: '/pricing' },
  { label: 'Projects', path: '/projects' },
  { label: 'Blog',     path: '/blog' },
  { label: 'Contact',  path: '/contact' },
  { label: 'FAQs',     path: '/faqs' },
]
