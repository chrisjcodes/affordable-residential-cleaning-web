import { Box, Container, Flex, Text, Separator } from '@radix-ui/themes'

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <Box style={{ backgroundColor: 'var(--gray-2)', borderTop: '1px solid var(--gray-4)' }}>
      <Container size="4" px={{ initial: '4', md: '6' }}>
        <Flex
          direction={{ initial: 'column', sm: 'row' }}
          align={{ initial: 'center', sm: 'center' }}
          justify="between"
          gap="4"
          py="6"
        >
          <Text weight="bold" size="2" style={{ color: 'var(--brand)' }}>
            Affordable Residential Cleaning
          </Text>
          <Text size="1" color="gray">
            © {currentYear} All rights reserved.
          </Text>
          <Flex gap="4">
            <Text size="2">
              <a href="tel:+19417800576" style={{ color: 'var(--gray-10)', textDecoration: 'none' }}>
                (941) 780-0576
              </a>
            </Text>
            <Text size="2">
              <a href="mailto:lizjcleans@gmail.com" style={{ color: 'var(--gray-10)', textDecoration: 'none' }}>
                lizjcleans@gmail.com
              </a>
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}
