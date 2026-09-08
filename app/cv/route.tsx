import { renderToBuffer } from '@react-pdf/renderer'
import { CvDocument } from '@/lib/cv-document'

export const dynamic = 'force-static'

const filename = 'Nemanja-Stanojlovic-CV.pdf'

export async function GET() {
  const pdfBuffer = await renderToBuffer(<CvDocument />)

  return new Response(new Uint8Array(pdfBuffer), {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${filename}"`,
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
