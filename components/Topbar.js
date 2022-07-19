import { Flex, Heading, Avatar } from "@chakra-ui/react"

export default function Topbar({email}) {
  return (
    <Flex
      bg="#0078AA"
      h="81px" w="100%"
      align="center"
      p={5}
    >
      <Avatar src="" marginEnd={3} />
      <Heading size="md" color="white">{email}</Heading>
    </Flex>
  )
}