import { Box, Container, Flex, Grid, Heading, Text, Card } from '@radix-ui/themes'

const testimonials = [
  {
    name: 'Maria T.',
    location: 'Oakwood',
    stars: 5,
    quote:
      "I've tried a few cleaning services over the years, but none have been as thorough or as fairly priced as this team. My house has never looked better. I'm a customer for life!",
  },
  {
    name: 'James & Keisha R.',
    location: 'Riverside Heights',
    stars: 5,
    quote:
      'We booked the move-out clean for our rental and got our full deposit back. The apartment was spotless — the landlord was actually impressed. Highly recommend for anyone moving.',
  },
  {
    name: 'Linda M.',
    location: 'Maplewood',
    stars: 5,
    quote:
      "Super reliable, always on time, and so friendly. I have the bi-weekly service and it has genuinely changed my life. Worth every penny. Don't hesitate to book.",
  },
]

function Stars({ count }) {
  return (
    <Flex gap="1">
      {Array.from({ length: count }).map((_, i) => (
        <Text key={i} style={{ color: 'var(--brand)' }}>★</Text>
      ))}
    </Flex>
  )
}

export default function Testimonials() {
  return (
    <Box id="testimonials" style={{ backgroundColor: 'var(--gray-1)', paddingTop: '80px', paddingBottom: '80px' }}>
      <Container size="4" px={{ initial: '4', md: '6' }}>
        <Flex direction="column" align="center" gap="2" style={{ marginBottom: '48px' }}>
          <Text
            size="2"
            weight="medium"
            style={{ color: 'var(--brand)', letterSpacing: '0.08em', textTransform: 'uppercase' }}
          >
            Reviews
          </Text>
          <Heading size={{ initial: '6', md: '8' }} align="center">
            What Our Customers Say
          </Heading>
        </Flex>
        <Grid
          columns={{ initial: '1', md: '3' }}
          gap={{ initial: '4', md: '5' }}
        >
          {testimonials.map((t) => (
            <Card key={t.name} size="2" style={{ borderTop: '3px solid var(--brand)' }}>
              <Flex direction="column" gap="4">
                <Stars count={t.stars} />
                <Text size="2" color="gray" style={{ lineHeight: 1.7, fontStyle: 'italic' }}>
                  "{t.quote}"
                </Text>
                <Flex direction="column" gap="0" mt="auto">
                  <Text size="2" weight="bold">{t.name}</Text>
                  <Text size="1" color="gray">{t.location}</Text>
                </Flex>
              </Flex>
            </Card>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
