import { useState, useEffect } from 'react';
import { Plus, CreditCard as Edit2, Trash2, Check, X } from 'lucide-react';
import { supabase, Event, Testimonial } from '../lib/supabase';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'events' | 'testimonials'>('events');
  const [events, setEvents] = useState<Event[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const [showEventForm, setShowEventForm] = useState(false);
  const [showTestimonialForm, setShowTestimonialForm] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [eventsData, testimonialsData] = await Promise.all([
        supabase.from('events').select('*').order('date', { ascending: true }),
        supabase.from('testimonials').select('*').order('created_at', { ascending: false }),
      ]);

      if (eventsData.data) setEvents(eventsData.data);
      if (testimonialsData.data) setTestimonials(testimonialsData.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteEvent = async (id: string) => {
    if (!confirm('Are you sure you want to delete this event?')) return;

    try {
      const { error } = await supabase.from('events').delete().eq('id', id);
      if (error) throw error;
      await fetchData();
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  const handleDeleteTestimonial = async (id: string) => {
    if (!confirm('Are you sure you want to delete this testimonial?')) return;

    try {
      const { error } = await supabase.from('testimonials').delete().eq('id', id);
      if (error) throw error;
      await fetchData();
    } catch (error) {
      console.error('Error deleting testimonial:', error);
    }
  };

  const handleToggleApproval = async (id: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('testimonials')
        .update({ approved: !currentStatus })
        .eq('id', id);
      if (error) throw error;
      await fetchData();
    } catch (error) {
      console.error('Error updating testimonial:', error);
    }
  };

  if (loading) {
    return (
      <div className="py-12 text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-emerald-600 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => setActiveTab('events')}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
            activeTab === 'events'
              ? 'bg-emerald-600 text-white'
              : 'bg-white text-slate-700 hover:bg-slate-50'
          }`}
        >
          Events ({events.length})
        </button>
        <button
          onClick={() => setActiveTab('testimonials')}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
            activeTab === 'testimonials'
              ? 'bg-emerald-600 text-white'
              : 'bg-white text-slate-700 hover:bg-slate-50'
          }`}
        >
          Testimonials ({testimonials.length})
        </button>
      </div>

      {activeTab === 'events' && (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-slate-800">Manage Events</h2>
            <button
              onClick={() => {
                setEditingEvent(null);
                setShowEventForm(true);
              }}
              className="flex items-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
            >
              <Plus className="mr-2" size={20} />
              Add Event
            </button>
          </div>

          {showEventForm && (
            <EventForm
              event={editingEvent}
              onClose={() => {
                setShowEventForm(false);
                setEditingEvent(null);
              }}
              onSave={async () => {
                await fetchData();
                setShowEventForm(false);
                setEditingEvent(null);
              }}
            />
          )}

          <div className="space-y-4">
            {events.map((event) => (
              <div key={event.id} className="bg-white border-2 border-slate-100 rounded-xl p-6">
                <div className="flex justify-between items-start">
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">{event.title}</h3>
                    <p className="text-slate-600 mb-3">{event.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <div className="flex space-x-2 ml-4">
                    <button
                      onClick={() => {
                        setEditingEvent(event);
                        setShowEventForm(true);
                      }}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <Edit2 size={20} />
                    </button>
                    <button
                      onClick={() => handleDeleteEvent(event.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'testimonials' && (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-slate-800">Manage Testimonials</h2>
            <button
              onClick={() => {
                setEditingTestimonial(null);
                setShowTestimonialForm(true);
              }}
              className="flex items-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
            >
              <Plus className="mr-2" size={20} />
              Add Testimonial
            </button>
          </div>

          {showTestimonialForm && (
            <TestimonialForm
              testimonial={editingTestimonial}
              onClose={() => {
                setShowTestimonialForm(false);
                setEditingTestimonial(null);
              }}
              onSave={async () => {
                await fetchData();
                setShowTestimonialForm(false);
                setEditingTestimonial(null);
              }}
            />
          )}

          <div className="space-y-4">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white border-2 border-slate-100 rounded-xl p-6">
                <div className="flex justify-between items-start">
                  <div className="flex-grow">
                    <div className="flex items-center mb-3">
                      <span className="px-3 py-1 rounded-full text-sm font-semibold mr-3">
                        {testimonial.name_or_initials}
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          testimonial.approved
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {testimonial.approved ? 'Approved' : 'Pending'}
                      </span>
                    </div>
                    <p className="text-slate-700 italic">{testimonial.text}</p>
                  </div>
                  <div className="flex space-x-2 ml-4">
                    <button
                      onClick={() => handleToggleApproval(testimonial.id, testimonial.approved)}
                      className={`p-2 rounded-lg transition-colors ${
                        testimonial.approved
                          ? 'text-slate-600 hover:bg-slate-50'
                          : 'text-emerald-600 hover:bg-emerald-50'
                      }`}
                      title={testimonial.approved ? 'Unapprove' : 'Approve'}
                    >
                      {testimonial.approved ? <X size={20} /> : <Check size={20} />}
                    </button>
                    <button
                      onClick={() => {
                        setEditingTestimonial(testimonial);
                        setShowTestimonialForm(true);
                      }}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <Edit2 size={20} />
                    </button>
                    <button
                      onClick={() => handleDeleteTestimonial(testimonial.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function EventForm({
  event,
  onClose,
  onSave,
}: {
  event: Event | null;
  onClose: () => void;
  onSave: () => void;
}) {
  const [formData, setFormData] = useState({
    title: event?.title || '',
    description: event?.description || '',
    date: event?.date ? new Date(event.date).toISOString().slice(0, 16) : '',
    location: event?.location || '',
    image_url: event?.image_url || '',
  });
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      if (event) {
        const { error } = await supabase
          .from('events')
          .update({ ...formData, updated_at: new Date().toISOString() })
          .eq('id', event.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from('events').insert([formData]);
        if (error) throw error;
      }
      onSave();
    } catch (error) {
      console.error('Error saving event:', error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="bg-white border-2 border-slate-200 rounded-xl p-6 mb-6">
      <h3 className="text-xl font-bold text-slate-800 mb-4">
        {event ? 'Edit Event' : 'Add New Event'}
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
            className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-emerald-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            required
            rows={3}
            className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-emerald-500"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Date & Time</label>
            <input
              type="datetime-local"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              required
              className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-emerald-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Location</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              required
              className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-emerald-500"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Image URL (optional)
          </label>
          <input
            type="url"
            value={formData.image_url}
            onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
            className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-emerald-500"
          />
        </div>
        <div className="flex space-x-3">
          <button
            type="submit"
            disabled={saving}
            className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors disabled:bg-slate-400"
          >
            {saving ? 'Saving...' : 'Save Event'}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

function TestimonialForm({
  testimonial,
  onClose,
  onSave,
}: {
  testimonial: Testimonial | null;
  onClose: () => void;
  onSave: () => void;
}) {
  const [formData, setFormData] = useState({
    name_or_initials: testimonial?.name_or_initials || '',
    text: testimonial?.text || '',
    approved: testimonial?.approved || false,
  });
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      if (testimonial) {
        const { error } = await supabase
          .from('testimonials')
          .update(formData)
          .eq('id', testimonial.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from('testimonials').insert([formData]);
        if (error) throw error;
      }
      onSave();
    } catch (error) {
      console.error('Error saving testimonial:', error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="bg-white border-2 border-slate-200 rounded-xl p-6 mb-6">
      <h3 className="text-xl font-bold text-slate-800 mb-4">
        {testimonial ? 'Edit Testimonial' : 'Add New Testimonial'}
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Name or Initials
          </label>
          <input
            type="text"
            value={formData.name_or_initials}
            onChange={(e) => setFormData({ ...formData, name_or_initials: e.target.value })}
            required
            className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-emerald-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Testimonial</label>
          <textarea
            value={formData.text}
            onChange={(e) => setFormData({ ...formData, text: e.target.value })}
            required
            rows={4}
            className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-emerald-500"
          />
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="approved"
            checked={formData.approved}
            onChange={(e) => setFormData({ ...formData, approved: e.target.checked })}
            className="w-5 h-5 text-emerald-600 rounded focus:ring-emerald-500"
          />
          <label htmlFor="approved" className="ml-2 text-sm font-semibold text-slate-700">
            Approved for display
          </label>
        </div>
        <div className="flex space-x-3">
          <button
            type="submit"
            disabled={saving}
            className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors disabled:bg-slate-400"
          >
            {saving ? 'Saving...' : 'Save Testimonial'}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
