import { Box, Container, Flex, Grid, Heading, Text, Card } from '@radix-ui/themes'

const testimonials = [
  {
    name: 'Bruce Scott',
    quote:
      "I have been fortunate to have Liz cleaning my home for over 10 years now, and I can honestly say she is one of the most reliable and hardworking people I've ever known. She shows up on time every single time, works with efficiency, and always leaves my house spotless. I never have to ask her to pay extra attention to certain areas; she just notices what needs doing and takes care of it. From cleaning the kitchen to keeping the bathrooms sparkling and dusting places most people would miss, her attention to detail is exceptional. Beyond the excellent cleaning, Liz is kind, trustworthy, and a pleasure to have in the house. She's respectful of our space and our things, and I've never once worried about anything when she's here. After a decade, she still approaches every visit with the same care and pride in her work. I recommend Liz without hesitation to anyone looking for a dependable, thorough, and genuinely good person to care for their home. She's the real deal.",
  },
  {
    name: 'Liz Steiner',
    quote:
      "Liz Johnson has been cleaning my home for over 15 years, and she is simply the best. She is incredibly trustworthy, dependable, and thorough — I never hesitate to have her clean while I'm away. It is no surprise her client base in the Isles has grown tremendously by word of mouth. Highly recommended, and her rates are very reasonable!",
  },
  {
    name: 'Faye Adkins',
    quote:
      "I can truthfully say I am very pleased with Liz at Affordable Residential. What a great job she and her crew does on cleaning my home. She has been working for me for going on 2 years. Couldn't do without them.",
  },
  {
    name: 'Judy Drohlich',
    quote:
      "I have been using Liz for my housekeeper for almost a year now. She has been great in every way. The girls are very energetic and power through so you get your house back quickly and clean. I also have dogs and they are wonderful with them.",
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
