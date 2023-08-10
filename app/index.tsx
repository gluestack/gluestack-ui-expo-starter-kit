import React from 'react';
import HeroCroppedImage from '../screens/HeroCroppedImage';
import NavbarWithRightCta from '../screens/NavbarWithRightCTA';
import FeatureThreeColumnsCentered from '../screens/FeatureThreeColumnedCenter';
import { ScrollView } from 'react-native';
import NewsletterFromInline from '../screens/NewsletterFormInline';

function Hero() {
  return (
    <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
      <NavbarWithRightCta />
      <HeroCroppedImage />
      <FeatureThreeColumnsCentered />
      <NewsletterFromInline />
    </ScrollView>
  );
}

export default Hero;
