import { useState, useEffect } from 'react';
import { Plus, Pencil, Trash2, Check, X } from 'lucide-react';
import { supabase, Event, Testimonial, Photo } from '../lib/supabase';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'events' | 'testimonials' | 'photos'>('events');

  const [events, setEvents] = useState<Event[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [photos, setPhotos] = useState<Photo[]>([]);

  const [loading, setLoading] = useState(true);

  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const [editingPhoto, setEditingPhoto] = useState<Photo | null>(null);

  const [showEventForm, setShowEventForm] = useState(false);
  const [showTestimonialForm, setShowTestimonialForm] = useState(false);
  const [showPhotoForm, setShowPhotoForm] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [eventsRes, testimonialsRes, photosRes] = await Promise.all([
        supabase.from('events').select('*').order('date', { ascending: true }),
        supabase.from('testimonials').select('*').order('created_at', { ascending: false }),
        supabase.from('photos').select('*').order('created_at', { ascending: false }),
      ]);

      if (eventsRes.data) setEvents(eventsRes.data);
      if (testimonialsRes.data) setTestimonials(testimonialsRes.data);
      if (photosRes.data) setPhotos(photosRes.data);
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

  const handleDeletePhoto = async (id: number) => {
    if (!confirm('Are you sure you want to delete this photo?')) return;
    try {
      const { error } = await supabase.from('photos').delete().eq('id', id);
      if (error) throw error;
      await fetchData();
    } catch (error) {
      console.error('Error deleting photo:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-emerald-600">
        <svg className="h-10 w-10 animate-spin text-emerald-500" viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          />
        </svg>
        <p className="mt-3 text-slate-600">Loading dashboard data...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Tabs */}
      <div className="mb-8 flex space-x-4">
        <button
          onClick={() => setActiveTab('events')}
          className={`rounded-lg px-6 py-3 font-semibold transition-colors ${
            activeTab === 'events'
              ? 'bg-emerald-600 text-white'
              : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
          }`}
        >
          Events ({events.length})
        </button>
        <button
          onClick={() => setActiveTab('testimonials')}
          className={`rounded-lg px-6 py-3 font-semibold transition-colors ${
            activeTab === 'testimonials'
              ? 'bg-emerald-600 text-white'
              : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
          }`}
        >
          Testimonials ({testimonials.length})
        </button>
        <button
          onClick={() => setActiveTab('photos')}
          className={`rounded-lg px-6 py-3 font-semibold transition-colors ${
            activeTab === 'photos'
              ? 'bg-emerald-600 text-white'
              : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
          }`}
        >
          Photos ({photos.length})
        </button>
      </div>

      {/* Events tab */}
      {activeTab === 'events' && (
        <div>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-800">Manage Events</h2>
            <button
              onClick={() => {
                setEditingEvent(null);
                setShowEventForm(true);
              }}
              className="flex items-center rounded-lg bg-emerald-600 px-4 py-2 text-white transition-colors hover:bg-emerald-700"
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

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <div
                key={event.id}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold text-slate-800">
                      {event.title}
                    </h3>
                    <p className="mb-3 text-slate-600">{event.description}</p>
                    <div className="flex flex-wrap gap-3 text-sm text-slate-500">
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <div className="ml-4 flex space-x-2">
                    <button
                      onClick={() => {
                        setEditingEvent(event);
                        setShowEventForm(true);
                      }}
                      className="rounded-lg p-2 text-blue-600 transition-colors hover:bg-blue-50"
                      title="Edit"
                    >
                      <Pencil size={20} />
                    </button>
                    <button
                      onClick={() => handleDeleteEvent(event.id)}
                      className="rounded-lg p-2 text-red-600 transition-colors hover:bg-red-50"
                      title="Delete"
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

      {/* Testimonials tab */}
      {activeTab === 'testimonials' && (
        <div>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-800">Manage Testimonials</h2>
            <button
              onClick={() => {
                setEditingTestimonial(null);
                setShowTestimonialForm(true);
              }}
              className="flex items-center rounded-lg bg-emerald-600 px-4 py-2 text-white transition-colors hover:bg-emerald-700"
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

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="text-sm font-semibold text-slate-700">
                        {t.name_or_initials}
                      </span>
                      <span
                        className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                          t.approved
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        {t.approved ? 'Approved' : 'Pending'}
                      </span>
                    </div>
                    <p className="italic text-slate-700">“{t.text}”</p>
                  </div>
                  <div className="ml-4 flex space-x-2">
                    <button
                      onClick={() => handleToggleApproval(t.id, t.approved)}
                      className={`rounded-lg p-2 transition-colors ${
                        t.approved
                          ? 'text-slate-600 hover:bg-slate-50'
                          : 'text-emerald-600 hover:bg-emerald-50'
                      }`}
                      title={t.approved ? 'Unapprove' : 'Approve'}
                    >
                      {t.approved ? <X size={20} /> : <Check size={20} />}
                    </button>
                    <button
                      onClick={() => {
                        setEditingTestimonial(t);
                        setShowTestimonialForm(true);
                      }}
                      className="rounded-lg p-2 text-blue-600 transition-colors hover:bg-blue-50"
                      title="Edit"
                    >
                      <Pencil size={20} />
                    </button>
                    <button
                      onClick={() => handleDeleteTestimonial(t.id)}
                      className="rounded-lg p-2 text-red-600 transition-colors hover:bg-red-50"
                      title="Delete"
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

      {/* Photos tab */}
      {activeTab === 'photos' && (
        <div>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-800">Manage Photos</h2>
            <button
              onClick={() => {
                setEditingPhoto(null);
                setShowPhotoForm(true);
              }}
              className="flex items-center rounded-lg bg-emerald-600 px-4 py-2 text-white transition-colors hover:bg-emerald-700"
            >
              <Plus className="mr-2" size={20} />
              Add Photo
            </button>
          </div>

          {showPhotoForm && (
            <PhotoForm
              photo={editingPhoto}
              onClose={() => {
                setShowPhotoForm(false);
                setEditingPhoto(null);
              }}
              onSave={async () => {
                await fetchData();
                setShowPhotoForm(false);
                setEditingPhoto(null);
              }}
            />
          )}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((p) => (
              <div
                key={p.id}
                className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition hover:shadow-md"
              >
                <div className="mb-3 aspect-video overflow-hidden rounded-xl bg-slate-100">
                  {p.image_url ? (
                    <img
                      src={p.image_url}
                      alt={p.caption || 'Photo'}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-sm text-slate-400">
                      No image URL
                    </div>
                  )}
                </div>
                {p.caption && (
                  <p className="mb-3 text-sm text-slate-700 line-clamp-2">
                    {p.caption}
                  </p>
                )}
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="truncate">{p.image_url}</span>
                  <div className="ml-2 flex space-x-2">
                    <button
                      onClick={() => {
                        setEditingPhoto(p);
                        setShowPhotoForm(true);
                      }}
                      className="rounded-lg p-1.5 text-blue-600 transition-colors hover:bg-blue-50"
                      title="Edit"
                    >
                      <Pencil size={18} />
                    </button>
                    <button
                      onClick={() => handleDeletePhoto(p.id)}
                      className="rounded-lg p-1.5 text-red-600 transition-colors hover:bg-red-50"
                      title="Delete"
                    >
                      <Trash2 size={18} />
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

/* ---------- EventForm ---------- */

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
    <div className="mb-6 rounded-2xl border-2 border-slate-200 bg-white p-6">
      <h3 className="mb-4 text-xl font-bold text-slate-800">
        {event ? 'Edit Event' : 'Add New Event'}
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Title
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            required
            className="w-full rounded-lg border-2 border-slate-200 px-4 py-2 focus:border-emerald-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Description
          </label>
          <textarea
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            required
            rows={3}
            className="w-full rounded-lg border-2 border-slate-200 px-4 py-2 focus:border-emerald-500 focus:outline-none"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Date & Time
            </label>
            <input
              type="datetime-local"
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
              required
              className="w-full rounded-lg border-2 border-slate-200 px-4 py-2 focus:border-emerald-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Location
            </label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
              required
              className="w-full rounded-lg border-2 border-slate-200 px-4 py-2 focus:border-emerald-500 focus:outline-none"
            />
          </div>
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Image URL (optional)
          </label>
          <input
            type="url"
            value={formData.image_url}
            onChange={(e) =>
              setFormData({ ...formData, image_url: e.target.value })
            }
            className="w-full rounded-lg border-2 border-slate-200 px-4 py-2 focus:border-emerald-500 focus:outline-none"
          />
        </div>
        <div className="flex space-x-3">
          <button
            type="submit"
            disabled={saving}
            className="rounded-lg bg-emerald-600 px-6 py-2 text-white transition-colors hover:bg-emerald-700 disabled:bg-slate-400"
          >
            {saving ? 'Saving...' : 'Save Event'}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-slate-200 px-6 py-2 text-slate-700 transition-colors hover:bg-slate-300"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

/* ---------- TestimonialForm ---------- */

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
    <div className="mb-6 rounded-2xl border-2 border-slate-200 bg-white p-6">
      <h3 className="mb-4 text-xl font-bold text-slate-800">
        {testimonial ? 'Edit Testimonial' : 'Add New Testimonial'}
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Name or Initials
          </label>
          <input
            type="text"
            value={formData.name_or_initials}
            onChange={(e) =>
              setFormData({ ...formData, name_or_initials: e.target.value })
            }
            required
            className="w-full rounded-lg border-2 border-slate-200 px-4 py-2 focus:border-emerald-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Testimonial
          </label>
          <textarea
            value={formData.text}
            onChange={(e) =>
              setFormData({ ...formData, text: e.target.value })
            }
            required
            rows={4}
            className="w-full rounded-lg border-2 border-slate-200 px-4 py-2 focus:border-emerald-500 focus:outline-none"
          />
        </div>
        <div className="flex items-center">
          <input
            id="approved"
            type="checkbox"
            checked={formData.approved}
            onChange={(e) =>
              setFormData({ ...formData, approved: e.target.checked })
            }
            className="h-5 w-5 rounded text-emerald-600 focus:ring-emerald-500"
          />
          <label
            htmlFor="approved"
            className="ml-2 text-sm font-semibold text-slate-700"
          >
            Approved for display
          </label>
        </div>
        <div className="flex space-x-3">
          <button
            type="submit"
            disabled={saving}
            className="rounded-lg bg-emerald-600 px-6 py-2 text-white transition-colors hover:bg-emerald-700 disabled:bg-slate-400"
          >
            {saving ? 'Saving...' : 'Save Testimonial'}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-slate-200 px-6 py-2 text-slate-700 transition-colors hover:bg-slate-300"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

/* ---------- PhotoForm (with upload from computer) ---------- */

function PhotoForm({
  photo,
  onClose,
  onSave,
}: {
  photo: Photo | null;
  onClose: () => void;
  onSave: () => void;
}) {
  const [formData, setFormData] = useState({
    image_url: photo?.image_url || '',
    caption: photo?.caption || '',
  });

  const [file, setFile] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);

  const handleUpload = async () => {
    if (!file) return null;

    const fileName = `${Date.now()}-${file.name}`;
    const filePath = fileName;

    const { error: uploadError } = await supabase.storage
      .from('photos') // bucket name
      .upload(filePath, file, { upsert: true });

    if (uploadError) {
      console.error('Upload error:', uploadError);
      alert('Failed to upload file');
      return null;
    }

    const { data } = supabase.storage.from('photos').getPublicUrl(filePath);
    return data.publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      let finalImageUrl = formData.image_url;

      // If user chose a file, upload it and use that URL
      if (file) {
        const uploadedUrl = await handleUpload();
        if (uploadedUrl) {
          finalImageUrl = uploadedUrl;
        } else {
          // upload failed
          setSaving(false);
          return;
        }
      }

      // If still no URL, stop
      if (!finalImageUrl) {
        alert('Please upload an image or provide an image URL.');
        setSaving(false);
        return;
      }

      if (photo) {
        const { error } = await supabase
          .from('photos')
          .update({
            image_url: finalImageUrl,
            caption: formData.caption || null,
          })
          .eq('id', photo.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from('photos').insert([
          {
            image_url: finalImageUrl,
            caption: formData.caption || null,
          },
        ]);
        if (error) throw error;
      }

      onSave();
    } catch (error) {
      console.error('Error saving photo:', error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="mb-6 rounded-2xl border-2 border-slate-200 bg-white p-6">
      <h3 className="mb-4 text-xl font-bold text-slate-800">
        {photo ? 'Edit Photo' : 'Add New Photo'}
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Upload from computer */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Upload Image From Computer
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const selected = e.target.files?.[0] || null;
              setFile(selected);
            }}
            className="w-full rounded-lg border-2 border-slate-200 px-4 py-2"
          />
        </div>

        {/* OR paste an image URL */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            OR Paste Image URL
          </label>
          <input
            type="url"
            value={formData.image_url}
            onChange={(e) =>
              setFormData({ ...formData, image_url: e.target.value })
            }
            placeholder="https://example.com/photo.jpg"
            className="w-full rounded-lg border-2 border-slate-200 px-4 py-2"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Caption (optional)
          </label>
          <textarea
            rows={2}
            value={formData.caption}
            onChange={(e) =>
              setFormData({ ...formData, caption: e.target.value })
            }
            className="w-full rounded-lg border-2 border-slate-200 px-4 py-2"
            placeholder="Short description for this photo"
          />
        </div>

        <div className="flex space-x-3">
          <button
            type="submit"
            disabled={saving}
            className="rounded-lg bg-emerald-600 px-6 py-2 text-white transition-colors hover:bg-emerald-700 disabled:bg-slate-400"
          >
            {saving ? 'Saving...' : 'Save Photo'}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-slate-200 px-6 py-2 text-slate-700 transition-colors hover:bg-slate-300"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
