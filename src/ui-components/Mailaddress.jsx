/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Mailaddress(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="801px"
      height="70px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Mailaddress")}
      {...rest}
    >
      <Text
        fontFamily="Ricty Diminished"
        fontSize="40px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="42px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="20%"
        bottom="20%"
        left="0%"
        right="65.04%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="メールアドレス"
        {...getOverrideProps(
          overrides,
          "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9"
        )}
      ></Text>
      <View
        width="500px"
        height="70px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="37.58%"
        right="0%"
        border="3px SOLID rgba(28,173,228,1)"
        borderRadius="30px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(28,173,228,0.1)"
        {...getOverrideProps(overrides, "Rectangle 2")}
      ></View>
      <Text
        fontFamily="Ricty Diminished"
        fontSize="40px"
        fontWeight="400"
        color="rgba(255,255,255,0.1)"
        lineHeight="42px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="400px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="20%"
        bottom="20%"
        left="43.82%"
        right="6.24%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="xyu.saku@gmaiil.com"
        {...getOverrideProps(overrides, "xyu.saku@gmaiil.com")}
      ></Text>
    </View>
  );
}
