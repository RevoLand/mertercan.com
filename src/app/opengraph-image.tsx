import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';

export const size = {
  width: 1200,
  height: 630,
};

async function loadGoogleFont(font: string) {
  const url = `https://fonts.googleapis.com/css2?family=${font}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(/src: url\((.+)\) format\('(opentype|truetype)'\)/);

  if (resource) {
    const response = await fetch(resource[1]);

    if (response.status == 200) {
      return response.arrayBuffer();
    }
  }

  throw new Error('failed to load font data');
}

export const contentType = 'image/png';

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          backgroundColor: '#FAF7F2',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingLeft: 110,
            paddingRight: 110,
            paddingTop: 110,
            paddingBottom: 90,
          }}
        >
          <div
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
            }}
          >
            <div style={{ maxWidth: 760, display: 'flex', flexDirection: 'column' }}>
              <div
                style={{
                  fontSize: 92,
                  fontWeight: 600,
                  letterSpacing: '-0.045em',
                  lineHeight: 1.08,
                  color: '#2A2A2A',
                  marginBottom: 24,
                }}
              >
                Mert Ercan
              </div>

              <div
                style={{
                  fontSize: 30,
                  fontWeight: 400,
                  lineHeight: 1.42,
                  color: '#3A3A3A',
                  maxWidth: 620,
                }}
              >
                Frontend developer exploring how small things grow into meaning.
              </div>
            </div>
            <div
              style={{
                fontSize: 20,
                fontWeight: 400,
                letterSpacing: '0.10em',
                color: '#BDA889',
                textTransform: 'lowercase',
                display: 'flex',
              }}
            >
              mertercan.com
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Poppins',
          data: await loadGoogleFont('Poppins'),
          style: 'normal',
        },
      ],
    }
  );
}
