import { useState } from 'react'
import { Box, Container, Flex, Grid, Heading, Text, TextField, TextArea, Button } from '@radix-ui/themes'

export default function Contact() {
  const [fields, setFields] = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  function handleChange(e) {
    setFields(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setFields({ name: '', phone: '', email: '', service: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

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
                Fill out the form and we'll get back to you by the next business day.
                Or reach us directly:
              </Text>
            </Flex>

            <Flex direction="column" gap="4">
              {[
                { label: 'Phone', value: '(941) 780-0576', href: 'tel:+19417800576' },
                { label: 'Email', value: 'lizjcleans@gmail.com', href: 'mailto:lizjcleans@gmail.com' },
                { label: 'Hours', value: 'Mon – Fri, 8am – 4pm', href: null },
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
            {status === 'success' ? (
              <Flex direction="column" align="center" justify="center" gap="3" style={{ minHeight: '300px' }}>
                <Text size="6">✓</Text>
                <Heading size="5">Message Sent!</Heading>
                <Text size="2" color="gray" align="center">
                  Thanks {fields.name || 'for reaching out'}! We'll get back to you by the next business day.
                </Text>
                <Button
                  variant="soft"
                  size="2"
                  style={{ cursor: 'pointer', marginTop: '8px' }}
                  onClick={() => setStatus('idle')}
                >
                  Send another message
                </Button>
              </Flex>
            ) : (
              <form onSubmit={handleSubmit}>
                <Flex direction="column" gap="4">
                  <Grid columns={{ initial: '1', sm: '2' }} gap="3">
                    <Flex direction="column" gap="1">
                      <Text size="2" weight="medium">Name</Text>
                      <TextField.Root name="name" placeholder="Your full name" required size="3" value={fields.name} onChange={handleChange} />
                    </Flex>
                    <Flex direction="column" gap="1">
                      <Text size="2" weight="medium">Phone</Text>
                      <TextField.Root name="phone" type="tel" placeholder="Your phone number" required size="3" value={fields.phone} onChange={handleChange} />
                    </Flex>
                  </Grid>
                  <Flex direction="column" gap="1">
                    <Flex align="center" gap="2">
                      <Text size="2" weight="medium">Email</Text>
                      <Text size="1" color="gray">(optional)</Text>
                    </Flex>
                    <TextField.Root name="email" type="email" placeholder="Your email address" size="3" value={fields.email} onChange={handleChange} />
                  </Flex>
                  <Flex direction="column" gap="1">
                    <Text size="2" weight="medium">Service Needed</Text>
                    <TextField.Root
                      name="service"
                      placeholder="Which service are you interested in?"
                      size="3"
                      value={fields.service}
                      onChange={handleChange}
                    />
                  </Flex>
                  <Flex direction="column" gap="1">
                    <Text size="2" weight="medium">Message</Text>
                    <TextArea
                      name="message"
                      placeholder="Tell us about your home and when you'd like us to come by"
                      rows={4}
                      size="3"
                      value={fields.message}
                      onChange={handleChange}
                    />
                  </Flex>
                  {status === 'error' && (
                    <Text size="2" style={{ color: 'var(--brand)' }}>
                      Something went wrong — please call or email us directly.
                    </Text>
                  )}
                  <Button
                    type="submit"
                    size="3"
                    disabled={status === 'sending'}
                    style={{ backgroundColor: 'var(--brand)', cursor: 'pointer', color: 'white', opacity: status === 'sending' ? 0.7 : 1 }}
                  >
                    {status === 'sending' ? 'Sending…' : 'Send Message'}
                  </Button>
                </Flex>
              </form>
            )}
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
