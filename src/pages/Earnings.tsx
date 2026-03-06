type Opportunity = {
  title: string;
  type: string;
  payout: string;
  mode: string;
  details: string;
};

const opportunities: Opportunity[] = [
  {
    title: 'Campus Web Development Freelance',
    type: 'Freelance',
    payout: 'INR 4,000 - 12,000/project',
    mode: 'Remote/Hybrid',
    details: 'Build portfolio, event, or society websites for internal and local clients.',
  },
  {
    title: 'Technical Content Writing',
    type: 'Part-time',
    payout: 'INR 300 - 800/article',
    mode: 'Remote',
    details: 'Write blogs/tutorials on React, DSA, and cloud topics for edtech platforms.',
  },
  {
    title: 'Coding Mentor for Juniors',
    type: 'Mentoring',
    payout: 'INR 2,000 - 6,000/month',
    mode: 'On-campus',
    details: 'Run weekend doubt sessions and structured practice batches for first-year students.',
  },
  {
    title: 'Hackathon Prize Pools',
    type: 'Competition',
    payout: 'INR 5,000 - 1,00,000',
    mode: 'Online/Offline',
    details: 'Participate in sponsored hackathons and innovation challenges with team entries.',
  },
  {
    title: 'Micro-Internships',
    type: 'Internship',
    payout: 'Stipend based',
    mode: 'Remote',
    details: 'Short-term development/data tasks with startups for resume and stipend gains.',
  },
  {
    title: 'Affiliate + Tool Ambassador Programs',
    type: 'Referral',
    payout: 'Commission based',
    mode: 'Remote',
    details: 'Earn through referral programs for coding tools, course platforms, and communities.',
  },
];

export default function Earnings() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-emerald-400 to-lime-400 bg-clip-text text-transparent">
            Earning Opportunities
          </h2>
          <p className="text-gray-300 mt-4 text-lg">
            Practical ways to earn while building your technical profile
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {opportunities.map(item => (
            <article
              key={item.title}
              className="rounded-2xl border border-emerald-500/30 bg-slate-800/70 p-6 shadow-xl flex flex-col"
            >
              <p className="text-emerald-300 text-sm font-semibold">{item.type}</p>
              <h3 className="text-xl font-bold mt-1">{item.title}</h3>
              <p className="text-gray-300 text-sm mt-3 flex-grow">{item.details}</p>

              <div className="mt-4 text-sm space-y-1">
                <p><span className="text-emerald-300 font-semibold">Potential:</span> {item.payout}</p>
                <p><span className="text-emerald-300 font-semibold">Mode:</span> {item.mode}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
