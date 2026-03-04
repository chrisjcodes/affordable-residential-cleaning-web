import teamPhoto from '../assets/team.png'
import { Box, Container, Flex, Heading, Text } from '@radix-ui/themes'

export default function About() {
  return (
    <Box id="about" style={{ backgroundColor: 'var(--gray-2)', paddingTop: '80px', paddingBottom: '80px' }}>
      <Container size="3" px={{ initial: '4', md: '6' }}>
        <Flex
          direction={{ initial: 'column', md: 'row' }}
          align="stretch"
          gap={{ initial: '8', md: '9' }}
        >
          {/* Team photo */}
          <Box
            style={{
              flexShrink: 0,
              flexBasis: '45%',
              minHeight: '320px',
              borderRadius: 'var(--radius-4)',
              overflow: 'hidden',
            }}
          >
            <img
              src={teamPhoto}
              alt="Affordable Residential Cleaning team"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </Box>

          {/* Text content */}
          <Flex direction="column" gap="4" style={{ flex: 1 }}>
            <Text
              size="2"
              weight="medium"
              style={{ color: 'var(--brand)', letterSpacing: '0.08em', textTransform: 'uppercase' }}
            >
              About Us
            </Text>
            <Heading size={{ initial: '6', md: '7' }}>
              Cleaning You Can Count On
            </Heading>
            <Text size={{ initial: '2', md: '3' }} color="gray" style={{ lineHeight: 1.7 }}>
              We started Affordable Residential Cleaning with one simple belief: every home
              deserves to be clean, and every family deserves honest, dependable service without
              breaking the bank.
            </Text>
            <Text size={{ initial: '2', md: '3' }} color="gray" style={{ lineHeight: 1.7 }}>
              Our team is bonded, background-checked, and trained to deliver consistent
              results on every visit. We show up on time — every time.
            </Text>
            <Flex justify="between" mt="4">
              <Flex direction="column" gap="1">
                <Heading size="7" style={{ color: 'var(--brand)' }}>250+</Heading>
                <Text size="2" color="gray">Happy Clients</Text>
              </Flex>
              <Flex direction="column" gap="1">
                <Heading size="7" style={{ color: 'var(--brand)' }}>5★</Heading>
                <Text size="2" color="gray">Average Rating</Text>
              </Flex>
              <Flex direction="column" gap="1">
                <Heading size="7" style={{ color: 'var(--brand)' }}>27+</Heading>
                <Text size="2" color="gray">Years in Business</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}
