type EventItem = {
  title: string;
  date: string;
  time: string;
  venue: string;
  description: string;
};

const upcomingEvents: EventItem[] = [
  {
    title: 'React Project Sprint',
    date: 'March 22, 2026',
    time: '10:00 AM - 1:00 PM',
    venue: 'Computer Lab 2',
    description: 'Team-based mini build sprint focused on component architecture and deployment.',
  },
  {
    title: 'DSA Weekly Contest',
    date: 'March 28, 2026',
    time: '4:00 PM - 6:00 PM',
    venue: 'CB-105',
    description: 'Timed coding challenge for interview-level DSA questions with leaderboard.',
  },
  {
    title: 'Cloud Career Talk',
    date: 'April 4, 2026',
    time: '11:00 AM - 12:30 PM',
    venue: 'Seminar Hall',
    description: 'Guest speaker session on AWS pathways, certifications, and internship strategy.',
  },
  {
    title: 'Hackathon Preparation Workshop',
    date: 'April 12, 2026',
    time: '2:00 PM - 5:00 PM',
    venue: 'Innovation Hub',
    description: 'Hands-on workshop on idea validation, pitching, and rapid prototyping.',
  },
];

export default function EventCalendar() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Event Calendar
          </h2>
          <p className="text-gray-300 mt-4 text-lg">
            Upcoming activities planned for Udaan members
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingEvents.map(event => (
            <article
              key={`${event.title}-${event.date}`}
              className="rounded-2xl border border-cyan-500/30 bg-slate-800/70 p-6 shadow-xl"
            >
              <p className="text-cyan-300 font-semibold text-sm">{event.date}</p>
              <h3 className="text-2xl font-bold mt-1">{event.title}</h3>
              <p className="text-gray-300 mt-2 text-sm">{event.description}</p>
              <div className="mt-4 text-sm text-slate-200 space-y-1">
                <p><span className="text-cyan-300 font-semibold">Time:</span> {event.time}</p>
                <p><span className="text-cyan-300 font-semibold">Venue:</span> {event.venue}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
