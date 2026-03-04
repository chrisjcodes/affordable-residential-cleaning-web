import { Box, Container, Flex, Grid, Heading, Text, Card } from '@radix-ui/themes'

const testimonials = [
  {
    name: 'Bruce Scott',
    location: 'Sarasota, FL',
    quote: <>
      I have been fortunate to have Affordable Residential Cleaning care for my home for over 10 years now, and I can honestly say they are one of the most <strong>reliable and hardworking</strong> teams I've ever known. They <strong>show up on time every single time</strong>, work with efficiency, and always leave my house <strong>spotless</strong>. I never have to ask them to pay extra attention to certain areas; they just notice what needs doing and take care of it. From cleaning the kitchen to keeping the bathrooms sparkling and dusting places most people would miss, their <strong>attention to detail is exceptional</strong>. Beyond the excellent cleaning, Affordable Residential Cleaning is <strong>trustworthy</strong> and a pleasure to have in the house. After a decade, they still approach every visit with the same <strong>care and pride</strong> in their work. I recommend Affordable Residential Cleaning <strong>without hesitation</strong> to anyone looking for a <strong>dependable, thorough</strong>, and genuinely good team to care for their home. They're <strong>the real deal</strong>.
    </>,
  },
  {
    name: 'Liz Steiner',
    location: 'Sarasota, FL',
    quote: <>
      Affordable Residential Cleaning has been cleaning my home for over 15 years, and they are <strong>simply the best</strong>. They are incredibly <strong>trustworthy, dependable, and thorough</strong> — I <strong>never hesitate</strong> to have them clean while I'm away. It is no surprise their client base in the Isles has grown tremendously by <strong>word of mouth</strong>. <strong>Highly recommended</strong>, and their rates are <strong>very reasonable</strong>!
    </>,
  },
  {
    name: 'Faye Adkins',
    location: 'Sarasota, FL',
    quote: <>
      I can truthfully say I am <strong>very pleased</strong> with Affordable Residential Cleaning. What a <strong>great job</strong> they and their crew do on cleaning my home. They have been working for me for going on 2 years. <strong>Couldn't do without them.</strong>
    </>,
  },
  {
    name: 'Judy Drohlich',
    location: 'Sarasota, FL',
    quote: <>
      I have been using Affordable Residential Cleaning for almost a year now. They have been <strong>great in every way</strong>. The girls are <strong>very energetic</strong> and <strong>power through</strong> so you get your house back <strong>quickly and clean</strong>. I also have dogs and they are <strong>wonderful</strong> with them.
    </>,
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
      <style>{`.testimonial-quote strong { color: white; font-style: normal; }`}</style>
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
                <Text size="2" color="gray" className="testimonial-quote" style={{ lineHeight: 1.7, fontStyle: 'italic' }}>
                  "{t.quote}"
                </Text>
                <Flex direction="column" gap="0" style={{ marginTop: 'auto' }}>
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
