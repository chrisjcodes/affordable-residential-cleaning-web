import { Box, Container, Flex, Grid, Heading, Text, Card } from '@radix-ui/themes'

const testimonials = [
  {
    name: 'Bruce Scott',
    quote:
      "I have been fortunate to have Affordable Residential Cleaning care for my home for over 10 years now, and I can honestly say they are one of the most reliable and hardworking teams I've ever known. They show up on time every single time, work with efficiency, and always leave my house spotless. I never have to ask them to pay extra attention to certain areas; they just notice what needs doing and take care of it. From cleaning the kitchen to keeping the bathrooms sparkling and dusting places most people would miss, their attention to detail is exceptional. Beyond the excellent cleaning, Affordable Residential Cleaning is trustworthy and a pleasure to have in the house. After a decade, they still approach every visit with the same care and pride in their work. I recommend Affordable Residential Cleaning without hesitation to anyone looking for a dependable, thorough, and genuinely good team to care for their home. They're the real deal.",
  },
  {
    name: 'Liz Steiner',
    quote:
      "Affordable Residential Cleaning has been cleaning my home for over 15 years, and they are simply the best. They are incredibly trustworthy, dependable, and thorough — I never hesitate to have them clean while I'm away. It is no surprise their client base in the Isles has grown tremendously by word of mouth. Highly recommended, and their rates are very reasonable!",
  },
  {
    name: 'Faye Adkins',
    quote:
      "I can truthfully say I am very pleased with Affordable Residential Cleaning. What a great job they and their crew do on cleaning my home. They have been working for me for going on 2 years. Couldn't do without them.",
  },
  {
    name: 'Judy Drohlich',
    quote:
      "I have been using Affordable Residential Cleaning for almost a year now. They have been great in every way. The girls are very energetic and power through so you get your house back quickly and clean. I also have dogs and they are wonderful with them.",
  },
]

function Stars() {
  return (
    <Flex gap="1">
      {Array.from({ length: 5 }).map((_, i) => (
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
          columns={{ initial: '1', sm: '2' }}
          gap={{ initial: '4', md: '5' }}
        >
          {testimonials.map((t) => (
            <Card key={t.name} size="2" style={{ borderTop: '3px solid var(--brand)' }}>
              <Flex direction="column" gap="4">
                <Stars />
                <Text size="2" color="gray" style={{ lineHeight: 1.7, fontStyle: 'italic' }}>
                  "{t.quote}"
                </Text>
                <Text size="2" weight="bold" style={{ marginTop: 'auto' }}>{t.name}</Text>
              </Flex>
            </Card>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
