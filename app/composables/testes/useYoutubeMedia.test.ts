import { describe, expect, it } from 'vitest'
import { useYoutubeMedia } from '~/composables/useYoutubeMedia'

describe('useYoutubeMedia', () => {
  it.each([
    ['https://www.youtube.com/watch?v=q3YN-PIgiAs', 'q3YN-PIgiAs'],
    ['https://www.youtube.com/watch?v=q3YN-PIgiAs&t=12s', 'q3YN-PIgiAs'],
    ['https://www.youtube.com/embed/q3YN-PIgiAs', 'q3YN-PIgiAs'],
    ['https://youtu.be/q3YN-PIgiAs?feature=share', 'q3YN-PIgiAs'],
    ['https://youtube.com/shorts/YtVXiPXary0?feature=share', 'YtVXiPXary0'],
  ])('extracts the video id from %s', (url, videoId) => {
    expect(useYoutubeMedia().getYoutubeId(url)).toBe(videoId)
  })

  it('returns embed and thumbnail URLs for valid YouTube URLs', () => {
    const media = useYoutubeMedia()

    expect(media.getYoutubeEmbedUrl('https://youtu.be/q3YN-PIgiAs')).toBe('https://www.youtube.com/embed/q3YN-PIgiAs?autoplay=1')
    expect(media.getYoutubeThumbnail('https://youtu.be/q3YN-PIgiAs')).toBe('https://img.youtube.com/vi/q3YN-PIgiAs/hqdefault.jpg')
  })

  it('keeps unsupported URLs as embed fallback and returns empty thumbnail', () => {
    const media = useYoutubeMedia()
    const url = 'https://example.com/video'

    expect(media.getYoutubeEmbedUrl(url)).toBe(url)
    expect(media.getYoutubeThumbnail(url)).toBe('')
  })
})
