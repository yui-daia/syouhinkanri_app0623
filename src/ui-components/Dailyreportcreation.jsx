/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function Dailyreportcreation(props) {
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
      {...getOverrideProps(overrides, "Dailyreportcreation")}
      {...rest}
    >
      <Icon
        width="150px"
        height="30px"
        viewBox={{ minX: 0, minY: 0, width: 150, height: 30 }}
        paths={[
          {
            d: "M15 1L135 1L135 -1L15 -1L15 1ZM135 29L15 29L15 31L135 31L135 29ZM15 29C7.26802 29 1 22.732 1 15L-1 15C-1 23.8366 6.16345 31 15 31L15 29ZM149 15C149 22.732 142.732 29 135 29L135 31C143.837 31 151 23.8366 151 15L149 15ZM135 1C142.732 1 149 7.26801 149 15L151 15C151 6.16344 143.837 -1 135 -1L135 1ZM15 -1C6.16344 -1 -1 6.16344 -1 15L1 15C1 7.26801 7.26801 1 15 1L15 -1Z",
            stroke: "rgba(28,173,228,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
          {
            d: "M0 15C0 6.71573 6.71573 0 15 0L135 0C143.284 0 150 6.71573 150 15L150 15C150 23.2843 143.284 30 135 30L15 30C6.71573 30 0 23.2843 0 15L0 15Z",
            fill: "rgba(255,255,255,1)",
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
        color="rgba(0,0,0,1)"
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
        left="28.67%"
        right="28.67%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="日報作成"
        {...getOverrideProps(overrides, "\u65E5\u5831\u4F5C\u6210")}
      ></Text>
    </View>
  );
}
