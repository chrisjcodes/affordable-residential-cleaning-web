import { Box, Container, Flex, Grid, Heading, Text, TextField, TextArea, Button } from '@radix-ui/themes'

// Replace with your Formspree endpoint or Netlify Forms to receive submissions on static hosting
const FORM_ACTION = 'mailto:hello@example.com'

export default function Contact() {
  return (
    <Box
      id="contact"
      style={{ backgroundColor: 'var(--gray-2)', paddingTop: '80px', paddingBottom: '80px' }}
    >
      <Container size="3" px={{ initial: '4', md: '6' }}>
        <Flex
          direction={{ initial: 'column', md: 'row' }}
          gap={{ initial: '8', md: '9' }}
          align="start"
        >
          {/* Contact info column */}
          <Flex direction="column" gap="6" style={{ flex: '0 0 auto', width: '100%', maxWidth: '340px' }}>
            <Flex direction="column" gap="3">
              <Text
                size="2"
                weight="medium"
                style={{ color: 'var(--brand)', letterSpacing: '0.08em', textTransform: 'uppercase' }}
              >
                Get in Touch
              </Text>
              <Heading size={{ initial: '6', md: '7' }}>
                Schedule a Free Estimate
              </Heading>
              <Text size="2" color="gray" style={{ lineHeight: 1.6 }}>
                Fill out the form and we'll get back to you within 24 hours.
                Or reach us directly:
              </Text>
            </Flex>

            <Flex direction="column" gap="4">
              {[
                { label: 'Phone', value: '(555) 555-0100', href: 'tel:+15555550100' },
                { label: 'Email', value: 'hello@example.com', href: 'mailto:hello@example.com' },
                { label: 'Hours', value: 'Mon – Sat, 8am – 6pm', href: null },
              ].map(({ label, value, href }) => (
                <Box
                  key={label}
                  style={{ borderLeft: '3px solid var(--brand)', paddingLeft: '12px' }}
                >
                  <Text size="1" color="gray" style={{ display: 'block' }}>{label}</Text>
                  <Text size="2" weight="medium">
                    {href ? (
                      <a href={href} style={{ color: 'inherit', textDecoration: 'none' }}>{value}</a>
                    ) : value}
                  </Text>
                </Box>
              ))}
            </Flex>
          </Flex>

          {/* Form column */}
          <Box
            style={{
              flex: 1,
              width: '100%',
              backgroundColor: 'var(--gray-3)',
              borderRadius: 'var(--radius-4)',
              padding: '32px',
            }}
          >
            <form action={FORM_ACTION} method="POST">
              <Flex direction="column" gap="4">
                <Grid columns={{ initial: '1', sm: '2' }} gap="3">
                  <Flex direction="column" gap="1">
                    <Text size="2" weight="medium">Name</Text>
                    <TextField.Root name="name" placeholder="Jane Smith" required size="3" />
                  </Flex>
                  <Flex direction="column" gap="1">
                    <Text size="2" weight="medium">Phone</Text>
                    <TextField.Root name="phone" type="tel" placeholder="(555) 000-0000" size="3" />
                  </Flex>
                </Grid>
                <Flex direction="column" gap="1">
                  <Text size="2" weight="medium">Email</Text>
                  <TextField.Root name="email" type="email" placeholder="jane@example.com" required size="3" />
                </Flex>
                <Flex direction="column" gap="1">
                  <Text size="2" weight="medium">Service Needed</Text>
                  <TextField.Root
                    name="service"
                    placeholder="e.g. Standard clean, deep clean, move-out…"
                    size="3"
                  />
                </Flex>
                <Flex direction="column" gap="1">
                  <Text size="2" weight="medium">Message</Text>
                  <TextArea
                    name="message"
                    placeholder="Tell us about your home and when you'd like service…"
                    rows={4}
                    size="3"
                  />
                </Flex>
                <Button
                  type="submit"
                  size="3"
                  style={{ backgroundColor: 'var(--brand)', cursor: 'pointer', color: 'white' }}
                >
                  Send Message
                </Button>
              </Flex>
            </form>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
