import React from 'react';

import {
  Avatar,
  Button,
  HStack,
  Heading,
  Icon,
  Link,
  Text,
  VStack,
} from '@gluestack-ui/react';
import { ScrollView } from 'react-native';
import { TwitterIcon } from 'lucide-react-native';

type User = {
  id: number;
  name: string;
  designation: string;
  profilePic: string;
  message: string;
};

type TeamListProps = {
  user: User;
};

const TEAM_DATA: User[] = [
  {
    id: 0,
    name: 'John Doe',
    designation: 'Co-Founder / CEO',
    profilePic:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    message:
      'I am passionate about leading our team towards success and fostering a culture of innovation.',
  },
  {
    id: 1,
    name: 'Jane Smith',
    designation: 'Co-Founder / CEO',
    profilePic:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80',
    message:
      'I believe in empowering our team to reach their full potential for remarkable results.',
  },
  {
    id: 2,
    name: 'David Johnson',
    designation: 'Marketing Manager',
    profilePic:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    message:
      'I create compelling marketing strategies that resonate with our target audience.',
  },
  {
    id: 3,
    name: 'Sarah Williams',
    designation: 'Manager, Business Relations',
    profilePic:
      'https://images.unsplash.com/photo-1526510747491-58f928ec870f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    message:
      'Building strong relationships with our partners for driving mutual growth and success.',
  },
  {
    id: 4,
    name: 'Michael Brown',
    designation: 'Chief Operating Officer',
    profilePic:
      'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    message:
      'I am dedicated to optimizing and ensuring seamless execution of our business strategies.',
  },
  {
    id: 5,
    name: 'Emily Davis',
    designation: 'Head of Human Resources',
    profilePic:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    message:
      'My mission is to foster a positive and inclusive work environment for our employees growth.',
  },
];

const TeamList: React.FC<TeamListProps> = ({ user }) => {
  return (
    <VStack
      space='md'
      w='$full'
      p='$2'
      my='$2'
      sx={{
        '@md': {
          flexBasis: '$1/2',
          my: '$5',
        },
        '@lg': { flexBasis: '$1/3' },
      }}
    >
      <VStack
        space='md'
        p='$6'
        bg='$backgroundLight0'
        alignItems='center'
        justifyContent='center'
        sx={{
          '@md': { mx: '$2' },
          _dark: { bg: '$backgroundDark950' },
          shadowColor: '$gray600',
          shadowOpacity: '$10',
          shadowRadius: '$1',
          elevation: '$20',
        }}
        flexGrow={1}
        rounded='$md'
      >
        <Avatar w='$20' h='$20'>
          <Avatar.FallbackText sx={{ '@lg': { fontSize: '$4xl' } }}>
            {user.name}
          </Avatar.FallbackText>
          <Avatar.Image source={{ uri: user.profilePic }} />
        </Avatar>
        <VStack space='md'>
          <VStack>
            <Text
              size='xl'
              textAlign='center'
              fontWeight='$medium'
              sx={{ '@md': { fontWeight: '$normal' } }}
            >
              {user.name}
            </Text>
            <Text
              color='$primary500'
              size='lg'
              textAlign='center'
              fontWeight='$light'
            >
              {user.designation}
            </Text>
          </VStack>

          <Text size='md' fontWeight='$light' textAlign='center'>
            {user.message}
          </Text>

          <HStack justifyContent='center' space='md'>
            <Link href=''>
              <Icon
                as={TwitterIcon}
                sx={{
                  color: '$backgroundLight600',
                }}
                fill='currentColor'
                size={20}
                width={20}
                height={20}
              />
            </Link>
          </HStack>
        </VStack>
      </VStack>
    </VStack>
  );
};

const TeamWithCard: React.FC = () => {
  return (
    <ScrollView>
      <VStack
        width='$full'
        p='$8'
        bg='$backgroundLight50'
        sx={{
          '@md': { py: '$24', px: '$16' },
          _dark: { bg: '$backgroundDark900' },
        }}
      >
        <VStack w='$full' alignItems='center' space='md' p='$3'>
          <Text color='$primary500' fontWeight='semibold'>
            We're hiring
          </Text>
          <Heading size='3xl' fontWeight='$normal'>
            Meet our team
          </Heading>

          <Text
            size='xl'
            textAlign='center'
            sx={{
              '@md': {
                maxWidth: '$3/4',
              },
            }}
            letterSpacing='$xl'
          >
            Sweet toffee fudge atop rich nougat, nestled in a crumbly biscuit
            shell.
          </Text>
        </VStack>
        <HStack
          flexDirection='column-reverse'
          mt='$4'
          sx={{
            '@md': {
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            },
          }}
        >
          <Button variant='outline' sx={{ '@md': { marginRight: '$2' } }}>
            <Button.Text>Contact us</Button.Text>
          </Button>
          <Button mb='$2' sx={{ '@md': { mb: '$0' } }}>
            <Button.Text>Join our team</Button.Text>
          </Button>
        </HStack>

        <VStack
          alignItems='center'
          my='$8'
          width='$full'
          sx={{
            '@md': {
              flexDirection: 'row',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            },
          }}
        >
          {TEAM_DATA.map((user) => (
            <TeamList key={user.id} user={user} />
          ))}
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default TeamWithCard;
