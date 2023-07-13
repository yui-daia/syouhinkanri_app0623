/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Datakoushincomment(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="77px"
      height="9.06px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Datakoushincomment")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="6.039215087890625px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="7.3088226318359375px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="77px"
        height="9.06px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="更新日時：2023年○月○日"
        {...getOverrideProps(overrides, "data")}
      ></Text>
    </View>
  );
}
