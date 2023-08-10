import React, { useState } from 'react';
import {
  Box,
  Button,
  HStack,
  Heading,
  Icon,
  Text,
  VStack,
  Switch,
  CheckIcon,
  Badge,
} from '@gluestack-ui/react';
import { ScrollView } from 'react-native';
import { XIcon } from 'lucide-react-native';

type PricingCard = {
  isFree?: boolean;
  name: string;
  price: string;
  description: string;
  ctaText: string;
  isBilledMonthly?: boolean;
  pricingDescription?: string;
  features: {
    list: { icon: any; name: string }[];
  };
};

const pricingCardData = [
  {
    name: 'Free',
    price: '$0',
    description: 'Lorem sit amet consectetur adipisicing elit.',
    ctaText: 'Get Started',
    features: {
      list: [
        {
          icon: CheckIcon,
          name: '100+ Components',
        },
        {
          icon: CheckIcon,
          name: 'Lifetime access',
        },
        {
          icon: CheckIcon,
          name: 'Universal',
        },
        {
          icon: XIcon,
          name: 'Development support',
        },
      ],
    },
  },
  {
    name: 'Agency',
    price: '$19',
    description: 'Lorem sit amet consectetur adipisicing elit.',
    ctaText: 'Get Started',
    isBilledMonthly: true,
    pricingDescription: '$149 billed annually',
    features: {
      list: [
        {
          icon: CheckIcon,
          name: '200+ Components',
        },
        {
          icon: CheckIcon,
          name: 'Lifetime access',
        },
        {
          icon: CheckIcon,
          name: 'Free updates',
        },
        {
          icon: XIcon,
          name: 'Development support',
        },
        {
          icon: XIcon,
          name: 'Unlimited customization',
        },
      ],
    },
  },
  {
    name: 'Enterprise',
    price: '$29',
    description: 'Lorem sit amet consectetur adipisicing elit.',
    ctaText: 'Get Started',
    isBilledMonthly: true,
    pricingDescription: '$249 billed annually',
    features: {
      list: [
        {
          icon: CheckIcon,
          name: '200+ Components',
        },
        {
          icon: CheckIcon,
          name: 'Lifetime access',
        },
        {
          icon: CheckIcon,
          name: 'Free updates',
        },
        {
          icon: CheckIcon,
          name: 'Development support',
        },
        {
          icon: CheckIcon,
          name: 'Universal',
        },
        {
          icon: CheckIcon,
          name: 'Top Quality',
        },
      ],
    },
  },
];

const PricingSingleCard = ({ data }: { data: PricingCard }) => {
  const handlePricingCTA = () => {};
  return (
    <VStack
      maxWidth={480}
      w='$full'
      bg={data.isBilledMonthly ? '$gray700' : '$primary500'}
      my='$4'
      sx={{
        _dark: {
          bg: data.isBilledMonthly ? '$backgroundDark950' : '$primary500',
        },
        '@lg': {
          mx: '$4',
          flex: 1,
        },
      }}
      px='$6'
      py='$8'
      rounded='$xl'
      justifyContent='space-between'
    >
      {data.isBilledMonthly && (
        <Badge
          position='absolute'
          top={20}
          right={20}
          rounded='$full'
          py='$1'
          px='$3'
          size='sm'
        >
          <Badge.Text>Billed monthly</Badge.Text>
        </Badge>
      )}
      <VStack>
        <Heading fontWeight='$bold' color='$white'>
          {data.name}
        </Heading>
        <HStack alignItems='center' space='md' my='$4'>
          <Heading size='5xl' fontWeight='$extrabold' color='$white'>
            {data.price}
          </Heading>

          <Box
            width={data.isBilledMonthly ? '$0.5' : '$0'}
            h={50}
            bgColor='$white'
            transform={[{ rotate: '15deg' }]}
            opacity={0.5}
          />

          {data.isBilledMonthly && (
            <Text color='$white' fontWeight='$extrabold' maxWidth={60}>
              per month
            </Text>
          )}
        </HStack>

        <Text fontWeight='$light' color='$white'>
          {data.isBilledMonthly ? data.pricingDescription : ' '}
        </Text>
        <VStack mt='$6'>
          <Text fontSize='$lg' fontWeight='$semibold' color='$white' mb='$6'>
            {data.description}
          </Text>
          <VStack space='md'>
            {data.features.list.map((item, i) => (
              <HStack key={i} alignItems='center' space='sm'>
                <Icon size='sm' as={item.icon} color='$white' />
                <Text color='$white'>{item.name}</Text>
              </HStack>
            ))}
          </VStack>
        </VStack>
      </VStack>
      <Button
        size='xl'
        onPress={handlePricingCTA}
        mt='$10'
        bgColor={data.isBilledMonthly ? '$primary500' : '$blueGray100'}
        sx={{
          ':hover': {
            bgColor: data.isBilledMonthly ? '$primary600' : '$blueGray200',
          },
        }}
      >
        <Button.Text color={data.isBilledMonthly ? '$white' : '$textLight700'}>
          {data.ctaText}
        </Button.Text>
      </Button>
    </VStack>
  );
};

