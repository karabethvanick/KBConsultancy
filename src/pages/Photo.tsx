import { useEffect, useState } from "react";
import { Camera } from "lucide-react";
import { supabase } from "../lib/supabase";

interface Photo {
  id: number;
  image_url: string;
  caption?: string | null;
  created_at?: string;
}

export default function Photos() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const { data, error } = await supabase
        .from("photos")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setPhotos(data || []);
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-indigo-300 via-violet-500 to-purple-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Camera className="text-white" size={40} />
            <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-sm">
              Photo Gallery
            </h1>
          </div>
          <p className="text-xl text-white/90 font-semibold max-w-3xl">
            Moments from training, racing, and coaching.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-gradient-to-br from-white via-violet-50 to-indigo-100">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-indigo-500 border-t-transparent" />
            </div>
          ) : photos.length === 0 ? (
            <div className="text-center py-12">
              <Camera className="mx-auto text-violet-300 mb-4" size={64} />
              <h3 className="text-2xl font-semibold text-slate-700">
                No photos yet
              </h3>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {photos.map((p) => (
                <div
                  key={p.id}
                  className="bg-white/70 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition overflow-hidden border border-violet-100"
                >
                  <div className="relative w-full h-64">
                    <img
                      src={p.image_url}
                      alt={p.caption || "Photo"}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {p.caption && (
                    <div className="p-3 text-xs text-slate-600">{p.caption}</div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
