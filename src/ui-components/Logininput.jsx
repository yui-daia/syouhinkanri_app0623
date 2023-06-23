/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Logininput(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="173px"
      height="24px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Logininput")}
      {...rest}
    >
      <View
        width="97px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="43.93%"
        right="0%"
        border="1px SOLID rgba(0,0,0,0.27)"
        borderRadius="5px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(245,245,245,1)"
        {...getOverrideProps(overrides, "log in38")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="14.522727012634277px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="67px"
        height="17px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="29.17%"
        bottom="0%"
        left="0%"
        right="61.27%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="ログインID"
        {...getOverrideProps(overrides, "log in36")}
      ></Text>
    </View>
  );
}
