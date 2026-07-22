const EMBED_HOST = 'https://www.youtube.com/embed/';

const extractVideoId = (url: string): string | null => {
  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes('youtu.be')) {
      return parsed.pathname.slice(1) || null;
    }

    if (parsed.pathname.startsWith('/embed/')) {
      return parsed.pathname.replace('/embed/', '').split('/')[0] || null;
    }

    if (parsed.searchParams.has('v')) {
      return parsed.searchParams.get('v');
    }
  } catch {
    return null;
  }

  return null;
};

const toEmbedUrl = (youtubeUrl: string): string => {
  const videoId = extractVideoId(youtubeUrl);
  return videoId ? `${EMBED_HOST}${videoId}` : youtubeUrl;
};

type YoutubeEmbedProps = {
  youtubeUrl: string;
  title: string;
};

const YoutubeEmbed = ({ youtubeUrl, title }: YoutubeEmbedProps) => {
  const embedUrl = toEmbedUrl(youtubeUrl);

  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-gray-600">
      <iframe
        className="absolute inset-0 w-full h-full"
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default YoutubeEmbed;
