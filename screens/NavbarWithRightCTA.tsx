import React from 'react';
import { Box, Button, HStack, Menu, Image } from '@gluestack-ui/react';

import { MenuIcon } from 'lucide-react-native';
import { Link } from 'expo-router';

type NavbarButtonProps = {
  item: string;
  index: number;
};

const NavbarButton: React.FC<NavbarButtonProps> = ({ item, index }) => {
  return (
    <Link href={`/${item.toLowerCase()}`}>
      <Button
        px='$5'
        variant='link'
        size='sm'
        sx={{
          _text: {
            textDecorationLine: 'none',
            _light: {
              ':hover': {
                color: '$textDark100',
              },
            },
            _dark: {
              color: '$textLight200',
              ':hover': {
                color: '$textLight600',
              },
            },
          },
        }}
      >
        <Button.Text color='$textDark300' fontWeight='$medium'>
          {item}
        </Button.Text>
      </Button>
    </Link>
  );
};

const NavbarWithRightCta: React.FC = () => {
  const topMenuButtons = ['Pricing', 'Team', 'Blog'];

  return (
    <Box
      sx={{
        _dark: { bg: '$backgroundDark950' },
        shadowColor: '$gray600',
        shadowOpacity: '$20',
        shadowRadius: '$3',
        elevation: '$20',
      }}
      alignItems='center'
      justifyContent='center'
      bg='$backgroundLight950'
    >
      <HStack
        w='$full'
        maxWidth={1280}
        alignItems='center'
        justifyContent='space-between'
        px='$8'
        py='$4'
      >
        <HStack space='md' alignItems='center'>
          <Box w={220} px='$4' py='$3' rounded='$sm'>
            <Image
              aspectRatio={'8/1'}
              source={{
                uri: 'https://ui.gluestack.io/_next/image?url=%2Ficon%2Flogo%2Fdark-mode.svg&w=384&q=75',
              }}
            />
          </Box>

          <HStack display='none' sx={{ '@lg': { display: 'flex' } }}>
            {topMenuButtons?.map((item, index) => (
              <NavbarButton key={index} item={item} index={index} />
            ))}
          </HStack>
        </HStack>
        <HStack alignItems='center'>
          <HStack display='none' sx={{ '@lg': { display: 'flex' } }}>
            <Link href='/login' asChild>
              <Button variant='ghost' bg='transparent'>
                <Button.Text
                  sx={{
                    _dark: { color: '$textLight200' },
                  }}
                  color='$textDark200'
                  fontWeight='$medium'
                >
                  Sign in
                </Button.Text>
              </Button>
            </Link>
            <Link href='/login' asChild>
              <Button ml='$3'>
                <Button.Text fontWeight='$medium'>Sign up</Button.Text>
              </Button>
            </Link>
          </HStack>

          <Menu
            placement={'bottom'}
            sx={{
              '@lg': { display: 'none' },
            }}
            // eslint-disable-next-line react/no-unstable-nested-components
            trigger={(triggerProps: any) => {
              return (
                <Button
                  display='flex'
                  sx={{ '@lg': { display: 'none' } }}
                  action='secondary'
                  variant='outline'
                  borderColor='transparent'
                  {...triggerProps}
                >
                  <Button.Icon
                    as={MenuIcon}
                    sx={{
                      _dark: {
                        color: '$white',
                      },
                    }}
                  />
                </Button>
              );
            }}
          >
            <Menu.Item key='Pricing' textValue='Pricing'>
              <Menu.ItemLabel>Pricing</Menu.ItemLabel>
            </Menu.Item>
            <Menu.Item key='Resources' textValue='Resources'>
              <Menu.ItemLabel>Resources</Menu.ItemLabel>
            </Menu.Item>
            <Menu.Item key='Support' textValue='Support'>
              <Menu.ItemLabel>Support</Menu.ItemLabel>
            </Menu.Item>
          </Menu>
        </HStack>
      </HStack>
    </Box>
  );
};

export default NavbarWithRightCta;
