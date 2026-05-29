import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight, HiCheckCircle, HiLightningBolt } from 'react-icons/hi'
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import AnimatedButton from '../components/AnimatedButton'
import SectionHeading from '../components/SectionHeading'
import FloatingParticles from '../components/FloatingParticles'
import { teamMembers, stats } from '../data/index'

const values = [
  { title: 'Data First', desc: 'Every strategy, every creative decision, every campaign is rooted in data — not gut feelings.', color: '#005CFF' },
  { title: 'Radical Transparency', desc: "You'll always know exactly what we're doing, why, and the impact it's having on your bottom line.", color: '#00C853' },
  { title: 'Relentless Optimization', desc: "Good enough never is. We test, iterate, and optimize every element until it's exceptional.", color: '#FF2B2B' },
  { title: 'Partnership Over Agency', desc: "We don't manage campaigns. We build businesses. Your growth is our growth.", color: '#FFD600' },
  { title: 'Speed & Precision', desc: 'We move fast but never sacrifice quality. Rapid iteration without compromising on the details.', color: '#9D00FF' },
  { title: 'Results or Nothing', desc: "We put our reputation on every campaign. If we don't deliver, we don't rest until we do.", color: '#00F5FF' },
]

const milestones = [
  { year: '2018', event: 'Founded in New York with a team of 4', color: '#005CFF' },
  { year: '2019', event: 'Reached 50 clients and launched Meta Ads division', color: '#9D00FF' },
  { year: '2020', event: 'Expanded to full-service agency, grew to 25 team members', color: '#FF2B2B' },
  { year: '2022', event: 'Crossed $5M in client revenue generated, launched advanced analytics tools', color: '#00C853' },
  { year: '2024', event: '$10M+ client revenue, 500+ clients, 50+ team members globally', color: '#FFD600' },
]

const PageHero = () => (
  <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-20 overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-30" />
    <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(0,92,255,0.1) 0%, transparent 70%)' }} />
    <FloatingParticles count={30} />
    <div className="container mx-auto relative z-10 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-space font-semibold tracking-widest uppercase mb-6" style={{ background: 'rgba(0,92,255,0.1)', border: '1px solid rgba(0,92,255,0.3)', color: '#005CFF' }}>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#005CFF', boxShadow: '0 0 6px #005CFF' }} /> Our Story
        </span>
        <h1 className="font-space font-black mb-5 leading-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', color: 'var(--theme-t1)' }}>
          We Are <span className="gradient-text">Pixel Pulse</span>
        </h1>
        <p className="text-white/55 font-inter text-base sm:text-xl max-w-2xl mx-auto leading-relaxed px-2">
          A team of obsessive marketers, designers, and strategists united by one mission: to make your brand impossible to ignore.
        </p>
      </motion.div>
    </div>
  </section>
)

const MissionSection = () => (
  <section className="py-12 sm:py-16 lg:py-20 relative">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <SectionHeading badge="Our Mission" title="Built to Make" highlight="Brands Unstoppable" subtitle="Pixel Pulse was founded with one belief: that every business deserves a marketing partner who cares as much about their growth as they do." />
          <p className="text-white/55 font-inter leading-relaxed mt-6 mb-8">
            We got tired of agencies that overpromised and underdelivered — the ones who'd sell you a dream and disappear after the contract was signed. So we built the agency we always wished existed: one obsessed with results, transparent about everything, and genuinely invested in your success.
          </p>
          <p className="text-white/55 font-inter leading-relaxed mb-8">
            Today, Pixel Pulse has helped 500+ brands grow their digital presence, generate millions in revenue, and build communities that last. And we're just getting started.
          </p>
          <Link to="/contact"><AnimatedButton>Work With Us <HiArrowRight size={16} /></AnimatedButton></Link>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div key={stat.label} className="p-6 rounded-2xl text-center" style={{ background: 'var(--theme-surface-2)', border: `1px solid ${stat.color}30` }}>
                <div className="font-orbitron font-black text-3xl mb-1" style={{ color: stat.color }}>{stat.prefix || ''}{stat.value}{stat.suffix}</div>
                <div className="text-white/50 text-xs font-inter">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
)

