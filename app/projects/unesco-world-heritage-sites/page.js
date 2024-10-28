import Container from '@/components/container';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import React from 'react'

export default async function UnescoWorldHeritageSites() {
  const data = await fetch("https://www.toptal.com/developers/feed2json/convert?url=https%3A%2F%2Fwhc.unesco.org%2Fen%2Flist%2Frss%2F&minify=on");
  const sites = await data.json();

  return (
    <Container>
      <div className="space-y-8">
      <article className="mx-auto max-w-2xl text-center">
          <h1 className="mb-8 text-4xl lg:text-5xl">{sites.title}</h1>
          <CardDescription>
            {sites.description} Because of the number of them, I have set the app to only show 50 of the sites. The images are also not very good quality.
          </CardDescription>
        </article>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {sites.items.slice(0, 50).map((site) => (
          <Card key={site.guid} className="unesco-sites">
            <CardHeader className="font-bold text-white">
              {site.title}
            </CardHeader>
            <CardContent>
              <CardDescription dangerouslySetInnerHTML={{ __html: `${site.content_html.substring(0,300)}...`}}></CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  )
}
