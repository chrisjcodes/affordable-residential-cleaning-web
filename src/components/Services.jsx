import { Box, Container, Flex, Grid, Heading, Text, Card } from '@radix-ui/themes'

const services = [
  {
    title: 'Standard Clean',
    description:
      'Regular maintenance cleaning to keep your home fresh. Includes dusting, vacuuming, mopping, and bathroom and kitchen wipe-downs.',
  },
  {
    title: 'Deep Clean',
    description:
      'A thorough top-to-bottom clean covering baseboards, inside appliances, cabinet fronts, and all those hard-to-reach spots.',
  },
  {
    title: 'Move-In / Move-Out',
    description:
      'Detailed cleaning for property transitions. We leave the space spotless for new occupants or help you get your deposit back.',
  },
  {
    title: 'Recurring Service',
    description:
      'Set it and forget it — weekly, bi-weekly, or monthly scheduling at a discounted rate to keep your home consistently clean.',
  },
]

export default function Services() {
  return (
    <Box id="services" style={{ background: 'linear-gradient(160deg, #2d0017 0%, #E7007D 100%)', paddingTop: '80px', paddingBottom: '80px' }}>
      <Container size="4" px={{ initial: '4', md: '6' }}>
        <Flex direction="column" align="center" gap="2" style={{ marginBottom: '48px' }}>
          <Text
            size="2"
            weight="medium"
            style={{ color: 'rgba(255,255,255,0.6)', letterSpacing: '0.08em', textTransform: 'uppercase' }}
          >
            What We Offer
          </Text>
          <Heading size={{ initial: '6', md: '8' }} align="center" style={{ color: 'white' }}>
            Our Services
          </Heading>
        </Flex>
        <Grid
          columns={{ initial: '1', sm: '2', md: '4' }}
          gap={{ initial: '4', md: '5' }}
        >
          {services.map((service) => (
            <Card key={service.title} size="2" style={{ height: '100%' }}>
              <Flex direction="column" gap="3">
                <Heading size="4">{service.title}</Heading>
                <Text size="2" color="gray" style={{ lineHeight: 1.6 }}>
                  {service.description}
                </Text>
              </Flex>
            </Card>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
