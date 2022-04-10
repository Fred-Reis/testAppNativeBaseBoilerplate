import React, {useState} from 'react';
import {
  Text,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  VStack,
  Modal,
  Button,
  useColorModeValue,
  Avatar,
  Image,
  AspectRatio,
  Stack,
} from 'native-base';

// Color Switch Component
function ToggleDarkMode() {
  const {colorMode, toggleColorMode} = useColorMode();

  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === 'light'}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === 'light' ? 'switch to dark mode' : 'switch to light mode'
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}

export const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const colorScheme = useColorModeValue('teal', 'amber');
  const variant = useColorModeValue('solid', 'outline');

  return (
    <Center
      _dark={{bg: 'blueGray.900'}}
      _light={{bg: 'blueGray.50'}}
      px={4}
      flex={1}>
      <VStack space={10} alignItems="center">
        <Heading size="lg">NativeBase Test App</Heading>

        <ToggleDarkMode />
        <Button
          colorScheme={colorScheme}
          variant={variant}
          onPress={() => setShowModal(true)}>
          Open User modal
        </Button>

        <Modal
          animationPreset="slide"
          isOpen={showModal}
          onClose={() => setShowModal(false)}>
          <Modal.Content maxWidth="400px">
            <Modal.CloseButton />
            <Modal.Header>
              <Avatar
                alignSelf="center"
                size="xl"
                bg="green.500"
                source={{
                  uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                }}>
                AJ
              </Avatar>
            </Modal.Header>
            <Modal.Body p={0}>
              <AspectRatio w="100%" ratio={16 / 9}>
                <Image
                  source={{
                    uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
                  }}
                  alt="image"
                />
              </AspectRatio>
              <Stack p="4" space={3}>
                <Stack space={2}>
                  <Heading size="md" ml="-1">
                    The Garden City
                  </Heading>
                  <Text
                    fontSize="xs"
                    _light={{
                      color: 'violet.500',
                    }}
                    _dark={{
                      color: 'violet.400',
                    }}
                    fontWeight="500"
                    ml="-0.5"
                    mt="-1">
                    The Silicon Valley of India.
                  </Text>
                </Stack>
                <Text fontWeight="400">
                  Bengaluru (also called Bangalore) is the center of India's
                  high-tech industry. The city is also known for its parks and
                  nightlife.
                </Text>
                <HStack
                  alignItems="center"
                  space={4}
                  justifyContent="space-between">
                  <HStack alignItems="center">
                    <Text
                      color="coolGray.600"
                      _dark={{
                        color: 'warmGray.200',
                      }}
                      fontWeight="400">
                      6 mins ago
                    </Text>
                  </HStack>
                </HStack>
              </Stack>
            </Modal.Body>
            <Modal.Footer>
              <Button.Group>
                <Button
                  width="100%"
                  variant="ghost"
                  colorScheme="blueGray"
                  onPress={() => {
                    setShowModal(false);
                  }}>
                  Close
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </VStack>
    </Center>
  );
};
