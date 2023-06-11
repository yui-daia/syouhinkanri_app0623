/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Delete(props) {
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
      {...getOverrideProps(overrides, "Delete")}
      {...rest}
    >
      <View
        width="150px"
        height="30px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="30px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,104,81,1)"
        {...getOverrideProps(overrides, "Rectangle 6")}
      ></View>
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
        top="20%"
        bottom="23.33%"
        left="39.33%"
        right="39.33%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="削除"
        {...getOverrideProps(overrides, "\u524A\u9664")}
      ></Text>
    </View>
  );
}
