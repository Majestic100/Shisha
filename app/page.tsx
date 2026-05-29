import { Hero } from '@/components/sections/Hero'
import { LogoStrip } from '@/components/sections/LogoStrip'
import { FeaturedModels } from '@/components/sections/FeaturedModels'
import { HeritageBlock } from '@/components/sections/HeritageBlock'
import { WarrantyTeaser } from '@/components/sections/WarrantyTeaser'
import { Quote } from '@/components/sections/Quote'
import { InstagramFeed } from '@/components/sections/InstagramFeed'

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <FeaturedModels />
      <HeritageBlock />
      <Quote
        quote="We did not set out to make a better hookah. We set out to make one that could be inherited."
        attribution="The House of Smoke Connoisseur"
      />
      <WarrantyTeaser />
      <InstagramFeed />
    </>
  )
}
