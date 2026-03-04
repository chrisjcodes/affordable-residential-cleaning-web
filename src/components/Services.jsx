import { Box, Container, Flex, Grid, Heading, Text, Card } from '@radix-ui/themes'

const serviceGroups = [
  {
    group: 'Cleaning Services',
    services: [
      {
        title: 'Premium Clean',
        description:
          'Dusting including picture frames, vacuuming, mopping, bathrooms, kitchen including cabinet fronts and inside microwave, ceiling fans, and change of linens.',
      },
      {
        title: 'Recurring Service',
        description:
          'Regular scheduled cleanings — weekly, bi-weekly, or monthly — so your home stays consistently clean without you having to think about it.',
      },
      {
        title: 'Move-In / Move-Out Clean',
        description:
          'Transitioning between homes? We provide a thorough premium clean to leave the space spotless for new occupants or help you close out your old one the right way.',
      },
      {
        title: 'Pre-Occupancy Clean',
        description:
          'Returning to your vacation home from up north? We\'ll have it fresh, clean, and ready for you before you arrive — so you can walk in and relax.',
      },
    ],
  },
  {
    group: 'Home & Pet Care',
    services: [
      {
        title: 'Seasonal Home Checking',
        description:
          'Peace of mind while you\'re away — we check running water, flush toilets, and start your car to maintain the battery. Tailored to your needs.',
      },
      {
        title: 'Pet Sitting',
        description:
          'Daily care for pets that don\'t require walking or overnight stays — cats, caged animals, reptiles, birds, fish, and more. We love puppies, but they\'re just not our specialty!',
      },
    ],
  },
]

export default function Services() {
  return (
    <Box id="services" style={{ background: 'linear-gradient(160deg, #2d0017 0%, #E7007D 100%)', paddingTop: '80px', paddingBottom: '80px' }}>
      <Container size="4" px={{ initial: '4', md: '6' }}>
        <Flex direction="column" align="center" gap="2" style={{ marginBottom: '56px' }}>
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

        <Flex direction="column" gap="8">
          {serviceGroups.map((group) => (
            <Flex key={group.group} direction="column" gap="4">
              <Text
                size="2"
                weight="medium"
                style={{ color: 'rgba(255,255,255,0.5)', letterSpacing: '0.06em', textTransform: 'uppercase', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '10px' }}
              >
                {group.group}
              </Text>
              <Flex wrap="wrap" gap={{ initial: '4', md: '5' }} justify="center">
                {group.services.map((service) => (
                  <Card
                    key={service.title}
                    size="2"
                    style={{ flex: '1 1 260px', maxWidth: '360px' }}
                  >
                    <Flex direction="column" gap="3">
                      <Heading size="4">{service.title}</Heading>
                      <Text size="2" color="gray" style={{ lineHeight: 1.6 }}>
                        {service.description}
                      </Text>
                    </Flex>
                  </Card>
                ))}
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Container>
    </Box>
  )
}
