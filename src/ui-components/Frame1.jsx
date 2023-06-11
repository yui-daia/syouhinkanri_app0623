/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function Frame1(props) {
  const { home, overrides, ...rest } = props;
  return (
    <View
      width="300px"
      height="500px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Frame1")}
      {...rest}
    >
      <View
        width="205px"
        height="402px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="24px"
        left="26px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Component")}
      >
        <Image
          width="70.11%"
          height="56.22%"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="43.78%"
          left="25.37%"
          right="4.53%"
          padding="0px 0px 0px 0px"
          objectFit="contain"
          src={home?.image_url}
          {...getOverrideProps(overrides, "image")}
        ></Image>
        <Text
          fontFamily="Inter"
          fontSize="18px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="21.784090042114258px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="271px"
          height="26px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="56.22%"
          bottom="37.31%"
          left="-6.34%"
          right="-25.85%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={home?.name}
          {...getOverrideProps(overrides, "\u540D\u524D")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24.204544067382812px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="200px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="82.84%"
          bottom="11.19%"
          left="25.37%"
          right="-22.93%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={home?.bounty}
          {...getOverrideProps(overrides, "\u61F8\u8CDE\u91D1")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24.204544067382812px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="82px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="71.39%"
          bottom="22.64%"
          left="5.37%"
          right="54.63%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Bounty"
          {...getOverrideProps(overrides, "Bounty")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24.204544067382812px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="96px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="94.03%"
          bottom="0%"
          left="5.37%"
          right="47.8%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="birthday"
          {...getOverrideProps(overrides, "birthday")}
        ></Text>
      </View>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24.204544067382812px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="200px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="87.6%"
        bottom="7.6%"
        left="26%"
        right="7.33%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={home?.birthday}
        {...getOverrideProps(overrides, "\u8A95\u751F\u65E5")}
      ></Text>
    </View>
  );
}
