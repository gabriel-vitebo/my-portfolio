const YOUTUBE_ID_PATTERNS = [
  /youtube\.com\/watch\?v=([^&]+)/,
  /youtube\.com\/embed\/([^?&]+)/,
  /youtu\.be\/([^?&]+)/,
  /youtube\.com\/shorts\/([^?&]+)/,
]

export const useYoutubeMedia = () => {
  const getYoutubeId = (url: string) => (
    YOUTUBE_ID_PATTERNS
      .map((pattern) => url.match(pattern)?.[1])
      .find(Boolean)
  )

  const getYoutubeEmbedUrl = (url: string) => {
    const videoId = getYoutubeId(url)

    return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : url
  }

  const getYoutubeThumbnail = (url: string) => {
    const videoId = getYoutubeId(url)

    return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : ''
  }

  return {
    getYoutubeEmbedUrl,
    getYoutubeId,
    getYoutubeThumbnail,
  }
}
