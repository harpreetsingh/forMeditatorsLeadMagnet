import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart } from "lucide-react"

export default function LotusHeartMeditation() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="absolute inset-0 bg-[url('/serene-mountain-landscape-at-sunrise-with-soft-clo.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="relative container mx-auto px-4 py-24 text-center">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Heart className="h-8 w-8 text-accent" />
              <h1 className="text-5xl md:text-6xl font-bold text-balance bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Lotus Heart Meditation
              </h1>
            </div>

            <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground text-balance">
              Relax, Sleep Better & Beat Jetlag
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Discover the gentle path to inner peace with our beginner-friendly meditation guide. Start your journey to
              better sleep, deeper relaxation, and natural jetlag relief.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Start Your Journey Today</h3>
            <p className="text-lg text-muted-foreground mb-12 text-pretty">
              Get instant access to our comprehensive meditation guide. No spam, just peaceful wisdom delivered to your
              inbox.
            </p>

            {/* Tally.so Form Container */}
            <Card className="border-2 border-primary/20 shadow-xl bg-card">
              <CardContent className="p-8">
                {/* Tally.so Embedded Form */}
                <div className="w-full">
                  <iframe 
                    data-tally-src="https://tally.so/embed/nPKdzd?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                    loading="lazy" 
                    width="100%" 
                    height="516" 
                    frameBorder="0" 
                    marginHeight="0" 
                    marginWidth="0" 
                    title="Get the Lotus Heart Meditation Guide for Free"
                    className="rounded-lg"
                  ></iframe>
                  <script 
                    dangerouslySetInnerHTML={{
                      __html: `var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}`
                    }}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <Heart className="h-5 w-5 text-accent" />
              <span className="font-semibold text-lg">Lotus Heart Meditation</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md mx-auto text-pretty">
              Guiding you on your journey to inner peace, better sleep, and natural wellness through the gentle art of
              meditation.
            </p>
            <div className="pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground">© 2024 Lotus Heart Meditation. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
