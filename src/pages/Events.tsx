import { useEffect, useState } from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { supabase, Event } from '../lib/supabase';

export default function Events() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('date', { ascending: true });

      if (error) throw error;
      setEvents(data || []);
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero (soft gradient to match site theme) */}
      <section className="relative h-[20vh] min-h-[300px] bg-gradient-to-br from-indigo-300 via-violet-500 to-purple-300 flex items-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Events & Workshops
          </h1>
          <p className="text-xl text-white/90 font-semibold max-w-3xl">
            Join me for upcoming workshops, group sessions, and community events focused on wellness,
            fitness, and personal growth.
          </p>
        </div>
      </section>

      {/* List */}
      <section className="py-16 bg-gradient-to-br from-white via-violet-50 to-indigo-100">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-indigo-500 border-t-transparent"></div>
              <p className="mt-4 text-slate-600">Loading events...</p>
            </div>
          ) : events.length === 0 ? (
            <div className="max-w-2xl mx-auto text-center py-12">
              <Calendar className="mx-auto text-violet-300 mb-4" size={64} />
              <h3 className="text-2xl font-semibold text-slate-700 mb-2">
                No Upcoming Events
              </h3>
              <p className="text-slate-600">
                Check back soon for workshops and group sessions. New events are added regularly!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="bg-white/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
                >
                  {event.image_url && (
                    <div className="h-48 overflow-hidden bg-slate-100">
                      <img
                        src={event.image_url}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">
                      {event.title}
                    </h3>
                    <p className="text-slate-600 mb-4 line-clamp-3">
                      {event.description}
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start text-sm text-slate-600">
                        <Calendar className="mr-2 mt-0.5 flex-shrink-0 text-violet-600" size={18} />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-start text-sm text-slate-600">
                        <Clock className="mr-2 mt-0.5 flex-shrink-0 text-violet-600" size={18} />
                        <span>{formatTime(event.date)}</span>
                      </div>
                      <div className="flex items-start text-sm text-slate-600">
                        <MapPin className="mr-2 mt-0.5 flex-shrink-0 text-violet-600" size={18} />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    {/* Optional action row (shows only if URLs present) */}
                    {(event as any).cta_url && (
                      <div className="mt-6">
                        <a
                          href={(event as any).cta_url}
                          className="inline-block px-5 py-2 bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 text-white rounded-lg font-medium hover:from-indigo-300 hover:via-violet-300 hover:to-purple-300 transition shadow-md hover:shadow-lg"
                        >
                          Learn More / Register
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
