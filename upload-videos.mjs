import { put } from '@vercel/blob';
import { readFileSync, readdirSync } from 'fs';
import { join, basename } from 'path';

// Videos to upload
const videos = [
  {
    path: 'public/images/projects/Lawnstack/lawnstack-demo.mp4',
    blobPath: 'projects/lawnstack-demo.mp4'
  },
  {
    path: 'public/images/projects/boltzmanEnterprise/Screen Recording good.mp4',
    blobPath: 'projects/voice-ai-demo.mp4'
  },
  {
    path: 'public/images/projects/Boltzmanchat/boltzman-ai-new.mp4',
    blobPath: 'projects/boltzman-ai-demo.mp4'
  },
  {
    path: 'public/images/projects/energy/energy-demo.mp4',
    blobPath: 'projects/energy-demo.mp4'
  }
];

async function uploadVideos() {
  console.log('Starting video uploads to Vercel Blob...\n');

  const urls = {};

  for (const video of videos) {
    try {
      console.log(`Uploading ${video.blobPath}...`);
      const file = readFileSync(video.path);

      const blob = await put(video.blobPath, file, {
        access: 'public',
        contentType: 'video/mp4'
      });

      urls[video.blobPath] = blob.url;
      console.log(`✓ Uploaded: ${blob.url}\n`);
    } catch (error) {
      console.error(`✗ Failed to upload ${video.path}:`, error.message);
    }
  }

  console.log('\n📝 Update your Projects.tsx with these URLs:');
  console.log(JSON.stringify(urls, null, 2));
}

uploadVideos();
