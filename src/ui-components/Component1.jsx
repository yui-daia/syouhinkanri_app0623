/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function Component1(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(139,234,143,0.97)"
      {...getOverrideProps(overrides, "Component1")}
      {...rest}
    >
      <View
        width="360px"
        height="105px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "header")}
      >
        <View
          width="360px"
          height="105px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(139,234,143,0.97)"
          {...getOverrideProps(overrides, "logo2")}
        ></View>
        <Text
          fontFamily="Inter"
          fontSize="28px"
          fontWeight="900"
          color="rgba(0,0,0,1)"
          lineHeight="33.8863639831543px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="158px"
          height="46px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="23.81%"
          bottom="32.38%"
          left="16.94%"
          right="39.17%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="株式会社"
          {...getOverrideProps(overrides, "\u682A\u5F0F\u4F1A\u793E")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="40px"
          fontWeight="900"
          color="rgba(0,0,0,1)"
          lineHeight="48.409088134765625px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="120px"
          height="51px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="13.33%"
          bottom="38.1%"
          left="49.72%"
          right="16.94%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="大亜&#xA;"
          {...getOverrideProps(overrides, "\u5927\u4E9C")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="900"
          color="rgba(0,0,0,1)"
          lineHeight="24.204544067382812px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="216px"
          height="29px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="59.05%"
          bottom="13.33%"
          left="21.39%"
          right="18.61%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="◇◆カラー事業部◆◇"
          {...getOverrideProps(
            overrides,
            "\u25C7\u25C6\u30AB\u30E9\u30FC\u4E8B\u696D\u90E8\u25C6\u25C7"
          )}
        ></Text>
      </View>
    </Flex>
  );
}