const TogglePlan = ({
  isMonthly,
  setIsMonthly,
}: {
  isMonthly: boolean;
  setIsMonthly: (value: any) => void;
}) => {
  const handlePlanTypeChange = () => {
    setIsMonthly((prev: boolean) => !prev);
  };

  return (
    <HStack alignItems='center' space='md'>
      <Text
        fontSize='$lg'
        fontWeight='$bold'
        color={!isMonthly ? '$primary500' : '$textLight700'}
        sx={{
          _dark: {
            color: isMonthly ? '$textLight700' : '$primary500',
          },
        }}
      >
        Monthly
      </Text>
      <Switch isChecked={isMonthly} onValueChange={handlePlanTypeChange} />
      <Text
        fontSize='$lg'
        fontWeight='$bold'
        color={isMonthly ? '$primary500' : '$textLight700'}
        sx={{
          _dark: {
            color: !isMonthly ? '$textLight700' : '$primary500',
          },
        }}
      >
        Yearly
      </Text>
    </HStack>
  );
};

const PricingHeaderContent = () => {
  return (
    <VStack
      space='2xl'
      alignItems='center'
      sx={{
        '@lg': {
          alignItems: 'flex-start',
        },
      }}
    >
      <Heading
        size='4xl'
        fontWeight='$extrabold'
        textAlign='center'
        color='$primary500'
        sx={{
          '@md': {
            fontSize: '$6xl',
            textAlign: 'justify',
          },
        }}
      >
        Ready to Get Started?
      </Heading>
      <Text
        fontSize='$lg'
        fontWeight='$light'
        textAlign='center'
        maxWidth={480}
        sx={{
          '@lg': {
            textAlign: 'justify',
            fontSize: '$xl',
          },
        }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quasi
        aliquam soluta.
      </Text>
    </VStack>
  );
};

const PricingMultiColored = () => {
  const [isMonthly, setIsMonthly] = useState<boolean>(false);

  return (
    <ScrollView>
      <VStack
        maxWidth='90%'
        w='$full'
        mx='auto'
        my='$16'
        p='$8'
        sx={{
          '@md': {
            px: '$8',
            py: '$12',
          },
        }}
      >
        <VStack
          alignItems='center'
          sx={{
            '@lg': {
              alignItems: 'flex-start',
              mx: '$4',
            },
          }}
          space='2xl'
        >
          <PricingHeaderContent />
          <TogglePlan isMonthly={isMonthly} setIsMonthly={setIsMonthly} />
        </VStack>
        <VStack
          alignItems='center'
          mt='$10'
          space='xl'
          sx={{
            '@lg': {
              flexDirection: 'row',
              alignItems: 'stretch',
            },
          }}
        >
          {pricingCardData.map((data) => (
            <PricingSingleCard data={data} />
          ))}
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default PricingMultiColored;
