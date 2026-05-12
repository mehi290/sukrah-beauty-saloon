import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { BeforeAfter } from "@/components/before-after"
import { Testimonials } from "@/components/testimonials"
import { BookingFlow } from "@/components/booking-flow"
import { FindUs } from "@/components/find-us"
import { Footer } from "@/components/footer"
import { StickyCta } from "@/components/sticky-cta"

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Services />
        <BeforeAfter />
        <Testimonials />
        <BookingFlow />
        <FindUs />
      </main>
      <Footer />
      <StickyCta />
    </>
  )
}
