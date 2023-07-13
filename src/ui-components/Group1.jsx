/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, View } from "@aws-amplify/ui-react";
export default function Group1(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="360px"
      height="105px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Group1")}
      {...rest}
    >
      <Flex
        width="unset"
        height="unset"
        {...getOverrideProps(overrides, "Component 1")}
      ></Flex>
    </View>
  );
}
