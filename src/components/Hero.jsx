import logo from '../assets/logo.svg'
import { Container, Flex, Heading, Text, Button } from '@radix-ui/themes'

export default function Hero() {
  return (
    <section
      style={{
        background: 'linear-gradient(160deg, #000000 0%, #1a1a1a 100%)',
        minHeight: '75vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Header row: logo left, nav links right */}
      <style>{`
        .hero-header { padding: 20px 24px; display: flex; align-items: center; justify-content: center; }
        .hero-logo { height: 110px; width: auto; }
        .hero-nav { display: none; }
        .hero-nav a { color: rgba(255,255,255,0.7); text-decoration: none; font-size: 20px; font-weight: 500; transition: color 0.15s; }
        .hero-nav a:hover { color: white; }
        @media (min-width: 768px) {
          .hero-header { padding: 24px 36px; justify-content: space-between; }
          .hero-logo { height: 120px; }
          .hero-nav { display: flex; align-items: center; gap: 48px; }
        }
      `}</style>
      <div className="hero-header">
        <img src={logo} alt="Affordable Residential Cleaning" className="hero-logo" />
        <nav className="hero-nav">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#testimonials">Reviews</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>

      {/* Centered content */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
        <Container size="3" px={{ initial: '4', md: '6' }} style={{ width: '100%' }}>
          <Flex
            direction="column"
            align="center"
            gap={{ initial: '5', md: '6' }}
            style={{ paddingBottom: '80px' }}
          >
            <Heading
              size={{ initial: '7', md: '9' }}
              align="center"
              style={{ color: 'white', lineHeight: 1.15 }}
            >
              Spotless Homes,{' '}
              <span style={{ color: 'var(--brand)' }}>Affordable Prices</span>
            </Heading>
            <Text
              size={{ initial: '3', md: '5' }}
              align="center"
              style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '480px', lineHeight: 1.6 }}
            >
              Professional residential cleaning you can trust — reliable, thorough,
              and priced right for every budget.
            </Text>
            <Flex
              gap={{ initial: '3', md: '4' }}
              direction="row"
            >
              <Button
                size={{ initial: '3', md: '4' }}
                style={{ backgroundColor: 'var(--brand)', cursor: 'pointer', whiteSpace: 'nowrap' }}
                asChild
              >
                <a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>
                  Schedule a Free Estimate
                </a>
              </Button>
              <Button
                size={{ initial: '3', md: '4' }}
                variant="outline"
                style={{ borderColor: 'rgba(255,255,255,0.25)', color: 'white', cursor: 'pointer', whiteSpace: 'nowrap' }}
                asChild
              >
                <a href="#services" style={{ textDecoration: 'none' }}>
                  View Services
                </a>
              </Button>
            </Flex>
          </Flex>
        </Container>
      </div>
    </section>
  )
}
