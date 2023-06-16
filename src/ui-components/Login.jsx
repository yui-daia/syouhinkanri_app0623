/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Login(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="200px"
      height="70px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Login")}
      {...rest}
    >
      <View
        width="200px"
        height="70px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        border="3px SOLID rgba(28,173,228,1)"
        borderRadius="50px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(28,173,228,1)"
        {...getOverrideProps(overrides, "Rectangle 4")}
      ></View>
      <Text
        fontFamily="Ricty Diminished"
        fontSize="24px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="25.19999885559082px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="31.43%"
        bottom="30%"
        left="25.5%"
        right="25.5%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="ログイン"
        {...getOverrideProps(overrides, "\u30ED\u30B0\u30A4\u30F3")}
      ></Text>
    </View>
  );
}