const TimelineSection = () => (
  <section className="py-12 sm:py-16 lg:py-20 relative">
    <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(157,0,255,0.04) 0%, transparent 70%)' }} />
    <div className="container mx-auto">
      <div className="text-center mb-10 sm:mb-14">
        <SectionHeading badge="Our Journey" title="From Startup to" highlight="Industry Leader" center />
      </div>
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-px" style={{ background: 'linear-gradient(180deg, #005CFF, #9D00FF, #FF2B2B, #00C853, #FFD600)' }} />
        <div className="flex flex-col gap-6 sm:gap-8">
          {milestones.map((m, i) => (
            <motion.div key={m.year} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="flex items-start gap-4 sm:gap-6 pl-14 sm:pl-16 relative">
              <div className="absolute left-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-orbitron font-black text-[10px] sm:text-xs" style={{ background: `${m.color}20`, border: `2px solid ${m.color}`, color: m.color, boxShadow: `0 0 15px ${m.color}30` }}>
                {m.year}
              </div>
              <div className="p-5 rounded-xl flex-1" style={{ background: 'var(--theme-surface)', border: '1px solid var(--theme-border)' }}>
                <p className="text-white/75 font-inter text-sm leading-relaxed">{m.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

const ValuesSection = () => (
  <section className="py-12 sm:py-16 lg:py-20 relative">
    <div className="container mx-auto">
      <div className="text-center mb-10 sm:mb-14">
        <SectionHeading badge="Core Values" title="What We" highlight="Stand For" center subtitle="The principles that guide every decision we make for your brand." />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {values.map((v, i) => (
          <motion.div key={v.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
            className="p-7 rounded-2xl group transition-all duration-300 hover:scale-[1.02]"
            style={{ background: 'var(--theme-surface)', border: '1px solid var(--theme-border)' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${v.color}40`; e.currentTarget.style.boxShadow = `0 0 30px ${v.color}10` }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--theme-border)'; e.currentTarget.style.boxShadow = 'none' }}
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: `${v.color}18`, border: `1px solid ${v.color}30` }}>
              <HiCheckCircle size={22} style={{ color: v.color }} />
            </div>
            <h3 className="font-space font-bold text-lg text-white mb-3">{v.title}</h3>
            <p className="text-white/50 text-sm font-inter leading-relaxed">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

const TeamSection = () => (
  <section className="py-12 sm:py-16 lg:py-20 relative">
    <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(0,200,83,0.04) 0%, transparent 70%)' }} />
    <div className="container mx-auto">
      <div className="text-center mb-10 sm:mb-14">
        <SectionHeading badge="Our Team" title="The Minds Behind" highlight="Your Growth" center subtitle="Seasoned experts who've built and scaled hundreds of brands." />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, i) => (
          <motion.div key={member.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group p-7 rounded-2xl text-center transition-all duration-300 hover:scale-[1.03]"
            style={{ background: 'var(--theme-surface)', border: '1px solid var(--theme-border)' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${member.color}40`; e.currentTarget.style.boxShadow = `0 0 30px ${member.color}15` }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--theme-border)'; e.currentTarget.style.boxShadow = 'none' }}
          >
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center font-space font-black text-2xl mx-auto mb-5 transition-all duration-300"
              style={{ background: `${member.color}20`, border: `2px solid ${member.color}40`, color: member.color, boxShadow: `0 0 20px ${member.color}20` }}
            >
              {member.initial}
            </div>
            <h3 className="font-space font-bold text-base text-white mb-1">{member.name}</h3>
            <p className="text-xs font-space font-semibold mb-3" style={{ color: member.color }}>{member.role}</p>
            <p className="text-white/45 text-xs font-inter leading-relaxed mb-5">{member.bio}</p>
            <div className="flex items-center justify-center gap-3">
              {[FaTwitter, FaLinkedinIn].map((Icon, j) => (
                <a key={j} href="#" className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{ background: 'var(--theme-input)', border: '1px solid var(--theme-border-2)', color: 'var(--theme-t3)' }}
                >
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

const CTASection = () => (
  <section className="py-14 sm:py-20 lg:py-24 relative overflow-hidden">
    <FloatingParticles count={25} />
    <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(0,92,255,0.08) 0%, transparent 70%)' }} />
    <div className="container mx-auto relative z-10 text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-space font-semibold tracking-widest uppercase mb-7" style={{ background: 'rgba(0,92,255,0.1)', border: '1px solid rgba(0,92,255,0.3)', color: '#005CFF' }}>
          <HiLightningBolt size={13} /> Let's Work Together
        </span>
        <h2 className="font-space font-black text-white mb-5 leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
          Ready to Transform Your<br /><span className="gradient-text">Digital Presence?</span>
        </h2>
        <p className="text-white/55 font-inter text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Let's have a conversation about your goals and how Pixel Pulse can help you achieve them.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact"><AnimatedButton size="lg">Start the Conversation <HiArrowRight size={18} /></AnimatedButton></Link>
          <Link to="/services"><AnimatedButton variant="ghost" size="lg">Explore Services</AnimatedButton></Link>
        </div>
      </motion.div>
    </div>
  </section>
)

const About = () => (
  <>
    <PageHero />
    <MissionSection />
    <TimelineSection />
    <ValuesSection />
    <TeamSection />
    <CTASection />
  </>
)

export default About
