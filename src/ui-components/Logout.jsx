/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function Logout(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="150px"
      height="30px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Logout")}
      {...rest}
    >
      <Icon
        width="150px"
        height="30px"
        viewBox={{ minX: 0, minY: 0, width: 150, height: 30 }}
        paths={[
          {
            d: "M0 15C0 6.71573 6.71573 0 15 0L135 0C143.284 0 150 6.71573 150 15L150 15C150 23.2843 143.284 30 135 30L15 30C6.71573 30 0 23.2843 0 15L0 15Z",
            fill: "rgba(28,173,228,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "Rectangle 5")}
      ></Icon>
      <Text
        fontFamily="Ricty Diminished"
        fontSize="16px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="16.799999237060547px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="23.33%"
        bottom="20%"
        left="23.33%"
        right="23.33%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="ログアウト"
        {...getOverrideProps(overrides, "\u30ED\u30B0\u30A2\u30A6\u30C8")}
      ></Text>
    </View>
  );
}
