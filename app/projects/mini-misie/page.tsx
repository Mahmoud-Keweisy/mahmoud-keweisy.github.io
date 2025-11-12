import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mini Misie Preschool Workspace | Portfolio',
  description:
    'Gallery of preschool classroom activities, English corners, and themed events designed for Mini Misie.',
};

const allowedExt = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif']);

function getImages() {
  const dir = path.join(process.cwd(), 'public', 'projects', 'mini-misie');
  if (!fs.existsSync(dir)) return [] as string[];
  const files = fs
    .readdirSync(dir)
    .filter((f) => allowedExt.has(path.extname(f).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  return files.map((f) => `/projects/mini-misie/${f}`);
}

export default function MiniMisieGalleryPage() {
  const images = getImages();

  return (
    <div className="container-responsive py-8">
      <h1 className="section-heading mb-2">Mini Misie Preschool Workspace</h1>
      <p className="section-subheading mb-8">
        A gallery of classroom moments, English corners, and themed activities.
      </p>

      {images.length === 0 ? (
        <p className="text-center text-neutral-600 dark:text-neutral-300">No images found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((src, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-lg border border-neutral-200 dark:border-slate-700"
            >
              <div className="relative h-64 bg-neutral-100 dark:bg-slate-800">
                <Image
                  src={src}
                  alt={`Mini Misie image ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={i < 3}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
