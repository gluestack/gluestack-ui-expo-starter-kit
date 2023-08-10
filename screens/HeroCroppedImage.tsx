import React, { FC } from 'react';
import {
  Badge,
  Box,
  Button,
  Heading,
  Image,
  Text,
  VStack,
} from '@gluestack-ui/react';
import { Link } from 'expo-router';

const HeroCroppedImage: FC = () => {
  const handleBuyNow = () => {};

  const handleLearnMore = () => {};

  return (
    <VStack
      px='$4'
      py='$16'
      sx={{
        '@md': {
          px: '$8',
          py: '$24',
        },
        '@lg': {
          height: 780,
          justifyContent: 'center',
        },
        _dark: { bg: '$backgroundDark950' },
      }}
      bg='$backgroundLight0'
    >
      <VStack width='$full' maxWidth={1216} mx='auto'>
        <Badge variant='solid' size='md' rounded='$full' alignSelf='flex-start'>
          <Badge.Text textTransform='capitalize' px='$1'>
            New components available
          </Badge.Text>
        </Badge>
        <VStack
          mt='$4'
          space='md'
          sx={{
            '@md': {
              maxWidth: 576,
            },
            '@lg': {
              maxWidth: 448,
            },
          }}
        >
          <Heading
            size='3xl'
            fontWeight='$semibold'
            sx={{
              '@md': {
                fontSize: '$6xl',
                mb: '$2',
              },
            }}
          >
            Develop your app with remarkable speed
          </Heading>
          <Text
            size='lg'
            sx={{
              '@md': {
                fontSize: '$xl',
              },
            }}
          >
            Select from a vast collection of 210+ stunning and adaptable
            components, enabling you to construct your app in half the time.
          </Text>
        </VStack>

        <VStack
          mt='$8'
          mb='$16'
          sx={{
            '@md': {
              flexDirection: 'row',
              mt: '$12',
            },
            '@lg': {
              mb: 0,
            },
          }}
        >
          <Link href='/login' asChild>
            <Button size='lg' onPress={handleBuyNow}>
              <Button.Text>Buy Now</Button.Text>
            </Button>
          </Link>
          <Link href='/blog' asChild>
            <Button
              size='lg'
              variant='outline'
              mt='$3'
              onPress={handleLearnMore}
              sx={{
                '@md': {
                  mt: '$0',
                  ml: '$3',
                },
              }}
            >
              <Button.Text>Learn More</Button.Text>
            </Button>
          </Link>
        </VStack>
      </VStack>

      <VStack
        sx={{
          '@lg': {
            width: '50%',
            height: '$full',
            position: 'absolute',
            right: 0,
            top: 0,
          },
        }}
      >
        <Box
          width={0}
          height={0}
          sx={{
            '@lg': {
              backgroundColor: 'transparent',
              borderStyle: 'solid',
              borderRightWidth: 50,
              borderTopWidth: 780,
              zIndex: 1,
              borderTopColor: '$backgroundLight0',
              borderRightColor: 'transparent',
            },
            _dark: {
              borderTopColor: '$backgroundDark950',
            },
          }}
        />
        <Image
          height='$96'
          width='$full'
          sx={{
            '@lg': {
              width: '$full',
              height: '$full',
              position: 'absolute',
              right: 0,
              top: 0,
            },
          }}
          source={{
            uri: 'https://tinyurl.com/yeyjvptc',
          }}
        />
      </VStack>
    </VStack>
  );
};

export default HeroCroppedImage;
